const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

const authorize = function(req, res, next) {
  // req.token = {userId: 1};
  // return next();
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;
    next();
  });
};

router.get('/follows', authorize, (req,res,next) => {
  const { userId } = req.token;
  knex('users_follows')
    .innerJoin('users', 'users.id', 'users_follows.follow_id')
    .where('users_follows.user_id', userId)
    .then((rows) => {
      if(!rows) {
        return next(boom.create(400, 'Follow failed.'));
      }
      const camelRow = camelizeKeys(rows);

      for (let i=0; i < camelRow.length; i++) {
        delete camelRow[i].hashedPassword;
      }

      res.send(camelRow);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/follows', authorize, (req, res, next) => {
  const { userId } = req.token;
  const newFollow = { userId: userId, followId: req.body.followId}

  knex('users_follows')
  .insert(decamelizeKeys(newFollow), '*')
  .then((row) => {
    if (!row) {
      return next(boom.create(404, 'User not found.'));
    }

    res.send(camelizeKeys(row));
  })
  .catch((err) => {
    next(err);
  });
});

router.delete('/follows/:followId', authorize, (req, res, next) => {
  const { userId } = req.token;
  const followId = req.params.followId;
  const follow = {};

  knex('users_follows')
  .where('user_id', userId)
  .andWhere('follow_id', followId)
  .then((row) => {
    if (!row) {
      return next(boom.create(404, 'Follow not found.'));
    }

    follow.userId = userId;
    follow.followId = followId;

    return knex('users_follows')
    .del()
    .where('user_id', userId)
    .andWhere('follow_id', followId)
  })
  .then(() => {
    res.send(camelizeKeys(follow))
  })
  .catch((err) => {
    next(err);
  });

});

module.exports = router;

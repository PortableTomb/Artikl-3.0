const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const jwt = require('jsonwebtoken');
const validations = require('../validations/users');

const router = express.Router();

const authorize = function(req, res, next) {
  req.token = {userId: 1};
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;
    next();
  });
};

router.get('/users', authorize, (_req, res, next) => {
  knex('users')
    .orderBy('id')
    .then((rows) => {
      const comments = camelizeKeys(rows);

      res.send(comments);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/username', authorize, (req, res, next) => {
  const { userId } = req.token;
  const username = req.body.username.searchText;

  knex('users')
    .where({username: username})
    .then((row) => {

      const camelRow = camelizeKeys(row[0]);
      const user = {
        username: camelRow.username,
        userId: camelRow.id
      }

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/users', ev(validations.post), (req, res, next) => {
  const { username, email, password } = req.body;

  knex('users')
    .where('email', email)
    .then((row) => {
      if (row.length) {
        return next(boom.create(400, 'Invalid username, email or password.'));
      }
    });

  bcrypt.hash(password, 12)
    .then((hashedPassword) => {
      const insertUser = { username, email, hashedPassword };

      return knex('users').insert(decamelizeKeys(insertUser), '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

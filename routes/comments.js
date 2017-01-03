const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const { decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authorize = function(req, res, next) {
  req.token = {userId: 1};
  return next();
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;
    next();
  });
};


router.get('/comments', authorize, (_req, res, next) => {
  knex('users_comments')
    .orderBy('id')
    .then((rows) => {
      const comments = camelizeKeys(rows);

      res.send(comments);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/comments/:post_id', authorize, (req, res, next) => {
  const id = req.params.id;
  // const postId = req.params.post_id;
  knex('users_comments')
    .select('post_id', 'comment_content')
    .orderBy('post_id')
    .then((rows) => {
      const comments = camelizeKeys(rows);

      res.send(comments);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/comments', authorize, (req, res, next) => {
  const { postId, comment } = req.body;
  const userId = req.token.userId;
  const insertComment = { userId, postId, commentContent: comment };
    knex('users_comments')
    .orderBy('id')
    .insert(decamelizeKeys(insertComment), '*')
    .then((rows) => {
      const comment = camelizeKeys(rows[0]);

      res.send(comment);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });

});

router.delete('/comments/:id', authorize, (req, res, next) => {
  let post;

  knex('users_comments')
  .where('id', req.params.id)
    // .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      comment = camelizeKeys(row);
      return knex('users_comments')
        .del()
        .where('id', req.params.id);
    })
    .then(() => {
      delete comment.id;
      res.send(comment);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;

const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/comments', (_req, res, next) => {
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

module.exports = router;

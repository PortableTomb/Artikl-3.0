const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const { decamelizeKeys } = require('humps');

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

router.post('/comments', function(req, res, next){
  const { user_id, post_id, comment_content  } = req.body;
  const insertComment = { user_id, post_id, comment_content };
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

module.exports = router;

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const { decamelizeKeys } = require('humps');

const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;
    next();
  });
};



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

router.delete('/comments/:id', (req, res, next) => {
  let post;

  knex('users_comments')
  .where('id', req.params.id)
    .first()
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

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const jwt = require('jsonwebtoken');
const validations = require('../validations/users');

const router = express.Router();

router.post('/users', (req, res, next) => {
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

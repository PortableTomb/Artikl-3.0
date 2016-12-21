'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

const users = require('./routes/users');
const posts = require('./routes/posts');
const follows = require('./routes/follows');
const comments = require('./routes/comments');
const token = require('./routes/token');
app.use(users);
app.use(posts);
app.use(follows);
app.use(comments);
app.use(token);



// Expose public directory to client
app.use(express.static(path.join(__dirname, 'public')));

// Any other pages refer to index.html
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;

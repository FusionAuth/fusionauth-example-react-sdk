const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');

const router = express.Router();

router.get('/', (req, res) => {
  console.log("clearing token cookies");
  cookie.setSecure(res, 'access_token', '', 0);
  cookie.setSecure(res, 'refresh_token', '', 0);
  res.sendStatus(204);
});

module.exports = router;

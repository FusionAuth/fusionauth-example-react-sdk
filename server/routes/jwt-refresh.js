const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');

const router = express.Router();

router.post('/', (req, res) => {
    if (req.cookies['access_token']) {
        request(
            {
              method: 'POST',
              uri: `${config.fusionAuthBaseUrl}/api/jwt/refresh`,
              json: true,
              body: {
                'refreshToken': req.cookies['refresh_token'],
                'token': req.cookies['access_token'],
              },
              headers: {
                'Content-Type': 'application/json'
              }
            },

            (error, response, body) => {
              if (!body.fieldErrors) {
                cookie.setSecure(res, 'access_token', body.token);
                cookie.setSecure(res, 'refresh_token', body.refreshToken);
                res.sendStatus(204);
              } else {
                res.sendStatus(503);
              }
            }
        );
    }
});

module.exports = router;
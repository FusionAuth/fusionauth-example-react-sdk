const express = require('express');
const request = require('request');
const config = require('../config.js');

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
                res.cookie('access_token', body.token)
                res.cookie('refresh_token', body.refreshToken)
              }
            }
        );
    }
});

module.exports = router;
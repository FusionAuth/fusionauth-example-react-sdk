const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');

const router = express.Router();

router.post('/', (req, res) => {
    if (req.cookies['refresh_token']) {
        request(
            {
              method: 'POST',
              uri: `${config.fusionAuthBaseUrl}/oauth2/token`,
              form: {
                'client_id': config.clientID,
                'client_secret': config.clientSecret,
                'grant_type': 'refresh_token',
                'refresh_token': req.cookies['refresh_token'],
                'access_token': req.cookies['access_token'],
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            },

            (error, response, body) => {
              const { access_token, id_token, refresh_token, expires_in } = JSON.parse(body);
              if (access_token && refresh_token) {

                cookie.setSecure(res, 'access_token', access_token);
                cookie.setSecure(res, 'refresh_token', refresh_token);
    
                const expires_in_ms = expires_in * 1000;
                cookie.setReadable(res, 'access_token_expires', Date.now() + expires_in_ms, expires_in_ms);
                cookie.setReadable(res, "id_token", id_token);
    
                res.sendStatus(204);
              } else {
                res.sendStatus(503);
              }
            }
        );
    } else {
      res.sendStatus(400);
    }
});

module.exports = router;
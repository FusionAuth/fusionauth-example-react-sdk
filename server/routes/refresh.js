const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');

const router = express.Router();

router.post('/', (req, res) => {
    if (req.cookies['app.rt']) {
        request(
            {
              method: 'POST',
              uri: `${config.fusionAuthBaseUrl}/oauth2/token`,
              form: {
                'client_id': config.clientID,
                'client_secret': config.clientSecret,
                'grant_type': 'refresh_token',
                'refresh_token': req.cookies['app.rt'],
                'access_token': req.cookies['app.at'],
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            },

            (error, response, body) => {
              const { access_token, id_token, refresh_token, expires_in } = JSON.parse(body);
              if (access_token && refresh_token) {

                cookie.setSecure(res, 'app.at', access_token);
                cookie.setSecure(res, 'app.rt', refresh_token);
    
                const expires_in_ms = expires_in * 1000;
                cookie.setReadable(res, 'app.at_exp', Date.now() + expires_in_ms, expires_in_ms);
                cookie.setReadable(res, "app.idt", id_token);
    
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
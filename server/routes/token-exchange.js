const express = require('express');
const request = require('request');
const config = require('../config.js');

const router = express.Router();

router.post('/', (req, res) => {
  request(
    // POST request to /token endpoint
    {
      method: 'POST',
      uri: `${config.fusionAuthBaseUrl}/oauth2/token`,
      form: {
        'client_id': config.clientID,
        'client_secret': config.clientSecret,
        'code': req.body.code,
        'code_verifier': req.body.code_verifier,
        'grant_type': 'authorization_code',
        'redirect_uri': config.redirectURI
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },

    // callback
    (error, response, body) => {
        // save token to session
        req.session.token = JSON.parse(body).access_token;
        req.session.token = JSON.parse(body).refresh_token;

        // submit request to get user information
        request(
            {
              method: 'GET',
              uri: `${config.fusionAuthBaseUrl}/oauth2/userinfo`,
              headers: {
                  'Authorization': 'Bearer ' + JSON.parse(body).access_token
                }
            },
            (error, response, body) => {
              if (!error) {
                res.send({user: JSON.parse(body)});
              }
            }
        );
    }
  );
});

module.exports = router;
const express = require('express');
const request = require('request');
const config = require('../../config.js');

const router = express.Router();

router.post('/', (req, res) => {
  request(
    // POST request to /token endpoint
    {
      method: 'POST',
      uri: `http://localhost:${config.fusionAuthPort}/oauth2/token`,
      form: {
        'client_id': config.clientID,
        'client_secret': config.clientSecret,
        'code': req.query.code,
        'code_verifier': req.session.verifier,
        'grant_type': 'authorization_code',
        'redirect_uri': config.redirectURI
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
                uri: `http://localhost:${config.fusionAuthPort}/oauth2/userinfo`,
                headers: {
                    'Authorization': 'Bearer ' + req.session.token
                  }
            }
        );
    }
  );
});

module.exports = router;
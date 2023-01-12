const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');

const router = express.Router();

router.post('/', (req, res) => {
  console.log("accepting request for token exchange");
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
        const { access_token, refresh_token } = JSON.parse(body);
        if (access_token && refresh_token) {
            console.log("saving tokens as cookies");
            // save tokens as cookies
            cookie.setSecure(res, 'access_token', access_token);
            cookie.setSecure(res, 'refresh_token', refresh_token);

            // submit request to get user information
            request(
                {
                    method: 'GET',
                    uri: `${config.fusionAuthBaseUrl}/oauth2/userinfo`,
                    headers: {
                        'Authorization': 'Bearer ' + access_token
                    }
                },
                (error, response, body) => {
                    console.log("getting userinfo");
                    if (!error) {
                        res.send({user: JSON.parse(body)});
                    } else {
                      res.sendStatus(500);
                    }
                }
            );
        } else {
           console.log("Either refresh token or access token is missing.");
           console.log(body);
           res.sendStatus(503);
        }

    }
  );
});

module.exports = router;

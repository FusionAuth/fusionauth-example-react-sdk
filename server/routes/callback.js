const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');
const redirectState = require('../redirectState.js');

const router = express.Router();

router.get('/', (req, res) => {
  console.log("accepting request for token exchange");
  const code = req.query.code;
  const codeVerifier = req.cookies.codeVerifier;
  const redirect_uri = `${req.protocol}://${req.get('host')}/app/callback`;

  request(
    // POST request to /oauth2/token endpoint
    {
      method: 'POST',
      uri: `${config.fusionAuthBaseUrl}/oauth2/token`,
      form: {
        'client_id': config.clientID,
        'client_secret': config.clientSecret,
        'code': code,
        'code_verifier': codeVerifier,
        'grant_type': 'authorization_code',
        'redirect_uri': redirect_uri,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },

    (error, response, body) => {
        const { access_token, id_token, refresh_token, expires_in } = JSON.parse(body);
        if (access_token && refresh_token) {
            console.log("saving tokens as cookies");
            // save tokens as cookies
            cookie.setSecure(res, 'app.at', access_token);
            cookie.setSecure(res, 'app.rt', refresh_token);

            const expires_in_ms = expires_in * 1000;
            cookie.setReadable(res, 'app.at_exp', Date.now() + expires_in_ms, expires_in_ms);
            cookie.setReadable(res, 'codeVerifier', '', 0);
            cookie.setReadable(res, "app.idt", id_token);

            const redirectUrl = redirectState.generateRedirectUrlFromState(req);

            res.redirect(redirectUrl);

        } else {
           console.log("Either refresh token or access token is missing.");
           console.log(body);
           res.sendStatus(503);
        }

    }
  );
});

module.exports = router;

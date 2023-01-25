const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');

const router = express.Router();

router.get('/', (req, res) => {
  console.log("accepting request for token exchange");
  const code = req.query.code;
  // console.log(`code = ${code}`);
  const codeVerifier = req.cookies.codeVerifier;
  // console.log(`codeVerifier is ${codeVerifier}`);
  // console.log(`cookies is ${JSON.stringify(req.cookies)}`);
  // const redirectUri = config.webAppUrl; // gives error from FA
  request(
    // POST request to /token endpoint
    {
      method: 'POST',
      uri: `${config.fusionAuthBaseUrl}/oauth2/token`,
      form: {
        'client_id': config.clientID,
        'client_secret': config.clientSecret,
        'code': code,
        'code_verifier': codeVerifier,
        'grant_type': 'authorization_code',
        'redirect_uri': config.serverTokenExchangeUrl // TODO required, right??
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },

    // callback
    (error, response, body) => {
        console.log(`token-exchange: from /oauth2/token, got back ${body}`);
        const { access_token, refresh_token, expires_in } = JSON.parse(body);  // TODO wrap try / catch
        if (access_token && refresh_token) {
            console.log("saving tokens as cookies");
            // save tokens as cookies
            cookie.setSecure(res, 'access_token', access_token);
            cookie.setSecure(res, 'refresh_token', refresh_token);

            const expires_in_ms = expires_in * 1000;
            cookie.setReadable(res, 'access_token_expires', Date.now() + expires_in_ms, expires_in_ms);

            res.redirect(config.webAppUrl);

        } else {
           console.log("Either refresh token or access token is missing.");
           console.log(body);
           res.sendStatus(503);
        }

    }
  );
});

module.exports = router;

const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');
const pkce = require('../pkce.js');
const crypto = require('crypto').webcrypto;

const router = express.Router();

router.get('/', async (req, res) => {
  console.log("accepting request for login");

  console.log(`client_id is ${req.query.client_id}`);
  // TODO -- state??

  const code = await pkce.generatePKCE();
  cookie.setSecure(res, 'codeVerifier', code.code_verifier);
  const queryParams = {
      client_id: req.query.client_id,
    //   scope: props?.scope ?? DEFAULT_SCOPE,
      response_type: 'code',
      redirect_uri: config.serverTokenExchangeUrl,
      code_challenge: code.code_challenge,
      code_challenge_method: 'S256',
      scope: 'openid offline_access',
//      state: stateParam,  // TODO
  };
  const fullUrl = generateUrl(queryParams);

  res.redirect(fullUrl);
});

function generateUrl(queryParams) {
    const query = new URLSearchParams(queryParams);
    return `${config.fusionAuthBaseUrl}/oauth2/authorize?${query}`;
}

module.exports = router;

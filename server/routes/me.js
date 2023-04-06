const express = require('express');
const request = require('request');
const config = require('../config.js');
const cookie = require('../cookie.js');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('In /me...');
  const access_token = req.cookies['app.at'];
    if (access_token) {
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
                res.send(body);
            } else {
              res.sendStatus(500);
            }
        }
      );
    } else {
      res.sendStatus(400);
    }
});

module.exports = router;
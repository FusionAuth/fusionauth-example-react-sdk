const express = require('express');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js');
const bodyParser = require('body-parser')

// configure Express app and install the JSON middleware for parsing JSON bodies
const app = express();

app.use(bodyParser.json());

// configure sessions
app.use(session(
  {
    secret: '1234567890',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: 'auto',
      httpOnly: true,
      maxAge: 3600000
    }
  })
);

// configure CORS
app.use(cors(
  {
    origin: true,
    credentials: true
  })
);

// use routes
app.use('/token-exchange', require('./routes/token-exchange.js'));

// start server
app.listen(config.serverPort, () => console.log(`FusionAuth example react app listening on port ${config.serverPort}.`));
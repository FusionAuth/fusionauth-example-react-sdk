const express = require('express');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// configure Express app and install the JSON middleware for parsing JSON bodies
const app = express();

app.use(bodyParser.json());

app.use(cookieParser());

// configure CORS
app.use(cors(
  {
    origin: true,
    credentials: true
  })
);

// configure sessions
app.use(session(
  {
    secret: '1234567890',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      httpOnly: true,
      maxAge: 3600000,
      sameSite: 'lax'
    }
  })
);

// use routes
app.use('/token-exchange', require('./routes/token-exchange.js'));
app.use('/jwt-refresh', require('./routes/jwt-refresh.js'));

// start server
app.listen(config.serverPort, () => console.log(`FusionAuth example react app listening on port ${config.serverPort}.`));

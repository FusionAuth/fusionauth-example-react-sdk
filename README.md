# FusionAuth React SDK Example App
This repository contains example usage of the [FusionAuth React SDK](https://github.com/FusionAuth/fusionauth-react-sdk). It provides an example React client that uses the SDK, and an example Express server that is used to complete the OAuth token exchange.


## Overview

This example repo consists of two parts:

- `client` contains the React client application code which utilizes the FusionAuth React SDK
- `server` contains an Express server app which is used to securely perform the token exchange

The React client shows example usage of the SDK and integrates with [React Router v6](https://reactrouter.com/en/main). It consists of a simple Login page which utilizes the 

## Setup

### Prerequisites
- [Yarn](https://classic.yarnpkg.com/lang/en/): This will be needed for pulling down the various dependencies.
- [NodeJS](https://nodejs.org/en/): This will be used in order to run the node server.
- [FusionAuth](https://fusionauth.io): This is the auth server. Make sure [it is installed](https://fusionauth.io/docs/v1/tech/installation-guide/).

### FusionAuth Setup

Log into the application UI.

#### Application

Create an Application

On the OAuth tab:

1. Make sure the authorization code grant is enabled
1. Add the following to the authorized redirect URLs for your application: `http://localhost:3000` and `http://localhost`
1. Add the following to the authorized request origins URLs for your application: `http://localhost:9000` and `http://localhost`
1. Add the following to the logout URL: `http://localhost:3000`
1. Record the client Id and secret, you'll use that below

On the registration tab:
1. Make sure self service registration is enabled.

#### Users

Create a user if needed.

### Express Server Setup
From the `server` directory:

1. Make a copy of `config.example.js` called `config.js` and fill it out
2. Run `yarn install` to install dependencies
3. Run `yarn start` to start the server at [http://localhost:9000](http://localhost:9000)

### React Client Setup
From the `client` directory:
1. Make a copy of `src/config.example.ts` at `src/config.ts` and fill it out
2. Run `yarn install` to install dependencies
3. Run `yarn start` to start your React app at [http://localhost:3000](http://localhost:3000)

## SDK Examples

Three files in particular demonstrate the usage of the SDK. Check out the following:

- `client/FusionAuthProviderWithRedirectHandling.tsx` - custom redirect handling to integrate with React Router
- `client/pages/LoginPage` - a simple login page that utilizes `useFusionAuth` as well as the out-of-the-box login/register buttons
- `client/pages/AccountPage` - a simple account page that utilizes `useFusionAuth` to display information about the authenticated user

### Server Endpoint Requirements

The server you configure to use with the React SDK must have a `/token-exchange` endpoint to perform the exchange,
and optionally a `/jwt-refresh` endpoint if you wish to use refresh tokens.

You can check out `server/routes/token-exchange.js` and `server/routes/jwt-refresh.js` to see how these endpoints are
implemented.

At a high level:

- `token-exchange.js` calls out to the [FusionAuth OAuth Token](https://fusionauth.io/docs/v1/tech/oauth/endpoints#token) endpoint to get an access token and refresh token, which are both stored in secure cookies
- `jwt-refresh.js` calls out to the [FusionAuth JWT Refresh](https://fusionauth.io/docs/v1/tech/apis/jwt#refresh-a-jwt) endpoint to exchange the refresh token for a new access token

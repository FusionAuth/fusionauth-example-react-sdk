# FusionAuth Example React App With SDK
This is an example react app made with [FusionAuth's React SDK](https://github.com/FusionAuth/fusionauth-react-sdk)

## Prerequisites
You will need to have the following things installed on your computer:
 - [Git](https://git-scm.com/): This is will used to `git clone` the repo.
 - [NodeJS](https://nodejs.org/en/): This will be used in order to run the node server, and also includes `npm` which will be needed for pulling down the various dependencies.

## Installation
Run the following commands inside of a terminal
 - `git clone https://github.com/FusionAuth/fusionauth-example-react-with-sdk.git`
 - `cd fusionauth-example-react-with-sdk`: This is the root directory for the example app.
 - `cd client && npm install`: This will install the dependencies for the React application.
 - `cd ../server && npm install`: This will install the dependencies for the Express application.

## Configuration
Inside of both the `client/src` and `server` folders there is an example config file. Rename these files to exclude the `.example`, so they look like `client/src/config.ts` and `server/config.js`.
### Inside of `client/src/config.ts`:
This is the config used by the FusionAuth React SDK. Most of this will come from your FusionAuth instance, but for more information you can look at the explanation provided in the [SDK's documentation](https://github.com/FusionAuth/fusionauth-react-sdk).
### Inside of `server/config.js`:
This is the config used to talk to your 

## Running the Application
This application has 2 parts, the client and the server. In order to run, run the following commands.
 - Inside of the `client`, run `npm run start`.
 - Inside of the `server`, run `npm run start`.

## Architecture
This app has 2 different parts, each running on a different localhost port.
 - `localhost:3000` is the React app. This has 2 pages, a `/` route and a `/account` route. This uses the FusionAuth React SDK in order to direct the user to FusionAuth, which will then make calls to the Express app.
 - `localhost:9000` is the Express app. This app handles completing the OAuth token exchange through the `/token-exchange` route, which returns user information from FusionAuth. This also has a token refresh route (`/jwt-refresh`), which can be called by using the React SDK.
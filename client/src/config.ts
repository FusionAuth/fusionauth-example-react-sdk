import { FusionAuthConfig } from '@fusionauth/react-sdk';

export const config: FusionAuthConfig = {
    clientID: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e', // The client ID of your FusionAuth application, e.g., '90ba1caf-c0c1-b30a-af38-3ed438df9fc0'
    serverUrl: 'http://localhost:9000',  // The URL of your server that performs the token exchange
    redirectUri: 'http://localhost:3000', // Where to redirect to your React client after authentication

    // uncomment and set the following to override default server paths
    // loginPath: '/app/login',
    // logoutPath: '/app/logout',
    // registerPath: '/app/register',
    // tokenRefreshPath: '/app/refresh',
    // mePath: '/app/me',

};

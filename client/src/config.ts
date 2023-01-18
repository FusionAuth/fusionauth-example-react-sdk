import { FusionAuthConfig } from '@fusionauth/fusionauth-react-sdk';

export const config: FusionAuthConfig = {
    baseUrl: 'http://localhost:9011',                         // The base URL of your FusionAuth instance, e.g., 'https://sandbox.fusionauth.io'
    clientID: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',                        // The client ID of your FusionAuth application, e.g., '90ba1caf-c0c1-b30a-af38-3ed438df9fc0'
    serverUrl: 'http://localhost:9000',  // The URL of your server that performs the token exchange
    redirectUri: 'http://localhost:3000' // Where to redirect to your React client after authentication
};

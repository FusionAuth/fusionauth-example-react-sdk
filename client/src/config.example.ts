import { FusionAuthConfig } from 'fusionauth-react-sdk';

export const config: FusionAuthConfig = {
    baseUrl: '',                         // The base URL of your FusionAuth instance, e.g., 'https://sandbox.fusionauth.io'
    clientID: '',                        // The client ID of your FusionAuth application, e.g., '90ba1caf-c0c1-b30a-af38-3ed438df9fc0'
    serverUrl: 'http://localhost:9000',  // The URL of your server that performs the token exchange
    redirectUri: 'http://localhost:3000' // Where to redirect to your React client after authentication
};

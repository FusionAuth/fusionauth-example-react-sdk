module.exports = {
	// FusionAuth info (copied from the FusionAuth admin panel)
	clientID: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',
	clientSecret: 'super-secret-secret-that-should-be-regenerated-for-production',
	fusionAuthBaseUrl: 'http://localhost:9011',

	// Where FusionAuth will redirect after logout or login/register and token exchange.
	// ??(The FusionAuth Application needs this url configured as a valid redirect url)
	webAppUrl: 'http://localhost:3000',

	// Where FusionAuth will redirect after a login.  Hosted by this Node app.
	// (The FusionAuth Application needs this url configured as a valid redirect url)
	// TODO, reconstruct
	serverTokenExchangeUrl: 'http://localhost:9000/app/token-exchange',

	// port
	serverPort: 9000
};

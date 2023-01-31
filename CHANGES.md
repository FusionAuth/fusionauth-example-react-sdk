fusionauth-example-react-sdk Changes

Changes in 0.24.0

 * *Breaking change* Refactoring to work with upcoming FusionAuth hosted token exchange endpoints.  *Many* changes with server communication.  
   * Updates simplify configuration and offload pkce code generation from the browser
   * Corresponding server side update in fusionauth-example-react-sdk
   * New access_token_expires cookie lets us know when access_token expires
   * refreshToken() only makes network call if access_token about to expire
   * Server routes now scoped under `/app/` (this is overrideable)
   * `jwt-refresh` now named `/app/token-refresh`
   * User info no longer returned from `/app/token-exchange`.  Now, explicit call to `/app/me` is made.  Json data is top level and not scoped under `{"user": {} }`


export default {
    oidc: {
        clientId: '0oanry7k026kj0sos5d7',
        issuer: 'https://dev-68445906.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email'],
        responseType: 'code',
        pkce: true,
        disableHttpsCheck: false // Set to true ONLY if testing on localhost without HTTPS
    }
};

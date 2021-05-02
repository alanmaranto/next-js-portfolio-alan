import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: process.env.AUTO0_DOMAIN,
  clientId: process.env.AUTO0_CLIENT_ID,
  clientSecret: process.env.AUTO0_SECRET,
  scope: "openid profile",
  redirectUri: process.env.AUTO0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTO0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    /*     cookieLifetime: 60 * 60 * 8,
    cookieDomain: "",
    cookieSameSite: "lax",
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false, */
  },
  /*   oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 10000,
  }, */
});

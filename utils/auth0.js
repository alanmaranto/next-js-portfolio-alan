import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: "",
  clientId: "",
  clientSecret: "",
  scope: "",
  redirectUri: "",
  postLogoutRedirectUri: "",
  session: {
    cookieSecret: "",
    cookieLifetime: 60 * 60 * 8,
    cookieDomain: "",
    cookieSameSite: "lax",
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false,
  },
  oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 10000,
  },
});

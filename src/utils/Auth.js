import auth0 from "auth0-js";
import { auth0LoginSuccess, auth0Profile } from "../store/actions";
import { store, history } from "../store";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "recipe-app.auth0.com",
    clientID: "vR3EcZ6HPY9xqk7Fer1jrNX7n6bcJsCB",
    redirectUri: `${window.location.origin}/login_cb`,
    audience: "https://recipe-app.mcmyler.com",
    responseType: "token id_token",
    scope: "openid profile"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    localStorage.setItem("prev_pathname", window.location.pathname);
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        store.dispatch(auth0LoginSuccess());
        this.getProfile((err, profile) => {
          if (err) console.log(err);
          store.dispatch(auth0Profile(profile));
        });
      } else if (err) {
        console.log(err);
      }
      const prevPathname = localStorage.getItem("prev_pathname");
      history.replace(prevPathname);
      setTimeout(() => localStorage.removeItem("prev_pathname"), 2000);
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
    // history.replace('/home');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("prev_pathname");
    // navigate to the home route
    // history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at") || 0);
    return new Date().getTime() < expiresAt;
  }

  getAccessToken() {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No Access Token found");
    }
    return accessToken;
  }

  userProfile;
  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}

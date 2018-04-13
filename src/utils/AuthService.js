import Auth0Lock from "auth0-lock";
import decode from "jwt-decode";

export default class AuthService {
  constructor() {
    // Configure Auth0
    this.clientId = "vR3EcZ6HPY9xqk7Fer1jrNX7n6bcJsCB";
    this.domain = "recipe-app.auth0.com";

    this.lock = new Auth0Lock(this.clientId, this.domain, {
      auth: {
        redirectUrl: "http://localhost:3000/login_cb"
      }
    });
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", this._doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);
  }

  getLock() {
    // An instance of Lock
    return new Auth0Lock(this.clientId, this.domain, {
      auth: {
        redirectUrl: "http://localhost:3000/login_cb"
      }
    });
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const idToken = this.getToken();
    return idToken && !this.isTokenExpired(idToken);
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
  }

  getTokenExpirationDate(encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
  }

  isTokenExpired(token) {
    const expirationDate = this.getTokenExpirationDate(token);
    return expirationDate < new Date();
  }
}

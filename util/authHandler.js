import { authorize, refresh } from "react-native-app-auth";

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: "442c255450ab441a82f1761a46b6ba48",
      clientSecret: "9b61f0fef96f48cdb066195979fcf946",
      redirectUrl: "com.hacktathontrackstar:/oauthredirect",
      scopes: ["user-read-recently-played"],
      serviceConfiguration: {
        authorizationEndpoint: "https://accounts.spotify.com/authorize",
        tokenEndpoint: "https://accounts.spotify.com/api/token",
      },
    };
  }

  async onLogin() {
    try {
      const result = await authorize(this.spotifyAuthConfig);
      return result;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }
}

const authHandler = new AuthenticationHandler();

export default authHandler;

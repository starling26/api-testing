// testData/auth.data.ts
export const AuthData = {
  auth: {
    validCredentials: {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30
    },

    invalidCredentials: {
      username: "invalid_user",
      password: "wrong_password"
    }
  }
};
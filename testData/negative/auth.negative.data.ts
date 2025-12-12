// testData/negative/auth.negative.data.ts
export const AuthNegativeData = {
  // TC-DJ-AUTH-NEG-001: Login with Invalid Credentials
  invalidCredentials: {
    username: "invaliduser",
    password: "wrongpass"
  },

  // TC-DJ-AUTH-NEG-002: Login with Empty Credentials
  emptyCredentials: {
    username: "",
    password: ""
  },

  // TC-DJ-AUTH-NEG-003: Login with Null Values
  nullCredentials: {
    username: null,
    password: null
  },

  // TC-DJ-AUTH-NEG-004: Login with SQL Injection
  sqlInjectionPayload: {
    username: "' OR '1'='1",
    password: "anything"
  },

  // TC-DJ-AUTH-NEG-008: Login with Special Characters (XSS)
  xssPayload: {
    username: "<script>alert('xss')</script>",
    password: "test"
  },

  // Invalid tokens for various test cases
  invalidTokens: {
    invalidFormat: "invalid_token_xyz",
    expired: "expired_token_xyz",
    valid: "valid_but_not_authorized_token_xyz"
  },

  refreshTokenPayload: {
    refreshToken: "invalid_refresh_token_123"
  }
};

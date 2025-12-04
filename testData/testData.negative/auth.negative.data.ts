// testData/testData.negative/auth.negative.data.ts
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

  // TC-DJ-AUTH-NEG-009: Multiple Failed Login Attempts
  rateLimitPayload: {
    username: "testuser",
    password: "wrongpassword"
  },

  // Invalid tokens for various test cases
  invalidTokens: {
    malformed: "invalid_token_xyz",
    refresh: "invalid_refresh_token_123"
  }
};

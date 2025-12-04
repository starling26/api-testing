import { test, expect } from '../../fixtures/dummyjson.fixture/auth.fixture';
import { AuthData } from '../../testData/auth.data';

test.describe("DummyJSON - Authentication API Negative Tests", () => {

  test("NEG-TC-DJ-AUTH-001 - Login with Empty Username", async ({ auth }) => {
    const response = await auth.login({
      username: "",
      password: "emilyspass"
    });

    expect([400, 401]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-AUTH-002 - Login with Empty Password", async ({ auth }) => {
    const response = await auth.login({
      username: "emilys",
      password: ""
    });

    expect([400, 401]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-AUTH-003 - Login with Very Long Username", async ({ auth }) => {
    const response = await auth.login({
      username: "a".repeat(1000),
      password: "emilyspass"
    });

    expect([400, 401]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-AUTH-004 - Login with Special Characters in Username", async ({ auth }) => {
    const response = await auth.login({
      username: "@#$%^&*()",
      password: "emilyspass"
    });

    expect([400, 401]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-AUTH-005 - Access Protected Resource with Invalid Token", async ({ auth }) => {
    const response = await auth.getAuthenticatedUser("invalid_token_123");

    expect([401, 403]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-AUTH-006 - Access Protected Resource with Expired Token", async ({ auth }) => {
    const response = await auth.getAuthenticatedUser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTcyLCJleHAiOjE2MzU3NzcyNzJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs");

    expect([401, 403, 500]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-AUTH-007 - Access Protected Resource with Malformed Token", async ({ auth }) => {
    const response = await auth.getAuthenticatedUser("malformed.token.here");

    expect([401, 403, 500]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-AUTH-008 - Access Protected Resource with Empty Token", async ({ auth }) => {
    const response = await auth.getAuthenticatedUser("");

    expect([401, 403]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
});

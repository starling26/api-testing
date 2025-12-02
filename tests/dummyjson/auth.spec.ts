import { test, expect } from '../../fixtures/dummyjson.fixture/auth.fixture';
import { AuthData } from '../../testData/auth.data';

test.describe("DummyJSON - Authentication API Tests", () => {

  test("TC-DJ-AUTH-001 - Login with valid Credentials", async ({ authResponse }) => {
    expect(authResponse).toHaveProperty("accessToken");
    expect(authResponse).toHaveProperty("refreshToken");
    expect(authResponse.accessToken).toBeDefined();
  });

  test("TC-DJ-AUTH-002 - Login with Invalid Credentials", async ({ auth }) => {
    const response = await auth.login(AuthData.auth.invalidCredentials);

    expect([400, 401]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-AUTH-003 - Access Token Generation", async ({ authResponse }) => {
    expect(authResponse.accessToken).toBeTruthy();
    expect(typeof authResponse.accessToken).toBe("string");
  });

  test("TC-DJ-AUTH-004 - Get Authenticated User", async ({ auth, authToken }) => {
    const userResponse = await auth.getAuthenticatedUser(authToken);

    expect(userResponse.status()).toBe(200);

    const userData = await userResponse.json();
    expect(userData).toHaveProperty("id");
    expect(userData).toHaveProperty("username");
  });

  test("TC-DJ-AUTH-005 - Access Protected Endpoint without Token", async ({ auth }) => {
    const response = await auth.accessProtectedEndpointWithoutToken();

    expect([401, 403]).toContain(response.status());

    const body = await response.json();
    expect(body).toHaveProperty("message");
  });


});
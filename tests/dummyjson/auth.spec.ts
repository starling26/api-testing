import { test, expect } from '../../fixtures/dummyjson.fixture/auth.fixture';
import { AuthData } from '../../testData/auth.data';

test.describe('DummyJSON - Authentication API Tests', () => {

  test('TC-DJ-AUTH-001 - Login with valid Credentials', async ({ auth }) => {
    const response = await auth.login(AuthData.auth.validCredentials);
    expect(response.status()).toBe(200);
    // ...
  });

  test('TC-DJ-AUTH-002 - Login with Invalid Credentials', async ({ auth }) => {
    const response = await auth.login(AuthData.auth.invalidCredentials);
    expect([400, 401]).toContain(response.status());
    // ...
  });

  test('TC-DJ-AUTH-003 - Access Token Generation', async ({ auth }) => {
    const loginResponse = await auth.login(AuthData.auth.validCredentials);
    expect(loginResponse.status()).toBe(200);
    // ...
  });

  // ✅ GET - Get Authenticated User
  test('TC-DJ-AUTH-004 - Get Authenticated User', async ({ auth }) => {
    const loginResponse = await auth.login(AuthData.auth.validCredentials);
    const { accessToken } = await loginResponse.json();

    const userResponse = await auth.getAuthenticatedUser(accessToken);
    expect(userResponse.status()).toBe(200);
    // ...
  });

  // ✅ GET - Access Protected Endpoint Without Token
  test('TC-DJ-AUTH-005 - Access Protected Endpoint without Token', async ({ auth }) => {
    const response = await auth.accessProtectedEndpointWithoutToken();
    expect([400, 401]).toContain(response.status());
    // ...
  });
});
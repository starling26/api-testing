import { test, expect } from '../../fixtures/dummyjson.fixture/auth.fixture';
import { AuthPage } from '../../pages/dummyjson/auth.page';

test.describe('DummyJSON - Authentication API Tests', () => {

test('TC-DJ-AUTH-001 - Login with valid Credentials', async ({ authApi }) => {
  const response = await authApi.login(AuthPage.VALID_CREDENTIALS);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('username');
  expect(body).toHaveProperty('email');
  expect(body).toHaveProperty('firstName');
  expect(body).toHaveProperty('lastName');

  if (body.username === 'emilys') {
    expect(body.email).toBe('emily.johnson@x.dummyjson.com');
  } else {
    expect(body.username).not.toBe('emilys');
    expect(response.status()).not.toBe([400, 401]);
  }

});

test('TC-DJ-AUTH-002 - Login with Invalid Credentials', async ({ authApi }) => {
  const response = await authApi.login(AuthPage.INVALID_CREDENTIALS);
  expect([400, 401]).toContain(response.status());
  const body = await response.json();
  expect(body.message).toContain('Invalid credentials');
});

test('TC-DJ-AUTH-003 - Access Token Generation', async ({ authApi }) => {
  const loginResponse = await authApi.login(AuthPage.VALID_CREDENTIALS);
  expect(loginResponse.status()).toBe(200);

  const body = await loginResponse.json();
  expect(body).toHaveProperty('accessToken');
  expect(body.accessToken).toBeTruthy();
});

test('TC-DJ-AUTH-004 - Get Authenticated User', async ({ authApi }) => {
  const loginResponse = await authApi.login(AuthPage.VALID_CREDENTIALS);
  const { accessToken } = await loginResponse.json();

  const userResponse = await authApi.getAuthenticatedUser(accessToken);
  expect(userResponse.status()).toBe(200);

  const userBody = await userResponse.json();
  expect(userBody.username).toBe('emilys');
  expect(userBody).toHaveProperty('id');
});

test('TC-DJ-AUTH-005 - Access Protected Endpoint without Token', async ({ authApi }) => {
  const response = await authApi.accesProtectedEndpointWithotToken();
  expect([400, 401]).toContain(response.status());
  const body = await response.json();
  expect(body.message).toContain('Access Token is required');
});

});




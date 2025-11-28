import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/dummyjson/auth.page';


test.describe('DummyJSON - Authentication API Tests', () => {

test('TC-DJ-AUTH-001 - Login with valid Credentials', async ({ request }) => {
  const authApi = new AuthPage(request);
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

test('TC-DJ-AUTH-002 - Login with Invalid Credentials', async ({ request }) => {
  const authApi = new AuthPage(request);
  const response = await authApi.login(AuthPage.INVALID_CREDENTIALS);
  expect([400, 401]).toContain(response.status());
  const body = await response.json();
  expect(body.message).toContain('Invalid credentials');
});

test('TC-DJ-AUTH-003 - Access Token Generation', async ({ request }) => {
  const authApi = new AuthPage(request);
  const loginResponse = await authApi.login(AuthPage.VALID_CREDENTIALS);
  expect(loginResponse.status()).toBe(200);

  const body = await loginResponse.json();
  expect(body).toHaveProperty('accessToken');
  expect(body.accessToken).toBeTruthy();
});

});
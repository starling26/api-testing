import { test,expect,VALID_CREDENTIALS, INVALID_CREDENTIALS } from '../../fixtures/dummyjson.fixture/user.fixture';

test.describe('DummyJSON User API Tests', () => {

  test('TC-DJ-USER-001: Get All Users', async ({ user }) => {
    const response = await user.getAllUsers();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('users');
  });
    test('TC-DJ-USER-002: Get User By ID', async ({ user }) => {
    const userId = 1;
    const response = await user.getUserById(userId);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id', userId);
    expect(responseBody).toHaveProperty('firstName');
    expect(responseBody).toHaveProperty('lastName');
    expect(responseBody).toHaveProperty('email');
  });
});
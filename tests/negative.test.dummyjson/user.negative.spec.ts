import { firefox } from 'playwright/test';
import{test,expect}from'../../fixtures/dummyjson.fixture/user.fixture';
import{UserNegativeData} from"../../testData.negative/user.negative.data";    


test.describe("DummyJSON Users API Negative Tests", () => {

  test.fixme("TC-DJ-USER-NEG-001: Get Single User with Invalid ID", async ({user}) => {
  //This test should fail with 400 Bad Request when an invalid user ID is provided but DummyJSON API returns 200 with empty object.

    const response = await user.getSingleUser(UserNegativeData.invalidUserId);
    expect(response.status()).toBe(400);
  });

  test.fixme("TC-DJ-USER-NEG-002: Get Single User with Non-existent ID", async ({user}) => {
     //This test should fail with 400 Bad Request when an invalid user ID is provided but DummyJSON API returns 200 with empty object.

    const response = await user.getSingleUser(UserNegativeData.nonExistentUserId);
    expect(response.status()).toBe(404);
  });

  test.fixme("TC-DJ-USER-NEG-003: Login User with Invalid Credentials", async ({user}) => {
    //This test should fail with 401 Bad Request when an invalid user ID is provided but DummyJSON API returns 401 with empty object.

    const response = await user.loginUser(UserNegativeData.invalidCredentials);
    expect(response.status()).toBe(401);
  });

  test("TC-DJ-USER-NEG-004: Login User with Empty Credentials", async ({user}) => {
    const response = await user.loginUser(UserNegativeData.emptyCredentials);
    expect(response.status()).toBe(400);
  });

  test("TC-DJ-USER-NEG-005: Search Users with Empty Query", async ({user}) => {

    const response = await user.searchUsers(UserNegativeData.emptySearchQuery);
    expect(response.status()).toBe(400);
  });

  test("TC-DJ-USER-NEG-006: Search Users with Invalid Query", async ({user}) => {
    const response = await user.searchUsers(UserNegativeData.sqlInjectionQuery);
    expect(response.status()).toBe(400);
  });

  test.fixme("TC-DJ-USER-NEG-007: Filter Users with Invalid Parameter", async ({user}) => {
     //This test should fail with 400 Bad Request when an invalid user ID is provided but DummyJSON API returns 200 with empty object.

     const response = await user.filterUsers(UserNegativeData.invalidFilterParams.key, UserNegativeData.invalidFilterParams.value);
    expect(response.status()).toBe(400);
  });

  test.fixme("TC-DJ-USER-NEG-008: Add User with Missing Required Fields", async ({user}) => {
    //This test should fail with 400 Bad Request when an invalid user ID is provided but DummyJSON API returns 200 with empty object.

    const response = await user.addUser(UserNegativeData.emptyUserData);
    expect(response.status()).toBe(400);
  });

  test("TC-DJ-USER-NEG-009: Update User with Non-existent ID", async ({user}) => {
    const response = await user.updateUser(UserNegativeData.nonExistentUpdateUserId, UserNegativeData.validUserUpdateData);
    expect(response.status()).toBe(404);
  });

  test("TC-DJ-USER-NEG-010: Delete User with Non-existent ID", async ({user}) => {
    const response = await user.deleteUser(UserNegativeData.nonExistentDeleteUserId);
    expect(response.status()).toBe(404);
  });   

});
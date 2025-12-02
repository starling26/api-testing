import { test, expect } from '../../fixtures/dummyjson.fixture/user.fixture';
import { UserData } from '../../testData/user.data';

test.describe("DummyJSON - User API Tests", () => {

  test("TC-DJ-USER-001 - Get all user", async ({ user }) => {
    const response = await user.getAllUsers();

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
    expect(responseBody).toHaveProperty("total");
    expect(responseBody).toHaveProperty("skip");
    expect(responseBody).toHaveProperty("limit");
    expect(Array.isArray(responseBody.users)).toBeTruthy();
    expect(responseBody.users.length).toBeGreaterThan(0);
  });

  test("TC-DJ-USER-002 - Login User", async ({ user }) => {
    const response = await user.loginUser(UserData.loginCredentials);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("accessToken");
    expect(responseBody).toHaveProperty("refreshToken");
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("username");
    expect(responseBody).toHaveProperty("email");
    expect(responseBody).toHaveProperty("firstName");
    expect(responseBody).toHaveProperty("lastName");
    expect(responseBody.accessToken).toBeDefined();
  });

  test("TC-DJ-USER-003 - Get a single user", async ({ user }) => {
    const response = await user.getSingleUser(1);

      expect(response.status()).toBe(200);

      const responseBody = await response.json();
      expect(responseBody).toHaveProperty("id");
      expect(responseBody).toHaveProperty("firstName");
      expect(responseBody).toHaveProperty("lastName");
      expect(responseBody).toHaveProperty("email");
      expect(responseBody).toHaveProperty("username");
      expect(responseBody.id).toBe(1);
      expect(responseBody).toHaveProperty('email','emily.johnson@x.dummyjson.com');
});
test("TC-DJ-USER-003a - Get auth user", async ({ user, userToken }) => {
  const response = await user.getAuthUser(userToken);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toHaveProperty("id");
  expect(responseBody).toHaveProperty("firstName");
  expect(responseBody).toHaveProperty("lastName");
  expect(responseBody).toHaveProperty("username");
  expect(responseBody).toHaveProperty("email");
});

  test("TC-DJ-USER-004 - Search Users", async ({ user }) => {
    const searchQuery = UserData.searchQuery;
    const response = await user.searchUsers(searchQuery);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
    expect(responseBody).toHaveProperty("total");
    expect(Array.isArray(responseBody.users)).toBeTruthy();
  });

  test("TC-DJ-USER-005 - Filter user", async ({ user }) => {
    const { key, value } = UserData.filterUsers.valid;
    const response = await user.filterUsers(key, value);

    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
    expect(responseBody).toHaveProperty("total");
    expect(Array.isArray(responseBody.users)).toBeTruthy();
  });

  test("TC-DJ-USER-006 - Limit & Skip users", async ({ user }) => {
    const { limit, skip, select } = UserData.paginationParams;
    const response = await user.getUsersWithLimitSkipSelect(limit, skip, select);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
    expect(responseBody).toHaveProperty("limit");

  });

  test("TC-DJ-USER-007 - Sort users", async ({ user }) => {
    const response = await user.getSortedUsers("firstName", "asc");

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
    expect(Array.isArray(responseBody.users)).toBeTruthy();
  });

  test("TC-DJ-USER-008 - Get all posts tags", async ({ user }) => {
    const response = await user.getAllPostsTags();

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);
  });

  test("TC-DJ-USER-009 - Get posts tags list", async ({ user }) => {
    const response = await user.getPostsTagsList();

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);
    
    expect(typeof responseBody[0]).toBe("string");
    expect(responseBody[0].length).toBeGreaterThan(0);
  });

  test("TC-DJ-USER-010 - Get posts by tag", async ({ user }) => {
    const tag = "life";
    const response = await user.getPostsByTagGlobal(tag);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("posts");
    expect(Array.isArray(responseBody.posts)).toBeTruthy();
    expect(responseBody.posts[0].id).toEqual(153);
    expect(responseBody.posts[1].id).toEqual(167);


  });

  test("TC-DJ-USER-011 - Get user's carts", async ({ user }) => {
    const response = await user.getUserCarts(UserData.carts.valid.userId);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.carts).toHaveLength(1);
    expect(responseBody).toHaveProperty("carts");
    expect(Array.isArray(responseBody.carts)).toBeTruthy();
  });

  test("TC-DJ-USER-012 - Get user's posts", async ({ user }) => {
    const response = await user.getUserPosts(UserData.posts.valid.posts[0].userId);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("posts");
    expect(responseBody.posts).toHaveLength(2);
    
  });
  test("TC-DJ-USER-013 - Get user's todos", async ({ user }) => {
    // This test should fail using user ID 5 - need to find a user with todos
    // Using userId 5 for this test have to filed an user with todos
    const response = await user.getUserTodos(5);
    expect(response.status()).toBe(404); // Expecting 404 since user 5 has no todos

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("todos");
    expect(responseBody).toHaveProperty("total");
    expect(responseBody).toHaveProperty("skip");
    expect(responseBody).toHaveProperty("limit");
    expect(Array.isArray(responseBody.todos)).toBeTruthy();
    expect(responseBody.todos.length).toBeGreaterThan(0);
    expect(responseBody.total).toBeGreaterThan(0);
  });

  test("TC-DJ-USER-014 - Add User", async ({ user }) => {
    const userData = UserData.addUser;

    const response = await user.addUser(userData);

    expect([200, 201]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("firstName");
    expect(responseBody).toHaveProperty("lastName");
    expect(responseBody).toHaveProperty("email");
    expect(responseBody).toHaveProperty("username");
    expect(responseBody.firstName).toBe(userData.firstName);
    expect(responseBody.lastName).toBe(userData.lastName);
    expect(responseBody.email).toBe(userData.email);
  });

  test("TC-DJ-USER-015 - Update User", async ({ user }) => {
    const userId = UserData.updateData.id;
    const updateData = {
      firstName: UserData.updateData.firstName,
      lastName: UserData.updateData.lastName
    };
    const response = await user.updateUser(userId, updateData);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("firstName");
    expect(responseBody).toHaveProperty("lastName");
    expect(responseBody).toHaveProperty("email");
    expect(responseBody.firstName).toBe(updateData.firstName);
    expect(responseBody.lastName).toBe(updateData.lastName);


  });

  test("TC-DJ-USER-016 - Delete User", async ({ user }) => {
    const response = await user.deleteUser(UserData.deleteUser.id);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("firstName");
    expect(responseBody).toHaveProperty("lastName");
    expect(responseBody).toHaveProperty("isDeleted");
    expect(responseBody.isDeleted).toBeTruthy();
    expect(responseBody.deletedOn).toBeDefined();
  });

});
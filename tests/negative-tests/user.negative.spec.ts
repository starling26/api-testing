import { test, expect } from '../../fixtures/dummyjson.fixture/user.fixture';
import { UserData } from '../../testData/user.data';

test.describe("DummyJSON - User API Negative Tests", () => {

  test("NEG-TC-DJ-USER-001 - Get Non-existent User", async ({ user }) => {
    const response = await user.getSingleUser(99999);

    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-USER-002 - Get User with Negative ID", async ({ user }) => {
    const response = await user.getSingleUser(-1);

    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-USER-003 - Login with Empty Username", async ({ user }) => {
    const response = await user.loginUser({
      username: "",
      password: "emilyspass"
    });

    expect([400, 401]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-USER-004 - Login with Empty Password", async ({ user }) => {
    const response = await user.loginUser({
      username: "emilys",
      password: ""
    });

    expect([400, 401]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-USER-005 - Search Users with Empty Query", async ({ user }) => {
    const response = await user.searchUsers("");

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
    expect(responseBody.users.length).toBeGreaterThan(0);
  });

  test("NEG-TC-DJ-USER-006 - Filter Users with Invalid Key", async ({ user }) => {
    const response = await user.filterUsers("invalidkey", "somevalue");

    expect([400, 200]).toContain(response.status());

    if (response.status() === 200) {
      const responseBody = await response.json();
      expect(responseBody).toHaveProperty("users");
      expect(responseBody.users).toHaveLength(0);
    }
  });

  test("NEG-TC-DJ-USER-007 - Get Users with Negative Limit", async ({ user }) => {
    const response = await user.getUsersWithLimitSkipSelect(-1, 0, "firstName,lastName");

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
  });

  test("NEG-TC-DJ-USER-008 - Get Users with Negative Skip", async ({ user }) => {
    const response = await user.getUsersWithLimitSkipSelect(10, -1, "firstName,lastName");

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
  });

  test("NEG-TC-DJ-USER-009 - Sort Users with Invalid Field", async ({ user }) => {
    const response = await user.getSortedUsers("invalidfield", "asc");

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("users");
  });

  test("NEG-TC-DJ-USER-010 - Sort Users with Invalid Order", async ({ user }) => {
    const response = await user.getSortedUsers("firstName", "invalid" as any);

    expect([400, 200]).toContain(response.status());

    const responseBody = await response.json();
    if (response.status() === 200) {
      expect(responseBody).toHaveProperty("users");
    } else {
      expect(responseBody).toHaveProperty("message");
    }
  });

  test("NEG-TC-DJ-USER-011 - Get Posts by Non-existent Tag", async ({ user }) => {
    const response = await user.getPostsByTagGlobal("nonexistenttag123");

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("posts");
    expect(responseBody.posts).toHaveLength(0);
  });

  test("NEG-TC-DJ-USER-012 - Get User Carts with Invalid User ID", async ({ user }) => {
    const response = await user.getUserCarts(99999);
    
    expect([404, 200]).toContain(response.status());

    if (response.status() === 200) {
      const responseBody = await response.json();
      expect(responseBody).toHaveProperty("carts");
      expect(responseBody.carts).toHaveLength(0);
    }
  });

  test("NEG-TC-DJ-USER-013 - Get User Posts with Invalid User ID", async ({ user }) => {
    const response = await user.getUserPosts(99999);

    expect([404, 200]).toContain(response.status());

    if (response.status() === 200) {
      const responseBody = await response.json();
      expect(responseBody).toHaveProperty("posts");
      expect(responseBody.posts).toHaveLength(0);
    }
  });

  test("NEG-TC-DJ-USER-014 - Get User Todos with Invalid User ID", async ({ user }) => {
    const response = await user.getUserTodos(99999);
    
    expect([404, 200]).toContain(response.status());

    if (response.status() === 200) {
      const responseBody = await response.json();
      expect(responseBody).toHaveProperty("todos");
      expect(responseBody.todos).toHaveLength(0);
    }
  });

  test("NEG-TC-DJ-USER-015 - Add User with Empty Email", async ({ user }) => {
    const userData = {
      firstName: "Test",
      lastName: "User",
      email: "",
      username: "testuser"
    };

    const response = await user.addUser(userData);

    expect([200, 201]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("email", "");
  });

  test("NEG-TC-DJ-USER-016 - Add User with Invalid Email Format", async ({ user }) => {
    const userData = {
      firstName: "Test",
      lastName: "User",
      email: "invalidemail",
      username: "testuser"
    };

    const response = await user.addUser(userData);

    expect([200, 201]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("email", "invalidemail");
  });

  test("NEG-TC-DJ-USER-017 - Update Non-existent User", async ({ user }) => {
    const updateData = {
      firstName: "Updated",
      lastName: "User"
    };
    const response = await user.updateUser(99999, updateData);

    expect([404, 200]).toContain(response.status());

    const responseBody = await response.json();
    if (response.status() === 200) {
      expect(responseBody).toHaveProperty("id", 99999);
      expect(responseBody).toHaveProperty("firstName", "Updated");
    } else {
      expect(responseBody).toHaveProperty("message");
    }
  });

  test("NEG-TC-DJ-USER-018 - Delete Non-existent User", async ({ user }) => {
    const response = await user.deleteUser(99999);

    expect([404, 200]).toContain(response.status());

    const responseBody = await response.json();
    if (response.status() === 200) {
      expect(responseBody).toHaveProperty("id", 99999);
      expect(responseBody).toHaveProperty("isDeleted", true);
    } else {
      expect(responseBody).toHaveProperty("message");
    }
  });

  test("NEG-TC-DJ-USER-019 - Get Auth User with Invalid Token", async ({ user }) => {
    const response = await user.getAuthUser("invalid_token_123");

    expect([401, 403]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-USER-020 - Get Auth User with Empty Token", async ({ user }) => {
    const response = await user.getAuthUser("");

    expect([401, 403]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
});

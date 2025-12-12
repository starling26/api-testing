import{test,expect}from'../../fixtures/dummyjson.fixture/posts.fixture';
import{PostsNegativeData} from "../../testData/testData.negative/posts.negative.data";

test.describe("DummyJSON Posts API Negative Tests", () => {

  test("TC-DJ-POST-NEG-001: Get Post with Invalid ID", async ({posts}) => {
    const response = await posts.getAsinglePost(PostsNegativeData.invalidPostId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
  test("TC-DJ-POST-NEG-002: Get Post with Non-existent ID", async ({posts}) => {
    const response = await posts.getAsinglePost(PostsNegativeData.nonExistentPostId);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
  test("TC-DJ-POST-NEG-003: Get Post with Null ID", async ({posts}) => {
    const response = await posts.getAsinglePost(PostsNegativeData.nullPostId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
  test("TC-DJ-POST-NEG-004: Get Post with Negative ID", async ({posts}) => {
    const response = await posts.getAsinglePost(PostsNegativeData.negativePostId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test.fixme("TC-DJ-POST-NEG-005: Search Posts with Empty Query", async ({posts}) => {
    // This test should fail with 400 Bad Request but DummyJSON API returns 200
    const response = await posts.searchPost(PostsNegativeData.emptySearchQuery);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test.fixme("TC-DJ-POST-NEG-006: Search Posts with SQL Injection", async ({posts}) => {
    // This test should fail with 400 Bad Request but DummyJSON API currently returns all posts.
    const response = await posts.searchPost(PostsNegativeData.sqlInjectionQuery);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-POST-NEG-007: Get Posts by Non-existent User", async ({posts}) => {
    const response = await posts.getPostsByUserId(PostsNegativeData.nonExistentUserId);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-POST-NEG-008: Get Comments for Non-existent Post", async ({posts}) => {
    const response = await posts.getPostComments(PostsNegativeData.nonExistentPostIdForComments);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
  
  test("TC-DJ-POST-NEG-009: Add Post with Missing Required Fields", async ({posts}) => {
    const response = await posts.addPost(PostsNegativeData.emptyPostData);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-POST-NEG-010: Delete Post with Non-existent ID", async ({posts}) => {
    const response = await posts.deletePost(PostsNegativeData.nonExistentDeletePostId);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
});
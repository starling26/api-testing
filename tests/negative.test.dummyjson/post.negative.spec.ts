import{test,expect}from'../../fixtures/dummyjson.fixture/posts.fixture';
import{PostsNegativeData} from "../../testData.negative/posts.negative.data";

test.describe("DummyJSON Posts API Negative Tests", () => {

  test("TC-DJ-POST-NEG-001: Get Post with Invalid ID", async ({posts}) => {
    const response = await posts.getAsinglePost(PostsNegativeData.invalidPostId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
});
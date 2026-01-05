import{test, expect}from "../../fixtures/dummyjson.fixture/comments.fixture";
import{CommentsNegativeData}from"../../testData/negative/comments.negative.data";

test.describe("DummyJSON Comments API Negative Tests", () => {

  test("NEG-TC-DJ-COM-001: Get Single Comment with Invalid ID", async ({comments}) => {
    const response = await comments.getAsingleComment(CommentsNegativeData.invalidCommentId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-COM-002: Get Single Comment with Non-existent ID", async ({comments}) => {
    const response = await comments.getAsingleComment(CommentsNegativeData.nonExistentCommentId);
    expect(response.status()).toBe(404);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-COM-003: Get Single Comment with Null ID", async ({comments}) => {
    const response = await comments.getAsingleComment(CommentsNegativeData.nullCommentId);
    expect([400, 404]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test.fixme("NEG-TC-DJ-COM-004: Get Comments by Invalid Post ID", async ({comments}) => {
    // API currently returns 200 for invalid post ID instead of expected 400/404
    
    const response = await comments.getCommentsByPostId(CommentsNegativeData.invalidPostId);
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toBeDefined();
  });

  test.fixme("NEG-TC-DJ-COM-005: Get Comments by Non-existent Post ID", async ({comments}) => {
    //this test should fail, is returning 200 but should be 400 or 404

    const response = await comments.getCommentsByPostId(CommentsNegativeData.nonExistentPostId);
    expect(response.status()).toBe(404);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-COM-006: Add Comment with Missing Required Fields", async ({comments}) => {
    const response = await comments.addComment(CommentsNegativeData.emptyCommentData);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-COM-007: Add Comment with Invalid Post ID", async ({comments}) => {
    const response = await comments.addComment(CommentsNegativeData.commentWithInvalidPostId);
    expect([400, 404]).toContain(response.status());
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-COM-008: Update Comment with Non-existent ID", async ({comments}) => {
    const response = await comments.updateComment( CommentsNegativeData.nonExistentUpdateCommentId,
      CommentsNegativeData.validCommentUpdateData
    );
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("NEG-TC-DJ-COM-009: Delete Comment with Non-existent ID", async ({comments}) => {
    const response = await comments.deleteComment(CommentsNegativeData.nonExistentDeleteCommentId);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test.fixme("NEG-TC-DJ-COM-010: Limit Comments with Invalid Limit Value", async ({comments}) => {
    //this test should fail, is returning 200 but should be 400 or 404
    const response = await comments.limitSkipComments(CommentsNegativeData.invalidLimitParams.limit,
      CommentsNegativeData.invalidLimitParams.skip
    );
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
});
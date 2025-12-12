// testData/negative/comments.negative.data.ts
export const CommentsNegativeData = {
  // TC-DJ-COM-NEG-001: Get Single Comment with Invalid ID
  invalidCommentId: "invalid",

  // TC-DJ-COM-NEG-002: Get Single Comment with Non-existent ID
  nonExistentCommentId: 99999,

  // TC-DJ-COM-NEG-003: Get Single Comment with Null ID
  nullCommentId: null,

  // TC-DJ-COM-NEG-004: Get Comments by Invalid Post ID
  invalidPostId: "abc!@#$%",

  // TC-DJ-COM-NEG-005: Get Comments by Non-existent Post ID
  nonExistentPostId: 99999,

  // TC-DJ-COM-NEG-006: Add Comment with Missing Required Fields
  emptyCommentData: {},

  // TC-DJ-COM-NEG-007: Add Comment with Invalid Post ID
  commentWithInvalidPostId: {
    postId: 99999,
    body: "This is a test comment",
    userId: 1
  },

  // TC-DJ-COM-NEG-008: Update Comment with Non-existent ID
  nonExistentUpdateCommentId: 99999,
  validCommentUpdateData: {
    body: "Updated comment text"
  },

  // TC-DJ-COM-NEG-009: Delete Comment with Non-existent ID
  nonExistentDeleteCommentId: 99999,

  // TC-DJ-COM-NEG-010: Limit Comments with Invalid Limit Value
  invalidLimitParams: {
    limit: -5,
    skip: 0
  }
};

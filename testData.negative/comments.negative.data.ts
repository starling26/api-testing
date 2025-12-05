// testData/testData.negative/comments.negative.data.ts
export const CommentsNegativeData = {
  // TC-DJ-COM-NEG-008: Get Single Comment with Invalid ID
  invalidCommentId: "invalid",

  // TC-DJ-COM-NEG-009: Get Single Comment with Non-existent ID
  nonExistentCommentId: 99999,

  // TC-DJ-COM-NEG-010: Get Single Comment with Null ID
  nullCommentId: null,

  // TC-DJ-COM-NEG-011: Get Comments by Invalid Post ID
  invalidPostId: "invalid",

  // TC-DJ-COM-NEG-012: Get Comments by Non-existent Post ID
  nonExistentPostId: 99999,

  // TC-DJ-COM-NEG-013: Add Comment with Missing Required Fields
  emptyCommentData: {},

  // TC-DJ-COM-NEG-014: Add Comment with Invalid Post ID
  commentWithInvalidPostId: {
    postId: 99999,
    body: "This is a test comment",
    userId: 1
  },

  // TC-DJ-COM-NEG-015: Update Comment with Non-existent ID
  nonExistentUpdateCommentId: 99999,
  validCommentUpdateData: {
    body: "Updated comment text"
  },

  // TC-DJ-COM-NEG-016: Delete Comment with Non-existent ID
  nonExistentDeleteCommentId: 99999,

  // TC-DJ-COM-NEG-017: Limit Comments with Invalid Limit Value
  invalidLimitParams: {
    limit: -5,
    skip: 0
  }
};

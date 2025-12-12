// testData/negative/posts.negative.data.ts
export const PostsNegativeData = {
  // TC-DJ-POST-NEG-010: Get Single Post with Invalid ID
  invalidPostId: "invalid3445",

  // TC-DJ-POST-NEG-011: Get Single Post with Non-existent ID
  nonExistentPostId: 99999,

  // TC-DJ-POST-NEG-012: Get Single Post with Null ID
  nullPostId: null,

  // TC-DJ-POST-NEG-013: Search Posts with Empty Query
  emptySearchQuery: "",

  // TC-DJ-POST-NEG-014: Search Posts with SQL Injection
  sqlInjectionQuery: "' OR '1'='1",

  // TC-DJ-POST-NEG-015: Get Posts by Invalid User ID
  invalidUserId: "invalid",

  // TC-DJ-POST-NEG-016: Get Posts by Non-existent User
  nonExistentUserId: 99999,

  // TC-DJ-POST-NEG-017: Get Comments for Non-existent Post
  nonExistentPostIdForComments: 99999,

  // TC-DJ-POST-NEG-018: Add Post with Missing Required Fields
  emptyPostData: {},

  // TC-DJ-POST-NEG-019: Delete Post with Non-existent ID
  nonExistentDeletePostId: 99999,

  negativePostId: -10
};

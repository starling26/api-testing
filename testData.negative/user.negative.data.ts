// testData/testData.negative/user.negative.data.ts
export const UserNegativeData = {
  // TC-DJ-USER-NEG-001: Get Single User with Invalid ID
  invalidUserId: "invalid",

  // TC-DJ-USER-NEG-002: Get Single User with Non-existent ID
  nonExistentUserId: 99999,

  // TC-DJ-USER-NEG-003: Login User with Invalid Credentials
  invalidCredentials: {
    username: "invalid",
    password: "wrong"
  },

  // TC-DJ-USER-NEG-004: Login User with Empty Credentials
  emptyCredentials: {
    username: "",
    password: ""
  },

  // TC-DJ-USER-NEG-005: Search Users with Empty Query
  emptySearchQuery: "",

  

  // TC-DJ-USER-NEG-006: Search Users with SQL Injection
  sqlInjectionQuery: "' OR '1'='1",

  // TC-DJ-USER-NEG-007: Filter Users with Invalid Parameter
  invalidFilterParams: {
    key: "invalid",
    value: "test"
  },

  // TC-DJ-USER-NEG-008: Add User with Missing Required Fields
  emptyUserData: {},

  // TC-DJ-USER-NEG-009: Update User with Non-existent ID
  nonExistentUpdateUserId: 99999,
  validUserUpdateData: {
    firstName: "Updated",
    lastName: "User",
    email: "updated@example.com"
  },

  // TC-DJ-USER-NEG-010: Delete User with Non-existent ID
  nonExistentDeleteUserId: 99999
};

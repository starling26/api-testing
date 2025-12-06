// testData/testData.negative/quotes.negative.data.ts
export const QuotesNegativeData = {
  // TC-DJ-QUOTE-005: Get Single Quote with Invalid ID
  invalidQuoteId: "invalid",

  // TC-DJ-QUOTE-006: Get Single Quote with Non-existent ID
  nonExistentQuoteId: 99999,

  // TC-DJ-QUOTE-007: Get Single Quote with Null ID
  nullQuoteId: null,

  // TC-DJ-QUOTE-008: Get Single Quote with Negative ID
  negativeQuoteId: -1,

  // TC-DJ-QUOTE-009: Limit Quotes with Invalid Limit Value
  invalidNegativeLimit: {
    limit: -5,
    skip: 0
  },

  // TC-DJ-QUOTE-010: Limit Quotes with Invalid Skip Value
  invalidNegativeSkip: {
    limit: 10,
    skip: -1
  },

  // TC-DJ-QUOTE-011: Limit Quotes with Zero Limit
  zeroLimit: {
    limit: 0,
    skip: 0
  },

  // TC-DJ-QUOTE-012: Limit Quotes with Excessive Limit Value
  excessiveLimit: {
    limit: 999999,
    skip: 0
  },

  // TC-DJ-QUOTE-013: Limit Quotes with Non-numeric Limit
  nonNumericLimit: {
    limit: "abc",
    skip: 10
  },

  // TC-DJ-QUOTE-014: Limit Quotes with Non-numeric Skip
  nonNumericSkip: {
    limit: 10,
    skip: "xyz"
  }
};

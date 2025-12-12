import { test, expect } from "../../fixtures/dummyjson.fixture/quotes.fixture";
import{QuotesNegativeData} from"../../testData/negative/quotes.negative.data";

test.describe("DummyJSON Quotes API Negative Tests", () => {

  test("TC-DJ-QUOTE-NEG-001: Get Single Quote with Invalid ID", async ({quotes}) => {
    const response = await quotes.getAsingleQuote(QuotesNegativeData.invalidQuoteId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-QUOTE-NEG-002: Get Single Quote with Non-existent ID", async ({quotes}) => {
    const response = await quotes.getAsingleQuote(QuotesNegativeData.nonExistentQuoteId);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
  test("TC-DJ-QUOTE-NEG-003: Get Single Quote with Null ID", async ({quotes}) => {
    const response = await quotes.getAsingleQuote(QuotesNegativeData.nullQuoteId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-QUOTE-NEG-004: Get Single Quote with Negative ID", async ({quotes}) => {
    const response = await quotes.getAsingleQuote(QuotesNegativeData.negativeQuoteId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test.fixme("TC-DJ-QUOTE-NEG-005: Limit Quotes with Invalid Limit Value", async ({quotes}) => {
    //This test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK.
    const response = await quotes.limitSkipQuotes(QuotesNegativeData.invalidNegativeLimit.limit, 
      QuotesNegativeData.invalidNegativeLimit.skip);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test.fixme("TC-DJ-QUOTE-NEG-006: Limit Quotes with Invalid Skip Value", async ({quotes}) => {
    //This test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK.
    const response = await quotes.limitSkipQuotes(QuotesNegativeData.invalidNegativeSkip.limit, 
      QuotesNegativeData.invalidNegativeSkip.skip);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test.fixme("TC-DJ-QUOTE-NEG-007: Limit Quotes with Excessive Limit Value", async ({quotes}) => {
    //This test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK.

    const response = await quotes.limitSkipQuotes(QuotesNegativeData.excessiveLimit.limit, 
      QuotesNegativeData.excessiveLimit.skip);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });
  test.fixme("TC-DJ-QUOTE-NEG-008: Limit Quotes with Zero Limit", async ({quotes}) => {
    //This test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK.
    const response = await quotes.limitSkipQuotes(QuotesNegativeData.zeroLimit.limit, 
      QuotesNegativeData.zeroLimit.skip);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-QUOTE-NEG-009: Limit Quotes with Non-numeric Limit", async ({quotes}) => {
    const response = await quotes.limitSkipQuotes(QuotesNegativeData.nonNumericLimit.limit as unknown as number, 
      QuotesNegativeData.nonNumericLimit.skip);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-QUOTE-NEG-010: Limit Quotes with Non-numeric Skip", async ({quotes}) => {
    //This test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK.
    const response = await quotes.limitSkipQuotes(QuotesNegativeData.nonNumericSkip.limit, 
      QuotesNegativeData.nonNumericSkip.skip as unknown as number);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

});
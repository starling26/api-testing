import { test, expect } from "../../fixtures/dummyjson.fixture/quotes.fixture";
import { QuotesData } from '../../testData/positive/quotes.data';

test.describe("Quotes API Tests", () => {

  test("Get all quotes", async ({ quotes }) => {
    const response = await quotes.getAllQuotes();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("quotes");
    expect(Array.isArray(responseBody.quotes)).toBe(true);
  });
  test("Get a single quote", async ({ quotes }) => {
    const response = await quotes.getAsingleQuote(1);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id", 1);
    expect(responseBody).toHaveProperty("quote");
  });

  test("Get a random quote", async ({ quotes }) => {
    const response = await quotes.getArandomQuote();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("quote");
  });

  test("Limit and Skip quotes", async ({ quotes }) => {
    const response = await quotes.limitSkipQuotes(QuotesData.limitAndSkip.params.limit, QuotesData.limitAndSkip.params.skip);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("quotes");
    expect(Array.isArray(responseBody.quotes)).toBe(true);
  });
});
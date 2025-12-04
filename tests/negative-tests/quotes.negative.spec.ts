import { test, expect } from "../../fixtures/dummyjson.fixture/quotes.fixture";

test.describe("Quotes API Negative Tests", () => {

  test("NEG-TC-DJ-QUOTE-001: Validate quotes response structure", async ({ quotes }) => {
    const response = await quotes.getAllQuotes();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("quotes");
    expect(Array.isArray(responseBody.quotes)).toBe(true);
    
    if (responseBody.quotes.length > 0) {
      const firstQuote = responseBody.quotes[0];
      expect(firstQuote).toHaveProperty("id");
      expect(firstQuote).toHaveProperty("quote");
      expect(firstQuote).toHaveProperty("author");
    }
  });
});

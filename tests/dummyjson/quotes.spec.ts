import { test, expect } from "../../fixtures/dummyjson.fixture/quotes.fixture";
import { quotesData } from "../../testData/quotes.data";

test.describe("Quotes API Tests", () => {

  test("Get all quotes", async ({ quotesPage }) => {
    const response = await quotesPage.getAllQuotes();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("quotes");
    expect(Array.isArray(responseBody.quotes)).toBe(true);
  });
});

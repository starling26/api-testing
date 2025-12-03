import { test, expect } from "../../fixtures/dummyjson.fixture/quotes.fixture";

test.describe("Quotes API Tests", () => {

  test("Get all quotes", async ({ quotes }) => {
    const response = await quotes.getAllQuotes();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("quotes");
    expect(Array.isArray(responseBody.quotes)).toBe(true);
  });
});

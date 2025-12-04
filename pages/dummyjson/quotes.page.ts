import { APIRequestContext } from '@playwright/test';

export class QuotesPage {

  
  constructor(private request: APIRequestContext) {}

  getAllQuotes() {
    return this.request.get('/quotes');
  }
  getAsingleQuote(quoteId: number) {
    return this.request.get(`/quotes/${quoteId}`);
  }
  getArandomQuote() {
    return this.request.get('/quotes/random');
  }
  limitSkipQuotes(limit: number, skip: number) {
    return this.request.get(`/quotes?limit=${limit}&skip=${skip}`);
  }
}
 
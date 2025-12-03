import { APIRequestContext } from '@playwright/test';

export class QuotesPage {

  
  constructor(private request: APIRequestContext) {}

  getAllQuotes() {
    return this.request.get('/quotes');
  }
}
 
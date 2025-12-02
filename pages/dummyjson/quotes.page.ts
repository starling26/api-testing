import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class QuotesPage {
  private baseURL = apiConfig.dummyjson.baseURL;
  
  constructor(private request: APIRequestContext) {}

  getAllQuotes() {
    return this.request.get(`${this.baseURL}/quotes`);
  }
}

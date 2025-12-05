import{test,expect}from'../../fixtures/dummyjson.fixture/auth.fixture';
import{AuthNegativeData}from'../../testData.negative/auth.negative.data';

test.describe('Auth API Negative Tests',()=>{

    test.fixme('TC-DJ-AUTH-NEG_001: Login with invalid credentials',async({auth})=>{
        const response=await auth.login(AuthNegativeData.invalidCredentials);
        expect(response.status()).toBe(401);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    });
    test('TC-DJ-AUTH-NEG_002: Login with Empty Credentials',async({auth})=>{
        const response=await auth.login(AuthNegativeData.emptyCredentials);
        expect(response.status()).toBe(400);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    });
    test('TC-DJ-AUTH-NEG_003: Login with Null Values',async({auth})=>{
        const response=await auth.nullLogin(AuthNegativeData.nullCredentials);
        expect(response.status()).toBe(400);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    });
    test('TC-DJ-AUTH-NEG_004: Login with SQL Injection Strings',async({auth})=>{
        const response=await auth.login(AuthNegativeData.sqlInjectionPayload);
        expect([400,401]).toContain(response.status());

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    });
    test('TC-DJ-AUTH-NEG_005: Access Protected Endpoint Without Token',async({auth})=>{
        const response=await auth.accessProtectedEndpointWithoutToken();
        expect(response.status()).toBe(401);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    });
    test('TC-DJ-AUTH-NEG_006: Access Protected Endpoint with Invalid Token',async({auth})=>{
        const response=await auth.accessProtectedEndpointWithInvalidToken(AuthNegativeData.invalidTokens.malformed);
        expect(response.status()).toBe(401);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    }); 
    test('TC-DJ-AUTH-NEG_007: Refresh Token with Invalid Token',async({auth})=>{
        const response=await auth.refreshTokenWithInvalidToken(AuthNegativeData.invalidTokens.malformed);
        expect(response.status()).toBe(401);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    });
    test('TC-DJ-AUTH-NEG_008: Login with Special Characters (XSS)',async({auth})=>{
        const response=await auth.login(AuthNegativeData.xssPayload);
        expect(response.status()).toBe(400);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    });
    test('TC-DJ-AUTH-NEG_009: Multiple Failed Login Attempts',async({auth})=>{
        for(let i=0;i<5;i++){
            await auth.login(AuthNegativeData.rateLimitPayload);
        }
        const response=await auth.login(AuthNegativeData.rateLimitPayload);
        expect([429,401]).toContain(response.status());

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message');
    });
});
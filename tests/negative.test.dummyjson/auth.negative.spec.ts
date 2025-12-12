import{test,expect}from'../../fixtures/dummyjson.fixture/auth.fixture';
import{AuthNegativeData}from'../../testData/testData.negative/auth.negative.data';

test.describe('Auth API Negative Tests',()=>{

    test.fixme('TC-DJ-AUTH-NEG_001: Login with invalid credentials',async({auth})=>{
        //This test should fail due to a bug in the API that returns 400 instead of 401 for invalid credentials
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
        expect(responseBody).toHaveProperty('message', 'Invalid credentials');
    });
    test('TC-DJ-AUTH-NEG_005: Access Protected Endpoint Without Token',async({auth})=>{
        const response=await auth.accessProtectedEndpointWithoutToken();
        expect(response.status()).toBe(401);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message','Access Token is required');
    });
    test('TC-DJ-AUTH-NEG_006: Access Protected Endpoint with Invalid Token',async({auth})=>{
        const response=await auth.accessProtectedEndpointWithInvalidToken(AuthNegativeData.invalidTokens.expired);
        expect(response.status()).toBe(401);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message','Invalid/Expired Token!');
    }); 
    test('TC-DJ-AUTH-NEG_007: Refresh Token with Invalid Token',async({auth})=>{
        const response=await auth.refreshTokenWithInvalidToken(AuthNegativeData.invalidTokens.invalidFormat);
        expect(response.status()).toBe(401);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message','Refresh token required');
    });
    test('TC-DJ-AUTH-NEG_008: Login with Special Characters (XSS)',async({auth})=>{
        const response=await auth.login(AuthNegativeData.xssPayload);
        expect(response.status()).toBe(400);

        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message', 'Invalid credentials');
    });
    test('TC-DJ-AUTH-NEG_009: Access with Refresh Token as Bearer',async({auth})=>{
        const response=await auth.accessProtectedEndpointWithInvalidToken(AuthNegativeData.refreshTokenPayload.refreshToken);
        expect(response.status()).toBe(401);
        const responseBody=await response.json();
        expect(responseBody).toHaveProperty('message','Invalid/Expired Token!');
    });

});
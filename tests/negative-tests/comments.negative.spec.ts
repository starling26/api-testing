import { test, expect } from '../../fixtures/dummyjson.fixture/comments.fixture';

test.describe('Comments API Negative Tests', () => {

    test('NEG-TC-DJ-COMM-001: Get Non-existent Comment', async ({ comments }) => {
        const response = await comments.getAsingleComment(99999);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-002: Get Comment with Negative ID', async ({ comments }) => {
        const response = await comments.getAsingleComment(-1);
        expect([400, 404]).toContain(response.status());

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-003: Get Comments by Negative Post ID', async ({ comments }) => {
        const response = await comments.getCommentsByPostId(-1);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('comments');
        expect(responseBody.comments.length).toBeGreaterThan(0);
    });

    test('NEG-TC-DJ-COMM-004: Get Comments with Negative Limit', async ({ comments }) => {
        const response = await comments.limitSkipComments(-5, 0);
        expect([400, 200]).toContain(response.status());
    });

    test('NEG-TC-DJ-COMM-005: Get Comments by Non-existent Post ID', async ({ comments }) => {
        const response = await comments.getCommentsByPostId(99999);
        
        if (response.status() === 200) {
            const responseBody = await response.json();
            expect(responseBody).toHaveProperty('comments');
            expect(responseBody.comments.length).toBeGreaterThan(0);
        }
    });

    test('NEG-TC-DJ-COMM-006: Get Comments with Invalid Skip Parameter', async ({ comments }) => {
        const response = await comments.limitSkipComments(10, 'invalid' as any);
        expect([400, 200]).toContain(response.status());
    });

    test('NEG-TC-DJ-COMM-007: Add Comment with Empty Body', async ({ comments }) => {
        const response = await comments.addComment({
            body: '',
            postId: 1,
            userId: 1
        });
        expect(response.status()).toBe(400);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-008: Add Comment with Invalid Post ID', async ({ comments }) => {
        const response = await comments.addComment({
            body: 'Test comment',
            postId: -1,
            userId: 1
        });
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-009: Add Comment with Invalid User ID', async ({ comments }) => {
        const response = await comments.addComment({
            body: 'Test comment',
            postId: 1,
            userId: -1
        });
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-010: Add Comment with Missing Required Fields', async ({ comments }) => {
        const response = await comments.addComment({} as any);
        expect(response.status()).toBe(400);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-011: Update Non-existent Comment', async ({ comments }) => {
        const response = await comments.updateComment(99999, {
            body: 'Updated body',
            postId: 1,
            userId: 1
        });
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-012: Update Comment with Empty Body', async ({ comments }) => {
        const response = await comments.updateComment(1, {
            body: ''
        });
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', 1);
        // API mantiene el valor original al intentar actualizar con campo vacío
        expect(responseBody).toHaveProperty('body');
        expect(responseBody.body).not.toBe('');
    });

    test('NEG-TC-DJ-COMM-013: Update Comment with Invalid Data', async ({ comments }) => {
        const response = await comments.updateComment(1, {
            body: 'Updated body',
            userId: -1
        });
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-014: Delete Non-existent Comment', async ({ comments }) => {
        const response = await comments.deleteComment(99999);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-COMM-015: Delete Comment with Negative ID', async ({ comments }) => {
        const response = await comments.deleteComment(-1);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });
});
import { test, expect } from '../../fixtures/dummyjson.fixture/posts.fixture';

test.describe('Posts API Negative Tests', () => {

    test('NEG-TC-DJ-POST-001: Get Non-existent Post', async ({ posts }) => {
        const response = await posts.getAsinglePost(99999);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-POST-002: Get Post with Negative ID', async ({ posts }) => {
        const response = await posts.getAsinglePost(-1);
        expect([400, 404]).toContain(response.status());

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-POST-003: Search Posts with Empty Query', async ({ posts }) => {
        const response = await posts.searchPost('');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('posts');
        expect(responseBody.posts.length).toBeGreaterThan(0);
    });

    test('NEG-TC-DJ-POST-004: Search Posts with Non-existent Query', async ({ posts }) => {
        const response = await posts.searchPost('nonexistentquery123');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('posts');
        expect(responseBody.posts).toHaveLength(0);
    });

    test('NEG-TC-DJ-POST-005: Get Posts with Invalid Sort', async ({ posts }) => {
        const response = await posts.sortPosts('invalidField', 'asc');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('posts');
    });

    test('NEG-TC-DJ-POST-006: Get Posts by Invalid User ID', async ({ posts }) => {
        const response = await posts.getPostsByUserId(99999);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-POST-007: Add Post with Empty Title', async ({ posts }) => {
        const response = await posts.addPost({
            title: '',
            body: 'Test body',
            userId: 1
        });
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('title', '');
    });

    test('NEG-TC-DJ-POST-008: Add Post with Empty Body', async ({ posts }) => {
        const response = await posts.addPost({
            title: 'Test title',
            body: '',
            userId: 1
        });
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('body', '');
    });

    test('NEG-TC-DJ-POST-009: Add Post with Missing Required Fields', async ({ posts }) => {
        const response = await posts.addPost({});
        expect(response.status()).toBe(400);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-POST-010: Add Post with Invalid User ID', async ({ posts }) => {
        const response = await posts.addPost({
            title: 'Test title',
            body: 'Test body',
            userId: -1
        });
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-POST-011: Update Non-existent Post', async ({ posts }) => {
        const response = await posts.updatePost(99999, {
            title: 'Updated title',
            body: 'Updated body'
        });
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-POST-012: Update Post with Empty Data', async ({ posts }) => {
        const response = await posts.updatePost(1, {});
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', 1);
    });

    test('NEG-TC-DJ-POST-013: Delete Non-existent Post', async ({ posts }) => {
        const response = await posts.deletePost(99999);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-POST-014: Delete Post with Negative ID', async ({ posts }) => {
        const response = await posts.deletePost(-1);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-POST-015: Get Posts with Negative User ID', async ({ posts }) => {
        const response = await posts.getPostsByUserId(-1);
        expect([400, 404]).toContain(response.status());

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });
});
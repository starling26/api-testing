import { test, expect } from '../../fixtures/dummyjson.fixture/posts.fixture';
import { PostsData } from '../../testData/positive/posts.data';

test.describe('Posts API Tests', () => {

    test('TC-DJ-POST-001: Get All Posts', async ({ posts }) => {
        const response = await posts.getAllPosts();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('posts');
        expect(Array.isArray(responseBody.posts)).toBe(true);
        expect(responseBody).toHaveProperty('total');
        expect(responseBody).toHaveProperty('limit');
    });

    test('TC-DJ-POST-002: Get a single Post', async ({ posts }) => {
        const response = await posts.getAsinglePost(PostsData.ids.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('userId');
    }); 

    test('TC-DJ-POST-004: Search posts', async ({ posts }) => {
        const response = await posts.searchPost(PostsData.search.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('posts');
        expect(Array.isArray(responseBody.posts)).toBe(true);
    });

    test('TC-DJ-POST-005: Sort posts', async ({ posts }) => {
        const response = await posts.sortPosts(PostsData.sort.byTitle);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('posts');
        expect(Array.isArray(responseBody.posts)).toBe(true);
    });

   test('TC-DJ-POST-005: Get posts by user id', async ({ posts }) => {
        const response = await posts.getPostsByUserId(PostsData.ids.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('posts');
        expect(responseBody.total).toEqual(1);
        responseBody.posts.forEach((post: any) => {
            expect(post).toHaveProperty('userId', PostsData.ids.valid);
        });
    });

    test('TC-DJ-POST-006: Get comments for a post', async ({ posts }) => {
        const response = await posts.getPostComments(PostsData.ids.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('comments');
        expect(Array.isArray(responseBody.comments)).toBe(true);
        expect(responseBody.total).toEqual(3);

    });
    test('TC-DJ-POST-007: Add a new post', async ({ posts }) => {
        const response = await posts.addPost(PostsData.addPost);
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('title', PostsData.addPost.title);
        expect(responseBody).toHaveProperty('body', PostsData.addPost.body);
        expect(responseBody).toHaveProperty('userId', PostsData.addPost.userId);
    });

    test('TC-DJ-POST-008: Update a post', async ({ posts }) => {
        const response = await posts.updatePost(PostsData.ids.valid, PostsData.updatePost);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('title', PostsData.updatePost.title);
        expect(responseBody).toHaveProperty('body', PostsData.updatePost.body);
    });

    test('TC-DJ-POST-009: Delete a post', async ({ posts }) => {
        const response = await posts.deletePost(PostsData.ids.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', PostsData.ids.valid);
    });




});
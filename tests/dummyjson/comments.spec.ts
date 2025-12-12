import { test, expect } from '../../fixtures/dummyjson.fixture/comments.fixture';
import { commentsData } from '../../testData/positive/comments.data';

test.describe('Comments API Tests', () => {
    test('TC-DJ-COMM-001: Get All Comments', async ({ comments }) => {  
    const response = await comments.getAllComments();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('comments');
    expect(Array.isArray(responseBody.comments)).toBe(true);
});
    test('TC-DJ-COMM-002: Get a Single Comment', async ({ comments }) => {  
        const response = await comments.getAsingleComment(commentsData.validCommentId);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', commentsData.validCommentId);
    });
    test('TC-DJ-COMM-003: Limit & Skip comments', async ({ comments }) => {
        const response = await comments.limitSkipComments(commentsData.paginationParams.limit, commentsData.paginationParams.skip);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('comments');
        expect(Array.isArray(responseBody.comments)).toBe(true);
        expect(responseBody.total).toBe(commentsData.paginationParams.total);
        expect(responseBody.skip).toBe(commentsData.paginationParams.skip);
        expect(responseBody.limit).toBe(commentsData.paginationParams.limit);
    });
    test('TC-DJ-COMM-004: Get Comments by Post ID', async ({ comments }) => {
        const response = await comments.getCommentsByPostId(commentsData.validPostId);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('comments');
        expect(Array.isArray(responseBody.comments)).toBe(true);
        
        responseBody.comments.forEach((comment: any) => {
            expect(comment).toHaveProperty('id');
            expect(comment.id).toBeDefined();

        });
    });
    test('TC-DJ-COMM-005: Add a New Comment', async ({ comments }) => {
        const response = await comments.addComment(commentsData.newComment);
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('body', commentsData.newComment.body);
        expect(responseBody).toHaveProperty('postId', commentsData.newComment.postId);
    });
    test('TC-DJ-COMM-006: Update an Existing Comment', async ({ comments }) => {
        const response = await comments.updateComment(commentsData.validCommentId, commentsData.updateComment);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', commentsData.validCommentId);
        expect(responseBody).toHaveProperty('body', commentsData.updateComment.body);
        expect(responseBody).toHaveProperty('postId', commentsData.updateComment.postId);
    });
    test('TC-DJ-COMM-007: Delete a Comment', async ({ comments }) => {
        const response = await comments.deleteComment(commentsData.validCommentId);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', commentsData.validCommentId);
    });
});

export const commentsData = {
    validCommentId: 11,
    invalidCommentId: 99999,
    validPostId: 156,
    
    singleComment: {
        id: 11,
        body: "It was a pleasure to grade this!",
        postId: 156,
        likes: 8,
        user: {
            id: 162,
            username: "mateob",
            fullName: "Mateo Bennett"
        }
    },

    allCommentsResponse: {
        comments: [
            {
                id: 11,
                body: "It was a pleasure to grade this!",
                postId: 156,
                likes: 8,
                user: {
                    id: 162,
                    username: "mateob",
                    fullName: "Mateo Bennett"
                }
            },
            {
                id: 12,
                body: "Keep up the incredible work!",
                postId: 119,
                likes: 10,
                user: {
                    id: 90,
                    username: "scarlettb",
                    fullName: "Scarlett Bowman"
                }
            }
        ],
        total: 340,
        skip: 0,
        limit: 30
    },

    newComment: {
        body: "This is a new test comment",
        postId: 247,
        likes: 100,
        userId: 11,
    },

    updateComment: {
        body: "just do id!",
        postId: 150,
        userId: 11
    },

    invalidComment: {
        body: "",
        postId: null
    },

    paginationParams: {
        total: 340,
        limit: 5,
        skip: 10
    }
};

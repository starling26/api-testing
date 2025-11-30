export const PostsData = {
  ids: {
    valid: 1,
    total: 2,
    notFound: 999999
  },

  singlePost: {
    id: 123,
    title: "The old scholar was watching the noisy",
    body: "young people around him and it suddenly occurred to him that he was the only one in the whole audience who had the privilege of freedom, ",
    tags: [
      "mystery",
      "classic"
            ],
  },

  search: {
    valid: 'love',
    noResults: 'xyznotfound123',
    partial: 'his'
  },

  sort: {
    byTitle: 'title',
    byUserId: 'userId',
    byReactions: 'reactions'
  },

  pagination: {
    limit: 10,
    skip: 5
  },

  singlePostWithUser: {
    id: 1,
    title: 'His mother had always taught him',
    body: 'His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.',
    userId: 9
  },

  addPost: {
    title: 'New Amazing Post',
    body: 'This is the content of my new post.',
    userId: 5
  },

  updatePost: {
    title: 'Updated Post Title',
    body: 'This post has been updated with new content.'
  },

  expected: {
    totalPosts: 251,
    defaultLimit: 30
  }

};
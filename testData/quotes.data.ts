export const QuotesData = {
  getAllQuotes: {
    endpoint: "/quotes",
    response: {
      quotes: [
        {
          id: 1,
          quote: "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
          author: "Rumi"
        }
      ],
      total: 1454,
      skip: 0,
      limit: 30
    }
  },

  getRandomQuote: {
    endpoint: "/quotes/random",
    response: {
      id: 1,
      quote: "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      author: "Rumi"
    }
  },

  getQuoteById: {
    endpoint: "/quotes/1",
    validId: 1,
    invalidId: 99999,
    response: {
      id: 1,
      quote: "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      author: "Rumi"
    }
  },

  limitAndSkip: {
    endpoint: "/quotes?limit=10&skip=5",
    params: {
      limit: 10,
      skip: 5
    },
    response: {
      quotes: [
        {
          id: 6,
          quote: "It is bad for a young man to sin; but it is worse for an old man to sin.",
          author: "Abu Bakr (R.A)"
        }
      ],
      total: 1454,
      skip: 5,
      limit: 10
    }
  }
};

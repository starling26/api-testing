export const UserData = {
  validUser: {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@x.dummyjson.com",
    username: "emilys",
    password: "emilyspass"
  },

  loginCredentials: {
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30
  },

  invalidCredentials: {
    wrongUsername: {
      username: "wronguser",
      password: "emilyspass",
      expiresInMins: 30
    },
    wrongPassword: {
      username: "emilys",
      password: "wrongpassword",
      expiresInMins: 30
    },
    emptyCredentials: {
      username: "",
      password: "",
      expiresInMins: 30
    },
    nullCredentials: {
      username: null,
      password: null,
      expiresInMins: 30
    },
    missingUsername: {
      password: "emilyspass",
      expiresInMins: 30
    }
  },

  addUser: {
    firstName: "Starling",
    lastName: "De La Cruz",
    age: 30,
    email: "starling.ovi@x.dummyjson.com",
    phone: "+63 791 675 8914",
    username: "starling_ovi",
    password: "0lelplR",
    birthDate: "1975-8-12",
    image: "https://dummyjson.com/icon/muhammad_ovi/128",
    bloodGroup: "A-",
    height: 189,
    weight: 75.4,
    eyeColor: "Green",
    hair: {
      color: "Black",
      type: "Straight"
    },
    ip: "59.30.114.97",
    address: {
      address: "4 Elm Street",
      city: "Los Angeles",
      state: "California",
      stateCode: "CA",
      postalCode: "90210",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437
      },
      country: "United States"
    },
    macAddress: "c8:42:c9:5a:5e:3f",
    university: "University of California, Los Angeles (UCLA)",
    bank: {
      cardExpire: "03/26",
      cardNumber: "1234567890123456",
      cardType: "Visa",
      currency: "USD",
      iban: "US45FBGM4467234567890123"
    },
    company: {
      department: "Engineering",
      name: "TechCorp",
      title: "Software Engineer",
      address: {
        address: "123 Tech Street",
        city: "San Francisco",
        state: "California",
        stateCode: "CA",
        postalCode: "94105",
        coordinates: {
          lat: 37.7749,
          lng: -122.4194
        },
        country: "United States"
      }
    },
    ein: "977-175",
    ssn: "900 56 2402",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      network: "Ethereum (ERC20)"
    },
    role: "admin"
  },

  userIds: {
    valid: 1,
    invalid: 999999
  },

  paginationParams: {
    limit: 5,
    skip: 10,
    select: "firstName"
  },

  searchQuery: "John",

  filterUsers: {
    valid: {
      key: "hair.color",
      value: "Brown"
    }
  },

  carts: {
    valid: {
      userId: 6,
      total: 1749.9
    },
    invalid: {
      userId: 999999
    }
  },

  posts: {
  valid: {
    posts: [
      {
        id: 61,
        title: "I'm going to hire professional help tomorrow.",
        body: "I'm going to hire professional help tomorrow. I can't handle this anymore. She fell over the coffee table and now there is blood in her catheter. This is much more than I ever signed up to do.",
        tags: [
          "fiction",
          "classic",
          "american"
        ],
        reactions: {
          likes: 1127,
          dislikes: 40
        },
        views: 4419,
        userId: 5
      },
      {
        id: 123,
        title: "The old scholar was watching the noisy",
        body: "young people around him and it suddenly occurred to him that he was the only one in the whole audience who had the privilege of freedom, ",
        tags: [
          "mystery",
          "classic"
        ],
        reactions: {
          likes: 1350,
          dislikes: 12
        },
        views: 1583,
        userId: 10
      }
    ],
    total: 2,
    skip: 0,
    limit: 2
  }
  },

  todos: {
    valid: {
      todos: [
        {
          id: 201,
          title: "Buy groceries",
          completed: false
        },
        {
          id: 202,
          title: "Walk the dog",
          completed: true
        }
      ],
      total: 2,
      skip: 0,
      limit: 2
    }
  },

  updateData: {
    firstName: "UpdatedFirstName",
    lastName: "UpdatedLastName",
    email: "updated.email@x.dummyjson.com",
    id: 1
  },

  deleteUser: {
    id: 1
  },

  tag: {
    valid: "life"
  },

  searchParams: {
    valid: "Emily",
    empty: "",
    sqlInjection: "'; DROP TABLE users; --"
  }
};
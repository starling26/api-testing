#  API Testing with Playwright & TypeScript

##  Description
Automated testing project for the **DummyJSON API** using **Playwright** and **TypeScript**.

## ✨ Features
-  Complete API testing with Playwright
-  Detailed reporting with Allure
-  CI/CD integration
-  Parallel test execution
-  TypeScript for type safety

## 🛠️ Technology Stack
- **Playwright** - API testing framework
- **TypeScript** - Type-safe development
- **Allure** - Report generation
- **Node.js** v18+ - Runtime environment


## Prerequisites
- **Node.js** (version 18+) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)

## Quick Setup

```bash
# Clone repository
git clone https://github.com/starling26/API-DJ-JS.git
cd API-DJ-JS/api-testing

# Install dependencies
npm install

# Run tests
npm test
```

## 🎯 Available Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:headed` | Run with visible browser |
| `npm run test:debug` | Interactive debug mode |

##  Project Structure

```
api-testing/
├── tests/
│   ├── dummyjson/         # API positive tests
│   └── negative.test.dummyjson/ # Negative tests
├── fixtures/              # Test data
├── playwright.config.ts   # Configuration
└── package.json
```

## View Reports

```bash
# HTML report (recommended)
npx playwright show-report

# Allure report
npx allure serve allure-results
```
##  API Coverage
Tested endpoints include:
-  **Authentication** - Login and profile
-  **Carts** - Cart operations  
-  **Comments** - Comment management
-  **Posts** - Posts CRUD
-  **Products** - CRUD, search, categories
-  **Quotes** - Quote operations
-  **Recipes** - Recipe CRUD
-  **Todos** - Todo management
-  **Users** - User management

##  Troubleshooting

**Common fixes:**
```bash
# Module not found
npm install

# Network issues
curl https://dummyjson.com/products/1

# Debug single test
npx playwright test --debug
```

**Ready to start!**

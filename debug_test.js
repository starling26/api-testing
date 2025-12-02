const { request } = require('@playwright/test');

(async () => {
  const context = await request.newContext();
  
  // Test the exact same request that the test is making
  const todoData = {
    todo: "Updated: Do something nice for someone you care about",
    completed: true,
    userId: 152
  };
  
  console.log('Making request to:', 'https://dummyjson.com/todos/1');
  console.log('With data:', JSON.stringify(todoData, null, 2));
  
  const response = await context.put('https://dummyjson.com/todos/1', { 
    data: JSON.stringify(todoData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  console.log('Status:', response.status());
  console.log('Response:', await response.text());
  
  await context.dispose();
})();

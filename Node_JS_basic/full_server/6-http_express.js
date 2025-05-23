const express = require('express'); // Import the Express framework

const app = express(); // Create an instance of an Express application

// Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Send a welcome message as the response
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the app instance for use in other files or for testing
module.exports = app;

const http = require('http'); // Import the built-in HTTP module

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.setHeader('Content-Type', 'text/plain');
  // Set the HTTP status code to 200 (OK)
  res.statusCode = 200;
  // End the response with a welcome message
  res.end('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  // Log a message when the server starts successfully
  console.log('Server is listening on port 1245');
});

// Export the server instance for use in other files
module.exports = app;

const http = require('http'); // Import the built-in HTTP module

// Get command-line arguments (excluding 'node' and script name)
const args = process.argv.slice(2);
// Import the asynchronous function to count students
const countStudents = require('./3-read_file_async');

// Get the database file path from the first argument
const DATABASE = args[0];

const hostname = '127.0.0.1'; // Define the hostname
const port = 1245;            // Define the port

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  res.statusCode = 200; // Set default status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set response content type

  const { url } = req; // Get the request URL

  if (url === '/') {
    // If the root URL is requested, respond with a welcome message
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    // If '/students' is requested, respond with the list of students
    res.write('This is the list of our students\n');
    try {
      // Try to get the students list from the database
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      // If there is an error, respond with the error message
      res.end(error.message);
    }
  }
  // If the URL does not match any route, set status to 404 and end the response
  res.statusCode = 404;
  res.end();
});

// Start the server and listen on the specified hostname and port
app.listen(port, hostname, () => {
  //   console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the server instance for use in other files
module.exports = app;

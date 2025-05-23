const express = require('express'); // Import the Express framework

const args = process.argv.slice(2); // Get command-line arguments (excluding 'node' and script name)
const countStudents = require('./3-read_file_async'); // Import the asynchronous function to count students

const DATABASE = args[0]; // Get the database file path from the first argument

const app = express(); // Create an instance of an Express application
const port = 1245;     // Define the port to listen on

// Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Send a welcome message as the response
  res.send('Hello Holberton School!');
});

// Define a route handler for GET requests to '/students'
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    // Try to get the students list from the database
    const students = await countStudents(DATABASE);
    // Send the list of students as the response
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    // If there is an error, send the error message as the response
    res.send(`${msg}${error.message}`);
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
});

// Export the app instance for use in other files or for testing
module.exports = app;

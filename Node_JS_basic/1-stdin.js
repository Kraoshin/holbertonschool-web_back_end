const std = require('process');

// Prompt the user for their name
std.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input from the user
std.stdin.on('readable', () => {
  // Read the input from stdin
  const name = std.stdin.read();
  // If the user entered something, display their name
  if (name) {
    std.stdout.write(`Your name is: ${name}`);
  }
});

// Listen for the end of input (Ctrl+D)
std.stdin.on('end', () => {
  // Display a closing message
  console.log('This important software is now closing');
});

const fs = require('fs');

/**
 * Reads a CSV database file, counts students, and logs statistics.
 * @param {string} path - The path to the CSV file.
 * @throws Will throw an error if the file can't be read or is invalid.
 */
function countStudents(path) {
  try {
    // Read the file synchronously as UTF-8 text
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file into lines and remove any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // If there are no student records, throw an error
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Remove the header line to get only student data
    const studentData = lines.slice(1);

    // Object to store students grouped by their field
    const fields = {};
    studentData.forEach((line) => {
      // Destructure the CSV line to get firstname and field (assumes 4 columns)
      const [firstname, , , field] = line.split(',');

      // If both firstname and field exist, add the student to the corresponding field
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Calculate the total number of students
    const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students and their names for each field
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    // If any error occurs (file not found, invalid format), throw a generic error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

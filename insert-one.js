const sqlite3 = require('sqlite3').verbose();

// Create a connection to the SQLite database file
const db = new sqlite3.Database('./polluted_cities2.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the polluted_cities2 database.');
});

// Function to insert a city into the city_data table
function insertCity(city) {
  const insertOne = `INSERT INTO city_data (RANK, CITY)
    VALUES ((SELECT MAX(RANK) FROM city_data) + 1, ?)`;

  db.run(insertOne, [city], function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(`New city '${city}' inserted with rank ${this.lastID}`);
  });
}

// Prompt the user to enter a city name
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a city name: ', (city) => {
  // Call the insertCity function with the entered city name
  insertCity(city);

  // Close the readline interface and the database connection
  readline.close();
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Disconnected from the polluted_cities2 database.');
  });
});

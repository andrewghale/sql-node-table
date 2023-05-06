const sqlite3 = require('sqlite3').verbose();

// Create a connection to the SQLite database file
const db = new sqlite3.Database('./polluted_cities2.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the polluted_cities2 database.');
});

// Insert data into city_data table
const insertData = 'INSERT INTO city_data (rank, city) VALUES (?, ?)';
db.run(insertData, [1, 'Osaka']);
db.run(insertData, [2, 'Edmonton']);
db.run(insertData, [3, 'Gothenburg']);

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Disconnected from the polluted_cities2 database.');
});

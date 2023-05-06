const sqlite3 = require('sqlite3').verbose();

// Create a connection to the new SQLite database file
const db = new sqlite3.Database('./polluted_cities2.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the polluted_cities2 database.');
});

// Create a new table in the database
db.run(`CREATE TABLE city_data (
  rank INTEGER PRIMARY KEY,
  city TEXT NOT NULL
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Table created successfully.');
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Database connection closed.');
});

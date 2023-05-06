const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Create a connection to the SQLite database file
const db = new sqlite3.Database('./polluted_cities2.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the polluted_cities2 database.');
});

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Insert data into city_data table

// const insertData = 'INSERT INTO city_data (rank, city, population, state, country, pollution_level) VALUES (?, ?, ?, ?, ?, ?)';
// db.run(insertData, [1, 'New York City', 8537673, 'New York', 'USA', 15]);
// db.run(insertData, [2, 'Los Angeles', 3977683, 'California', 'USA', 25]);
// db.run(insertData, [3, 'London', 8982000, null, 'UK', 18]);


app.get('/users', (req, res) => {
  const sql = 'SELECT rank, city FROM city_data';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

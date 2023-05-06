const mysql = require('mysql');

// create connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'citiesuser',
  password: 'cities',
  database: 'polluted_citites'
});

// connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database!');
});

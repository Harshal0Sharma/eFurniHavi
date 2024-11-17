require("dotenv").config(); // Load environment variables from .env file

const mysql = require("mysql2");

// Create a connection to the database using the values from .env file
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // localhost
  user: process.env.DB_USER, // root
  password: process.env.DB_PASSWORD, // your_password from .env
  database: process.env.DB_NAME, // ecommercedb
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Successfully connected to the ecommercedb database");
});

module.exports = connection; // Export the connection object to be used in other files

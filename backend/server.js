// Importing required modules
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./config/db"); // Import the database connection

// Start the server
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
// Imports the Express library so we can use its functions to build a server

const app = express();
// Creates an Express application — this "app" object is what we'll attach all our routes to

const PORT = process.env.PORT || 3000;
// Sets the port the server will run on.
// process.env.PORT lets a hosting platform (like Render or Vercel) assign its own port;
// if that doesn't exist (e.g. running locally), it falls back to 3000

// Parses incoming JSON request bodies (needed for POST requests)
app.use(express.json());

// In-memory list of name. Resets when the server restarts.
let names = [];

app.get("/", (req, res) => {
  res.send("Mission 8 Names API is running!");
});

app.get("/names", (req, res) => {
  // your code here
});

app.post("/names", (req, res) => {
  // your code here
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

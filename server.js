const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Parses incoming JSON request bodies (needed for POST requests)
app.use(express.json());

// In-memory list of names — resets when the server restarts.
let names = [];

app.get("/", (req, res) => {
  res.send("Mission 8 Names API is running!");
});

// ---------- TODO 1: GET /names ----------
// Send back the `names` array as JSON with res.json(...).
app.get("/names", (req, res) => {
  // your code here
});

// ---------- TODO 2: POST /names ----------
// 1. Read `name` from req.body
// 2. Push it onto the `names` array
// 3. Respond with the updated list (or a confirmation message)
app.post("/names", (req, res) => {
  // your code here
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

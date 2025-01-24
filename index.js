// index.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from Node.js App! & Welcome Ankush ");
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});

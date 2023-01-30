const express = require('express');
const app = express ();
const port = process.env.PORT || 3000;

const apiData = require("./data.json");

app.get("/api/healers", (req,res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
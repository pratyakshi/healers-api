const express = require('express')
const cors = require("cors")
const app = express()


const port = process.env.PORT || 3000

const apiData = require("./data.json")

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
var cors = require('cors')
var jsonParser = bodyParser.json()
var urlencodeParser = bodyParser.urlencoded({ extended: false })


app.use(cors())
app.use(jsonParser);
app.use(urlencodeParser);

app.get('/', (req, res) => {
  res.json('Website A')
});

app.post('/push-event-github', (req, res) => {
  if (req.body.secret !== secret123) {
    console.log('wrong secret')
    return res.status(400).json()
  }

  console.log('Incoming Webhook')
  res.json()
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
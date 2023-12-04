const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json('website b')
});

app.get('/trigger-webhook-event', async (req, res) => {
  try {
    const data = {
      secret: "secret123",
      event: 'event a'
    }

    const response = await fetch('https://localhost:3000/github-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      res.json('Event triggered successfully');
    } else {
      res.status(response.status).json('Failed to trigger event');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
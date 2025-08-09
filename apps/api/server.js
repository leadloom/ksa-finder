// apps/api/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Simple health + root routes
app.get('/', (req, res) => {
  res.send('OK: ksa-finder API is running');
});

app.get('/healthz', (req, res) => {
  res.send('ok');
});

// IMPORTANT: use the port Railway provides
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server listening on ${port}`);
});

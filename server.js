const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3300;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    const requestHeaders = req.get('Access-Control-Request-Headers');
    if (requestHeaders) {
      res.setHeader('Access-Control-Allow-Headers', requestHeaders);
    }
    return res.sendStatus(204);
  }

  next();
});

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

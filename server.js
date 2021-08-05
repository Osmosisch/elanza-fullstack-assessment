const express = require('express');
const app = express();

let counter = 0;

app.get('/api/data', function (req, res) {
  ++counter;
  return res.json({ name: 'sunshine', counter: counter });
});

app.listen(process.env.PORT || 8080);

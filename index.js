const express = require('express');
const { PORT } = require('./config/server.config');
const app = express();

app.get('/home', (req, res) => {
  res.json({ msg: 'ok' });
});

app.listen(PORT, function (req, res) {
  console.log('Server is listening at port 3000');
});

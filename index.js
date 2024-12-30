const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.json({ msg: 'ok' });
});

app.listen(3000, function (req, res) {
  console.log('Server is listening at port 3000');
});

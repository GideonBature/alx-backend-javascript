const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${(link unavailable)}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

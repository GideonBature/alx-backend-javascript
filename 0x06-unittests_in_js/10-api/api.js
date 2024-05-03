const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
	res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.use(express.json())
.post('/login', (req, res) => {
    res.send(`Welcome ${req.body.userName}`);
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});

module.exports = app;

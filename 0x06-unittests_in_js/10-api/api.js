const express = require('express');
const app = express();

// Enable JSON body parsing middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Existing endpoint for /cart/:id with numeric validation
app.get('/cart/:id', (req, res) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
        return res.status(400).send('Invalid cart ID, must be a number');
    }
    res.send(`Payment methods for cart ${id}`);
});

// New endpoint for /available_payments
app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

// New endpoint for POST /login
app.post('/login', (req, res) => {
    const userName = req.body.userName;
    if (!userName) {
        return res.status(400).send('Username is required');
    }
    res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
    console.log('API is running on port 7865');
});

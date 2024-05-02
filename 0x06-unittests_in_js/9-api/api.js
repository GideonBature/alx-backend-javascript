const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Add a new endpoint for /cart/:id where :id must be a number
app.get('/cart/:id', (req, res) => {
    const { id } = req.params;

    // Check if id is a number using a regular expression
    if (!/^\d+$/.test(id)) {
        return res.status(400).send('Invalid cart ID, must be a number');
    }

    // Respond with a message incorporating the cart ID
    res.send(`Payment methods for cart ${id}`);
});

app.listen(7865, () => {
    console.log('API is running on port 7865');
});

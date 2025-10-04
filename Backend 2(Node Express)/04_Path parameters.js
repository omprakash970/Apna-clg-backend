//wrtie code about path parameters in express js
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
app.get('/product/:category/:id', (req, res) => {
    const category = req.params.category;
    const productId = req.params.id;
    res.send(`Category: ${category}, Product ID: ${productId}`);
});
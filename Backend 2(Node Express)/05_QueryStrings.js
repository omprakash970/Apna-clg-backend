//write aout query string basic code..
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`You searched for: ${query}`);
});
app.get('/filter', (req, res) => {
    const category = req.query.category;
    const price = req.query.price;
    res.send(`Category: ${category}, Price: ${price}`);
});
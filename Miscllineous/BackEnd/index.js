const express = require('express');
const app = express();
const port = 3000;

app.get('/register', (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard get response, welcome ${user}!`);
});

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send("Standard post response");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});


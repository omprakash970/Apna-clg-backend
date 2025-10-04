const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("Default Route");
});

app.post('/add-item', (req, res) => {
    console.log(req);

})

app.listen(3000, () => {
    console.log("listening to port 3000");
});

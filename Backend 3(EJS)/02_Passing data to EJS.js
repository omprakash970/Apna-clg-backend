const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.get('/', (req, res) => {
    res.render("home.ejs");
})

app.get('/rolldice', (req, res) => {
   
});
app.listen(port, () => {
    console.log("listening to the port 3000");
})

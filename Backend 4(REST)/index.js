const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.urlencoded({ extended: true }));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.sen
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    // You can add additional startup logic here
    console.log("Server started successfully");

})

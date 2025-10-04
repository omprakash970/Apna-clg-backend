let express = require('express');
let app = express();
let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.get('/apple', (req, res) => {
    res.send('Apple is good for health');
});
app.get('/banana', (req, res) => {
    res.send('Banana is rich in potassium');
});
app.get('/orange', (req, res) => {
    res.send('Orange is a good source of vitamin C');
}
);

const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
app.use((req, res) => {
    res.send('Hello, this is the response from the server!');
    let code = "<h1>Fruits</h1>";
    code += "<ul>";
    code += "<li>Apple</li>";
    code += "<li>Banana</li>";
    code += "<li>Orange</li>";
    code += "</ul>";
    res.send(code);
})
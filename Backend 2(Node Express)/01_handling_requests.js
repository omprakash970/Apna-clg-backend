const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
app.use((req, res) => {
    console.log('New request received');
})
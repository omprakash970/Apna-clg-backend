const express = require('express');
const router = express();
const port = 3000;

const path = require('path');
router.use(express.urlencoded({ extended: true }));

router.set('view engine', 'ejs');
router.set('views', path.join(__dirname, 'views'));
router.use(express.static(path.join(__dirname, 'public')));

router.get("/", (req, res) => {
    res.render("index.ejs");
});

router.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`This server is listening to the port ${port}`);
    console.log("Server started successfully");
});
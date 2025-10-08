const express = require('express');
const router = express();
const port = 3000;

const path = require('path');
router.use(express.urlencoded({ extended: true }));

router.set('view engine', 'ejs');
router.set('views', path.join(__dirname, 'views'));
router.use(express.static(path.join(__dirname, 'public')));


let posts = [
    {
        username: "Oppie",
        content: "This is my first post"
    },
    {
        username: "John",
        content: "Hello world!"
    },
    {
        username: "Alice",
        content: "Excited to join this platform!"
    }
];


router.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});


router.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`This is listening to the port ${port}`)
    console.log("Server started successfully");
});



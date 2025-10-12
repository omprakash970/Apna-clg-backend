const express = require("express");
const router = express();
const port = 3000;
const path = require('path');

router.use(express.urlencoded({ extended: true }));

router.set("view engine", "ejs");
router.set("views", path.join(__dirname, "views"));

router.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "Om Prakash",
        context: "I love nancy"
    },
    {
        username: "Nancy",
        context: "I love Om"
    },
    {
        username: "John",
        context: "I love Jane"
    },
    {
        username: "Jane",
        context: "I love John"
    }
];
router.get("/posts", (req, res) => {
    res.render('index.ejs', { posts });
});
router.get("/posts/new", (req, res) => {
    res.render('new.ejs');
});
router.post("/posts", (req, res) => {
    const { username, context } = req.body;
    posts.push({ username, context });

});
router.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


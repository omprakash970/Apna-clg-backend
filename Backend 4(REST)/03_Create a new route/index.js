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
        id: "1a",
        username: "Om Prakash",
        context: "I love nancy"
    },
    {
        id: "2a",
        username: "Nancy",
        context: "I love Om"
    },
    {
        id: "2c",
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
    console.log(req.body);
    posts.push({ username, context });
    res.redirect("/posts");

});
router.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render('show.ejs', { post });

});
router.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


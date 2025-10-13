const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // ✅ Correct import

// Middleware
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Sample posts
let posts = [
    { id: uuidv4(), username: "Om Prakash", context: "I love Nancy" },
    { id: uuidv4(), username: "Nancy", context: "I love Om" },
    { id: uuidv4(), username: "John", context: "I love Jane" },
    { id: uuidv4(), username: "Jane", context: "I love John" }
];

// Routes
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    const { username, context } = req.body;
    const id = uuidv4();
    posts.push({ id, username, context });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    res.render("show.ejs", { post });
});

// Server start
app.listen(port, () => {
    console.log(`🔥 Server running at: http://localhost:${port}`);
});

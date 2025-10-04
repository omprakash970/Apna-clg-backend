const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.set('view engine', 'ejs');

app.set("views", path.join(__dirname, "/views"));
app.listen(port, () => {
    console.log("listening to the port 3000");
})
app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    res.render("instagram.ejs", { username });
});

app.get('/ig/:username/:postId', (req, res) => {
    let { username, postId } = req.params;
    res.render("post.ejs", { username, postId });
});
app.get('/ig/:username/:postId/:commentId', (req, res) => {
    let { username, postId, commentId } = req.params;
    res.render("comment.ejs", { username, postId, commentId });
});
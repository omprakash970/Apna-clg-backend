//write aout query string basic code..
const express = require('express');
const app = express();
const port = 3000;
app.get('/:username/:profile', (req, res)=>{
    let{username, profile}=req.params; 
    console.log(req.params);

    res.send(`Username: ${username}, Profile: ${profile}`);
})

app.get('/search', (req, res)=>{
    let {q}=req.query; 
    res.send(`You searched for: ${q}`);
})    





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
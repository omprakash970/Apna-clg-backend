const express= require('express'); 
const app = express(); 
const port=3000; 
app.get('/', (req, res)=>{
res.send('Hello World ')
})
app.use((req, res)=>{
    console.log('New request received');
    res.send('<h1><Response from middleware</h1>');
})
app.listen(port, ()=>{
    console.log(`app is listening to the port ${port}`)
})
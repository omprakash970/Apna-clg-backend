const express= require('express'); 
const app = express(); 
const port=3000; 
app.get('/', (req, res)=>{
res.send('Hello World ')
})
app.use((req, res)=>{
    console.log('New request received');
})
app.listen(port, ()=>{
    console.log(`app is listening to the port ${port}`)
})
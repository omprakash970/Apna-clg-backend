const mongoose = require('mongoose');
let url="https://locohost:3000/users"; 
mongoose.connect("mongodb://127.0.0.1:27017/students");
main().then(()=>{
    console.log("Connected to MongoDB");
})

.catch(err => console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/students");
}
const userSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    city: String
    
});
const User = mongoose.model('User', userSchema);

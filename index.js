//Driver Code
const express = require('express');
const app = express();
const dbConnect = require("./config/database");
const todoRoutes = require("./routes/todos");
//Bad Practice

// app.listen(3000,()=>{
//     console.log("Server Started Successfully.")
// });
//Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;
// const PORT = 5000;
//controller ki body me se kuch data parse kiya hai title and description agar data parse krenge w/t any parser it would give an error
//middleware->to parse json request body
app.use(express.json());
// app.get("/",(req,res)=> {
//     res.send("API is working ✅");
// })
//route ko import karo wahi se execution flow hai
// const todoRoutes = require("./routes/todos");
//iske baad route ko mount krna hai ->additional chije url me daalni hai
app.use("/api/v1",todoRoutes);
app.get("/",(req,res)=> {
    res.send(`<h1>This is HomePage Neha Singhal</h1>`);
})
//server start
// app.listen(PORT, () =>{
//     console.log(`Server started at ${PORT}`)
// })
//db connection
// const dbConnect = require("./config/database");
dbConnect();

//default Route
// app.get("/",(req,res)=> {
//     res.send("API is working ✅");
// })
app.listen(PORT, () =>{
    console.log(`Server started at ${PORT}`)
})
console.log('After all setup');
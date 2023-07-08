const mongoose = require("mongoose");
const express = require('express')
const router = express.Router();
const dotenv = require("dotenv");
const app = express();
var cookieParser = require('cookie-parser')
dotenv.config({path:'./config.env'})
require('./db/conn')
const bodyParser = require("body-parser");
// const user = require('./model/userSchema')
const cors = require("cors")
app.use(cors({origin:"https://64a95584909083768baddf44--singular-biscotti-9ad961.netlify.app"}))
// json ne object ma convert karse
app.use(express.json())              //this is middleware
router.use(bodyParser.json());
app.use(cookieParser());  //this is added because when we get cookie we can write req.cookie.cookieName (which is written in authenticate.js file)
// we link router file to make our route easy
app.use(require('./router/auth'));       //this is middleware



const PORT = process.env.PORT || 5000

// middleware
// const middleware=(req,res,next)=>{
//     console.log("this is middleware");
//     next();
// }

// app.get('/',(req,res)=>{
//     res.send("this is home page (app.js)");
// })

// app.get('/about',middleware,(req,res)=>{
//     res.send("this is about page (app.js)");
// })
// app.get('/contact',(req,res)=>{
//     res.send("this is contact page (app.js)");
// })
// app.get('/signin',(req,res)=>{
//     res.send("this is signin page (app.js)");
// })
// app.get('/signnup',(req,res)=>{
//     res.send("this is signnup page (app.js)");
// })

app.listen(PORT,()=>{
    console.log(`server is running on port no. ${PORT}`)
})
// mongodb+srv://hrsdp2683:<password>@cluster0.crclqxx.mongodb.net/?retryWrites=true&w=majority


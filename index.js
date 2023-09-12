const app = require("./app");
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

app.listen(5500,function(){



     console.log("success");

 })
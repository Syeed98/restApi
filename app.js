const express=require('express');

const router=require("./src/routes/api")
const app=new (express);
//security import
const rateLimit=require('express-rate-limit')
const helmet=require('helmet')
const cors=require('cors')
const mongoSanitize=require('express-mongo-sanitize')
const hpp=require('hpp')
const xss=require('xss-clean')

// security implement
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());
app.use(cors());
app.use(helmet());

//security rate limit implement

const limiter=rateLimit({
    windowMs: 15*60*1000,
    max:5

});
app.use(limiter);


app.use("/api/v1",router);

//undefined routes

app.use('*',(req,res)=>{
    res.status(404). json({status:"fail",data:"not found"})

})



module.exports=app;
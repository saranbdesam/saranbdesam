const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./db/db.config");
db();
const route = require('./src/router/index');

app.use(express.json());
app.use('/api',(req,res,next)=>{
    next();
},route)

app.listen(process.env.PORT, () => {
    console.log(`server start on ${process.env.PORT}`);
})


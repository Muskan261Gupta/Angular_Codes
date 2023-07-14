const express=require('express');
const mysql2=require('mysql2');
const path=require('path');
const bodyParser = require('body-parser');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/pages'))
app.listen(3002,()=>{
    console.log("Server value");
})
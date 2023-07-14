const express = require('express');
const mysql2=require('mysql2');
const router=express.Router();
var studentauth=false;
var teacherauth=false;

const db=mysql2.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'hibernate'
    });
    db.connect((error)=>{
        if(error){
            console.log(error)
        }
        else{console.log("connected")}
    });



router.delete("/Student/:id",(req,res)=>{
 
    let id = req.params.id;
    db.query('DELETE FROM students WHERE rollno = ?' , id, function(error, result) {
        if (error)  {
            return console.error(error.message);
          }
    });
    res.send({message:"deleted"});
});

router.get("/Student/:id",(req,res)=>{
  
    let id = req.params.id;
    console.log(id);
    db.query('select * from students where rollno=?',id, function (error, result, fields) {
        if (error)  {
         return console.error(error.message);
       }
       if(result.length>=0)
       {
         res.send({message:"all students",
       data:result
       });
       }
 });
});

router.get("/Student",(req,res)=>{
 
    let sql1='SELECT * FROM students';
    db.query(sql1, (error, result, fields) => {
        if (error) {
          return console.error(error.message);
        }
        if(result.length>=0)
        {
          res.send({message:"all students",
        data:result
        });
        }
  
});
 
});

router.put("/Student/:id",(req,res)=>{
  
    let id = req.params.id;
    const data1=req.body;
    db.query('UPDATE students SET ? WHERE rollno =? ' ,[ data1,id], function(error, result) {
        if (error) {
            return console.error(error.message)}
    });
    res.send({message:"updated"});
   
});

router.post("/Student",(req,res)=>{
    const data1=req.body;
    console.log(data1);
    var sql = 'INSERT INTO students SET ?';
    db.query(sql, data1,function (error, data) { 
        if (error) {
            return console.error(error.message)}
    });
    res.send({message:"Inserted"});
    
});

router.get("/Teacher/:username",async(req,res)=>{
const name = req.params.username;
const password = req.params.password;
// const name = data.username;
// const password = data.password;

let sql = 'SELECT * FROM user1 where username=? ';
db.query(sql,[name], (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  if(results.length>0)
  {
    
      res.send({message:"all teachers",
    data:results
    });
    
   
  }
  
});
});



module.exports=router;
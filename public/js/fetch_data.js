const express = require('express');
const app= express(); 
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs"
});

app.get('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'}); 
    let sql='select *from mydatas';
    let query = con.query(sql,(err,results)=>{
        if(err)throw err;
        res.end(JSON.stringify(results)); 
    })
})
//this function is used to add with parameters
app.get('/temperatures/add',(req,res)=>{
    const {_email,_firstname,_id,_lastname,_reg_date}=req.query;
    const instertemperature =`insert into mydatas (email, firstname,id,lastname, reg_date) values('${_email}','${_firstname}','${_id}','${_lastname}','${_reg_date}')`;
        con.query(instertemperature,(err,results)=>{
            if (err){
            return res.send(err);
            }
            else{
                return res.send('user added successfully')
            }
        });
    });
app.listen('9000',() =>{
    console.log('server on port 9000')
})
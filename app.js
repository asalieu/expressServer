const express = require('express')
//var datats = import './fetch_data.js';
//var datas = require('./fetch_data.js')
const app = express()
const port = 9000

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/public/"+"index.html");
});
app.get('/measurement',(req,res)=>{
     
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
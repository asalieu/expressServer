var sql = require('mssql')

var dbConfig={
   server:"localhost\\PROJECTS",
   database:"nodejs",
   user:"sa",
   password:"password2$"
};

function getUser(){
    var conn= new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);

    conn.connect(function(err){
        if(err){
            console.log(err)
            return;
        }
        req.query("select *from nodejs",function(err,recordset){
            if(err){
                console.log(err)
                return;
            }
            else{
                console.log(recordset);
            }
            conn.close();
        });
    });
}
getUser();
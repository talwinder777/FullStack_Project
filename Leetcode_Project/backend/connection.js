const mysql = require("mysql");

//console.log("connection file");
var mysqlConection = mysql.createConnection({
    host : '127.0.0.1',
    port : "3306",
    user : "root",
    password : "root",
    //database : "users",
    //multipleStatements : true
    
});

mysqlConection.connect((err) => {
    console.log("connection file");
    if(!err){
        console.log("Connected");
    }
    else{
        console.log(err);
        console.log("Connection Failed");
    }
});

module.exports = mysqlConection; 

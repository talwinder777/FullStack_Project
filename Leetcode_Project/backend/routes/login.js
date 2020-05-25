var express = require("express");
var router = express.Router();
var mysqlConnection = require("../connection");
router.post("/", function(req, res, next){
    
    
    console.log("I love you")
   // res.send(req.body);
    let stmt = 'Select * from registeredUsers where email=? and pass=?';
    let todo=[req.body.email,req.body.password];
    mysqlConnection.query(stmt,todo, function(err, result){
        console.log(err);
        console.log(result);
       // console.log(result[0].email);
        if(result.length>0)
        {
            res.send({valid: 'True'});
        }
        else{

            res.send({valid: 'False'});
        }
    });

   
  });
  module.exports = router;
var express = require("express");
var router = express.Router();
var mysqlConnection = require("../connection");
router.post("/", function(req, res, next){
   //console.log("first name = "+req.body.firstName+" last name = "+req.body.lastName);
    res.send(req.body);
    // mysqlConnection.query("INSERT into registeredUsers values ("+req.body.firstName+", "
    //                       +req.body.lastName+", "
    //                       +req.body.email+", "
    //                       +req.body.password+")", (err, rows, fields) =>{
    //                         if(!err){
    //                           console.log("successfully inserted");
    //                         }
    //                         else{
    //                           console.log("try again");
    //                         }
    //                       });

    //mysqlConnection.query()
    //   knex.select('*')
    //   .from('users')
    //   .where('email', req.body.email)
    //   .then(function(results) {          
    //         knex('users')
    //         .insert([{
    //           first_name: req.body.first_name,
    //           last_name: req.body.last_name,
    //           email: req.body.email,
    //           password: bcrypt.hashSync(req.body.password, 15)
    //         }])
    //         .returning('id')
    //         .then(function(id) {
    //           req.session.user_id = id;
    //         })
    //         .catch(function(error) {
    //           console.error(error)
    //         });
    //       }
    //   })
    //   .catch(function(error) {
    //     console.error(error)
    //   });
    // // }
  });
  module.exports = router;
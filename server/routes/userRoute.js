/**
 * Created by kmjosephs on 1/13/16.
 */
var express = require('express');
var router = express.Router();
var User = require("../models/users");

router.post('/',function(req, res){
    console.log(req.body.firstname);
    var user = new User();
    user.firstname = req.body.firstname;

    user.save(function(err, data){
        if(err){
            console.log("Error: ", err);
        }

        res.render('create'); //Successful signup page
    });
});

module.exports = router;
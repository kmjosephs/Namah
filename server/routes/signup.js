/**
 * Created by kmjosephs on 1/8/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var mongoose = require('mongoose');
var User = require("../models/users");

router.get("/", function(req, res){
    User.find({}, function(err, data){
        if(err){
            console.log("Signup.js, Error: ", err)
        }
        res.send(data);
    });
});

//TODO router.post, need the names from the form

router.post('/',function(req, res){
    console.log(req.body.username);
    var user = new User();
    user.username = req.body.username;

    user.save(function(err, data){
        if(err){
            console.log("Error: ", err);
        }

        res.send(data);
    });
});


module.exports = router;
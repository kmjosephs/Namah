/**
 * Created by kmjosephs on 1/8/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res, next){
    res.render('signup', {title:'Sign Up!'});
});


module.exports = router;



/*router.get("/", function(req, res){
    User.find({}, function(err, data){
        if(err){
            console.log("Signup.js, Error: ", err)
        }
        res.send(data);
    });
});

//TODO router.post, need the names from the form




module.exports = router; */
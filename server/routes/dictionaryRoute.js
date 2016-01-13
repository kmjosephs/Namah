/**
 * Created by kmjosephs on 1/13/16.
 */
var express = require('express');
var router = express.Router();
var Dictionary = require('../models/dictionaries');

router.post('/', function(req, res){
    console.log(req.body.name);
    var dictionary = new Dictionary();
    dictionary.name = req.body.name;
    dictionary.ethcode = req.body.ethcode;

    dictionary.save(function(err, data){
        if(err){
            console.log("Error in dictionaryRoute.js: ", err);
        }
        res.render('lemma', {title:'Lemmas'});
    });

});

router.put('/', function(req, res){

});

module.exports = router;
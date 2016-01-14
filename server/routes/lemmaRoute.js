/**
 * Created by kmjosephs on 1/13/16.
 */
var express = require('express');
var router = express.Router();
var Lemma = require('../models/lemmas');

router.get('/', function(req, res){
    Lemma.find({}, function(err, data){
        if(err){
            console.log("Error: ", err);
        }
        res.send(data);
    });
});

router.post('/', function(req, res){
    console.log(req.body.word);
    var lemma = new Lemma();
    lemma.dictionaryId = req.body.dictionaryId;
    lemma.word = req.body.word;
    lemma.partOfSpeech = req.body.partOfSpeech;
    lemma.definition = req.body.definition;


    lemma.save(function(err, data){
        if(err){
            console.log("Error in lemmaRoute.js: ", err);
        }
        res.render('lemma', {title:'Lemmas'});
    });

});

router.put('/', function(req, res){

});

module.exports = router;

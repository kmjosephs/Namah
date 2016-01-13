/**
 * Created by kmjosephs on 1/13/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res, next) {
    res.render('viewdictionaries', { title: 'Current Dictionaries' });
});




module.exports = router;

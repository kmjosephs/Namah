/**
 * Created by kmjosephs on 1/13/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('create', {title:'Create Dictionary'});
});


module.exports = router;
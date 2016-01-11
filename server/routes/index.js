var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NamahLex' });
});

router.get('/create', function(req, res, next){
  res.render('create', {title:'Create Dictionary'});
})

/* Use this when you have html files
 router.get("/*", function(req,res){
 var file = req.params[0] || "assets/views/index.html";
 res.sendFile(path.join(__dirname, "../public/", file));
 });
 */

module.exports = router;

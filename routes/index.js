var express = require('express');
var router = express.Router();
var fs = require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {  
  console.log("test");
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.readFile('./views/manager/login.html', (err, data) => {
    if (err) {
      return console.error(err);
    }
    res.end(data, 'utf-8');
});
});

module.exports = router;
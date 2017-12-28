var express = require('express');
  // , router = express.Router()
var app = express();
var url = require('url');


// router.use('/comments', require('./comments'))
// router.use('/users', require('./users'))

// router.get('/', function(req, res) {
//   Comments.all(function(err, comments) {
//     res.render('index', {comments: comments})
//   })
// })
app.get('/:time', function (req, res) {	
  var output = { unix: null, natural: null };
  var ts = new Number(req.params.time);
  if (isNaN(ts)){
    var ptime = new Date(req.params.time);
  } else {
    var ptime = new Date(ts);
  }
	
  if(ptime && ptime.getTime()) {
    output.unix = ptime.getTime();
    output.natural = ptime.toDateString();
  }
  res.send(JSON.stringify(output))
})
module.exports = app
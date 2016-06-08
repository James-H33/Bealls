var express = require('express');
var app = express();

// Ports
var port = process.env.PORT || 5000;
var portIP = process.env.IP;

// Settings
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(port, portIP, function() {
  console.log('Server is listening on port.. ' + port);
})

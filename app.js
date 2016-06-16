var express = require('express');
var app = express();


// Require App Routes
var WomenRoutes = require('./routes/womenRoutes.js');
var MenRoutes = require('./routes/menRoutes.js');

// Ports
var port = process.env.PORT || 5000;
var portIP = process.env.IP;

// Settings
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug');

app.get('/', function(req, res) {

  var indexSales = {
    shoes: {
      product: 'Shoes',
      saleRate: '70%'
    }
  }

  var Products = indexSales;

  res.render('index', {Products: Products});
})

// Using Routes
app.use('/', WomenRoutes);
app.use('/', MenRoutes);

app.listen(port, portIP, function() {
  console.log('Server is listening on port.. ' + port);
})

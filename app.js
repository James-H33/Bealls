const express = require('express');
const app     = express();


// Require App Routes
const WomenRoutes = require('./routes/womenRoutes.js');
const MenRoutes = require('./routes/menRoutes.js');

// Ports
const port = process.env.PORT || 5000;
const portIP = process.env.IP;

// Settings
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug');

app.get('/', function(req, res) {

  const indexSales = {
    shoes: {
      product: 'Shoes',
      saleRate: '70%'
    }
  }

  const Products = indexSales;

  res.render('index', {Products: Products});
})

// Using Routes
app.use('/', WomenRoutes);
app.use('/', MenRoutes);

app.listen(port, portIP, function() {
  console.log('Server is listening on port.. ' + port);
})

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/men', function(req, res) {

  var Men = {
    shoes: {
      product: 'Shirts',
      saleRate: '20%',
    }
  }

  var Products = Men;

  res.render('men/men', {Products: Products});
});

router.get('/men/shirts', function(req, res) {
  var menShirts = [
    {
      name: 'Black Tee',
      price: '12.99'
    },
    {
      name: 'White Tee',
      price: '10.99'
    },
    {
      name: 'White Tee',
      price: '10.99'
    }
  ]

  var Shirts  = menShirts;

  res.render('products/products', {shirts: Shirts})
})

module.exports = router;

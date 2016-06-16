var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/women', function(req, res) {
  
  var Women = {
    shoes: {
      product: 'Shoes',
      saleRate: '50%',
    }
  }

  var Products = Women;

  res.render('women/women', {Products: Products});
});

module.exports = router;

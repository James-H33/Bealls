const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/women', function(req, res) {

  const Women = {
    shoes: {
      product: 'Shoes',
      saleRate: '50%',
    }
  }

  const Products = Women;

  res.render('women/women', {Products: Products});
});

module.exports = router;

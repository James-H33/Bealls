const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/women', function(req, res) {

  const Women = {
    shoes: {
      product: 'Pants',
      saleRate: '50%',
    }
  }


  res.render('women/women', {Products: Women});
});

module.exports = router;

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
      price: '12.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=301-3349-4008-01-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1'
    },
    {
      name: 'White Tee',
      price: '10.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=301-3349-4008-01-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1'
    },
    {
      name: 'White Tee',
      price: '10.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=301-3349-4008-01-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1'
    },
    {
      name: 'White Tee',
      price: '10.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=301-3349-4008-01-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1'
    },
    {
      name: 'White Tee',
      price: '10.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=301-3349-4008-01-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1'
    }
  ]

  var Shirts  = menShirts;

  res.render('products/products', {shirts: Shirts})
})

module.exports = router;

const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose');



router.get('/men', function(req, res) {

  const Men = {
    shoes: {
      product: 'Shirts',
      saleRate: '20%',
    }
  }

  res.render('men/men', {Products: Men});
});



router.get('/men/shirts', function(req, res) {

  const spec = req.params.itemSpec;
  // console.log(itemSpec);

  var menShirts = [
    {
      name: 'Black Tee',
      price: '12.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=301-3349-4008-01-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1',
      brand: 'Vulcan',
      color: 'black'
    },
    {
      name: 'White Tee',
      price: '10.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=470-1458-4765-01-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1',
      brand: 'Vulcan',
      color: 'blue'
    },
    {
      name: 'White Tee',
      price: '10.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=469-7938-7840-45-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1',
      brand: 'Vulcan',
      color: 'blue'
    },
    {
      name: 'White Tee',
      price: '10.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=470-1458-4763-41-yyy&$layer_3_hide=1&$layer_4_hide=1&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1',
      brand: 'Vulcan',
      color: 'black'
    },
    {
      name: 'White Tee',
      price: '10.99',
      image: 'http://images.beallsflorida.com/is/image/Bealls/ThumbnailImg?$layer_2_src=323-1602-7311-08-yyy&$layer_3_hide=1&$layer_4_src=Bealls/Bealls%20Exclusive&$layer_4_hide=0&$layer_5_hide=1&$layer_6_hide=1&$layer_7_hide=1',
      brand: 'Vulcan',
      color: 'black'
    }
  ]

  const title = 'Men\'s Shirts';

  res.render('products/products', {shirts: menShirts, title: title})
})



module.exports = router;

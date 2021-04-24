const express = require('express');
const router = express.Router();
const cors = require('cors')


// sdk mercadopago
const mercadopago = require('mercadopago')


//add credentials
mercadopago.configure({
  access_token: "s"
})


router.options("*", cors());


router.post('/checkout',function (req, res) {


  const { title, price,quantity } = req.body

  console.log(1, req.body)
  console.log(2, title, price,quantity)

  let preference = {
    items: [
      {
        title: title,
        unit_price: price,
        quantity: quantity,
      }, 
    ]
  };
  mercadopago.preferences.create(preference)
    .then(function (response) {

      res.send(response.body.init_point)
      console.log(response.body.init_point)


    }).catch(function (error) {
      console.log(error);
    });

});





module.exports = router;

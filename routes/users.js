const express = require ('express');
const router = express.Router();
const userController = require ('../userController')
const userServices = require ('../userServices/userServices')
const UserInstance = new userController(new userServices)
const passport = require('passport');


router.post('/login',passport.authenticate("local"),(req,res) => {
   
    res.status(200).send("usuario logueado con exito") 
}) 

router.post('/create', (req,res) => {

    UserInstance.createUser(req,res)

})

router.get('/database/:nombre', (req,res)  => {
    UserInstance.getUsers(req,res)
})

module.exports = router;
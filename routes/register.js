const express = require('express');
const router = express.Router();

/* GET home page */
//router.get('/', function(req,res,next){
   //res.render('register', {title: 'Register'});
//});

router.post('/', function(req,res,next){
    console.log("Hæ");
    const email = req.body.email;
    const password = req.body.pw;
    const passwordReapet = req.body.cfpw;

    console.log(email);
    console.log(password);

    res.render('register', {title: 'Register Done'});

});

module.exports = router;
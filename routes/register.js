const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcrypt');
/* GET home page */
router.get('/', function(req,res,next){
   res.render('register', {title: 'Register'});
});

router.post('/', function(req,res,next){
    const email = req.body.email;
    const password = req.body.pw;
    const passwordReapet = req.body.cfpw;

    if(!(/^[a-zA-Z0-9-]+@[a-zA-Z0-]+[a-zA-Z0-9-]/.test(email))){
        res.render('register', {title:"Wrong email"});
    }else if(password !== passwordReapet){
        res.render('register', {title: "Passwords do not match"});
    }else{
        fs.readFile("users.json", 'utf8', function (err, data){
        if(err){
                console.log(err);
            }else{
            bcrypt.hash(password, 10, function (err,hash) {
                data = JSON.parse(data);
                data.users.push({
                    email: email,
                    password: hash,
                });

                data = JSON.stringify(data);
                fs.writeFile("users.json", data, 'utf8',function (err,data){
                    if(err) {
                        console.log(err);
                    }else{
                        res.render('register', {title:"Registered"})
                    }
                })
            })

        }
        })
    }

    res.render('register', {title: 'Register Done'});

});

module.exports = router;
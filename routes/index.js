const express = require('express');
const router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile("games.json", "utf8",function (err,data) {
      if(err){
        console.log(err);
      }else{
        data = JSON.parse(data);
        res.render('index', { title: 'Leikjasíða',data:data });
      }
  })
});

module.exports = router;

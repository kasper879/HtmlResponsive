var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var path    = require("path");

//var {Product} = require('../Model/product');

module.exports = router;

router.get('/home', (req, res) => {
    console.log("dsd" + __dirname+'/../views')
    res.sendFile(path.join(__dirname+'/../views/index.html'));
}); 

router.get('/nav', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/navBar.html'));
}); 
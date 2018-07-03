var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var path    = require("path");

//var {Product} = require('../Model/product');

module.exports = router;

router.get('/responsiv', (req, res) => {
   console.log('ramt');
    res.sendFile(path.join(__dirname+'/../views/responsiv.html'));
}); 

router.get('/colors', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/colors.html'));
}); 

router.get('/textFormating', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/textFormating.html'));
}); 

router.get('/buttons', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/buttons.html'));
}); 

router.get('/icons', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/icons.html'));
}); 

router.get('/responsiveGrid', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/responsiveGrid.html'));
}); 

router.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/navbar.html'));
}); 

router.get('/cards', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/cards.html'));
}); 
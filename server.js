var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var homeRouter = require('./Routes/homeRouter'); 
var path    = require("path");
var public = path.join(__dirname, 'public');
//var {mongoose} = require('./MongoDb/connection');

mongoose = process.env.MONGOLAB_URI; 

const port = process.env.PORT || 8080;
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', '*');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', '*');

  // Pass to next layer of middleware
  next();
});



//setup routes
app.use(express.static(path.join(__dirname, '/public/'))); 
app.use('/', homeRouter);



//error handling 
app.get('*', function(req, res){
  res.send('what???', 404);
});

app.listen(port, () => {
  console.log(`the server is running ${port} `);
}); 

module.exports = app
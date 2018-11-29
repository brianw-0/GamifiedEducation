var express = require("express");
var app     = express();
var path    = require("path");


//__dirname : It will resolve to your project folder.

//Here we establish the folders that Node will locate files from.
var viewsFolder = '/view';
app.use(express.static(__dirname + viewsFolder));
var stylesheetsFolder = '/stylesheet';
app.use(express.static(__dirname + stylesheetsFolder));
var scriptsFolder = '/script';
app.use(express.static(__dirname + scriptsFolder));
var dataFolder = '/assets';
app.use(express.static(__dirname + dataFolder));
//var dataFolder = '/example';
//app.use(express.static(__dirname + dataFolder));


//Get files under the examples directory, send to setupInteface.js
/*var fs = require('fs');
var files = fs.readdirSync('./example/');
exports.exampleFiles = files;
require('./script/setupInterface.js');*/

app.get('/',function(req,res){
  res.sendFile('index.html');
  //Find index.html from any of the above listed folders
});

//app.get('/about',function(req,res){
//  res.sendFile(path.join(__dirname+'/about.html'));
//});

//app.get('/sitemap',function(req,res){
//  res.sendFile(path.join(__dirname+'/sitemap.html'));
//});

app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");
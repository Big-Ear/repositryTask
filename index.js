/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 *'use strict';


 */

//module.exports = require('./lib/express');
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './app/html', 'index.html'));
  //res.sendFile('d:/JSMentoring/repositoryTask/app/html/index.html');
});
app.use('/lib', express.static('d:/JSMentoring/repositoryTask/bower_components'));
app.use('/js', express.static('d:/JSMentoring/repositoryTask/app/js'));
app.use('/css', express.static('d:/JSMentoring/repositoryTask/app/css'));
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

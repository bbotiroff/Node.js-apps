var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact', {data: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
  var data = {person: req.params.name, age: 25, job: '????', hobbies: ['coding', 'soccer', 'learning']};
  res.render('profile', {data: data});
});


app.listen(3000);
console.log('listening to port #3000')

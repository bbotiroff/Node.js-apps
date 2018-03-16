var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/styles', express.static('assets'));


app.get('/', function(req, res){
  res.render('index');
});

app.get('/:urlid', function(req, res){
  console.log('it is ' + req.params.urlid);
  res.render('contact');

});

app.get('/profile/:name', function(req, res){
  var data = {person: req.params.name, age: 25, job: '????', hobbies: ['coding', 'soccer', 'learning']};
  res.render('profile', {data: data});
});


app.listen(8000);
console.log('listening to port #8000')

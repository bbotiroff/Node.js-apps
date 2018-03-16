var express = require('express');
var todoController = require('./controllers/todoController');


var app = express();

//static files
app.use(express.static('public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/public');


//fire controllers
todoController(app);

//listen port
app.listen(8000);
console.log('listening to port #8000');

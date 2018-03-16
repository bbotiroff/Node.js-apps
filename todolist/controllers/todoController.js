var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  var data = [{item:'get it'},{item: 'oranges'},{item: 'apples'}];

  app.get('/todo', function(req, res){
    res.render('./index.html');
  });


  app.post('/',urlencodedParser, function(req, res){
    data.push(req.body);
    console.log(data);
    res.json(data);
  });









  // app.delete('/todo/:item', function(req, res){
  //   data = data.filter(function(todo){
  //     return todo.item.replace(/ /g, "-") !== req.params.item;
  //   });
  //   res.json(data);
  // });
};

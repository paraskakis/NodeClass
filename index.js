var express = require('express');
var superagent = require('superagent');
var consolidate = require('consolidate');


var app = express();

//Configure tempate engine
app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//Set up static folder
app.use(express.static(__dirname + '/public'));

var user = 'azat_co';
var story_slug = 'kazan';

//Paste your values
var api_key = "5212d458cc3075442b075101";
var username = "";
var _token = "";

app.get('/',function(req, res){
  //Fetch elements from Storify API
  superagent.get("http://api.storify.com/v1/stories/" + user + "/" + story_slug)
    .query({api_key: api_key,
      username: username,
      _token: _token})
    .set({  Accept: 'application/json' })
    .end("hi")

})

app.listen(3001);
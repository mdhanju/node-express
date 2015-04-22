var express = require('express');
var routes = require('./app/routes');
var user = require('./app/routes/user');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();


//all environments 
app.set('port', process.env.port || 3000);
app.set('host', process.env.host || 'localhost');
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

//app.use(router);
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/')));

//app.use(express.bodyParser());
//app.use(express.methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.all('/', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});
app.get('/', routes.index);
app.get('/users', user.list);
app.post('/signIn', routes.signIn);

http.createServer(app).listen(app.get('port'), app.get('port'), function () {
    console.log('Server  started  http://' + app.get('host') + ":" + app.get('port'));
});
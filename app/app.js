var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();


//all environments 
app.set('port', process.env.port || 3000);
app.set('host', process.env.host || 'localhost');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//app.use(router);
app.use(express.static(path.join(__dirname, '../')));
// app.use(express.static(path.join(__dirname, '/')));

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

app.get('/searching', routes.searching);
//app.get('/searching', function (req, res) {
//    //    res.send("WHEEE");
//    var val = req.query.search;
//    console.log(val);
//    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + val;
//    console.log(url);
//    request(url, function (err, resp, body) {
//        body = JSON.parse(body);
//
//        if (err) {
//            console.log(err);
//        } else {
//            console.log(body);
//        }
//
//    });
//});

http.createServer(app).listen(app.get('port'), app.get('port'), function () {
    console.log('Server  started  http://' + app.get('host') + ":" + app.get('port'));
});
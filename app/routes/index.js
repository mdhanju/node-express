/*
 * Get Home Page
 */

var request = require('request');

exports.index = function (req, res) {
    res.render('index', {
        title: 'Express'
    });
};


exports.signIn = function (req, res) {
    res.render('signIn', req.body);
};

exports.searching = function (req, res) {
    //    res.send("WHEEE");
    var val = req.query.search;
    console.log(val);
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + val;
    console.log(url);
    request(url, function (err, resp, body) {
        body = JSON.parse(body);

        if (err) {
            console.log(err);
        } else {
            console.log(body);
        }
        res.send(body);
    });
};
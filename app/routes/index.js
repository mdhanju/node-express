/*
 * Get Home Page
 */

var request = require('request');

exports.home = function (req, res) {
    res.render('home', {
        title: 'Express'
    });
};

exports.employees = function (req, res) {
    res.render('employees', {
        title: 'Express'
    });
};

exports.services = function (req, res) {
    res.render('services', {
        title: 'Express'
    });
};

exports.contact = function (req, res) {
    res.render('contact', {
        title: 'Express'
    });
};

exports.career = function (req, res) {
    res.render('career', {
        title: 'Express'
    });
};

exports.mission = function (req, res) {
    res.render('mission', {
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
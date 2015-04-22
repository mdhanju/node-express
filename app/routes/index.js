/*
 * Get Home Page
 */

exports.index = function (req, res) {
    res.render('index', {
        title: 'Express'
    });
};


exports.signIn = function (req, res) {
    res.render('signIn', req.body);
};
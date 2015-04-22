var zombie = require('zombie');

var WorldConstructor = function WorldConstructor(callback) {

    var browser = new zombie();

    var world = {
        browser: browser,
        visit: function (url, callback) {
            console.log(" **** Before Browser Launch **** ");
            this.browser.visit(url, callback);
            console.log(" **** After Browser Launch **** ");
        }
    };


    callback(world);

};
exports.World = WorldConstructor;
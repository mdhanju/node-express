var browserHelper = require('../support/browserhelper.js');
var indexSteps = function () {

    this.World = require("../support/world.js").World;


    this.Given(/^I am on home page$/, function (callback) {
        //        this.visit('http://github.com/cucumber/cucumber-js', callback);
        this.visit('http://localhost:3000', callback);
        //        callback();
    });

    this.When(/^I see home tab$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var pageTitle = this.browser.text('title');
        console.log('Page Title = ' + pageTitle);
        callback();
    });

    this.When(/^I see about tab$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.When(/^I see home content$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.When(/^I click on about tab$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I see about content$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending

    });
};

module.exports = indexSteps;
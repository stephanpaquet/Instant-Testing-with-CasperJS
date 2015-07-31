/*global casper */

casper.test.begin('Log in', 1, function (test) {
    "use strict";

    casper.start('http://www.plomino.net/samples', function () {
        this.fill('#loginform', {
            '__ac_name': 'demouser',
            '__ac_password': 'demouser'
        }, true);
    });

    casper.then(function () {
        test.assertTextExists('Welcome! You are now logged in', 'We are logged in.');
    });

    casper.run(function () {
        test.done();
    });
});


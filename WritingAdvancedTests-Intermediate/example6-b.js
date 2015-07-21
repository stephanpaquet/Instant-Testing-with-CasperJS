/*global casper */
casper.test.begin('Log in', 1, function (test) {
    "use strict";

    casper.start();

    casper.setHttpAuth('demoaccount', 'demoaccount');

    casper.thenOpen('http://www.plomino.net/zmiroot/testpage', function () {
        test.assertTextExists('You are logged in.', 'Now we can see the page.');
    });

    casper.run(function () {
        test.done();
    });
});

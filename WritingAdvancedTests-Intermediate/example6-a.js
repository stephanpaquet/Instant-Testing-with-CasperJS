/*global casper */
casper.test.begin('Log in', 1, function (test) {
    "use strict";

    casper.start('http://www.plomino.net/zmiroot/testpage', function () {
        test.assertHttpStatus(401, 'We cannot see the page as we are not logged in.');
    });

    casper.run(function () {
        test.done();
    });
});

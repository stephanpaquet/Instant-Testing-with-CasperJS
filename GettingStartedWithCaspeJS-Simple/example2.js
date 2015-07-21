/*global casper */

// casperjs test example2.js

casper.test.begin('Test my form', 3, function (test) {
    "use strict";

    casper.start('http://localhost:8000/example2.html', function () {
        test.assertVisible("button#button1");
        test.assertSelectorHasText("button#button1", "Click me");
    });

    casper.then(function () {
        this.click("button#button1");
    });

    casper.then(function () {
        test.assertSelectorHasText("button#button1", "Done");
    });

    casper.run(function () {
        test.done();
    });
});

/*global casper */

casper.test.begin('Test mouse events', 1, function (test) {
    "use strict";

    casper.start('http://localhost:8000/WritingAdvancedTests-Intermediate/example9.html', function () {
        this.mouseEvent('mouseover', '#chap1');
        this.mouseEvent('mouseover', '#chap4');
        this.mouseEvent('mouseover', '#chap1');
        this.mouseEvent('mouseover', '#chap1');
    });

    casper.then(function () {
        test.assertSelectorHasText('#counter', "4");
    });

    casper.run(function () {
        test.done();
    });
});

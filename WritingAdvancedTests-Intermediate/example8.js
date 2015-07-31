/*global casper  */

casper.test.begin('Test key inputs', 1, function (test) {
    "use strict";

    casper.start('http://localhost:8000/WritingAdvancedTests-Intermediate/example8.html', function () {
        this.sendKeys('input[name="firstname"]', 'Stéphan');
    });

    casper.then(function () {
        test.assertSelectorHasText('#message', "You have entered 7 characters.");
    });

    casper.run(function () {
        test.done();
    });
});

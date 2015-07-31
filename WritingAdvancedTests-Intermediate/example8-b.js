/*global casper  */

casper.test.begin('Test key inputs', 2, function (test) {
    "use strict";

    casper.start('http://localhost:8000/WritingAdvancedTests-Intermediate/example8-b.html', function () {
        this.sendKeys('input[name="firstname"]', 'Stéphan');
    });

    casper.then(function () {
        test.assertSelectorHasText('#message', "You have entered 7 characters.");
    });

    casper.then(function () {
        this.click('h1');
        this.sendKeys('h1', 'I have changed my header');
    });

    casper.then(function () {
        test.assertSelectorHasText('h1', "I have changed my header");
    });

    casper.run(function () {
        test.done();
    });
});


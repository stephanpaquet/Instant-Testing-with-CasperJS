/*global casper */

// casperjs test example3-a.js

// We need to set up a regular user agent to make sure that geonames.org will accept to process our request.
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');

casper.test.begin('Search a city by name', 1, function (test) {
    "use strict";

    casper.start('http://localhost:8000/example3.html', function () {
        this.sendKeys("input#searchedlocation", "barcelona");
        this.click("button#search");
    });

    casper.then(function () {
        test.assertTextExists('Barcelona (Catalonia)', 'Barcelona (Catalonia) has been found.');
    });

    casper.run(function () {
        test.done();
    });
});
    
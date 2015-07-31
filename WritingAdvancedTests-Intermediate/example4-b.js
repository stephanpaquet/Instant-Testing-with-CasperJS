/*global casper, require */

var casper = require('casper').create();

casper.start('http://localhost:8000/WritingAdvancedTests-Intermediate/example4.html', function () {
    "use strict";

    this.download("http://localhost:8000/files/text.txt", "text.txt");
    this.download("http://localhost:8000/files/text.pdf", "text.pdf");
});


casper.run();

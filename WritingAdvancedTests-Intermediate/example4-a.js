/*global casper, require */
// casperjs --ssl-protocol=any example4-a.js

var casper = require('casper').create();

casper.start('http://localhost:8000/WritingAdvancedTests-Intermediate/example4.html', function () {
    "use strict";

    this.click("#link-to-text");
});

casper.then(function () {
    "use strict";

    // http://localhost:8000/WritingAdvancedTests-Intermediate/files/text.txt
    this.echo(this.getCurrentUrl());
});

casper.thenOpen('http://localhost:8000/WritingAdvancedTests-Intermediate/example4.html', function () {
    "use strict";

    this.click("#link-to-pdf");
});

casper.then(function () {
    "use strict";

    // http://localhost:8000/WritingAdvancedTests-Intermediate/example4.html
    this.echo(this.getCurrentUrl());
});

casper.run();

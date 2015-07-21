/*global casper, require */

var casper = require('casper').create();

casper.start('http://localhost:8000/example4.html', function () {
    "use strict";

    this.click("#link-to-text");
});

casper.then(function () {
    "use strict";

    this.echo(this.getCurrentUrl()); // http://localhost:8000/files/text.txt
});

casper.thenOpen('http://localhost:8000/example4.html', function () {
    "use strict";

    this.click("#link-to-pdf");
});

casper.then(function () {
    "use strict";

    this.echo(this.getCurrentUrl()); // http://localhost:8000/example4.html

});

casper.run();

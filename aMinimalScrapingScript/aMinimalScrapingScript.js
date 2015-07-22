/*global require */
var casper = require('casper').create();

casper.start('http://casperjs.org/', function () {
    "use strict";

    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function () {
    "use strict";

    this.echo(this.getTitle());
});

casper.run();

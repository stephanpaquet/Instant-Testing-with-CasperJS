/*global require */
// casperjs --ssl-protocol=any  example1-a.js


var casper = require('casper').create(); // get a new Casper instance

casper.userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36');

casper.start('http://en.wikipedia.org/', function () {
    "use strict";

    this.echo(this.getTitle());
});

casper.run();

/*global require, casper */
/*
1.	 Go to http://imagebin.org .
2.	 Click on the Add your image now! link.
3.	 Then, fill in the image submission form.
4.	 Assert that we obtain a page containing our image.
5.	 Display this page URL.
*/

var x = require('casper').selectXPath;

casper.test.begin('Upload a file', 1, function (test) {
    "use strict";

    casper.start('http://imagebin.ca/', function () {
    });
    
    casper.then(function () {

        this.fill("form#upload", {
            'file': './test.jpg',
            'title': 'my test',
            'description': 'just a test'
        }, true);
    });

    casper.then(function () {
        test.assertExists('img[alt="my test"]', "The image has been uploaded");
        this.echo("It is available here: " + this.getCurrentUrl());
    });

    casper.run(function () {
        test.done();
    });
    
});
    
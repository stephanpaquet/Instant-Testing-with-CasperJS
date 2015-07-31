/*global require, casper */
/*
1.	 Go to http://imagebin.ca.
2.	 Click on the Image File: upload button.
3.	 Then, fill in the image submission form.
4.	 Assert that we obtain a page containing our image.
5.	 Display this page URL.
*/

// casperjs test example5.js
var utils = require('utils');

casper.test.begin('Upload a file', 1, function (test) {
    "use strict";

    casper.start('http://imagebin.ca/', function () {
    });
    
    casper.then(function () {
        this.capture("example5-before-filling-form.png");

        this.fill("form#upload", {
            'file': 'test.jpg',
            'title': 'My test picture',
            'description': 'This is a picture uploaded with Casper'
        }, true);
    });

    casper.then(function () {
        this.waitUntilVisible('#final .alert-success ul > li:first-of-type a', function () {
            var element;

            test.assertExists('#final .alert-success ul > li:first-of-type a', "The image has been uploaded");
            element = this.getElementsInfo('#final .alert-success ul > li:first-of-type a');
            this.echo("It is available here: " + element[0].attributes.href);

            casper.thenOpen(element[0].attributes.href, function () {
                this.capture("example5-uploaded-image-page.png");
            });
        });
    });

    casper.run(function () {
        test.done();
    });
    
});
    
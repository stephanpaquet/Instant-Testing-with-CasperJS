/*global casper, require */

/*

The tests pass with the first form as expected, but they also pass with the other two!

Why is that? It's because the fill() method is blind to the mistakes we have introduced in the forms; it just performs a submission without checking if a real user could actually do the same.

casperjs test example11-2.js --formid=form1
casperjs test example11-2.js --formid=form2
casperjs test example11-2.js --formid=form3
*/

var formid = casper.cli.options.formid;

casper.test.begin('Test form submission', 3, function (test) {
    "use strict";

    casper.start('http://localhost:8000/BestPractices-Intermediate/example11.html', function () {
        this.sendKeys("form#" + formid + " input[name='firstname']", "Isaac");
        this.sendKeys("form#" + formid + " input[name='lastname']", "Newton");
        this.sendKeys("form#" + formid + " input[name='age']", "370");

        this.click("form#" + formid + " input[type=submit][value='Save']");
    });

    casper.then(function () {
        test.assertUrlMatch(/firstname=Isaac/);
        test.assertUrlMatch(/lastname=Newton/);
        test.assertUrlMatch(/age=370/);
        
    });

    casper.run(function () {
        test.done();
    });
});

/*global casper, $ */
/*jslint eqeq: true*/

/*
- We set the viewport size (using the viewportSize option). In our case, it is useful because we need to make sure that we have enough room to move the box where we want.

- We use jQuery to get the current position of the box! As jQuery is loaded in our tested page, we can use it through assertEval(), as it runs the code in the tested page.

- We use down() , then move() , and then up() to produce a drag-and-drop move from point (5,5) to point (400,200).
*/

casper.options.viewportSize = {
    width: 1024,
    height: 768
};

casper.test.begin('Test drag&drop', 2, function (test) {
    "use strict";

    casper.start('http://localhost:8000/WritingAdvancedTests-Intermediate/example10.html', function () {
        test.assertEval(function () {
            var pos = $('#box').position();
            return (pos.left == 0 && pos.top == 0);
        }, "The box is at the top");

        this.mouse.down(5, 5);
        this.mouse.move(400, 200);
        this.mouse.up(400, 200);
    });

    casper.then(function () {
        test.assertEval(function () {
            var pos = $('#box').position();
            return (pos.left == 395 && pos.top == 195);
        }, "The box has been moved");
    });

    casper.run(function () {
        test.done();
    });
});

# Instant-Testing-with-CasperJS
Instant Testing with CasperJS

## Installer casperjs - Ubuntu
npm install -g phantomjs
npm install -g casperjs

## Démarer le serveur 
```
python -m SimpleHTTPServer
```

``` Javascript
var utils = require('utils');

utils.dump("Something to dump");
```

## Bonnes pratiques
- The main point here is that we must always be careful to keep as close as possible to the user interactions.
- Some precise tests focusing on the user interactions (where we will use sendKeys() and click() instead of fill() , for instance) to make sure each page is usable by itself
- Some concise tests focusing on screen chaining and usage scenarios (where we can
use fill() , for instance) to make sure the complete application is working fine

| Instead of | Prefer | Because |
| ---------- | ------ | ------- |
| "div#form-container span input" | "form[name='registration'] input[name='firstname']" | We only depend on form elements and their names |
| "div ul li:first-child a" | "#results .result:first-child a" | We use IDs and classes instead of tag names |
| "a#reset-btn" | x("//a[normalize-space(text())='Reset']") | We use the link text instead of its ID (and to do this, we switch to the XPath selector) |

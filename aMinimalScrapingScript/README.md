## What we test?
1. we created a new Casper instance
1. we started it and opened http://casperjs.org/
1. once the page has been loaded, we asked to print the title of that webpage (the content of its **title** tag)
1. then we opened another url, http://phantomjs.org/
1. once the new page has been loaded, we asked to print its title too

## Execution
```
casperjs aMinimalScrapingScript.js 
```

## Output
```
CasperJS, a navigation scripting and testing utility for PhantomJS and SlimerJS
PhantomJS | PhantomJS
```


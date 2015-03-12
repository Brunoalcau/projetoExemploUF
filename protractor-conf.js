var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  baseUrl:'http://localhost:9000',

  specs: [
  	'test/e2e/**/*-e2e.js'
  ],
  capabilities: {
  	'browserName': 'chrome'
  }, 
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'test/result-test'
      }));
   },
   framework: 'jasmine'

};
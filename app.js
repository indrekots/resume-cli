var html = require('./html.js');
var pdfWriter = require('./pdfWriter.js');
var argv = require('./argParser.js');

var inputFile = argv.input;
var outputFile = argv.output || 'resume';

var notSpecified = !argv.html && !argv.pdf && !argv.all;

html.read(inputFile, function(result) {
  if (notSpecified || argv.html || argv.all) {
    html.write(result.html, outputFile);
  }

  if (notSpecified || argv.pdf || argv.all) {
    pdfWriter.write(result.html, outputFile);
  } 
});


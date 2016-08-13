var htmlWriter = require('./htmlWriter.js');
var pdfWriter = require('./pdfWriter.js');
var argv = require('./argParser.js');

var inputFile = argv.input;
var outputFile = argv.output || 'resume';

var notSpecified = !argv.html && !argv.pdf && !argv.all;

if (notSpecified || argv.html || argv.all) {
  htmlWriter.write(inputFile, outputFile);
}

if (notSpecified || argv.pdf || argv.all) {
  pdfWriter.write(inputFile, outputFile);
}

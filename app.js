var htmlWriter = require('./htmlWriter.js');
var pdfWriter = require('./pdfWriter.js');
var argv = require('./argParser.js');

var inputFile = argv.input;
var outputFile = argv.output || 'resume';

htmlWriter.write(inputFile, outputFile);
pdfWriter.write(inputFile, outputFile);

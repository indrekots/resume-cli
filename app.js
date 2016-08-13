var htmlWriter = require('./htmlWriter.js');
var pdfWriter = require('./pdfWriter.js');
var argv = require('yargs')
  .alias('i', 'input')
  .demand('i', 'Specify path to the file which contains resume content in markdown')
  .nargs('i', 1)
  .describe('i', 'Resume content in markdown')
  .argv;

var inputFile = argv.input;
htmlWriter.write(inputFile, 'resume.html');
pdfWriter.write(inputFile, 'resume.pdf');

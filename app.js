var htmlWriter = require('./htmlWriter.js');
var pdfWriter = require('./pdfWriter.js');
var argv = require('yargs')
  .usage('Usage: $0 [options]')
  .example('$0 -i resume.md', 'Reads resume.md and generates an HTML and PDF doucment containing the resume content') 
  .alias('i', 'input')
  .demand('i', 'Specify path to the file which contains resume content in markdown')
  .nargs('i', 1)
  .describe('i', 'Resume content in markdown')
  .argv;

var inputFile = argv.input;
htmlWriter.write(inputFile, 'resume.html');
pdfWriter.write(inputFile, 'resume.pdf');

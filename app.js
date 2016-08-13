var htmlWriter = require('./htmlWriter.js');
var pdfWriter = require('./pdfWriter.js');
var argv = require('yargs')
  .usage('Usage: $0 [options]')
  .example('$0 -i resume.md', 'Reads resume.md and generates an HTML and PDF doucment containing the resume content') 
  .alias('i', 'input')
  .demand('i', 'Specify path to the file which contains resume content in markdown')
  .nargs('i', 1)
  .describe('i', 'Resume content in markdown')
  .alias('o', 'output')
  .nargs('o', 1)
  .describe('o', 'Output file name without file extension, if missing, output is written to "resume.html" and/or "resume.pdf"')
  .argv;

var inputFile = argv.input;
var outputFile = argv.output || 'resume';
htmlWriter.write(inputFile, outputFile);
pdfWriter.write(inputFile, outputFile);

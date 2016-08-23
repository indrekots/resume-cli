var pdfWriter = require('./pdfWriter.js');
var fs = require('fs');
var html = require('./htmlWriter.js');
var parse = require('markdown-parse');
var argv = require('./argParser.js');

var inputFile = argv.input;
var outputFile = argv.output || 'resume';

var notSpecified = !argv.html && !argv.pdf && !argv.all;

var content = fs.readFileSync(inputFile, 'utf8');
parse(content, function(err, result) {
  if (notSpecified || argv.html || argv.all) {
    html.write({content: result, outFile: outputFile});
  }

  if (notSpecified || argv.pdf || argv.all) {
    pdfWriter.write(result.html, outputFile);
  } 
});


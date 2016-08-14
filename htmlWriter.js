var fs = require('fs');
var marked = require('marked');

var header = '<!DOCTYPE html><head></head><body>';
var footer = '</body></html>';

var write = function(inputFile, outFile) {
  outFile = outFile + '.html' || 'resume.html';
  var htmlOutput = marked(fs.readFileSync(inputFile, 'utf8'));
  htmlOutput = header + htmlOutput + footer;
  fs.writeFile(outFile, htmlOutput, function(err) {
    if (err) throw err;
    console.log(outFile + ' created');
  });
}

module.exports.write = write;

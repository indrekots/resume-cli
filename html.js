var fs = require('fs');

var header = '<!DOCTYPE html><head></head><body>';
var footer = '</body></html>';


var write = function(content, outFile) {
  outFile = outFile + '.html' || 'resume.html';
  htmlOutput = header + content + footer;
  fs.writeFile(outFile, htmlOutput, function(err) {
    if (err) throw err;
    console.log(outFile + ' created');
  });
}

module.exports.write = write;

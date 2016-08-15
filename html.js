var fs = require('fs');
var parser = require('markdown-parse');

var header = '<!DOCTYPE html><head></head><body>';
var footer = '</body></html>';

var read = function(file, fn) {
  var content = fs.readFileSync(file, 'utf8');
  parser(content, function(err, result) {
    if (err) throw err;
    fn(result);    
  });
}

var write = function(content, outFile) {
  outFile = outFile + '.html' || 'resume.html';
  htmlOutput = header + content + footer;
  fs.writeFile(outFile, htmlOutput, function(err) {
    if (err) throw err;
    console.log(outFile + ' created');
  });
}

module.exports.write = write;
module.exports.read = read;

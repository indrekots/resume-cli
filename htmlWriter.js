var fs = require("fs");
var marked = require("marked");

var write = function(inputFile, outFile) {
  outFile = outFile || "resume.html";
  var htmlOutput = marked(fs.readFileSync(inputFile, 'utf8'));
  fs.writeFile(outFile, htmlOutput, function(err) {
    if (err) throw err;
    console.log(outFile + " created");
  });
}

module.exports.write = write;

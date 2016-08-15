var pdf = require('html-pdf');

var write = function(content, outFile) {
  outFile = outFile + '.pdf' || 'resume.pdf';
  pdf.create(content).toFile(outFile, function(err, res) {
    console.log(outFile + " created");
  });
}

module.exports.write = write;

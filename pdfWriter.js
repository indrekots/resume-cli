var markdownpdf = require('markdown-pdf');

var write = function(inputFile, outFile) {
  outFile = outFile + '.pdf' || 'resume.pdf';
  markdownpdf().from(inputFile).to(outFile, function() {
    console.log(outFile + ' created');
  });
}

module.exports.write = write;

var pdf = require('html5-to-pdf');

var write = function(content, outFile) {
  outFile = outFile + '.pdf' || 'resume.pdf';
  pdf({cssPath: 'test.css'}).from.string(content).to(outFile, function() {
    console.log(outFile + " created");
  });
}

module.exports.write = write;

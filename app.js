var fs = require("fs");
var marked = require("marked");
var markdownpdf = require("markdown-pdf");

var inputFile = process.argv[2];

var htmlOutput = marked(fs.readFileSync(inputFile, 'utf8'));
fs.writeFile("resume.html", htmlOutput, function(err) {
  if (err) throw err;
  console.log("resume.html created");
});

markdownpdf().from(inputFile).to("resume.pdf", function() {
  console.log("resume.pdf created");
});

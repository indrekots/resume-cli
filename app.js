var fs = require("fs");
var markdownpdf = require("markdown-pdf");
var htmlWriter = require("./htmlWriter.js");

var inputFile = process.argv[2];
htmlWriter.write(inputFile, "resume.html");
markdownpdf().from(inputFile).to("resume.pdf", function() {
  console.log("resume.pdf created");
});

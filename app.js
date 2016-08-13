var htmlWriter = require("./htmlWriter.js");
var pdfWriter = require("./pdfWriter.js");

var inputFile = process.argv[2];
htmlWriter.write(inputFile, "resume.html");
pdfWriter.write(inputFile, "resume.pdf");

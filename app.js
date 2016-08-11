var fs = require("fs");
var marked = require("marked");

var inputFile = process.argv[2];

var htmlOutput = marked(fs.readFileSync(inputFile, 'utf8'));
fs.writeFile("resume.html", htmlOutput, function(err) {
  if (err) throw err;
  console.log("resume.html created");
});


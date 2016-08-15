var fs = require('fs');

var write = function(content, outFile) {
  outFile = outFile + '.html' || 'resume.html';
  var template = fs.readFileSync('./templates/default.html', 'utf8');
  template = template.replace('{{name}}', content.attributes.name);
  template = template.replace('{{mainContent}}', content.html);
  fs.writeFile(outFile, template, function(err) {
    if (err) throw err;
    console.log(outFile + ' created');
  });
}

module.exports.write = write;

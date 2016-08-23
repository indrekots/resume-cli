var fs = require('fs');

var write = function(opt) {
  initOptions(opt);
  var template = fs.readFileSync(opt.template, 'utf8');
  template = template.replace('{{name}}', opt.content.attributes.name);
  template = template.replace('{{mainContent}}', opt.content.html);
  fs.writeFile(opt.outFile, template, function(err) {
    if (err) throw err;
    console.log(opt.outFile + ' created');
  });
  
  function initOptions(options) {
    options.outFile = options.outFile + '.html' || 'resume.html';
    options.content = options.content || {};
    options.template = (options.template || './templates/default') + '/index.html';
  }
}

module.exports.write = write;

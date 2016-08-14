var argv = require('yargs')
  .usage('Usage: $0 [options]')
  .example('$0 -i resume.md', 'Reads resume.md and generates an HTML and PDF doucment containing the resume content') 
  .example('$0 -i resume.md --html', 'Reads resume.md and generates an HTML document from it')
  .example('$0 -i resume.md --pdf', 'Reads resume.md and generates a PDF document from it')
  .alias('i', 'input')
  .demand('i', 'Specify path to the file which contains resume content in markdown')
  .nargs('i', 1)
  .describe('i', 'Resume content in markdown')
  .alias('o', 'output')
  .nargs('o', 1)
  .describe('o', 'Output file name without file extension, if missing, output is written to "resume.html" and/or "resume.pdf"')
  .describe('html', 'Generate HTML output')
  .describe('pdf', 'Generate PDF output')
  .describe('all', 'Generate HTML and PDF output')
  .argv;

module.exports = argv;

var program = require('commander');

program
  .option('-v, --verbose', 'Verbose option')
  .parse(process.argv);

if (program.verbose) {
  console.log('Done');
}

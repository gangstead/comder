var program = require('commander');

program
  .option('-v, --verbose', 'Verbose output')
  .parse(process.argv);

if (program.verbose) {
  console.log('Verbosely verifying values vivified')
} else {
  console.log('Done');
}

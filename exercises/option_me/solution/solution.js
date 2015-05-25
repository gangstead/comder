var program = require('commander');

program
  .option('-c, --commander', 'Commander option')
  .parse(process.argv);

if (program.commander) {
  console.log('Commander');
}

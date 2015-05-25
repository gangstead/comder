var program = require('commander');

program
  .option('-a, --age <n>', 'An integer age', parseInt)
  .parse(process.argv);

console.log('My age next year: %j', program.age + 1);

var app = require('commander');

app
    .option('-h --height <height>', 'Height of person', /^(short|average|tall)$/i, 'short')
    .option('-a --age [age]', 'Age of person', /^(young|old)$/i)
    .option('-g --gender <gender>', 'Gender of person', /^(male|female|unknown)$/i, 'unknown')
    .parse(process.argv);

console.log('%j', app.height);
console.log('%j', app.age);
console.log('%j', app.gender);
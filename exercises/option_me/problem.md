Add an option to your program that outputs a message when passed in.

----------------------------------------------------------------------
## HINTS

To add an option to your previous program, use the `option` method:

```js
program
  .option('-o, --option', 'This is an option')
  .parse(process.argv);
```

If the option is passed in, a property matching the name you provided
will be set on your program variable.

In the command line:

```sh
node program.js -o
```

Then in your program:

```js
console.log(program.option); // true
```

In your program, add a `commander` option and output `Commander`
to the console when it is passed in.

When you are done, run:

```sh
$ {appname} verify program.js
```

----------------------------------------------------------------------

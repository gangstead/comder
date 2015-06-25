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
will be set on the `program` variable.

In the command line:

```sh
node program.js -o
```

Then `program.option` will be set to `true`.

In your program, add a `-v, --verbose` flag and output `Verbosely
verifying values vivified` if it is set or `Done` if not.

When you are done, run:

```sh
$ {appname} verify program.js
```

----------------------------------------------------------------------

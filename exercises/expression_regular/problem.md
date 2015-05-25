Create a commander program whose function is to accept the following options:
    Two required options:
        `-h, --height
        -g, --gender`
    And one optional option:
        `-a, --age`
...using regular expressions to check the formats.

These options should accept both the short (-g) and long (--gender) formats.

----------------------------------------------------------------------
## HINTS

Use the same methods you used in a previous lesson, 'OPTION ME' to add options to your commander application.
The difference is, this time, you will use regular expressions to validate user input of these options.

Check out http://regexone.com/ for an interactive tutorial on regular expressions.

Regex hints:
    ^       matches the beginning of the string
    ( )     surrounds your desired matching characters
    |       separates possible matches (OR)
    $       matches everything at the end of the string
    i       ignores case

Simply log each result on its own line with:
`console.log('%j');`

When you are done, you must run:

```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------

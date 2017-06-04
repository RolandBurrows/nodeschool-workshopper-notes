 ## NUMBER TO STRING (Exercise 8 of 19)

  Sometimes you will need to turn a number into a string.

  In those instances you will use the .toString() method. Here's an example:

     var n = 256;
     n = n.toString();


### Research Note

```n = n.toString();```
This executes toString() straight away and assigns the function's return value to the variable.

```n = n.toString;```
This assigns the actual function to `n` without executing it - this is possible because in JavaScript, functions are first class objects.

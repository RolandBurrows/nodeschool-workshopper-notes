## INTRODUCTION (Exercise 1 of 19)  
   
  To keep things organized, let's create a folder for this workshop.  
   
  Run this command to make a directory called javascripting (or something  
  else if you like):  
   
     mkdir javascripting
   
  Change directory into the javascripting folder:  
   
     cd javascripting  
   
  Create a file named introduction.js:  
   
     touch introduction.js  
   
  Or if you're on Windows:  
   
     type NUL > introduction.js  
   
  (type is part of the command!)  
   
  Open the file in your favorite editor, and add this text:  
   
     console.log('hello');
   
  Save the file, then check to see if your program is correct by running  
  this command:  
   
     javascripting verify introduction.js  
   
  By the way, throughout this tutorial, you can give the file you work with  
  any name you like, so if you want to use something like catsAreAwesome.js  
  file for every exercise, you can do that. Just make sure to run:  
   
     javascripting verify catsAreAwesome.js


## Additional troubleshooting:
 - Did you type the name of the file correctly? You can check by running `ls introduction.js`. If you see `ls: cannot access introduction.js: No such file or directory`, then perhaps the file doesn't exist, or has a different name, or is in a different directory.
 - Make sure you didn't omit any parens, or the compiler will not be able to parse it.       
 - Make sure you don't have any typos in the string itself.
 

 ## Reference
 - [touch (unix command)](https://en.wikipedia.org/wiki/Touch_(Unix))
 

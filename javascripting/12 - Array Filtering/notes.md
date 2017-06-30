## ARRAY FILTERING (Exercise 12 of 19)

  There are many ways to manipulate arrays.

  One common task is filtering arrays to only contain certain values.

  For this we can use the .filter() method.

  Here is an example:

     var pets = ['cat', 'dog', 'elephant'];

     var filtered = pets.filter(function (pet) {
       return (pet !== 'elephant');
     });

  The filtered variable will now only contain cat and dog.

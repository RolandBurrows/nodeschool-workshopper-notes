var pets = ['cat', 'dog', 'rat'];
var i = 0;

// Turn the items plural

/* Personal Extra
arr.forEach is apparently 90% slower than using a for loop
*/

pets.forEach( function (pet, index) {
  pets[index] = pet + 's';
});

console.log(pets)

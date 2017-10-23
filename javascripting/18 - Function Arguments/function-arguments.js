function math (adder, multOne, multTwo) {
  if (typeof(adder) !== 'number' || typeof(multOne) !== 'number' || typeof(multTwo) !== 'number') {
    console.log('');
    console.log('math() arg input types:');
    console.log(' ' + typeof(adder));
    console.log(' ' + typeof(multOne));
    console.log(' ' + typeof(multTwo));
    throw `Error: math() arguments must be numbers!`;
  }
  var mult = multOne * multTwo;
  var combo = adder + mult;
  return combo;
}

// console.log(math('53','61','67'));
console.log(math(53,61,67));

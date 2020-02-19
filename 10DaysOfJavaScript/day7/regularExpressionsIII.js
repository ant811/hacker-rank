// It must match ALL occurrences of numbers in a string.

function regexVar() {
  const re = /\d+/g;
  return re;
}

console.log('102, 1948948 and 1.3 and 4.5'.match(regexVar()));
console.log('1 2 3'.match(regexVar()));

/* Output

[ '102', '1948948', '1', '3', '4', '5' ]
[ '1', '2', '3' ]

*/
// It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})

function regexVar() {
  const re = /^([aeiou]).*\1$/i;
  return re;
}

console.log(regexVar().test('aeiou'));
console.log(regexVar().test('aeioua'));
console.log(regexVar().test('eaeiouE'));

/* Output

false
true
true

*/
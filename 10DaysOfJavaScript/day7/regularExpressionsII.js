// It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
// followed by one or more letters.

function regexVar() {
  const re = /^(Mr|Mrs|Ms|Dr|Er)(\.)\w+$/;
  return re;
}

console.log(regexVar().test('Mr.X'));
console.log(regexVar().test('Mrs.Y'));
console.log(regexVar().test('Dr#Joseph'));
console.log(regexVar().test('Er .Abc'));

/* Output

true
true
false
false

*/
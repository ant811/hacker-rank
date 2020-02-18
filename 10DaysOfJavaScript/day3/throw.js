function isPositive(a) {

//  Both solutions work 
//   if (a > 0) {
//     return 'YES';
//   } else if (a === 0) {
//     throw new Error('Zero Error');
//   } else {
//     throw new Error('Negative Error');
//   }

  return a > 0 ? 'YES' : (() => {throw a === 0 ? new Error('Zero Error') : new Error('Negative Error')})();

}

console.log(isPositive(3));
console.log(isPositive(2));
console.log(isPositive(0));
console.log(isPositive(-7));

/* Output

YES
YES
Error: Zero Error
Error: Negative Error

*/
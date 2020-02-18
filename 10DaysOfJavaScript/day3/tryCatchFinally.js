function reverseString(s) {
  try {
    console.log(((s).split('').reverse().join('')));
  }
  catch(error) {
    console.log(error.message);
    console.log(s);
  }
}

reverseString("1234");
reverseString(Number(1234));

/* Output

4321

s.split is not a function
1234

*/
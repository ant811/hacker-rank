const PI = Math.PI;

function area(PI, r) {
  return PI * r * r;
}
console.log(area(PI, 2.6));

function perimeter(PI, r) {
  return 2 * PI * r;
}
console.log(perimeter(PI, 2.6));

try {    
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
} catch(error) {
    console.error("You correctly declared 'PI' as a constant.");
}

/* Output

21.237166338267002
16.336281798666924
You correctly declared 'PI' as a constant.

*/
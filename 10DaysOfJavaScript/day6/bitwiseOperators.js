const getMaxLessThanK = (n, k) => {
  let max = 0;
  
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      if ( (a & b) < k && (a & b) > max ) {
        max = (a & b )
      }
    }
  }

  return max;
}

console.log(getMaxLessThanK(5, 2));
console.log(getMaxLessThanK(8, 5));
console.log(getMaxLessThanK(2, 2));

/* Output

1
4
0

*/
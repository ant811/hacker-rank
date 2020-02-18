function modifyArray(nums) {
  return nums.map(element => element % 2 === 0 ? element * 2 : element * 3);
}

console.log(modifyArray([1, 2, 3, 4, 5]));

/* Output

[ 3, 4, 9, 8, 15 ]

*/


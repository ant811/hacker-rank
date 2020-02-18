function getSecondLargest(nums) {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i]  > secondLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));

/* Output

5

*/
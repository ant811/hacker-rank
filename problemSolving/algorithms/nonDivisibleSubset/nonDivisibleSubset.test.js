const { nonDivisibleSubset } = require ('./nonDivisibleSubset');

test('Returns length of longest subset of array s that contains no two numbers whose sum is evenly divisible by target integer k', ()=> {
  expect(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])).toEqual(3);
  expect(nonDivisibleSubset(3, [1, 7, 2, 4])).toEqual(3);
  expect(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436])).toEqual(11);
});

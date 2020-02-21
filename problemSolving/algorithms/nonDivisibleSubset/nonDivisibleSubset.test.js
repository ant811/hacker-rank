const { nonDivisibleSubset } = require ('./nonDivisibleSubset');

// NOTE - My solution does not pass all HackerRank tests
//      - Current solution score is 9.3 out of 20
//      - I need to improve time complexity to pass all tests

test('Returns length of longest array subset that contains no two numbers whose sum is evenly divisible by target integer', ()=> {
  expect(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])).toEqual(3);
  expect(nonDivisibleSubset(3, [1, 7, 2, 4])).toEqual(3);
  expect(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436])).toEqual(11);
});
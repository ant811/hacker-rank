// HackerRank Level of Difficulty - Medium

function nonDivisibleSubset(k, s) {
  const countSieve = new Array(k).fill(0);
  for (let i = 0; i < s.length; i++) {
    countSieve[s[i] % k]+=1;
  }
  // Initialize counter, at most only 1 evenly divisible integer of k can be counted
  let counter = Math.min(countSieve[0], 1);
  // Only loop through to midpoint at most; each comparison looks at beginning countSieve[i] and end countSieve[k - i] I.e. k = 6 (1, 5), (2, 4)
  let midPointLimit = Math.floor(k / 2) + 1;
  for (let i = 1; i < midPointLimit; i++) {
    if(i !== k - i) {
      counter+=Math.max(countSieve[i], countSieve[k - i])
    } else {
      // if k is even, loop will reach midpoint, at most only one integer s[i] % k = k / 2 can be counted
      counter+=Math.min(countSieve[i], 1)
    } 
  }

  return counter;
};

// Time complexity: O(n)

module.exports = { nonDivisibleSubset };

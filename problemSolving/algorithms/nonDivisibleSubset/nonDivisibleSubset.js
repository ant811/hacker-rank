// HackerRank Level of Difficulty - Medium

// NOTE - My solution does not pass all HackerRank tests
//      - Current solution score is 9.3 out of 20
//      - I need to improve time complexity to pass all tests

const findAllPermutations = (array) => {
  const permutations = [[]];
  for (let i = 0; i < array.length; i++) {
    const temp = [...permutations];
    for (let j = 0; j < temp.length; j++) {
      permutations.push(temp[j].concat(array[i]));
    }
  }
  permutations.shift();
  return permutations;
};

const findAllTuples = (array) => {
  const tuples = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      tuples.push([array[i], array[j]]);
    }
  }
  return tuples;
}

const findInvalidTuples = (touples, target) => {
  return touples.filter(touple => {
    return (touple[0] + touple[1]) % target === 0;
  })
}

const renderInvalidRegExp = (touples) => {
  return new RegExp(`${touples[0]}.*${touples[1]}|${touples[1]}.*${touples[0]}`);
}

const findValidPermutations = (permutations, invalidRegExp) => {
  return permutations.filter(permutation => {
    return !invalidRegExp.reduce((acc, regExp) => {
      return acc || regExp.test(permutation.join(''));
    }, false);
  });
};

const findLongestArray = (arrays) => {
  return arrays.reduce((acc, array) => {
    return array.length > acc ? array.length : acc;
  }, 0);
};

function nonDivisibleSubset(k, s) {
  const allPermutations = findAllPermutations(s);
  const allTuples = findAllTuples(s);
  const invalidTuples = findInvalidTuples(allTuples, k);
  const allInvalidRegExp = invalidTuples.map(renderInvalidRegExp);
  const validPermutations = findValidPermutations(allPermutations, allInvalidRegExp);
  const longestPermutationLength = findLongestArray(validPermutations);
  return longestPermutationLength;
};

module.exports = { nonDivisibleSubset };
// HackerRank Level of Difficulty - Medium

function formingMagicSquare(s) {
  const magicSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]]
  ];
  
  let minCost = Infinity;
  magicSquares.forEach((magicSqr) => {
    let cost = 0;
    magicSqr.forEach((rowArr, rowArrIndex) => {
      rowArr.forEach((element, index) => {
        if(element !== s[rowArrIndex][index]) {
          cost+=Math.abs(element - s[rowArrIndex][index])
        }
      });
    });

    cost < minCost ? minCost = cost : null;
  });

  return minCost;
};

module.exports = { formingMagicSquare };

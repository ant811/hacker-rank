const { formingMagicSquare } = require('./formingMagicSquare');

test('Finds lowest cost to convert input square into a magic square', ()=> {
  expect(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])).toEqual(1);
  expect(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]])).toEqual(4);
  expect(formingMagicSquare([[6, 7, 8], [7, 6, 2], [3, 2, 3]])).toEqual(17);
})
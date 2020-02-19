const { timeInWords } = require ('./timeInWords');

test('Returns time as string when minutes are 00', () => {
  expect(timeInWords(12, 0o00)).toEqual('twelve o\' clock');
  expect(timeInWords(5, 0o00)).toEqual('five o\' clock');
});

test('Returns time as string when minutes are 15', () => {
  expect(timeInWords(12, 15)).toEqual('quarter past twelve');
  expect(timeInWords(5, 15)).toEqual('quarter past five');
});

test('Returns time as string when minutes are 45', () => {
  expect(timeInWords(12, 45)).toEqual('quarter to one');
  expect(timeInWords(5, 45)).toEqual('quarter to six');
});

test('Returns time as string when minutes not 00, 15, or 45', () => {
  expect(timeInWords(12, 40)).toEqual('twenty minutes to one');
  expect(timeInWords(10, 10)).toEqual('ten minutes past ten');
  expect(timeInWords(1, 1)).toEqual('one minute past one');
});
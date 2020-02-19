const { isValid } = require('./sherlockValidString');
const Axios = require('axios');
const adr = 'https://hr-testcases-us-east-1.s3.amazonaws.com/8816/input13.txt?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1582142210&Signature=%2BFfaFxwktu6y6CHybzd7BeIoDYE%3D&response-content-type=text%2Fplain';

test('Validates a string: 1) all characters in string appear at same frequency, or 2) removal of at most one character produces a string with all characters appearing at same frequency', () => {
  expect(isValid('abc')).toEqual('YES');
  expect(isValid('abcc')).toEqual('YES');
  expect(isValid('abcdefghhgfedecba')).toEqual('YES');
  expect(isValid('abccc')).toEqual('NO');
  expect(isValid('aabbcd')).toEqual('NO');
});

// NOTE - access to HackerRank test condition url expired.  While the url was valid, the test passed
// test('Validates large strings', () => {
//   return Axios.get(adr).then(response => {
//     console.log('100,000 character length string received from Hacker Rank test file');
//     expect(isValid(response.data)).toEqual('YES');
//   });
// })

function vowelsAndConsonants(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonents = [];
  for (let char of s) {
    if (vowels.indexOf(char) !== -1) {
      console.log(char);
    } else {
      consonents.push(char);
    }
  }
  console.log(consonents.join('\n'));
}

vowelsAndConsonants('javascriptloops');

/* Output

a
a
i
o
o
j
v
s
c
r
p
t
l
p
s

*/
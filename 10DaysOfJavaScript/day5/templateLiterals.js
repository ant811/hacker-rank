function sides(literals, ...expressions) {
  let area = expressions[0];
  let perimeter = expressions[1];
  let s1 = (perimeter + Math.sqrt((perimeter * perimeter) - (16 * area))) / 4;
  let s2 = (perimeter - Math.sqrt((perimeter * perimeter) - (16 * area))) / 4;
  return [s1, s2].sort();
}

let s1 = 10;
let s2 = 14;
console.log(sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`);

/* Output

[10, 14]

*/

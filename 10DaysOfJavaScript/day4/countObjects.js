function getCount(objects) {
  let result = 0;
  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    if (object.x === object.y) {
      result++;
    }
  }
  return result;
}

console.log(getCount([
  {x: 1, y: 1},
  {x: 2, y: 3},
  {x: 3, y: 3},
  {x: 3, y: 4},
  {x: 4, y: 5}
]));

/* Output

2

*/
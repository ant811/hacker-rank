function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: (a * 2) + (b * 2),
    area: a * b
  }
}

console.log(Rectangle(4, 5));

/* Output

{ length: 4, width: 5, perimeter: 18, area: 20 }

*/
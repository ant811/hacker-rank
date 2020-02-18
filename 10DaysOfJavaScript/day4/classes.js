class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  perimeter() {
    return this.sides.reduce((acc, side) => {
      return acc + side;
    });
  }
}

let triangle = new Polygon([64, 40, 40]);

console.log(triangle.perimeter());

/* Output

144

*/
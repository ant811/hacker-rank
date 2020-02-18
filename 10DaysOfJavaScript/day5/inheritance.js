class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function() {
  return this.w * this.h;
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const newSqr1 = new Square(4);
const newSqr2 = new Square(6);

console.log(newSqr1.area());
console.log(newSqr2.area());

/* Output

16
36

*/
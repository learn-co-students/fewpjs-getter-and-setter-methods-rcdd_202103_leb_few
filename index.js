// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return 2*this.radius;
  }
  get circumference() {
    return 2*pi*this.radius;
  }
  get area() {
    return pi*this.radius*this.radius;
  }

  set diameter(d) {
    this.radius = d/2;
  }
  set circumference(c) {
    this.radius = c / (2*pi);
  }
  set area(a) {
    this.radius = Math.sqrt(a/pi);
  }


}

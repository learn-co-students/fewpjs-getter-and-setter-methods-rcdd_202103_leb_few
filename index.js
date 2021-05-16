// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter() {

    return this.radius * 2
  }
  get circumference() {

    return   Math.PI*this.radius*2;
  }
  get area() {
    return this.radius*this.radius*Math.PI;
  }
  set area(newArea) {
    this.radius =Math.sqrt(newArea/Math.PI);
  }
  set diameter(newdiameter) {
    this.radius = newdiameter/2;
  }
  set circumference(newcir) {
    this.radius =newcir/(2*Math.PI);
  }
}

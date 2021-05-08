// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
    this.PI = Math.PI;
  }

get area(){
return Math.PI * (this.radius * this.radius);
}

get diameter(){
  return this.radius * 2;
}

get circumference(){
  return Math.PI * this.diameter;
}

set area(newArea){
  this.radius = Math.sqrt(newArea);
}

set diameter(newDiameter){
    this.radius = newDiameter/2;

}

set circumference(newCircum){
    let diam = newCircum/Math.PI;
    this.radius = diam/2;
}

}

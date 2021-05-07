// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius*2;
  }
  set diameter(newDiameter){
    this.radius=newDiameter/2;
  }
  get circumference(){
    return 2*this.radius*Math.PI;
  }
  set circumference(newCircum){
    this.radius=newCircum/(2*Math.PI);
  }
  get area(){
    return Math.PI*this.radius*this.radius;
  }
  set area(newArea){
    this.radius=Math.sqrt(newArea/(Math.PI));
  }
}

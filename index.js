// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){ return 2*this.radius }
  get circumference(){return Math.PI*2*this.radius}
  get area(){return Math.PI*this.radius*this.radius}
  set diameter(d){this.radius= d/2 }
  set circumference(c){this.radius=c/(2*Math.PI)}

}

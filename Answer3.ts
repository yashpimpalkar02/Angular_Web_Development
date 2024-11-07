class Circle 
{
    Radius: number
    PI: number = 3.14
  
    constructor(Radius: number) 
    {
      this.Radius = Radius
    }
  
    Area(): number 
    {
      return this.PI * this.Radius * this.Radius
    }
}

class CircleX extends Circle 
{
    Circumference(): number 
    {
        return 2 * this.PI * this.Radius
    }
}

var circleX1 = new CircleX(11)
var circleX2 = new CircleX(21)

console.log("CircleX 1 Circumference:", circleX1.Circumference())
console.log("CircleX 1 Area:", circleX1.Area())

console.log("CircleX 2 Circumference:", circleX2.Circumference())
console.log("CircleX 2 Area:", circleX2.Area())

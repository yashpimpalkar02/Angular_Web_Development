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
  
  var circle1 = new Circle(11)
  var circle2 = new Circle(21)
  
  console.log("Circle 1 Area:", circle1.Area())
  
  console.log("Circle 2 Area:", circle2.Area())
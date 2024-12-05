class Arithmetic 
{
    No1: number
    No2: number
  
    constructor(No1: number, No2: number) 
    {
      this.No1 = No1
      this.No2 = No2
    }
  
    Addition(): number 
    {
      return this.No1 + this.No2
    }
  
    Subtraction(): number 
    {
      return this.No1 - this.No2
    }
  
    Multiplication(): number 
    {
      return this.No1 * this.No2
    }
  
    Division(): number 
    {
      return this.No1 / this.No2
    }
}
  
var obj1 = new Arithmetic(21, 11)
var obj2 = new Arithmetic(41, 31)
  
console.log("Object 1 Addition:", obj1.Addition())
console.log("Object 1 Subtraction:", obj1.Subtraction())
console.log("Object 1 Multiplication:", obj1.Multiplication())
console.log("Object 1 Division:", obj1.Division())
  
console.log("Object 2 Addition:", obj2.Addition())
console.log("Object 2 Subtraction:", obj2.Subtraction())
console.log("Object 2 Multiplication:", obj2.Multiplication())
console.log("Object 2 Division:", obj2.Division())
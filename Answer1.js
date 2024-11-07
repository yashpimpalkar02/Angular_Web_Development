var Arithmetic = /** @class */ (function () {
    function Arithmetic(No1, No2) {
        this.No1 = No1;
        this.No2 = No2;
    }
    Arithmetic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithmetic.prototype.Subtraction = function () {
        return this.No1 - this.No2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.No1 * this.No2;
    };
    Arithmetic.prototype.Division = function () {
        return this.No1 / this.No2;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(21, 11);
var obj2 = new Arithmetic(41, 31);
console.log("Object 1 Addition:", obj1.Addition());
console.log("Object 1 Subtraction:", obj1.Subtraction());
console.log("Object 1 Multiplication:", obj1.Multiplication());
console.log("Object 1 Division:", obj1.Division());
console.log("Object 2 Addition:", obj2.Addition());
console.log("Object 2 Subtraction:", obj2.Subtraction());
console.log("Object 2 Multiplication:", obj2.Multiplication());
console.log("Object 2 Division:", obj2.Division());

var Circle = /** @class */ (function () {
    function Circle(Radius) {
        this.PI = 3.14;
        this.Radius = Radius;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var circle1 = new Circle(11);
var circle2 = new Circle(21);
console.log("Circle 1 Area:", circle1.Area());
console.log("Circle 2 Area:", circle2.Area());

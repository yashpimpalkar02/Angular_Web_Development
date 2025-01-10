function CircleArea(Rad, PI) {
    var Area = 0;
    if (PI == undefined) {
        PI = 3.14;
    }
    Area = PI * Rad * Rad;
    return Area;
}
var radius = 5;
var area = CircleArea(radius);
console.log("Area of circle is : " + area);

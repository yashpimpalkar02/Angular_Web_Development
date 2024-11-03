function maximum(No) {
    var firstMax = Number.MIN_VALUE;
    var secondMax = Number.MIN_VALUE;
    for (var i = 0; i < No.length; i++) {
        if (No[i] > firstMax) {
            secondMax = firstMax;
            firstMax = No[i];
        }
        else if (No[i] > secondMax && No[i] != firstMax) {
            secondMax = No[i];
        }
    }
    return secondMax;
}
var number;
number = [23, 89, 6, 29, 56, 45, 77, 32];
var secondLargest = maximum(number);
console.log("The second largest number is: " + secondLargest);

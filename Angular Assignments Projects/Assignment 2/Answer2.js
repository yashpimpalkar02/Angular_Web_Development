function summation(No) {
    var sum = 0;
    for (var i = 0; i < No.length; i++) {
        sum += No[i];
    }
    return sum;
}
var Data;
Data = [23, 6, 7, 4, 5, 7];
var Result = summation(Data);
console.log("Summation of the array is: " + Result);

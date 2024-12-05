function maximum(Data) {
    var max = Data[0];
    for (var i = 1; i < Data.length; i++) {
        if (Data[i] > max) {
            max = Data[i];
        }
    }
    return max;
}
var Data = new Array(8);
Data = [23, 89, 6, 29, 56, 45, 77, 32];
var Result = maximum(Data);
console.log("Maximum number is: " + Result);

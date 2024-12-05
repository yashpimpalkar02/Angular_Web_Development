function maximum(No1, No2, No3) {
    if (No1 >= No2 && No1 >= No3) {
        return No1;
    }
    else if (No2 >= No1 && No2 >= No3) {
        return No2;
    }
    else {
        return No3;
    }
}
var Result = maximum(23, 89, 6);
console.log("Maximum number is : " + Result);

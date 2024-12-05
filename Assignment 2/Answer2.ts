function summation(No: number[]): number 
{
    var sum = 0;

    for (let i = 0; i < No.length; i++) 
    {
        sum += No[i]; 
    }

    return sum;
}

var Data : number[]
Data = [23, 6, 7, 4, 5, 7]

var Result = summation(Data)

console.log("Summation of the array is: "+Result)
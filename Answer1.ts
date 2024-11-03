function maximum(Data: number[]): number 
{
    var max = Data[0]

    for (let i = 1; i < Data.length; i++) 
    {
        if (Data[i] > max) 
        {
            max = Data[i]; 
        }
    }
    return max
}

var Data : number [] = new Array(8)
Data = [23, 89, 6, 29, 56, 45, 77, 32]

var Result = maximum(Data)

console.log("Maximum number is: " + Result)

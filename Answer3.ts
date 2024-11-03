function maximum(No: number[]): number 
{
    var firstMax: number = Number.MIN_VALUE;
    var secondMax: number = Number.MIN_VALUE;

    for (let i = 0; i < No.length; i++) 
    {
        if (No[i] > firstMax) 
        {
            secondMax = firstMax; 
            firstMax = No[i];    
        } 
        else if (No[i] > secondMax && No[i] != firstMax) 
        {
            secondMax = No[i];   
        }
    }
    return secondMax;
}

var number : number[]
number = [23, 89, 6, 29, 56, 45, 77, 32];

var secondLargest: number = maximum(number);

console.log("The second largest number is: " + secondLargest);

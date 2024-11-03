function ChkArmstrong (No: number): boolean 
{
    let temp: number = No
    let sum: number = 0

    while (temp > 0) 
    {
        var digit: number = temp % 10
        sum += (digit * digit * digit)
        temp = temp / 10 | 0            
    }

    return sum === No;
}

var number = 153
if (ChkArmstrong(number)) 
{
    console.log(`${number} is an Armstrong number`);
} 
else 
{
    console.log(`${number} is not an Armstrong number`);
}

function Fibonacci(No : number): void 
{
    let a = 0, b = 1, sum = 0

    console.log("Fibonacci series up to limit : ");
    
    while (sum <= No) 
    {
        console.log(sum);
        sum = a + b;
        a = b;
        b = sum;
    }
}

Fibonacci(21);

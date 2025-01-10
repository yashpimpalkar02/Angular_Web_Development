function CircleArea(Rad : number, PI?:number) : number
{
    var Area : number = 0

    if(PI == undefined)
    {
        PI = 3.14
    }

    Area = PI * Rad * Rad
    return Area
}

var radius : number = 5

var area = CircleArea(radius)

console.log("Area of circle is : "+area)
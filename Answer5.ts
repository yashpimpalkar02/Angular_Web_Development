function ChkString(str: string): boolean 
{
    if (str.indexOf("Marvellous") !== -1) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

var sentence: string = "Pune Kothrud Marvellous Infosystems";

if (ChkString(sentence)) 
{
    console.log("The string contains the word 'Marvellous'.");
} 
else 
{
    console.log("The string does not contain the word 'Marvellous'.");
}

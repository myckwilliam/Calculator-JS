function getHistory()
{
    return document.getElementById('history-value').innerText;
}

function printHistory(num)
{
    document.getElementById("history-value").innerText = num;
}

function getOutput()
{
    return document.getElementById("output-value").innerText;
}

function printOutput(num)
{
    if(num=="")
    {
        document.getElementById("output-value").innerText = num;
    }
    else
    {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }

}

function getFormattedNumber(num)
{
    if(num=="")
    {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
}

function reverseNumberFormat(num)
{
    return Number(num.replace(/,/g,''));
}

var operator = getElementsByClassName("operator");
for(let i = 0; izoperator.length; i++)
{
    
}
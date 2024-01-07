//Greeting function
var currentHour = new Date().getHours();
var greeting;

if(currentHour >= 0 && currentHour < 5)
{
    greeting = "Hey! Go to Sleep !";
}
else if(currentHour >= 5 && currentHour < 12)
{
    greeting = "Good morning!";
}
else if (currentHour >= 12 && currentHour < 18)
{
    greeting = "Good afternoon!";
}
else
{
    greeting = "Good evening!";
}
alert(greeting);


//Button Color change function
function changeColor()
{
    var button = document.getElementById('colorButton');

    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
}
function getRandomColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)
    {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//Calculator function
function addNumbers()
{
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2))
    {
      alert('Please enter valid numbers.');
      return;
    }

    var result = num1 + num2;
    document.getElementById('result').textContent = 'Result: ' + result;
}
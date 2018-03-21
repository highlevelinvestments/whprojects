function welcome()
{
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML = username;
}

// welcome();

 function fireworks()
{
    document.getElementById('h1').style.backgroundImage = "url('/img/fireworks.gif')";
    document.getElementById('h1').style.color = "white";
    document.getElementById('nav').style.backgroundColor = "black";
    togglecolors();

}

function togglecolors()
{
    document.body.classList.toggle('colorize');
}

function more()
{
    document.getElementById('div1').style.backgroundColor = "gray";
}

function myFunction(a, b)
{
    return a * b;
}
    var x = myFunction(5, 3);
    document.getElementById("demo").innerHTML = x;
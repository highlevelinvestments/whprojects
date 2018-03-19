document.getElementById('btn2').style.color = "orange";

console.log("Here is my first console massage");
console.info("5000 people at $10");
console.warn("danger danger");
console.error("Your shit is broken, FIX IT!");

// Browser Alert
// alert('IM SEXY');

// Browser Confirm Box
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult);

// browser prompt box
// var userName = prompt("what is your name?");
// console.log(userName);

/*
variables
    must start with a lowercase
    must start with a letter
    can contain underscore
    no dash lines
*/
var username;
var room1;
var user_name;
var userName;

var age = 27;
var decade = 10;
var double = 2;
var divide = 4;
// divide result by 4
var newage = (age + decade) * double / divide;
// PEMDAS matters!
age + decade;
console.log(age+decade);

// var stringage = "27";

// concationation
// var firstname = prompt("what is your first name?");
// var lastname = prompt("what is your last name?");
// alert(firstname +" "+ lastname);

// string interpolation
// '${variable}'

// alert('${firstname} ${lastname}');

// prompt user
// make of vehicle
// the year
// the color
// alert the result

// 3 new variables
// formatting: color, year, make.

function getuservehicle()
{
var carcolor = prompt("what color is your car?");
var caryear = prompt("what year is your car?");
var carmake = prompt("what make is your car?");

var result = (carcolor +", "+ caryear + " "+ carmake +".");
alert(result);
}

function primaryuser()
{
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryuser').innerHTML = first + " " + last + ", born in " + place;
}

function secondaryuser()
{
    var weight = prompt ("How much weight can you carry?");
    var cost = prompt ("How much are you willing to pay for this?");
    var time = prompt ("How much time are you going to invest?");

    document.getElementById('secondaryuser').innerHTML = weight + " of work at " + cost + " per month for " + time;
}

function thirduser()
{
    var hobby = prompt("What's your favorite hobby?");
    var sm = prompt("Snapchat or Insta?");
    var yg = prompt("Bitch who do you love?");

    document.getElementById('thirduser').innerHTML = hobby + " is what I do and im on " + sm + " cause I love " + yg;
}
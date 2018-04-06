// math object

// integers = whole numbers
// decimals aka floats = decimals

// console.log(.2 * .1);

// var rounded = Math.round(0.000000000001);
// .49 && below rounds down
// .5 && above rounds up

// var roundedUp = Math.ceil(0.0000000000001);
// console.log(rounded, roundedUp);

// math.floor();
// var roundedDown = math.floor(0.99999999999);

// math.PI();
// var pi = math.pi;

//math.pow();
// console.log(math.pow(8,2));

// math.sqrt();
// console.log(math.sqrt(64));

// math.random();
// console.log(math.random());

// console.log('.round():'=rounded, '.ceil():'=roundedUp, '.floor():'=roundedDown, '.PI:'=pi);


// random number generator

// var rand = Math.random();
// rand = Math.floor(rand * 10);
// console.log(rand);


// function pickANum ()
// {
//     var userNum = prompt('guess my number between 0 and 10');
//     checkNum(userNum);
// }
// pickANum();

// function pickAnotherNum()
// {
//     var userNum = prompt('guess again');
//     checkNum(userNum);
// }

// function checkNum()
// {
//     if(num < rand)
//     {
//         alert(num + 'is too low. pick again');
//     }
//     else if(num > rand)
//     {
//         alert(num + 'is too high. Pick again');
//     }
//     else
//     {
//         alert(num + 'is the right number! You win!');
//     }
// }




var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('#submit');
var resetBtn = document.querySelector('#reset');
var userPickRes = document.querySelector('h1');

submitBtn.addEventListener('click', getUserPick);
resetBtn.addEventListener('click', getRandNum);

// GLOBAL VARIABLE
var rand;

function getRandNum()
{
userPick.value = '';
rand = Math.random();
rand = Math.floor(rand * 11);
console.log(rand);
}
getRandNum();

function getUserPick()
{
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = '';
}


function checkUserPick(x)
{
    if(x < rand)
   {
        printUserRes(x + ' is too low. pick again');
        // pickAnotherNum();
   }
   else if(x > rand)
  {
     printUserRes(x + ' is too high. Pick again');
       }
   else
      {
       printUserRes(x + ' is the right number! You win!');
}


function printUserRes(userRes)
{
    userPickRes.innerHTML = userRes;
}
}


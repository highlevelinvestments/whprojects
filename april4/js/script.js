// function getUserage()
// {
//     var userage = parseInt(prompt('how old are you?'));

    // AND &&
    // OR 

//     if(userage < 21)
//     {
//         console.log('not old enough');
//     } 
//     else if (userage == 21)
//     {
//         console.log('good to go');
//     }
//     else
//     {
//         console.log('plenty old');
//     }
// }
// getUserage();


// STORY MODE 

function getInfo()
{
    var getInfo = prompt('You come across a split road, where will you go left or right?');

    if(getInfo == 'right')
    {
        console.log('you are going the easy way, lucky you');
        right();

    }
    else if (getInfo == 'left')
    {
        console.log('you are going the hard way, get ready');
        left();
    }
    else {
        alert('Sorry, thats not a choice.')
    }
}

function right()
{
    var right = prompt('pick a tool, a knife, a rock')

    if(right == 'knife')
    {
        console.log('excellent choice!')
    } 
    else if(right == 'rock')
    {
        console.log('youre joking right?')
    }
    else
    {
        alert('Quit playing and act right')
    }
}

function left()
{
    var left = prompt('A mountain lion appears on the side of the road what do you do? Run or Stand Still?')

    if(left == 'run')
    {
        console.log('congradulations! you lost your right leg')
    }
    else if(left == 'stand still')
    {
        console.log('Smart move. you get to live another day.')
    }
    else
    {
        alert('Quit playing and act right')
    }
}
getInfo();






// ternary operator 
// function getAge()
// {
//     var age = prompt('whats my age again?');
//     (age >= "21") ? console.log('true') : console.log('false');
// }
// getAge();

// (5 == 5) ? console.log('true') : console.log('false');
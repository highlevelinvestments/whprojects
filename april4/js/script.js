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
    // document.body.style.backgroundImage = "url('img/roads.jpg')";
    var getInfo = prompt('You come across a split road, where will you go left or right?');
    document.body.style.backgroundColor = 'green';
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
        ride();
    } 
    else if(right == 'rock')
    {
        console.log('youre joking right?')
        document.body.style.backgroundColor = 'gray';
        document.body.textContent = 'Game Over';
    }
    else
    {
        alert('Sorry, thats not a choice.')
    }
}

function left()
{
    // document.body.style.backgroundImage = "url('img/puma.jpg')";
    // document.body.style.backgroundImage = "url('img/puma.jpg')";
    document.body.style.backgroundColor = 'orange';
    if(left == 'run')
    {
        console.log('congradulations! you lost your right leg')
        river();
    }
    else if(left == 'stand still')
    {
        console.log('Smart move. you get to live another day.')
        river();
    }
    else
    {
        alert('Sorry, thats not a choice.')
    }
}

function river()
{
    var river = prompt('there appears to be a river dividing the road, how will you cross? "build a bridge" or "swim across"?')

    if(river == "build a bridge")
    {
        console.log('You are an engineer! Nothing can stop you.')
        shelter();
    }
    else if(river == 'swim across')
    {
        console.log('The current is too strong, now youre drowning and cant get out')
        document.body.style.backgroundColor = 'gray';
        document.body.textContent = 'Game Over';
    }
    else
    {
        alert('Type it correctly, try again')
    }
}

function shelter()
{
    var shelter = prompt('The sun is coming down and the night is rising, where will you stay? "stay the night with a pack of wolves" or "build my own shelter"?')

    if(shelter == "stay the night with a pack of wolves")
    {
        console.log('"Mmm that was yummy" -wolves')
        document.body.style.backgroundColor = 'gray';
        document.body.textContent = 'Game Over';
    }
    else if(shelter == "build my own shelter")
    {
        console.log('You survived the night, carry on')
        trivia();
    }
    else
    {
        alert('Type it correctly, try again')
    }
}

function trivia()
{
    var trivia = prompt('Okay you made it to the other side of the road but an old man with a long white beard stands in the middle of the road. You must answer his question correctly to pass. He says "If you wish to pass answer this: What is the largest living bird by wingspan?" A) Flying Eagle B) Wandering Albatross')

    if(trivia == "Flying Eagle")
    {
        console.log('WRONG')
        document.body.style.backgroundColor = 'gray';
        document.body.textContent = 'Game Over';
    }
    else if(trivia == "Wandering Albatross")
        document.body.style.backgroundColor = 'yellow';
        document.body.textContent = 'You made it';
    {
        console.log('Correct! You may pass')
    }
}

function ride()
{
    var ride = prompt('There appears to be two cars in the side of the road, take one. A) Jeep B) Ferrari C) Walk')

    if(ride == "Jeep")
    {
        console.log('Nice, you will arrive to your destination in 30 minutes.')
        document.body.style.backgroundColor = 'yellow';
        document.body.textContent = 'You made it';
    }
    else if(ride == "Ferrari")
    {
        console.log('You like speed huh? You will arrive to your destination in 5 minutes')
        document.body.style.backgroundColor = 'yellow';
        document.body.textContent = 'You made it';
    }
    else(ride == "Walk")
    {
        // console.log('I gave you two cars and you want to walk?!?!?!?!?')
        // document.body.style.backgroundColor = 'gray';
        // document.body.textContent = 'Game Over';
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
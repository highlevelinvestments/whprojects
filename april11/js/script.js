// this - content based. look to the left of the dot.

var btns = document.querySelectorAll('button');

for(var i = 0; i < btns.length; i++)
{
    btns[i].addEventListener('click', function(evt)
{
  //  console.log(evt.target);
  //  console.log(this);
});
}


window.addEventListener('click', function(evt)
{
    console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON')
    {
      //  console.log(evt.target);
       // console.log(this);
    }
}
);

var cars = ['jeep', 'ferrari', 'maseratti', 'tesla'];
// console.log(cars);

// objects

var car = {type:'jeep', model:'wrangler', color:'white', offroad:true, trim:['sunroof', 'hardtop','4 wheel drive']};
// console.log(car.trim);


// firstname, lastname, height, hair, haircolor, facialhair, facialhaircolor, age 

var Pete = 
{
    firstname: "Pete",
    lastname: "Morrison",
    age: "5",
    height: "5'9",
    hair: true,
    haircolor: 'black',
    facialhair: true,
    facialhaircolor: "black",
    greeting: function(msg)
    {
       // console.log(this.firstname);
       // console.log(msg + this.firstname);
    }
}

var types = ['string', true, 5, [1,2,3], Pete];

Pete.middlename = "Hue"
// console.log(Pete);

Pete.greeting("Hey there!");

Pete.firstname = " Bruce"
Pete.greeting("Im now");



// object constructor function

function Person(first, last, age, eye)
{
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eye = eye;
}

var myDad = new Person('David', 'Higley', 59, 'brown');
var myMom = new Person('Kathy', 'Higley', 59, 'hazel');
var mySis = new Person('Erin', 'Higley', 18, 'blue');
// console.log(myDad);



var form = document.querySelector('form');

var users = [];
var user = 0;
console.log(user);
function Buyer(username, email, password)
{
    this.username = username;
    this.email = email;
    this.password = password;
}

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt)
{
    evt.preventDefault();
    // user = user + 1;
    users.push(new Buyer
        (
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value
        )
);
    console.log(users);
    // user++;

    for(var i = 0; i < form.elements.length + 1; i++)
{
    console.log(form.elements[i].value);
}
});

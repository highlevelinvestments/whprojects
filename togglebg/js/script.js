// var btnBack = document.getElementById('btnBack');
// btnBack.addEventListener('click',function() {
//     document.body.classList.toggle('BgClass');
// });

// form and button

// var btns = document.querySelectorAll('button');

// for(var i =0; i <btns.length; i++)
// {
//     btns[i].addEventListener('click', function(evt)
//     {
//         console.log(evt.target);
//         console.log(this);
//     }
// );
// }

// window.addEventListener('click', function(evt)
// {
//     console.log(evt.target.nodeName);
//     if(evt.target.nodeName == 'BUTTON')
//     {
//        console.log(evt.target);
//        console.log(this);
//     }
// })

// var form = document.querySelector('form');

// var users = [];
// var user = 0;
// console.log(user);
// function Buyer(name, email, size, quantity, address, message,)
// {
//     this.name = name;
//     this.email = email;
//     this.size = size;
//     this.quantity = quantity;
//     this.address = address;
//     this.message = message;
// }

// var submitBtn = document.querySelector('input[type="submit"]');
// submitBtn.addEventListener('click', function(evt)
// {
//     evt.preventDefault();
//     // user = user + 1;
//     users.push(new Buyer
//         (
//         form.elements[0].value,
//         form.elements[1].value,
//         form.elements[2].value
//         )
// );
//     console.log(users);
//     // user++;

//     for(var i = 0; i < form.elements.length + 1; i++)
// {
//     console.log(form.elements[i].value);
// }
// });

// clock

// Set the date we're counting down to
var countDownDate = new Date("May 1, 2018 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "IT'S TIME";
    }
}, 1000);

// array background

var backgroundImage = new Array(); 
backgroundImage[0] = "../img/image1.jpg";
backgroundImage[1] = "../img/image2.jpg";
backgroundImage[2] = "../img/image3.jpg";
backgroundImage[3] = "../img/image4.jpg";
backgroundImage[4] = "../img/image5.jpg";
backgroundImage[5] = "../img/image6.jpg";
backgroundImage[6] = "../img/image7.jpg";
console.log('our array', backgroundImage);
var imageCounter = 0;
document.body.style.backgroundImage = `url('${backgroundImage[imageCounter]}')`;

function rotateImages() {
    console.log('function called');
    var rotation = setInterval(function() {
        console.log('loop running');
        imageCounter++;
        if(imageCounter === 7) {
            imageCounter = 0;
        }
        document.body.style.backgroundImage = `url('${backgroundImage[imageCounter]}')`;

    }, 5000)
}

function displayAllImages() {
    for (i=0;i<backgroundImage.length;i++) {
        var container = document.getElementById('imageContainer');
        var newElement = document.createElement('li');
        newElement.innerHTML = "<li><img src='" + backgroundImage[i] + "' width='160' height='120'/><span>" + backgroundImage[i] + "</span></li>";
        container.appendChild(newElement);
    }

}

rotateImages();

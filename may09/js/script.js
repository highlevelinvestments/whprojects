// var firstname = 'Luis';

// function whatsName()
// {
//     var lastname = 'Garcia';
// console.log(firstname);
// whatsLastName(lastname);
// }

// whatsName();

// // console.log(lastname);

// // var
// // let 
// // const

// const name = 'Luis';
// let color = 'red';

// for(const i = 0; i < 5; i++)
// {
//     console.log('running ' + i + ' times');
// }

// function whatsLastName(str)
// {
//     console.log(str);
//     console.log(i);
// }

// console.log(name, color);
// color = 'black';
// // console.log(i);

// // for(i; i < 10; i++)
// // {
// //     console.log('running again ' + i + ' times');
// // }

// let firstName = 'Billy';
// let lastName = 'Jones';
// let nameCombined = `${firstName} ${lastName}`;
// console.log(nameCombined);

// let btn = document.querySelector('button');
// // console.log(btn);
// btn.addEventListener('click', function(evt){
//     console.log(this);
//     var colorizer = ()=> {
//         this.style.color = 'red';
//     };
//     colorizer();
// });

// var logCase = function(str)
// {
//     console.log(str);
// }

// logCase('Luis');

let btns = document.querySelectorAll('button');
console.log(btns);

btns.forEach(function(ele)
{

});

var colors = ['red', 'green', 'orange', 'blue'];

for(let i = 0; i < colors.length; i++)
{
    console.log(colors[i]);
}

// JS forEach loop ~only for arrays~

colors.forEach(function(ele, idx)
{
    console.log(ele, idx);
});

var nums = [10, 20, 30, 40];
for(let num of nums)
{
    num += 1;
    console.log(num);

}

let myName = 'John Dough';
for(let letter of myName)
{
    console.log(letter);
}
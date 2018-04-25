var paras = document.querySelector('p');

// for(var i = 0; i < paras.length; i++)
{
    // ! == not
    // console.log(p[i].classList.contains('p'));
    // if(!true)
    // {
        //  console.log('not true');
    // }
    // else
    // {
    //     console.log('not true');
    // }
}

console.log(3==='3');
console.log(typeof(3));
console.log(typeof('3'));

// == loose comparison
// === strict comparison

// var usernum = parseInt(prompt('pick a number'));

// if(typeof(usernum) == 'number')
// {

// }
// console.log(3+usernum);

// if


// *NEED API KEY FROM WEATHER TO FUNCTION PROPERLY*

console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com');
req.onload = function()
    {
        if(req.readyState ===4)
            {
                var apiData = JSON.parse(req.responseText);
                processData(apiData);
                // "200" = good to go
            }
    }
req.send(null);
// console.log(req.responseText);

function processData(data)
    {
        for(var i = 0; i < data.list.length; i++)
            {
                var timeOfDay = data.list[i].dt;
                var myLi = `
                    <li>
                        <p>${timeOfDay}</p>
                    </li>
                    `;
                myUl.innerHTML += myLi;
            }
    }

var myUl = document.querySelector('ul');
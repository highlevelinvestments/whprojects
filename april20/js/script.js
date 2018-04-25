var characterUl = document.querySelector('ul');
var homeUrl = 'https://rickandmortyapi.com/api/character/';

function getReq(url, func)
{
var req = new XMLHttpRequest();
req.open('GET', homeUrl);
req.onload = function()
    {

        if(req.readyState === 4 && req.status === 200){
            console.log('success', req.statusText);
            getCharacters(req.responseText);
        }
        else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

getReq(homeUrl, getCharacters);

var characterURL;

// characterUl.addEventListener('click', function(evt)
//     {
//         console.log(evt.target);
//         if(evt.target.tagName === 'LI'){
//             console.log('list item');
//         }
//         else{
//             console.log(evt);
//         }

//     });

    $('body > ul').on('click', 'li', function(evt){
        console.log(this);
            if(this.dataset.url){
                characterURL = this.dataset.url;
                characterUl.innerHTML = '';
                getReq(characterURL);
            }
    });

    function getCharacter(character)
    {
        console.log(character);
    }
function getCharacters(characters)
{
    // var characterLink = document.querySelectorAll('a');
    var characterArr = JSON.parse(characters);
    // console.log(JSON.parse(characters));
    for(var i = 0; i < characterArr.results.length; i++)
    {
        console.log(characterArr.results[i]);
        var character = 
            `<li data-url="${characterArr.results[i].url}">
                <img src="${characterArr.results[i].image}" alt="${characterArr.results[i].name}">
                <div>
                    <h3>${characterArr.results[i].name}</h3>
                    <ul>
                        <li><b>Status:</b>${characterArr.results[i].status}</li>
                        <li><b>Species:</b>${characterArr.results[i].species}</li>
                
                        <li><b>Gender:</b>${characterArr.results[i].gender}</li>

                    </ul>
                </div>
            </li>`;
            characterUl.innerHTML += character;
    }
}

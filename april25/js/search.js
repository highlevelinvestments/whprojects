var clientId = 'f478423a3d7097169a90';

var str = '';
var searchBox = document.querySelector('header input');
searchBox.addEventListener('keyup', userStr);

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function()
        {
            if(req.readyState === 4 && req.status === 200){
                func(JSON.parse(req.responseText));
            }
            // else{
            //     console.log('error:', )
            // }
        }
    req.send(null);
}

function userStr(evt){
    // if(evt.key != 'undefined' &&
    // evt.key != 'Backspace' &&
    // evt.key != 'Tab'
    // )
    // str += evt.key;

    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
    // getCharacter(userSearch);

    function githubUsers(data)
    {
        console.log(data);
    }
}
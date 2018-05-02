function userStr(evt){
    // if(evt.key != 'undefined' &&
    // evt.key != 'Backspace' &&
    // evt.key != 'Tab'
    // )
    // str += evt.key;

    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id={pRSXT4GcW5OzE_2HVsXWDBOdYQ0aiLSc}`, githubUsers);
    // getCharacter(userSearch);

    function githubUsers(data)
    {
        console.log(data);
    }
}
const value = 5;
const warn = document.querySelector('warning');
if(value < 10) {
    warn.innerHTML="WARNING TOO LOW"}
document.getElementById('testing').innerHTML = 'IM ALIVE!:' + value;

const colors = ['red', 'orange', 'yellow', 'green'];

let result = '';
colors.forEach(eachColor => {
  result = result + ' ' + eachColor;
});

document.getElementById('colors').innerHTML = result;

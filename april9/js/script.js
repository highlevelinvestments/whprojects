
var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
var plurals = ['fish', 'monkeys', 'shoes', 'cactii'];
var adjectives = ['hefty', 'withered', 'slender', 'enraged', 'thirsty', 'exhausted'];
var verbs = ['be', 'become', 'was', 'begun'];
var numbers = [3, 13, 7, 11, 365];


for(var i = 0; i < spans.length; i++)
{
    var s = spans[i];
    switch(s.className)
        {
            case 'occupation':
                setText(s, occupations);
                break;
            case 'plural':
                setText(s, plurals);
                break;
            case 'adjective':
                setText(s, adjectives);
                break;
            case 'number':
                setText(s, numbers);
                break;
                case 'verb':
                setText(s, verbs);
                break;
            default:

        }
}

function getRandNum(num) 
{
    return Math.floor(Math.random() * num);
}

function setText(currSpan, testArray)
{
    currSpan.textContent = testArray[getRandNum(testArray.length)];
}
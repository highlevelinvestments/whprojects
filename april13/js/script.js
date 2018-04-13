var items = document.querySelector('#items');

var itemArray =
[
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "is it working?",
        title: "Foggy Beach",
        cost: 100,
        desc: "The foggy beach represents foggy days, not the best ones but not the worst either"
    },
    {
        img: "http://unsplash.it/256/256?image=206",
        alt: "is it working?",
        title: "Good Morning",
        cost: 100,
        desc: "Every morning the sun rises, such a beautiful thing"
    },
    {
        img: "http://unsplash.it/256/256?image=210",
        alt: "is it working?",
        title: "Bricks",
        cost: 100,
        desc: "Hustle like you're selling bricks"
    },
    {
        img: "http://unsplash.it/256/256?image=208",
        alt: "is it working?",
        title: "Bars",
        cost: 100,
        desc: "Don't let them put you behind bars"
    },
    {
        img: "http://unsplash.it/256/256?image=209",
        alt: "is it working?",
        title: "The End of the Tunnel",
        cost: 100,
        desc: "A reminder that there is always light at the end of the tunnel"
    },
    {
        img: "http://unsplash.it/256/256?image=212",
        alt: "is it working?",
        title: "New York",
        cost: 100,
        desc: "A beautiful shot of a the street of New York, New York."
    },
];

function displayItems(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
         console.log(arr[i].alt);
            var item = `
            <li data-sku="00${i + 1}">
                <input type="checkbox">
                <img src="${arr[i].img}" alt="${arr[i].alt}">
                <h3>${arr[i].title}</h3>
                <p>$${arr[i].cost}</p>
                <p>${arr[i].desc}</p>
            </li>`;
    items.innerHTML += item;
    }
}
displayItems(itemArray);


function addListener(arr)
{
    for(var i = 0; i < arr.length + 1; i++)
        {
        arr[i].addEventListener('click', function(evt)
         {console.log(this.firstElementChild);
            this.classList.toggle('selected');
      //  this.firstElementChild.checked = true;

      // TERNARY OPERATOR // aka awesome if statement
        (this.firstElementChild.checked == true) ? 
            this.firstElementChild.checked = false :
            this.firstElementChild.checked = true;
        });
    }
}

addListener(items.children);
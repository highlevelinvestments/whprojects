jQuery(window).scroll(function(){
    var fromTopPx = 300; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('html').addClass('scrolled');
    }else{
        jQuery('html').removeClass('scrolled');
    }
});

$( "li" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
    });

    var myForm = 
    `
    <div id="checkbox">
    <input type="checkbox" required>
    <h4>LOVE T-Shirt</h4>
    <p>$15.00</p>
    </div>
    <form method="POST" action="https://formspree.io/theglclothingco@gmail.com">
    <input type="name" name="name" placeholder="Name">
    <input type="size" name="size" placeholder="Size ( S, M, L )">
    <input type="address" name="address" placeholder="Shipping Address">
    <input type="city" name="city" placeholder="City/Town">
    <input type="state" name="state" placeholder="State/Province">
    <input type="zipcode" name="zipcode" placeholder="ZIP/Postal Code">
    <input type="country" name="country" placeholder="Country">
    <input type="email" name="email" placeholder="Your email">
    <textarea name="message" placeholder="Tell me how you heard about the GL Clothing Co."></textarea>
    <button  id="submitbtn" type="submit">Done</button>
    </form>

    <style>
    #checkbox
    {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin: 50px 50px;
      padding: 10px 10pd;
    }
    #myForm
    {
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 100px 100px;
    }
    form
    {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        margin: 50px 50px;
        padding: 10px 10px;
    }
    input, textarea, select, button {
        height: 40px;
        margin: 3px;
        border-radius: 3px;
        -webkit-box-sizing: border-box;
        /* For legacy WebKit based browsers */
        -moz-box-sizing: border-box;
        /* For legacy (Firefox <29) Gecko based browsers */
        box-sizing: border-box;
      }
      
      #submitbtn {
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
        text-transform: uppercase;
        border: 1px solid #b3b3b3;
        border-radius: 2px;
        margin-top: 2vw;
        font-weight: 500;
        text-align: center;
        transition: all 200ms;
      }
      
      #submitbtn:hover {
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
      }
    </style>
    `;

    function myFunction() {
      var x = document.getElementById("order");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }
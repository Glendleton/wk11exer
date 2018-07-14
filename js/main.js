// quiz___
// 1) same file as javascript
// 2) at the top of the script tags in the body of your html
// 3) $ indicates jquery
// 4) when the browser window is loaded, the jquery will run
//
// discussion___
// 01) javascript library. it has a lot of simpler scripts that are easier to use than plain javascript
// 02) $
// 03) when the document is ready, run this function
// 04)
// 05) $('#hero-img')
// 06) $('.box')
// 07) object
// 08) object
// 09) .click
// 10) .hover
// 11) .key-up
// 12) if you attach the toggle event on something, when you interact with it, it adds the display hidden aspect to that element
// 13) it changes the class from one thing to another
// 14) it attaches something onto something else by creating a parent-child relationship
// 15) it attaches css to the target element
// *when you hover on something, you need code for when you hover on and over off

// jquery 5) make the image element appear and disappear when you click the corresponding button.
$(document).ready(function(){
    $("#hide").click(function(){
        $("img").hide();
    });
    $("#show").click(function(){
        $("img").show();
    });
    // step6) both button jquery
    $("#both").click(function(){
        $("img").toggle();
    });
});
// jquery 10)make the image change to a different image on hover (think about what HTML attribute commands the content of an image element).

// jquery 12)when this button is clicked, add a new list-item with some text content to this unordered list.

// jquery 14) when this button is clicked, cause an element to render with a red background, which covers your entire window and all of the elements on your page. Make sure that if you try to scroll, you can still see nothing but the red background.

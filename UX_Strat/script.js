/*_________SCript flèche vers le bas __________*/
// we're checking to see if the arrow is up or down, then adding or removing the "lift" class accordingly
var arrowBounce = function() {
    var arrow = $(".arrow");

    if (arrow.hasClass("lift")) {
        arrow.removeClass("lift");
    } else {
        arrow.addClass("lift");
    }
};


$(document).on("scroll", function(){
    if
    ($(document).scrollTop() > 86){
        $("#displaynone").addClass(".display");
    }
    else
    {
        $("#displaynone").removeClass(".display");
    }
});

// run the arrowBounce function every 800ms
setInterval(arrowBounce, 800);

/*______Navbar______*/
$(document).on("scroll", function(){
    if
    ($(document).scrollTop() > 86){
        $("#banner").addClass("shrink");
    }
    else
    {
        $("#banner").removeClass("shrink");
    }
});



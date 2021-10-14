$("#dropdown-btn").click(function () {
    if ( $(".dropdown-item").first().is(":hidden") ) {
        $(".dropdown-item").slideDown();
    } else {
        $(".dropdown-item").hide();
    }
});
$("#dropdown-btn2").click(function () {
    if ( $(".dropdown-item2").first().is(":hidden") ) {
        $(".dropdown-item2").slideDown();
    } else {
        $(".dropdown-item2").hide();
    }
});

$("#slide-container > img:gt(0)").hide();

setInterval(function() { 
    $('#slide-container > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slide-container');
}, 3000);
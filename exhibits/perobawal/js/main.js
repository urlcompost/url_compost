index = 0;

if ($(window).on('wheel', function() {
    index = index + 1;

    if (index <= 5) {
        $(".media-type").replaceWith("<p class='media-type'>DYARYO, pero bawal MAGBASA</p>");
    } else if (index <= 10) {
        $(".media-type").replaceWith("<p class='media-type'>T.V., pero bawal MANOOD</p>");
    } else if (index <= 15) {
        $(".media-type").replaceWith("<p class='media-type'>RADYO, pero bawal MAKINIG</p>");
    } else if (index <= 20) {
        $(".media-type").replaceWith("<p class='media-type'>INTERNET, pero bawal MAG-SURF</p>");
    } else {
        $(".media-type").replaceWith("<a href='perobawal/index.html'>PRESS, pero hindi MALAYA</a>");
        return;
    }
}));

if ($(window).bind('touchmove', function() {
    index = index + 1;

    if (index <= 50) {
        $(".media-type").replaceWith("<p class='media-type'>DYARYO, pero bawal MAGBASA</p>");
    } else if (index <= 100) {
        $(".media-type").replaceWith("<p class='media-type'>T.V., pero bawal MANOOD</p>");
    } else if (index <= 150) {
        $(".media-type").replaceWith("<p class='media-type'>RADYO, pero bawal MAKINIG</p>");
    } else if (index <= 200) {
        $(".media-type").replaceWith("<p class='media-type'>INTERNET, pero bawal MAG-SURF</p>");
    } else {
        $(".media-type").replaceWith("<a href='perobawal/index.html'>PRESS, pero hindi MALAYA</a>");
        return;
    }
}));

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

window.addEventListener('load', function() {
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    // Make the DIV element draggable:
    for (let i = 0; i < document.getElementsByClassName("draggableContent").length; i++) {
        dragElement(document.getElementsByClassName("draggableContent")[i]);
    }
}, false)

for (let i = 0; i < document.getElementsByClassName("draggableContent").length; i++) {
    var colors = ["#FDD91B", "#F32273", "#35B7CD"];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementsByClassName("draggableContent")[i].style.backgroundColor = random_color;
}

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

positions = [];

for (let i = 0; i < document.getElementsByClassName("draggableContent").length; i++) {
    var post = document.getElementsByClassName("draggableContent")[i];
	var xy = getRandomPosition(post);
	positions.push(xy);

	if (xy in positions) {
		xy[0] = xy[0] + 500;
		xy[1] = xy[1] + 500;
	}

	post.style.top = xy[0] + 'px';
	post.style.left = xy[1] + 'px';
}

function dragElement(elmnt) {
    // find the element that you want to drag.
    var box = elmnt;

    /* listen to the touchmove event,
    every time it fires, grab the location
    of touch and assign it to box */

    box.addEventListener('touchmove', function(e) {
        // grab the location of touch
        var touchLocation = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box.style.left = touchLocation.pageX + 'px';
        box.style.top = touchLocation.pageY + 'px';
    })

    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */

    box.addEventListener('touchend', function(e) {
        // current box position.
        var x = parseInt(box.style.left);
        var y = parseInt(box.style.top);
    })
}

// Make the DIV element draggable:
for (let i = 0; i < document.getElementsByClassName("draggableContent").length; i++) {
    dragElement(document.getElementsByClassName("draggableContent")[i]);
}

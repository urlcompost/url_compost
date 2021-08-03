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

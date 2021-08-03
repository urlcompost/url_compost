function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

for (let i = 0; i < document.getElementsByClassName("draggableContent").length; i++) {
    var post = document.getElementsByClassName("draggableContent")[i];
	var xy = getRandomPosition(post);
	post.style.top = xy[0] + 'px';
	post.style.left = xy[1] + 'px';
}

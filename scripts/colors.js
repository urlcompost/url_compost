for (let i = 0; i < document.getElementsByClassName("draggableContent").length; i++) {
    var colors = ["#FF0000", "#FFFF00", "#CCFF00", "#33FFFF", "#00FF00", "#FF00CC", "#6699FF"];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementsByClassName("draggableContent")[i].style.backgroundColor = random_color;
}

for (let i = 0; i < document.getElementsByClassName("draggableContent").length; i++) {
    var colors = ["#FDD91B", "#F32273", "#35B7CD"];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementsByClassName("draggableContent")[i].style.backgroundColor = random_color;
}

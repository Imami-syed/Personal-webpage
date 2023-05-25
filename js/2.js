function change() {
    var image = document.getElementById('social')
    var str = document.getElementById('social').src;
    if (str.includes("1.jpg")) {
        image.src = "../img/2.jpg";
    } else if (str.includes("2.jpg")) {
        image.src = "../img/3.jpg";
    } else if (str.includes("3.jpg")) {
        image.src = "../img/4.jpg";
    } else if (str.includes("4.jpg")) {
        image.src = "../img/5.jpg";
    } else if (str.includes("5.jpg")) {
        image.src = "../img/1.jpg";
    } else {
        image.src = "";
    }
}
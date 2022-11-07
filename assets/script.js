
var apiKey = "41a254e0e763bf58b5ab03ce00cd9598";
let nav_display = false;

document.getElementById("menu").onclick = function () {
    nav_display = !nav_display;
    if (nav_display) {
        document.getElementById("side-nav").style.display = 'block';
    } else {
        document.getElementById("side-nav").style.display = 'none';
    }
}

window.onscroll = function() {myFunction()};

var navbarhome = document.getElementById("navbarhome");
var sticky = navbarhome.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarhome.classList.add("sticky")
  } else {
    navbarhome.classList.remove("sticky");
  }
}
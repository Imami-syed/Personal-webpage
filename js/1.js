window.onscroll = function() {myFunction()};

var navbaredu = document.getElementById("navbaredu");
var sticky = navbaredu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbaredu.classList.add("sticky")
  } else {
    navbaredu.classList.remove("sticky");
  }
}
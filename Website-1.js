window.onscroll = function() {myFunction()};

var Navbar = document.getElementById("Navbar");
var sticky = Navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        Navbar.classList.add("sticky")
    } else {
        Navbar.classList.remove("sticky");
    }
}
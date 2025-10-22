
// scroll button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Active Nav-link
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
    link.addEventListener("click", function () {
        links.forEach((l) => l.classList.remove("active")); // remove active from all
        this.classList.add("active"); // add active to clicked link
    });
});

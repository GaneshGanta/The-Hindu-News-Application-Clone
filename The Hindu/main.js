document.querySelector("#one").addEventListener("click",emailPage)
function emailPage(){
    window.location.href="subscriptionemail.html"
}
document.querySelector("#button").addEventListener("click",emailPages)
function emailPages(){
    window.location.href="subscriptionemail1.html"
} document.querySelector("#two").addEventListener("click",emailPagee)
function emailPagee(){
    window.location.href="subscriptionemail2.html"
}
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
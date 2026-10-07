const username = localStorage.getItem("username");
const welcomemsg = document.getElementById("welcome");

const navlinks = document.querySelectorAll(".navlinks");
navlink.forEach(function (link) {
    link.addEventListener("click", 
        function () {
        navlinks.forEach(function(item){
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});
const username = localStorage.getItem("username");
const welcomemsg = document.getElementById("welcome");

const avatarBtn = document.getElementById("avatarBtn");
avatarBtn.addEventListener("click",
    function(){
        window.location.href = "profile_settings.html";
});

const walink = document.getElementById("feedback");
walink.addEventListener("click",
    function(){
        window.location.href = "https://wa.me/message/GOSEQO37OF23A1";
});
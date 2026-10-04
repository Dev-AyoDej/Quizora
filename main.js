const loginForm = document.getElementById("login");
const username = document.getElementById("name");

const access = document.getElementById("password");
const msg = document.getElementById("msg");
const correctkey = "QUIZORA-V1";

const showpass = document.getElementById("eyeoff");
const hidepass = document.getElementById("eyeon");

loginForm.addEventListener("submit", 
    function(event) {
        event.preventDefault();
        
        const name = username.value;
        const pass = access.value;

        if (pass===correctkey) {
            msg.textContent = "Login Successful..";
            msg.style.color = "green";
            localStorage.setItem("username", name);
            window.location.href = "homepage.html";
        } else {
            msg.textContent = "Incorrect Key..";
            msg.style.color = "Red";
}
});

showpass.addEventListener("click",
    function () {
        access.type = "text";
        hidepass.style.display = "block";
        showpass.style.display = "none";
    }
);

hidepass.addEventListener("click",
    function () {
        access.type = "password";
        hidepass.style.display = "none";
        showpass.style.display = "block";
    }
);
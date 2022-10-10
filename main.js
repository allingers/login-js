const loginBtn = document.getElementById("loginBtn");
const inputFields = document.getElementsByClassName("formInput");
const formTitle = document.getElementById("formTitle");
const logoutBtn = document.getElementById("logoutBtn");
const errorMessage = document.getElementById("errorTxt");

const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

loginBtn.addEventListener("click", checkUser);
logoutBtn.addEventListener("click", logOut);


let users = [
    {
        username: "Amanda",
        password: "12345"
    },
    {
        username: "Admin",
        password: "admin"
    },
    {
        username: "Fredrik",
        password: "98765"
    }
]


localStorage.setItem("list of users", JSON.stringify(users));


function init () {
    if (localStorage.getItem  ("userName")){
        loginSuccess();
    }
}
init();

function checkUser (){
    for (let user of users){
        if (user.username == usernameInput.value && user.password == passwordInput.value){
            localStorage.setItem("userName", usernameInput.value);
            loginSuccess();
            return
        } 

    }

    loginFail();

}

function loginSuccess (){
    const user = localStorage.getItem("userName");
    formTitle.innerText = "Du är nu inloggad som: " + user;

    let passwordField = document.getElementById("passwordDiv");
    let usernameField = document.getElementById("usernameDiv");
    passwordField.style.display = "none";
    usernameField.style.display = "none";

    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    errorMessage.innerText="";
}

function logOut () {
    usernameInput.value = "";
    passwordInput.value ="";
    let passwordField = document.getElementById("passwordDiv");
    passwordField.style.display = "block";
    let usernameField = document.getElementById("usernameDiv");
    usernameField.style.display = "block";

    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    localStorage.removeItem("userName");
    formTitle.innerText = "Logga in"

}

function loginFail (){ 
    errorMessage.innerText = "Inloggningen misslyckades.. försök igen";
    passwordInput.value="" 
    logoutBtn.style.display= "none";

}
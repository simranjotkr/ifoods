const loginForm = document.getElementById('login-form');
const loginErrorMsg = document.getElementById("login-error-msg");
const resetForm = document.getElementById('reset-form');
const resetErrorMsg = document.getElementById("reset-pwd-error-msg");
const resetSuccessMsg = document.getElementById("reset-pwd-success-msg");

const user = [
    {
        "username": "admin",
        "password": "admin",
        "email": "admin@admin.ca"
    },
    {
        "username": "user",
        "password": "user",
        "email": "user@user.ca"
    }
]

document.getElementById('submit-button').addEventListener('click', (e) => {
    e.preventDefault();
    const formUsername = loginForm.loginemail.value;
    const formPassword = loginForm.loginpwd.value;
    const result = user.filter(obj => obj.username == formUsername && obj.password == formPassword);
    if (result.length > 0) {
        document.location.href = "./home.html"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

document.getElementById('forget-pwd').addEventListener('click', (e) => {
    e.preventDefault();
    openTheForm();
})

function openTheForm() {
    clearForm();
    document.getElementById("reset-popup").style.display = "block";
}

function closeTheForm() {
    document.getElementById("reset-popup").style.display = "none";
}

function clearForm() {
    resetForm.resetpwdemail.value = "";
    if(resetErrorMsg.style.display == "block") {
        resetErrorMsg.style.opacity = 0;
    } else if (resetSuccessMsg.style.display == "block") {
        resetSuccessMsg.style.opacity = 0;
    }
}

document.getElementById('reset-pwd-button').addEventListener('click', (e)=> {
    e.preventDefault();
    const formEmail = resetForm.resetpwdemail.value;
    const result = user.filter(obj => obj.email == formEmail);
    if (result.length > 0) {
        resetErrorMsg.style.display = "none";
        resetSuccessMsg.style.opacity = 1;
        resetSuccessMsg.style.display = "block";
    } else {
        resetSuccessMsg.style.display = "none";
        resetErrorMsg.style.display = "block";
        resetErrorMsg.style.opacity = 1;
    }
})

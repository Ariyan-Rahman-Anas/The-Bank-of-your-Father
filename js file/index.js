//code for Login page
let loginBtn = document.getElementById("logIn-btn").addEventListener("click", function(){
    let userEmail = document.getElementById("user-email");
    let userPassword = document.getElementById("user-password");
    let email = userEmail.value;
    let password = userPassword.value;

    if(email == "child@email.com" && password == "iCantSay"){
        window.location.href = "bankHome.html"
    }
    else{
        alert("Invalid Email or Password ")
    }
})
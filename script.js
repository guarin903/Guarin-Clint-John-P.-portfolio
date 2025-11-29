function showSignup(){ hideAll(); document.getElementById("signupBox").style.display="block"; }
function showLogin(){ hideAll(); document.getElementById("loginBox").style.display="block"; }
function showForgot(){ hideAll(); document.getElementById("forgotBox").style.display="block"; }

function hideAll(){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("signupBox").style.display="none";
    document.getElementById("forgotBox").style.display="none";
}

function signup(){
    let newUser = document.getElementById("newUser").value;
    let newPass = document.getElementById("newPass").value;
    let msg = document.getElementById("signupMsg");

    if(newUser === "" || newPass === ""){
        msg.style.color = "#ffcccc";
        msg.textContent = "Fill out all fields."; 
        return;
    }

    localStorage.setItem("savedUser", newUser);
    localStorage.setItem("savedPass", newPass);
    msg.style.color = "#90ff90";
    msg.textContent = "Account created! You can login now.";
    setTimeout(showLogin, 1500);
}

function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("errorMsg");
    let savedUser = localStorage.getItem("savedUser");
    let savedPass = localStorage.getItem("savedPass");

    if((user === "guarin" && pass === "090909") || (user === savedUser && pass === savedPass)){
        hideAll();
        document.getElementById("portfolio").style.display = "block";
    } else {
        msg.textContent = "Incorrect username or password.";
    }
}

function forgotPassword(){
    let user = document.getElementById("forgotUser").value;
    let msg = document.getElementById("forgotMsg");
    let savedUser = localStorage.getItem("savedUser");
    let savedPass = localStorage.getItem("savedPass");

    if(user === "guarin"){ 
        msg.style.color = "#90ff90"; 
        msg.textContent = "Your password is: 090909"; 
    }
    else if(user === savedUser){ 
        msg.style.color = "#90ff90"; 
        msg.textContent = "Your password is: " + savedPass; 
    }
    else{ 
        msg.style.color = "#ffcccc"; 
        msg.textContent = "Username not found."; 
    }
}

function socialLogin(platform){
    alert("Logged in with "+platform+"!");
    hideAll();
    document.getElementById("portfolio").style.display = "block";
}

function logout(){
    document.getElementById("portfolio").style.display = "none";
    showLogin();
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

let username=localStorage.getItem("users");

let users=JSON.parse(username);

let login_email = document.getElementById("login-email");

let login_password = document.getElementById("login-password");

let login_btn = document.getElementById("login-btn");

let form = document.getElementById("form");
login_btn.addEventListener("click",function(e){
    users.map((user)=>
    {if(user.email==login_email.value&&user.password==login_password.value)
    {   e.preventDefault();
        localStorage.setItem("username",user.name[1])
        window.location="start.html";
        }
    else{
    alert("you have sign up");}}

    
    )
});
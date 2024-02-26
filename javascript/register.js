let Email = document.getElementById("email");

let Password = document.getElementById("password");

let FName = document.getElementById("fname");
let LName = document.getElementById("lname");

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");


let users = localStorage.getItem("users")? localStorage.getItem("users"): [];

function validateEmail() {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(Email.value)) {
        // not a valid email
        alert('Please enter a valid email address');
        return false;
    } else {
        return true;
    }
}

function checkPassword() {
    if (Password.value == ""){
        alert ('Please fill out the password field')
    }  
    else if (Password.value.length < 8) {
        alert('Your password must be at least 8 characters long');
    } else {
        var upperCaseLetters = /[A-Z]/g;
        var lowerCaseLetters = /[a-z]/g;
        var numbers = /[\d]/g;
        var specialCharacters = /\W/g;
        
        if(!upperCaseLetters.test(Password.value)){
            alert('Your password must contain at least one uppercase letter');
        } else if(!lowerCaseLetters.test(Password.value)){
            alert('Your password must contain at least one lowercase letter');
        } else if(!numbers.test(Password.value)){
            alert('Your password must contain at least one number');
        } else if(!specialCharacters.test(Password.value)){
            alert('Your password must contain at least one special character');
        } else {
            return true;
        }
    }
}

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();



  

let user ={
    email:Email.value,
    password:Password.value,
    name:[FName.value,LName.value],
    date:[year.value,month.value,day.value],
}

users.push(user);

localStorage.setItem("users", JSON.stringify(users));
setTimeout(function()
    {window.location="login.html";}
    ,1500)    }
);



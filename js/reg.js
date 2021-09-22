// toggle buttons 

var myLog = document.getElementById("login");
var mySign = document.getElementById("register");
var logSign = document.getElementById("btn");

function register(){
    myLog.style.left = "-400px";
    mySign.style.left = "50px";
    logSign.style.left = "110px";
}
function login(){
    myLog.style.left = "50px";
    mySign.style.left = "450px";
    logSign.style.left = "0px";
}

 //redirect user
function myFunction(){
    var myUser = document.forms["myForm"]["uName"].value;
    var myPassword = document.forms["myForm"]["pass"].value;
    if(myUser === "Admin" && myPassword === "1234")
    {  
        alert("Login successful")
        window.location.href="index.html";
    }
    else{
        alert("invalid username and password")
    }
}



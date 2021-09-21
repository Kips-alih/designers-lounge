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
const menu =document.querySelector("#mobile-menu")
const menuLinks =document.querySelector(".navmenu")
menu.addEventListener("click",function (){
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

const signupButton=document.getElementById("signupButton");
const loginButton=document.getElementById("loginButton");
const signupForm=document.getElementById("signup");
const loginForm=document.getElementById("login");
signupButton.addEventListener("click", function(){
    loginForm.style.display="none";
    signupForm.style.display="block";
});
loginButton.addEventListener("click", function(){
    loginForm.style.display="block";
    signupForm.style.display="none";
});
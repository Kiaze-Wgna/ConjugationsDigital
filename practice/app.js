const menu =document.querySelector("#mobile-menu")
const menuLinks =document.querySelector(".navmenu")
menu.addEventListener("click",function (){
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

const indicatifContainer=document.getElementById("indicatifContainer");
const indicatifButton=document.getElementById("indicatifButton");
const indicatif=document.getElementById("indicatif");
indicatifButton.addEventListener("click",function(){
    if ((indicatif.style.display=="none")||(indicatif.style.display=="")){
        indicatif.style.display="flex"
        indicatifContainer.style.flexDirection="row"
    } else {
        indicatif.style.display="none"
        indicatifContainer.style.flexDirection="column"
    }
});
const subjonctifContainer=document.getElementById("subjonctifContainer");
const subjonctifButton=document.getElementById("subjonctifButton");
const subjonctif=document.getElementById("subjonctif");
subjonctifButton.addEventListener("click",function(){
    if ((subjonctif.style.display=="none")||(subjonctif.style.display=="")){
        subjonctif.style.display="flex"
        subjonctifContainer.style.flexDirection="row"
    } else {
        subjonctif.style.display="none"
        subjonctifContainer.style.flexDirection="column"
    }
});
const conditionnelContainer=document.getElementById("conditionnelContainer");
const conditionnelButton=document.getElementById("conditionnelButton");
const conditionnel=document.getElementById("conditionnel");
conditionnelButton.addEventListener("click",function(){
    if ((conditionnel.style.display=="none")||(conditionnel.style.display=="")){
        conditionnel.style.display="flex"
        conditionnelContainer.style.flexDirection="row"
    } else {
        conditionnel.style.display="none"
        conditionnelContainer.style.flexDirection="column"
    }
});
const imperatifContainer=document.getElementById("imperatifContainer");
const imperatifButton=document.getElementById("imperatifButton");
const imperatif=document.getElementById("imperatif");
imperatifButton.addEventListener("click",function(){
    if ((imperatif.style.display=="none")||(imperatif.style.display=="")){
        imperatif.style.display="flex"
        imperatifContainer.style.flexDirection="row"
    } else {
        imperatif.style.display="none"
        imperatifContainer.style.flexDirection="column"
    }
});
const participeContainer=document.getElementById("participeContainer");
const participeButton=document.getElementById("participeButton");
const participe=document.getElementById("participe");
participeButton.addEventListener("click",function(){
    if ((participe.style.display=="none")||(participe.style.display=="")){
        participe.style.display="flex"
        participeContainer.style.flexDirection="row"
    } else {
        participe.style.display="none"
        participeContainer.style.flexDirection="column"
    };
});
var tenseLis=new Array();
document.querySelectorAll('.select-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active');
        if ((event.currentTarget.id!="indicatifButton")&&(event.currentTarget.id!="subjonctifButton")&&(event.currentTarget.id!="conditionnelButton")&&(event.currentTarget.id!="imperatifButton")&&(event.currentTarget.id!="participeButton")){
            if (tenseLis.includes(event.currentTarget.id)){
                tenseLis.splice(tenseLis.indexOf(event.currentTarget.id),1);
            } else{
                tenseLis.push(event.currentTarget.id);
            };
        }
    });
});
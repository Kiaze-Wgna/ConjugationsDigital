// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import {getFirestore,setDoc, doc} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv5QUxDEfXOsgRGspNgNPe9SkY4ZiFzCw",
  authDomain: "conjugationsdigital.firebaseapp.com",
  projectId: "conjugationsdigital",
  storageBucket: "conjugationsdigital.firebasestorage.app",
  messagingSenderId: "806727042916",
  appId: "1:806727042916:web:7cb9aee85d21e748799c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function sendUIMessage(message,loginorsignup){
    if (loginorsignup==0){
        var messageDiv=document.getElementById("loginMessage");
    }else if (loginorsignup==1){
        var messageDiv=document.getElementById("signupMessage");
    }
    console.log(messageDiv)
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
        messageDiv.style.display="none";
    },5000)
}

const signUp=document.getElementById("signupsubmit");
signUp.addEventListener("click", (event)=>{
    event.preventDefault();
    const email=document.getElementById("semail").value;
    const password=document.getElementById("spassword").value;
    const auth=getAuth();
    createUserWithEmailAndPassword(auth,email,password).then(()=>function(){
        sendUIMessage("Account Created Successfully",1)
        window.location.href="../practice/"
    }).catch((error)=>{
        if (error.code=="auth/email-already-in-use"){
            sendUIMessage("Please use another email", 1);
        } else {
            sendUIMessage("An unknown error has occured", 1);
        }
    });
});

const login=document.getElementById("loginsubmit");
login.addEventListener("click", (event)=>{
    event.preventDefault();
    const email=document.getElementById("lemail").value;
    const password=document.getElementById("lpassword").value;
    const auth=getAuth();
    signInWithEmailAndPassword(auth,email,password).then(()=>function(){
        sendUIMessage("Account logged in",0)
        window.location.href="../practice/"
    }).catch((error)=>{
        if (error.code=="auth/invalid-credential"){
            sendUIMessage("Incorrect password or email", 0);
        } else {
            sendUIMessage("An unknown error has occured", 0);
        }
    });
});
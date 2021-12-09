document.addEventListener("DOMContentLoaded", start); 

function start() {

    if (document.querySelector("header")) {
        document.querySelector("#burger_icon").addEventListener("click", burgerMenu); 
    }
    

    if (document.querySelector("#log_in_student")) {
        document.querySelector("#log_in_student").addEventListener("click", ()  => {
            location.href = "home.html"; 
        });
    
        document.querySelector("#log_in_teacher").addEventListener("click", ()  => {
            location.href = "home.html"
        }); 
    }  
}

async function getHeader() {
    const headerMenu = await fetch("components/header.html");
    const header = await headerMenu.text();
    document.querySelector("header").innerHTML = header;
    console.log(headerMenu); 
    
    document.querySelector("#burger_icon").addEventListener("click", burgerMenu); 
}

function burgerMenu() {
    console.log("burgerMenu");
    document.querySelector("#nav").classList.toggle("hidden");

    let navHidden = document.querySelector("#nav").classList.contains("hidden");

    if (navHidden == true) {
        document.querySelector("#burger_icon").textContent = "☰";
    } else { 
        document.querySelector("#burger_icon").textContent = "X";
    }
}
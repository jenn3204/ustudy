document.addEventListener("DOMContentLoaded", start); 

function start() {
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
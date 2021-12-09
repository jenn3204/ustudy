document.addEventListener("DOMContentLoaded", start); 

function start() {
    document.querySelector("#burger_icon").addEventListener("click", burgerMenu); 

    document.querySelector("#log_in_student").addEventListener("click", ()  =>{
        location.href = "window.location.href=home.html"; 
    })

document.querySelector("#log_in_teacher").addEventListener("click", ()  =>{
        location.href = "window.location.href=teacher_home.html"
    })
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
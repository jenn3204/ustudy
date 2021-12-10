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

    if (document.querySelector(".class") ) {
        document.querySelectorAll(".class").forEach(square => {
            square.addEventListener("click", () => {
                location.href = "class.html"; 
            })
    
        })
    }

    if (document.querySelector("#class_title")) {
        document.querySelectorAll(".info_title").forEach(title => {
            title.addEventListener("click", () => {
                showContent(title); 
            })
        })

        document.querySelectorAll(".assignment_title").forEach(title => {
            title.addEventListener("click", () => {
                showAssignments(title); 
            })
        })

        document.querySelectorAll(".feedback").forEach(feedbackbtn => {
            let feedback = feedbackbtn.parentNode.nextElementSibling;
            feedbackbtn.addEventListener("click", () => {
                feedback.classList.toggle("hidden"); 
            })
        })

        document.querySelectorAll(".preview").forEach(previewbtn => {
            let material = previewbtn.parentNode.parentNode.nextElementSibling; 
            previewbtn.addEventListener("click", () => {
                material.classList.toggle("hidden"); 

                document.querySelectorAll(".material").forEach(mat => {
                    if (mat != material) {
                        mat.classList.add("hidden"); 
                    }
                })
            } )

        })

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

function showContent(title) {
    console.log(title); 
    console.log(title.nextElementSibling); 
    let titleContent = title.nextElementSibling;
    titleContent.classList.toggle("hidden"); 
    titleContent.scrollIntoView(); 

    document.querySelectorAll(".content").forEach(content => {
        if (content != titleContent) {
            content.classList.add("hidden"); 
        }
    })
}

function showAssignments(title) {
    console.log(title); 
    console.log(title.nextElementSibling); 
    let assignmentContent = title.nextElementSibling;
    assignmentContent.classList.toggle("hidden"); 
    assignmentContent.scrollIntoView(); 

    document.querySelectorAll(".assignment_content").forEach(content => {
        if (content != assignmentContent) {
            content.classList.add("hidden"); 
        }
    })
}
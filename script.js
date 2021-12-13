document.addEventListener("DOMContentLoaded", start); 

function start() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const clas = urlParams.get("class"); 

    if (document.querySelector("header")) {
        document.querySelector("#burger_icon").addEventListener("click", burgerMenu); 
    }

    if (document.querySelector("#classes_dropdown")) {
        if (window.innerWidth > 800) {
            document.querySelector("#classes_nav").addEventListener("mouseover", () => {
                const classesPos = document.querySelector("#classes_nav").getBoundingClientRect(); 
                const classesLeft = classesPos.left - 30 + "px"; 
                document.querySelector("#classes_dropdown").classList.remove("hidden"); 
                document.querySelector("#classes_dropdown").classList.add("dropdown_style"); 
                document.querySelector("#classes_dropdown").style.left = classesLeft; 
            })

            document.querySelector("#classes_dropdown").addEventListener("mouseleave", () => {
                document.querySelector("#classes_dropdown").classList.add("hidden"); 
                document.querySelector("#classes_dropdown").classList.remove("dropdown_style"); 
            })
        }
    }

    if (document.querySelector("#admin_dropdown")) {
        if (window.innerWidth > 800) {
            document.querySelector("#admin_nav").addEventListener("mouseover", () => {
                const adminPos = document.querySelector("#admin_nav").getBoundingClientRect(); 
                const adminLeft = adminPos.left - 50 + "px"; 
                console.log(adminLeft); 
                document.querySelector("#admin_dropdown").classList.remove("hidden"); 
                document.querySelector("#admin_dropdown").classList.add("dropdown_style"); 
                document.querySelector("#admin_dropdown").style.left = adminLeft; 
            })

            document.querySelector("#admin_dropdown").addEventListener("mouseleave", () => {
                document.querySelector("#admin_dropdown").classList.add("hidden"); 
                document.querySelector("#admin_dropdown").classList.remove("dropdown_style"); 
            })
        }
    }
    

    if (document.querySelector("#log_in_student")) {
        document.querySelector("#log_in_student").addEventListener("click", ()  => {
            location.href = "home.html"; 
        });
    
        document.querySelector("#log_in_teacher").addEventListener("click", ()  => {
            location.href = "home_private.html"
        }); 
    }  

    if (document.querySelector(".class") ) {
        document.querySelectorAll(".class").forEach(square => {
            square.addEventListener("click", () => {
                let squareId = square.id; 
                if (square.classList.contains("private")) {
                    location.href = `class_private.html?class=${squareId}`; 
                } else {
                    location.href = `class.html?class=${squareId}`; 
                }
                
            })
    
        })
    }

    if (document.querySelector("#class_title")) {
        let className = clas[0].toUpperCase() + clas.substring(1); 
        const classTitle = className.replaceAll("_", " "); 

        document.querySelector("#class_title h1").textContent = "Class: " + classTitle; 

        if (window.innerWidth > 800) {
            document.querySelector(".content").classList.remove("hidden"); 

            document.querySelector("main").style.height = "1250px"; 

        }

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

    if (document.querySelector("#upload_material")) {
        document.querySelector("#um_btn").addEventListener("click", showUmModal); 

    }

    if (document.querySelector("#upload_assignment_modal")) {
        document.querySelector("#ua_btn").addEventListener("click", showUaModal); 

    }

    if (document.querySelector("#book_meeting_button")) {
        document.querySelector("#book_meeting_button").addEventListener("click", () => {
            if (document.querySelector("#book_meeting_button").classList.contains("private")) {
                location.href = "book_meeting_private.html"; 
            } else {
                location.href = "book_meeting.html"; 
            }
        })

        if (window.innerWidth > 800) {
            document.querySelectorAll(".calendar_content").forEach(cc => {
                cc.classList.remove("hidden"); 
        })

    }

        window.addEventListener("resize", () => {
            console.log("RESIZE"); 
            if (window.innerWidth > 800) {
                document.querySelectorAll(".calendar_content").forEach(cc => {
                    cc.classList.remove("hidden"); 
                    console.log(cc); 
                })
            } else {
                document.querySelectorAll(".calendar_content").forEach(cc => {
                    cc.classList.add("hidden"); 
                })
            }
        })
    }

    if (document.querySelector("#book_meeting")) {
        document.querySelector("#book_meeting").addEventListener("click", () => {
            event.preventDefault(); 
            if (document.querySelector("#book_meeting").classList.contains("private")) {
                location.href = "calendar_private.html"; 
            } else {
                location.href = "calendar.html"; 
            }
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
    let titleContent = title.nextElementSibling;
    titleContent.classList.toggle("hidden"); 

    document.querySelectorAll(".content").forEach(content => {
        if (content != titleContent) {
            content.classList.add("hidden"); 
        }
    })

    document.querySelectorAll(".calendar_content").forEach(content => {
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

function showUmModal() {
    document.querySelector("#upload_material").classList.remove("hidden");
    document.querySelector("#um_close").addEventListener("click", () => {
        document.querySelector("#upload_material").classList.add("hidden");
    }) 

    document.querySelector("#upload_material_btn").addEventListener("click", (event) => {
        event.preventDefault(); 
        document.querySelector("#upload_material").classList.add("hidden");
    })

}

function showUaModal() {
    document.querySelector("#upload_assignment_modal").classList.remove("hidden");
    document.querySelector("#ua_close").addEventListener("click", () => {
        document.querySelector("#upload_assignment_modal").classList.add("hidden");
    }) 

    document.querySelector("#upload_assignment_btn").addEventListener("click", (event) => {
        event.preventDefault(); 
        document.querySelector("#upload_assignment_modal").classList.add("hidden");
    })

}
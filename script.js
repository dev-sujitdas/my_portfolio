// For Tabs In About Section
function opentab(clickedTab, tabName) {
    let tabLinks = document.querySelectorAll(".tab-links");
    tabLinks.forEach((tabLink) => {
        tabLink.classList.remove("active-link");
    });

    let tabContents = document.querySelectorAll(".tab-contents");
    tabContents.forEach((tabContents) => {
        tabContents.classList.remove("active-tabs");
    });

    clickedTab.classList.add("active-link");

    let tabContent = document.getElementById(tabName);
    tabContent.classList.add("active-tabs");
}

// For Colleting the Form Data In Email...
const sendData = document.querySelector("#Send");
sendData.addEventListener("click", function (e) {
    
    let nameVal = document.getElementById("Name").value;
    let emailVal = document.getElementById("Email").value;
    let messageVal = document.getElementById("Message").value;

    let Val = nameVal + emailVal + messageVal;
    
    if(Val===""){
        // alert("Please fill all the details..");
    } else {
        e.preventDefault();
        sendMail();
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Message").value = "";
    }    
});

function sendMail() {
    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const message = document.getElementById("Message").value;
    const body = "Name: " + name + "<br/> Email: " + email + "<br/> Message: " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dev.sujitdas@gmail.com",
        Password: "6328C607AADC7C9738E41C430FE261173D54",
        To: "dev.sujitdas@gmail.com",
        From: "dev.sujitdas@gmail.com",
        Subject: "New Enquiry From My Portfolio",
        Body: body,
    })    
    .then(message =>{
        if(message === 'OK'){
            alert("Your submission was successful.");
        } else {
            alert("Someting went wrong. Please try again later.");
        }
    })    
    .catch(error => {
        console.error('There was an error!', error);
        alert("Someting went wrong. Please try again later.");
    }); 
}

// Download Resume

document.getElementById("downloadBtn").addEventListener("click", function (e) {    
    e.preventDefault();
    let pdfUrl = "files/Resume_SUJIT_DAS.pdf";
    window.open(pdfUrl, "_blank");
  });

// Sidebar

document.addEventListener("DOMContentLoaded", function() {
    let menuClick = document.querySelector(".menu-icon");
    let sideMenu = document.querySelector(".sidebar");
    let tl = gsap.timeline({ paused: true });
    
    menuClick.addEventListener("click", function() {
        if (window.getComputedStyle(sideMenu).display === "none") {
            gsap.to(sideMenu, { right: 0, display: "block" });
            tl.play();
        } else {
            gsap.to(sideMenu, { right: -sideMenu.offsetWidth, display: "none" });
            tl.reverse();
        }
    });
});


    





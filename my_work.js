// Sidebar
document.addEventListener("DOMContentLoaded", function() {
    let menuClick = document.querySelector(".menu-icon");
    let sideMenu = document.querySelector(".sidebar");
    let tl = gsap.timeline({ paused: true });
    
    menuClick.addEventListener("click", function() {
        if (window.getComputedStyle(sideMenu).display === "none") {
            gsap.to(sideMenu, { right: 0, display: "block" });
            tl.play();
            menuClick.innerHTML = `<label for="menu-toggle" class="menu-icon"><i class="ri-close-line"></i></label>`
        }else {
            gsap.to(sideMenu, { right: -sideMenu.offsetWidth, display: "none" });
            tl.reverse();            
            menuClick.innerHTML = `<label for="menu-toggle" class="menu-icon">&#9776;</label>`;
        }
    });    
});

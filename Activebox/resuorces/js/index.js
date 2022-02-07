let toggleBtn = document.getElementsByClassName("toggle-btn")[0];
let navBar = document.getElementById("js--nav");
let toggleIon = document.getElementsByClassName("js--ion")[0];
let hamburgerBox = document.getElementsByClassName("hamburger-menu")[0];

toggleBtn.addEventListener("click" , () => {
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active");
        toggleIon.setAttribute("name", "menu-outline");
        hamburgerBox.classList.remove("active");
    } else {
        navBar.classList.add("active");
        toggleIon.setAttribute("name", "close-outline");
        hamburgerBox.classList.add("active");
    }
})

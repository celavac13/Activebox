let toggleBtn = document.getElementsByClassName("toggle-btn")[0];
let navBar = document.getElementById("js--nav");
let toggleIon = document.getElementsByClassName("js--ion")[0];
let hamburgerBox = document.getElementsByClassName("hamburger-menu")[0];

let modal = document.getElementsByClassName("modal-works")[0];
let modalImg = document.getElementsByClassName("modal-img")[0];
let modalText = document.getElementsByClassName("modal-text")[0];
let modalClose = document.getElementsByClassName("modal-close")[0];
let worksImgs = document.querySelectorAll(".modal-src");

let commentHolder = document.getElementsByClassName("js--comment")[0];
let nameHolder = document.getElementsByClassName("js--name")[0];
let dots = document.getElementsByClassName("dot");
let dotsHolder = document.getElementsByClassName("dot-box")[0];
let indexSlider = 0;

// mobile navigation menu

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

// modal

worksImgs.forEach(element => {
    element.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = element.src;
        modalText.textContent = element.alt;
    })
});

modalClose.addEventListener("click", () => modal.style.display = "none")

// carousel

dotsHolder.addEventListener("click", () => {
    fetch("resuorces/js/comments.json")
    .then(response => response.json())
    .then(data => carouselComments(data, indexSlider));
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        indexSlider = i;
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove("active");
        }
        dots[i].classList.add("active");
    });
};

let carouselComments = (comm, i) => {
    commentHolder.textContent = comm[i].comment;
    nameHolder.textContent = comm[i].name;
}

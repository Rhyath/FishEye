//getting DOM elements
const lightbox = document.querySelector("#lightbox-modal");
const imgBtn = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prev_button");
const nextBtn = document.querySelector(".next_button");


//launch lightbox window
imgBtn.forEach((btn) => btn.addEventListener("click", displayLightbox));

//display lightbox window
function displayLightbox() {
    lightbox.style.display = "block";
    lightbox.style.opacity = 1;

}

///close lightbox event
closeBtn.forEach((btn) => btn.addEventListener("click", closeLightbox));

//close lightbox window
function closeLightbox() {
    lightbox.style.display = "none";
}


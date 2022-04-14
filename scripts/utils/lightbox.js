//getting DOM elements
const imgBtn = document.querySelectorAll(".galleryItem img");
const lightbox = document.querySelector("#lightbox-modal");
const wrapper = document.querySelector(".image_wrapper");
const allSlides = document.querySelectorAll(".thumbnail");
const prevBtn = document.querySelector(".prev_button");
const nextBtn = document.querySelector(".next_button");
const xBtn = document.querySelector(".closeLB_button");


//display lightbox & populate window
function displayLightbox(imgBtn) {
    lightbox.style.visibility = "visible";

    //create and populate image wrapper content
    function populateLightbox() {
        const lbImage = document.createElement('img');
        lbImage.setAttribute("class", "content");
        lbImage.src = imgBtn.src;
        lbImage.alt = imgBtn.alt;
        const lbImageCaption = document.createElement('h3');
        lbImageCaption.setAttribute("class", "caption");
        lbImageCaption.textContent = imgBtn.alt;
        wrapper.appendChild(lbImage);
        wrapper.appendChild(lbImageCaption);
    }
    populateLightbox();

}

/*
//creating the Slides functionality
let slideIndex = 0;
function currentSlide(){
    slideIndex = allSlides[i].id
    return (slideIndex);
}

//creating image slide show
function prevImage(){
    let prevIndex = 0;
    currentSlide();

    prevIndex = slideIndex-1;
    for(let s=0; s<allSlides.length; s++){
        if(slideIndex = prevIndex && slideIndex !== 0){
            //show image corresponding to index
            populateLightbox(this.allSlides[s]);

        }
    }
}
*/

/*
//calling the slide movement functions 
prevBtn.setAttribute("onclick", "prevImage()");
*/



//close lightbox window
function closeLightbox() {
    lightbox.style.visibility = "hidden";
    //removing any additional images/captions
    while(wrapper.lastElementChild ){
        wrapper.removeChild(wrapper.lastChild);
    }
}


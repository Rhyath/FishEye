async function getPageData() {
    let JSONurl = '../../data/photographers.json';
    try {
        const response = await fetch(JSONurl);
        const JSONdata = await response.json(); 
        return JSONdata;
    } catch (error) {
        console.log(error);
    }
}

//getting DOM elements
const lightbox = document.querySelector("#lightbox-modal");
const wrapper = document.querySelector(".image_wrapper");
const imgBtn = document.querySelectorAll(".galleryItem img");
const prevBtn = document.querySelector(".prev_button");
const nextBtn = document.querySelector(".next_button");
const xBtn = document.querySelector(".closeLB_button");


//display lightbox & populate window
function displayLightbox(imgBtn) {
    lightbox.style.display = "block";

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

//close lightbox window
function closeLightbox() {
    lightbox.style.display = "none";
    //removing any additional images/captions
    while(wrapper.lastElementChild ){
        wrapper.removeChild(wrapper.lastChild);
    }
}


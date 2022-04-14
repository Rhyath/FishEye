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

//get specific photographer id from url parameters
function getSpecificID() {
    const urlQuery = window.location.search;
    const urlParam = new URLSearchParams(urlQuery);
    const currentPhotographerId = urlParam.get('photographerId');
    return currentPhotographerId;
}

//calling photographer's info for header
async function displayArtistInfo() {
    const header = document.querySelector(".photograph-header");
    const pricetagBar = document.querySelector(".pricetag");

    const {photographers} = await getPageData();
    let currentPhotographer = getSpecificID();
    //iterate through photographers array to get the selected one 
    for(let i=0; i<photographers.length; i++) {
        if(photographers[i]['id'] == currentPhotographer){

        let photographer = photographers[i];

        const photographerProfile = photographerFactory(photographer);
        const headerCardDOM = photographerProfile.getHeaderCardDOM();
        const headerPicDOM = photographerProfile.getHeaderPicDOM();
        const pricetagDOM = photographerProfile.getPricetagDOM();

        header.prepend(headerCardDOM);
        header.append(headerPicDOM);
        pricetagBar.append(pricetagDOM);
        }
    }
}

//calling media info for gallery
async function displayGallery() {
    const gallery = document.querySelector(".gallery");
    const pricetagBar = document.querySelector(".pricetag");
    const {photographers} = await getPageData(); // SHOULD WE DO THESE TWO GLOBAL VARIABLES SO WE DONT REPEAT OURSELVES??
    const {media} = await getPageData();
    let currentPhotographer = getSpecificID();
    //iterating through the media array to select required one
    let likesSum = 0;
    for(let y=0; y<media.length; y++){
        if(media[y]['photographerId'] == currentPhotographer){
            let currentMedia = media[y];
            //displsaying the item that matches parameters
            const imageModel = mediaFactory(currentMedia);
            const galleryItemDOM = imageModel.getGalleryItemDOM();
            gallery.appendChild(galleryItemDOM);
            //calculating the total likes for photographer
            const allLikes = currentMedia['likes'];
            likesSum = likesSum + allLikes;
        }
    }
    //handling the total likes element
    let artistLikes =  document.createElement('h3');
    artistLikes.setAttribute("class", "likesIcon");
    artistLikes.textContent = likesSum;
    pricetagBar.prepend(artistLikes);
}

//calling media info for lightbox thumbnails 
async function displayThumbnails() {
    const slides = document.querySelector(".slide_thumb");
    
    const {photographers} = await getPageData();
    const {media} = await getPageData();

    let currentPhotographer = getSpecificID();
    //iterating through the media array to select required one
    for(let y=0; y<media.length; y++){
        if(media[y]['photographerId'] == currentPhotographer){
            let currentMedia = media[y];
            //displsaying the item that matches parameters
            const thumbModel = mediaFactory(currentMedia);
            const thumbItemDOM = thumbModel.getSlidesThumbDOM();
           slides.appendChild(thumbItemDOM);
        }
    }
    //assign a slide id to each lightbox thumbnail
    let arrayItem = document.querySelectorAll(".thumbnail");
    let slideId = 1;
    for(ai=0; ai<arrayItem.length; ai++){
        arrayItem[ai].setAttribute("id", slideId);
        slideId++;
    }
}


async function init() {
    const {photographers} = await getPageData();
    displayArtistInfo(photographers);
    const {media} = await getPageData();
    displayGallery(media);
    displayThumbnails(media);
}

init();

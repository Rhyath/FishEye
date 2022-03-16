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
    const {photographers} = await getPageData(); // SHOULD WE DO THESE TWO GLOBAL VARIABLES SO WE DONT REPEAT OURSELVES??
    const {media} = await getPageData();
    let currentPhotographer = getSpecificID();
    //iterating through the media array to select required one
    for(let y=0; y<media.length; y++){
        if(media[y]['photographerId'] == currentPhotographer){
            let currentMedia = media[y];
            //displsaying the item that matches parameters
            const imageModel = mediaFactory(currentMedia);
            const galleryItemDOM = imageModel.getGalleryItemDOM();
            gallery.appendChild(galleryItemDOM);
        }
    }
}

//calculating likes total
async function getLikesSum() {
    const {media} = await getPageData();
    displayGallery(media);

}

async function init() {
    const {photographers} = await getPageData();
    displayArtistInfo(photographers);
    const {media} = await getPageData();
    displayGallery(media);
}

init();

/*
const {media} = await getHeaderData();
alert(media[0]['photographerId']);



    SELECT * FROM media WHERE photographerId = photographers[i]['id]']

    parse media and filter where photographerId = photographers[i]['id]']
*/
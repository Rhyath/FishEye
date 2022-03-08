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

//calling photographer's info for header
async function displayHeader() {
    const header = document.querySelector(".photograph-header");

    const {photographers} = await getPageData();
    //iterate through photographers array to get the selected one -- AMEND ONCE HOMEPAGE POPULATED WITH LINKS
    for(let i=0; i<photographers.length; i++) {
        if(photographers[i]['id'] == photographers[0]['id']){

        let photographer = photographers[i];

        const photographerProfile = photographerFactory(photographer);
        const headerCardDOM = photographerProfile.getHeaderCardDOM();
        const headerPicDOM = photographerProfile.getHeaderPicDOM();

        header.prepend(headerCardDOM);
        header.append(headerPicDOM);
        }
    }
}

//calling media info for gallery
async function displayGallery() {
    const gallery = document.querySelector(".gallery");
    const {photographers} = await getPageData(); // SHOULD WE DO THESE TWO GLOBAL VARIABLES SO WE DONT REPEAT OURSELVES??
    const {media} = await getPageData();

    //iterating through the media array to select required one -- AMEND photographers[index] ONCE HOMEPAGE POPULATED WITH LINKS
    for(let y=0; y<media.length; y++){
        if(media[y]['photographerId'] == photographers[3]['id']){
            let currentMedia = media[y];

            const imageModel = mediaFactory(currentMedia);
            const galleryItemDOM = imageModel.getGalleryItemDOM();
            gallery.appendChild(galleryItemDOM);
        }
    }
}

async function init() {
    const {photographers} = await getPageData();
    displayHeader(photographers);
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
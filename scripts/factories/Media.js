
function mediaFactory(data) {
    //constructor of an object that stores our data parameter
    const { id, photographerId, title, image, likes, date, price } = data;

    let imagesrc = `../../assets/images/${image}`;

   //creating the gallery item for photographer page
   function getGalleryItemDOM() {
    const gItem = document.createElement('article');
    gItem.setAttribute("class", "galleryItem");
    const gItemImage = document.createElement('img');
    gItemImage.setAttribute("src", imagesrc);
   gItemImage.setAttribute("onclick", "displayLightbox()"); 
    const gItemInfoBar = document.createElement('div');
    gItemInfoBar.setAttribute("class", "info-bar");
    const gItemTitle = document.createElement('h3');
    gItemTitle.textContent = title;
    const gItemLikes = document.createElement('h3');
    gItemLikes.setAttribute("class", "likesIcon");
    gItemLikes.textContent = likes;
    gItem.appendChild(gItemImage);
    gItem.appendChild(gItemInfoBar);
    gItemInfoBar.appendChild(gItemTitle);
    gItemInfoBar.appendChild(gItemLikes);
    return (gItem);
   }

/*
   function getLightboxItemDOM() {
    const wrapper = document.querySelector(".image_wrapper");
    const lbImage = document.createElement('img');
    lbImage.setAttribute("src", imagesrc);
    const lbImageTitle = document.createElement('h3');
    lbImageTitle.textContent = title;
    wrapper.appendChild(lbImage);
    wrapper.appendChild(lbImageTitle);
    return (wrapper);
   }
*/

   return {id, photographerId, title, image, likes, date, price,getGalleryItemDOM, /*getLightboxItemDOM*/ }
}
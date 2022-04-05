
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
    gItemImage.setAttribute("alt", title);
    gItemImage.setAttribute("id", id);
    gItemImage.setAttribute("onclick", "displayLightbox(this)");
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

   return {id, photographerId, title, image, likes, date, price,getGalleryItemDOM }
}
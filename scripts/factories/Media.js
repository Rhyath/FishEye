
function mediaFactory(data) {
    //constructor of an object that stores our data parameter
    const { id, photographerId, title, image, likes, date, price } = data;

   //creating the gallery item for photographer page
   function getGalleryItemDOM() {
    const gItem = document.createElement('article');
    gItem.setAttribute("class", "galleryItem");
    const gItemImage = document.createElement('img');
    gItemImage.setAttribute("src", image);
    const gItemInfoBar = document.createElement('div');
    gItemInfoBar.setAttribute("class", "info-bar");
    const gItemTitle = document.createElement('h3');
    gItemTitle.textContent = title;
    const gItemLikes = document.createElement('i');
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

function photographerFactory(data) {
    //constructor of an object that stores our data parameter
    const { name, id, city, country, tagline, price, portrait } = data;

    let portraitsrc = `../../assets/photographers/${portrait}`;
    //creating the photographer profile card for index page
    function getUserCardDOM() {
        const article = document.createElement('article');
        const aLink = document.createElement('a');
        aLink.setAttribute("href", "photographer.html?photographerId=" + id);
        const profilePic = document.createElement('img');
        profilePic.setAttribute("src", portraitsrc);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h5 = document.createElement('h5');
        h5.textContent = city + ", " + country;
        const p_tagline = document.createElement('p');
        p_tagline.textContent = tagline;
        const p_price = document.createElement('small');
        p_price.textContent = "$" + price + "/day";
        aLink.appendChild(profilePic);
        aLink.appendChild(h2);
        aLink.appendChild(h5);
        aLink.appendChild(p_tagline);
        aLink.appendChild(p_price);
        article.appendChild(aLink);
        return (article);
    }

    //creating header info for photographer page
    function getHeaderCardDOM() {
        const article = document.createElement('article');
        const h1 = document.createElement('h1');
        h1.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + ", " + country;
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        article.append(h1);
        article.append(h3);
        article.append(h4);
        return(article);
    }

    function getHeaderPicDOM() {
        const profilePic = document.createElement('img');
        profilePic.setAttribute("src", portraitsrc);
        profilePic.setAttribute("border", "solid 1px grey");
        return (profilePic);
    }

    function getPricetagDOM() {
        const priceInfo = document.createElement('h3');
        priceInfo.textContent = price + '€/day';
        return (priceInfo);
    }

    // return an object that contains all the information we will be needing 
    return { name, id, city, country, tagline, price, portrait, getUserCardDOM, getHeaderCardDOM, getHeaderPicDOM, getPricetagDOM }

}
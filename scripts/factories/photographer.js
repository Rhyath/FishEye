
function photographerFactory(data) {
    //constructor of an object that stores our data parameter
    const { name, portrait } = data;
    //storing the portrait-data in a new variable
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
// return an object that contains all the information we will be needing
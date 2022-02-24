    async function getPhotographers() {
        // grab photographers data from the json file
       let JSONurl = '../../data/photographers.json';
       try {
           const response = await fetch(JSONurl);
           const JSONdata = await response.json(); //parse & store data
           return JSONdata;
       } catch (error) {
           console.log(error);
       }
        /* Return photographer array only once
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
        */
    }

    async function displayData() {
        const photographersSection = document.querySelector(".photographer_section");
        
        // Retreive photographer data by distructuring json data object
        const {photographers} = await getPhotographers();
        photographers.forEach(photographer => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Retreive photographer data by distructuring json data object
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
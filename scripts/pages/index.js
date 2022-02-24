    async function getPhotographers() {
        // TODO : Replace with data from the JSON file
       let url = '../../data/photographers.json';
       try {
           let response = await fetch(url);
           return await response.json();
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

        let photographers = await getPhotographers();
        photographers.forEach(photographer => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
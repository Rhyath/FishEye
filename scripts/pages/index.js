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
    }

    async function displayData() {
        const photographersSection = document.querySelector(".photographer_section");

        // Retreive photographer data by distructuring json data object
        const {photographers} = await getPhotographers();
        //loop through object array using the factory patter as prototype
        photographers.forEach(photographer => {
            //specify the factory script that will provide the prototype
            const photographerModel = photographerFactory(photographer); 
            //store each profile in a variable by calling the creation function within the factory method
            const userCardDOM = photographerModel.getUserCardDOM();
            //add it on the DOM
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        const { photographers } = await getPhotographers(); //need the destructure again, as we have to pass the date as argument on next function called
        displayData(photographers);
    };
    
    init();
    
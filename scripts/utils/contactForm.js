//getting DOM elements
const modal = document.getElementById("contact_modal");
const modalBtn = document.querySelectorAll(".contact_button");
const closeBtn = document.querySelectorAll(".close_button");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const inputData = document.querySelectorAll(".textfield");
const submitBtn = document.querySelectorAll(".submit_button");
//global variables
let allValid = true;

//launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", displayModal));

//display modal window
function displayModal() {
	modal.style.display = "block";
}

//close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

//close modal window
function closeModal() {
    modal.style.display = "none";
}

function validateForm(){
    //prevent form reload
    event.preventDefault();
    //validate all input fields
    inputCheck();
    //check validation is complete
    if(allValid == true){
        closeModal();
    } else {
        allValid = true;
    }
}

submitBtn.forEach((btn) => btn.addEventListener("click", validateForm));

//checking input data
function inputCheck() {
    const firstName = inputData[0].value; 
    const lastName = inputData[1].value; 
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = inputData[2].value; 
    const msgContent = inputData[3].value; 

    //FIRST NAME
    if(firstName == '' || firstName == null){
        formData[0].setAttribute("data-error-visible", "true");
        formData[0].setAttribute("data-error", "Please provide your first name");
        allValid = false;
    } else {
        formData[0].removeAttribute("data-error-visible");
        formData[0].removeAttribute("data-error");
        console.log('First name: ' + firstName);
    }    
    //LAST NAME
    if(lastName == '' || firstName == null){
        formData[1].setAttribute("data-error-visible", "true");
        formData[1].setAttribute("data-error", "Please provide your last name");
        allValid = false;
    } else {
        formData[1].removeAttribute("data-error-visible");
        formData[1].removeAttribute("data-error");
        console.log('Last name: ' + lastName);
    }
    //EMAIL
    if(email == '' || email == null){
        formData[2].setAttribute("data-error-visible", "true");
        formData[2].setAttribute("data-error", "Please provide your email address");
        allValid = false;
    } else if(!email.match(regex)) {
        formData[2].setAttribute("data-error-visible", "true");
        formData[2].setAttribute("data-error", "Please provide a valid email address");
        allValid = false;
    } else {
        formData[2].removeAttribute("data-error-visible");
        formData[2].removeAttribute("data-error");
        console.log('Email: ' + email);
    }
    //MESSAGE CONTENT
    if(msgContent == '' || msgContent == null){
        formData[3].setAttribute("data-error-visible", "true");
        formData[3].setAttribute("data-error", "Please ptype your message for the artist");
        allValid = false;
    } else {
        formData[3].removeAttribute("data-error-visible");
        formData[3].removeAttribute("data-error");
        console.log('Message: ' + msgContent);
    }
}

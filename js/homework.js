
/* Homework for the Bike for Refugee.  
 Making changes when clicking blue button.
 First selecting #blueBtn id and assign with blueButton. Adding addEventlistener to that blueButton
 to changeToBlue when it's clicked. class .jumbotron was selected and assigned as box. donateButton,
 volunteerButton and volunteerText were assigned to relevant variable.*/
var blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', changeToBlue);
var box = document.querySelector('.jumbotron');
var donateButton = document.querySelector(".btn.btn-primary.btn-lrg");
var volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
var volunteerTextColor = document.querySelector('.volunteerText');

/* This is a function called "changeToBlue" which will change box's,donateButton's 
, volunteerButton's background color and volunteerTextcolor.*/
function changeToBlue() {
    box.style.backgroundColor = '#588fbd';
    donateButton.style.backgroundColor = '#ffa500';
    volunteerButton.style.backgroundColor = 'black';
    volunteerTextColor.style.color = 'white';
}

//  Making changes when clicking orange button.*/
var orangeButton = document.querySelector('#orangeBtn');
orangeButton.addEventListener('click', changetoOrange);

/*changetoOrange function. box, donateButton,volunteerButton's 
background color changed.*/
function changetoOrange() {
    box.style.backgroundColor = '#f0ad4e';
    donateButton.style.backgroundColor = '#5751fd';
    volunteerButton.style.backgroundColor = '#31b0d5';
}

// Making changes when clicking green button.
var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', changeToGreen);

/* changeToGreen function.box, donateButton,volunteerButton's 
background color changed. */
function changeToGreen() {
    box.style.backgroundColor = '#87ca8a';
    donateButton.style.backgroundColor = 'black';
    volunteerButton.style.backgroundColor = '#8c9c08';
}

/* Selecting the submit button and creating "validateTheForm" function.*/
var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', validateTheForm);

// This is ValidateTheForm function. used event.preventDefault() method. 
function validateTheForm(event) {
    event.preventDefault();

    // selecting namebox with document.querySelector.
    var namebox = document.querySelector('#example-text-input');
    // Adding value in namebox.
    var nameboxWV = namebox.value;

    // selecting email input box with document.querySelector.
    var emailInput = document.querySelector('#exampleInputEmail1');
    // Adding value in emailInput.
    var emailInputWV = emailInput.value;

    // selecting describe yourself box with document.querySelector.
    var describeYourselfInput = document.querySelector('#exampleTextarea');
    // Adding value in emailInput.
    var describeYourselfInputWV = describeYourselfInput.value;

    // Setting the form is Valid by using boolean.(true)
    var formIsValid = true;
    /* if the namebox with value.length is invalid, changed background color of box to red 
    by assinging .className "inValid". Changing formIsValid from true to false.*/
    if (nameboxWV.length === 0) {
        namebox.className = 'form-control inValid';
        formIsValid = false;
    }

    /* if the emailInput with value.length is invalid, changed background color of box to red 
        by assinging .className "inValid". Changing formIsValid from true to false.*/
    if (emailInputWV.length === 0 || emailInputWV.indexOf('@') === -1) {
        emailInput.className = 'form-control inValid';
        formIsValid = false;
    }
    /* if the describeYourselfInput with value.length is invalid, changed background color of box to red 
        by assinging .className "inValid". Changing formIsValid from true to false.*/
    if (describeYourselfInputWV.length === 0) {
        describeYourselfInput.className = 'form-control inValid';
        formIsValid = false;
    }

    /* if the form is valid, alert (" thanks "), change namebox, describeYourself 
    and email's value to empty string value.*/
    if (formIsValid) {
        alert("Thank you for filling out the form");
        namebox.value = "";
        describeYourselfInput.value = "";
        emailInput.value = "";
    }

}






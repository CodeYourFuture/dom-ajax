
/* Homework for the Bike for Refugee.  This code is partly working. 
 Making changes when clicking blue button.*/
var blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', changeToBlue);
var box = document.querySelector('.jumbotron');
var donateButton = document.querySelector(".btn.btn-primary.btn-lrg");
var volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");

function changeToBlue() {
    box.style.backgroundColor = '#588fbd';
    donateButton.style.backgroundColor = '#ffa500';
    volunteerButton.style.backgroundColor = 'black';
}


//  Making changes when clicking orange button.*/
var orangeButton = document.querySelector('#orangeBtn');
orangeButton.addEventListener('click', changetoOrange);

function changetoOrange() {
    box.style.backgroundColor = '#f0ad4e';
    donateButton.style.backgroundColor = '#5751fd';
    volunteerButton.style.backgroundColor = '#31b0d5';
}


// Making changes when clicking green button.
var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', changeToGreen);

function changeToGreen() {
    box.style.backgroundColor = '#87ca8a';
    donateButton.style.backgroundColor = 'black';
    volunteerButton.style.backgroundColor = '#8c9c08';
}

/* Selecting the submit button and validating the form.
doesn't seem to be working.*/
var submitButtom = document.querySelector('#submitButton');
submitButtom.addEventListener('click', validateTheForm);

function validateTheForm() {

    var nameboxTag = document.querySelector(#example - text - input);
    var namebox = document.querySelector('#example-text-input').value;
    if (namebox.length === 0) {
        nameboxTag.style.backgroundColor = '#8c9c08';
    }
}



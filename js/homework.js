
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
    volunteerButton.innerHTML.backgroundColor = 'white';
}


//  Making changes when clicking orange button.*/
var orangeButton = document.querySelector('#orangeBtn');
orangeButton.addEventListener('click', changetoOrange);

function changetoOrange() {
    box.style.backgroundColor = '#f0ad4e';
    donateButton.style.backgroundColor = '#5751fd';
    volunteerButton.style.backgroundColor = '#31b0d5';
    volunteerButton.innerHTML.backgroundColor = 'white';
}


// Making changes when clicking green button.
var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', changeToGreen);

function changeToGreen() {
    box.style.backgroundColor = '#87ca8a';
    donateButton.style.backgroundColor = 'black';
    volunteerButton.style.backgroundColor = '#8c9c08';
    volunteerButton.innerText.backgroundColor = 'white';
}

// Selecting the submit button and validating the form.
var submitButtom = document.querySelector("button.btn.btn-primary");
submitButtom.addEventListener('click',validateTheForm);
function validateTheForm() {
alert("selected the right button.");
}


// // Didn't seem to be working.
// var donateButton = document.querySelector(".btn-primary");
// donateButton.addEventListener("click", changeColor1);

// function changeColor1() {
//     donateButton.style.backgroundColor = '#ffa500';
// }



// var volunteerButton = document.querySelector(".btn-secondary");
// volunteerButton.addEventListener("click", changeColor2);

// function changeColor2() {
//     volunteerButton.style.backgroundColor = 'black';
// }




// // This didn't work out, need help
// var volunteerFont = document.querySelector("Volunteer");
// volunteerFont.addEventListener("click", changeFontColor);

// function changeFontColor() {
//     volunteerFont.style.backgroundColor = 'white';
// }


// // Not working
// var orangeButton = document.querySelector("#orangeBtn");
// orangeButton.addEventListener("click", changeBackgroundColor);

// function changeBackgroundColor() {
//     jumbotron.style.backgroundColor = "#f0ad4e";
// }

// var jumbBackground = document.querySelector('#jumbotronId');
// var domanteButon = document.querySelector('#domantButtonId');
// domanteButon.addEventListener('click', addBackground);
// function addBackground() {
//     jumbBackground.style.backgroundColor = 'black';
// }


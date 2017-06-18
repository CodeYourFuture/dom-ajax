
// Homework for the Bike for Refugee.  This code is not working.
var blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", changeTheme);

function changeTheme() {
    .jumbotron.style.backgroundColor = '#588fbd';
}


// Didn't seem to be working.
var donateButton = document.querySelector(".btn-primary");
donateButton.addEventListener("click", changeColor1);

function changeColor1() {
    donateButton.style.backgroundColor = '#ffa500';
}



var volunteerButton = document.querySelector(".btn-secondary");
volunteerButton.addEventListener("click", changeColor2);

function changeColor2() {
    volunteerButton.style.backgroundColor = 'black';
}

// This didn't work out, need help
var volunteerFont = document.querySelector("Volunteer");
volunteerFont.addEventListener("click", changeFontColor);

function changeFontColor() {
    volunteerFont.style.backgroundColor = 'white';
}


// Not working
var orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    jumbotron.style.backgroundColor = "#f0ad4e";
}
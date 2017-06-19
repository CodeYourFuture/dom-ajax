// part 1
var box = document.querySelector('.jumbotron');
var donateButton = document.querySelector('.buttons .btn-primary');
var volunteerButton = document.querySelector('.buttons .btn-secondary');

//blue button
var blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', colorBlue);
//orange button
var orangeButton = document.querySelector('#orangeBtn');
orangeButton.addEventListener('click', colorOrange);
// green button
var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', colorGreen);

//blue button function
function colorBlue() {
    box.style.backgroundColor = '#588fbd';
    donateButton.style.backgroundColor = '#ffa500';
    volunteerButton.style.backgroundColor = 'black';
    volunteerButton.style.color = 'white';
}

//orange button function
function colorOrange() {
    box.style.backgroundColor = '#f0ad4e';
    donateButton.style.backgroundColor = '#5751fd';
    volunteerButton.style.backgroundColor = '#31b0d5';
    volunteerButton.style.color = 'white';
}

//green button function
function colorGreen() {
    box.style.backgroundColor = '#87ca8a';
    donateButton.style.backgroundColor = 'black';
    volunteerButton.style.backgroundColor = '#8c9c08';
}

//part 2    
//input Text
var textEmail = document.querySelector('#exampleInputEmail1');
var textName = document.querySelector('#example-text-input');
var textDescib = document.querySelector('#exampleTextarea');
//submit button
var sbumitButton = document.querySelector('form .btn-primary');
sbumitButton.addEventListener('click', submitForm);

//submit function
function submitForm(event) {
    event.preventDefault();
    checkEmail();
    checkName();
    checkDescrib();
    if (checkEmail() && checkName() && checkDescrib()) {
        textEmail.value = "";
        textName.value = "";
        textDescib.value = "";
        setTimeout(function () {
            alert('Thank you for filling out the form');
        }, 200);
    }
}

//check text in email field 
function checkEmail() {
    if (textEmail.value.length <= 0 || textEmail.value.indexOf('@') < 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(textEmail.value))) {
        textEmail.style.backgroundColor = "red";
    }
    else {
        textEmail.style.backgroundColor = "white";
        return true;
    }
}

//check text in name field 
function checkName() {
    if (textName.value.length <= 0 || /\d/.test(textName.value) || /[\.-@#$%^&*()-_=+]/.test(textName.value)) {
        textName.style.backgroundColor = "red";
    }
    else {
        textName.style.backgroundColor = "white";
        return true;
    }
}
//check text in describe your self field 
function checkDescrib() {
    if (textDescib.value.length <= 0) {
        textDescib.style.backgroundColor = "red";
    }
    else {
        textDescib.style.backgroundColor = "white";
        return true;
    }
}
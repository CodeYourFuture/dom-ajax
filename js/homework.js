
////////////////////////////////////////////////////
//////      Part One of the Homework     /////////
/////////////////////////////////////////////////

var blueColor = document.querySelector('#blueBtn');// Selects the button.
blueColor.addEventListener('click', changeToBlueColor);// When the button is clicked the function is called.

var orangeColor = document.querySelector('#orangeBtn');
orangeColor.addEventListener('click', changeToOrangeColor);

var greenColor = document.querySelector('#greenBtn');
greenColor.addEventListener('click', changeToGreenColor);

var jumbo = document.querySelector('.jumbotron');
var donate = document.querySelector('.buttons .btn-primary')
var volunteer = document.querySelector('.btn-secondary')

function changeToBlueColor() {
    jumbo.style.backgroundColor = '#588fbd';
    donate.style.backgroundColor = '#ffa500';
    volunteer.style.backgroundColor = 'black';
    volunteer.style.color = 'white';
}

function changeToOrangeColor() {
    jumbo.style.backgroundColor = '#f0ad4e';
    donate.style.backgroundColor = '#5751fd';
    volunteer.style.backgroundColor = '#31b0d5';
    volunteer.style.color = 'white';
}

function changeToGreenColor() {
    jumbo.style.backgroundColor = '#87ca8a';
    donate.style.backgroundColor = 'black';
    volunteer.style.backgroundColor = '#8c9c08';
}


////////////////////////////////////////////////////
//////      Part two of the Homework     /////////
/////////////////////////////////////////////////


// Selector for the form
var textEmail = document.querySelector('#exampleInputEmail1');
var textName = document.querySelector('#example-text-input');
var describe = document.querySelector('#exampleTextarea');
//Selector for the submit button
var sbumitButton = document.querySelector('form .btn-primary');
sbumitButton.addEventListener('click', submitForm);

//check text in email field 

function userEmail() {
    if (textEmail.value.indexOf('@') === 0) {
        textEmail.style.backgroundColor = "red";
        alert('This is not a valid email address, because it doesn\'t have \'@\'')
    }
    else {
        textEmail.style.backgroundColor = "white";
        return true;
    }
}

//check text in name field 
function userName() {
    if (textName.value.length <= 1) {
        textName.style.backgroundColor = "red";
        alert('You Have Entered unvalid Name')
    }
    else {
        textName.style.backgroundColor = "white";
        return true;
    }
}
//check text in describe your self field 
function description() {
    if (describe.value.length <= 5) {
        describe.style.backgroundColor = "red";
        alert('The description should be at least 5 characters long')
    }
    else {
        describe.style.backgroundColor = "white";
        return true;
    }
}



function submitForm(event) {
    event.preventDefault();
    var verifyEmail = userEmail();
    var verifyName = userName();
    var verifyDescription = description()
    description();
    if (verifyEmail && verifyName && verifyDescription) {
        textEmail.value = "";
        textName.value = "";
        describe.value = "";
        alert('Thank you for filling out the form');

    }
}

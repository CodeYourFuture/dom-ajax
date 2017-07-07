var blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", jumboBlue);

function jumboBlue() {
    var blue = document.querySelector(".jumbotron");
    var blue1 = document.querySelector("#bikeButton.btn-primary");
    var blue2 = document.querySelector("#volunteerButton.btn-secondary");

    if (!blue.className.includes("blue")) {
        blue.className += " blue";
    }
    if (!blue1.className.includes("bikeButtonOrange")) {
        blue1.className += " bikeButtonOrange";
    }
    if (!blue2.className.includes("volunteerButtonBlack")) {
        blue2.className += " volunteerButtonBlack";
    }
}

var orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", jumboOrange);

function jumboOrange() {
    var orange = document.querySelector(".jumbotron");
    var orange1 = document.querySelector("#bikeButton.btn-primary");
    var orange2 = document.querySelector("#volunteerButton.btn-secondary");

    if (!orange.className.includes("orange")) {
        orange.className += " orange";
    }
    if (!orange1.className.includes("bikeButtonBlue")) {
        orange1.className += " bikeButtonBlue";
    }
    if (!orange2.className.includes("volunteerButtonBlue")) {
        orange2.className += " volunteerButtonBlue";
    }
}

var greeBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", jumboGreen);

function jumboGreen() {
    var green = document.querySelector(".jumbotron");
    var green1 = document.querySelector("#bikeButton.btn-primary");
    var green2 = document.querySelector("#volunteerButton.btn-secondary");

    if (!green.className.includes("green")) {
        green.className += " green";
    }
    if (!green1.className.includes("bikeButtonBlack")) {
        green1.className += " bikeButtonBlack";
    }
    if (!green2.className.includes("volunteerButtonGreen")) {
        green2.className += " volunteerButtonGreen";
    }
}
/*
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click", checkEmail);

function checkEmail(evt) {
    evt.preventDefault();
    var inputEmail = document.getElementById("exampleInputEmail1");
    var email = false

    if (inputEmail && inputEmail.value.indexOf("@") !== -1) {
        return true;
    }
    else if (!email) {
        alert('Please provide a valid email address');
        inputEmail.style.backgroundColor = '##F4FA58';
        inputEmail.focus;
    }
    else if (inputEmail.value == "") {
        alert("Error: Email is empty!");
        inputEmail.style.backgroundColor = '##F4FA58';
        inputEmail.focus();
        return false;
    }

}

var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click", checkName);

function checkName(evt) {
    evt.preventDefault();
    var inputText = document.getElementById("example-text-input");

    if (inputText.value == "") {
        alert("Error: Name is empty!");
        inputText.style.backgroundColor = '#F4FA58';
        inputText.focus();
        return false;
    }
}

var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click", checkYou);

function checkYou(evt) {
    evt.preventDefault();
    var inputTextArea = document.getElementById("exampleTextarea");

    if (inputTextArea.value == "") {
        alert("Error: Describe yourself field is empty!");
        inputTextArea.style.backgroundColor = '#F4FA58';
        inputTextArea.focus();
        return false;
    }
}
*/
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click", validateNoEmpty);

function validateNoEmpty(field, alertTxt) {
    if (field.value == "") {
        alert(alertTxt);
        field.style.backgroundColor = "red";
        field.focus();
        return false;
    }
    return true;
}
if (validateNoEmpty(inputName, "Error: Name is Empty") &&
    validateNoEmpty(inputTextArea, "Error: Describe yourself field is empty!")) {
    alert("Thanks for submitting your information"); {
        document.getElementById("contact-form").reset()
        inputTextArea.style.backgroundColor = '';
        inputTextArea.focus();
        return true;
    }

}

/*
function checkForm() {
    event.preventDefault();
    var inputName = document.getElementById("example-text-input");
    var inputEmail = document.getElementById("exampleInputEmail1");
    var inputTextArea = document.getElementById("exampleTextarea");
    var email = false

    if (inputEmail && inputEmail.value.indexOf("@") !== -1) {
        email = true;
    }
    else if (!email) {
        alert('Please provide a valid email address');
        inputEmail.style.backgroundColor = 'red';
        inputEmail.focus;
    }
    else if (inputEmail.value == "") {
        alert("Error: Email is empty!");
        inputEmail.style.backgroundColor = 'red';
        inputEmail.focus();
        return false;
    }
    if (inputName.value == "") {
        alert("Error: Name is empty!");
        inputName.style.backgroundColor = 'red';
        inputName.focus();
        return false;
    }
    if (inputTextArea.value == "") {
        alert("Error: Describe yourself field is empty!");
        inputTextArea.style.backgroundColor = 'red';
        inputTextArea.focus();
        return false;
    }
    if (alert("Thanks for submitting your information")); {
        document.getElementById("contact-form").reset()
        inputTextArea.style.backgroundColor = '';
        inputTextArea.focus();
        return true;
    }


}
*/

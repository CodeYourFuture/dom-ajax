/*======================= Bule Button =========================*/
const blueBtn = document.querySelector('#blueBtn');
const jumbBackground = document.querySelector('#jumbBackground');
const donateBackground = document.querySelector('#donateBackground');
const volunteerBack = document.querySelector('#volunteerBack');
blueBtn.addEventListener('click', function () {
    jumbBackground.style.backgroundColor = '#588fbd';
    donateBackground.style.backgroundColor = '#ffa500';
    volunteerBack.style.backgroundColor = 'black';
    volunteerBack.style.color = 'white';
});
/*======================== Orange Button =======================*/
const orangeBtn = document.querySelector('#orangeBtn');
const orangeJumb = document.querySelector('.orangeJumb');
const orangeDonate = document.querySelector('.orangeDonate');
const orangeVolun = document.querySelector('.orangeVolun');
orangeBtn.addEventListener('click', function () {
    orangeJumb.style.backgroundColor = '#f0ad4e';
    orangeDonate.style.backgroundColor = '#5751fd';
    orangeVolun.style.backgroundColor = '31b0d5';
    orangeVolun.style.color = 'white';
});
/*========================== Green Button =======================*/
const greenBtn = document.querySelector('#greenBtn');
const greenJumb = document.querySelector('.greenJumb');
const greenDonate = document.querySelector('.greenDonate');
const greenVolun = document.querySelector('.greenVolun');
greenBtn.addEventListener('click', function () {
    greenJumb.style.backgroundColor = '#87ca8a';
    greenDonate.style.backgroundColor = 'black';
    greenVolun.style.backgroundColor = '8c9c08';
});
/*======================== Form Validation ========================*/
const name = document.querySelector('#example-text-input');
const email = document.querySelector('#exampleInputEmail1');
const textArea = document.querySelector('#textArea');
const subButton = document.querySelector('#subButton');
subButton.addEventListener('click', function(pram) {
    pram.preventDefault()
    function nameValid(name) {
        return name.value !== '';
    }
    function emailValid(email) {
        return email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) 
    }
    function textAreaValid(textArea) {
        return textArea.value !== '';
    }
    function elementColor(elementName) {
        return elementName.style.backgroundColor = 'red';
    }
    
    if(nameValid(name) && emailValid(email) && textAreaValid(textArea)){
            alert('Thank you for filling out the form');
    }else if (!nameValid(name) && !emailValid(email) && !textAreaValid(textArea)){
            elementColor(name);
            elementColor(email);
            elementColor(textArea);
    }else if (nameValid(name) && !emailValid(email) && !textAreaValid(textArea)) {
            elementColor(email);
            elementColor(textArea);
    }else if (!nameValid(name) && !emailValid(email) && textAreaValid(textArea)) {
            elementColor(email);
            elementColor(name);
    }else if (!nameValid(name) && emailValid(email) && !textAreaValid(textArea)) {
            elementColor(name);
            elementColor(textArea);
    }else if (nameValid(name) && !emailValid(email) && textAreaValid(textArea)) {
            elementColor(email);
    }else if (nameValid(name) && emailValid(email) && !textAreaValid(textArea)) {
            elementColor(textArea);
    }else if (!nameValid(name) && emailValid(email) && textAreaValid(textArea)) {
            elementColor(name);
    }      
});



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
const emailValid = document.querySelector('#exampleInputEmail1');
const nameValid = document.querySelector('#example-text-input');
const emailTest = document.querySelector('#example-text-input');
const textAreaValid = document.querySelector('#exampleTextarea');
const subButton = document.querySelector('#subButton');
subButton.addEventListener('click', function(pram) {
    pram.preventDefault()
        if(nameValid.value !== '' && textAreaValid.value !== '' && emailValid.value.includes('@')){
            alert('Thank you for filling out the form');
    }else if (nameValid.value === '' || textAreaValid.value === '' || !emailValid.value.includes('@')){
        if (nameValid.value === '' && textAreaValid.value === '' && !emailValid.value.includes('@')) {
            emailValid.style.backgroundColor = 'red';
            nameValid.style.backgroundColor = 'red';
            textAreaValid.style.backgroundColor = 'red';
        }else if (nameValid.value !== '' && textAreaValid.value === '' && !emailValid.value.includes('@')) {
            emailValid.style.backgroundColor = 'red';
            textAreaValid.style.backgroundColor = 'red';
        }else if (nameValid.value === '' && textAreaValid.value !== '' && !emailValid.value.includes('@')) {
            emailValid.style.backgroundColor = 'red';
            nameValid.style.backgroundColor = 'red';
        }else if (nameValid.value === '' && textAreaValid.value === '' && emailValid.value.includes('@')) {
            textAreaValid.style.backgroundColor = 'red';
            nameValid.style.backgroundColor = 'red';
        }else if (nameValid.value !== '' && textAreaValid.value !== '' && !emailValid.value.includes('@')) {
            emailValid.style.backgroundColor = 'red';
        }else if (nameValid.value !== '' && textAreaValid.value === '' && emailValid.value.includes('@')) {
            textAreaValid.style.backgroundColor = 'red';
        }else if (nameValid.value === '' && textAreaValid.value !== '' && emailValid.value.includes('@')) {
            nameValid.style.backgroundColor = 'red';
        }
       }
        
});



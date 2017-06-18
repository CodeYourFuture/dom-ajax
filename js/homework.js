// part 1
var box = document.querySelector('.jumbotron');
var donateButton = document.querySelector('.buttons .btn-primary');
var volunteerButton = document.querySelector('.buttons .btn-secondary');

//blue button
var blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click',colorBlue);
//orange button
var blueButton = document.querySelector('#orangeBtn');
blueButton.addEventListener('click',colorOrange);
// green button
var blueButton = document.querySelector('#greenBtn');
blueButton.addEventListener('click',colorGreen);

//blue button function
function colorBlue(){
box.style.backgroundColor='#588fbd';
donateButton.style.backgroundColor='#ffa500';
volunteerButton.style.backgroundColor='black';
volunteerButton.style.color='white';
}

//orange button function
function colorOrange(){
box.style.backgroundColor='#f0ad4e';
donateButton.style.backgroundColor='#5751fd';
volunteerButton.style.backgroundColor='#31b0d5';
volunteerButton.style.color='white';
}

//green button function
function colorGreen(){
box.style.backgroundColor='#87ca8a';
donateButton.style.backgroundColor='black';
volunteerButton.style.backgroundColor='#8c9c08';
}

//part 2 
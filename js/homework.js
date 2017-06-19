var bluChange = document.querySelector('#blueBtn');
// select the button and assign to the bluChange variable
bluChange.addEventListener('click', changeBlueColor);
// create an Event and call the function
function changeBlueColor(){
    var myJumbo = document.querySelector('.jumbotron');
    var myDonate = document.querySelector('.btn-primary')
    var volnter = document.querySelector('.btn-secondary')
    myJumbo.style.backgroundColor = '#588fbd';
    myDonate.style.backgroundColor = '#ffa500';
    volnter.style.backgroundColor = 'black';
    volnter.style.color = 'white';
}

var oraChange = document.querySelector('#orangeBtn');
// select the button and assign to the oraChange variable
oraChange.addEventListener('click', changeOrangeColor);
// create an Event and call the function
function changeOrangeColor(){
    //change the color of selected query
    var myJumbo = document.querySelector('.jumbotron');
    var myDonate = document.querySelector('.btn-primary')
    var volnter = document.querySelector('.btn-secondary')
    myJumbo.style.backgroundColor = '#f0ad4e';
    myDonate.style.backgroundColor = '#5751fd';
    volnter.style.backgroundColor = '#31b0d5';
    volnter.style.color = 'white';
}

var greenChange = document.querySelector('#greenBtn');
// select the button and assign to the greenChange variable
greenChange.addEventListener('click', changeGreenColor);
// create an Event and call the function
function changeGreenColor(){
    var myJumbo = document.querySelector('.jumbotron');
    var myDonate = document.querySelector('.btn-primary')
    var volnter = document.querySelector('.btn-secondary')
    myJumbo.style.backgroundColor = '#87ca8a';
    myDonate.style.backgroundColor = 'black';
    volnter.style.backgroundColor = '#8c9c08';
}


var register = document.querySelector('.summitValid');
register.


function changeBackgroundColour(element, colour, ) {
  element.style.backgroundColor = colour;
}
function changeFontColor(element, colour) {
  element.style.color = colour;
}
function jumbotronColor(element, colour) {
  element.style.backgroundColor = colour;
}

function changeColor(event) {
  var jumbotron = document.querySelector('.jumbotron');
  var donateAbike = document.querySelector('.btn.btn-primary.btn-lrg');
  var volunteer = document.querySelector('.btn.btn-secondary.btn-lrg');

  if (event.target.id === "blueBtn") {
    changeBackgroundColour(jumbotron, '#588fbd');
    changeBackgroundColour(donateAbike, '#ffa500');
    changeBackgroundColour(volunteer, 'black');
    changeFontColor(volunteer, 'white');
  } else if (event.target.id === 'orangeBtn') {
    changeBackgroundColour(jumbotron, '#f0ad4e');
    changeBackgroundColour(donateAbike, '#5751fd');
    changeBackgroundColour(volunteer, '#31b0d5');
    changeFontColor(volunteer, 'white');

  } else if (event.target.id === 'greenBtn') {
    changeBackgroundColour(jumbotron, '#87ca8a');
    changeBackgroundColour(donateAbike, 'black');
    changeBackgroundColour(volunteer, '#8c9c08');


  }

}
var myButtons = document.querySelectorAll('.colorButton');
for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', changeColor);

}



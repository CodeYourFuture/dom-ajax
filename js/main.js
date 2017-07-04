// 1. Select element (using CSS selectors)
var myButton = document.querySelector('.jumbotron');

// 2. Define your event handler (callback <-- function)
myButton.addEventListener('click', doSomething);

function doSomething(){
  var jumbotron = document.querySelector('.jumbotron');
  jumbotron.style.backgroundColor = 'red';
}

var myButton = document.querySelector('#addToLearnMore');
myButton.addEventListener('click', appendArticle);

function changeColor() {
  var mainArticles = document.querySelector('#mainArticles');
  mainArticles.style.color = 'yellow';
}

function appendArticle() {
  var paragragh = document.createElement('p');
  paragragh.innerText = 'My name is Anthony and am a student';

  var mainArticles = document.querySelector("#mainArticles");
  mainArticles.appendChild(paragragh);
}

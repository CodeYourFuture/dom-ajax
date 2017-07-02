/*
let myButton = document.querySelector('#donateBike');
myButton.addEventListener('click', function () {
  alert('Hello DOM');
});

let myButton = document.querySelector("#donateBike");
let myBox = document.querySelector("#myBox");
myButton.addEventListener("click", function() {
  myBox.className = "niceColor";
});
*/
/*
myBox.addEventListener('mouseup', function () {
  myBox.style.backgroundColor = 'black';
});

const addPragraph = document.querySelector("#addToLearnMore");
const addToArticle = document.querySelector("#mainArticles");
addPragraph.addEventListener("click", function() {
  const pragraph = document.createElement("p");
  pragraph.innerText = "Show more javascript!!!!!!";
  addToArticle.appendChild(pragraph);
});


const allImages = document.querySelectorAll("img");
const myButton = document.querySelector("#allImages");
myButton.addEventListener("click", function() {
  for (const i = 0; i < allImages.length; i++) {
    allImages[i].style.borderRadius = "50px";
  }
});
*/

const myButton = document.querySelector("#myButton");
const myInput = document.querySelector("#myInput");
myButton.addEventListener("click", function(event) {
  event.preventDefault();
  const request = new XMLHttpRequest(); //creating a request object

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      // check if a response was sent back
      if (request.status === 200) {
        // check if request was successful
        textBox.innerHTML = request.responseText;
      } else {
        textBox.innerHTML =
          "An error occurred during your request: " +
          request.status +
          " " +
          request.statusText;
      }
    }
  };
  const url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=b"; //server location
  const params = myInput.value; // content we want to send
  request.open("POST", url, true); // adding them to the request

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
  request.send(params);
});
//###########################/
const mySecondButton = document.querySelector("#mySecondButton");
const myMassage = document.querySelector("#myMassage");
mySecondButton.addEventListener("click", function(event) {
  event.preventDefault();
  const request = new XMLHttpRequest(); //creating a request object
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      // check if a response was sent back
      if (request.status === 200) {
        // check if request was successful
        const data = JSON.parse(request.responseText);
        myMassage.innerHTML = data.message;
      } else {
        myMassage.innerHTML =
          "An error occurred during your request: " +
          request.status +
          " " +
          request.statusText;
      }
    }
  };
  const url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=b"; //server location
  request.open("GET", url); // adding it to the request

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
  request.send();
});

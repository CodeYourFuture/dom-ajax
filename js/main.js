
// Setting an alert
var learnMoreButton = document.querySelector("#addToLearnMore");
learnMoreButton.addEventListener("click", ShowMore);

function ShowMore() {
  alert("Thanks for finding out more about us");
}

// Setting an alert 
var images = document.querySelector("#allImages");
images.addEventListener("click", seeImages);

function seeImages() {
  alert("There you go, enjoy all our photos");
}

// changing background colour
var boxColor = document.querySelector(".jumbotron");
boxColor.addEventListener('click', changeColor);

function changeColor() {
  boxColor.style.backgroundColor = 'yellow';

  var paragraph = document.createElement('p');
  paragraph.innerText = "SHOW ME MORE JAVASCRIPT";

  boxColor.appendChild(paragraph);
}

var learnButton = document.querySelector("#addToLearnMore");
learnButton.addEventListener('click', addParagraph);

function addParagraph() {

  var newParagraph = document.createElement('p');
  newParagraph.innerText = "SHOW ME MORE We need lots of bike what are the tricks";

  var topOfArticle = document.querySelector('#mainArticles');
  topOfArticle.appendChild(newParagraph);
}

var allImagesbutton = document.querySelector("#allImages");
allImagesbutton.addEventListener("click", showAllImages);

function showAllImages() {
  var selectingAllimg = document.querySelectorAll("img");
  for (var i = 0; i < selectingAllimg.length; i++) {
    selectingAllimg[i].width = selectingAllimg[i].width - 10;
    selectingAllimg[i].height = selectingAllimg[i].height - 10;
  }
}
// It's not working.
var boxColor = document.querySelector(".jumbotron");
boxColor.addEventListener('click', changeColor);

function changeColor() {
  boxColor.className += " blue";
}


// This works. Posting, Sending (params) to Server
var request = new XMLHttpRequest(); //creating a request object
request.onreadystatechange = function () {
  if (request.readyState === 4) {  // check if a response was sent back
    if (request.status === 200) {     // check if request was successful
      document.querySelector(".display-3").innerHTML = request.responseText;
    } else {
      alert('An error occurred during your request: ' + request.status + ' ' + request.statusText);
    }
  }
}
var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=c";                                            //server location
var params = "Hello Mohamed and Nasir. What are you going to do now";        // content we want to send
request.open("POST", url, true);            // adding them to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(params);                             // sending the request




// Getting/receiving the data from the server 
var request = new XMLHttpRequest(); //creating a request object
request.onreadystatechange = function () {
  if (request.readyState === 4) {  // check if a response was sent back
    if (request.status === 200) {  // check if request was successful
      document.querySelector(".display-3").innerHTML = JSON.parse(request.responseText)['message'];
    } else {
      alert('An error occurred during your request: ' + request.status + ' ' + request.statusText);
    }
  }
}
var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=c";                                            //server location
//   var params = "Hello"// content we want to send
request.open("GET", url);// adding them to the request
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(); // sending the request




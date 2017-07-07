

var myButton = document.querySelector("#donateBike");

myButton.addEventListener("click", selectBox);

function selectBox() {
    var box = document.querySelector(".jumbotron");
    if (!box.className.includes("red")) {
        box.className += " red";
    }
}

var myButton2 = document.querySelector("#addToLearnMore"); // Element that is going to call the action

myButton2.addEventListener("click", createNewParagraph);

function createNewParagraph() {
    var box = document.querySelector("#mainArticles"); // Call the element that want to change
    var paragraph = document.createElement("article.article");
    paragraph.style.color = "blue";
    paragraph.innerText = "SHOW ME MORE JAVASCRIPT!!";

    box.appendChild(paragraph);
}

var images = document.querySelector("#allImages"); // Element that is going to call the action
images.addEventListener("click", selectAll);

function selectAllImages() {
    var allImages = document.querySelectorAllImages("img");
    for (var i = 0; i < allImages.length; i++) {
        allImages[i].width = allImages[i].width - 10;
        allImages[i].height = allImages[i].height - 10;

    }
};

var divs = document.querySelector("#addToLearnMore"); // Element that is going to call the action
divs.addEventListener("click", selectDivs);

function selectDivs() {
    var allDivs = document.querySelectorAll("div");
    if (!allDivs.className.includes("pink")) {
        allDivs.className += " pink";
    }
}

// AJAX
//creating a request object

var addInfo = document.querySelector("#addArticleBtn"); // Element that is going to call the action
addInfo.addEventListener("click", request);

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    // var messageBox = document.querySelector(".form-control addArticle");
    if (request.readyState === 4) {  // check if a response was sent back
        if (request.status === 200) {     // check if request was successful
            document.querySelector("#textBox").value = JSON.parse(request.responseText)["message"]; // needs to be value because it's an input object in htlm
        } else {
            requestMessage.innerHTML = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
        }
    }
}
var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=c";                                        //server location
request.open("GET", url);                    // adding it to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send();                                 // sending the request

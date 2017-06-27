function getMessage() {
  var textBox = document.querySelector('.addArticle');
  var request = new XMLHttpRequest();         //creating a request object

  request.onreadystatechange = function () {
    if (request.readyState === 4) {  // check if a response was sent back
      if (request.status === 200) {     // check if request was successful
        textBox.value = request.responseText;
      } else {
        textBox.value = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
      }
    }
  }
  var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=yohannes";                                        //server location
  request.open("GET", url);                    // adding it to the request

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
  request.send();                                 // sending the request
}

var text = document.querySelector('#getMessageButton');
text.addEventListener('click', getMessage);


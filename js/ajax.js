// post code in ajax

function postMessage() {
    var mainArticles = document.querySelector('#mainArticles');
    var textBox = document.querySelector('.addArticle');

    var request = new XMLHttpRequest(); 		//creating a request object
    
    request.onreadystatechange = function () {
        if (request.readyState === 4) {  // check if a response was sent back
            if (request.status === 200) { 	// check if request was successful
                mainArticles.innerHTML = request.responseText;
            } else {
                mainArticles.innerHTML = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
            }
        }
    }
    
    var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=cyf";	                                        //server location
    var params = textBox.value; 		// content we want to send
    textBox.value = '';
    request.open("POST", url, true);			// adding them to the request

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
    request.send(params);

}
var postLetter = document.querySelector('#postMessageBtn');
postLetter.addEventListener('click', postMessage);



// get code from the server

/*var request = new XMLHttpRequest(); 	    //creating a request object

 request.onreadystatechange = function() {
   if(request.readyState === 4) {  // check if a response was sent back
     if(request.status === 200) { 	// check if request was successful
       textBox.innerHTML = request.responseText;
     } else {
       textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
     }
   }
 }
 var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=cyf";	                                    //server location
 request.open("GET", url);					// adding it to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(); 								// sending the request
*/
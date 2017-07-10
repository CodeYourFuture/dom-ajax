var myButton = document.querySelector('#donateBike');
myButton.addEventListener('click', myfunction);

function myfunction() {

  var myMsg = document.querySelector('input').value;
  var id = document.querySelector('select').value;

  var request = new XMLHttpRequest(); 	    //creating a request object

  request.onreadystatechange = function () {
    if (request.readyState === 4) {  // check if a response was sent back
      if (request.status === 200) { 	// check if request was successful
        //textBox.innerHTML = request.responseText;
        var a = JSON.parse(request.responseText);
        var box = document.querySelector('.jumbotron')

        var paragraph = document.createElement('p');
        paragraph.innerText = a.message;
        box.appendChild(paragraph);
        //alert(a.message)
      } else {
        alert('An error occurred during your request: ' + request.status + ' ' + request.statusText);
        // textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=eee";	                                    //server location
  request.open("GET", url);					// adding it to the request

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
  request.send();

}




// var myButton = document.querySelector('#addArticleBtn');
// myButton.addEventListener('click', myfunction);

// function myfunction(){
// var request = new XMLHttpRequest(); 		//creating a request object

//  request.onreadystatechange = function() {
//    if(request.readyState === 4) {  // check if a response was sent back
//      if(request.status === 200) { 	// check if request was successful
//        textBox.innerHTML = request.responseText;
//      } else {
//        textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
//      }
//    }
//  }
//  var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=b";	                                        //server location
//  var params = "  I love you "; 		// content we want to send
//  request.open("POST", url, true);			// adding them to the request

// request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
// request.send(params); 			
// }







// var myButton = document.querySelector('#donateBike');
// myButton.addEventListener('click', myfunction);
// function myfunction(){
// var box = document.querySelector('.jumbotron');
// box.className += ' blue';
// }





// function myfunction(){

//     var images = document.querySelectorAll('img')
//     for(var i = 0; i<images.length; i++){
//        images[i].width = images[i].width * .5;
//         images[i].height *= .5;
//     }
// }









// function myfunction(){

//     var box = document.querySelector('#mainArticles');

// var x=Math.floor(Math.random() * 255);
// var y=Math.floor(Math.random() * 255);
// var z=Math.floor(Math.random() * 255);

//     box.style.backgroundColor="rgb("+x+","+x+","+y+")";


//     var paragraph = document.createElement('p');
//     paragraph.innerText = "show me more text";
//     box.appendChild(paragraph);
// }

// function myfunction(){
//     alert("Thank you for donating ");
// }

// function myfunction(){

//     var box = document.querySelector('.jumbotron')
//     box.style.backgroundColor="red";


//     var paragraph = document.createElement('p');
//     paragraph.innerText = "show me more text";
//     box.appendChild(paragraph);
// }
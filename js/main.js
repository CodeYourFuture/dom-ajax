// var donate = document.querySelector('#donateBike');
// donate.addEventListener('click', showTheAlert);

// function showTheAlert() {
//     alert('Donate button clicked');
// }
/*var change = document.querySelector('#changeButtons');
change.addEventListener('click', changeAll);

function appendParagraph() {
    var paragraph = document.createElement('p');
    paragraph.innerText = "How are you?";
    var main = document.querySelector('#mainArticles');
    main.appendChild(paragraph);
}
function changeAll() {
    changeTheColor();
    appendParagraph();
    changeParagraphColor();    
}

function changeParagraphColor(){
    var paragraphs = document.querySelectorAll('p');
    for(var i=0; i<paragraphs.length; i++){
        paragraphs[i].style.backgroundColor = 'blue';
    }
}
changeParagraphColor();

*/


var donate = document.querySelector('#donateBike');
donate.addEventListener('click', changeTheColor);

function changeTheColor(event) {
    event.preventDefault();
    var myJumbo = document.querySelector('.jumbotron');
    myJumbo.className += " highlites";
}


var addArticle = document.querySelector('#addArticleBtn');
addArticle.addEventListener('click', appendArticle);

function appendArticle() {
    var articleTextBox = document.querySelector('.addArticle');

    if (!articleTextBox.value) {
        alert('please Enter the values');
    } else {
        // 1. Create element based on input
        var element = createArticle(articleTextBox.value);

        // 2. Append input to main articles
        var mainArticles = document.querySelector('#mainArticles');
        mainArticles.appendChild(element);

        // 3. clear input
        articleTextBox.value = ' ';
    }

}

function createArticle(textBoxValue) {
    var article = document.createElement('article');
    var element = document.createElement('div');
    element.className = 'article-title';
    article.className = 'article';
    element.innerText = textBoxValue;
    article.appendChild(element);
    return article;
}
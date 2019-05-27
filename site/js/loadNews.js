///////////////// CREATING ALL THE VARIABLES //////////////////////////////////
const API = 'https://newsapi.org/v2/everything?q=3d%20printer&apiKey=7d092e05191c4a83b7c7ba009e14e45e';
const maxArticles = 10;

$(document).ready(function() {
///////////////// LOADING THE NEWS ARTICLES ///////////////////////////////////
  fetch(API)
    .then(response => {
      return response.json()
    })
    .then(data => {
      return show_news(data);
    })
    .catch((error) =>{
      alert(`There was an error in the API key`)
      return console.error(error);
    });
});

function show_news(newsJSON) {
  let articles = newsJSON.articles;
  let newsCol = [];
  let index = 0;
///////////////// ERROR IF THERE IS NO NEWS ABOUT 3D-PRINTERS /////////////////
  if (articles.length === 0) {
    let err = document.createElement("div");

    let errMSG = `<div class="jumbtron">
                    <h1> er zijn geen berichten in de laatste maand</h1>
                  </div>`

    err.innerHTML = errMSG;

    document.getElementById('news').appendChild(err)
    console.error("geen nieuws berichten beschikbaar");
    return;
  }
///////////////// MAKING THE ARRAY OF NEWS MESSAGES AS A STRING ///////////////
  while(newsCol.length < maxArticles) {
    if (articles.length <= index) {
      break;
    }
    if(articles[index].content !== null && articles[index].urlToImage !== null) {
      newsCol.push(makeNewsContentDiv(articles[index]));
    }
    index++
  }
///////////////// CREATING A NEW DIV FOR THE NEWS ARTICLES ////////////////////
    let newsMSG = document.createElement("div");
    newsMSG.className += "row justify-content-center"
///////////////// TRANSFORMING THE ARRAY OF NEWS MESSAGES TO A SINGLE STRING //
    let MSG = createFullMsg(newsCol);
    newsMSG.innerHTML = MSG;
///////////////// DISPLAYING THE NEWS ARTICLICLES /////////////////////////////
    document.getElementById('news').appendChild(newsMSG)
}

function makeNewsContentDiv (article) {
  let content = article.content.split("…")[0] + "…";
  let date = article.publishedAt.split("T")[0];
///////////////// MAKING THE STRING TO PUT IN THE newsCol ARRAY ///////////////
  let newsCard = `
    <div class="card col-md-5 col-sml-8 newsCard">\n
      <img class="card-img-top" src="${article.urlToImage}" alt="${article.title}">\n
      <div class="card-body">\n
        <h5 class="card-title">${article.title}</h5>\n
        <p class="card-text">${content}</p>\n
        <p class="card-text"><small>${article.author}, ${date}</small></p>\n
        <a href="${article.url}" class="card-link">${article.source.name}</a>\n
      </div>\n
    </div>\n
  `

  return newsCard;
}
///////////////// MAKING THE STRING TO DISPLAY ////////////////////////////////
function createFullMsg(arr) {
  let msg = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined && arr[i] !== null) {
      msg += arr[i] + "\n"
    }
  }
  return msg;
}

const API = 'https://newsapi.org/v2/everything?q=3d%20printer&apiKey=7d092e05191c4a83b7c7ba009e14e45e';
const maxArticles = 20;

$(document).ready(function() {
  fetch(API)
    .then(response => {
      return response.json()
    })
    .then(data => {
      show_news(data);
    })
});

function show_news(newsJSON) {
  let articles = newsJSON.articles;
  let newsCol = [];
  let index = 0;

  console.log(articles)
  while(newsCol.length < maxArticles) {
    console.log(index);
    if (articles.length <= index) {
      break;
    }
    if(articles[index].content !== null && articles[index].urlToImage !== null) {
      newsCol.push(makeNewsContentDiv(articles[index]));
    }
    index++
  }
  for (var i = 0; i < newsCol.length; i++) {
    let newsMSG = document.createElement("div");

    newsMSG.className += "piet"
    newsMSG.innerHTML = newsCol[i];
    let id = Math.round(i/2)
    document.getElementsByClassName(`row`)[0].appendChild(newsMSG)
  }
  console.log(newsCol);
}

function makeNewsContentDiv (article) {
  let content = article.content.split("…")[0] + "…";
  let date = article.publishedAt.split("T")[0];
  let newsCard = `
    <div class="card col-lg-4 col-md-5 col-sml-8">\n
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

var title = document.querySelector(".addArticleTitle");
var text = document.querySelector(".addArticle");
var btn = document.querySelector(".post-button");
var news = document.querySelector(".news-content");
var fun = document.querySelector(".fun-content");


btn.onclick= function () {
  var head = title.value;
  var content = text.value;

  console.log(head);
  console.log(content);

  localStorage.setItem("title",`${head}`);
  localStorage.setItem("article",`${content}`);

  document.getElementsByClassName("news-content").innerHTML = localStorage.getItem("title");
};
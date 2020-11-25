var title = document.querySelector(".addArticleTitle");
var text = document.querySelector(".addArticle");
var btn = document.querySelector(".post-button");
var news = document.querySelector(".news-content");
var fun = document.querySelector(".fun-content");
var option = document.querySelector("#options");
var itemTwo = document.querySelector(".item-two");
var itemFour = document.querySelector(".item-four");

var newsCount = 0;
var funCount = 0;


btn.onclick= function () {
  const head = title.value;
  const content = text.value;
  const options = option.value;
  
  set();
  function set(){
    var article = {
      title: `${head}`,
      article: `${content}`,
      option: `${options}`
    }
    console.log(article);
    localStorage.setItem(head,JSON.stringify(article));
  }
  //page reloads and changes take place
  location.reload();
};

  for (var i = 0; i < localStorage.length; i++) {
    //fetch value
    const id = localStorage.key(i);
    //storing value in a variable
    const id1 = localStorage.getItem(id);
    //to convert back to string
    var id2 = JSON.parse(id1);
    console.log(id2);
    console.log(id2.option);
     
    if(id2.option == "news"){
      newsCount += 1;
      itemTwo.innerHTML += `
					<div class="content">
            <b id="title"><p>${id2.title}</p></b>
            <img src="http://lorempixel.com/400/200/sports/${i}/" >
						<p>${id2.article}</p>
          </div>
          `;
    }
    if(id2.option == "fun"){
      funCount += 1;
      itemFour.innerHTML += `
					<div class="content">
            <b><p id="title">${id2.title}</p></b>
            <img src="http://lorempixel.com/400/200/people/${i}/" >
						<p>${id2.article}</p>
          </div>
          `;
    }
    console.log(newsCount);
    console.log(funCount);
    document.querySelector(".item-three").innerHTML = 
        ` <h2>Counting</h2>
          <p>No. of News Article: ${newsCount}</p>
          <p>No. of Fun Article: ${funCount}</p>
        `;
    }





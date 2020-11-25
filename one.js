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
  
  const html = function humangasour(){

   for(var i = 0; i < localStorage.length - (i+1); i++)  {
			 return `
                    <div class="slider-box">
											<span class="details">
											<b>
                        <p id="title"> ${localStorage.getItem("title")} </p>
                        <p id="title"> ${localStorage.getItem("article")} </p>
                        console.log(${localStorage.getItem("title")});
                        console.log(${localStorage.getItem("article")});
									    </b>
                      </span>
                    </div>`;
		};}
		document.getElementsByClassName("news-content").innerHTML = html;
	}



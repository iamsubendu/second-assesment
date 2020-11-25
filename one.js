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

  if (head && content) {
    localStorage.setItem(head,content);
    location.reload();
  }
};

for( var i = 0; i < localStorage.length; i++) {
  const item = localStorage.item(i);
  const value = localStorage.getItem(item);

  news.innerHTML = value.map(data=> {
     `
                    <div class="content-box">
											<span class="details">
                        <b>
                          <p>${data.item}</p>
                          <p>${data.value}</p>
									      </b>
                      </span>
			              </div>
                  `;
  })
}
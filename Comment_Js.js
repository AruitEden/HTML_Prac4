let comments = []; //Массив коментариев

loadComments();
//localStorage.clear();

var form = document.getElementById("form_comment");

//Отправка коментария
document.getElementById("comment_add").onclick = function () {
  let comment_body = document.getElementById("comment-body");

  let user = JSON.parse(localStorage.getItem("loginUser"));

  let comment = {
    name: user.name,
    body: comment_body.value,
  };

  form.reset();

  comments.push(comment);

  console.log(comment);

  saveComments();
  showComments();
};

//Сохранение коментария в LocalStorаgе
function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

//Показать коментприи при загрузке страницы
function loadComments() {
  if (localStorage.getItem("comments"))
    comments = JSON.parse(localStorage.getItem("comments"));

  showComments();
}

//Показать коментарии
function showComments() {
  let comment_field = document.getElementById("comment_field");

  let out = " ";

  comments.forEach(function (item) {
    out += `<div class = "com"><em><p class = "nik">${item.name}:</p></em><p class = "com_text">${item.body}</p></div>`;
  });

  comment_field.innerHTML = out;
}

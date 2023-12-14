let users = JSON.parse(localStorage.getItem("CoolUsers"));

const delay = 7000;
let currentIndex = 1;

inUser(0);

setInterval(function () {
  inUser(currentIndex);

  currentIndex++;
  if (currentIndex >= users.length) {
    currentIndex = 0;
  }
}, delay);

function inUser(index) {
  document.getElementById("image").src = users[index].url;
  document.getElementById("name").innerHTML = users[index].name;
  document.getElementById("tel").innerHTML = users[index].number;
  document.getElementById("email").innerHTML = users[index].email;
  document.getElementById("count").innerHTML = users[index].year;
}

//////////////////////////

Video();
News();

function Video() {
  let video = JSON.parse(localStorage.getItem("Video"));

  document.getElementById("t_video").innerHTML = video.name;
  document.getElementById("video").src = video.url;
}

function News() {
  let news = JSON.parse(localStorage.getItem("News"));

  document.getElementById("t_text").innerHTML = news.name;
  document.getElementById("text").innerHTML = news.text;
}

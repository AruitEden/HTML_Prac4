//Слайдер
var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";

  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active_btn");
  }

  this.classList.add("active_btn");
};

btn[1].onclick = function () {
  slide.style.transform = "translateX(-1000px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active_btn");
  }

  this.classList.add("active_btn");
};

btn[2].onclick = function () {
  slide.style.transform = "translateX(-2000px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active_btn");
  }

  this.classList.add("active_btn");
};

//Кнопка

//localStorage.clear();
localStorage.setItem("name_cruis", "");

var btn_f = document.getElementsByClassName("form_btn");

btn_f[0].onclick = function () {
  localStorage.setItem("name_cruis", "КРУЇЗ З БАРСЕЛОНИ");
  cl();
};
btn_f[1].onclick = function () {
  localStorage.setItem("name_cruis", "АНТАРКТИКА");
  cl();
};
btn_f[2].onclick = function () {
  localStorage.setItem("name_cruis", "КРУЇЗ НА ЯХТІ");
  cl();
};

function cl() {
  window.location.href = "Form_Cruise.html";
}

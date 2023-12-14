//Open/Close form
document.getElementById("employee_f").onclick = function () {
  document.querySelector(".modal").style.display = "flex";
};

document.getElementById("close").onclick = function () {
  document.querySelector(".modal").style.display = "none";
};

/////////////////////////////////////

document.getElementById("employee_f2").onclick = function () {
  document.querySelector(".modal2").style.display = "flex";
};

document.getElementById("close2").onclick = function () {
  document.querySelector(".modal2").style.display = "none";
};

/////////////////////////////////////

document.getElementById("employee_f3").onclick = function () {
  document.querySelector(".modal3").style.display = "flex";
};

document.getElementById("close3").onclick = function () {
  document.querySelector(".modal3").style.display = "none";
};

//Form 1

const userUrl = document.getElementById("url");
const useName = document.getElementById("name");
const userEmail = document.getElementById("email");
const useYear = document.getElementById("year");
const userNumber = document.getElementById("number");

//localStorage.removeItem("CoolUsers");

//localStorage.setItem("CoolUsers", JSON.stringify([]));

let users = JSON.parse(localStorage.getItem("CoolUsers"));

class NewUser {
  constructor(url, name, email, year, number) {
    this.url = url;
    this.name = name;
    this.email = email;
    this.year = year;
    this.number = number;
  }
}

//Проверка на вшивость

function validation() {
  function removeError(input) {
    if (input.classList.contains("error")) {
      input.classList.remove("error");
    }
  }

  function createEror(input) {
    input.classList.add("error");
  }

  let result = true;

  removeError(useYear);
  if (useYear.value > 45 || useYear.value == 0) {
    result = false;
    createEror(useYear);
  }
  return result;
}

const form = document.getElementById("my_form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validation() == true) {
    users.push(
      new NewUser(
        userUrl.value,
        useName.value,
        userEmail.value,
        useYear.value,
        userNumber.value
      )
    );

    localStorage.setItem("CoolUsers", JSON.stringify(users));

    form.reset();
  }
});

// Form 2

//localStorage.removeItem("Video");
//localStorage.setItem("Video", "");

class NewVideo {
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }
}

const Name = document.getElementById("name_video");
const Url = document.getElementById("url_v");

const form2 = document.getElementById("my_form2");

form2.addEventListener("submit", function (event) {
  event.preventDefault();

  let video = new NewVideo(Url.value, Name.value);

  localStorage.setItem("Video", JSON.stringify(video));

  form2.reset();
});

// Form 3

//localStorage.removeItem("News");
//localStorage.setItem("News", "");

class NewNews {
  constructor(text, name) {
    this.text = text;
    this.name = name;
  }
}

const Name_t = document.getElementById("name_n");
const Txet_t = document.getElementById("comment");

const form3 = document.getElementById("my_form3");

form3.addEventListener("submit", function (event) {
  event.preventDefault();

  let news = new NewNews(Txet_t.value, Name_t.value);

  localStorage.setItem("News", JSON.stringify(news));

  form3.reset();
});

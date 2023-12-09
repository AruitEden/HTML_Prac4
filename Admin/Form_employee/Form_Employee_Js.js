//Open/Close form
document.getElementById("employee_f").onclick = function () {
  document.querySelector(".modal").style.display = "flex";
};

document.getElementById("close").onclick = function () {
  document.querySelector(".modal").style.display = "none";
};

//Form

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

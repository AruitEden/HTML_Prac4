var name_cruis = localStorage.getItem("name_cruis");

var name_c = document.getElementById("name_cruis");

name_c.innerHTML = name_cruis;

////////////////////////////

const useName = document.getElementById("name");
const useSurname = document.getElementById("surname");
const userCount = document.getElementById("count");
var usePay = "";

function rad() {
  let radeio = document.querySelectorAll(".rad");

  for (let i = 0; i < radeio.length; i++) {
    if (radeio[i].checked) {
      usePay = radeio[i].value;
      break;
    }
  }
}

const userComment = document.getElementById("comment");

//localStorage.removeItem("Register_Cruis");

//localStorage.setItem("Register_Cruis", JSON.stringify([]));

let cruis = JSON.parse(localStorage.getItem("Register_Cruis"));

class NewCruis {
  constructor(name_c, name, surname, count, pay, comment) {
    this.name_c = name_c;
    this.name = name;
    this.surname = surname;
    this.count = count;
    this.pay = pay;
    this.comment = comment;
  }
}

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

  removeError(userCount);
  if (userCount.value == 0) {
    result = false;
    createEror(userCount);
  }
  return result;
}

const form = document.getElementById("form1");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validation()) {
    rad();

    cruis.push(
      new NewCruis(
        name_cruis,
        useName.value,
        useSurname.value,
        userCount.value,
        usePay,
        userComment.value
      )
    );

    localStorage.setItem("Register_Cruis", JSON.stringify(cruis));

    form.reset();
  }
});

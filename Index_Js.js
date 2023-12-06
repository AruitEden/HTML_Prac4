//Анимация
////////////////////////////////////////////////////////
const singInBtn = document.querySelector(".singin-btn");
const singUpBtn = document.querySelector(".singup-btn");

const formBox = document.querySelector(".form-box");

singUpBtn.addEventListener("click", function () {
  formBox.classList.add("active");
});

singInBtn.addEventListener("click", function () {
  formBox.classList.remove("active");
});

//Регеcтрация
////////////////////////////////////////////////////////

//const form2 = document.getElementById("form2");

const userLoginInput = document.getElementById("login_input");
const userPasswordInput = document.getElementById("password_input");
const useNameInput = document.getElementById("name_input");
const useRoleInput = document.getElementById("sex_input");
const useNumberInput = document.getElementById("number_input");

const submitBtnInput = document.getElementById("sub_input");
const submitBtnReset = document.getElementById("reset");

//Пароль
////////////////////////////////////////////////////////

let wordRegexp = /(?=.*[A-Z])/g;
let wordsRegexp = /(?=.*[a-z])/g;
let specRegexp = /(?=.*[!@#$%^&*])/g;
let numberRegexp = /(?=.*[0-9])/g;

var rating = 0;

userPasswordInput.addEventListener("input", function (evt) {
  var is_w = false;
  var is_ws = false;
  var is_s = false;
  var is_n = false;

  if (wordRegexp.test(userPasswordInput.value)) {
    is_w = true;
  }

  if (wordsRegexp.test(userPasswordInput.value)) {
    is_ws = true;
  }

  if (specRegexp.test(userPasswordInput.value)) {
    is_s = true;
  }

  if (numberRegexp.test(userPasswordInput.value)) {
    is_n = true;
  }

  rating = 0;

  if (is_w) {
    rating++;
  }
  if (is_ws) {
    rating++;
  }
  if (is_s) {
    rating++;
  }
  if (is_n) {
    rating++;
  }

  if (userPasswordInput.value.length == 0) {
    userPasswordInput.style.backgroundColor = "#ffffff";
  } else if (userPasswordInput.value.length < 6 && rating < 3) {
    console.log(rating);
    userPasswordInput.style.backgroundColor = "#F08080";
  } else if (userPasswordInput.value.length < 6 && rating >= 3) {
    console.log(rating);
    userPasswordInput.style.backgroundColor = "#F08080";
  } else if (userPasswordInput.value.length >= 8 && rating > 2) {
    console.log(rating);
    userPasswordInput.style.backgroundColor = "#F0E68C";
  } else if (userPasswordInput.value.length >= 8 && rating >= 3) {
    console.log(rating);
    userPasswordInput.style.backgroundColor = "#98FB98";
  } else if (userPasswordInput.value.length >= 6 && rating == 1) {
    console.log(rating);
    userPasswordInput.style.backgroundColor = "#F08080";
  } else if (userPasswordInput.value.length >= 6 && rating > 1 && rating < 4) {
    console.log(rating);
    userPasswordInput.style.backgroundColor = "#F0E68C";
  } else if (userPasswordInput.value.length >= 6 && rating == 4) {
    console.log(rating);
    userPasswordInput.style.backgroundColor = "#98FB98";
  }
});

////////////////////////////////////////////////////////

//localStorage.clear();

localStorage.setItem("loginUser", "");

//localStorage.setItem("usersArray", JSON.stringify([]));

let users = JSON.parse(localStorage.getItem("usersArray"));

console.log(users);

class NewUser {
  constructor(login, password, name, role, number) {
    this.login = login;
    this.password = password;
    this.name = name;
    this.role = role;
    this.number = number;
  }
}

let loginRegexp = /[A-Za-z0-9.@]{5,30}/g;
let passRegexp = /[A-Za-z0-9!@#$%^&*]{6,}/;
let nameRegexp = /[A-Za-z0-9]{1,30}/g;
let numRegexp = /[0-9]{1,10}/g;

const form2 = document.getElementById("form2");

function registerNewUser() {
  if (
    rating >= 2 &&
    loginRegexp.test(userLoginInput.value) &&
    passRegexp.test(userPasswordInput.value) &&
    //userPasswordInput.value.lenth >= 6 &&
    nameRegexp.test(useNameInput.value) &&
    numRegexp.test(useNumberInput.value)
  ) {
    users.push(
      new NewUser(
        userLoginInput.value,
        userPasswordInput.value,
        useNameInput.value,
        useRoleInput.value,
        useNumberInput.value
      )
    );

    localStorage.setItem("usersArray", JSON.stringify(users));
    console.log(true);

    form2.reset();
  } else if (rating < 2) {
    alert("Недостатньо налійний пароль");
  }
}

submitBtnInput.onclick = registerNewUser;

function fun() {
  userPasswordInput.style.backgroundColor = "#ffffff";
}

submitBtnReset.onclick = fun;

//Авторизацмя
//////////////////////////////////////////////

const form1 = document.getElementById("form1");

const userLoginOut = document.getElementById("log");
const userPasswordOut = document.getElementById("pas");

const submitBtnOut = document.getElementById("sub");

let users2 = JSON.parse(localStorage.getItem("usersArray"));
console.log(users2);

function FoundUser() {
  if (
    loginRegexp.test(userLoginOut.value) &&
    passRegexp.test(userPasswordOut.value)
  ) {
    for (let i = 0; i < users2.length; i++) {
      if (
        users2[i].login === userLoginOut.value &&
        users2[i].password === userPasswordOut.value
      ) {
        localStorage.setItem("loginUser", JSON.stringify(users2[i]));

        console.log(true);

        if (users2[i].role == "user") {
          window.location.href = "./User/Main/Main.html#1";
        }

        if (users2[i].role == "capitain") {
          window.location.href = "./Capitain/Form_table/Form_Table.html";
        }

        if (users2[i].role == "admin") {
          window.location.href = "./User/Table/Table.html#4";
        }

        form1.reset();
      }
    }
  }
}

submitBtnOut.onclick = FoundUser;

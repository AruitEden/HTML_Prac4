let wordRegexp = /(?=.*[A-Z])/g;
let wordsRegexp = /(?=.*[a-z])/g;
let specRegexp = /(?=.*[!@#$%^&*])/g;
let numberRegexp = /(?=.*[0-9])/g;

var rating = 0;
const userPasswordInput = document.getElementById("password_input");

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

function validation() {
  let result = true;

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
    result = false;
  } else if (userPasswordInput.value.length < 6 && rating < 3) {
    result = false;
  } else if (userPasswordInput.value.length < 6 && rating >= 3) {
    result = false;
  } else if (userPasswordInput.value.length >= 6 && rating == 1) {
    result = false;
  }

  return result;
}

function showData() {
  var userList;

  if (localStorage.getItem("usersArray")) {
    userList = JSON.parse(localStorage.getItem("usersArray"));
  }

  var out = "";

  userList.forEach(function (item, index) {
    out += `<tr>
    <td>${item.login}</td>
    <td>${item.name}</td>
    <td>${item.password}</td>
    <td>${item.number}</td>
    <td>${item.role}</td>
    <td><button class="btn" onclick="updateData(${index})">Змінити</button>
    <button class="btn_d" onclick="deleteData(${index})">Видалити</button></td>
  </tr>`;
  });

  document.getElementById("table").innerHTML += out;
}

document.onload = showData();

function deleteData(index) {
  var userList;

  if (localStorage.getItem("usersArray")) {
    userList = JSON.parse(localStorage.getItem("usersArray"));
  }

  userList.splice(index, 1);

  localStorage.setItem("usersArray", JSON.stringify(userList));
  location.reload();
  console.log(true);
}

function updateData(index) {
  showData();
}

class NewUser {
  constructor(login, password, name, role, number) {
    this.login = login;
    this.password = password;
    this.name = name;
    this.role = role;
    this.number = number;
  }
}

function AddData() {
  if (validation()) {
    console.log(true);

    const userLoginInput = document.getElementById("login_input");
    const userPasswordInput = document.getElementById("password_input");
    const useNameInput = document.getElementById("name_input");
    const useRoleInput = document.getElementById("sex_input");
    const useNumberInput = document.getElementById("number_input");

    var userList;

    if (localStorage.getItem("usersArray")) {
      userList = JSON.parse(localStorage.getItem("usersArray"));
    }

    userList.push(
      new NewUser(
        userLoginInput.value,
        userPasswordInput.value,
        useNameInput.value,
        useRoleInput.value,
        useNumberInput.value
      )
    );

    localStorage.setItem("usersArray", JSON.stringify(userList));
    location.reload();
  }
}

function updateData(index) {
  var userList;

  if (localStorage.getItem("usersArray")) {
    userList = JSON.parse(localStorage.getItem("usersArray"));
  }

  document.getElementById("login_input").value = userList[index].login;
  document.getElementById("password_input").value = userList[index].password;
  document.getElementById("name_input").value = userList[index].name;
  document.getElementById("sex_input").value = userList[index].role;
  document.getElementById("number_input").value = userList[index].number;

  document.getElementById("Update").onclick = function () {
    if (validation()) {
      console.log(true);

      userList[index].login = document.getElementById("login_input").value;
      userList[index].password =
        document.getElementById("password_input").value;
      userList[index].name = document.getElementById("name_input").value;
      userList[index].role = document.getElementById("sex_input").value;
      userList[index].number = document.getElementById("number_input").value;

      localStorage.setItem("usersArray", JSON.stringify(userList));
      location.reload();
    }
  };
}

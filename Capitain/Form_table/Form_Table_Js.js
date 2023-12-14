//Ползнок цифры
document.getElementById("cost").addEventListener("input", () => {
  let data = document.getElementById("cost").value;
  document.getElementById("cos").innerHTML = data;
});

//Проверка на вшивость

function validation() {
  const data = document.getElementById("data");
  const count = document.getElementById("count");

  function removeError(input) {
    if (input.classList.contains("error")) {
      input.classList.remove("error");
    }
  }

  function createEror(input) {
    input.classList.add("error");
  }

  let result = true;

  removeError(count);
  if (count.value == 0) {
    result = false;
    createEror(count);
  }

  removeError(data);
  if (data.value == "") {
    result = false;
    createEror(data);
  }
  return result;
}

/*
document.getElementById("form1").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(true);

  if (validation() == true) {
    console.log(false);
  }
});*/

//Планированте круиза

const userCruis = document.getElementById("cruis");
const userLiner = document.getElementById("liner");
const userData = document.getElementById("data");
const userCount = document.getElementById("count");
const userTime = document.getElementsByName("Day");
const userCost = document.getElementById("cost");

//localStorage.setItem("cruiseArray", JSON.stringify([]));

let cruises = JSON.parse(localStorage.getItem("cruiseArray"));

class NewCruise {
  constructor(cruise, liner, data, count, time, name, cost) {
    this.cruise = cruise;
    this.liner = liner;
    this.data = data;
    this.count = count;
    this.time = time;
    this.capitan = name;
    this.cost = cost;
  }
}

const form = document.getElementById("form1");

/*function addCruise() {

  if (validation() == true) {
    cruises.push(
      new NewCruise(
        userLiner.value,
        userData.value,
        userCount.value,
        userTime.value,
        userCost.value
      )
    );

    localStorage.setItem("cruiseArray", JSON.stringify(cruises));
    form.reset();
  }
}*/

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validation() == true) {
    let user = JSON.parse(localStorage.getItem("loginUser"));
    cruises.push(
      new NewCruise(
        userCruis.value,
        userLiner.value,
        userData.value,
        userCount.value,
        userTime.value,
        user.name,
        userCost.value
      )
    );

    localStorage.setItem("cruiseArray", JSON.stringify(cruises));

    form.reset();
  }
});

//Закрыть форму

document.getElementById("close").onclick = function () {
  window.location.href = "../Table/Table.html#4";
};

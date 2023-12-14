loadCruise();

function loadCruise() {
  if (localStorage.getItem("cruiseArray"))
    cruise = JSON.parse(localStorage.getItem("cruiseArray"));

  showCruise(cruise);
}

//Показать расписание
function showCruise(cru) {
  let table = document.getElementById("table");

  table.innerHTML =
    "<caption class='table_title'> Розклад </caption> <tr> <th>Круїз</th> <th>Лайнер</th> <th>Дата</th> <th>Капітан</th> <th>Вартість</th> </tr>";

  let out = " ";

  cru.forEach(function (item) {
    out += `<tr>
    <td>${item.cruise}</td>
    <td>${item.liner}</td>
    <td>${item.data}</td>
    <td>${item.capitan}</td>
    <td>${item.cost}</td>
  </tr>`;
  });

  table.innerHTML += out;
}

// Метод поиска

class NewCruise {
  constructor(cruise, liner, data, name, cost) {
    this.cruise = cruise;
    this.liner = liner;
    this.data = data;
    this.capitan = name;
    this.cost = cost;
  }
}

var newArray = [];

document.getElementById("serch").addEventListener("keyup", function () {
  var serch = document.getElementById("serch").value;
  console.log(serch);

  cruise = JSON.parse(localStorage.getItem("cruiseArray"));

  newArray = cruise.filter(function (val) {
    if (
      val.cruise.includes(serch) ||
      val.liner.includes(serch) ||
      val.data.includes(serch) ||
      val.capitan.includes(serch) ||
      val.cost.includes(serch)
    ) {
      var newCru = new NewCruise(
        val.cruise,
        val.liner,
        val.data,
        val.capitan,
        val.cost
      );
      return newCru;
    }
  });

  console.log(true);
  showCruise(newArray);
});

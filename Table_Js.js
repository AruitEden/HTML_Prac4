loadCruise();

function loadCruise() {
  if (localStorage.getItem("cruiseArray"))
    cruise = JSON.parse(localStorage.getItem("cruiseArray"));

  showCruise();
}

//Показать расписание
function showCruise() {
  let table = document.getElementById("table");

  let out = " ";

  cruise.forEach(function (item) {
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

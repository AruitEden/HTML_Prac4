showRegister();

function showRegister() {
  if (localStorage.getItem("Register_Cruis")) {
    let registerUser = JSON.parse(localStorage.getItem("Register_Cruis"));
    let block = document.getElementById("block");

    let out = " ";

    let url = "";

    registerUser.forEach(function (item) {
      if (item.name_c == "КРУЇЗ З БАРСЕЛОНИ") {
        url =
          "https://comeonbarcelona.com/wp-content/uploads/2020/06/IMG_7766-21.jpg";
      } else if (item.name_c == "АНТАРКТИКА") {
        url =
          "https://geosfera.org/uploads/posts/2019-08/1564728394_antarktida.jpg";
      } else if (item.name_c == "КРУЇЗ НА ЯХТІ") {
        url =
          "https://static.tildacdn.com/tild3835-3032-4235-a439-393061323132/5130679571_baca85903.jpg";
      }

      out += `
      <div class="card">
          <div class="img_card">
            <img src="${url}"/>
          </div>
          <div class="content">
            <p class="c_title">${item.name_c}</p>
            <p class="c_content">
              Ім'я Прізвище: <span class="con">${item.name}</span> <span class="con">${item.surname}</span>
            </p>
            <p class="c_content">
              Кількість учасників: <span class="con">${item.count}</span>
            </p>
            <p class="c_content">
              Споміб оплати: <span class="con">${item.pay}</span>
            </p>
            <p class="com">${item.comment}</p>
          </div>
          </div>`;
    });

    block.innerHTML += out;
  }
}

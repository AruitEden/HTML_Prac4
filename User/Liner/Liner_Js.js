document.querySelectorAll(".img img").forEach((img) => {
  img.onclick = () => {
    document.querySelector(".open").style.display = "block";
    document.querySelector(".open img").src = img.getAttribute("src");
  };
});

document.querySelector(".open img").onclick = () => {
  document.querySelector(".open").style.display = "none";
};

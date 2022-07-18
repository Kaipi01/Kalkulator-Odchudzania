// "use strict";

const themeBtn = document.querySelector(".themeBtn");

let theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");
else document.body.classList.add("light");

//Funkcja zmienijąca motyw na stronie
themeBtn.addEventListener("click", () => {
  console.log("click");
  if (theme === "dark") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    theme = "light";
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

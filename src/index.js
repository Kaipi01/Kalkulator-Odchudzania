"use strict";

const themeBtn = document.querySelector(".themeBtn");
const inputDate = document.querySelectorAll(".inputDate");
const select = document.querySelector(".select");

let theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");
else document.body.classList.add("light");

//change theme on a page
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

//focus on date type input
inputDate.forEach((input) =>
  input.addEventListener("change", () => {
    input.classList.add("inputDate--focus");
  })
);

// show select list
select.addEventListener("click", () => {
  const selectList = document.querySelector(".select__list");
  const selectListItem = document.querySelector(".select__listItem");
  selectList.classList.toggle("select__list--active");

  selectListItem.forEach((item) => {
    item.addEventListener("click", () => {
      select.textContent = item.textContent;
    });
  });
  selectListItem.forEach((item) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        select.textContent = item.textContent;
      }
    });
  });
  window.addEventListener("click", (e) => {
    closeList(e);
  });
  window.addEventListener("touch", (e) => {
    closeList(e);
  });
  select.addEventListener("keydown", (e) => {
    if (e.key === "Enter") closeList();
  });

  // hide select list
  function closeList(e) {
    console.log(e);
    if (!e.target.classList.contains("select__list")) {
      selectList.classList.remove("select__list--active");
    }
  }
});

import changeTheme from "./changeTheme";
import showList from "./showList";
import { getGender } from "./getGender";
import checkInputNumber from "./checkInputNumber";
import validateForm from "./validateForm";
import { showToolTip, hideToolTip } from "./toolTip";

const themeBtn = document.querySelector(".themeBtn"),
  inputDate = document.querySelectorAll(".inputDate"),
  select = document.querySelector(".select"),
  radioBtns = document.querySelectorAll(".radioBtn"),
  inputsNumber = document.querySelectorAll(".inputNumber"),
  inputRange = document.querySelector(".inputRange"),
  submitBtn = document.querySelector(".calculator__submitBtn"),
  hintIcon = document.querySelectorAll(".hintIcon");


themeBtn.addEventListener("click", changeTheme);

submitBtn.addEventListener("click", () => {
  validateForm();
  scrollToResults();
});

radioBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn);
    getGender(btn);
  });
});

select.addEventListener("click", showList);
select.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showList();
  }
});

hintIcon.forEach((icon) => {
  icon.addEventListener("touch", (e) => showToolTip(e));
  icon.addEventListener("click", (e) => showToolTip(e));
  icon.addEventListener("keydown", (e) => {
    if (e.key === "Enter") showToolTip(e);
  });
});
window.addEventListener("touch", (e) => hideToolTip(e));
window.addEventListener("click", (e) => hideToolTip(e));
window.addEventListener("unfocus", (e) => hideToolTip(e));

inputRange.addEventListener("click", () => {
  changeHeightValue();
});
inputRange.addEventListener("mousemove", () => {
  changeHeightValue();
});
inputRange.addEventListener("touchstart", () => {
  changeHeightValue();
});
inputRange.addEventListener("touchend", () => {
  changeHeightValue();
});
inputRange.addEventListener("touchmove", () => {
  changeHeightValue();
});
inputRange.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    changeHeightValue();
  }
});

inputsNumber.forEach((input) => {
  input.addEventListener("input", (e) => {
    checkInputNumber(e);
  });
});

inputDate.forEach((input) =>
  input.addEventListener("change", () => {
    input.classList.add("inputDate--focus");
  })
);

function changeHeightValue() {
  const inputRangeValue = document.querySelector(".inputRange__value");
  inputRangeValue.textContent = parseInt(inputRange.value);
}

function scrollToResults() {
  const results = document.querySelector(`.results`);
  window.scrollTo({
    top: results.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
}
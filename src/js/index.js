import { changeTheme } from "./changeTheme";
import { showList } from "./showList";
import { getGender } from "./getGender";
import { checkInputNumber } from "./checkInputNumber";
import { showResults } from "./showResults";

("use strict");

const themeBtn = document.querySelector(".themeBtn");
const inputDate = document.querySelectorAll(".inputDate");
const select = document.querySelector(".select");
const radioBtns = document.querySelectorAll(".radioBtn");
const inputsNumber = document.querySelectorAll(".inputNumber");
const inputRange = document.querySelector(".inputRange");
const submitBtn = document.querySelector(".calculator__submitBtn");

submitBtn.addEventListener("click", showResults);

// change radio input color and check radio value
radioBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    getGender(btn);
  });
});

// show select list
select.addEventListener("click", showList);

// change value in input range
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

// chech number in input type number
inputsNumber.forEach((input) => {
  input.addEventListener("input", (e) => {
    checkInputNumber(e);
  });
});

// show height value
function changeHeightValue() {
  const inputRangeValue = document.querySelector(".inputRange__value");
  inputRangeValue.textContent = parseInt(inputRange.value);
}

//change theme on a page
themeBtn.addEventListener("click", changeTheme);

//focus on date type input
inputDate.forEach((input) =>
  input.addEventListener("change", () => {
    input.classList.add("inputDate--focus");
  })
);

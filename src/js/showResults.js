import { gender } from "./getGender";

export function showResults() {
  const ageInputValue = document.querySelector("#ageValue");
  const weightInputValue = document.querySelector("#weightValue");
  const heightInputValue = document.querySelector("#heightValue");
  const selectListItem = document.querySelectorAll(".select__listItem");
  const selectValue = document.querySelector(".select");
  const targWeightInputValue = document.querySelector("#targWeightValue");
  const startDateInputValue = document.querySelector("#startDate");
  const endDateInputValue = document.querySelector("#endDate");

  const age = Number(ageInputValue.value);
  const weight = Number(weightInputValue.value);
  const height = Number(heightInputValue.value);
  const targWeight = Number(targWeightInputValue.value);
  const startDate = startDateInputValue.value;
  const endDate = endDateInputValue.value;

  let activity;
  selectListItem.forEach((li) => {
    if (li.textContent === selectValue.textContent) {
      activity = li.value;
    }
  });

  console.log(age);
  console.log(gender);
  console.log(weight);
  console.log(height);
  console.log(activity);
  console.log(targWeight);
  console.log(startDate);
  console.log(endDate);
}

import { calculate } from "./calculate";
import { gender } from "./getGender";

export default function validateForm() {
  const ageInputValue = document.querySelector("#ageValue"),
    weightInputValue = document.querySelector("#weightValue"),
    heightInputValue = document.querySelector("#heightValue"),
    selectListItem = document.querySelectorAll(".select__listItem"),
    selectValue = document.querySelector(".select__p"),
    targWeightInputValue = document.querySelector("#targWeightValue"),
    startDateInputValue = document.querySelector("#startDate"),
    endDateInputValue = document.querySelector("#endDate"),
    errorPInputs = [...document.querySelectorAll(".fieldset__inputError")];

  let activity = "",
    startDate = "",
    endDate = "";

  selectListItem.forEach((li) => {
    if (li.textContent === selectValue.textContent) {
      activity = li.dataset.value;
    }
  });

  errorPInputs.forEach((p) => {
    p.classList.add("fieldset__inputError--hidden");
  });

  chechInputsDate();

  switch ("") {
    case ageInputValue.value:
      displayError(0);
      return;
    case gender:
      displayError(1);
      return;
    case weightInputValue.value:
      displayError(2);
      return;
    case activity:
      displayError(3);
      return;
    case targWeightInputValue.value:
      displayError(4);
      return;
    case startDateInputValue.value:
      displayError(5);
      return;
    case startDate:
      displayError(6);
      return;
    case endDateInputValue.value:
      displayError(7);
      return;
    case endDate:
      displayError(8);
      return;
  }

  const age = Number(ageInputValue.value);
  const weight = Number(weightInputValue.value);
  const height = Number(heightInputValue.value);
  const targWeight = Number(targWeightInputValue.value);

  calculate(
    age,
    gender,
    weight,
    height,
    activity,
    targWeight,
    startDate,
    endDate
  );

  function displayError(nr) {
    errorPInputs[nr].classList.remove("fieldset__inputError--hidden");
  }

  function chechInputsDate() {
    const date = new Date();

    const day =
      date.getDate() < 10
        ? "0" + date.getDate().toString()
        : date.getDate().toString();

    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1).toString()
        : (date.getMonth() + 1).toString();

    const year = date.getFullYear().toString();

    const nowUnixDate = new Date(`${year}-${month}-${day}`).getTime();
    const startUnixDate = new Date(startDateInputValue.value).getTime();
    const endUnixDate = new Date(endDateInputValue.value).getTime();

    if (startUnixDate >= nowUnixDate) {
      startDate = startUnixDate;
    }

    if (endUnixDate >= nowUnixDate && endUnixDate >= startUnixDate) {
      endDate = endUnixDate;
    }
  }
}

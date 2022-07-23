export function showResults(
  age,
  gender,
  weight,
  height,
  BMI,
  status,
  statusColor,
  CPM,
  weightRange,
  BMR,
  activity,
  hint,
  targWeight,
  targBMI,
  targStatus,
  targStatusColor,
  months,
  weeks,
  days,
  diffCalories,
  diffWeight,
  diffWeightMonth,
  diffWeightWeek,
  diffWeightDay,
  activityTarg
) {
  const results = document.querySelector(".results");
  const resultsBtn = document.querySelector(".results__btn");
  const personImg = document.querySelector(".personInfo__imgAct");
  const personTargImg = document.querySelector(".personInfo__imgTarg");
  const actStatus = document.querySelector(".personInfo__actStatus");
  const graphicDes1 = document.querySelectorAll(
    ".graphic__container:first-child graphic__des"
  );
  const graphicDes2 = document.querySelectorAll(
    ".graphic__container:last-child graphic__des"
  );

  personImg.src = "./img/male/Nadwaga.svg";
  personTargImg.src = `./img/${gender}/${targStatus}.svg`;

  console.log(personImg);
  console.log(personTargImg);

  resultsBtn.addEventListener("click", () => {
    const main = document.querySelector(`.calculator`);
    window.scrollTo({
      top: main.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth",
    });
  });

  actStatus.textContent = status;

  document.querySelector(".personInfo__gender").textContent =
    gender === "male" ? "Mężczyzna" : "Kobieta";
  document.querySelector(".personInfo__age").textContent = age;
  document.querySelector(".personInfo__height").textContent = height;
  document.querySelector(".personInfo__weight").textContent = weight;
  document.querySelector(".personInfo__bmi").textContent = BMI;
  document.querySelector(".personInfo__weightRange").textContent = weightRange;
  document.querySelector(".results__bmr").textContent = BMR;
  document.querySelector(".results__cpm").textContent = CPM;
  document.querySelector(".results__activity").textContent = activity;
  document.querySelector(".results__hint").textContent = hint;
  document.querySelector(".personInfo__targWeight").textContent = targWeight;
  document.querySelector(".personInfo__targBmi").textContent = targBMI;
  document.querySelector(".personInfo__targStatus").textContent = targStatus;
  document.querySelector(".results__months").textContent = months;
  document.querySelector(".results__weeks").textContent = weeks;
  document.querySelector(".results__days").textContent = days;
  document.querySelector(".results__diffCalories").textContent = diffCalories;
  document.querySelector(".results__diffWeight").textContent = diffWeight;
  document.querySelector(".results__weightMonth").textContent = diffWeightMonth;
  document.querySelector(".results__weightWeek").textContent = diffWeightWeek;
  document.querySelector(".results__weightDay").textContent = diffWeightDay;
  document.querySelector(".results__targActivity").textContent = activityTarg;

  results.classList.remove("results--hidden");
}

/*
const results = document.querySelector(".results");
const resultsBtn = document.querySelector(".results__btn");
const personImg = document.querySelector(".personInfo__imgAct");
const personTargImg = document.querySelector(".personInfo__imgTarg");
const personGender = document.querySelector(".personInfo__gender");
const personAge = document.querySelector(".personInfo__age");
const personHeight = document.querySelector(".personInfo__height");
const personWeight = document.querySelector(".personInfo__weight");
const personBMI = document.querySelector(".personInfo__bmi");
const personStatus = document.querySelector(".personInfo__status");
const personWeightRange = document.querySelector(".personInfo__weightRange");
const resultsBMR = document.querySelector(".results__bmr");
const resultsCPM = document.querySelector(".results__cpm");
const resultsActivity = document.querySelector(".results__activity");
const resultsHint = document.querySelector(".results__hint");
const personTargWeight = document.querySelector(".personInfo__targWeight");
const personTargBMI = document.querySelector(".personInfo__targBmi");
const personTargStatus = document.querySelector(".personInfo__targStatus");
const resultsMonths = document.querySelector(".results__months");
const resultsWeeks = document.querySelector(".results__weeks");
const resultsDays = document.querySelector(".results__days");
const resultsDiffCalories = document.querySelector(".results__diffCalories");
const resultsDiffWeight = document.querySelector(".results__diffWeight");
const resultsWeightMonth = document.querySelector(".results__weightMonth");
const resultsWeightWeek = document.querySelector(".results__weightWeek");
const resultsWeightDay = document.querySelector(".results__weightDay");
const resultsTargActivity = document.querySelector(".results__targActivity");
const graphicDes1 = document.querySelectorAll(
  ".graphic__container:first-child graphic__des"
);
const graphicDes2 = document.querySelectorAll(
  ".graphic__container:last-child graphic__des"
);

personImg.src = "./img/male/Nadwaga.svg";
personTargImg.src = `./img/${gender}/${targStatus}.svg`;

personGender.textContent = gender === "male" ? "Mężczyzna" : "Kobieta";
personAge.textContent = age;
personHeight.textContent = height;
personWeight.textContent = weight;
personBMI.textContent = BMI;
personStatus.textContent = status;
personWeightRange.textContent = weightRange;
resultsBMR.textContent = BMR;
resultsCPM.textContent = CPM;
resultsActivity.textContent = activity;
resultsHint.textContent = hint;
personTargWeight.textContent = targWeight;
personTargBMI.textContent = targBMI;
personTargStatus.textContent = targStatus;
*/

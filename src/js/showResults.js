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
  const personImg = document.querySelector(".personInfo__img");
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

  results.classList.remove("results--hidden");
}

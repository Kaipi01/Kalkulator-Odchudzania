import { showResults } from "./showResults";

export function calculate(
  age,
  gender,
  weight,
  height,
  activity,
  targWeight,
  startDate,
  endDate
) {
  console.log(`Wiek: ${age} lat`);
  console.log(`Płeć: ${gender === "male" ? "Mężczyzna" : "Kobieta"}`);
  console.log(`Waga: ${weight} kg`);
  console.log(`Wzrost: ${height} cm`);
  console.log(`Numer aktywności fizycznej z listy: ${activity}`);
  console.log(`Waga docelowa: ${targWeight} kg`);
  console.log(`Data rozpoczęcia: ${new Date(startDate).toLocaleString()}`);
  console.log(`Data zakończenia: ${new Date(endDate).toLocaleString()}`);

  const BMI = Math.round((weight / (height * height)) * 100000) / 10;
  const targBMI = Math.round((targWeight / (height * height)) * 100000) / 10;

  const minWeight = Math.round(0.00185 * Math.pow(height, 2));
  const maxWeight = Math.round(0.0025 * Math.pow(height, 2));

  const status = getBMIStatusAndColor(BMI).status;
  const targStatus = getBMIStatusAndColor(targBMI).status;

  let BMR;

  if (gender === "male") {
    BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5);
  } else {
    BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161);
  }

  const CPM = Math.floor(BMR * getPAL(activity));

  let diffWeight;
  let loseOnWeight;

  if (weight === targWeight) {
    diffWeight = 0;
    loseOnWeight = true;
  } else if (weight > targWeight) {
    diffWeight = weight - targWeight;
    console.log(`Musisz zrzucić ${diffWeight}kg`);
    loseOnWeight = true;
  } else {
    diffWeight = targWeight - weight;
    console.log(`Musisz przytyć ${diffWeight}kg`);
    loseOnWeight = false;
  }

  let numberOfMonths = Math.floor((endTime - startTime) / 2592000000);
  let numberOfWeeks = Math.floor((endTime - startTime) / 604800000);
  let numberOfDays = Math.floor((endTime - startTime) / 86400000);

  let numberOfDiffWeightPerMonth;
  let numberOfDiffWeightPerWeek;
  let numberOfDiffWeightPerDay;

  if (numberOfMonths === 0) {
    numberOfDiffWeightPerMonth = 0;
  } else
    numberOfDiffWeightPerMonth =
      Math.round((diffWeight / numberOfMonths) * 100) / 100;

  if (numberOfWeeks === 0) {
    numberOfDiffWeightPerWeek = 0;
  } else
    numberOfDiffWeightPerWeek =
      Math.round((diffWeight / numberOfWeeks) * 100) / 100;

  if (numberOfDays === 0) {
    numberOfDiffWeightPerDay = 0;
  } else
    numberOfDiffWeightPerDay =
      Math.round((diffWeight / numberOfDays) * 100) / 100;

  console.log(
    `liczba zrzuconych kilogramów na miesiąc: ${numberOfDiffWeightPerMonth}`
  );
  console.log(
    `liczba zrzuconych kilogramów na tydzień: ${numberOfDiffWeightPerWeek}`
  );
  console.log(
    `liczba zrzuconych kilogramów na dzień: ${numberOfDiffWeightPerDay}`
  );

  let MonthsDisplayNumber = Math.floor(numberOfDays / 30);

  let WeeksDisplayNumber;

  if (MonthsDisplayNumber === 0) {
    WeeksDisplayNumber = Math.floor(numberOfDays / 7);
  } else {
    WeeksDisplayNumber = Math.floor(numberOfWeeks / (MonthsDisplayNumber * 4));
    if (MonthsDisplayNumber === 1 && numberOfWeeks === 4) {
      WeeksDisplayNumber = 0;
    }
  }

  let DaysDisplayNumber = Math.floor(
    numberOfDays - MonthsDisplayNumber * 30 - WeeksDisplayNumber * 7
  );

  console.log(`liczba wyświetlanych miesięcy: ${MonthsDisplayNumber}`);
  console.log(`liczba wyświetlanych tygodni: ${WeeksDisplayNumber}`);
  console.log(`liczba wyświetlanych dni: ${DaysDisplayNumber}`);

  console.log(`liczba miesięcy: ${numberOfMonths}`);
  console.log(`liczba tygodni: ${numberOfWeeks}`);
  console.log(`liczba dni: ${numberOfDays}`);

  console.log(`diffWight: ${diffWeight}`);

  const numberOfDiffCaloriesPerDay = Math.round(
    (diffWeight * 7700) /
      (numberOfDays === 0 ? (numberOfDays = 1) : numberOfDays)
  );

  console.log(
    `Aby schudnąć/przytyć musisz codziennie przybierać/palić: ${numberOfDiffCaloriesPerDay}`
  );
  console.log("----------------------WYNIKI----------------------");
  console.log(`Aktualne BMI: ${BMI}`);
  console.log(`Aktualny status: ${status}`);
  console.log(
    `Twoja waga powinna wynosić pomiędzy: ${minWeight} kg - ${maxWeight} kg`
  );
  console.log(`BMR: ${BMR}`);
  console.log(`Twoja ilość potrzebnych kalorii: ${CPM} kcal`);
  console.log(`Aktualna aktywność fizyczna: `);
  console.log(`Wzkazówka: `);
  console.log(`Waga docelowa: ${targWeight}`);
  console.log(`Docelowe BMI: ${targBMI}`);
  console.log(`Docelowe status: ${targStatus}`);

  showResults();
}

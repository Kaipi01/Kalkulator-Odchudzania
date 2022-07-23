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
  const BMI = Math.round((weight / (height * height)) * 100000) / 10;
  const targBMI = Math.round((targWeight / (height * height)) * 100000) / 10;
  const minWeight = Math.round(0.00185 * Math.pow(height, 2));
  const maxWeight = Math.round(0.0025 * Math.pow(height, 2));
  const weightRange = `${minWeight} kg - ${maxWeight} kg`;
  const status = getBMIStatusAndColor(BMI).status;
  const statusColor = getBMIStatusAndColor(BMI).color;
  const targStatus = getBMIStatusAndColor(targBMI).status;
  const targStatusColor = getBMIStatusAndColor(targBMI).color;
  const activityStatus = getActivityStatus(activity);

  let diffWeight;
  let diffWeightMonth, diffWeightWeek, diffWeightDay;
  let numberOfMonths = Math.floor((endDate - startDate) / 2592000000);
  let numberOfWeeks = Math.floor((endDate - startDate) / 604800000);
  let numberOfDays = Math.floor((endDate - startDate) / 86400000);
  let MonthsDisplayNumber = Math.floor(numberOfDays / 30);
  let WeeksDisplayNumber;
  let hint = "";
  let activityTargStatus = "";
  let BMR;

  if (gender === "male")
    BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5);
  else BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161);

  const CPM = Math.floor(BMR * getPAL(activity));

  if (weight === targWeight) diffWeight = 0;
  else if (weight > targWeight) diffWeight = weight - targWeight;
  else diffWeight = targWeight - weight;

  if (numberOfMonths === 0) diffWeightMonth = 0;
  else diffWeightMonth = Math.round((diffWeight / numberOfMonths) * 100) / 100;

  if (numberOfWeeks === 0) diffWeightWeek = 0;
  else diffWeightWeek = Math.round((diffWeight / numberOfWeeks) * 100) / 100;

  if (numberOfDays === 0) diffWeightDay = 0;
  else diffWeightDay = Math.round((diffWeight / numberOfDays) * 100) / 100;

  if (MonthsDisplayNumber === 0)
    WeeksDisplayNumber = Math.floor(numberOfDays / 7);
  else {
    WeeksDisplayNumber = Math.floor(numberOfWeeks / (MonthsDisplayNumber * 4));
    if (MonthsDisplayNumber === 1 && numberOfWeeks === 4)
      WeeksDisplayNumber = 0;
  }
  let DaysDisplayNumber = Math.floor(
    numberOfDays - MonthsDisplayNumber * 30 - WeeksDisplayNumber * 7
  );
  const diffCalories = Math.round(
    (diffWeight * 7700) /
      (numberOfDays === 0 ? (numberOfDays = 1) : numberOfDays)
  );

  showResults(
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
    CPM,
    activityStatus,
    hint,
    targWeight,
    targBMI,
    targStatus,
    targStatusColor,
    MonthsDisplayNumber,
    WeeksDisplayNumber,
    DaysDisplayNumber,
    diffCalories,
    diffWeight,
    diffWeightMonth,
    diffWeightWeek,
    diffWeightDay,
    activityTargStatus
  );

  function getBMIStatusAndColor(BMI) {
    let status;
    let color;

    switch (true) {
      case BMI < 16:
        status = "Wygłodzenie";
        color = "#00ffd9";
        break;
      case BMI >= 16 && BMI < 17:
        status = "Wychudzenie";
        color = "#00c187";
        break;
      case BMI >= 17 && BMI < 18.5:
        status = "Niedowaga";
        color = "#008e63";
        break;
      case BMI >= 18.5 && BMI < 25:
        status = "Prawidłowa masa ciała";
        color = "#26be00";
        break;
      case BMI >= 25 && BMI < 30:
        status = "Nadwaga";
        color = "#ffea00";
        break;
      case BMI >= 30 && BMI < 35:
        status = "Otyłość I stopnia";
        color = "#ff9100";
        break;
      case BMI >= 35 && BMI < 40:
        status = "Otyłość II stopnia";
        color = "#ff0000";
        break;
      case BMI >= 40:
        status = "Otyłość III stopnia";
        color = "#b00000";
        break;
    }
    return {
      status: status,
      color: color,
    };
  }

  function getActivityStatus(activity) {
    let activitysStatus;

    switch (activity) {
      case 1:
        activitysStatus = "Brak aktywności fizycznej, chory, leżący";
        break;
      case 2:
        activitysStatus =
          "Lekka aktywność Pracownik biurowy, którego aktywność związana jest wyłącznie z obowiązkami domowymi";
        break;
      case 3:
        activitysStatus =
          "Średnia aktywność (aktywność - ok. 280 minut tygodniowo)	Pracownik biurowy, trenujący 2-3 razy w tygodniu przez minimum godzinę";
        break;
      case 4:
        activitysStatus =
          "Wysoka aktywność (aktywność - ok. 420 minut tygodniowo)	Pracownik biurowy, trenujący 3-4 razy w tygodniu przez minimum godzinę";
        break;
      case 5:
        activitysStatus =
          "Bardzo wysoka aktywność fizyczna. Zawodowy sportowiec, trenujący minimum 6 godzin tygodniowo lub osoba ciężko pracująca fizycznie";
        break;
    }
    return activitysStatus;
  }

  function getPAL(activity) {
    let PAL;

    switch (activity) {
      case 1:
        PAL = 1.2;
        break;
      case 2:
        PAL = 1.4;
        break;
      case 3:
        PAL = 1.6;
        break;
      case 4:
        PAL = 1.8;
        break;
      case 5:
        PAL = 2;
        break;
    }
    return PAL;
  }

  console.log(`Wiek: ${age} lat`);
  console.log(`Płeć: ${gender === "male" ? "Mężczyzna" : "Kobieta"}`);
  console.log(`Waga: ${weight} kg`);
  console.log(`Wzrost: ${height} cm`);
  console.log(`Numer aktywności fizycznej z listy: ${activity}`);
  console.log(`Waga docelowa: ${targWeight} kg`);
  console.log(`Data rozpoczęcia: ${new Date(startDate).toLocaleString("pl")}`);
  console.log(`Data zakończenia: ${new Date(endDate).toLocaleString("pl")}`);
  console.log("----------------------WYNIKI----------------------");
  console.log(`Aktualne BMI: ${BMI}`);
  console.log(`Aktualny status: ${status}`);
  console.log(`Color aktualnego statusu: ${statusColor}`);
  console.log(`Twoja waga powinna wynosić pomiędzy: ${weightRange}`);
  console.log(`BMR: ${BMR}`);
  console.log(`Ilość potrzebnych kalorii: ${CPM} kcal`);
  console.log(`Aktualna aktywność fizyczna: ${activityStatus}`);
  console.log(`Wzkazówka: ${hint}`);
  console.log(`Waga docelowa: ${targWeight}`);
  console.log(`Docelowe BMI: ${targBMI}`);
  console.log(`Docelowe status: ${targStatus}`);
  console.log(`Color docelowego statusu: ${targStatusColor}`);
  console.log(`liczba miesięcy: ${numberOfMonths}`);
  console.log(`liczba tygodni: ${numberOfWeeks}`);
  console.log(`liczba dni: ${numberOfDays}`);
  console.log(`liczba wyświetlanych miesięcy: ${MonthsDisplayNumber}`);
  console.log(`liczba wyświetlanych tygodni: ${WeeksDisplayNumber}`);
  console.log(`liczba wyświetlanych dni: ${DaysDisplayNumber}`);
  console.log(
    `Aby schudnąć/przytyć musisz codziennie spożywać/palić: ${diffCalories}`
  );
  console.log(`Musisz zrzucić/przytyć ${diffWeight}kg`);
  console.log(
    `liczba zrzuconych/przybranych kg na miesiąc: ${diffWeightMonth}`
  );
  console.log(`liczba zrzuconych/przybranych kg na tydzień: ${diffWeightWeek}`);
  console.log(`liczba zrzuconych/przybranych kg na dzień: ${diffWeightDay}`);
  console.log(`Wymagana aktywność fizyczna: ${activityTargStatus}`);
}

import showResults from "./showResults";

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
  const BMI = Math.round((weight / (height * height)) * 100000) / 10,
    targBMI = Math.round((targWeight / (height * height)) * 100000) / 10,
    minWeight = Math.round(0.00185 * Math.pow(height, 2)),
    maxWeight = Math.round(0.0025 * Math.pow(height, 2)),
    weightRange = `${minWeight} kg - ${maxWeight} kg`,
    isLostWeight = weight >= targWeight,
    diffWeight = Math.abs(weight - targWeight),
    activityStatus = getActivityStatus(activity);

  let days = Math.floor((endDate - startDate) / 86400000);
  days === 0 ? (days = 1) : days;

  const diffWeightDay = Math.round((diffWeight / days) * 100) / 100,
    BMR =
      gender === "male"
        ? Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5)
        : Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161),
    CPM = Math.floor(BMR * getPAL(activity)),
    diffCalories = Math.round((diffWeight * 7700) / days);

  showResults(
    age,
    gender,
    weight,
    height,
    BMI,
    CPM,
    weightRange,
    BMR,
    activityStatus,
    targWeight,
    targBMI,
    days,
    diffCalories,
    diffWeight,
    diffWeightDay,
    isLostWeight
  );

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
}

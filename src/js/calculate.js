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

  let days = Math.floor((endDate - startDate) / 86400000);
  days === 0 ? (days = 1) : days;

  const diffWeight = Math.abs(weight - targWeight);
  const diffWeightDay = Math.round((diffWeight / days) * 100) / 100;
  const hint = "";
  const targActivity = "";

  let BMR;

  if (gender === "male")
    BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5);
  else BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161);

  const CPM = Math.floor(BMR * getPAL(activity));
  const diffCalories = Math.round((diffWeight * 7700) / days);

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
    activityStatus,
    hint,
    targWeight,
    targBMI,
    targStatus,
    targStatusColor,
    days,
    diffCalories,
    diffWeight,
    diffWeightDay,
    targActivity
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
}

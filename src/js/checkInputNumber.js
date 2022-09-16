export default function checkInputNumber(e) {
  const t = e.target;

  if (t.value < 1) {
    t.value = "";

    switch (t.name) {
      case "age":
        if (t.value > 199) t.value = 199;
        break;
      case "StartDay":
        const month = document.querySelector("#StartMonth").value;
        const year = document.querySelector("#StartYear").value;
        let leapYear;
        if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0)
          leapYear = true;
        else leapYear = false;

        if (leapYear && month === 2 && t.value > 29) t.value = 29;
        else if (month === 2 && t.value > 28) t.value = 28;
        else if (t.value > 30 && month % 2 != 0) t.value = 30;
        else if (t.value > 31) t.value = 31;

        break;
      case "StartMonth":
        if (t.value > 12) t.value = 12;
        break;
      case "StartYear":
        if (t.value > 9999) t.value = 9999;
        break;
      case "targWeightValue":
        if (t.value > 999) t.value = 999;
        break;
      case "weight":
        if (t.value > 999) t.value = 999;
        break;
    }
  }
}

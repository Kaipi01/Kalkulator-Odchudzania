import maleNadwaga from "../img/male/Nadwaga.svg";
import maleNiedowaga from "../img/male/Niedowaga.svg";
import maleOtyłośćIstopnia from "../img/male/Otyłość I stopnia.svg";
import maleOtyłośćIIstopnia from "../img/male/Otyłość II stopnia.svg";
import maleOtyłośćIIIstopnia from "../img/male/Otyłość III stopnia.svg";
import malePrawidłowaMasaCiała from "../img/male/Prawidłowa masa ciała.svg";
import maleWychudzenie from "../img/male/Wychudzenie.svg";
import maleWygłodzenie from "../img/male/Wygłodzenie.svg";
import femaleNadwaga from "../img/female/Nadwaga.svg";
import femaleNiedowaga from "../img/female/Niedowaga.svg";
import femaleOtyłośćIstopnia from "../img/female/Otyłość I stopnia.svg";
import femaleOtyłośćIIstopnia from "../img/female/Otyłość II stopnia.svg";
import femaleOtyłośćIIIstopnia from "../img/female/Otyłość III stopnia.svg";
import femalePrawidłowaMasaCiała from "../img/female/Prawidłowa masa ciała.svg";
import femaleWychudzenie from "../img/female/Wychudzenie.svg";
import femaleWygłodzenie from "../img/female/Wygłodzenie.svg";

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
  days,
  diffCalories,
  diffWeight,
  diffWeightDay,
  targActivity
) {
  const results = document.querySelector(".results");
  const resultsBtn = document.querySelector(".results__btn");
  const personImg = document.querySelector(".personInfo__imgAct");
  const personTargImg = document.querySelector(".personInfo__imgTarg");
  const genderDisplay = gender === "male" ? "Mężczyzna" : "Kobieta";
  const personInfoBMIP = document.querySelectorAll(
    ".personInfo__bmiInfo > .personInfo__p--bold"
  );
  const personInfoBMITargP = document.querySelectorAll(
    ".personInfo__bmiTargInfo > .personInfo__p--bold"
  );

  const graphicDes1 = document.querySelectorAll(
    ".results__graphic1 .graphic__des"
  );
  const graphicDes2 = document.querySelectorAll(
    ".results__graphic2 .graphic__des"
  );

  personInfoBMITargP.forEach((p) => (p.style.color = targStatusColor));
  personInfoBMIP.forEach((p) => (p.style.color = statusColor));

  showOrClearGraphic("clear");
  showOrClearGraphic("show");

  personImg.src = getImage(gender, status);
  personTargImg.src = getImage(gender, targStatus);
  personImg.alt = `
    Kolorowa sylwetka ${genderDisplay
      .replace("a", "y")
      .toLowerCase()} zaklasyfikowywana jako: ${status}
  `;
  personTargImg.alt = `
    Kolorowa sylwetka ${genderDisplay
      .replace("a", "y")
      .toLowerCase()} zaklasyfikowywana jako: ${targStatus}
  `;

  resultsBtn.addEventListener("click", () => {
    const main = document.querySelector(`.calculator`);
    window.scrollTo({
      top: main.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth",
    });
  });

  setComponentInfo("personInfo", "status", status);
  setComponentInfo("personInfo", "age", `${age} lat`);
  setComponentInfo("personInfo", "gender", genderDisplay);
  setComponentInfo("personInfo", "height", `${height} cm`);
  setComponentInfo("personInfo", "weight", `${weight} kg`);
  setComponentInfo("personInfo", "BMI", BMI);
  setComponentInfo("personInfo", "weightRange", weightRange);
  setComponentInfo("personInfo", "targWeight", `${targWeight} kg`);
  setComponentInfo("personInfo", "targBMI", targBMI);
  setComponentInfo("personInfo", "targStatus", targStatus);
  setComponentInfo("results", "BMR", BMR);
  setComponentInfo("results", "CPM", CPM);
  setComponentInfo("results", "activity", activity);
  setComponentInfo("results", "hint", hint);
  setComponentInfo("results", "days", `ilość dni: ${days}`);
  setComponentInfo("results", "diffCalories", diffCalories);
  setComponentInfo("results", "diffWeight", diffWeight);
  setComponentInfo("results", "diffWeightDay", `dzień: ${diffWeightDay} kg`);
  setComponentInfo("results", "targActivity", targActivity);

  results.classList.remove("results--hidden");

  function setComponentInfo(component, info, infoValue) {
    const selector = document.querySelector(`.${component}__${info}`);
    selector.textContent = infoValue;
  }

  function showOrClearGraphic(command) {
    if (command === "clear") {
      const allGraphicEl = document.querySelectorAll(".graphic__el");
      allGraphicEl.forEach((el) => el.classList.remove("graphic__el--active"));
    } else {
      graphicDes1.forEach((des) => {
        if (des.textContent === status) {
          des.parentElement.classList.add("graphic__el--active");
        }
      });
      graphicDes2.forEach((des) => {
        if (des.textContent === targStatus) {
          des.parentElement.classList.add("graphic__el--active");
        }
      });
    }
  }

  function getImage(gender, status) {
    let src;

    switch (gender) {
      case "male":
        switch (status) {
          case "Nadwaga":
            src = maleNadwaga;
            break;
          case "Niedowaga":
            src = maleNiedowaga;
            break;
          case "Otyłość I stopnia":
            src = maleOtyłośćIstopnia;
            break;
          case "Otyłość II stopnia":
            src = maleOtyłośćIIstopnia;
            break;
          case "Otyłość III stopnia":
            src = maleOtyłośćIIIstopnia;
            break;
          case "Prawidłowa masa ciała":
            src = malePrawidłowaMasaCiała;
            break;
          case "Wychudzenie":
            src = maleWychudzenie;
            break;
          case "Wygłodzenie":
            src = maleWygłodzenie;
            break;
        }
        break;
      case "female":
        switch (status) {
          case "Nadwaga":
            src = femaleNadwaga;
            break;
          case "Niedowaga":
            src = femaleNiedowaga;
            break;
          case "Otyłość I stopnia":
            src = femaleOtyłośćIstopnia;
            break;
          case "Otyłość II stopnia":
            src = femaleOtyłośćIIstopnia;
            break;
          case "Otyłość III stopnia":
            src = femaleOtyłośćIIIstopnia;
            break;
          case "Prawidłowa masa ciała":
            src = femalePrawidłowaMasaCiała;
            break;
          case "Wychudzenie":
            src = femaleWychudzenie;
            break;
          case "Wygłodzenie":
            src = femaleWygłodzenie;
            break;
        }
        break;
    }
    return src;
  }
}

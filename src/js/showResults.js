import maleNadwaga from "../img/male/Nadwaga.svg";
import maleNiedowaga from "../img/male/Niedowaga.svg";
import maleOtyłośćIStopnia from "../img/male/Otyłość-I-stopnia.svg";
import maleOtyłośćIIStopnia from "../img/male/Otyłość-II-stopnia.svg";
import maleOtyłośćIIIStopnia from "../img/male/Otyłość-III-stopnia.svg";
import malePrawidłowaMasaCiała from "../img/male/Prawidłowa-masa-ciała.svg";
import maleWychudzenie from "../img/male/Wychudzenie.svg";
import maleWygłodzenie from "../img/male/Wygłodzenie.svg";
import femaleNadwaga from "../img/female/Nadwaga.svg";
import femaleNiedowaga from "../img/female/Niedowaga.svg";
import femaleOtyłośćIStopnia from "../img/female/Otyłość-I-stopnia.svg";
import femaleOtyłośćIIStopnia from "../img/female/Otyłość-II-stopnia.svg";
import femaleOtyłośćIIIStopnia from "../img/female/Otyłość-III-stopnia.svg";
import femalePrawidłowaMasaCiała from "../img/female/Prawidłowa-masa-ciała.svg";
import femaleWychudzenie from "../img/female/Wychudzenie.svg";
import femaleWygłodzenie from "../img/female/Wygłodzenie.svg";

export default function showResults(
  age,
  gender,
  weight,
  height,
  BMI,
  CPM,
  weightRange,
  BMR,
  activity,
  targWeight,
  targBMI,
  days,
  diffCalories,
  diffWeight,
  diffWeightDay,
  isLostWeight
) {
  const status = getStatusHintColor(BMI).status,
    statusColor = getStatusHintColor(BMI).color,
    targStatus = getStatusHintColor(targBMI).status,
    targStatusColor = getStatusHintColor(targBMI).color,
    hint = getStatusHintColor(BMI).hint,
    results = document.querySelector(".results"),
    resultsBtn = document.querySelector(".results__btn"),
    personImg = document.querySelector(".personInfo__imgAct"),
    personTargImg = document.querySelector(".personInfo__imgTarg"),
    genderDisplay = gender === "male" ? "Mężczyzna" : "Kobieta",
    diffWeightSpan = document.querySelectorAll(".results__diffWeightSpan"),
    personInfoBMIP = document.querySelectorAll(
      ".personInfo__bmiInfo > .personInfo__p--bold"
    ),
    personInfoBMITargP = document.querySelectorAll(
      ".personInfo__bmiTargInfo > .personInfo__p--bold"
    ),
    graphicDes1 = document.querySelectorAll(".results__graphic1 .graphic__des"),
    graphicDes2 = document.querySelectorAll(".results__graphic2 .graphic__des"),
    loseWeight = ["spalonych", "zrzuconych", "zrzuconej"],
    gainWeight = ["dodatkowych", "przybranych", "przybranej"],
    dietForLoseWeight =
      "Aby zdrowo schudnąć trzeba zadabać o zbilansowaną diete. Niezbędne będzie picie odpowiedniej ilości wody, 2 litry to średnia ilość płynów, które powinien przyswajać człowek w ciągu jednego dnia. Woda wypełni żołądek i pomoże przyspieszyć przemianę materii. Zpożywaj produkty bogate w błonnik - ta substancja wspomaga prace jelit. Zadbaj o regularne pory posiłków aby nie sięgać po niezdrowe przekąski. Jedz dużo warzyw, owoców, węglowodanów, białka i tłuszczów roślinnych. Również trzeba zadbać o odpowiednią aktywność fizyczną, w celu spalenia zbędnego tłuszczu",
    dietForGainWeight =
      "Aby zdrowo przytyć trzeba zdecydowanie zadbać o pełnowartościowe białko w diecie. Najlepiej sięgać po białko pochodzenia zwierzęcego: chude mięso, ryby, jaja, jogurty naturalne, biały ser. Dla wegan i wegetarian dobrej jakości źródła białka znajdą się w tofu, gotowanych nasionach roślin strączkowych, orzechach i kaszach. Dieta powinna zawierać też odpowiednią ilość witamin, minerałów i makroelementów. Pamiętać również trzeba o ćwiczeniach fizycznych w celu nabrania masy mięśniowej",
    diet = isLostWeight ? dietForLoseWeight : dietForGainWeight;

  personInfoBMITargP.forEach((p) => (p.style.color = targStatusColor));
  personInfoBMIP.forEach((p) => (p.style.color = statusColor));

  showOrClearGraphic("clear");
  showOrClearGraphic("show");

  personImg.src = getImage(gender, status);
  personTargImg.src = getImage(gender, targStatus);
  personImg.alt = `
    Sylwetka ${genderDisplay
      .replace("a", "y")
      .toLowerCase()} zaklasyfikowywana jako: ${status}
  `;
  personTargImg.alt = `
    Sylwetka ${genderDisplay
      .replace("a", "y")
      .toLowerCase()} zaklasyfikowywana jako: ${targStatus}
  `;

  resultsBtn.addEventListener("click", scrollToMain);

  diffWeightSpan.forEach((span) => {
    isLostWeight
      ? (span.textContent = loseWeight.shift())
      : (span.textContent = gainWeight.shift());
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
  setComponentInfo("results", "days", `${days}`);
  setComponentInfo("results", "diffCalories", diffCalories);
  setComponentInfo("results", "diffWeight", diffWeight);
  setComponentInfo("results", "diffWeightDay", `${diffWeightDay}`);
  setComponentInfo("results", "diet", diet);

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
            src = maleOtyłośćIStopnia;
            break;
          case "Otyłość II stopnia":
            src = maleOtyłośćIIStopnia;
            break;
          case "Otyłość III stopnia":
            src = maleOtyłośćIIIStopnia;
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
            src = femaleOtyłośćIStopnia;
            break;
          case "Otyłość II stopnia":
            src = femaleOtyłośćIIStopnia;
            break;
          case "Otyłość III stopnia":
            src = femaleOtyłośćIIIStopnia;
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

  function getStatusHintColor(BMI) {
    let status;
    let color;
    let hint;

    switch (true) {
      case BMI < 16:
        status = "Wygłodzenie";
        color = "#00ffd9";
        hint =
          "Wynik wskazuje na skrajne niedożywienie. Taki stan może doprowadzić do wielu poważnych problemów jak stłuszczenia wątroby, upośledzenie odporności,czy zanik błony śluzowej jelita. Z czasem może dojść do zaburzeń pracy serca oraz ośrodkowego układu nerwowego, a w skrajnych przypadkach nawet do śmierci. Objawy niedożywienia to spadek masy ciała, utrata tkanki mięśniowej oraz tłuszczowej, senność, przewlekłe uczucie zmęczenia, zaburzenia miesiączki, zaburzenia koncentracji, apatia, rozdrażnienie oraz zmiany osobowości. Zalecane jak najszybsze zkontaktowanie sie z lekarzem lub specjalistą!";
        break;
      case BMI >= 16 && BMI < 17:
        status = "Wychudzenie";
        color = "#00c187";
        hint =
          "Wynik wskazuje na niedożywienie. Taki stan może doprowadzić do wielu problemów zdrowotnych jak stłuszczenia wątroby, upośledzenie odporności,czy zanik błony śluzowej jelita. Z czasem może dojść do zaburzeń pracy serca oraz ośrodkowego układu nerwowego, a w skrajnych przypadkach nawet do śmierci. Objawy niedożywienia to spadek masy ciała, utrata tkanki mięśniowej oraz tłuszczowej, senność, przewlekłe uczucie zmęczenia, zaburzenia miesiączki, zaburzenia koncentracji, apatia, rozdrażnienie oraz zmiany osobowości. Zalecane  zkontaktowanie sie z lekarzem lub specjalistą";
        break;
      case BMI >= 17 && BMI < 18.5:
        status = "Niedowaga";
        color = "#008e63";
        hint =
          "Twoja wartość wskaźnika BMI oznacza zbyt niską masę ciała w odniesieniu do wzrostu. Przyczyną może być przewlekle spożywanie zbyt małej ilości kilokalorii w ciągu dnia w odniesieniu do całkowitego zapotrzebowania kalorycznego organizmu. Niedowaga może również towarzyszyć przebiegowi niektórych chorób będąc ich objawem.Niska masa ciała jest związana m.in. z obniżeniem odporności organizmu, zwiększa ryzyko zaburzeń płodności, może być przyczyną problemów ze snem, a także powodować przewlekłe uczucie zmęczenia. Dlatego warto przyjrzeć się swojej diecie i skonsultować ją z dietetykiem, a stan zdrowia z lekarzem.";
        break;
      case BMI >= 18.5 && BMI < 25:
        status = "Prawidłowa masa ciała";
        color = "#26be00";
        hint =
          "Gratulacje! Twoja masa ciała jest adekwatna do wzrostu. Aby utrzymać obecną masę ciała pamiętaj o stosowaniu zbilansowanej i zróżnicowanej diety. W jadłospisie warto uwzględnić co najmniej 400 g warzyw i owoców w ciągu dnia, wybierać produkty zbożowe z pełnego ziarna, nasiona strączków, naturalne produkty mleczne, orzechy, ryby oraz chude gatunki mięs. Korzystny wpływ na zachowanie zdrowia i utrzymanie masy ciała ma także regularna aktywność fizyczna.";
        break;
      case BMI >= 25 && BMI < 30:
        status = "Nadwaga";
        color = "#ffea00";
        hint =
          "Przyjrzyj się temu, co ląduje na Twoim talerzu i wprowadź korzystne dla zdrowia zmiany. Zamiast produktów zbożowych oczyszczonych wybieraj pełnoziarniste, naturalne przetwory mleczne zamiast słodzonych, chude gatunki mięs zamiast tłustych, spożywać ryby 1-2 razy w tygodniu, a także sięgaj po warzywa i owoce zamiast słodkich przekąsek. Głównym źródłem płynów w ciągu dnia powinna być woda. Pamiętaj, aby jeść mniejsze porcje, ale częściej. Włącz dodatkową aktywność fizyczną, co znacznie ułatwi utratę zbędnych kilogramów.";
        break;
      case BMI >= 30 && BMI < 35:
        status = "Otyłość I stopnia";
        color = "#ff9100";
        hint =
          "Nadmierna zawartość tkanki tłuszczowej zwiększa ryzyko rozwoju chorób układu sercowo-naczyniowego, takich jak niedokrwienna choroba serca, nadciśnienie tętnicze, a także chorób dietozależnych m.in. cukrzycy typu 2. Stanowi również większe obciążenie dla układu kostno-szkieletowego, zwiększając ryzyko rozwoju chorób zwyrodnieniowych. Ponieważ wysoki poziom tkanki tłuszczowej w ciele stanowi zagrożenie dla zdrowia i życia, warto podjąć działania ukierunkowane na obniżenie aktualnej masy ciała. W tym celu sugerujemy wizytę u lekarza specjalisty, który zaproponuje odpowiednie postępowanie lecznicze, a także dietetyka, który pomoże dopasować dietę do indywidualnych potrzeb.";
        break;
      case BMI >= 35 && BMI < 40:
        status = "Otyłość II stopnia";
        color = "#ff0000";
        hint =
          "Otyłość zwiększa ryzyko rozwoju wielu chorób, takich jak cukrzyca typu 2, choroba wieńcowa, nadciśnienie tętnicze, zaburzenia płodności czy choroby zwyrodnieniowe. Dlatego warto podjąć działania mające na celu obniżenie obecnej masy ciała – zmianę dotychczasowego sposobu odżywiania się oraz podjęcie dodatkowej aktywności fizycznej. Sugerujemy również konsultację z lekarzem specjalizującym się w leczeniu otyłości, który zaproponuje odpowiednie postępowanie lecznicze.";
        break;
      case BMI >= 40:
        status = "Otyłość III stopnia";
        color = "#b00000";
        hint =
          "Twoja wartość BMI wskazuje na otyłość III stopnia, czyli otyłość olbrzymią. Ten stan świadczy o bardzo wysokiej zawartości tkanki tłuszczowej w organizmie, która stanowi istotne obciążenie dla wielu układów m.in. krwionośnego, pokarmowego, oddechowego, a także kostno-stawowego. Ponieważ to stan bardzo niebezpieczny dla zdrowia i życia, zalecamy kontakt z lekarzem specjalizującym się w leczeniu osób z otyłością olbrzymią, który pomoże dopasować odpowiednie postępowanie lecznicze.";
        break;
    }
    return {
      status,
      color,
      hint,
    };
  }

  function scrollToMain() {
    const main = document.querySelector(`.calculator`);
    window.scrollTo({
      top: main.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth",
    });
  }
}

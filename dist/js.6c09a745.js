// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/js/changeTheme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeTheme = changeTheme;
var theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");else document.body.classList.add("light");

function changeTheme() {
  if (theme === "dark") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    theme = "light";
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
}
},{}],"../src/js/showList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showList = showList;

function showList() {
  var selectList = document.querySelector(".select__list");
  var select = document.querySelector(".select");
  var selectP = document.querySelector(".select__p");
  var selectListItem = document.querySelectorAll(".select__listItem");
  selectList.classList.toggle("select__list--active");
  selectListItem.forEach(function (item) {
    item.addEventListener("click", function () {
      selectP.textContent = item.textContent;
      selectP.classList.add("select__p--active");
    });
  });
  selectListItem.forEach(function (item) {
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        selectP.textContent = item.textContent;
        selectP.classList.add("select__p--active");
      }
    });
  });
  window.addEventListener("click", function (e) {
    closeList(e);
  });
  window.addEventListener("touch", function (e) {
    closeList(e);
  });
  selectList.addEventListener("keydown", function (e) {
    if (e.key === "Enter") closeList();
  }); //hide select list

  function closeList(e) {
    if (!e.target.classList.contains("select__p") && !e.target.classList.contains("select") && !e.target.classList.contains("select__icon")) selectList.classList.remove("select__list--active");
  }
}
},{}],"../src/js/getGender.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gender = void 0;
exports.getGender = getGender;
var radioBtnFemale = document.querySelector("#female");
var radioBtnMale = document.querySelector("#male");
var gender = "";
exports.gender = gender;

function getGender(btn) {
  if (btn.id === "female") {
    radioBtnFemale.classList.add("radioBtn--active");
    radioBtnMale.classList.remove("radioBtn--active");
    exports.gender = gender = "female";
  } else {
    radioBtnMale.classList.add("radioBtn--active");
    radioBtnFemale.classList.remove("radioBtn--active");
    exports.gender = gender = "male";
  }
}
},{}],"../src/js/checkInputNumber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkInputNumber = checkInputNumber;

function checkInputNumber(e) {
  if (e.target.value < 1) {
    e.target.value = "";
  } else {
    if (e.target.name === "age") {
      if (e.target.value > 199) e.target.value = 199;
    } else if (e.target.value > 999) e.target.value = 999;
  }
}
},{}],"../src/img/male/Nadwaga.svg":[function(require,module,exports) {
module.exports = "/Nadwaga.38b1dcf9.svg";
},{}],"../src/img/male/Niedowaga.svg":[function(require,module,exports) {
module.exports = "/Niedowaga.a9e600a1.svg";
},{}],"../src/img/male/Otyłość I stopnia.svg":[function(require,module,exports) {
module.exports = "/Otyłość I stopnia.ad67dc9c.svg";
},{}],"../src/img/male/Otyłość II stopnia.svg":[function(require,module,exports) {
module.exports = "/Otyłość II stopnia.93c2b605.svg";
},{}],"../src/img/male/Otyłość III stopnia.svg":[function(require,module,exports) {
module.exports = "/Otyłość III stopnia.845f771e.svg";
},{}],"../src/img/male/Prawidłowa masa ciała.svg":[function(require,module,exports) {
module.exports = "/Prawidłowa masa ciała.b8d5bae8.svg";
},{}],"../src/img/male/Wychudzenie.svg":[function(require,module,exports) {
module.exports = "/Wychudzenie.eb3ca563.svg";
},{}],"../src/img/male/Wygłodzenie.svg":[function(require,module,exports) {
module.exports = "/Wygłodzenie.bb66a17d.svg";
},{}],"../src/img/female/Nadwaga.svg":[function(require,module,exports) {
module.exports = "/Nadwaga.5bfa0684.svg";
},{}],"../src/img/female/Niedowaga.svg":[function(require,module,exports) {
module.exports = "/Niedowaga.93f42777.svg";
},{}],"../src/img/female/Otyłość I stopnia.svg":[function(require,module,exports) {
module.exports = "/Otyłość I stopnia.022e3ae6.svg";
},{}],"../src/img/female/Otyłość II stopnia.svg":[function(require,module,exports) {
module.exports = "/Otyłość II stopnia.3fa8ebf2.svg";
},{}],"../src/img/female/Otyłość III stopnia.svg":[function(require,module,exports) {
module.exports = "/Otyłość III stopnia.a5958484.svg";
},{}],"../src/img/female/Prawidłowa masa ciała.svg":[function(require,module,exports) {
module.exports = "/Prawidłowa masa ciała.859f8ceb.svg";
},{}],"../src/img/female/Wychudzenie.svg":[function(require,module,exports) {
module.exports = "/Wychudzenie.8aecb56a.svg";
},{}],"../src/img/female/Wygłodzenie.svg":[function(require,module,exports) {
module.exports = "/Wygłodzenie.d21af4d8.svg";
},{}],"../src/js/showResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showResults = showResults;

var _Nadwaga = _interopRequireDefault(require("../img/male/Nadwaga.svg"));

var _Niedowaga = _interopRequireDefault(require("../img/male/Niedowaga.svg"));

var _OtyłośćIStopnia = _interopRequireDefault(require("../img/male/Oty\u0142o\u015B\u0107 I stopnia.svg"));

var _OtyłośćIIStopnia = _interopRequireDefault(require("../img/male/Oty\u0142o\u015B\u0107 II stopnia.svg"));

var _OtyłośćIIIStopnia = _interopRequireDefault(require("../img/male/Oty\u0142o\u015B\u0107 III stopnia.svg"));

var _PrawidłowaMasaCiała = _interopRequireDefault(require("../img/male/Prawid\u0142owa masa cia\u0142a.svg"));

var _Wychudzenie = _interopRequireDefault(require("../img/male/Wychudzenie.svg"));

var _Wygłodzenie = _interopRequireDefault(require("../img/male/Wyg\u0142odzenie.svg"));

var _Nadwaga2 = _interopRequireDefault(require("../img/female/Nadwaga.svg"));

var _Niedowaga2 = _interopRequireDefault(require("../img/female/Niedowaga.svg"));

var _OtyłośćIStopnia2 = _interopRequireDefault(require("../img/female/Oty\u0142o\u015B\u0107 I stopnia.svg"));

var _OtyłośćIIStopnia2 = _interopRequireDefault(require("../img/female/Oty\u0142o\u015B\u0107 II stopnia.svg"));

var _OtyłośćIIIStopnia2 = _interopRequireDefault(require("../img/female/Oty\u0142o\u015B\u0107 III stopnia.svg"));

var _PrawidłowaMasaCiała2 = _interopRequireDefault(require("../img/female/Prawid\u0142owa masa cia\u0142a.svg"));

var _Wychudzenie2 = _interopRequireDefault(require("../img/female/Wychudzenie.svg"));

var _Wygłodzenie2 = _interopRequireDefault(require("../img/female/Wyg\u0142odzenie.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showResults(age, gender, weight, height, BMI, CPM, weightRange, BMR, activity, targWeight, targBMI, days, diffCalories, diffWeight, diffWeightDay, isLostWeight) {
  var status = getStatusHintColor(BMI).status;
  var statusColor = getStatusHintColor(BMI).color;
  var targStatus = getStatusHintColor(targBMI).status;
  var targStatusColor = getStatusHintColor(targBMI).color;
  var hint = getStatusHintColor(BMI).hint;
  var results = document.querySelector(".results");
  var resultsBtn = document.querySelector(".results__btn");
  var personImg = document.querySelector(".personInfo__imgAct");
  var personTargImg = document.querySelector(".personInfo__imgTarg");
  var genderDisplay = gender === "male" ? "Mężczyzna" : "Kobieta";
  var diffWeightSpan = document.querySelectorAll(".results__diffWeightSpan");
  var personInfoBMIP = document.querySelectorAll(".personInfo__bmiInfo > .personInfo__p--bold");
  var personInfoBMITargP = document.querySelectorAll(".personInfo__bmiTargInfo > .personInfo__p--bold");
  var graphicDes1 = document.querySelectorAll(".results__graphic1 .graphic__des");
  var graphicDes2 = document.querySelectorAll(".results__graphic2 .graphic__des");
  personInfoBMITargP.forEach(function (p) {
    return p.style.color = targStatusColor;
  });
  personInfoBMIP.forEach(function (p) {
    return p.style.color = statusColor;
  });
  showOrClearGraphic("clear");
  showOrClearGraphic("show");
  personImg.src = getImage(gender, status);
  personTargImg.src = getImage(gender, targStatus);
  personImg.alt = "\n    Kolorowa sylwetka ".concat(genderDisplay.replace("a", "y").toLowerCase(), " zaklasyfikowywana jako: ").concat(status, "\n  ");
  personTargImg.alt = "\n    Kolorowa sylwetka ".concat(genderDisplay.replace("a", "y").toLowerCase(), " zaklasyfikowywana jako: ").concat(targStatus, "\n  ");
  resultsBtn.addEventListener("click", function () {
    var main = document.querySelector(".calculator");
    window.scrollTo({
      top: main.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth"
    });
  });
  var loseWeight = ["spalonych", "zrzuconych", "zrzuconej"];
  var gainWeight = ["dodatkowych", "przybranych", "przybranej"];
  diffWeightSpan.forEach(function (span) {
    if (isLostWeight) span.textContent = loseWeight.shift();else span.textContent = gainWeight.shift();
  });
  var diet = "";
  if (isLostWeight) diet = "Aby zdrowo schudnąć trzeba zadabać o zbilansowaną diete. Niezbędne będzie picie odpowiedniej ilości wody, 2 litry to średnia ilość płynów, które powinien przyswajać człowek w ciągu jednego dnia. Woda wypełni żołądek i pomoże przyspieszyć przemianę materii. Zpożywaj produkty bogate w błonnik - ta substancja wspomaga prace jelit. Zadbaj o regularne pory posiłków aby nie sięgać po niezdrowe przekąski. Jedz dużo warzyw, owoców, węglowodanów, białka i tłuszczów roślinnych. Również trzeba zadbać o odpowiednią aktywność fizyczną, w celu spalenia zbędnego tłuszczu";else diet = "Aby zdrowo przytyć trzeba zdecydowanie zadbać o pełnowartościowe białko w diecie. Najlepiej sięgać po białko pochodzenia zwierzęcego: chude mięso, ryby, jaja, jogurty naturalne, biały ser. Dla wegan i wegetarian dobrej jakości źródła białka znajdą się w tofu, gotowanych nasionach roślin strączkowych, orzechach i kaszach. Dieta powinna zawierać też odpowiednią ilość witamin, minerałów i makroelementów. Pamiętać również trzeba o ćwiczeniach fizycznych w celu nabrania masy mięśniowej";
  setComponentInfo("personInfo", "status", status);
  setComponentInfo("personInfo", "age", "".concat(age, " lat"));
  setComponentInfo("personInfo", "gender", genderDisplay);
  setComponentInfo("personInfo", "height", "".concat(height, " cm"));
  setComponentInfo("personInfo", "weight", "".concat(weight, " kg"));
  setComponentInfo("personInfo", "BMI", BMI);
  setComponentInfo("personInfo", "weightRange", weightRange);
  setComponentInfo("personInfo", "targWeight", "".concat(targWeight, " kg"));
  setComponentInfo("personInfo", "targBMI", targBMI);
  setComponentInfo("personInfo", "targStatus", targStatus);
  setComponentInfo("results", "BMR", BMR);
  setComponentInfo("results", "CPM", CPM);
  setComponentInfo("results", "activity", activity);
  setComponentInfo("results", "hint", hint);
  setComponentInfo("results", "days", "".concat(days));
  setComponentInfo("results", "diffCalories", diffCalories);
  setComponentInfo("results", "diffWeight", diffWeight);
  setComponentInfo("results", "diffWeightDay", "".concat(diffWeightDay));
  setComponentInfo("results", "diet", diet);
  results.classList.remove("results--hidden");

  function setComponentInfo(component, info, infoValue) {
    var selector = document.querySelector(".".concat(component, "__").concat(info));
    selector.textContent = infoValue;
  }

  function showOrClearGraphic(command) {
    if (command === "clear") {
      var allGraphicEl = document.querySelectorAll(".graphic__el");
      allGraphicEl.forEach(function (el) {
        return el.classList.remove("graphic__el--active");
      });
    } else {
      graphicDes1.forEach(function (des) {
        if (des.textContent === status) {
          des.parentElement.classList.add("graphic__el--active");
        }
      });
      graphicDes2.forEach(function (des) {
        if (des.textContent === targStatus) {
          des.parentElement.classList.add("graphic__el--active");
        }
      });
    }
  }

  function getImage(gender, status) {
    var src;

    switch (gender) {
      case "male":
        switch (status) {
          case "Nadwaga":
            src = _Nadwaga.default;
            break;

          case "Niedowaga":
            src = _Niedowaga.default;
            break;

          case "Otyłość I stopnia":
            src = _OtyłośćIStopnia.default;
            break;

          case "Otyłość II stopnia":
            src = _OtyłośćIIStopnia.default;
            break;

          case "Otyłość III stopnia":
            src = _OtyłośćIIIStopnia.default;
            break;

          case "Prawidłowa masa ciała":
            src = _PrawidłowaMasaCiała.default;
            break;

          case "Wychudzenie":
            src = _Wychudzenie.default;
            break;

          case "Wygłodzenie":
            src = _Wygłodzenie.default;
            break;
        }

        break;

      case "female":
        switch (status) {
          case "Nadwaga":
            src = _Nadwaga2.default;
            break;

          case "Niedowaga":
            src = _Niedowaga2.default;
            break;

          case "Otyłość I stopnia":
            src = _OtyłośćIStopnia2.default;
            break;

          case "Otyłość II stopnia":
            src = _OtyłośćIIStopnia2.default;
            break;

          case "Otyłość III stopnia":
            src = _OtyłośćIIIStopnia2.default;
            break;

          case "Prawidłowa masa ciała":
            src = _PrawidłowaMasaCiała2.default;
            break;

          case "Wychudzenie":
            src = _Wychudzenie2.default;
            break;

          case "Wygłodzenie":
            src = _Wygłodzenie2.default;
            break;
        }

        break;
    }

    return src;
  }

  function getStatusHintColor(BMI) {
    var status;
    var color;
    var hint;

    switch (true) {
      case BMI < 16:
        status = "Wygłodzenie";
        color = "#00ffd9";
        hint = "Wynik wskazuje na skrajne niedożywienie. Taki stan może doprowadzić do wielu poważnych problemów jak stłuszczenia wątroby, upośledzenie odporności,czy zanik błony śluzowej jelita. Z czasem może dojść do zaburzeń pracy serca oraz ośrodkowego układu nerwowego, a w skrajnych przypadkach nawet do śmierci. Objawy niedożywienia to spadek masy ciała, utrata tkanki mięśniowej oraz tłuszczowej, senność, przewlekłe uczucie zmęczenia, zaburzenia miesiączki, zaburzenia koncentracji, apatia, rozdrażnienie oraz zmiany osobowości. Zalecane jak najszybsze zkontaktowanie sie z lekarzem lub specjalistą!";
        break;

      case BMI >= 16 && BMI < 17:
        status = "Wychudzenie";
        color = "#00c187";
        hint = "Wynik wskazuje na niedożywienie. Taki stan może doprowadzić do wielu problemów zdrowotnych jak stłuszczenia wątroby, upośledzenie odporności,czy zanik błony śluzowej jelita. Z czasem może dojść do zaburzeń pracy serca oraz ośrodkowego układu nerwowego, a w skrajnych przypadkach nawet do śmierci. Objawy niedożywienia to spadek masy ciała, utrata tkanki mięśniowej oraz tłuszczowej, senność, przewlekłe uczucie zmęczenia, zaburzenia miesiączki, zaburzenia koncentracji, apatia, rozdrażnienie oraz zmiany osobowości. Zalecane  zkontaktowanie sie z lekarzem lub specjalistą";
        break;

      case BMI >= 17 && BMI < 18.5:
        status = "Niedowaga";
        color = "#008e63";
        hint = "Twoja wartość wskaźnika BMI oznacza zbyt niską masę ciała w odniesieniu do wzrostu. Przyczyną może być przewlekle spożywanie zbyt małej ilości kilokalorii w ciągu dnia w odniesieniu do całkowitego zapotrzebowania kalorycznego organizmu. Niedowaga może również towarzyszyć przebiegowi niektórych chorób będąc ich objawem.Niska masa ciała jest związana m.in. z obniżeniem odporności organizmu, zwiększa ryzyko zaburzeń płodności, może być przyczyną problemów ze snem, a także powodować przewlekłe uczucie zmęczenia. Dlatego warto przyjrzeć się swojej diecie i skonsultować ją z dietetykiem, a stan zdrowia z lekarzem.";
        break;

      case BMI >= 18.5 && BMI < 25:
        status = "Prawidłowa masa ciała";
        color = "#26be00";
        hint = "Gratulacje! Twoja masa ciała jest adekwatna do wzrostu. Aby utrzymać obecną masę ciała pamiętaj o stosowaniu zbilansowanej i zróżnicowanej diety. W jadłospisie warto uwzględnić co najmniej 400 g warzyw i owoców w ciągu dnia, wybierać produkty zbożowe z pełnego ziarna, nasiona strączków, naturalne produkty mleczne, orzechy, ryby oraz chude gatunki mięs. Korzystny wpływ na zachowanie zdrowia i utrzymanie masy ciała ma także regularna aktywność fizyczna.";
        break;

      case BMI >= 25 && BMI < 30:
        status = "Nadwaga";
        color = "#ffea00";
        hint = "Przyjrzyj się temu, co ląduje na Twoim talerzu i wprowadź korzystne dla zdrowia zmiany. Zamiast produktów zbożowych oczyszczonych wybieraj pełnoziarniste, naturalne przetwory mleczne zamiast słodzonych, chude gatunki mięs zamiast tłustych, spożywać ryby 1-2 razy w tygodniu, a także sięgaj po warzywa i owoce zamiast słodkich przekąsek. Głównym źródłem płynów w ciągu dnia powinna być woda. Pamiętaj, aby jeść mniejsze porcje, ale częściej. Włącz dodatkową aktywność fizyczną, co znacznie ułatwi utratę zbędnych kilogramów.";
        break;

      case BMI >= 30 && BMI < 35:
        status = "Otyłość I stopnia";
        color = "#ff9100";
        hint = "Nadmierna zawartość tkanki tłuszczowej zwiększa ryzyko rozwoju chorób układu sercowo-naczyniowego, takich jak niedokrwienna choroba serca, nadciśnienie tętnicze, a także chorób dietozależnych m.in. cukrzycy typu 2. Stanowi również większe obciążenie dla układu kostno-szkieletowego, zwiększając ryzyko rozwoju chorób zwyrodnieniowych. Ponieważ wysoki poziom tkanki tłuszczowej w ciele stanowi zagrożenie dla zdrowia i życia, warto podjąć działania ukierunkowane na obniżenie aktualnej masy ciała. W tym celu sugerujemy wizytę u lekarza specjalisty, który zaproponuje odpowiednie postępowanie lecznicze, a także dietetyka, który pomoże dopasować dietę do indywidualnych potrzeb.";
        break;

      case BMI >= 35 && BMI < 40:
        status = "Otyłość II stopnia";
        color = "#ff0000";
        hint = "Otyłość zwiększa ryzyko rozwoju wielu chorób, takich jak cukrzyca typu 2, choroba wieńcowa, nadciśnienie tętnicze, zaburzenia płodności czy choroby zwyrodnieniowe. Dlatego warto podjąć działania mające na celu obniżenie obecnej masy ciała – zmianę dotychczasowego sposobu odżywiania się oraz podjęcie dodatkowej aktywności fizycznej. Sugerujemy również konsultację z lekarzem specjalizującym się w leczeniu otyłości, który zaproponuje odpowiednie postępowanie lecznicze.";
        break;

      case BMI >= 40:
        status = "Otyłość III stopnia";
        color = "#b00000";
        hint = "Twoja wartość BMI wskazuje na otyłość III stopnia, czyli otyłość olbrzymią. Ten stan świadczy o bardzo wysokiej zawartości tkanki tłuszczowej w organizmie, która stanowi istotne obciążenie dla wielu układów m.in. krwionośnego, pokarmowego, oddechowego, a także kostno-stawowego. Ponieważ to stan bardzo niebezpieczny dla zdrowia i życia, zalecamy kontakt z lekarzem specjalizującym się w leczeniu osób z otyłością olbrzymią, który pomoże dopasować odpowiednie postępowanie lecznicze.";
        break;
    }

    return {
      status: status,
      color: color,
      hint: hint
    };
  }
}
},{"../img/male/Nadwaga.svg":"../src/img/male/Nadwaga.svg","../img/male/Niedowaga.svg":"../src/img/male/Niedowaga.svg","../img/male/Otyłość I stopnia.svg":"../src/img/male/Otyłość I stopnia.svg","../img/male/Otyłość II stopnia.svg":"../src/img/male/Otyłość II stopnia.svg","../img/male/Otyłość III stopnia.svg":"../src/img/male/Otyłość III stopnia.svg","../img/male/Prawidłowa masa ciała.svg":"../src/img/male/Prawidłowa masa ciała.svg","../img/male/Wychudzenie.svg":"../src/img/male/Wychudzenie.svg","../img/male/Wygłodzenie.svg":"../src/img/male/Wygłodzenie.svg","../img/female/Nadwaga.svg":"../src/img/female/Nadwaga.svg","../img/female/Niedowaga.svg":"../src/img/female/Niedowaga.svg","../img/female/Otyłość I stopnia.svg":"../src/img/female/Otyłość I stopnia.svg","../img/female/Otyłość II stopnia.svg":"../src/img/female/Otyłość II stopnia.svg","../img/female/Otyłość III stopnia.svg":"../src/img/female/Otyłość III stopnia.svg","../img/female/Prawidłowa masa ciała.svg":"../src/img/female/Prawidłowa masa ciała.svg","../img/female/Wychudzenie.svg":"../src/img/female/Wychudzenie.svg","../img/female/Wygłodzenie.svg":"../src/img/female/Wygłodzenie.svg"}],"../src/js/calculate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculate = calculate;

var _showResults = require("./showResults");

function calculate(age, gender, weight, height, activity, targWeight, startDate, endDate) {
  var BMI = Math.round(weight / (height * height) * 100000) / 10;
  var targBMI = Math.round(targWeight / (height * height) * 100000) / 10;
  var minWeight = Math.round(0.00185 * Math.pow(height, 2));
  var maxWeight = Math.round(0.0025 * Math.pow(height, 2));
  var weightRange = "".concat(minWeight, " kg - ").concat(maxWeight, " kg");
  var activityStatus = getActivityStatus(activity);
  var days = Math.floor((endDate - startDate) / 86400000);
  days === 0 ? days = 1 : days;
  var isLostWeight = weight >= targWeight;
  var diffWeight = Math.abs(weight - targWeight);
  var diffWeightDay = Math.round(diffWeight / days * 100) / 100;
  var BMR;
  if (gender === "male") BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5);else BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161);
  var CPM = Math.floor(BMR * getPAL(activity));
  var diffCalories = Math.round(diffWeight * 7700 / days);
  (0, _showResults.showResults)(age, gender, weight, height, BMI, CPM, weightRange, BMR, activityStatus, targWeight, targBMI, days, diffCalories, diffWeight, diffWeightDay, isLostWeight);

  function getActivityStatus(activity) {
    var activitysStatus;

    switch (activity) {
      case 1:
        activitysStatus = "Brak aktywności fizycznej, chory, leżący";
        break;

      case 2:
        activitysStatus = "Lekka aktywność Pracownik biurowy, którego aktywność związana jest wyłącznie z obowiązkami domowymi";
        break;

      case 3:
        activitysStatus = "Średnia aktywność (aktywność - ok. 280 minut tygodniowo)	Pracownik biurowy, trenujący 2-3 razy w tygodniu przez minimum godzinę";
        break;

      case 4:
        activitysStatus = "Wysoka aktywność (aktywność - ok. 420 minut tygodniowo)	Pracownik biurowy, trenujący 3-4 razy w tygodniu przez minimum godzinę";
        break;

      case 5:
        activitysStatus = "Bardzo wysoka aktywność fizyczna. Zawodowy sportowiec, trenujący minimum 6 godzin tygodniowo lub osoba ciężko pracująca fizycznie";
        break;
    }

    return activitysStatus;
  }

  function getPAL(activity) {
    var PAL;

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
},{"./showResults":"../src/js/showResults.js"}],"../src/js/validateForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateForm = validateForm;

var _calculate = require("./calculate");

var _getGender = require("./getGender");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function validateForm() {
  var ageInputValue = document.querySelector("#ageValue");
  var weightInputValue = document.querySelector("#weightValue");
  var heightInputValue = document.querySelector("#heightValue");
  var selectListItem = document.querySelectorAll(".select__listItem");
  var selectValue = document.querySelector(".select__p");
  var targWeightInputValue = document.querySelector("#targWeightValue");
  var startDateInputValue = document.querySelector("#startDate");
  var endDateInputValue = document.querySelector("#endDate");

  var errorPInputs = _toConsumableArray(document.querySelectorAll(".fieldset__inputError"));

  var activity = "";
  var startDate = "";
  var endDate = "";
  selectListItem.forEach(function (li) {
    if (li.textContent === selectValue.textContent) {
      activity = li.value;
    }
  });
  errorPInputs.forEach(function (p) {
    p.classList.add("fieldset__inputError--hidden");
  });
  chechInputsDate();

  switch ("") {
    case ageInputValue.value:
      displayError(0);
      return;

    case _getGender.gender:
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

  var age = Number(ageInputValue.value);
  var weight = Number(weightInputValue.value);
  var height = Number(heightInputValue.value);
  var targWeight = Number(targWeightInputValue.value);
  (0, _calculate.calculate)(age, _getGender.gender, weight, height, activity, targWeight, startDate, endDate);

  function displayError(nr) {
    errorPInputs[nr].classList.remove("fieldset__inputError--hidden");
  }

  function chechInputsDate() {
    var date = new Date();
    var day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    var year = date.getFullYear().toString();
    var nowUnixDate = new Date("".concat(year, "-").concat(month, "-").concat(day)).getTime();
    var startUnixDate = new Date(startDateInputValue.value).getTime();
    var endUnixDate = new Date(endDateInputValue.value).getTime();

    if (startUnixDate >= nowUnixDate) {
      startDate = startUnixDate;
    }

    if (endUnixDate >= nowUnixDate && endUnixDate >= startUnixDate) {
      endDate = endUnixDate;
    }
  }
}
},{"./calculate":"../src/js/calculate.js","./getGender":"../src/js/getGender.js"}],"../src/js/toolTip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideToolTip = hideToolTip;
exports.showToolTip = showToolTip;

function showToolTip(e) {
  var modal;

  if (e.target.classList.contains("hintIcon__BMI")) {
    modal = document.querySelector(".hintIcon__BMI .hintIcon__modal");
    modal.classList.toggle("hintIcon__modal--active");
  } else {
    modal = document.querySelector(".hintIcon__BMR .hintIcon__modal");
    modal.classList.toggle("hintIcon__modal--active");
  }
}

function hideToolTip(e) {
  var modal = document.querySelectorAll(".hintIcon__modal");

  if (!e.target.classList.contains("hintIcon")) {
    modal.forEach(function (modal) {
      modal.classList.remove("hintIcon__modal--active");
    });
  }
}
},{}],"../src/js/index.js":[function(require,module,exports) {
"use strict";

var _changeTheme = require("./changeTheme");

var _showList = require("./showList");

var _getGender = require("./getGender");

var _checkInputNumber = require("./checkInputNumber");

var _validateForm = require("./validateForm");

var _toolTip = require("./toolTip");

var themeBtn = document.querySelector(".themeBtn");
var inputDate = document.querySelectorAll(".inputDate");
var select = document.querySelector(".select");
var radioBtns = document.querySelectorAll(".radioBtn");
var inputsNumber = document.querySelectorAll(".inputNumber");
var inputRange = document.querySelector(".inputRange");
var submitBtn = document.querySelector(".calculator__submitBtn");
var hintIcon = document.querySelectorAll(".hintIcon");
submitBtn.addEventListener("click", function () {
  (0, _validateForm.validateForm)();
  var results = document.querySelector(".results");
  window.scrollTo({
    top: results.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth"
  });
}); // change radio input color and check radio value

radioBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    (0, _getGender.getGender)(btn);
  });
}); // show select list

select.addEventListener("click", _showList.showList);
select.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    (0, _showList.showList)();
  }
}); // show tool tip

hintIcon.forEach(function (icon) {
  icon.addEventListener("touch", function (e) {
    return (0, _toolTip.showToolTip)(e);
  });
  icon.addEventListener("click", function (e) {
    return (0, _toolTip.showToolTip)(e);
  });
  icon.addEventListener("keydown", function (e) {
    if (e.key === "Enter") (0, _toolTip.showToolTip)(e);
  });
});
window.addEventListener("touch", function (e) {
  return (0, _toolTip.hideToolTip)(e);
});
window.addEventListener("click", function (e) {
  return (0, _toolTip.hideToolTip)(e);
});
window.addEventListener("unfocus", function (e) {
  return (0, _toolTip.hideToolTip)(e);
}); // change value in input range

inputRange.addEventListener("click", function () {
  changeHeightValue();
});
inputRange.addEventListener("mousemove", function () {
  changeHeightValue();
});
inputRange.addEventListener("touchstart", function () {
  changeHeightValue();
});
inputRange.addEventListener("touchend", function () {
  changeHeightValue();
});
inputRange.addEventListener("touchmove", function () {
  changeHeightValue();
});
inputRange.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    changeHeightValue();
  }
}); // chech number in input type number

inputsNumber.forEach(function (input) {
  input.addEventListener("input", function (e) {
    (0, _checkInputNumber.checkInputNumber)(e);
  });
}); // show height value

function changeHeightValue() {
  var inputRangeValue = document.querySelector(".inputRange__value");
  inputRangeValue.textContent = parseInt(inputRange.value);
} //change theme on a page


themeBtn.addEventListener("click", _changeTheme.changeTheme); //focus on date type input

inputDate.forEach(function (input) {
  return input.addEventListener("change", function () {
    input.classList.add("inputDate--focus");
  });
});
},{"./changeTheme":"../src/js/changeTheme.js","./showList":"../src/js/showList.js","./getGender":"../src/js/getGender.js","./checkInputNumber":"../src/js/checkInputNumber.js","./validateForm":"../src/js/validateForm.js","./toolTip":"../src/js/toolTip.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49758" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/js/index.js"], null)
//# sourceMappingURL=/js.6c09a745.js.map
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
    e.target.value = 1;
  } else {
    if (e.target.name === "age") {
      if (e.target.value > 199) e.target.value = 199;
    } else if (e.target.value > 999) e.target.value = 999;
  }
}
},{}],"../src/js/showResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showResults = showResults;

// import fs from "fs";
function showResults(age, gender, weight, height, BMI, status, statusColor, CPM, weightRange, BMR, activity, hint, targWeight, targBMI, targStatus, targStatusColor, months, weeks, days, diffCalories, diffWeight, diffWeightMonth, diffWeightWeek, diffWeightDay, activityTarg) {
  var results = document.querySelector(".results");
  var resultsBtn = document.querySelector(".results__btn");
  var personImg = document.querySelector(".personInfo__imgAct");
  var personTargImg = document.querySelector(".personInfo__imgTarg");
  var actStatus = document.querySelector(".personInfo__actStatus");
  var graphicDes1 = document.querySelectorAll(".graphic__container:first-child graphic__des");
  var graphicDes2 = document.querySelectorAll(".graphic__container:last-child graphic__des"); // const buffer = fs.readFileSync(__dirname + "/img/male/Nadwaga.svg");
  // personImg.src = nadwaga;

  personTargImg.src = "./img/male/Prawidłowa masa ciała.svg";
  personImg.alt = "test";
  personTargImg.alt = "test";
  console.log(personImg);
  console.log(personTargImg);
  resultsBtn.addEventListener("click", function () {
    var main = document.querySelector(".calculator");
    window.scrollTo({
      top: main.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth"
    });
  });
  actStatus.textContent = status;
  document.querySelector(".personInfo__gender").textContent = gender === "male" ? "Mężczyzna" : "Kobieta";
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
},{}],"../src/js/calculate.js":[function(require,module,exports) {
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
  var status = getBMIStatusAndColor(BMI).status;
  var statusColor = getBMIStatusAndColor(BMI).color;
  var targStatus = getBMIStatusAndColor(targBMI).status;
  var targStatusColor = getBMIStatusAndColor(targBMI).color;
  var activityStatus = getActivityStatus(activity);
  var diffWeight;
  var diffWeightMonth, diffWeightWeek, diffWeightDay;
  var numberOfMonths = Math.floor((endDate - startDate) / 2592000000);
  var numberOfWeeks = Math.floor((endDate - startDate) / 604800000);
  var numberOfDays = Math.floor((endDate - startDate) / 86400000);
  var MonthsDisplayNumber = Math.floor(numberOfDays / 30);
  var WeeksDisplayNumber;
  var hint = "";
  var activityTargStatus = "";
  var BMR;
  if (gender === "male") BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5);else BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161);
  var CPM = Math.floor(BMR * getPAL(activity));
  if (weight === targWeight) diffWeight = 0;else if (weight > targWeight) diffWeight = weight - targWeight;else diffWeight = targWeight - weight;
  if (numberOfMonths === 0) diffWeightMonth = 0;else diffWeightMonth = Math.round(diffWeight / numberOfMonths * 100) / 100;
  if (numberOfWeeks === 0) diffWeightWeek = 0;else diffWeightWeek = Math.round(diffWeight / numberOfWeeks * 100) / 100;
  if (numberOfDays === 0) diffWeightDay = 0;else diffWeightDay = Math.round(diffWeight / numberOfDays * 100) / 100;
  if (MonthsDisplayNumber === 0) WeeksDisplayNumber = Math.floor(numberOfDays / 7);else {
    WeeksDisplayNumber = Math.floor(numberOfWeeks / (MonthsDisplayNumber * 4));
    if (MonthsDisplayNumber === 1 && numberOfWeeks === 4) WeeksDisplayNumber = 0;
  }
  var DaysDisplayNumber = Math.floor(numberOfDays - MonthsDisplayNumber * 30 - WeeksDisplayNumber * 7);
  var diffCalories = Math.round(diffWeight * 7700 / (numberOfDays === 0 ? numberOfDays = 1 : numberOfDays));
  (0, _showResults.showResults)(age, gender, weight, height, BMI, status, statusColor, CPM, weightRange, BMR, activityStatus, hint, targWeight, targBMI, targStatus, targStatusColor, MonthsDisplayNumber, WeeksDisplayNumber, DaysDisplayNumber, diffCalories, diffWeight, diffWeightMonth, diffWeightWeek, diffWeightDay, activityTargStatus);

  function getBMIStatusAndColor(BMI) {
    var status;
    var color;

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
      color: color
    };
  }

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

  console.log("Wiek: ".concat(age, " lat"));
  console.log("P\u0142e\u0107: ".concat(gender === "male" ? "Mężczyzna" : "Kobieta"));
  console.log("Waga: ".concat(weight, " kg"));
  console.log("Wzrost: ".concat(height, " cm"));
  console.log("Numer aktywno\u015Bci fizycznej z listy: ".concat(activity));
  console.log("Waga docelowa: ".concat(targWeight, " kg"));
  console.log("Data rozpocz\u0119cia: ".concat(new Date(startDate).toLocaleString("pl")));
  console.log("Data zako\u0144czenia: ".concat(new Date(endDate).toLocaleString("pl")));
  console.log("----------------------WYNIKI----------------------");
  console.log("Aktualne BMI: ".concat(BMI));
  console.log("Aktualny status: ".concat(status));
  console.log("Color aktualnego statusu: ".concat(statusColor));
  console.log("Twoja waga powinna wynosi\u0107 pomi\u0119dzy: ".concat(weightRange));
  console.log("BMR: ".concat(BMR));
  console.log("Ilo\u015B\u0107 potrzebnych kalorii: ".concat(CPM, " kcal"));
  console.log("Aktualna aktywno\u015B\u0107 fizyczna: ".concat(activityStatus));
  console.log("Wzkaz\xF3wka: ".concat(hint));
  console.log("Waga docelowa: ".concat(targWeight));
  console.log("Docelowe BMI: ".concat(targBMI));
  console.log("Docelowe status: ".concat(targStatus));
  console.log("Color docelowego statusu: ".concat(targStatusColor));
  console.log("liczba miesi\u0119cy: ".concat(numberOfMonths));
  console.log("liczba tygodni: ".concat(numberOfWeeks));
  console.log("liczba dni: ".concat(numberOfDays));
  console.log("liczba wy\u015Bwietlanych miesi\u0119cy: ".concat(MonthsDisplayNumber));
  console.log("liczba wy\u015Bwietlanych tygodni: ".concat(WeeksDisplayNumber));
  console.log("liczba wy\u015Bwietlanych dni: ".concat(DaysDisplayNumber));
  console.log("Aby schudn\u0105\u0107/przyty\u0107 musisz codziennie spo\u017Cywa\u0107/pali\u0107: ".concat(diffCalories));
  console.log("Musisz zrzuci\u0107/przyty\u0107 ".concat(diffWeight, "kg"));
  console.log("liczba zrzuconych/przybranych kg na miesi\u0105c: ".concat(diffWeightMonth));
  console.log("liczba zrzuconych/przybranych kg na tydzie\u0144: ".concat(diffWeightWeek));
  console.log("liczba zrzuconych/przybranych kg na dzie\u0144: ".concat(diffWeightDay));
  console.log("Wymagana aktywno\u015B\u0107 fizyczna: ".concat(activityTargStatus));
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
  /*
  switch ("") {
    case ageInputValue.value:
      displayError(0);
      return;
    case gender:
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
  */

  var age = Number(ageInputValue.value);
  var weight = Number(weightInputValue.value);
  var height = Number(heightInputValue.value);
  var targWeight = Number(targWeightInputValue.value); // calculate(
  //   age,
  //   gender,
  //   weight,
  //   height,
  //   activity,
  //   targWeight,
  //   startDate,
  //   endDate
  // );

  (0, _calculate.calculate)(24, "male", 88, 181, 3, 75, new Date("2022-10-01").getTime(), new Date("2022-12-22").getTime());

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51960" + '/');

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
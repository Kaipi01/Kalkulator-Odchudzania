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
})({"js/changeTheme.js":[function(require,module,exports) {
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
},{}],"js/showList.js":[function(require,module,exports) {
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
},{}],"js/getGender.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gender = void 0;
exports.getGender = getGender;
var radioBtnFemale = document.querySelector("#female");
var radioBtnMale = document.querySelector("#male");
var gender;
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
},{}],"js/checkInputNumber.js":[function(require,module,exports) {
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
},{}],"js/showResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showResults = showResults;

var _getGender = require("./getGender");

function showResults() {
  var ageInputValue = document.querySelector("#ageValue");
  var weightInputValue = document.querySelector("#weightValue");
  var heightInputValue = document.querySelector("#heightValue");
  var selectListItem = document.querySelectorAll(".select__listItem");
  var selectValue = document.querySelector(".select");
  var targWeightInputValue = document.querySelector("#targWeightValue");
  var startDateInputValue = document.querySelector("#startDate");
  var endDateInputValue = document.querySelector("#endDate");
  var age = Number(ageInputValue.value);
  var weight = Number(weightInputValue.value);
  var height = Number(heightInputValue.value);
  var targWeight = Number(targWeightInputValue.value);
  var startDate = startDateInputValue.value;
  var endDate = endDateInputValue.value;
  var activity;
  selectListItem.forEach(function (li) {
    if (li.textContent === selectValue.textContent) {
      activity = li.value;
    }
  });
  console.log(age);
  console.log(_getGender.gender);
  console.log(weight);
  console.log(height);
  console.log(activity);
  console.log(targWeight);
  console.log(startDate);
  console.log(endDate);
}
},{"./getGender":"js/getGender.js"}],"js/toolTip.js":[function(require,module,exports) {
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
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _changeTheme = require("./changeTheme");

var _showList = require("./showList");

var _getGender = require("./getGender");

var _checkInputNumber = require("./checkInputNumber");

var _showResults = require("./showResults");

var _toolTip = require("./toolTip");

"use strict";

var themeBtn = document.querySelector(".themeBtn");
var inputDate = document.querySelectorAll(".inputDate");
var select = document.querySelector(".select");
var radioBtns = document.querySelectorAll(".radioBtn");
var inputsNumber = document.querySelectorAll(".inputNumber");
var inputRange = document.querySelector(".inputRange");
var submitBtn = document.querySelector(".calculator__submitBtn");
var hintIcon = document.querySelectorAll(".hintIcon");
submitBtn.addEventListener("click", _showResults.showResults); // change radio input color and check radio value

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
},{"./changeTheme":"js/changeTheme.js","./showList":"js/showList.js","./getGender":"js/getGender.js","./checkInputNumber":"js/checkInputNumber.js","./showResults":"js/showResults.js","./toolTip":"js/toolTip.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53947" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map
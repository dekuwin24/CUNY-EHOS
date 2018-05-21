webpackJsonp(["main"],{

/***/ "../../../../../../node_modules/jwt-decode/lib/atob.js":
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),

/***/ "../../../../../../node_modules/jwt-decode/lib/base64_url_decode.js":
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__("../../../../../../node_modules/jwt-decode/lib/atob.js");

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),

/***/ "../../../../../../node_modules/jwt-decode/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__("../../../../../../node_modules/jwt-decode/lib/base64_url_decode.js");

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.wrap {\r\n  color: black;\r\n  text-shadow: 1px 1px 1px #999;\r\n  background:grey;\r\n  margin-top: 25%;\r\n}\r\n.roles {\r\n  background-color: #E9E9E9;\r\n  position: relative;\r\n  width: 100%;\r\n  font-size: 50px;\r\n  height: 60px;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  margin: 50px auto;\r\n  font-family: fantasy;\r\n\r\n}\r\n.roles div{\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    animation: switch 10s linear 2s infinite normal;\r\n    /* Firefox: */\r\n    -moz-animation: switch 10s linear 2s infinite normal;\r\n    /* Safari and Chrome: */\r\n    -webkit-animation: switch 10s linear 2s infinite         normal;\r\n    /* Opera: */\r\n    -o-animation: switch 10s linear 2s infinite normal;\r\n}\r\n.roles p{\r\n    margin: 0;\r\n    line-height: 60px;\r\n}\r\n@keyframes switch\r\n{\r\n  0%{ top: -0px; }\r\n  15%  { top: -0px; }\r\n  25% {  top:-60px;}\r\n  35%{ top:-60px;}\r\n  45% {top:-120px;}\r\n  55%{top:-120px;}\r\n  65%{top:-180px;}\r\n  75%{top:-180px;}\r\n  85%{top:-240px;}\r\n  100%   { top: -240px; }\r\n}\r\n\r\n@-webkit-keyframes switch /* Safari and Chrome */\r\n{\r\n0%{ top: -0px; }\r\n  15%  { top: -0px; }\r\n  25% {  top:-60px;}\r\n  35%{ top:-60px;}\r\n  45% {top:-120px;}\r\n  55%{top:-120px;}\r\n  65%{top:-180px;}\r\n  75%{top:-180px;}\r\n  85%{top:-240px;}\r\n  100%   { top: -240px; }\r\n}\r\n.awrapper{\r\n  width: 500px;\r\n}\r\n.arrow{\r\n  vertical-align: middle;\r\n  margin-top: 4%;\r\n  margin-left: 44%;\r\n\r\n}\r\n.oval{\r\n  margin-top: 17%;\r\n  margin-left: 46%;\r\n  width: 90px;\r\n  height: 40px;\r\n  background-color: lightgray;\r\n  border-radius: 50%;\r\n}\r\n\r\n.aroles {\r\n  position: absolute;\r\n    width: 100%;\r\n    height: 200px;\r\n    text-align: center;\r\n\r\n}\r\n.aroles div{\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    animation: arrow 7s linear 2s infinite normal;\r\n    /* Firefox: */\r\n    -moz-animation: arrow 7s linear 2s infinite normal;\r\n    /* Safari and Chrome: */\r\n    -webkit-animation: arrow 7s linear 2s infinite         normal;\r\n    /* Opera: */\r\n    -o-animation: arrow 7s linear 2s infinite normal;\r\n}\r\n\r\n@keyframes arrow\r\n{\r\n  0%{ top: -0px; }\r\n  65%{top: 40px;}\r\n  100%   { top: -0px; }\r\n}\r\n\r\n@-webkit-keyframes arrow /* Safari and Chrome */\r\n{\r\n0%{ top: -0px; }\r\n  65%{top: 40px;}\r\n  100%   { top: -0px; }\r\n}\r\n\r\n.swrapper{\r\n  margin-top: 17%;\r\n  margin-left: 45.9%;\r\n  margin-bottom: 30%;\r\n\r\n}\r\n/*.srole .oval{\r\n  margin-top: 17%;\r\n  margin-left: 46%;\r\n  width: 90px;\r\n  height: 40px;\r\n  background-color: lightgray;\r\n  border-radius: 50%;\r\n}*/\r\n.sroles {\r\n  position: absolute;\r\n    width: auto;\r\n\r\n}\r\n.sroles div{\r\n    width: auto;\r\n    top: 0;\r\n    left: 0;\r\n    animation: shadow 7s linear 2s infinite normal;\r\n    /* Firefox: */\r\n    -moz-animation: shadow 7s linear 2s infinite normal;\r\n    /* Safari and Chrome: */\r\n    -webkit-animation: shadow 7s linear 2s infinite         normal;\r\n    /* Opera: */\r\n    -o-animation: shadow 7s linear 2s infinite normal;\r\n}\r\n\r\n@keyframes shadow\r\n{\r\n  0%{ height: 10px; width: 30px;}\r\n    65%{height : 40px; width: 50px;}\r\n    100%   { height: 10px;width: 30px;}\r\n}\r\n\r\n@-webkit-keyframes shadow /* Safari and Chrome */\r\n{\r\n  0%{ height: 10px; width: 30px;}\r\n    65%{height : 40px; width: 50px;}\r\n    100%   { height: 10px;width: 30px;}\r\n}\r\n\r\n.pIcon{\r\n  width: auto;\r\n  height: auto;\r\n  padding-top: 10%;\r\n  padding-left: 15%;\r\n  margin-bottom: 5%;\r\n  background-color: white;\r\n  border-radius:20% 10px 20% 20px;\r\n  /*border-radius: 30%;*/\r\n\r\n}\r\n .pIcon1{\r\n   border-radius: 10%;\r\n }\r\n .name{\r\n   background-color: white;\r\n   text-align: center;\r\n   font-style: oblique;\r\n   box-shadow: 5px 9px 8px 9px black;\r\n   padding-top:5%;\r\n   font-family: fantasy;\r\n }\r\n #bigContainer{\r\n   padding-top: 10%;\r\n   padding-bottom: 10%;\r\n   background-color: #7d4fad;\r\n   width: auto;\r\n }\r\n\r\n.p1{\r\n  margin-top:20%;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <div class=\"topbar\">\r\n    <app-navbar></app-navbar>\r\n  </div>\r\n</div>\r\n<!-- the crolling words-->\r\n<div class=\"wrap\">\r\n  <div class=\"roles\">\r\n    <div>\r\n      <p>WHO WE ARE </p>\r\n      <p>WE ARE WEB DEVELLOPPERS</p>\r\n      <p>WE ARE CCNY STUDENTS</p>\r\n      <p>WE LOVE WHAT WE DO </p>\r\n      <p>AND THIS IS WHO WE ARE</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- the arrow floating going up and down-->\r\n<div class=\"awrapper\">\r\n  <div class=\"aroles\">\r\n      <div>\r\n    <img  [src]=\"downArrow\" width=\"10%\" height=\"10%\">\r\n  </div>\r\n </div>\r\n</div>\r\n\r\n<!-- shadow of the arrow-->\r\n<div class=\"swrapper\">\r\n  <div class=\"sroles\">\r\n    <div>\r\n      <div class=\"oval\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--container that container the pictures and presentation of each team member?-->\r\n<div id=\"bigContainer\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <div class=\"pIcon\" style=\" padding-bottom: 10%;\">\r\n        <img class=\"pIcon1\"[src]=\"personIcon\" width=\"80%\" height=\"90%\">\r\n      </div>\r\n      <div class=\"name\">\r\n        <strong style=\"font-size:20px;\">Boris Kalmatsky</strong>\r\n        <br>(Back End Developer)\r\n    </div>\r\n    <div class=\"p1\">\r\n      Senior design design stdudent. Project\r\n      manager of the EHOS project.\r\n    </div>\r\n     </div>\r\n    <div class=\"col-sm\">\r\n      <div class=\"pIcon\" style=\" padding-bottom: 10%;\">\r\n        <img class=\"pIcon1\"[src]=\"steven\" width=\"80%\" height=\"90%\">\r\n      </div>\r\n      <div class=\"name\">\r\n      <strong style=\"font-size:20px;\">Steven Barrios</strong>\r\n      <br>(Front / back End Developer)\r\n    </div>\r\n    <div class=\"p1\">\r\n      Senior design student. Manager\r\n      of the the back and front end\r\n      developement.\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <div class=\"pIcon\" style=\" padding-bottom: 10%;\">\r\n        <img class=\"pIcon1\"[src]=\"emma\" width=\"80%\" height=\"90%\">\r\n      </div>\r\n      <div class=\"name\">\r\n      <strong style=\"font-size:20px;\">Dekuwin E. I. Kogda</strong>\r\n        <br>(Front End Developer)\r\n    </div>\r\n    <div class=\"p1\">\r\n      Senior design student. Developer of\r\n      the front end of the EHOS website\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <div class=\"pIcon\" style=\"padding-bottom: 10%; height:35%;\">\r\n        <img class=\"pIcon1\"[src]=\"Xiaohang\" width=\"80%\" height=\"95%\">\r\n      </div>\r\n      <div class=\"name\">\r\n      <strong style=\"font-size:20px;\">Xiaohang Zous</strong>\r\n      <br>(Front End Developer)\r\n    </div>\r\n    <div class=\"p1\">\r\n      Senior design student. Developer of\r\n      the front end of the EHOS website.\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.personIcon = '/assets/businessman-2579301_1280.jpg';
        this.downArrow = '/assets/arrowp.png';
        this.steven = '/assets/13321771_1735469733359340_4861809505736691502_n.jpg';
        this.emma = '/assets/emma.png';
        this.ZouXiaohang = '/assets/ZouXiaohang.jpg';
        this.Xiaohang = '/assets/ZouXiaohang copy.jpg';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error404_error404_component__ = __webpack_require__("../../../../../src/app/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lab_operator_dashboard_lab_operator_dashboard_component__ = __webpack_require__("../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ehos_dashboard_ehos_dashboard_component__ = __webpack_require__("../../../../../src/app/ehos-dashboard/ehos-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pickup_requests_pickup_requests_component__ = __webpack_require__("../../../../../src/app/pickup-requests/pickup-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lab_inspections_lab_inspections_component__ = __webpack_require__("../../../../../src/app/lab-inspections/lab-inspections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lab_quick_view_lab_quick_view_component__ = __webpack_require__("../../../../../src/app/lab-quick-view/lab-quick-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__error401_error401_component__ = __webpack_require__("../../../../../src/app/error401/error401.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__waste_request_waste_request_component__ = __webpack_require__("../../../../../src/app/waste-request/waste-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pickup_scheduler_pickup_scheduler_component__ = __webpack_require__("../../../../../src/app/pickup-scheduler/pickup-scheduler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__storage_storage_component__ = __webpack_require__("../../../../../src/app/storage/storage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__request_history_request_history_component__ = __webpack_require__("../../../../../src/app/request-history/request-history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// All our routes are stored in this variable
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AnyAuthGuard */]] },
    { path: 'ehos', component: __WEBPACK_IMPORTED_MODULE_5__ehos_dashboard_ehos_dashboard_component__["a" /* EhosDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["b" /* EhosAuthGuard */]],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_11__users_users_component__["a" /* UsersComponent */] },
            { path: 'pickup-requests', component: __WEBPACK_IMPORTED_MODULE_6__pickup_requests_pickup_requests_component__["a" /* PickupRequestsComponent */] },
            { path: 'pickup-schedule', component: __WEBPACK_IMPORTED_MODULE_15__pickup_scheduler_pickup_scheduler_component__["a" /* PickupSchedulerComponent */] },
            { path: 'lab-inspections', component: __WEBPACK_IMPORTED_MODULE_7__lab_inspections_lab_inspections_component__["a" /* LabInspectionsComponent */] },
            { path: 'storage', component: __WEBPACK_IMPORTED_MODULE_16__storage_storage_component__["a" /* StorageComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_15__pickup_scheduler_pickup_scheduler_component__["a" /* PickupSchedulerComponent */] }
        ]
    },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */] },
    { path: 'lab', component: __WEBPACK_IMPORTED_MODULE_4__lab_operator_dashboard_lab_operator_dashboard_component__["a" /* LabOperatorDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["c" /* LabAuthGuard */]],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'waste-pickup', component: __WEBPACK_IMPORTED_MODULE_14__waste_request_waste_request_component__["a" /* WasteRequestComponent */] },
            { path: 'supply-request', component: __WEBPACK_IMPORTED_MODULE_13__error401_error401_component__["a" /* Error401Component */] },
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_17__request_history_request_history_component__["a" /* RequestHistoryComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__lab_quick_view_lab_quick_view_component__["a" /* LabQuickViewComponent */] }
        ]
    },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["d" /* ProfileGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__error404_error404_component__["a" /* Error404Component */] } // A path that is not defined
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]
            ],
            providers: [],
            bootstrap: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Login Template';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error404_error404_component__ = __webpack_require__("../../../../../src/app/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lab_operator_dashboard_lab_operator_dashboard_component__ = __webpack_require__("../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_primeng_module__ = __webpack_require__("../../../../../src/app/shared-primeng.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_interceptor__ = __webpack_require__("../../../../../src/app/services/interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_waste_management_service__ = __webpack_require__("../../../../../src/app/services/waste-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ehos_dashboard_ehos_dashboard_component__ = __webpack_require__("../../../../../src/app/ehos-dashboard/ehos-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pickup_requests_pickup_requests_component__ = __webpack_require__("../../../../../src/app/pickup-requests/pickup-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ehos_quick_view_ehos_quick_view_component__ = __webpack_require__("../../../../../src/app/ehos-quick-view/ehos-quick-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__error401_error401_component__ = __webpack_require__("../../../../../src/app/error401/error401.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lab_inspections_lab_inspections_component__ = __webpack_require__("../../../../../src/app/lab-inspections/lab-inspections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__lab_quick_view_lab_quick_view_component__ = __webpack_require__("../../../../../src/app/lab-quick-view/lab-quick-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__waste_request_waste_request_component__ = __webpack_require__("../../../../../src/app/waste-request/waste-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pickup_scheduler_pickup_scheduler_component__ = __webpack_require__("../../../../../src/app/pickup-scheduler/pickup-scheduler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__storage_storage_component__ = __webpack_require__("../../../../../src/app/storage/storage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__corrosive_corrosive_component__ = __webpack_require__("../../../../../src/app/corrosive/corrosive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__request_history_request_history_component__ = __webpack_require__("../../../../../src/app/request-history/request-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_lab_inspection_service__ = __webpack_require__("../../../../../src/app/services/lab-inspection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__storage_list_storage_list_component__ = __webpack_require__("../../../../../src/app/storage-list/storage-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__error404_error404_component__["a" /* Error404Component */],
                __WEBPACK_IMPORTED_MODULE_9__lab_operator_dashboard_lab_operator_dashboard_component__["a" /* LabOperatorDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__ehos_dashboard_ehos_dashboard_component__["a" /* EhosDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pickup_requests_pickup_requests_component__["a" /* PickupRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__ehos_quick_view_ehos_quick_view_component__["a" /* EhosQuickViewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__error401_error401_component__["a" /* Error401Component */],
                __WEBPACK_IMPORTED_MODULE_24__lab_inspections_lab_inspections_component__["a" /* LabInspectionsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_26__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_27__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_28__lab_quick_view_lab_quick_view_component__["a" /* LabQuickViewComponent */],
                __WEBPACK_IMPORTED_MODULE_29__waste_request_waste_request_component__["a" /* WasteRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pickup_scheduler_pickup_scheduler_component__["a" /* PickupSchedulerComponent */],
                __WEBPACK_IMPORTED_MODULE_31__storage_storage_component__["a" /* StorageComponent */],
                __WEBPACK_IMPORTED_MODULE_32__corrosive_corrosive_component__["a" /* CorrosiveComponent */],
                __WEBPACK_IMPORTED_MODULE_33__request_history_request_history_component__["a" /* RequestHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_35__storage_list_storage_list_component__["a" /* StorageListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_primeng_module__["a" /* SharedPrimeNgModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_17_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_waste_management_service__["a" /* WasteManagementService */],
                __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["b" /* EhosAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["c" /* LabAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AnyAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["d" /* ProfileGuard */],
                __WEBPACK_IMPORTED_MODULE_34__services_lab_inspection_service__["a" /* LabInspectionService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__services_interceptor__["a" /* AuthInterceptor */],
                    multi: true,
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/corrosive/corrosive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/corrosive/corrosive.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover table-dark\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\"> ID </th>\r\n      <th scope=\"col\"> Creation date</th>\r\n      <th scope=\"col\"> Container type </th>\r\n      <th scope=\"col\"> Amount</th>\r\n      <th scope=\"col\"> Unit </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr class=\"\" data-toggle=\"collapse\" id=\"row1\" data-target=\".row1\">\r\n      <th scope=\"row\">1</th>\r\n      <td> heerer</td>\r\n      <td>reer</td>\r\n      <td>er</td>\r\n      <td>rere</td>\r\n    </tr>\r\n    <tr>\r\n      <td></td>\r\n      <table class=\" collapse in row1 table   table-dark\">\r\n        <thead>\r\n          <tr class=\"text-dark\">\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\">name</th>\r\n            <th scope=\"col\">percentage</th>\r\n          </tr>\r\n</thead>\r\n<tbody class=\"text-dark\">\r\n  <tr>\r\n    <th scope=\"row\">1</th>\r\n    <td>Mark</td>\r\n    <td>Otto</td>\r\n  </tr>\r\n\r\n</tbody>\r\n</table>\r\n      </tr>\r\n\r\n    <tr>\r\n      <th scope=\"row\"></th>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/corrosive/corrosive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorrosiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CorrosiveComponent = (function () {
    function CorrosiveComponent() {
    }
    CorrosiveComponent.prototype.ngOnInit = function () {
    };
    CorrosiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-corrosive',
            template: __webpack_require__("../../../../../src/app/corrosive/corrosive.component.html"),
            styles: [__webpack_require__("../../../../../src/app/corrosive/corrosive.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CorrosiveComponent);
    return CorrosiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ehos-dashboard/ehos-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Styling our dashboard for our EHOS so that it has an administrative feel to it. */\r\n\r\n/* The main container for rendering a view onto our app. */\r\n\r\n/* Static Sidebar */\r\nnav a {\r\n  color: #435966;\r\n  font-size: 16px;\r\n  margin: 0 0 0 30px;\r\n  display: block;\r\n}\r\n.nav-item {\r\n  width: 100%;\r\n  height: 50px;\r\n  display: block;\r\n  padding: 15px 0 0 25px;\r\n  cursor: pointer;\r\n  border-top: 1px solid #e3e9ea;\r\n  box-sizing: border-box;\r\n}\r\n.nav-item:hover {\r\n  background-color: #E9E9E9;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ehos-dashboard/ehos-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <div class=\"topbar\">\r\n      <app-navbar></app-navbar>\r\n  </div>\r\n  <!-- sidebar -->\r\n  <div id=\"sidebar\">\r\n    <nav class=\"bg-faded nav flex-md-column sidebar\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['home']\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['lab-inspections']\">Lab Inspections</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['pickup-requests']\">Pick Up Requests</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['storage']\">Storage</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['users']\">Users</a>\r\n      </li>\r\n    </nav>\r\n  </div>\r\n  <!-- main view -->\r\n  <div id=\"main-view\">\r\n    <div class=\"container-fluid mt-2\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <!-- Router outlet that will render its child routes -->\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ehos-dashboard/ehos-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EhosDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EhosDashboardComponent = (function () {
    function EhosDashboardComponent() {
    }
    EhosDashboardComponent.prototype.ngOnInit = function () {
    };
    EhosDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ehos-dashboard',
            template: __webpack_require__("../../../../../src/app/ehos-dashboard/ehos-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ehos-dashboard/ehos-dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_primeng_components_common_messageservice__["MessageService"]]
            // encapsulation: ViewEncapsulation.None
        })
    ], EhosDashboardComponent);
    return EhosDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ehos-quick-view/ehos-quick-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ehos-quick-view/ehos-quick-view.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/ehos-quick-view/ehos-quick-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EhosQuickViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EhosQuickViewComponent = (function () {
    function EhosQuickViewComponent() {
    }
    EhosQuickViewComponent.prototype.ngOnInit = function () {
    };
    EhosQuickViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ehos-quick-view',
            template: __webpack_require__("../../../../../src/app/ehos-quick-view/ehos-quick-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ehos-quick-view/ehos-quick-view.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], EhosQuickViewComponent);
    return EhosQuickViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error401/error401.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-401{\r\n    font-size: 150px;\r\n  }\r\n  .error-text{\r\n    font-size: 24px;\r\n  }\r\n  a{\r\n    color: #fff !important;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error401/error401.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"error-401\">401</div>\r\n  </div>\r\n</div>\r\n<div class=\"row text-center\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"error-text\">You are forbidden access to this page.</div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"margin-top: 15px;\">\r\n  <div class=\"col-sm-6 offset-sm-3 col-md-2 offset-md-5\">\r\n    <button routerLink=\"/\" type=\"button\" label=\"Go back\"  class=\"btn btn-secondary\">Go back</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/error401/error401.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error401Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error401Component = (function () {
    function Error401Component() {
    }
    Error401Component.prototype.ngOnInit = function () {
    };
    Error401Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error401',
            template: __webpack_require__("../../../../../src/app/error401/error401.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error401/error401.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], Error401Component);
    return Error401Component;
}());



/***/ }),

/***/ "../../../../../src/app/error404/error404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-404{\r\n  font-size: 150px;\r\n}\r\n.error-text{\r\n  font-size: 24px;\r\n}\r\na{\r\n  color: #fff !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <title>404 | Page not found!</title>\r\n  </head>\r\n  <body class=\"text-sm-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"error-404\">404</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"error-text\">This page does not exist.</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top: 15px;\">\r\n          <div class=\"col-sm-6 offset-sm-3 col-md-2 offset-md-5\">\r\n            <button routerLink=\"/\" type=\"button\" label=\"Go back\"  class=\"btn-secondary\">Go back</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/error404/error404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__("../../../../../src/app/error404/error404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error404/error404.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnyAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EhosAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LabAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProfileGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnyAuthGuard = (function () {
    function AnyAuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AnyAuthGuard.prototype.canActivate = function () {
        console.log(this.router.url);
        if (!this.user.tokenExpired()) {
            if (this.user.getRole() == 1) {
                this.router.navigate(['/ehos']);
                return true;
            }
            else if (this.user.getRole() == 2) {
                this.router.navigate(['/lab']);
                return true;
            }
        }
        return true;
    };
    AnyAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
    ], AnyAuthGuard);
    return AnyAuthGuard;
}());

var EhosAuthGuard = (function () {
    function EhosAuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    EhosAuthGuard.prototype.canActivate = function () {
        if (!this.user.tokenExpired()) {
            if (this.user.getRole() == 1) {
                return true;
            }
            else if (this.user.getRole() == 2) {
                this.router.navigate(['/lab']); // Redirect to a forbidden page instead
                return false;
            }
        }
        this.router.navigate(['/']);
        return false;
    };
    EhosAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
    ], EhosAuthGuard);
    return EhosAuthGuard;
}());

var LabAuthGuard = (function () {
    function LabAuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    LabAuthGuard.prototype.canActivate = function () {
        if (!this.user.tokenExpired()) {
            if (this.user.getRole() == 2) {
                return true;
            }
            else if (this.user.getRole() == 1) {
                this.router.navigate(['/ehos']); // Redirect to a forbidden page instead
                return false;
            }
        }
        this.router.navigate(['/']);
        return false;
    };
    LabAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
    ], LabAuthGuard);
    return LabAuthGuard;
}());

var ProfileGuard = (function () {
    function ProfileGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    ProfileGuard.prototype.canActivate = function () {
        if (!this.user.tokenExpired()) {
            return true;
        }
        return false;
    };
    ProfileGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
    ], ProfileGuard);
    return ProfileGuard;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\r\n  float: none;\r\n  color: #663399 !important;\r\n  font-size: 24px;\r\n  letter-spacing: .06em;\r\n  line-height: 46px;\r\n  font-weight: 600;\r\n}\r\n.logo span span{\r\n  color: #435966;\r\n}\r\np a {\r\n  color: #663399 !important;\r\n}\r\np a:hover {\r\n  color: #673AB7 !important;\r\n  text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row justify-content-center\" style=\"margin-top: 3.5%;\">\r\n    <div class=\"logo\">\r\n      <span>\r\n      CUNY\r\n      <span class=\"col-blue-grey\">EHOS</span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-1\">\r\n      <div class=\"col-sm-8 col-md-8 col-lg-8 offset-lg-2 offset-md-2 offset-sm-2\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <app-login *ngIf=\"loginFlag\"></app-login>\r\n            <app-register *ngIf=\"!loginFlag\"></app-register>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"row justify-content-center mt-4\">\r\n      <p class=\"col-blue-grey text-muted text-center font-bold\">{{loginFlag ? \"Not registered?\": \"Registered?\"}}<a href=\"javascript:void(0)\" (click)=\"toggleForms()\" >{{loginFlag ? \" Create an account\":\" Sign in\"}}</a></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.loginFlag = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toggleForms = function () {
        if (this.loginFlag) {
            this.loginFlag = false;
        }
        else {
            this.loginFlag = true;
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lab-inspections/lab-inspections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n  font-size: .875rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lab-inspections/lab-inspections.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group row\">\r\n          <div class=\"col-md-5 col-lg-4\">\r\n              <p class=\"h3\">Lab Inspections</p>\r\n          </div>\r\n          <div class=\"col-md-4 col-lg-3 offset-md-3 offset-lg-5 justify-content-right\">\r\n              <button class=\"btn btn-secondary\" [routerLink]=\"['../pickup-schedule']\">View Schedule</button>\r\n          </div>\r\n      </div>\r\n      <h4 class=\"text-muted\">Schedule an inspection below.</h4>\r\n      <div class=\"form-group row\">\r\n        <div class=\"input-group col-md-4\">\r\n          <p-calendar [(ngModel)]=\"date\" [showTime]=\"true\" [hourFormat]=\"24\" inputStyleClass=\"form-control\"></p-calendar>\r\n        </div>\r\n        <div class=\"input-group col-md-4\">\r\n          <p-dropdown [options]=\"inspectors\" [(ngModel)]=\"inspector\" optionLabel=\"name\" [filterBy]=\"name\" placeholder=\"Select a Inspector\" inputStyleClass=\"form-control\"></p-dropdown>\r\n        </div>\r\n        <div class=\"input-group col-md-4\">\r\n          <button class=\"btn btn-primary\" (click)=\"scheduleInspection()\">Inspect</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\" style=\"Background: rgba(160, 151, 151, 0.049)\">\r\n    <div class=\"card-body\" style=\"Background: rgba(234, 255, 230, 0.727)\">\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-md-12 col-lg-12\">\r\n                <p class=\"h3\">Lab Inspections Schedule History</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-12 col-lg-12\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead\">\r\n                <tr>\r\n                  <th scope=\"col\">Requested On</th>\r\n                  <th scope=\"col\">Inspector</th>\r\n                  <th scope=\"col\">Lab</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let inspection of history; let i=index;\">\r\n                  <td>{{inspection.requested}}</td>\r\n                  <td>{{inspection.inspector}}</td>\r\n                  <td>{{inspection.lab}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\" [sticky]=\"true\" [baseZIndex]=\"11100\"></p-growl>\r\n"

/***/ }),

/***/ "../../../../../src/app/lab-inspections/lab-inspections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabInspectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_waste_management_service__ = __webpack_require__("../../../../../src/app/services/waste-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_lab_inspection_service__ = __webpack_require__("../../../../../src/app/services/lab-inspection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LabInspectionsComponent = (function () {
    function LabInspectionsComponent(messageService, user, waste, insp) {
        this.messageService = messageService;
        this.user = user;
        this.waste = waste;
        this.insp = insp;
        this.msgs = [];
    }
    LabInspectionsComponent.prototype.scheduleInspection = function () {
        var _this = this;
        var inspection = {
            inspector: this.inspector._id,
            lab: this.inspector.department + ", " + this.inspector.building + " Room " + this.inspector.room,
            requested: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
            requestId: '',
            start: __WEBPACK_IMPORTED_MODULE_1_moment__(this.date).format(),
            end: '',
            eventType: 2,
            serviced: false
        };
        this.insp.createRequest(inspection).then(function (ins) {
            _this.messageService.add({ severity: 'success', summary: 'Done!', detail: 'Inspection was created!' });
        }).catch(function (rejected) {
            _this.messageService.add({ severity: 'error', summary: 'ERROR!', detail: 'An error occurred.' });
            if (rejected.code == 403) {
                console.log("redirect");
            }
        });
        console.log(inspection);
    };
    LabInspectionsComponent.prototype.getData = function () {
        var _this = this;
        this.insp.getRequests().then(function (response) {
            _this.history = response.inspections;
            _this.history.forEach(function (element) {
                element.requested = __WEBPACK_IMPORTED_MODULE_1_moment__(element.requested).format('MMMM Do YYYY');
                _this.user.getUser(element.inspector).subscribe(function (data) {
                    element.inspector = data.user.first + " " + data.user.last;
                });
            });
        }).catch(function (reason) { });
    };
    LabInspectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getUsers().then(function (response) {
            _this.inspectors = response.users;
            _this.inspectors.forEach(function (element, index) {
                if (element.privilege === 1 && element.approved === true) {
                    _this.inspectors[_this.inspectors.indexOf(element)]["name"] = element.first + ' ' + element.last;
                }
                ;
            });
            for (var i = 0; i < _this.inspectors.length; i++) {
                if (_this.inspectors[i].privilege === 2 || _this.inspectors[i].approved === false) {
                    _this.inspectors.splice(i, 1);
                    i--;
                }
            }
            ;
        }).catch(function (reason) {
            console.log(reason);
        });
        this.getData();
    };
    LabInspectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lab-inspections',
            template: __webpack_require__("../../../../../src/app/lab-inspections/lab-inspections.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lab-inspections/lab-inspections.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_waste_management_service__["a" /* WasteManagementService */], __WEBPACK_IMPORTED_MODULE_5__services_lab_inspection_service__["a" /* LabInspectionService */]])
    ], LabInspectionsComponent);
    return LabInspectionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<div id=\"lab-view\">\r\n  <!-- Clickable cards that will redirect you to the corresponding component -->\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabOperatorDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabOperatorDashboardComponent = (function () {
    function LabOperatorDashboardComponent() {
    }
    LabOperatorDashboardComponent.prototype.ngOnInit = function () {
    };
    LabOperatorDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lab-operator-dashboard',
            template: __webpack_require__("../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LabOperatorDashboardComponent);
    return LabOperatorDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lab-quick-view/lab-quick-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lab-quick-view/lab-quick-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-4 offset-sm-1\">\r\n    <a href=\"#\" [routerLink]=\"['../history']\">\r\n      <div class=\"card info-box\">\r\n        <div class=\"card-body\">\r\n          <img src=\"../assets/svg/materials.svg\" alt=\"\">\r\n          <p class=\"h4 col-blue-grey\">Your Request History</p>\r\n        </div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-sm-4 offset-sm-2\">\r\n    <a href=\"#\" [routerLink]=\"['../waste-pickup']\">\r\n      <div class=\"card info-box\">\r\n        <div class=\"card-body\">\r\n          <img src=\"../assets/svg/pickup.svg\" class=\"img-responsive\">\r\n          <p class=\"h4 col-blue-grey\">Request Waste Pickup</p>\r\n        </div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/lab-quick-view/lab-quick-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabQuickViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LabQuickViewComponent = (function () {
    function LabQuickViewComponent(user, auth, router) {
        this.user = user;
        this.auth = auth;
        this.router = router;
    }
    LabQuickViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getProfile().subscribe(function (success) { }, function (error) {
            if (error.status == 403) {
                _this.auth.unsetUser();
                _this.router.navigate(['/']);
            }
        });
    };
    LabQuickViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lab-quick-view',
            template: __webpack_require__("../../../../../src/app/lab-quick-view/lab-quick-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lab-quick-view/lab-quick-view.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], LabQuickViewComponent);
    return LabQuickViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n  color: #fff !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"card-title text-center col-blue-grey\" style=\"font-weight: 700;\">SIGN IN</h5>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group row\">\r\n      <div class=\"col-md-10 offset-md-1\">\r\n          <input class=\"form-control\" [ngClass]= \"{'is-invalid': loginForm.controls.email.errors && loginForm.controls.email.dirty, 'valid': !loginForm.controls.email.errors}\" type=\"text\" placeholder=\"email\" name=\"email\" formControlName=\"email\">\r\n          <div *ngIf=\"loginForm.controls.email.errors && loginForm.controls.email.dirty\" class=\"invalid-feedback\">Please enter an email.</div>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n        <input class=\"form-control\" type=\"password\" placeholder=\"password\" name=\"password\" formControlName=\"password\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n<p-sidebar [(visible)]=\"incorrectCredentials\" position=\"bottom\" [baseZIndex]=\"10000\">\r\n  <h1 style=\"font-weight:normal\">Uh oh!</h1>\r\n  <p>{{message}}</p>\r\n  <button type=\"button\" (click)=\"incorrectCredentials=false\" class=\"btn btn-primary\">Okay</button>\r\n</p-sidebar>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    // Inside constructor, instantiate FormBuilder class
    function LoginComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.incorrectCredentials = false;
        this.createForm(); // create the form upon initialization
    }
    // Have method that will create the register form entities
    LoginComponent.prototype.createForm = function () {
        // group method will declare our form controls and also we can apply built in validators
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    // Have a method handler for form submission
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.loginUser({ email: this.loginForm.get('email').value, password: this.loginForm.get('password').value })
            .subscribe(function (data) {
            // Response should already be in JSON format
            console.log(data);
            if (!data.success) {
                console.log("OPEN DIALOG");
                _this.message = data.message;
                _this.incorrectCredentials = true;
            }
            else {
                _this.authService.setUser(data.token, data.privilege, data.expires); // Store the web token and the role on the browser
                if (data.privilege == 1) {
                    _this.router.navigate(['/ehos']);
                }
                else if (data.privilege == 2) {
                    _this.router.navigate(['/lab']);
                }
            }
        }, function (err) {
            _this.message = err.error.message;
            _this.incorrectCredentials = true;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n  z-index: 1000;\r\n}\r\na.nav-link {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  height: 100%;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  transition: background-color .3s;\r\n  min-width: 75px;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n  height: 100%;\r\n  line-height: 70px;\r\n}\r\n\r\na.menu-button {\r\n  display: none;\r\n  color: #fff;\r\n  font-size: 24px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 60px;\r\n  height: 100%;\r\n  line-height: 58px;\r\n  text-align: center;\r\n  transition: background-color .3s;\r\n}\r\na.menu-button:hover {\r\n  background-color: #663399;\r\n  color: #fff\r\n}\r\n.main-options {\r\n  display: inline-block;\r\n  list-style-type: none;\r\n  float: right;\r\n  margin: 0 40px 0 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n.logo {\r\n  margin-left: 45px;\r\n  margin-top: 15px;\r\n  display: inline-block;\r\n}\r\n@media screen and (max-width: 64em) {\r\n  a.menu-button {\r\n    display: inline-block;\r\n  }\r\n  .main-options {\r\n    background-color: #663399;\r\n    float: none;\r\n    width: 100%;\r\n    height: 40px;\r\n    margin: 0;\r\n    text-align: center;\r\n  }\r\n  .logo {\r\n    margin: 7px 0;\r\n  }\r\n  a.nav-link {\r\n    cursor: pointer;\r\n    padding-bottom: 0;\r\n    line-height: 25px;\r\n  }\r\n\r\n}\r\nnav a {\r\n  color: #435966;\r\n  font-size: 16px;\r\n  margin: 0 0 0 30px;\r\n  display: block;\r\n}\r\nli.nav-item {\r\n  width: 100%;\r\n  height: 50px;\r\n  display: block;\r\n  padding: 15px 0 0 25px;\r\n  cursor: pointer;\r\n  border-top: 1px solid #e3e9ea;\r\n  box-sizing: border-box;\r\n}\r\nli.nav-item:hover {\r\n  background-color: #E9E9E9;\r\n}\r\nnav.sidebar {\r\n  padding-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<a (click)=\"sidebarDisplay=true;\" *ngIf=\"isEhos\" class=\"menu-button\">\r\n    <i class=\"fa fa-bars\"></i>\r\n</a>\r\n<div class=\"logo\">\r\n    <a class=\"navbar-brand\" href=\"#\">CCNY EHOS PORTAL</a>\r\n</div>\r\n<ul class=\"nav main-options justify-content-center\">\r\n  <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\r\n  <a class=\"nav-item nav-link\" routerLink=\"/about\">About</a>\r\n  <a class=\"nav-item nav-link\" routerLink=\"/profile\">Profile</a>\r\n  <a class=\"nav-item nav-link\" (click)=\"logout()\">Log out</a>\r\n</ul>\r\n<p-sidebar [(visible)]=\"sidebarDisplay\" *ngIf=\"isEhos\" [baseZIndex]=\"10000\">\r\n  <nav class=\"nav mt-3 sidebar\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['home']\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['lab-inspections']\">Lab Inspections</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['pickup-requests']\">Pick Up Requests</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['storage']\">Storage</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['users']\">Users</a>\r\n    </li>\r\n  </nav>\r\n</p-sidebar>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isEhos = false;
        this.sidebarDisplay = false;
    }
    NavbarComponent.prototype.logout = function () {
        this.authService.unsetUser();
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.authService.getRole() == 1) {
            this.isEhos = true;
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pickup-requests/pickup-requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info-box .icon i {\r\n    padding: 2.5px 5px;    \r\n    font-size: 1.5em;\r\n    line-height: 1.75rem;\r\n    display: block;\r\n    position: relative;\r\n    margin-bottom: 1.5px;\r\n    text-align: center;\r\n    position: relative;\r\n    color: #FFF;\r\n}\r\n.info-box {\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\r\n    height: 80px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    cursor: default;\r\n    background-color: #673AB7;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.info-box .icon {\r\n    display: inline-block;\r\n    text-align: center;\r\n    background: #6c757d;\r\n    /* background-color: rgba(0, 0, 0, 0.12); */\r\n}\r\n.info-box .content {\r\n    color: #FFF;\r\n    display: inline-block;\r\n    padding: 2.5px 5px;\r\n}\r\n.info-box .text {\r\n    margin-top: 5px;\r\n    font-size: 0.8rem;\r\n}\r\n.center {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\na:hover {\r\n    text-decoration: none !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pickup-requests/pickup-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-md-5 col-lg-4\">\r\n          <p class=\"h3\">New Requests</p>\r\n          <p class=\"text-muted\">Sorted by date requested</p>\r\n      </div>\r\n      <div class=\"col-md-4 col-lg-3 offset-md-3 offset-lg-5 justify-content-right\">\r\n        <button class=\"btn btn-secondary\" [routerLink]=\"['../pickup-schedule']\">View Schedule</button>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let request of requests; let i=index;\">\r\n      <div class=\"form-group row\" *ngIf=\"request.pending\">\r\n        <div class=\"col-12\">\r\n          <div class=\"info-box\">\r\n              <div class=\"col-md-4 col-lg-3 icon\">\r\n                <i>{{ request.requested.split(\" \")[0] +\" \" + request.requested.split(\" \")[1]}}</i>\r\n                <i>{{ request.requested.split(\" \")[2] }}</i>\r\n              </div>  \r\n              <div class=\"col-md-5 col-lg-5 content\">\r\n                <div class=\"text\">\r\n                  <!-- Need actual name here, not their ID {{request.request}} returns some number which is their ID-->\r\n                    {{request.name}}\r\n                </div>\r\n                <div class=\"text\">\r\n                  Location: {{request.location}}\r\n                </div>\r\n                <div class=\"text\">\r\n                  Items:  {{request.items.length}}\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-lg-2 offset-lg-2 center\">\r\n                <button class=\"btn btn-outline-secondary\" (click)=\"wastePickupDialog(i)\">Schedule</button>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-sidebar [(visible)]=\"dialog\" [fullScreen]=\"true\" [style]=\"{'overflow-y': 'scroll'}\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"h3\">Waste Pickup Details</p>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-3 col-lg-3\">\r\n        <label for=\"requester\">Requested by</label>\r\n        <input type=\"text\" id=\"requester\" class=\"form-control\" #requester readonly>\r\n      </div>\r\n      <div class=\"form-group col-md-3 col-lg-3\">\r\n        <label for=\"location\">Location</label>\r\n        <input type=\"text\" id=\"location\" class=\"form-control\" #location readonly>\r\n      </div>\r\n      <div class=\"form-group col-md-3 col-lg-3\">\r\n        <label for=\"requested\">Requested</label>\r\n        <input type=\"text\" id=\"requested\" class=\"form-control\" #requested readonly>\r\n      </div>\r\n    </div>\r\n    <p class=\"h3\">Waste Items</p>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-12\">\r\n          <p-accordion>\r\n              <p-accordionTab header=\"Waste {{i+1}}\" *ngFor=\"let item of requestItems; let i=index;\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group col-4\">\r\n                    <label for=\"container\">Container Type</label>\r\n                    <input type=\"text\" id=\"container\" class=\"form-control\" value=\"{{item.containerType}}\" readonly>\r\n                  </div>\r\n                  <div class=\"form-group col-4\">\r\n                    <label for=\"hazard\">Hazard Class</label>\r\n                    <input type=\"text\" id=\"hazard\" class=\"form-control\" value=\"{{item.hazardClass}}\" readonly>\r\n                  </div>\r\n                  <div class=\"form-group col-4\">\r\n                    <label for=\"items\">Chemicals</label>\r\n                    <input type=\"text\" id=\"items\" class=\"form-control\" value=\"{{requestItems[i].chemicals.length}}\" readonly>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-8\">\r\n                    <p class=\"h5\">Chemicals</p>\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-light\">\r\n                          <tr>\r\n                            <th scope=\"col\">Name</th>\r\n                            <th scope=\"col\">Percent Fraction</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let chemical of requestItems[i].chemicals; let i=index;\">\r\n                            <td>{{chemical.name}}</td>\r\n                            <td>{{chemical.percentFraction}}%</td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                  </div>\r\n                </div>\r\n              </p-accordionTab>\r\n          </p-accordion>\r\n      </div>\r\n    </div>\r\n    <p class=\"h3\">Schedule pickup date</p>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-md-4 col-lg-3\">\r\n          <p-calendar [(ngModel)]=\"date\" [showTime]=\"true\" [hourFormat]=\"24\" inputStyleClass=\"form-control\"></p-calendar>\r\n      </div>\r\n      <div class=\"col-md-3 col-lg-2\">\r\n        <button class=\"btn btn-primary\" [disabled]=\"!date\" (click)=\"schedulePickup()\">Schedule</button>      \r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-md-3 col-lg-2\">\r\n        <button class=\"btn btn-danger\">Delete</button>      \r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</p-sidebar>\r\n<p-growl [(value)]=\"msgs\" [sticky]=\"true\" [baseZIndex]=\"11100\"></p-growl>\r\n"

/***/ }),

/***/ "../../../../../src/app/pickup-requests/pickup-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__ = __webpack_require__("../../../../../src/app/services/waste-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PickupRequestsComponent = (function () {
    function PickupRequestsComponent(waste, messageService, user) {
        this.waste = waste;
        this.messageService = messageService;
        this.user = user;
        this.dialog = false;
        this.msgs = [];
    }
    PickupRequestsComponent.prototype.wastePickupDialog = function (i) {
        this.dialog = true;
        this.requester.nativeElement.value = this.requests[Number(i)].name;
        this.requested.nativeElement.value = this.requests[Number(i)].requested;
        this.location.nativeElement.value = this.requests[Number(i)].location;
        this.requestItems = this.requests[Number(i)].items;
        this.requestId = this.requests[Number(i)]._id;
        this.index = Number(i);
    };
    PickupRequestsComponent.prototype.schedulePickup = function () {
        var _this = this;
        this.dialog = false;
        var pickup = {
            requestId: this.requestId,
            start: __WEBPACK_IMPORTED_MODULE_2_moment__(this.date).format(),
            eventType: 1,
            serviced: false
        };
        this.waste.schedulePickup(pickup).subscribe(function (response) {
            if (response.success) {
                // Must patch the pending attribute inside the Waste Pickups table, unless we decide to use a trigger for this.
                _this.waste.isScheduled({ _id: _this.requestId, pending: false }).subscribe(function (valid) { }, function (error) {
                    _this.messageService.add({ severity: 'error', summary: 'ERROR!', detail: 'An error occured: \n' + response.message });
                });
                _this.requests[Number(_this.index)].pending = false; // Update the local array
                _this.messageService.add({ severity: 'success', summary: 'Scheduled!', detail: 'Request has been scheduled! Take a look at the updated schedule to make further updates.' });
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'ERROR!', detail: 'An error occured: \n' + response.message });
            }
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'ERROR!', detail: 'An error occured: \n' + error });
        });
    };
    PickupRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.waste.getRequests().then(function (response) {
            _this.requests = response.requests;
            _this.requests.forEach(function (element) {
                element.requested = __WEBPACK_IMPORTED_MODULE_2_moment__(element.requested).format('MMMM Do YYYY');
            });
        }).catch(function (reason) {
            if (reason.status === 403) {
                // redirect to login page
                console.log("Your session has timed out, returning to login screen");
            }
        }).then(function (done) {
            _this.requests.forEach(function (element, index) {
                _this.user.getUser(element.userId).subscribe(function (response) {
                    _this.requests[index].name = response.user.first + " " + response.user.last;
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('requested'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PickupRequestsComponent.prototype, "requested", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('requester'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PickupRequestsComponent.prototype, "requester", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('location'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PickupRequestsComponent.prototype, "location", void 0);
    PickupRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pickup-requests',
            template: __webpack_require__("../../../../../src/app/pickup-requests/pickup-requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pickup-requests/pickup-requests.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"]]
            // encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__["a" /* WasteManagementService */], __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], PickupRequestsComponent);
    return PickupRequestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pickup-scheduler/pickup-scheduler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-check .form-check-label .input-helper:before {\r\n  left: 15px;\r\n}\r\n.form-check .form-check-label .input-helper:after { \r\n  left: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pickup-scheduler/pickup-scheduler.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <p-schedule [events]=\"requests\" [header]=\"headerConfig\" (onEventClick)=\"oneventclick($event)\"></p-schedule>\r\n    </div>\r\n</div>\r\n<p-dialog header=\"Request Details\" [(visible)]=\"dialogVisible\" [contentStyle]=\"{'max-height':'455px', 'min-height':'450px'}\" [width]=\"700\" [height]=\"500\">\r\n    <div class=\"container-fluid\" *ngIf=\"requests\">\r\n      <h2 class=\"card-title\">{{selectedRequest.eventType == 1 ? \"Waste Pickup\" : \"Lab Inspection\"}}</h2>\r\n      <div *ngIf=\"selectedRequest.eventType == 1\">\r\n        <table class=\"table\" *ngIf=\"selectedRequest\">\r\n          <thead>\r\n              <tr>\r\n                <th scope=\"col\">Scheduled Time</th>\r\n                <th scope=\"col\">Lab Manager</th>\r\n                <th scope=\"col\">Location</th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>{{selectedRequest.requested}}</td>\r\n              <td>{{selectedRequest.requester}}</td>\r\n              <td>{{selectedRequest.location}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <h2 class=\"card-title\">Items</h2>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12\">\r\n            <p-accordion>\r\n              <p-accordionTab header=\"Waste {{i+1}}\" *ngFor=\"let item of selectedRequest.items; let i=index;\">\r\n                <div class=\"container-fluid\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group col-4\">\r\n                      <label for=\"container\">Container Type</label>\r\n                      <input type=\"text\" id=\"container\" class=\"form-control\" value=\"{{item.containerType}}\" readonly>\r\n                    </div>\r\n                    <div class=\"form-group col-4\">\r\n                      <label for=\"hazard\">Hazard Class</label>\r\n                      <input type=\"text\" id=\"hazard\" class=\"form-control\" value=\"{{item.hazardClass}}\" readonly>\r\n                    </div>\r\n                    <div class=\"form-group col-4\">\r\n                      <label for=\"items\">Chemicals</label>\r\n                      <input type=\"text\" id=\"items\" class=\"form-control\" value=\"{{selectedRequest.items[i].chemicals.length}}\" readonly>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                      <p class=\"h5\">Chemicals</p>\r\n                      <table class=\"table\">\r\n                          <thead class=\"thead-light\">\r\n                            <tr>\r\n                              <th scope=\"col\">Name</th>\r\n                              <th scope=\"col\">Percent Fraction</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let chemical of selectedRequest.items[i].chemicals; let i=index;\">\r\n                              <td>{{chemical.name}}</td>\r\n                              <td>{{chemical.percentFraction}}%</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n          </div>\r\n        </div>  \r\n      </div>\r\n      <div *ngIf=\"selectedRequest.eventType == 2\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Requested On</th>\r\n              <th scope=\"col\">Service Time</th>\r\n              <th scope=\"col\">Inspector</th>\r\n              <th scope=\"col\">Lab</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>{{selectedRequest.requested}}</td>\r\n              <td>{{selectedRequest.start}}</td>\r\n              <td>{{selectedRequest.requester}}</td>\r\n              <td>{{selectedRequest.location}}</td>\r\n            </tr>\r\n          </tbody>\r\n          </table>        \r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"serviced\" [formControl]=\"serviced\" readonly>\r\n              Serviced\r\n              <i class=\"input-helper\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <button class=\"btn btn-primary\" (click)=\"displayService=true\" [disabled]=\"serviced.value\">Serviced!</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\" [sticky]=\"true\"></p-growl>\r\n<div class=\"row mt-5\" *ngIf=\"loading\">\r\n  <div class=\"col-6 offset-6 mt-3\">\r\n    <p-progressSpinner></p-progressSpinner>\r\n  </div>\r\n</div>\r\n<p-dialog header=\"Confirm!\" [(visible)]=\"displayService\" modal=\"modal\" [responsive]=\"true\" [width]=\"400\" [minWidth]=\"400\">\r\n  <span class=\"text-muted\">\r\n      Are you sure you this request was serviced?\r\n  </span>\r\n  <p-footer>\r\n    <div class=\"row\">\r\n      <div class=\"col-3 offset-6\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"serviceRequest()\">Yes</button>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"displayService=false\">No</button>\r\n      </div>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "../../../../../src/app/pickup-scheduler/pickup-scheduler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupSchedulerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__ = __webpack_require__("../../../../../src/app/services/waste-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fullcalendar__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_lab_inspection_service__ = __webpack_require__("../../../../../src/app/services/lab-inspection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as $ from 'jquery';









var PickupSchedulerComponent = (function () {
    function PickupSchedulerComponent(waste, messageService, insp, router, user, userId) {
        this.waste = waste;
        this.messageService = messageService;
        this.insp = insp;
        this.router = router;
        this.user = user;
        this.userId = userId;
        this.loading = false;
        this.displayService = false;
        this.serviced = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]();
        this.selectedRequest = {};
        this.dialogVisible = false;
        this.msgs = [];
    }
    PickupSchedulerComponent.prototype.getData = function () {
        var _this = this;
        this.loading = true;
        this.serviced.disable();
        this.waste.getSchedule().then(function (response) {
            console.log(response.schedule);
            _this.loading = false;
            _this.requests = response.schedule;
            _this.requests.forEach(function (element, index) {
                if (element.eventType === 1) {
                    _this.requests[index]["color"] = "#ff71fe";
                }
                else {
                    _this.requests[index]["color"] = "#7FFF00";
                }
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            if (error.status === 403) {
                _this.user.unsetUser();
                _this.router.navigate(['/']);
            }
            _this.loading = false;
        }).catch(function (reason) {
            console.log(reason);
            _this.loading = false;
        });
    };
    PickupSchedulerComponent.prototype.oneventclick = function (e) {
        var _this = this;
        this.dialogVisible = true;
        Object.assign(this.selectedRequest, e.calEvent); // Create immutability on calEvent  
        this.loading = true;
        if (this.selectedRequest.eventType == 1) {
            this.waste.getRequest(e.calEvent.requestId).then(function (data) {
                _this.selectedRequest.requested = __WEBPACK_IMPORTED_MODULE_2_moment__(_this.selectedRequest.start).format("hh:mm a");
                _this.selectedRequest.location = data.request.location; // Later will be inner join
                _this.userId.getUser(data.request.userId).subscribe(function (data) {
                    if (data.success) {
                        _this.selectedRequest.requester = data.user.first + " " + data.user.last;
                    }
                });
                _this.selectedRequest.items = data.request.items;
                _this.serviced.setValue(_this.selectedRequest.serviced);
                _this.loading = false;
            }).catch(function (reason) {
            });
        }
        else {
            this.insp.getRequest(e.calEvent.requestId).then(function (data) {
                _this.selectedRequest.requested = __WEBPACK_IMPORTED_MODULE_2_moment__(data.inspection.requested).format("MMMM Do YYYY hh:mm a");
                _this.selectedRequest.start = __WEBPACK_IMPORTED_MODULE_2_moment__(_this.selectedRequest.start).format("hh:mm a");
                _this.selectedRequest.location = data.inspection.lab;
                _this.userId.getUser(data.inspection.inspector).subscribe(function (data) {
                    if (data.success) {
                        _this.selectedRequest.requester = data.user.first + " " + data.user.last;
                    }
                });
                _this.serviced.setValue(_this.selectedRequest.serviced);
                _this.loading = false;
            }).catch(function (reason) {
            });
        }
    };
    PickupSchedulerComponent.prototype.serviceRequest = function () {
        var _this = this;
        // TODO
        this.displayService = false;
        var request = {
            _id: this.selectedRequest._id,
            id: this.selectedRequest.requestId,
            eventType: this.selectedRequest.eventType,
            serviced: true
        };
        console.log(this.selectedRequest.items);
        this.waste.isServiced(request).subscribe(function (data) {
            _this.dialogVisible = false;
            _this.messageService.add({ severity: 'success', summary: 'Done!', detail: 'Request was serviced!' });
            var temp = _this.requests; // create a copy
            var temp_index = _this.requests.findIndex(function (el) { return el._id == _this.selectedRequest._id; });
            temp[temp_index].serviced = true;
            _this.selectedRequest.items.forEach(function (element, index) {
                element.requestId = temp[temp_index].requestId;
                _this.waste.storeWaste(element).subscribe(function (data) {
                }, function (error) {
                    console.log(error);
                });
            });
            _this.requests = _this.requests.filter(function (request) { return request._id != _this.selectedRequest._id; }); // remove it from list
            setTimeout(function () {
                return _this.requests = temp;
            }, 3000);
        }, function (error) {
            if (error.status === 403) {
                // redirect to login page
                console.log("Your session has timed out, returning to login screen");
                _this.user.unsetUser();
                _this.router.navigate(['/']);
            }
        });
    };
    PickupSchedulerComponent.prototype.ngOnInit = function () {
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        this.getData();
    };
    PickupSchedulerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pickup-scheduler',
            template: __webpack_require__("../../../../../src/app/pickup-scheduler/pickup-scheduler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pickup-scheduler/pickup-scheduler.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__["MessageService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__["a" /* WasteManagementService */], __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__["MessageService"],
            __WEBPACK_IMPORTED_MODULE_6__services_lab_inspection_service__["a" /* LabInspectionService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */]])
    ], PickupSchedulerComponent);
    return PickupSchedulerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\r\n    font-size: 0.8rem !important;\r\n}\r\n.form-control {\r\n    font-size: 0.75rem !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<div class=\"row mt-3\" style=\"padding-top:80px;\">\r\n  <div class=\"col-sm-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2\">\r\n    <div class=\"card info-box\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h3 class=\"card-title\">Personal Details</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row text-muted\">\r\n          <div class=\"col-3\">\r\n            <label for=\"role\">Role</label>\r\n            <input class=\"form-control text-muted\" id=\"role\" #role readonly>\r\n          </div>\r\n          <div class=\"col-3\">\r\n              <label for=\"department\">Department</label>            \r\n            <input class=\"form-control text-muted\" id=\"department\" #department readonly>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <label for=\"building\">Building</label>\r\n            <input class=\"form-control text-muted\" id=\"building\" #building readonly>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <label for=\"room\">Room</label>            \r\n            <input class=\"form-control text-muted\" id=\"room\" #room readonly>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-4\">\r\n            <label for=\"first\">\r\n                First Name\r\n            </label>\r\n            <input class=\"form-control\" id=\"first\" type=\"text\" #first readonly>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <label for=\"last\">\r\n                Last Name\r\n            </label>\r\n            <input class=\"form-control\" id=\"last\" type=\"text\" #last readonly>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-4 offset-2\">\r\n            <label for=\"email\">\r\n                Email\r\n            </label>\r\n            <input class=\"form-control\" id=\"email\" type=\"email\" #email>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <label for=\"phone\">\r\n                Phone Number\r\n            </label>\r\n            <input class=\"form-control\" id=\"phone\" type=\"text\" #phone>\r\n        </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-3 offset-3\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateProfile()\">Update</button>        \r\n          </div>\r\n          <div class=\"col-3\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getProfile()\">Cancel</button>        \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\" [sticky]=\"true\" [baseZIndex]=\"11100\"></p-growl>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(user, messageService, auth, router) {
        this.user = user;
        this.messageService = messageService;
        this.auth = auth;
        this.router = router;
        this.msgs = [];
    }
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.user.getProfile().subscribe(function (data) {
            if (data) {
                _this.email.nativeElement.value = data.user.email;
                _this.originalEmail = data.user.email;
                _this.first.nativeElement.value = data.user.first;
                _this.last.nativeElement.value = data.user.last;
                _this.phone.nativeElement.value = data.user.phone;
                _this.role.nativeElement.value = data.user.role == 1 ? "EHOS" : "Lab Operator";
                _this.department.nativeElement.value = data.user.department;
                _this.building.nativeElement.value = data.user.building;
                _this.room.nativeElement.value = data.user.room;
            }
        }, function (error) {
            if (error.status == 403) {
                _this.auth.unsetUser();
                _this.router.navigate(['/']);
            }
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        var userInfo = {
            email: this.email.nativeElement.value,
            first: this.first.nativeElement.value,
            last: this.last.nativeElement.value,
            phone: this.phone.nativeElement.value
        };
        var user = {
            email: this.originalEmail,
            user: userInfo
        };
        this.user.patchProfile(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.messageService.add({ severity: 'success', summary: 'Approved!', detail: 'Your information was updated!' });
            }
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'ERROR!', detail: 'Something went wrong. Try again later.' });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('phone'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "phone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('role'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "role", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('department'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "department", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('building'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "building", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('room'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "room", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('first'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "first", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('last'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "last", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"]]
            // encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n  color: #fff !important;\r\n}\r\noption[value=\"\"][disabled] {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"card-title text-center font-bold col-blue-grey\" style=\"font-weight: 700;\">SIGN UP</h5>\r\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit()\">\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-5 offset-md-1\">\r\n        <input class=\"form-control\" [ngClass]=\"{'is-invalid': (registerForm.controls.firstName.errors && registerForm.controls.firstName.dirty), 'is-valid': !registerForm.controls.firstName.errors}\" type=\"text\" placeholder=\"first\" name=\"firstName\" formControlName=\"firstName\">\r\n        <div *ngIf=\"registerForm.controls.firstName.errors?.required && registerForm.controls.firstName.dirty\" class=\"invalid-feedback\">You must provide a first name.</div>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n        <input class=\"form-control\" [ngClass]=\"{'is-invalid': (registerForm.controls.lastName.errors && registerForm.controls.lastName.dirty), 'is-valid': !registerForm.controls.lastName.errors}\" type=\"text\" placeholder=\"last\" name=\"lastName\"  formControlName=\"lastName\">\r\n        <div *ngIf=\"registerForm.controls.lastName.errors?.required && registerForm.controls.lastName.dirty\" class=\"invalid-feedback\">You must provide a last name.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n        <input class=\"form-control\" [ngClass]=\"{'is-invalid': ((registerForm.controls.email.errors || isEmailTaken) && registerForm.controls.email.dirty), 'is-valid': !registerForm.controls.email.errors}\" type=\"email\" placeholder=\"email\" name=\"email\"  formControlName=\"email\" (blur) =\"isEmailAvailable()\">\r\n        <div *ngIf=\"(registerForm.controls.email.errors || isEmailTaken) && registerForm.controls.email.dirty\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"registerForm.controls.email.errors?.required\">\r\n              You must provide an email.\r\n            </div>\r\n            <div *ngIf=\"isEmailTaken\">\r\n              This email is already in the system.\r\n            </div>\r\n            <div *ngIf=\"registerForm.controls.email.errors?.minlength\">\r\n              Your email must be greater than 5 characters.\r\n            </div>\r\n            <div *ngIf=\"registerForm.controls.email.errors?.maxlength\">\r\n              Your email must be less than 40 characters.\r\n            </div>\r\n            <div *ngIf=\"registerForm.controls.email.errors?.invalidEmail && (!registerForm.controls.email.errors?.required) && (!registerForm.controls.email.errors?.minlength) && (!registerForm.controls.email.errors?.maxlength)\">\r\n              Invalid email.\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-4 offset-md-1\">\r\n        <select class=\"form-control\" [ngClass]=\"{'is-invalid': (registerForm.controls.department.errors && registerForm.controls.department.dirty), 'is-valid': !registerForm.controls.department.errors}\" name=\"department\" formControlName=\"department\">\r\n          <option value=\"\" disabled selected>department</option>\r\n          <option value=\"BIO\">Biology</option>\r\n          <option value=\"CHE\">Chemical Engineering</option>\r\n          <option value=\"CHEM\">Chemistry</option>\r\n          <option value=\"EE\">Electrical Engineering</option>\r\n          <option value=\"PHYS\">Physics</option>\r\n        </select>\r\n        <div *ngIf=\"registerForm.controls.department.errors && registerForm.controls.department.dirty\" class=\"invalid-feedback\">You must select a department.</div>\r\n    </div>    \r\n    <div class=\"col-md-4\">\r\n        <select class=\"form-control\" [ngClass]=\"{'is-invalid': (registerForm.controls.building.errors && registerForm.controls.building.dirty), 'is-valid': !registerForm.controls.building.errors}\" name=\"building\" formControlName=\"building\">\r\n          <option value=\"\" disabled selected>building</option>\r\n          <option value=\"NAC\">NAC</option>\r\n          <option value=\"SHP\">Shephard Hall</option>\r\n          <option value=\"MSK\">Marshak</option>\r\n        </select>\r\n        <div *ngIf=\"registerForm.controls.building.errors && registerForm.controls.building.dirty\" class=\"invalid-feedback\">You must select your building location.</div>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n        <input class=\"form-control\" [ngClass]=\"{'is-invalid': (registerForm.controls.room.errors && registerForm.controls.room.dirty), 'is-valid': !registerForm.controls.room.errors}\" type=\"text\" placeholder=\"room\" name=\"room\" formControlName=\"room\">\r\n        <div *ngIf=\"registerForm.controls.room.errors?.required && registerForm.controls.room.dirty\" class=\"invalid-feedback\">You must provide a room number.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n        <select class=\"form-control\" [ngClass]=\"{'is-invalid': (registerForm.controls.jobTitle.errors && registerForm.controls.jobTitle.dirty), 'is-valid': !registerForm.controls.jobTitle.errors}\" name=\"jobTitle\" formControlName=\"jobTitle\">\r\n          <option value=\"\" disabled selected>job title</option>\r\n          <option value=\"1\">EHOS</option>\r\n          <option value=\"2\">Lab Operator</option>\r\n        </select>\r\n        <div *ngIf=\"registerForm.controls.jobTitle.errors && registerForm.controls.jobTitle.dirty\" class=\"invalid-feedback\">You must select your job title.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n        <input [textMask]=\"{mask: mask}\" class=\"form-control\" [ngClass]=\"{'is-invalid': (registerForm.controls.phoneNumber.errors && registerForm.controls.phoneNumber.dirty), 'is-valid': !registerForm.controls.phoneNumber.errors}\" type=\"text\" placeholder=\"phone number\" name=\"phoneNumber\"  formControlName=\"phoneNumber\">\r\n        <div *ngIf=\"registerForm.controls.phoneNumber.errors && registerForm.controls.phoneNumber.dirty\" class=\"invalid-feedback\">You must provide a valid phone number.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n        <input class=\"form-control\" [ngClass]=\"{'is-invalid': (registerForm.controls.password.errors && registerForm.controls.password.dirty), 'is-valid': !registerForm.controls.password.errors}\" type=\"password\" placeholder=\"password\" name=\"password\" formControlName=\"password\">\r\n        <div class=\"invalid-feedback\" *ngIf=\"registerForm.controls.password.errors && registerForm.controls.password.dirty\">\r\n          <div *ngIf=\"registerForm.controls.password.errors?.required\">\r\n            You must provide a password.\r\n          </div>\r\n          <div *ngIf=\"registerForm.controls.password.errors?.minlength\">\r\n            Your password must be greater than 8 characters.\r\n          </div>\r\n          <div *ngIf=\"registerForm.controls.password.errors?.maxlength\">\r\n            Your password must be less than 40 characters.\r\n          </div>\r\n          <div *ngIf=\"registerForm.controls.password.errors?.invalidPassword && (!registerForm.controls.password.errors?.required) && (!registerForm.controls.password.errors?.minlength) && (!registerForm.controls.password.errors?.maxlength)\">\r\n            Password must have at least a lowercase letter, uppercase letter, and a number.\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n        <input class=\"form-control\"  [ngClass]=\"{'is-invalid': (registerForm.errors && registerForm.controls.confirmPassword.dirty), 'is-valid': (!registerForm.errors?.passwordsNoMatch && registerForm.controls.confirmPassword.dirty)}\" type=\"password\" placeholder=\"confirm password\" name=\"confirmPassword\" formControlName=\"confirmPassword\">\r\n        <div class=\"invalid-feedback\" *ngIf=\"registerForm.errors?.passwordsNoMatch && registerForm.controls.confirmPassword.dirty\">\r\n          Passwords do not match!\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <button [disabled]=\"!registerForm.valid || isEmailTaken\" type=\"submit\" class=\"btn btn-primary\" (click)=\"showDialog()\">Register</button>\r\n    </div>\r\n  </div>\r\n  <p-sidebar [(visible)]=\"display\" position=\"bottom\" [baseZIndex]=\"10000\" (onHide)=\"closeDialog()\">\r\n    <h1 style=\"font-weight:normal\">{{dialogTitle}}</h1>\r\n    <p>{{dialogBody}}</p>\r\n    <button type=\"button\" (click)=\"closeDialog()\" class=\"btn btn-primary\">Okay</button>\r\n  </p-sidebar>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    // Inside constructor, instantiate FormBuilder class
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        // Our Dialog upon submission
        this.display = false;
        this.isEmailTaken = false;
        // Using TextMask Module to format the phone number field
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.createForm();
    }
    // Have method that will create the register form entities
    // Inside the formBuilder class, we have a method group, which will attach our form validation requirements
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            jobTitle: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(40),
                    this.isValidEmail
                ])],
            department: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            building: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            room: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    this.isValidPhoneNumber
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(40),
                    this.isValidPassword
                ])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        }, {
            validator: this.isMatchingPasswords('password', 'confirmPassword')
        });
    };
    RegisterComponent.prototype.onRegisterFormSubmit = function () {
        var _this = this;
        // Let's create a user object to send
        var user = {
            firstName: this.registerForm.get('firstName').value,
            lastName: this.registerForm.get('lastName').value,
            email: this.registerForm.get('email').value.toLowerCase(),
            role: this.registerForm.get('jobTitle').value,
            department: this.registerForm.get('department').value,
            building: this.registerForm.get('building').value,
            room: this.registerForm.get('room').value,
            phoneNumber: this.registerForm.get('phoneNumber').value,
            password: this.registerForm.get('password').value,
            needsApproval: true
        };
        // Let's call authService.registerUser method we created to send the obj to the backend
        // We will handle this request as a promise the rxjs repo has a way to convert an Observable to a Promise via toPromise...
        // A promise is a js object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
        this.authService.registerUser(user).toPromise().then(function (response) {
            // Response should already be in JSON format
            console.log(response);
            if (!response.success) {
                _this.dialogTitle = "Failed!";
                _this.dialogBody = response.message;
            }
            else {
                console.log(response.message);
                _this.dialogTitle = "Success!";
                _this.dialogBody = "You have registered! A confirmation email will be sent to you by someone at the EHOS department.";
            }
            _this.display = true;
        });
    };
    RegisterComponent.prototype.isEmailAvailable = function () {
        var _this = this;
        if (this.registerForm.get('email').value.length < 1) {
            this.isEmailTaken = false;
        }
        this.authService.checkEmail(this.registerForm.get('email').value.toLowerCase()).subscribe(function (response) {
            if (!response.success) {
                _this.isEmailTaken = true;
            }
            else {
                _this.isEmailTaken = false;
            }
        }, function (error) {
            _this.isEmailTaken = true;
        });
    };
    // A validator function that uses a regular expression to see if the email entered is a valid format
    RegisterComponent.prototype.isValidEmail = function (formControl) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(formControl.value)) {
            return null; // Valid email format!
        }
        else {
            return { invalidEmail: true };
        }
    };
    // A validator function that uses a regular expression to check for valid password
    RegisterComponent.prototype.isValidPassword = function (formControl) {
        // Needs at least a lowercase, uppercase, and a number, and between 8 and 40 chars
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d]).{8,40}$/);
        if (regExp.test(formControl.value)) {
            return null;
        }
        else {
            return { invalidPassword: true };
        }
    };
    RegisterComponent.prototype.isValidPhoneNumber = function (formControl) {
        // Needs to be a phone number, mask will help with part of the format but we still must check
        /*
        All digits as 0 is not allowed.
        The area code cannot be the same digit,
        The 1st and 4th digit cannot be 0 or 1.
        */
        var regExp = new RegExp(/(?:^|\D)\(([2-9])(?:\d(?!\1)\d|(?!\1)\d\d)\)\s*[2-9]\d{2}-\d{4}/);
        if (regExp.test(formControl.value)) {
            return null;
        }
        else {
            return { invalidPhoneNumber: true };
        }
    };
    RegisterComponent.prototype.isMatchingPasswords = function (password, confirmPassword) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirmPassword].value) {
                return null;
            }
            else {
                return { passwordsNoMatch: true };
            }
        };
    };
    RegisterComponent.prototype.showDialog = function () {
        this.display = true;
    };
    RegisterComponent.prototype.closeDialog = function () {
        this.display = false;
        if (this.dialogTitle === "Success!") {
            this.registerForm.reset();
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/request-history/request-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/request-history/request-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <p class=\"h3\">Your History</p>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-12\">\r\n        <p-accordion>\r\n          <p-accordionTab header=\"Date Requested: {{request.requested}}\" *ngFor=\"let request of requests; let i=index;\">\r\n            <div class=\"container-fluid\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-12\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Location</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>{{request.location}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <p class=\"h3\">Items</p>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <p-accordion>\r\n                    <p-accordionTab header=\"Waste {{i+1}}\" *ngFor=\"let item of request.items; let i=index;\">\r\n                      <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group col-4\">\r\n                            <label for=\"container\">Container Type</label>\r\n                            <input type=\"text\" id=\"container\" class=\"form-control\" value=\"{{item.containerType}}\" readonly>\r\n                          </div>\r\n                          <div class=\"form-group col-4\">\r\n                            <label for=\"hazard\">Hazard Class</label>\r\n                            <input type=\"text\" id=\"hazard\" class=\"form-control\" value=\"{{item.hazardClass}}\" readonly>\r\n                          </div>\r\n                          <div class=\"form-group col-4\">\r\n                            <label for=\"items\">Chemicals</label>\r\n                            <input type=\"text\" id=\"items\" class=\"form-control\" value=\"{{request.items[i].chemicals.length}}\" readonly>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-8\">\r\n                            <p class=\"h5\">Chemicals</p>\r\n                            <table class=\"table\">\r\n                                <thead class=\"thead-light\">\r\n                                  <tr>\r\n                                    <th scope=\"col\">Name</th>\r\n                                    <th scope=\"col\">Percent Fraction</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let chemical of request.items[i].chemicals; let i=index;\">\r\n                                    <td>{{chemical.name}}</td>\r\n                                    <td>{{chemical.percentFraction}}%</td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                    </p-accordionTab>\r\n                  </p-accordion>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-5\">\r\n                  <label for=\"serviced\">Serviced?</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"serviced\"  value=\"{{request.serviced ? 'YES': 'NO'}}\" readonly/>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                  <label for=\"start\">Service Date</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"start\" value=\"{{request.start ? request.start : 'Not Scheduled'}}\" readonly/>\r\n                </div>  \r\n                <div class=\"col=md-5\">\r\n\r\n                </div>\r\n              </div>  \r\n            </div>\r\n          </p-accordionTab>\r\n        </p-accordion>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/request-history/request-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__ = __webpack_require__("../../../../../src/app/services/waste-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestHistoryComponent = (function () {
    function RequestHistoryComponent(waste, user, auth, router) {
        this.waste = waste;
        this.user = user;
        this.auth = auth;
        this.router = router;
        this.loading = true;
    }
    RequestHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // First get user id, then get pickup requests made by user id, then check if each req is serviced
        this.user.getProfile().subscribe(function (data) {
            _this.userId = data.user._id;
            _this.waste.getRequests().then(function (response) {
                _this.requests = response.requests.filter(function (el) { return el.userId == _this.userId; });
                _this.requests.forEach(function (element) {
                    element.requested = __WEBPACK_IMPORTED_MODULE_2_moment__(element.requested).format('MMMM Do YYYY');
                    _this.waste.getSchedule().then(function (response) {
                        response.schedule.forEach(function (k) {
                            if (k.requestId == element._id) {
                                // add schedule attributes
                                element.serviced = k.serviced;
                                element.start = __WEBPACK_IMPORTED_MODULE_2_moment__(k.start).format('MMMM Do YYYY');
                            }
                        });
                        _this.loading = false;
                    }).catch(function (reason) {
                        console.log(reason);
                    });
                });
            }).catch(function (reason) { });
        }, function (error) {
            if (error.status === 403) {
                _this.auth.unsetUser();
                _this.router.navigate(['/']);
            }
        });
    };
    RequestHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request-history',
            template: __webpack_require__("../../../../../src/app/request-history/request-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/request-history/request-history.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__["a" /* WasteManagementService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], RequestHistoryComponent);
    return RequestHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../../../node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    // Function that will submit a post request for the backend to handle
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + "/auth/register", user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.domain + "/auth/login", user);
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + "/auth/checkEmail/" + email);
    };
    AuthService.prototype.approveUser = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.domain + '/ehos/setAccount', user).toPromise()
                .then(function (res) {
                resolve();
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    AuthService.prototype.tokenExpired = function () {
        this.loadToken();
        if (!this.jwt) {
            return true;
        }
        var date = this.tokenExpires(this.jwt);
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthService.prototype.setUser = function (token, privilege, expires) {
        // Start the session
        localStorage.setItem('token', token);
        localStorage.setItem('privilege', privilege);
        localStorage.setItem("expires", expires);
        this.jwt = token;
    };
    AuthService.prototype.unsetUser = function () {
        // Close the session
        localStorage.removeItem('token');
        localStorage.removeItem('privilege');
        localStorage.removeItem("expires");
    };
    AuthService.prototype.loadToken = function () {
        this.jwt = localStorage.getItem('token'); // Load in the token to the apps variable jwt
    };
    AuthService.prototype.getRole = function () {
        if (!localStorage.getItem('privilege')) {
            return 0;
        }
        else {
            return Number(localStorage.getItem('privilege'));
        }
    };
    AuthService.prototype.tokenExpires = function (token) {
        var decoded = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Purpose: Now that we have the JWT saved in the browser, let's keep tracking its journey through the network by appending
/ the jwt onto each HTTP Request that requires authentication
/ if the JWT is not present, then the request goes through to the server unmodified
/ if the JWT is present, then we will clone the HTTP headers, and add an extra Authorization header, which will contain the JWT
*/
var AuthInterceptor = (function () {
    function AuthInterceptor(inject) {
        this.inject = inject;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authService = this.inject.get(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]); // Avoid cyclic dependency error
        authService.loadToken();
        if (authService.jwt) {
            var cloneHttpReq = req.clone({
                headers: req.headers.set("authorization", localStorage.getItem('token')) // Our HTTP header modified
            });
            console.log(cloneHttpReq);
            return next.handle(cloneHttpReq);
        }
        else {
            console.log('next req');
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/services/lab-inspection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabInspectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabInspectionService = (function () {
    function LabInspectionService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    LabInspectionService.prototype.getRequests = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/labs/inspections').toPromise().then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    LabInspectionService.prototype.getRequest = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/labs/inspections/' + id).toPromise().then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    LabInspectionService.prototype.isScheduled = function (request) {
        return this.http.patch(this.domain + '/labs/inspections' + request._id, request);
    };
    LabInspectionService.prototype.isServiced = function (request) {
        return this.http.patch(this.domain + '/schedule/' + request._id, request);
    };
    LabInspectionService.prototype.createRequest = function (request) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.domain + '/labs/inspections', request).toPromise()
                .then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    LabInspectionService.prototype.schedulePickup = function (request) {
        return this.http.post(this.domain + '/schedule/', request);
    };
    LabInspectionService.prototype.getSchedule = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/schedule/requests').toPromise()
                .then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    LabInspectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LabInspectionService);
    return LabInspectionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/ehos/users').toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    UserService.prototype.getProfile = function () {
        return this.http.get(this.domain + '/ehos/users/me');
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.domain + '/ehos/users/' + id);
    };
    UserService.prototype.patchProfile = function (user) {
        return this.http.patch(this.domain + '/ehos/users', user);
    };
    UserService.prototype.approveLabAccounts = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put(_this.domain + '/ehos/users', {}).toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete(_this.domain + '/ehos/users/' + user).toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/waste-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WasteManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WasteManagementService = (function () {
    function WasteManagementService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    WasteManagementService.prototype.getRequests = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/waste/pickupRequests').toPromise().then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    WasteManagementService.prototype.getRequest = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/waste/pickupRequests/' + id).toPromise().then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    WasteManagementService.prototype.isScheduled = function (request) {
        return this.http.patch(this.domain + '/waste/pickupRequests/' + request._id, request);
    };
    WasteManagementService.prototype.isServiced = function (request) {
        return this.http.patch(this.domain + '/schedule/' + request._id, request);
    };
    WasteManagementService.prototype.storeWaste = function (request) {
        return this.http.post(this.domain + '/storage/' + request.hazardClass, request);
    };
    WasteManagementService.prototype.deleteWaste = function (request) {
        return this.http.delete(this.domain + '/storage/' + request);
    };
    WasteManagementService.prototype.createRequest = function (request) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.domain + '/waste/pickupRequests', request).toPromise()
                .then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    WasteManagementService.prototype.schedulePickup = function (request) {
        return this.http.post(this.domain + '/schedule/', request);
    };
    WasteManagementService.prototype.getSchedule = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/schedule/requests').toPromise()
                .then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    WasteManagementService.prototype.getHazards = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/ehos/hazardClasses').toPromise()
                .then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    WasteManagementService.prototype.getHazard = function (hazardClass) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + '/storage/' + hazardClass).toPromise()
                .then(function (val) {
                resolve(val);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    WasteManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], WasteManagementService);
    return WasteManagementService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-primeng.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedPrimeNgModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_sidebar__ = __webpack_require__("../../../../primeng/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_growl__ = __webpack_require__("../../../../primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_progressspinner__ = __webpack_require__("../../../../primeng/progressspinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_progressspinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_progressspinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_schedule__ = __webpack_require__("../../../../primeng/schedule.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_schedule___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_schedule__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_accordion__ = __webpack_require__("../../../../primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_accordion__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 //accordion and accordion tab
//import {DataViewModule} from 'primeng/dataview';
var SharedPrimeNgModule = (function () {
    function SharedPrimeNgModule() {
    }
    SharedPrimeNgModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_2_primeng_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_progressspinner__["ProgressSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_growl__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_schedule__["ScheduleModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_accordion__["AccordionModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_2_primeng_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_progressspinner__["ProgressSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_growl__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_schedule__["ScheduleModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_accordion__["AccordionModule"]
            ],
        })
    ], SharedPrimeNgModule);
    return SharedPrimeNgModule;
}());



/***/ }),

/***/ "../../../../../src/app/storage-list/storage-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/storage-list/storage-list.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/storage-list/storage-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageListComponent = (function () {
    function StorageListComponent() {
        this.displayDelete = false;
    }
    StorageListComponent.prototype.ngOnInit = function () {
        console.log(this.input);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], StorageListComponent.prototype, "input", void 0);
    StorageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage-list',
            template: __webpack_require__("../../../../../src/app/storage-list/storage-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/storage-list/storage-list.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], StorageListComponent);
    return StorageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/storage/storage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  background-color: \"#dedede\";\r\n}\r\n.hovereffect {\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.hovereffect img {\r\n  transition:all .3s linear;\r\n}\r\n\r\n.hovereffect:hover img {\r\n  -webkit-transform:scale(1.1);\r\n  transform:scale(1.1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/storage/storage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card infobox\">\r\n  <div class=\"card-body\">\r\n    <div class=\"container-fluid\">\r\n      <p class=\"h2 text-dark\">Hazards</p>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click) =\"getHazardItems('Corrosive')\">\r\n            <p class=\"classpadding text-dark\">Corrosive</p>\r\n            <img class=\"img-fluid\" [src]= \"corrosive\"/>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click)=\"getHazardItems('Explosive')\">\r\n            <p class=\"classpadding text-dark\">Explosive</p>\r\n            <img class=\"img-fluid\" [src]= \"explosive\">\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click)=\"getHazardItems('Flammable Liquid')\">\r\n            <p class=\"classpadding text-dark\">Flammable Liquid</p>\r\n            <img class=\"img-fluid\" [src]= \"flamableL\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click)=\"getHazardItems('Flammable Solid')\">\r\n            <p class=\"classpadding text-dark\">Flammable Solid</p>\r\n            <img class=\"img-fluid\" [src]= \"flamableS\">\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click)=\"getHazardItems('Gas')\">\r\n            <p class=\"classpadding text-dark\">Gas</p>\r\n            <img class=\"img-fluid\" [src]= \"gas\">\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click)=\"getHazardItems('Oxidizer')\">\r\n            <p class=\"classpadding text-dark\">Oxidizer</p>\r\n            <img class=\"img-fluid\" [src]= \"oxidizer\"/>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click)=\"getHazardItems('Radiation')\">\r\n            <p class=\"classpadding text-dark\">Radiation</p>\r\n            <img class=\"img-fluid\" [src]= \"radiation\">\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click)=\"getHazardItems('Toxic')\">\r\n            <p class=\"classpadding text-dark\">Toxic</p>\r\n            <img class=\"img-fluid\" [src]= \"toxic\">\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-4 hovereffect font-weight-bold\">\r\n          <a (click)=\"getHazardItems('Miscellaneous')\">\r\n            <p class=\"classpadding text-dark\">Miscellaneous</p>\r\n            <img class=\"img-fluid\" [src]= \"miscellaneous\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-sidebar [(visible)]=\"dialog\" [fullScreen]=\"true\" [style]=\"{'overflow-y': 'auto'}\">\r\n    <div *ngFor=\"let item of chemicals; index as i\">\r\n        <div class=\"container\">\r\n          <div class=\"form-group row\">\r\n            <p class=\"h5\">Item {{i+1}} : Quantity: {{item.quantity}}{{item.measuredIn}}</p>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-6\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Waste</th>\r\n                  <th scope=\"col\">Percent Fraction</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let chemical of item.chemicals; index as j\">\r\n                    <td>{{chemical.name}}</td>\r\n                    <td>{{chemical.percentFraction}}%</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-6\">\r\n          <p class=\"h4\">Total Stored: {{total}}</p>\r\n        </div>\r\n        <div class=\"col-md-4 offset-2\">\r\n          <button class=\"btn btn-danger\" (click)=\"displayDelete=true; wasteRequest=i\">Delete</button>\r\n        </div>\r\n      </div>\r\n      <p-dialog header=\"Confirm!\" [(visible)]=\"displayDelete\" modal=\"modal\" [responsive]=\"true\" [width]=\"400\" [minWidth]=\"400\">\r\n        <span class=\"text-muted\">\r\n            Are you sure you want to delete the items stored?\r\n        </span>\r\n        <p-footer>\r\n          <div class=\"row\">\r\n            <div class=\"col-3 offset-6\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteStorage()\">Yes</button>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"displayDelete=false;\">No</button>\r\n            </div>\r\n          </div>\r\n        </p-footer>\r\n      </p-dialog>\r\n</p-sidebar>\r\n<p-growl [(value)]=\"msgs\" [sticky]=\"true\"></p-growl>"

/***/ }),

/***/ "../../../../../src/app/storage/storage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__ = __webpack_require__("../../../../../src/app/services/waste-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageComponent = (function () {
    function StorageComponent(waste, messageService) {
        this.waste = waste;
        this.messageService = messageService;
        this.dialog = false;
        this.displayDelete = false;
        this.chemicals = [];
        this.total = 0;
        this.msgs = [];
        this.corrosive = '/assets/hazard/corrosive.png';
        this.explosive = '/assets/hazard/explosive.png';
        this.flamableL = '/assets/hazard/flamableL.png';
        this.flamableS = '/assets/hazard/flamableS.png';
        this.gas = '/assets/hazard/gas.png';
        this.oxidizer = '/assets/hazard/oxidizer.png';
        this.radiation = '/assets/hazard/radiation.png';
        this.toxic = '/assets/hazard/toxic.png';
        this.miscellaneous = '/assets/hazard/miscellaneous.png';
    }
    StorageComponent.prototype.getHazardItems = function (hazardClass) {
        var _this = this;
        this.dialog = true;
        this.hazardClass = hazardClass;
        this.waste.getHazard(hazardClass).then(function (response) {
            _this.chemicals = response.items;
            _this.chemicals.forEach(function (el) {
                _this.total += el.quantity;
            });
            console.log(_this.chemicals);
        });
    };
    StorageComponent.prototype.deleteStorage = function () {
        var _this = this;
        this.waste.deleteWaste(this.hazardClass).subscribe(function (response) {
            _this.displayDelete = false;
            _this.dialog = false;
            if (response.success) {
                _this.messageService.add({ severity: 'success', summary: 'Approved!', detail: response.message });
            }
        }, function (error) {
            _this.displayDelete = false;
            _this.dialog = false;
            _this.messageService.add({ severity: 'error', summary: 'ERROR!', detail: error.message });
        });
    };
    StorageComponent.prototype.ngOnInit = function () {
    };
    StorageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage',
            template: __webpack_require__("../../../../../src/app/storage/storage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/storage/storage.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__["a" /* WasteManagementService */], __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__["MessageService"]])
    ], StorageComponent);
    return StorageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\r\n    font-size: 0.85rem;\r\n}\r\ndiv.ui-sidebar-md {\r\n    overflow: scroll;\r\n}\r\n.form-group {\r\n    font-size: 0.8rem !important;\r\n}\r\n.form-control {\r\n    font-size: 0.75rem !important;\r\n}\r\n.card {\r\n  font-size: .875rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card info-box\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 col-md-6 col-lg-5\"><p class=\"h2\">Users</p></div>\r\n      <div class=\"col-sm-5 col-md-5 col-lg-4 offset-sm-1 offset-md-1 offset-lg-3\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <strong>Approve All Lab Accounts</strong>\r\n            <input type=\"checkbox\" class=\"form-check-input\" (click)=\"displayLab=true;\" [formControl]=\"approve\">\r\n            <i class=\"input-helper\"></i>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Department</th>\r\n          <th scope=\"col\">Role</th>\r\n          <th scope=\"col\" class=\"text-center\">Approved</th>\r\n          <th scope=\"col\"></th>            \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let user of users; index as i\">\r\n          <td>{{user.last}}, {{user.first}}</td>\r\n          <td>{{user.department}}</td>\r\n          <td>{{user.privilege == 1 ? \"EHOS\": \"Lab\"}}</td>          \r\n          <td class=\"text-center\"><div class=\"badge\" [ngClass]=\"{'badge-primary': user.approved, 'badge-danger': !user.approved}\">{{user.approved ? \"Yes\": \"No\"}}</div></td>            \r\n          <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"openDialog(i)\" [disabled]=\"user.privilege == 1\">Edit</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<p-sidebar [(visible)]=\"display\" position=\"bottom\" [baseZIndex]=\"10000\" styleClass=\"ui-sidebar-md\" (onHide)=\"closeDialog()\">\r\n    <h2 style=\"font-weight:normal\">{{name != '' ? users[user].first +\" \"+users[user].last : \"\"}}</h2>\r\n    <p class=\"h5 text-muted\">Update available details below.</p>\r\n    <form [formGroup]=\"userForm\">\r\n      <div class=\"form-group row\">\r\n          <div class=\"col-md-3\">\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': (userForm.controls.first.errors && userForm.controls.first.dirty), '': !userForm.controls.first.errors}\" type=\"text\" placeholder=\"first\" name=\"first\" formControlName=\"first\">\r\n              <div *ngIf=\"userForm.controls.first.errors?.required && userForm.controls.first.dirty\" class=\"invalid-feedback\">You must provide a first name.</div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': (userForm.controls.last.errors && userForm.controls.last.dirty), '': !userForm.controls.last.errors}\" type=\"text\" placeholder=\"last\" name=\"last\"  formControlName=\"last\">\r\n              <div *ngIf=\"userForm.controls.last.errors?.required && userForm.controls.last.dirty\" class=\"invalid-feedback\">You must provide a last name.</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': ((userForm.controls.email.errors || isEmailTaken) && userForm.controls.email.dirty), '': !userForm.controls.email.errors}\" type=\"email\" placeholder=\"email\" name=\"email\"  formControlName=\"email\" (focus)=\"isEmailTaken=false\" (blur) =\"isEmailAvailable()\">\r\n              <div *ngIf=\"(userForm.controls.email.errors || isEmailTaken) && userForm.controls.email.dirty\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"userForm.controls.email.errors?.required\">\r\n                    You must provide an email.\r\n                  </div>\r\n                  <div *ngIf=\"isEmailTaken\">\r\n                    This email is already in the system.\r\n                  </div>\r\n                  <div *ngIf=\"userForm.controls.email.errors?.minlength\">\r\n                    Your email must be greater than 5 characters.\r\n                  </div>\r\n                  <div *ngIf=\"userForm.controls.email.errors?.maxlength\">\r\n                    Your email must be less than 40 characters.\r\n                  </div>\r\n                  <div *ngIf=\"userForm.controls.email.errors?.invalidEmail && (!userForm.controls.email.errors?.required) && (!userForm.controls.email.errors?.minlength) && (!userForm.controls.email.errors?.maxlength)\">\r\n                    Invalid email.\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"approved\" [formControl]=\"approved\" >\r\n                Approved\r\n                <i class=\"input-helper\"></i>\r\n              </label>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" [ngClass]=\"{'is-invalid': (userForm.controls.department.errors && userForm.controls.department.dirty), '': !userForm.controls.department.errors}\" name=\"department\" formControlName=\"department\">\r\n            <option value=\"\" disabled selected>department</option>\r\n            <option value=\"BIO\">Biology</option>\r\n            <option value=\"CHE\">Chemical Engineering</option>\r\n            <option value=\"CHEM\">Chemistry</option>\r\n            <option value=\"EE\">Electrical Engineering</option>\r\n            <option value=\"PHYS\">Physics</option>\r\n          </select>\r\n          <div *ngIf=\"userForm.controls.department.errors && userForm.controls.department.dirty\" class=\"invalid-feedback\">You must select a department.</div>\r\n        </div>    \r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" [ngClass]=\"{'is-invalid': (userForm.controls.building.errors && userForm.controls.building.dirty), '': !userForm.controls.building.errors}\" name=\"building\" formControlName=\"building\">\r\n            <option value=\"\" disabled selected>building</option>\r\n            <option value=\"NAC\">NAC</option>\r\n            <option value=\"SHP\">Shephard Hall</option>\r\n            <option value=\"MSK\">Marshak</option>\r\n          </select>\r\n          <div *ngIf=\"userForm.controls.building.errors && userForm.controls.building.dirty\" class=\"invalid-feedback\">You must select your building location.</div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <input class=\"form-control\" [ngClass]=\"{'is-invalid': (userForm.controls.room.errors && userForm.controls.room.dirty), '': !userForm.controls.room.errors}\" type=\"text\" placeholder=\"room\" name=\"room\" formControlName=\"room\">\r\n          <div *ngIf=\"userForm.controls.room.errors?.required && userForm.controls.room.dirty\" class=\"invalid-feedback\">You must provide a room number.</div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <input [textMask]=\"{mask: mask}\" class=\"form-control\" [ngClass]=\"{'is-invalid': (userForm.controls.phone.errors && userForm.controls.phone.dirty), '': !userForm.controls.phone.errors}\" type=\"text\" placeholder=\"phone number\" name=\"phone\"  formControlName=\"phone\">\r\n            <div *ngIf=\"userForm.controls.phone.errors && userForm.controls.phone.dirty\" class=\"invalid-feedback\">You must provide a valid phone number.</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" (click)=\"onUserFormSubmit()\" class=\"btn btn-primary\" [disabled]=\"(!approved.dirty && !userForm.dirty) || userForm.invalid\">Update</button>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" (click)=\"openDialog(user)\" class=\"btn btn-secondary\"  [disabled]=\"!approved.dirty && !userForm.dirty\">Cancel</button>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" (click)=\"openDeleteDialog()\" class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </p-sidebar>\r\n<p-dialog header=\"Confirm!\" [(visible)]=\"displayDelete\" modal=\"modal\" [responsive]=\"true\" [width]=\"400\" [minWidth]=\"400\">\r\n  <span class=\"text-muted\">\r\n      Are you sure you want to delete {{name != '' ? users[user].first + \"'s\": \"this user's\"}} account?\r\n  </span>\r\n  <p-footer>\r\n    <div class=\"row\">\r\n      <div class=\"col-3 offset-6\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteUser(user)\">Yes</button>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"displayDelete=false;\">No</button>\r\n      </div>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n<p-dialog header=\"Confirm!\" [(visible)]=\"displayLab\" modal=\"modal\" [responsive]=\"true\" [width]=\"400\" [minWidth]=\"400\">\r\n    <span class=\"text-muted\">\r\n       Are you sure you want to approve ALL lab accounts?\r\n    </span>\r\n    <p-footer>\r\n      <div class=\"row\">\r\n        <div class=\"col-3 offset-6\">\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"approveLabAccounts()\">Yes</button>\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"displayLab=false; approve.setValue(false);\">No</button>\r\n        </div>\r\n      </div>\r\n    </p-footer>\r\n  </p-dialog>\r\n<p-growl [(value)]=\"msgs\" [sticky]=\"true\"></p-growl>\r\n<div class=\"row mt-5\" *ngIf=\"loading\">\r\n  <div class=\"col-6 offset-6 mt-3\">\r\n    <p-progressSpinner></p-progressSpinner>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = (function () {
    function UsersComponent(formBuilder, userService, authService, messageService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authService = authService;
        this.messageService = messageService;
        this.router = router;
        this.users = [];
        this.display = false;
        this.displayDelete = false;
        this.displayLab = false;
        this.loading = false;
        this.isEmailTaken = false;
        this.msgs = [];
        this.approved = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.approve = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.name = '';
        this.originalEmail = '';
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.createForm();
    }
    // Helper functions
    UsersComponent.prototype.isEmailAvailable = function () {
        var _this = this;
        if (this.userForm.get('email').value.length < 1) {
            this.isEmailTaken = false;
        }
        if (this.users[Number(this.user)].email != this.userForm.get('email').value) {
            this.authService.checkEmail(this.userForm.get('email').value).subscribe(function (response) {
                if (!response.success) {
                    _this.isEmailTaken = true;
                }
                else {
                    _this.isEmailTaken = false;
                }
            });
        }
    };
    // A validator function that uses a regular expression to see if the email entered is a valid format
    UsersComponent.prototype.isValidEmail = function (formControl) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(formControl.value)) {
            return null; // Valid email format!
        }
        else {
            return { invalidEmail: true };
        }
    };
    UsersComponent.prototype.isValidPhoneNumber = function (formControl) {
        // Needs to be a phone number, mask will help with part of the format but we still must check
        /*
        All digits as 0 is not allowed.
        The area code cannot be the same digit,
        The 1st and 4th digit cannot be 0 or 1.
        */
        var regExp = new RegExp(/(?:^|\D)\(([2-9])(?:\d(?!\1)\d|(?!\1)\d\d)\)\s*[2-9]\d{2}-\d{4}/);
        if (regExp.test(formControl.value)) {
            return null;
        }
        else {
            return { invalidPhoneNumber: true };
        }
    };
    //
    UsersComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            first: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            last: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(40),
                    this.isValidEmail
                ])],
            department: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            building: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            room: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    this.isValidPhoneNumber
                ])]
        });
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (response) {
            if (response.success) {
                var usersArr = response.users; // [{user 1 info},{ user 2 info}]
                for (var index in usersArr) {
                    var temp = {};
                    for (var key in usersArr[index]) {
                        temp[key] = usersArr[index][key];
                    }
                    _this.users.push(temp); // [...,{temp is pushed}]
                }
            }
            else {
                // No users
            }
        }).catch(function (reason) {
            if (reason.status === 403) {
                // redirect to login page
                _this.authService.unsetUser();
                _this.router.navigate(['/']);
            }
        });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.name = '';
        this.loading = true;
        this.userService.deleteUser(this.users[Number(this.user)].email).then(function (response) {
            _this.users.splice(Number(_this.user), 1); // Reindex the array
            _this.messageService.add({ severity: 'success', summary: 'Approved!', detail: 'User was deleted!' });
            _this.loading = false;
        }).catch(function (reason) {
            _this.messageService.add({ severity: 'success', summary: 'ERROR!', detail: 'There was some error trying to delete. Try again.' });
            _this.loading = false;
        });
        this.displayDelete = false;
        this.display = false;
        this.closeDialog();
    };
    UsersComponent.prototype.openDialog = function (i) {
        var _this = this;
        this.approved.reset();
        this.userForm.reset();
        this.user = Number(i); // Save the current user that was selected      
        this.name = this.users[i].first + " " + this.users[i].last;
        this.originalEmail = this.users[i].email;
        Object.keys(this.users[i]).forEach(function (val, index) {
            if (val != "_id") {
                _this.userForm.patchValue((_a = {}, _a[val] = _this.users[i][val], _a));
            }
            var _a;
        });
        this.approved.setValue(this.users[i].approved);
        if (this.approved.value) {
            this.approved.disable();
        }
        else {
            this.approved.enable();
        }
        this.display = true;
    };
    UsersComponent.prototype.openDeleteDialog = function () {
        this.displayDelete = true;
    };
    UsersComponent.prototype.closeDialog = function () {
        this.approved.reset();
        this.userForm.reset();
        this.originalEmail = '';
    };
    UsersComponent.prototype.onUserFormSubmit = function () {
        var _this = this;
        var userInfo = {
            approved: this.approved.value,
            first: this.userForm.get('first').value,
            last: this.userForm.get('last').value,
            email: this.userForm.get('email').value,
            department: this.userForm.get('department').value,
            building: this.userForm.get('building').value,
            room: this.userForm.get('room').value,
            phoneNumber: this.userForm.get('phone').value,
        };
        var user = {
            email: this.originalEmail,
            user: userInfo
        };
        this.userService.patchProfile(user).subscribe(function (data) {
            _this.display = false;
            if (data.success) {
                _this.messageService.add({ severity: 'success', summary: 'Approved!', detail: 'User was edited!' });
            }
            else {
                _this.messageService.add({ severity: 'success', summary: 'ERROR!', detail: 'There was some error trying to update. Try again.' });
            }
            _this.approved.reset();
        });
    };
    UsersComponent.prototype.approveLabAccounts = function () {
        var _this = this;
        this.displayLab = false;
        this.loading = true;
        this.userService.approveLabAccounts().then(function (val) {
            _this.messageService.add({ severity: 'success', summary: 'Approved!', detail: 'All lab users were approved!' });
            _this.loading = false;
        }).catch(function (reason) {
            _this.messageService.add({ severity: 'success', summary: 'ERROR!', detail: 'Something went wrong. Try again later.' });
            _this.loading = false;
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.display = false;
        this.getUsers();
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__["MessageService"]]
            // encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__["MessageService"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/waste-request/waste-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".remove {\r\n  color: #dc3545;\r\n}\r\n.add{\r\n  color: #28a745;\r\n}\r\nbutton:hover {\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/waste-request/waste-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\r\n  <div class=\"col-md-12 table-responsive\">\r\n    <div class=\"card info-box\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Waste Pickup Request</h3>\r\n        <p class=\"text-muted\">Enter details below.</p>\r\n        <form [formGroup]=\"wasteForm\">\r\n          <div formArrayName=\"wasteItems\" *ngFor=\"let wasteItem of wasteForm.get('wasteItems').controls; let i = index;\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-8 col-lg-6\">\r\n                <p class=\"h4\">Waste Item {{i+1}}</p>\r\n              </div>\r\n              <div class=\"col-md-4 col-lg-2\">\r\n                <button class=\"btn btn-outline-danger remove\" (click)=\"removeWasteItem(i)\">Remove Item</button>\r\n              </div>\r\n            </div>\r\n            <div [formGroupName]=\"i\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"input-group col-lg-2\">\r\n                    <select class=\"form-control\" formControlName=\"containerType\" name=\"containerType\">\r\n                      <option value=\"\" disabled selected>Container Type</option>\r\n                      <option value=\"G\">Gallon</option>\r\n                      <option value=\"Q\">Quart</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"input-group col-lg-2\">\r\n                    <select class=\"form-control\" formControlName=\"hazardClass\" name=\"hazardClass\" (blur)=\"setQty(i)\">\r\n                      <option value=\"\" disabled selected>Hazard Class</option>\r\n                      <option *ngFor=\"let hazard of hazardClasses; let i = index;\" value=\"{{hazard.name}}\">{{hazard.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"input-group col-lg-2\">\r\n                    <input type=\"number\" class=\"form-control\" formControlName=\"quantity\" placeholder=\"Quantity\"name=\"quantity\">        \r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\">{{wasteItem.get('measuredIn').value}}</span>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-lg-6\">\r\n                  <p class=\"h5\">Chemicals</p>\r\n                  <div formArrayName=\"chemicals\" *ngFor=\"let chemical of wasteForm.get('wasteItems').controls[i].get('chemicals').controls; let j = index;\">\r\n                    <div [formGroupName]=\"j\" class=\" form-group row\">\r\n                      <div class=\"input-group col-lg-6\">\r\n                        <input type=\"text\" formControlName=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\">\r\n                      </div>\r\n                      <div class=\"input-group col-lg-4\">\r\n                        <input type=\"number\" formControlName=\"percentFraction\" name=\"percentFraction\" placeholder=\"Percent\" class=\"form-control\">    \r\n                        <div class=\"input-group-append\">\r\n                          <span class=\"input-group-text\">%</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-2\">\r\n                        <button class='btn btn-outline-danger remove' (click)=\"removeChemical(i,j)\">\r\n                            <i class=\"fa fw fa-minus\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-2\">\r\n                  <button class=\"btn btn-outline-success add\" (click)=\"addChemical(i)\" [disabled]=\"!wasteForm.get('wasteItems').controls[i].get('chemicals').valid\">Add Chemical</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-4 col-lg-3 col-xl-2\">\r\n            <button (click)=\"addWasteItem()\" [disabled]=\"!wasteForm.valid\" class=\"btn btn-primary\">Add Waste</button>\r\n          </div>\r\n        </div>  \r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 col-lg-3 col-xl-2\">\r\n            <button class=\"btn btn-success\" [disabled]=\"!wasteForm.valid\" (click)=\"createRequest()\">Send Request</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\" [sticky]=\"true\" [baseZIndex]=\"11100\"></p-growl>\r\n<p-progressSpinner *ngIf=\"loading\"></p-progressSpinner>\r\n       \r\n"

/***/ }),

/***/ "../../../../../src/app/waste-request/waste-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WasteRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__ = __webpack_require__("../../../../../src/app/services/waste-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WasteRequestComponent = (function () {
    function WasteRequestComponent(formBuilder, waste, user, messageService, auth, router) {
        this.formBuilder = formBuilder;
        this.waste = waste;
        this.user = user;
        this.messageService = messageService;
        this.auth = auth;
        this.router = router;
        this.loading = false;
        this.msgs = [];
        this.createForm();
    }
    WasteRequestComponent.prototype.createChemical = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            percentFraction: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    };
    WasteRequestComponent.prototype.addChemical = function (i) {
        this.chemicals = this.wasteForm.get('wasteItems').controls[i].get('chemicals');
        this.chemicals.push(this.createChemical());
        console.log(this.wasteForm);
    };
    WasteRequestComponent.prototype.removeChemical = function (i, j) {
        this.chemicals = this.wasteForm.get('wasteItems').controls[i].get('chemicals');
        if (this.chemicals.length > 1) {
            this.chemicals.removeAt(Number(j));
        }
    };
    WasteRequestComponent.prototype.setQty = function (i) {
        var wasteItem = this.wasteForm.get('wasteItems').controls[i];
        switch (wasteItem.get('hazardClass').value) {
            case 'Flammable Liquid':
                wasteItem.get('measuredIn').setValue('ml');
                break;
            case 'Gas':
                wasteItem.get('measuredIn').setValue('ml');
                break;
            case 'Oxidizer':
                wasteItem.get('measuredIn').setValue('ml');
                break;
            default:
                wasteItem.get('measuredIn').setValue('kg');
                break;
        }
    };
    WasteRequestComponent.prototype.createForm = function () {
        this.wasteForm = this.formBuilder.group({
            wasteItems: this.formBuilder.array([this.createWasteItem()])
        });
    };
    WasteRequestComponent.prototype.createWasteItem = function () {
        return this.formBuilder.group({
            containerType: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            hazardClass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            quantity: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            measuredIn: [''],
            chemicals: this.formBuilder.array([this.createChemical()])
        });
    };
    WasteRequestComponent.prototype.addWasteItem = function () {
        this.wasteItems = this.wasteForm.get('wasteItems');
        this.wasteItems.push(this.createWasteItem());
    };
    WasteRequestComponent.prototype.removeWasteItem = function (i) {
        this.wasteItems = this.wasteForm.controls['wasteItems'];
        if (this.wasteItems.length > 1) {
            this.wasteItems.removeAt(Number(i));
        }
    };
    WasteRequestComponent.prototype.createRequest = function () {
        var _this = this;
        this.loading = true;
        var request = {
            requester: this.requester,
            location: this.location,
            items: this.wasteForm.get('wasteItems').value
        };
        this.waste.createRequest(request).then(function (value) {
            if (!value.success) {
                _this.messageService.add({ severity: 'error', summary: 'ERROR!', detail: 'Look over details and try again.' });
            }
            else {
                _this.messageService.add({ severity: 'success', summary: 'Requested!', detail: 'Waste pickup request was successfully created!' });
            }
            _this.loading = false;
            _this.wasteForm.reset();
            // Loading done
        }).catch(function (reason) {
            console.log(reason);
            _this.loading = false;
        });
    };
    WasteRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getProfile().subscribe(function (user) {
            _this.requester = user.user._id;
            _this.location = user.user.building + ", Room " + user.user.room;
        }, function (error) {
            if (error.status == 403) {
                _this.auth.unsetUser();
                _this.router.navigate(['/']);
            }
        });
        this.waste.getHazards().then(function (response) {
            _this.hazardClasses = response.hazardClasses;
        });
    };
    WasteRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-waste-request',
            template: __webpack_require__("../../../../../src/app/waste-request/waste-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/waste-request/waste-request.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__["MessageService"]]
            //encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__services_waste_management_service__["a" /* WasteManagementService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__["MessageService"],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]])
    ], WasteRequestComponent);
    return WasteRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
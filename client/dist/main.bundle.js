webpackJsonp(["main"],{

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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error404_error404_component__ = __webpack_require__("../../../../../src/app/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lab_operator_dashboard_lab_operator_dashboard_component__ = __webpack_require__("../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// All our routes are stored in this variable
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'dashboard/lab', component: __WEBPACK_IMPORTED_MODULE_4__lab_operator_dashboard_lab_operator_dashboard_component__["a" /* LabOperatorDashboardComponent */], outlet: 'dashboardOutlet' },
            { path: 'dashboard/ehos', component: __WEBPACK_IMPORTED_MODULE_4__lab_operator_dashboard_lab_operator_dashboard_component__["a" /* LabOperatorDashboardComponent */], outlet: 'dashboardOutlet' },
        ] },
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_primeng_module__["a" /* SharedPrimeNgModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_14_angular2_text_mask__["TextMaskModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <router-outlet name=\"dashboardOutlet\"></router-outlet> -->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error404/error404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-404{\n  font-size: 150px;\n}\n.error-text{\n  font-size: 24px;\n}\na{\n  color: #fff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>404 | Page not found!</title>\n  </head>\n  <body class=\"text-sm-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"error-404\">404</div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"error-text\">This page does not exist.</div>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: 15px;\">\n          <div class=\"col-sm-6 offset-sm-3 col-md-2 offset-md-5\">\n            <button routerLink=\"/\" pButton type=\"button\" label=\"Go back\"  class=\"ui-button-secondary\"></button>\n          </div>\n        </div>\n    </div>\n  </body>\n</html>\n"

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

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <div class=\"card\">\n          <div class=\"header align-center\">\n            <div class=\"col-md-12\">\n              <img class=\"responsive-img\" src=\"../assets/svg/keyhole.svg\">\n            </div>\n          </div>\n          <div class=\"body\">\n            <app-login *ngIf=\"loginFlag\"></app-login>\n            <app-register *ngIf=\"!loginFlag\"></app-register>\n            <div class=\"row clearfix\">\n              <div class=\"col-md-10 offset-md-1\">\n                <p>{{loginFlag ? \"Not registered?\": \"Registered?\"}}<a class=\"prompt\" href=\"#\" (click)=\"toggleForms()\" >{{loginFlag ? \" Create an account\":\" Sign in\"}}</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

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

/***/ "../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\n  margin: 12.5% auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lab-operator-dashboard/lab-operator-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Clickable cards that will redirect you to the corresponding component -->\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"body\">\n        <img src=\"../assets/svg/materials.svg\" alt=\"\">\n        <span class=\"\">Order safety supplies</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"body\">\n        <img src=\"../assets/svg/pickup.svg\" class=\"img-responsive\">\n        <span class=\"\">Waste pickup request</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"body\">\n        <img src=\"../assets/svg/id.svg\" class=\"img-responsive\">\n        <span class=\"\">Account settings</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: #fff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\n  <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"email\" name=\"email\" formControlName=\"email\">\n          <!-- <div *ngIf=\"loginForm.controls.email.errors?.invalid && loginForm.controls.email.dirty\" class=\"form-control-feedback\">Sorry, that email is not in our records. Try another?</div> -->\n        </div>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"password\" placeholder=\"password\" name=\"password\" formControlName=\"password\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <button pButton type=\"submit\" label=\"Sign in\"  class=\"ui-button\"></button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
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
        console.log(this.loginForm);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">CCNY EHOS PORTAL</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" routerLink=\"/lab-dashboard\">Home<span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" href=\"#\">About</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/\">Log out</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: #fff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit()\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': (registerForm.controls.firstName.errors && registerForm.controls.firstName.dirty), 'has-success': !registerForm.controls.firstName.errors}\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"first\" name=\"firstName\" formControlName=\"firstName\">\n        <div *ngIf=\"registerForm.controls.firstName.errors?.required && registerForm.controls.firstName.dirty\" class=\"form-control-feedback\">You must provide a first name.</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': (registerForm.controls.lastName.errors && registerForm.controls.lastName.dirty), 'has-success': !registerForm.controls.lastName.errors}\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"last\" name=\"lastName\"  formControlName=\"lastName\">\n        <div *ngIf=\"registerForm.controls.lastName.errors?.required && registerForm.controls.lastName.dirty\" class=\"form-control-feedback\">You must provide a last name.</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': (registerForm.controls.email.errors && registerForm.controls.email.dirty), 'has-success': !registerForm.controls.email.errors}\">\n        <input class=\"form-control\" type=\"email\" placeholder=\"email\" name=\"email\"  formControlName=\"email\">\n        <div *ngIf=\"registerForm.controls.email.errors && registerForm.controls.email.dirty\" class=\"form-control-feedback\">\n            <div *ngIf=\"registerForm.controls.email.errors?.required\">\n              You must provide an email.\n            </div>\n            <div *ngIf=\"registerForm.controls.email.errors?.minlength\">\n              Your email must be greater than 5 characters.\n            </div>\n            <div *ngIf=\"registerForm.controls.email.errors?.maxlength\">\n              Your email must be less than 40 characters.\n            </div>\n            <div *ngIf=\"registerForm.controls.email.errors?.invalidEmail && (!registerForm.controls.email.errors?.required) && (!registerForm.controls.email.errors?.minlength) && (!registerForm.controls.email.errors?.maxlength)\">\n              Invalid email.\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': (registerForm.controls.phoneNumber.errors && registerForm.controls.phoneNumber.dirty), 'has-success': !registerForm.controls.phoneNumber.errors}\">\n        <input [textMask]=\"{mask: mask}\" class=\"form-control\" type=\"text\" placeholder=\"phone number\" name=\"phoneNumber\"  formControlName=\"phoneNumber\">\n        <div *ngIf=\"registerForm.controls.phoneNumber.errors && registerForm.controls.phoneNumber.dirty\" class=\"form-control-feedback\">You must provide a valid phone number.</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': (registerForm.controls.password.errors && registerForm.controls.password.dirty), 'has-success': !registerForm.controls.password.errors}\">\n        <input class=\"form-control\" type=\"password\" placeholder=\"password\" name=\"password\" formControlName=\"password\">\n        <div class=\"form-control-feedback\" *ngIf=\"registerForm.controls.password.errors && registerForm.controls.password.dirty\">\n          <div *ngIf=\"registerForm.controls.password.errors?.required\">\n            You must provide a password.\n          </div>\n          <div *ngIf=\"registerForm.controls.password.errors?.minlength\">\n            Your password must be greater than 8 characters.\n          </div>\n          <div *ngIf=\"registerForm.controls.password.errors?.maxlength\">\n            Your password must be less than 40 characters.\n          </div>\n          <div *ngIf=\"registerForm.controls.password.errors?.invalidPassword && (!registerForm.controls.password.errors?.required) && (!registerForm.controls.password.errors?.minlength) && (!registerForm.controls.password.errors?.maxlength)\">\n            Password must have at least a lowercase letter, uppercase letter, and a number.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': (registerForm.errors && registerForm.controls.confirmPassword.dirty), 'has-success': (!registerForm.errors?.passwordsNoMatch && registerForm.controls.confirmPassword.dirty)}\">\n        <input class=\"form-control\" type=\"password\" placeholder=\"confirm password\" name=\"confirmPassword\" formControlName=\"confirmPassword\">\n        <div class=\"form-control-feedback\" *ngIf=\"registerForm.errors?.passwordsNoMatch && registerForm.controls.confirmPassword.dirty\">\n          Passwords do not match!\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <button pButton [disabled]=\"!registerForm.valid\" type=\"submit\" label=\"Register\" class=\"ui-button\" (click)=\"showDialog()\"></button>\n    </div>\n  </div>\n  <p-dialog header=\"\" [(visible)]=\"display\" modal=\"modal\" width=\"500\" [responsive]=\"true\">\n    <p>\n    </p>\n    <p-footer>\n        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Ok\"></button>\n    </p-footer>\n  </p-dialog>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function RegisterComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        // Our Dialog upon submission
        this.display = false;
        // Using TextMask Module to format the phone number field
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.createForm();
    }
    RegisterComponent.prototype.showDialog = function () {
        this.display = true;
    };
    // Have method that will create the register form entities
    // Inside the formBuilder class, we have a method group, which will attach our form validation requirements
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(40),
                    this.isValidEmail
                ])],
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
        // Let's create a user object to send
        var user = {
            firstName: this.registerForm.get('firstName').value,
            lastName: this.registerForm.get('lastName').value,
            email: this.registerForm.get('email').value,
            phoneNumber: this.registerForm.get('phoneNumber').value,
            password: this.registerForm.get('password').value
        };
        // Let's call authService method we created to send the obj to the backend
        this.authService.registerUser(user).subscribe(function (response) {
            // Response should already be in JSON format
            console.log(response);
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
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    // Function that will submit a post request for the backend to handle
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + "/authentication/register", user);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-primeng.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedPrimeNgModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DialogModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DialogModule"]
            ],
        })
    ], SharedPrimeNgModule);
    return SharedPrimeNgModule;
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
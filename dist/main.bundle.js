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

/***/ "../../../../../src/app/___temp/material2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyCustomMaterialModule = (function () {
    function MyCustomMaterialModule() {
    }
    MyCustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTooltipModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTooltipModule */],
            ]
        })
    ], MyCustomMaterialModule);
    return MyCustomMaterialModule;
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-header></app-header>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"isSubscribed\">\n    <app-body-stepper></app-body-stepper>\n  </div>\n\n  <div class=\"row\" *ngIf=\"!isSubscribed\">\n    <app-body-activation\n      (isSubmited)=\"haveSubscribed($event)\"\n    ></app-body-activation>\n  </div>\n</div>\n"

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
        this.isSubscribed = false;
    }
    AppComponent.prototype.haveSubscribed = function (dataEvent) {
        this.isSubscribed = dataEvent.isSubscribed;
        console.log('this.isSuscribed', this.isSubscribed);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__temp_material2_module__ = __webpack_require__("../../../../../src/app/___temp/material2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_logo_logo_component__ = __webpack_require__("../../../../../src/app/header/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__body_activation_body_activation_component__ = __webpack_require__("../../../../../src/app/body-activation/body-activation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__body_stepper_body_stepper_component__ = __webpack_require__("../../../../../src/app/body-stepper/body-stepper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__body_stepper_device_dialog_device_dialog_component__ = __webpack_require__("../../../../../src/app/body-stepper/device-dialog/device-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__body_activation_body_activation_component__["a" /* BodyActivationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__body_stepper_body_stepper_component__["a" /* BodyStepperComponent */],
                __WEBPACK_IMPORTED_MODULE_11__body_stepper_device_dialog_device_dialog_component__["a" /* DeviceDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__temp_material2_module__["a" /* MyCustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__body_stepper_device_dialog_device_dialog_component__["a" /* DeviceDialogComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__body_stepper_device_dialog_device_dialog_component__["a" /* DeviceDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__services_setting_service__["a" /* SettingService */],
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/body-activation/body-activation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  color: rgba(74,73,74,1.0);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-activation/body-activation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\" style=\"text-align: center\">\n  <mat-card class=\"title\">\n    <h1 style=\"text-align: center\">Get Started</h1>\n\n    <p style=\"text-align: center\" class=\"col-md-6 col-md-offset-3\">\n      Welcome! Thanks for installing AT&T Premier App. Please provide us your company details so we can initiate the\n      integration process. Our team will fully handle the implementation and notify you once everything is ready.\n    </p>\n  </mat-card>\n</div>\n\n<div class=\"activation col-md-8 col-md-offset-2\">\n  <mat-card>\n    <mat-card-title>\n      <h2>Submit Activation Request</h2>\n    </mat-card-title>\n\n    <mat-card-content>\n      <form class=\"formwidth\" #myForm=\"ngForm\">\n        <div class=\"form-group\">\n          <h4>Enter your company name</h4>\n          <p>The same as stated in your AT&T contract</p>\n          <mat-form-field hintLabel=\"The same as stated in your AT&T contract\" class=\"example-full-width\" flex-gt-sm>\n            <input\n              style=\"width: 100%\"\n              matInput\n              placeholder=\"ACME. Inc.\"\n              name=\"companyName\"\n              [(ngModel)]=\"activationData.companyName\"\n            >\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group\">\n          <h4>Enter your AT&T Account Number</h4>\n          <p>We need this to specify your AT&T Premier account. You can find it on the AT&T Premeir website.</p>\n          <mat-form-field\n            hintLabel=\"We need this to specify your AT&T Premier account. You can find it on the AT&T Premeir website.\">\n            <input\n              matInput\n              placeholder=\"0000008\"\n              class=\"example-full-width\"\n              name=\"accountNumber\"\n              [(ngModel)]=\"activationData.accountNumber\"\n            >\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group\">\n          <h4>Enter your full name</h4>\n          <p>Please introduce yourself</p>\n          <mat-form-field hintLabel=\"Please introduce yourself.\">\n            <input\n              matInput\n              placeholder=\"First and Last name\"\n              name=\"customerName\"\n              [(ngModel)]=\"activationData.customerName\"\n            >\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group\">\n          <h4>Enter email</h4>\n          <p>We will use this email address as the main communication channel during activation</p>\n          <mat-form-field\n            hintLabel=\"We will use this email address as the main communication channel during activationEnter\">\n            <input\n              matInput\n              placeholder=\"example@yourcompany.com\"\n              name=\"customerEmail\"\n              [(ngModel)]=\"activationData.customerEmail\"\n            >\n          </mat-form-field>\n        </div>\n\n      </form>\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"onSubmit()\"\n        [disabled]=\"!activationData.companyName || !activationData.accountNumber || !activationData.customerName || !activationData.customerEmail\"\n      >Submit</button>\n    </mat-card-actions>\n\n    <mat-card-footer>\n    </mat-card-footer>\n\n  </mat-card>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/body-activation/body-activation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyActivationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_activation_model__ = __webpack_require__("../../../../../src/app/shared/activation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyActivationComponent = (function () {
    function BodyActivationComponent(settingService, settings) {
        this.settingService = settingService;
        this.settings = settings;
        this.isSubmited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isSubscribed = true;
        this.activationData = new __WEBPACK_IMPORTED_MODULE_1__shared_activation_model__["a" /* ActivationModel */]();
    }
    BodyActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.checkActivation()
            .subscribe(function (response) {
            var data = response.json();
            if (data.result[0] && data.result[0].is_activated) {
                _this.scrollToTop();
                console.log('-- isSubscribed defined as:', data.result[0].is_activated);
                _this.isSubmited.emit({ isSubscribed: true });
                _this.settings.changeSysId(data.result[0].sys_id);
            }
        }, function (err) {
            console.log('some error when activation check:', err);
        });
    };
    BodyActivationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.settings.currentSysId.subscribe(function (currentSysId) { return _this.currentSysId = currentSysId; });
        this.settingService.setSettings(this.activationData)
            .subscribe(function (response) {
            var data = response.json();
            console.log('all settings:', data.result.sys_id);
        }, function (err) {
            console.log('some error:', err);
        });
        // this.settingService.getSettings()
        //   .subscribe(
        //     ( data ) => { console.log('all settings:', data)},
        //     ( err ) => { console.log('some error:', err)},
        //   );
        this.isSubmited.emit({ isSubscribed: this.isSubscribed });
        this.scrollToTop();
        setTimeout(function () {
            _this.isSubscribed = true;
        }, 2000);
    };
    BodyActivationComponent.prototype.scrollToTop = function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", Object)
    ], BodyActivationComponent.prototype, "isSubmited", void 0);
    BodyActivationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-body-activation',
            template: __webpack_require__("../../../../../src/app/body-activation/body-activation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body-activation/body-activation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */]])
    ], BodyActivationComponent);
    return BodyActivationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/body-stepper/body-stepper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: #fff0;\n  color: rgba(74,73,74,1.0);\n}\n\ntable{\n  color: rgba(74, 73, 74, 0.84);\n  border: 3px solid rgba(0, 0, 0, 0)\n}\ntable th:nth-child(1){ width: 10% }\ntable th:nth-child(2){ width: 30% }\ntable th:nth-child(3){ width: 30% }\ntable th:nth-child(4){ width: 30% }\n\nth{\n  font-size: smaller;\n}\n\nform{\n  font-family: 'Source Sans Pro', Arial, Helvetica !important;\n  background-color: #ffffff;\n  color: rgba(74,73,74,1.0);\n  padding: 4rem;\n  margin: 20px 10px;\n  box-shadow: 0 1px 15px rgba(0,0,0,0.30), 0 2px 2px rgba(0,0,0,0.22);\n}\n\n.example-full-width{\n  width: 100%\n}\n\nbutton{\n  padding: 5px 2rem;\n}\n\n.device-item{\n  padding: 30px 10px;\n  border: 2px solid lightgray;\n  border-radius: 10px;\n  margin: 20px 0;\n  font-size: 1.3rem;\n}\n\n.description {\n  background: rgba(255,255,255,0.0);\n  height: auto;\n  width: auto;\n  margin: 0;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 14.0px;\n  color: rgba(66,139,202,1.0);\n  line-height: 18.0px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.subscribed{\n  padding: 10px 15px;\n  border: 1px solid lightgreen;\n  margin: 20px 0;\n  line-height: 25px;\n  color: #54d154;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nmat-list-item-content, .mat-list-item-content{\n  -webkit-box-orient: vertical!important;\n  -webkit-box-direction: normal!important;\n      -ms-flex-direction: column!important;\n          flex-direction: column!important;\n}\n\n.empty{\n  padding: 20px;\n  color: darkgray;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: 600;\n}\n.empty i {\n  margin-right: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-stepper/body-stepper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1 style=\"text-align: center\">App Setup</h1>\n  <p style=\"text-align: center\" class=\"col-md-6 col-md-offset-3\">\n    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum.\n  </p>\n</div>\n\n<div class=\"row\">\n  <mat-horizontal-stepper [linear]=\"isLinear\"   #stepper>\n\n\n\n    <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"false\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>API Activation</ng-template>\n        <h2 style=\"text-align: center\">API Activation</h2>\n        <b>Enter API Activation Token Code</b>\n        <p>It's a code, that has been sent to example@yourcompany.com\n          <br>\n          ( Format: TOKEN-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX )</p>\n\n        <mat-form-field class=\"example-full-width\">\n          <input\n            matInput\n            placeholder=\"Copy-paste code here\"\n            formControlName=\"firstCtrl\"\n            required\n            [(ngModel)]=\"token\"\n          >\n        </mat-form-field>\n\n        <div>\n          <button\n            mat-raised-button\n            color=\"primary\" style=\"width: 100%\"\n            (click)=\"checkToken()\"\n          >Activate</button>\n        </div>\n\n        <div *ngIf=\"goodToken\" class=\"subscribed\">\n          <i class=\"material-icons\">done</i>\n          <b>API has been activated</b>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"false\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Assign Roles</ng-template>\n        <h2 style=\"text-align: center\">Assign Roles</h2>\n        <div style=\"text-align: center\"  class=\"label1\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus\n          sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n          <div class=\"description\">Advanced Role Configuration</div>\n        </div>\n\n        <p>\n        <b>Add role(s) that will be cofigured as “AT&T Service Manager” </b>\n        </p>\n\n        <!--<mat-form-field class=\"example-full-width\">-->\n          <!--<input matInput placeholder=\"Type role name ..\" formControlName=\"secondCtrl\" required>-->\n        <!--</mat-form-field>-->\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Type user name\" aria-label=\"State\" [matAutocomplete]=\"auto1\" formControlName=\"secondCtrl\">\n          <mat-autocomplete #auto1=\"matAutocomplete\">\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role.name\">\n              <span>{{ role.name }}</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n\n        <div>\n          <button mat-raised-button color=\"primary\" style=\"width: 100%\" matStepperNext>Assign</button>\n        </div>\n\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"thirdFormGroup\" [editable]=\"false\">\n      <form [formGroup]=\"thirdFormGroup\">\n        <ng-template matStepLabel>Set Billing Details</ng-template>\n        <h2 style=\"text-align: center\">Set Billing Details</h2>\n        <div style=\"text-align: center\"  class=\"label1\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus\n          sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n          <div class=\"description\">Configure Default Billing <Address></Address></div>\n        </div>\n\n        <br>\n        <b>Add contact person(s) </b>\n        <br>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Street Address\" formControlName=\"thirdCtrl\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Country / State\" formControlName=\"thirdCtrl\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n          <textarea matInput placeholder=\"City\" matTextareaAutosize matAutosizeMinRows=\"2\"\n            matAutosizeMaxRows=\"5\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field>\n          <textarea matInput placeholder=\"Zip Code\" matTextareaAutosize matAutosizeMinRows=\"2\"\n                    matAutosizeMaxRows=\"5\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Contact Person\" aria-label=\"State\" [matAutocomplete]=\"auto2\" formControlName=\"thirdCtrl\">\n          <mat-autocomplete #auto2=\"matAutocomplete\">\n            <mat-option *ngFor=\"let user of users\" [value]=\"user.name\">\n              <span>{{ user.name }}</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n\n        <div>\n          <button mat-raised-button color=\"primary\" style=\"width: 100%\" matStepperNext>Assign</button>\n        </div>\n\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"fourthFormGroup\" [editable]=\"false\">\n      <form [formGroup]=\"fourthFormGroup\">\n        <ng-template matStepLabel>Set-up Catalog</ng-template>\n        <h2 style=\"text-align: center\">Set-up Catalog</h2>\n        <div style=\"text-align: center\"  class=\"label1\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus\n          sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n          <div class=\"description\">Advanced Configuration<Address></Address></div>\n        </div>\n\n        <p>\n          <b>Add devices to the list</b>\n        </p>\n        <div *ngIf=\"devices.length == 0\" class=\"device-item empty\">\n          <i class=\"material-icons\">pets</i>\n          <p>Not selected yet</p>\n        </div>\n        <mat-list>\n          <mat-list-item *ngFor=\"let item of devices; let i = index\" class=\"device-item\">\n            <table style=\"width: 100%\">\n              <tr>\n                <th rowspan=\"2\">\n                  <span class=\"device-img\">\n                    <i class=\"material-icons\">developer_mode</i>\n                  </span>\n                </th>\n                <th>NAME</th>\n                <th>SKU</th>\n                <th>PRICE</th>\n              </tr>\n              <tr>\n                <td>{{ item.name }}</td>\n                <td>{{ item.sku }}</td>\n                <td>{{ item.price }}</td>\n              </tr>\n              <tr>\n                <td colspan=\"3\" style=\"padding-top: 15px;\">\n                  {{ item.plans.rate.length }} plans and .. features avaliable\n                  <span class=\"description\" (click)=\"openDialog(item)\">Configure</span>\n                </td>\n                <td style=\"text-align: right\">\n                  <i\n                    (click)=\"removeDevice(i)\"\n                    class=\"material-icons\"\n                    style=\"cursor: pointer\"\n                  >delete</i>\n                </td>\n              </tr>\n            </table>\n          </mat-list-item>\n\n        </mat-list>\n\n        <br>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Type SKU or device name\" aria-label=\"device list\" [matAutocomplete]=\"auto3\" formControlName=\"fourthCtrl\">\n          <mat-autocomplete #auto3=\"matAutocomplete\">\n\n            <mat-option\n              *ngFor=\"let device of catalogDevices; let i = index\"\n              (click)=\"chooseDevice(device)\"\n              [value]=\"device.name\"\n            >\n              <span>\n                <img [src]=\"device.image\" style=\"max-width: 50px; max-height: 50px; height: auto;\"></span>\n              <span>{{ device.name }}  ({{ device.sku }})</span>\n            </mat-option>\n\n          </mat-autocomplete>\n        </mat-form-field>\n      </form>\n    </mat-step>\n\n\n\n  </mat-horizontal-stepper>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-stepper/body-stepper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyStepperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_dialog_device_dialog_component__ = __webpack_require__("../../../../../src/app/body-stepper/device-dialog/device-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BodyStepperComponent = (function () {
    function BodyStepperComponent(dialog, _formBuilder, globalSettings, userSys) {
        var _this = this;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.globalSettings = globalSettings;
        this.userSys = userSys;
        this.isLinear = true;
        this.catalogDevices = [];
        this.catalogPlans = {};
        this.catalogFeatures = {};
        this.devices = [];
        this.users = [
            {
                name: 'John Smith 1',
            },
            {
                name: 'John Smith 2',
            },
            {
                name: 'John Smith 3',
            }
        ];
        this.goodToken = false;
        this.deviceCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredDevice = this.deviceCtrl.valueChanges
            .startWith(null)
            .map(function (state) { return state ? _this.filterDevice(state) : _this.catalogDevices.slice(); });
    }
    BodyStepperComponent.prototype.filterDevice = function (name) {
        return this.catalogDevices.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    BodyStepperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalSettings.currentSysId.subscribe(function (currentSysId) { return _this.currentSysId = currentSysId; });
        this.userSys.getUsers().subscribe(function (response) { return _this.users = response.result; });
        this.userSys.getRoles().subscribe(function (response) { return _this.roles = response.result; });
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.fourthFormGroup = this._formBuilder.group({
            fourthCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
    };
    BodyStepperComponent.prototype.openDialog = function (item) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__device_dialog_device_dialog_component__["a" /* DeviceDialogComponent */], {
            height: '90vh',
            width: '800px',
            data: item
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    BodyStepperComponent.prototype.checkToken = function () {
        var _this = this;
        if (this.token && this.token.length > 5) {
            // this.firstFormGroup.disable();
            this.stepper.selected.editable = false;
            this.globalSettings.setToken(this.token, this.currentSysId)
                .subscribe(function () {
                _this.getData();
                _this.goodToken = true;
                setTimeout(function () {
                    _this.stepper.selectedIndex = 1;
                }, 3000);
            }, function () { });
        }
    };
    BodyStepperComponent.prototype.getData = function () {
        var _this = this;
        this.globalSettings.getCatalog()
            .subscribe(function (response) {
            var data = response.json();
            // console.log('all settings:', data.result[0].data);
            _this.catalog = JSON.parse(data.result[0].data);
            // console.log('sku11460700036:', this.catalog);
            // this.catalog = data.result;
            _this.createCatalogs();
        }, function (err) {
            console.log('some error whit catalog loading:', err);
        });
    };
    BodyStepperComponent.prototype.chooseDevice = function (device) {
        this.devices.push(device);
        var i = this.devices.indexOf(device);
        this.setOptionsDevice(i);
        console.log('device', device);
    };
    BodyStepperComponent.prototype.setOptionsDevice = function (i) {
        var device = this.devices[i];
        var devicePlans = [];
        for (var _i = 0, _a = device.plans.rate; _i < _a.length; _i++) {
            var plan = _a[_i];
            devicePlans.push(this.catalogPlans[plan]);
        }
        this.devices[i].devicePlans = devicePlans;
    };
    BodyStepperComponent.prototype.removeDevice = function (i) {
        this.devices.splice(i, 1);
    };
    BodyStepperComponent.prototype.createCatalogs = function () {
        for (var i in this.catalog) {
            var item = this.catalog[i];
            switch (item.type) {
                case 'deviceSku': {
                    this.catalogDevices.push(item);
                    break;
                }
                case 'rateplanSku': {
                    this.catalogPlans[item.sku] = item;
                    break;
                }
                case 'featureSku': {
                    this.catalogFeatures[item.sku] = item;
                    break;
                }
            }
        }
        this.asignFeaturesToPlans();
    };
    BodyStepperComponent.prototype.asignFeaturesToPlans = function () {
        console.log('this.catalogPlans', this.catalogPlans);
        for (var i in this.catalogPlans) {
            var item = this.catalogPlans[i];
            var planFeatures = [];
            for (var _i = 0, _a = item.features; _i < _a.length; _i++) {
                var f = _a[_i];
                planFeatures.push(this.catalogFeatures[f]);
            }
            this.catalogPlans[i].planFeatures = planFeatures;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('stepper'),
        __metadata("design:type", Object)
    ], BodyStepperComponent.prototype, "stepper", void 0);
    BodyStepperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-body-stepper',
            template: __webpack_require__("../../../../../src/app/body-stepper/body-stepper.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body-stepper/body-stepper.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]])
    ], BodyStepperComponent);
    return BodyStepperComponent;
}());



/***/ }),

/***/ "../../../../../src/app/body-stepper/device-dialog/device-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plan-item{\n  padding: 20px 20px;\n  margin: 10px 0;\n  border: 2px solid lightgray;\n  border-radius: 10px;\n  color: rgba(74,73,74,1.0);\n  font-family: 'Source Sans Pro';\n}\n\n.mat-checkbox{\n  margin-left: 30px;\n  font-size: smaller;\n  font-family: 'Source Sans Pro';\n}\n\n.mat-radio-button{\n  margin-bottom: 10px;\n  font-family: 'Source Sans Pro';\n}\n\n.mat-radio-button span{\n  padding: 0 30px;\n}\n\n.mat-checkbox span{\n  padding: 0 35px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-stepper/device-dialog/device-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"cursor: pointer\" (click)=\"onNoClick()\">\n  Cancel\n</p>\n<h1>\n  Configure Device\n</h1>\n<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Cras\n  justo odio, dapibus ac facilisis in, egestas eget quam.</p>\n\n<mat-form-field style=\"width: 100%\" [formGroup]=\"myGroup\">\n  <input\n    matInput\n    placeholder=\"Device name\"\n    formControlName=\"nameCtrl\"\n    name=\"DeviceName\"\n    required\n    [(ngModel)]=\"device.name\"\n  >\n</mat-form-field>\n\n<mat-form-field [formGroup]=\"myGroup\">\n  <input\n    matInput\n    placeholder=\"SKU\"\n    formControlName=\"skuCtrl\"\n    name=\"SKU\"\n    required\n    [(ngModel)]=\"device.sku\"\n  >\n</mat-form-field>\n\n<mat-form-field [formGroup]=\"myGroup\">\n  <input\n    matInput\n    placeholder=\"$0.00\"\n    formControlName=\"priceCtrl\"\n    name=\"Price\"\n    required\n    [(ngModel)]=\"device.price\"\n  >\n</mat-form-field>\n\n<hr>\n\n<h2>Plans and Features</h2>\n\n\n<form class=\"example-container\">\n  <mat-radio-group>\n    <div class=\"row plan-item\" *ngFor=\"let plan of device.devicePlans\">\n      <mat-radio-button value=\"{{plan.sku}}\" style=\"width:100%;\">\n        {{ plan.name }}<span> {{ plan.sku }}</span><span> {{ plan.price }}</span>\n      </mat-radio-button>\n\n      <p *ngFor=\"let feature of plan.planFeatures\">\n        <mat-checkbox>\n          {{feature.name}}\n          <span>{{ feature.sku }}</span>\n          <span>{{ feature.price }}</span>\n        </mat-checkbox>\n      </p>\n    </div>\n  </mat-radio-group>\n\n</form>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/body-stepper/device-dialog/device-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DeviceDialogComponent = (function () {
    function DeviceDialogComponent(dialogRef, _formBuilder, data) {
        this.dialogRef = dialogRef;
        this._formBuilder = _formBuilder;
        this.data = data;
        this.plans = [
            {
                name: 'AT&T Plan #1',
                sku: '92839879871',
                price: '$100.00'
            },
            {
                name: 'AT&T Plan #2',
                sku: '92839879872',
                price: '$100.00'
            },
            {
                name: 'AT&T Plan #3',
                sku: '92839879873',
                price: '$100.00'
            }
        ];
        this.features = [
            {
                name: 'Feature #1',
                sku: '92839879453',
                price: '$10.00'
            },
            {
                name: 'Feature #2',
                sku: '92839879454',
                price: '$11.00'
            },
            {
                name: 'Feature #3',
                sku: '92839879455',
                price: '$12.00'
            }
        ];
        this.device = data;
        this.myGroup = this._formBuilder.group({
            nameCtrl: [data.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            skuCtrl: [data.sku, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            priceCtrl: [data.price, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
        });
    }
    DeviceDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeviceDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-device-dialog',
            template: __webpack_require__("../../../../../src/app/body-stepper/device-dialog/device-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body-stepper/device-dialog/device-dialog.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], Object])
    ], DeviceDialogComponent);
    return DeviceDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{    text-align: center;\n  font-size: small;\n  font-weight: 800;\n  color: #939596;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logo></app-logo>\n<p>AT&T PREMIER APP</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/logo/logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-2 col-md-offset-5\">\n    <div class=\"visual\">\n      <div class=\"group2\">\n        <div class=\"bg\"></div>\n        <div class=\"icshoppingcart24px\"><img class=\"image2\"\n                                             src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedshape  2.png\"\n                                             anima-src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedshape  2.png\"><img\n          class=\"image3\"\n          src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedshape  8.png\"\n          anima-src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedshape  8.png\">\n        </div>\n      </div>\n\n\n      <div class=\"group3\">\n        <div class=\"view4\"></div>\n        <img class=\"bitmap\"\n             src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedbitmap.png\"\n             anima-src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedbitmap.png\">\n      </div>\n\n      <div class=\"view1\">\n        <div class=\"view2\"></div>\n        <div class=\"view3\"><img class=\"image4\"\n                                src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedshape  8.png\"\n                                anima-src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedshape  8.png\"><img\n          class=\"image5\"\n          src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedshape  5.png\"\n          anima-src=\"https://anima-uploads.s3.amazonaws.com/59ca10d54309b8000ded7e76/59faeea7764d0a000ce02c4f/59faeea8764d0a000b2dd052/img/att get startedshape  5.png\">\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
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

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-logo',
            template: __webpack_require__("../../../../../src/app/header/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/setting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingService = (function () {
    function SettingService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('no sys_id');
        this.currentSysId = this.messageSource.asObservable();
    }
    SettingService.prototype.changeSysId = function (message) {
        this.messageSource.next(message);
    };
    SettingService.prototype.getSysId = function () {
        // const x: Response = this.currentSysId;
        // return x.json()
    };
    SettingService.prototype.createAuthorizationHeader = function (headers) {
    };
    SettingService.prototype.checkActivation = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get('/api/now/table/x_mobi_aom_att_global_settings?sysparm_fields=sys_id%2Cis_activated&sysparm_limit=1');
    };
    SettingService.prototype.getSettings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get('/api/now/table/x_mobi_aom_att_global_settings?sysparm_fields=account_number%2Ccustomer_email%2Ccompany_name%2Ccustomer_name&sysparm_limit=1', {
            headers: headers
        })
            .map(function (response) { return response.json(); });
    };
    SettingService.prototype.setSettings = function (settings) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post('/api/now/table/x_mobi_aom_att_global_settings', {
            'account_number': settings.accountNumber,
            'company_name': settings.companyName,
            'customer_name': settings.customerName,
            'customer_email': settings.customerEmail,
            'is_activated': true
        }, {
            headers: headers
        });
    };
    SettingService.prototype.setToken = function (token, sys_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.put('/api/now/table/x_mobi_aom_att_global_settings/'
            + sys_id +
            '?sysparm_fields=', {
            'token_api': token
        }, {
            headers: headers
        });
    };
    SettingService.prototype.getCatalog = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get('/api/now/table/x_mobi_aom_att_global_settings?sysparm_fields=data&sysparm_limit=1', {
            headers: headers
        });
        // .map(response => response.json());
    };
    SettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('no sys_id');
        this.currentSysId = this.messageSource.asObservable();
    }
    UserService.prototype.changeSysId = function (message) {
        this.messageSource.next(message);
    };
    UserService.prototype.createAuthorizationHeader = function (headers) {
    };
    ;
    UserService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get('/api/now/table/sys_user?sysparm_limit=10', {
            headers: headers
        })
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getRoles = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get('/api/now/table/sys_user_group?sysparm_limit=10', {
            headers: headers
        })
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/activation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationModel; });
var ActivationModel = (function () {
    function ActivationModel(companyName, accountNumber, customerName, customerEmail, sysId) {
        this.companyName = companyName;
        this.accountNumber = accountNumber;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.sysId = sysId;
    }
    return ActivationModel;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
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
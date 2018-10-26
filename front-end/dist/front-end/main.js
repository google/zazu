(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/angular-material/angular-material.module.ts":
/*!*********************************************************!*\
  !*** ./src/angular-material/angular-material.module.ts ***!
  \*********************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/admin-guard.service */ "./src/app/auth/admin-guard.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _viewer_viewer_report_list_viewer_report_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewer/viewer-report-list/viewer-report-list.component */ "./src/app/viewer/viewer-report-list/viewer-report-list.component.ts");
/* harmony import */ var _viewer_viewer_report_viewer_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewer/viewer-report/viewer-report.component */ "./src/app/viewer/viewer-report/viewer-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule',
                canActivate: [_auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_0__["AdminGuard"]]
            },
            {
                path: 'user',
                component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ViewerComponent"],
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', component: _viewer_viewer_report_list_viewer_report_list_component__WEBPACK_IMPORTED_MODULE_6__["ViewerReportListComponent"] },
                    { path: ':reportID', component: _viewer_viewer_report_viewer_report_component__WEBPACK_IMPORTED_MODULE_7__["ViewerReportComponent"] }
                ]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front-end';
        this.panelOpenState = false;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
/* harmony import */ var _auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/admin-guard.service */ "./src/app/auth/admin-guard.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../angular-material/angular-material.module */ "./src/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _viewer_viewer_report_list_viewer_report_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewer/viewer-report-list/viewer-report-list.component */ "./src/app/viewer/viewer-report-list/viewer-report-list.component.ts");
/* harmony import */ var _viewer_viewer_report_viewer_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewer/viewer-report/viewer-report.component */ "./src/app/viewer/viewer-report/viewer-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_14__["ViewerComponent"], _viewer_viewer_report_list_viewer_report_list_component__WEBPACK_IMPORTED_MODULE_15__["ViewerReportListComponent"], _viewer_viewer_report_viewer_report_component__WEBPACK_IMPORTED_MODULE_16__["ViewerReportComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                _auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"],
                _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _shared_services_report_service__WEBPACK_IMPORTED_MODULE_12__["ReportService"],
                _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_13__["OrganizationService"],
                _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_0__["PaginationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/admin-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/admin-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
            console.log('You are admin, go through!');
            return true;
        }
        // If Not admin, redirect to another page
        /*
        this.router.navigate([' Maybe Log in? 404? Access not found ? ']);
        */
        console.log('Not an Admin! Begoneeeee');
        return false;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.ADMIN = 'ADMIN';
        this.VIEWACCESS = 'VIEWACCESS';
        this.user = {
            name: 'John Doe',
            role: this.ADMIN
        };
    }
    AuthService.prototype.isAuthenticated = function () {
        return true;
    };
    AuthService.prototype.isAdmin = function () {
        return this.ADMIN === this.user.role;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"width: 50%; padding: 20px; margin: auto;\">\n    <button mat-button routerLink=\"../admin\" >Admin</button>\n    <button mat-button routerLink=\"../user\" >Viewer</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        /*
        if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
          this.router.navigate(['/admin']);
        }
        */
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/report-list.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/report-list.pipe.ts ***!
  \**************************************************/
/*! exports provided: ReportListPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListPipe", function() { return ReportListPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportListPipe = /** @class */ (function () {
    function ReportListPipe(paginationService) {
        this.paginationService = paginationService;
    }
    ReportListPipe.prototype.transform = function (reportList, searchName, organization, sort, page) {
        var currentList = reportList;
        // If there's a reportList
        if (reportList) {
            // If there's a search
            if (searchName) {
                searchName = searchName.toLowerCase();
                currentList = currentList.filter(function (el) { return el.name.toLowerCase().indexOf(searchName) > -1; });
            }
            // if there's a organization
            if (organization) {
                if (organization !== 'All') {
                    currentList = currentList.filter(function (element) { return element.organization.id === organization; });
                }
            }
            // if there's a sort
            if (sort) {
                if (sort === 'Alphabetical') {
                    var sorted = currentList.sort(function (a, b) { return (a.name > b.name ? 1 : a.name === b.name ? 0 : -1); });
                    if (sort.charAt(0) === '-') {
                        sorted.reverse();
                    }
                    currentList = sorted;
                }
                if (sort === 'Latest') {
                    var sorted = currentList.sort(function (a, b) {
                        return new Date(a.date) < new Date(b.date)
                            ? 1
                            : new Date(a.date) === new Date(b.date)
                                ? 0
                                : -1;
                    });
                    currentList = sorted;
                }
            }
            this.paginationService.changeTotalPages(Math.ceil(currentList.length / this.paginationService.pagination.itemsPerPage));
            return currentList.slice(this.paginationService.pagination.currentPage *
                this.paginationService.pagination.itemsPerPage -
                this.paginationService.pagination.itemsPerPage, this.paginationService.pagination.itemsPerPage *
                this.paginationService.pagination.currentPage);
        }
        return currentList;
    };
    ReportListPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reportList'
        }),
        __metadata("design:paramtypes", [_services_pagination_service__WEBPACK_IMPORTED_MODULE_1__["PaginationService"]])
    ], ReportListPipe);
    return ReportListPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/organization.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/organization.service.ts ***!
  \*********************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var OrganizationService = /** @class */ (function () {
    function OrganizationService(http) {
        this.http = http;
        this.URL = '../../../assets/example-data/';
    }
    /**
     *  Method for getting all organizations with just name and ID
     *  Primarily used in filters and breadcrumbs
     */
    OrganizationService.prototype.getAllOrganizationsWithNoDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.get(this.URL + 'organizations.mockdata.json')).toPromise())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Method for getting all of the organizations with all the details
     */
    OrganizationService.prototype.getAllOrganizations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.get(this.URL + 'organizations.mockdata.json')).toPromise())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Method for getting details of a specific organization
     * @param id - ID of the organization
     */
    OrganizationService.prototype.getOrganizationById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.get(this.URL + 'single-organization.mockup.json')).toPromise())];
                    case 1: return [4 /*yield*/, _a.sent()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Method for getting all current directory
     */
    OrganizationService.prototype.getAllCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categories, orgs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categories = [];
                        return [4 /*yield*/, this.getAllOrganizations()];
                    case 1:
                        orgs = _a.sent();
                        orgs.forEach(function (org) {
                            org.categories.forEach(function (category) {
                                if (!categories.includes(category)) {
                                    categories.push(category);
                                }
                            });
                        });
                        return [2 /*return*/, categories];
                }
            });
        });
    };
    /**
     * Method for creating new orgnization
     * @param organization - organization object
     */
    OrganizationService.prototype.CreateNewOrganization = function (organization) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Organization Created');
                        console.log(organization);
                        return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Method for editing organization
     * @param organization - organiztion object
     */
    OrganizationService.prototype.EditOrganization = function (organization) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Organization Edit: ');
                        console.log(organization);
                        return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Method for deleting organization
     * @param organizationID - ID of the organization you want to delete
     */
    OrganizationService.prototype.DeleteOrganization = function (organizationID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Organization Delete: ' + organizationID);
                        return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrganizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], OrganizationService);
    return OrganizationService;
}());



/***/ }),

/***/ "./src/app/shared/services/pagination.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/pagination.service.ts ***!
  \*******************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.paginationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Max number of items in list per page
        // Edit this to show more items in list
        this.ITEMS_PER_PAGE = 5;
        this.pagination = {
            currentPage: 1,
            itemsPerPage: this.ITEMS_PER_PAGE,
            totalPages: 1
        };
    }
    PaginationService.prototype.getPagination = function () {
        this.paginationChanged.next(this.pagination);
    };
    PaginationService.prototype.changePage = function (currentPage) {
        this.pagination.currentPage = currentPage;
        this.paginationChanged.next(this.pagination);
    };
    PaginationService.prototype.changeTotalPages = function (totalPages) {
        this.pagination.totalPages = totalPages;
        this.paginationChanged.next(this.pagination);
    };
    PaginationService.prototype.resetPage = function () {
        this.pagination.currentPage = 1;
        this.paginationChanged.next(this.pagination);
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * This is a service used for paginating the list
         */
        ,
        __metadata("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/shared/services/report.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/report.service.ts ***!
  \***************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        this.URL = '../../../assets/example-data/';
    }
    /**
     * Gets all the reports for all organizations
     */
    ReportService.prototype.getAllReports = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.http.get(this.URL + 'reports.mockdata.json')).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets all the details(with meta data) for a specific report
     * @param id - ID of the specific reprot
     */
    ReportService.prototype.getReport = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.http.get(this.URL + 'single-report-with-meta.mockdata.json')).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a specific report with no metadata
     * @param id - ID of the specific reprot
     */
    ReportService.prototype.getReportNoMetaData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.http.get(this.URL + 'single-report-with-meta.mockdata.json')).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
      *  Gets the reports for a specific organization. Can be more than one
      * @param orgIDs ID of a specific organization
      */
    ReportService.prototype.getReportByOrganization = function (orgIDs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.http.get(this.URL + 'reports.mockdata.json')).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all reports for this user
     */
    ReportService.prototype.getReportByUser = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.http.get(this.URL + 'reports.mockdata.json')).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Gets the reports for organization(s). Can be more than one
     * @param orgIDs Array of the Organization IDs
     */
    ReportService.prototype.getReportByOrganizations = function (orgIDs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.http.get(this.URL + 'reports.mockdata.json')).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create new Report
     * @param report - report object
     */
    ReportService.prototype.CreateNewReport = function (report) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Editing Report
     * @param report - report object
     */
    ReportService.prototype.EditReport = function (report) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete Report
     * @param reportID - ID of the report you want to delete
     */
    ReportService.prototype.deleteReport = function (reportID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Report Deleted: ' + reportID);
                        return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.VIEWACCESS = 'VIEWACCESS';
        this.ADMIN = 'ADMIN';
        this.URL = '../../../assets/example-data/';
    }
    /**
     *  Method for getting all users for all organizations
     */
    UserService.prototype.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('getting all users');
                        return [4 /*yield*/, ((this.http.get(this.URL + 'user-list.mockdata.json')).toPromise())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Getting specific user using user ID
     * @param id - id of the user you want to get information
     */
    UserService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.get(this.URL + 'single-user.mockdata.json')).toPromise())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Getting all user for specific organization
     * @param orgId -  ID of the organization you want to get all users
     */
    UserService.prototype.getUsersByOrganization = function (orgId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.get(this.URL + 'user-list.mockdata.json')).toPromise())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create new user
     * @param user - user object for creating new user
     */
    UserService.prototype.createNewUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Edit user
     * @param user - user object for editing user
     */
    UserService.prototype.editUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete user
     * @param userID - ID of the user you want to delete
     */
    UserService.prototype.deleteUser = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('User Deleted: ' + userID);
                        return [4 /*yield*/, null];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _pipes_report_list_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/report-list.pipe */ "./src/app/shared/pipes/report-list.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [_pipes_report_list_pipe__WEBPACK_IMPORTED_MODULE_0__["ReportListPipe"]],
            exports: [
                _pipes_report_list_pipe__WEBPACK_IMPORTED_MODULE_0__["ReportListPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/viewer/viewer-report-list/viewer-report-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/viewer/viewer-report-list/viewer-report-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-container\">\n  <div class=\"breadcrumb\"> <span class=\"active\"><i class=\"material-icons\">\n        assessment </i> Report List</span></div>\n</div>\n<div class=\"main-content-view\">\n  <div class=\"left-main-content-view\" *ngIf=\"initialized\">\n      <h2 *ngIf=\"selectedOrganization && organizations.length > 1\" style=\"width: 100%\" ><span *ngIf=\"selectedOrganization !== 'All'\">{{selectedOrgName.name}}</span><span\n        *ngIf=\"selectedOrganization === 'All'\"> All Organizations</span> </h2>\n    <div *ngIf=\"reports != null \">\n      <div class=\"list\">\n        <div *ngFor=\"let report of reports | reportList: searchName: selectedOrganization : sortValue :  pagination.currentPage\" class=\"card\">\n          <div class=\"container\" (click)=\"reportClicked(report.id)\">\n            <h4 class=\"title\"><strong> {{report.name}}</strong></h4>\n            <p class=\"secondary\">{{report.organization.name}}</p>\n            <p class=\"content\"> {{report.date | date}} </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\" color=\"white\"\n        [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\n          chevron_left\n        </i> </button>\n      {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \" [disabled]=\"pagination.currentPage === pagination.totalPages\"\n        color=\"white\"> <i class=\"material-icons\">\n          chevron_right\n        </i> </button>\n    </p>\n\n  </div>\n\n  <div class=\"right-main-content-view\" *ngIf=\"initialized\">\n    <div class=\"filter\">\n      <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\n        <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\n        <p class=\"title\"> Filter by</p>\n        <mat-form-field appearance=\"outline\" class=\"search\">\n          <mat-label class=\"label-color\">Name</mat-label>\n          <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\n        </mat-form-field>\n        <p class=\"title\" *ngIf=\"organizations.length > 1\"> Organization</p>\n        <mat-form-field appearance=\"outline\" class=\"select\" *ngIf=\"organizations.length > 1\">\n          <mat-select formControlName=\"selectedOrganization\">\n            <mat-option value=\"All\">All</mat-option>\n            <mat-option *ngFor=\"let organization of organizations\" value=\"{{organization.id}}\">{{organization.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <br>\n        <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\n      </form>\n    </div>\n    <div class=\"sort\">\n      <p class=\"title\"> Sort By</p>\n      <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\n        <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\n          {{sort}}\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </div>\n\n\n\n  <div *ngIf=\"!initialized\" style=\"margin:auto; padding-top: 50px;\">\n    <mat-spinner></mat-spinner>\n    <p style=\"text-align: center;\">Loading...</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/viewer/viewer-report-list/viewer-report-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/viewer/viewer-report-list/viewer-report-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewer/viewer-report-list/viewer-report-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/viewer/viewer-report-list/viewer-report-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewerReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerReportListComponent", function() { return ViewerReportListComponent; });
/* harmony import */ var _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../viewer.service */ "./src/app/viewer/viewer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ViewerReportListComponent = /** @class */ (function () {
    function ViewerReportListComponent(viewerService, router, paginationService, route) {
        this.viewerService = viewerService;
        this.router = router;
        this.paginationService = paginationService;
        this.route = route;
        this.organizations = [];
        this.initialized = false;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.selectedOrganization = 'All';
        this.sorts = ['Latest', 'Alphabetical'];
        this.sortValue = this.sorts[0];
    }
    ViewerReportListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, temp, _loop_1, this_1, _i, _b, report, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        this.paginationService.resetPage();
                        this.pageSubscription = this.paginationService.paginationChanged.subscribe(function (pagination) {
                            _this.pagination = pagination;
                        });
                        this.paginationService.getPagination();
                        _a = this;
                        return [4 /*yield*/, this.viewerService.getReports()];
                    case 1:
                        _a.reports = _c.sent();
                        if (this.reports.length === 1) {
                            // navigate to just report view
                        }
                        temp = [];
                        _loop_1 = function (report) {
                            if (this_1.organizations.filter(function (e) { return e.id === report.organization.id; }).length === 0) {
                                this_1.organizations.push(report.organization);
                            }
                            console.log(this_1.organizations);
                        };
                        this_1 = this;
                        for (_i = 0, _b = this.reports; _i < _b.length; _i++) {
                            report = _b[_i];
                            _loop_1(report);
                        }
                        if (this.organizations.length === 1) {
                            // Only One Organization
                        }
                        else {
                            this.filterForm.addControl('selectedOrganization', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('All'));
                        }
                        this.initialized = true;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _c.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ViewerReportListComponent.prototype.initializeOrg = function () {
    };
    ViewerReportListComponent.prototype.reportClicked = function (reportID) {
        this.router.navigate(['../', reportID], { relativeTo: this.route });
    };
    ViewerReportListComponent.prototype.changeSort = function (sort) {
        this.paginationService.resetPage();
        this.sortValue = sort;
    };
    ViewerReportListComponent.prototype.onSearch = function () {
        this.paginationService.resetPage();
        var temp = this.filterForm.value;
        this.searchName = temp.name;
        this.selectedOrganization = temp.selectedOrganization;
        this.selectedOrgName = this.organizations.find(function (org) {
            return org.id === temp.selectedOrganization;
        });
        console.log(temp.selectedOrganization);
    };
    ViewerReportListComponent.prototype.searchFormReset = function () {
        this.filterForm.reset();
        this.filterForm.patchValue({ selectedOrganization: 'All' });
        this.paginationService.resetPage();
    };
    // Pagination Methods
    ViewerReportListComponent.prototype.nextPage = function () {
        if (this.pagination.currentPage < this.pagination.totalPages) {
            this.paginationService.changePage(this.pagination.currentPage + 1);
        }
    };
    // Pagination Methods
    ViewerReportListComponent.prototype.previousPage = function () {
        if (this.pagination.currentPage > 1) {
            this.paginationService.changePage(this.pagination.currentPage - 1);
        }
    };
    ViewerReportListComponent.prototype.ngOnDestroy = function () {
        this.pageSubscription.unsubscribe();
    };
    ViewerReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-viewer-report-list',
            template: __webpack_require__(/*! ./viewer-report-list.component.html */ "./src/app/viewer/viewer-report-list/viewer-report-list.component.html"),
            styles: [__webpack_require__(/*! ./viewer-report-list.component.scss */ "./src/app/viewer/viewer-report-list/viewer-report-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_viewer_service__WEBPACK_IMPORTED_MODULE_1__["ViewerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_0__["PaginationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewerReportListComponent);
    return ViewerReportListComponent;
}());



/***/ }),

/***/ "./src/app/viewer/viewer-report/viewer-report.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/viewer/viewer-report/viewer-report.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-container\">\n  <!-- Breadcrumbs for report when navigation from report list -->\n  <div class=\"breadcrumb\"> <span routerLink=\"../list\"> <i class=\"material-icons\">\n        assessment </i> Report List </span>\n    &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\n      keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}} ({{report.organization.name}})</span> </div>\n</div>\n\n\n<div class=\"main-content-view\">\n  <div class=\"left-main-content-view\">\n    <iframe class=\"report\" src=\"https://datastudio.google.com/embed/reporting/1XuwM0G2Rx55jEWX_Rus05td2IHN0PnQI/page/1M\" frameborder=\"0\"\n      style=\"border:0\" allowfullscreen></iframe>\n  </div>\n  <div class=\"right-main-content-view\">\n    <div class=\"filter information\">\n      <div class=\"more-button\" style=\"margin-top: -10px\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon color=\"more-color\">more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item routerLink=\"./edit-report\">Edit</button>\n          <button mat-menu-item (click)=\"openDialog()\">Delete</button>\n        </mat-menu>\n      </div>\n      <h4 class=\"info-title\"> Report Information</h4>\n      <p> Name: <span class=\"info\">{{report.name}} </span></p>\n      <p>Organization: <span class=\"info\">{{report.organization.name}} </span></p>\n      <p>Date: <span class=\"info\"> {{report.date | date }}</span> </p>\n      <p>Datastudio Link: <span class=\"info\"> {{report.link}}</span></p>\n      <p>Datasources: </p>\n      <div *ngFor=\"let datasource of report.datasources; let i = index\">\n        <p>&nbsp;&nbsp;&nbsp;&bull;<span class=\"info\"> {{datasource.name}} </span> </p>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/viewer/viewer-report/viewer-report.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/viewer/viewer-report/viewer-report.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report {\n  width: 100%;\n  height: calc(100vh - 150px);\n  background-color: white; }\n\n.information .info-title, .metadata .info-title {\n  margin: 0;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: initial; }\n\n.information p, .metadata p {\n  font-size: 15px;\n  margin: 2px 0;\n  font-weight: 400;\n  color: #979797; }\n\n.information p .info, .metadata p .info {\n    color: #4a4a4a;\n    font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/viewer/viewer-report/viewer-report.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/viewer/viewer-report/viewer-report.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerReportComponent", function() { return ViewerReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ViewerReportComponent = /** @class */ (function () {
    function ViewerReportComponent(reportService, route) {
        this.reportService = reportService;
        this.route = route;
    }
    ViewerReportComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.reportID = params['reportID'];
                        });
                        _a = this;
                        return [4 /*yield*/, this.reportService.getReport('reportID')];
                    case 1:
                        _a.report = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewerReportComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewer-report',
            template: __webpack_require__(/*! ./viewer-report.component.html */ "./src/app/viewer/viewer-report/viewer-report.component.html"),
            styles: [__webpack_require__(/*! ./viewer-report.component.scss */ "./src/app/viewer/viewer-report/viewer-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewerReportComponent);
    return ViewerReportComponent;
}());



/***/ }),

/***/ "./src/app/viewer/viewer.component.html":
/*!**********************************************!*\
  !*** ./src/app/viewer/viewer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\n  <div class=\"company\">\n    <div class=\"icon-container\">\n      <div class=\"icon\">\n        <img src=\"../../assets/company-icon.png\" alt=\"Smiley face\">\n      </div>\n    </div>\n    <span class=\"name\"> Company </span>\n  </div>\n</mat-toolbar>\n\n<div class=\"viewer-container\">\n\n  <div class=\"viewer-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/viewer/viewer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/viewer/viewer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n/***** Filter Card ***/\n/****** Buttons Colors  **/\n.toolbar {\n  background-color: #616161;\n  color: white;\n  z-index: 20;\n  position: fixed; }\n.toolbar .menu-icon {\n    min-width: unset;\n    padding: 0; }\n.toolbar .menu-icon i {\n      font-size: 2.5em; }\n.company {\n  height: 64px; }\n.company .icon-container {\n    height: 64px;\n    width: 64px;\n    position: relative; }\n.company .icon-container img {\n      height: 45px;\n      width: 45px;\n      position: absolute;\n      right: 0;\n      left: -30px;\n      top: 0;\n      bottom: 5px;\n      margin: auto auto; }\n.company .name {\n    position: absolute;\n    top: 15px;\n    font-size: 25px;\n    font-weight: bold;\n    color: white;\n    left: 65px; }\n.viewer-container {\n  background-color: #f5f5f5;\n  min-height: calc(100vh - 64px);\n  padding-top: 64px;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/viewer/viewer.component.ts":
/*!********************************************!*\
  !*** ./src/app/viewer/viewer.component.ts ***!
  \********************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewerComponent = /** @class */ (function () {
    function ViewerComponent() {
    }
    ViewerComponent.prototype.ngOnInit = function () {
    };
    ViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewer',
            template: __webpack_require__(/*! ./viewer.component.html */ "./src/app/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.scss */ "./src/app/viewer/viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewerComponent);
    return ViewerComponent;
}());



/***/ }),

/***/ "./src/app/viewer/viewer.service.ts":
/*!******************************************!*\
  !*** ./src/app/viewer/viewer.service.ts ***!
  \******************************************/
/*! exports provided: ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return ViewerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/report.service */ "./src/app/shared/services/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ViewerService = /** @class */ (function () {
    function ViewerService(http, reportService) {
        this.http = http;
        this.reportService = reportService;
    }
    ViewerService.prototype.setUserID = function (id) {
        this.userID = id;
    };
    ViewerService.prototype.getReports = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.reportService.getReportByUser(this.userID)];
            });
        });
    };
    ViewerService.prototype.getReport = function (reportID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.reportService.getReportNoMetaData(reportID)];
            });
        });
    };
    ViewerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _shared_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], ViewerService);
    return ViewerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eldon\Desktop\zazu\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
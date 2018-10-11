(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-report-details/admin-report-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-report-details/admin-report-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(organization != null && user!= null && report != null) || (organization != null && !userView && report != null)\">\r\n\r\n  <div class=\"breadcrumb-container\">\r\n    <!-- Breadcrumbs for report when navigation from organization list -->\r\n    <div class=\"breadcrumb\" *ngIf=\"!userView && organizationID != undefined\"> <span routerLink=\"../../../\"> <i class=\"material-icons\">\r\n          business </i> Organization List </span> &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span routerLink=\"../../\">\r\n        {{organization.name}}</span>\r\n      &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}}   ({{report.organization.name}})</span> </div>\r\n\r\n    <!-- Breadcrumbs for report when navigation from user under organization list -->\r\n    <div class=\"breadcrumb\" *ngIf=\"userView && organizationID != undefined\"> <span routerLink=\"../../../../../\"> <i class=\"material-icons\">\r\n        business </i> Organization List </span>\r\n      &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span routerLink=\"../../../../\">\r\n        {{organization.name}}</span>\r\n      &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span routerLink=\"../../\"> {{user.name}} </span> &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}}\r\n        ({{report.organization.name}})</span></div>\r\n\r\n    <!-- Breadcrumbs for report when navigation from user under user list -->\r\n    <div class=\"breadcrumb\" *ngIf=\"organizationID === undefined && userID != undefined\"> <span routerLink=\"../../../../\"> <i class=\"material-icons\">\r\n        person_outline </i> User List </span>\r\n      &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span routerLink=\"../../\"> {{user.name}} </span> &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}}\r\n        ({{report.organization.name}})</span></div>\r\n\r\n    <!-- Breadcrumbs for report when navigation from report list -->\r\n    <div class=\"breadcrumb\" *ngIf=\"organizationID === undefined && userID === undefined\"> <span routerLink=\"../../\"> <i class=\"material-icons\">\r\n        assessment </i>  Report List </span>\r\n      &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}} ({{report.organization.name}})</span> </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"main-content-view\">\r\n    <h3> {{report.name}}</h3>\r\n    <p>{{report.organization.name}}</p>\r\n    <p>{{report.date | date }}</p>\r\n    <p>{{report.datasource}}</p>\r\n    <p>{{report.link}}</p>\r\n    <hr>\r\n    <h4>Meta Data</h4>\r\n    <p>Created By: {{ report.createdBy}}</p>\r\n    <p>Updated By: {{ report.updatedBy}}</p>\r\n    <h5>Accessed By</h5>\r\n    <p *ngFor=\"let user of report.accessedBy\"> {{user.name}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-report-details/admin-report-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-report-details/admin-report-details.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-report-details/admin-report-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-report-details/admin-report-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminReportDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReportDetailsComponent", function() { return AdminReportDetailsComponent; });
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
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





var AdminReportDetailsComponent = /** @class */ (function () {
    function AdminReportDetailsComponent(reportService, route, userService, organizationService) {
        this.reportService = reportService;
        this.route = route;
        this.userService = userService;
        this.organizationService = organizationService;
        this.organization = null;
        this.user = undefined;
        this.report = null;
    }
    AdminReportDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
                            _this.userID = params['userID'];
                            _this.reportID = params['reportID'];
                        });
                        _a = this;
                        return [4 /*yield*/, this.reportService.getReport('reportID')];
                    case 1:
                        _a.report = _d.sent();
                        if (!(this.userID !== undefined)) return [3 /*break*/, 3];
                        this.userView = true;
                        _b = this;
                        return [4 /*yield*/, this.userService.getUser('userID')];
                    case 2:
                        _b.user = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.userView = false;
                        _d.label = 4;
                    case 4:
                        _c = this;
                        return [4 /*yield*/, this.organizationService.getOrganizationById('orgID')];
                    case 5:
                        _c.organization = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminReportDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AdminReportDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-report-details',
            template: __webpack_require__(/*! ./admin-report-details.component.html */ "./src/app/admin/admin-report-details/admin-report-details.component.html"),
            styles: [__webpack_require__(/*! ./admin-report-details.component.scss */ "./src/app/admin/admin-report-details/admin-report-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"]])
    ], AdminReportDetailsComponent);
    return AdminReportDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-reports/all-report-list/all-report-list.component */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.ts");
/* harmony import */ var _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization/organization-list/organization-list.component */ "./src/app/admin/organization/organization-list/organization-list.component.ts");
/* harmony import */ var _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-users/all-user-list/all-user-list.component */ "./src/app/admin/all-users/all-user-list/all-user-list.component.ts");
/* harmony import */ var _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-users/all-users.component */ "./src/app/admin/all-users/all-users.component.ts");
/* harmony import */ var _auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/admin-guard.service */ "./src/app/auth/admin-guard.service.ts");
/* harmony import */ var _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-report-details/admin-report-details.component */ "./src/app/admin/admin-report-details/admin-report-details.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/admin/user-details/user-details.component.ts");
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/admin/organization/organization.component.ts");
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-reports/all-reports.component */ "./src/app/admin/all-reports/all-reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var adminRoutes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
        canActivate: [_auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]],
        children: [
            {
                path: 'o',
                component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_11__["OrganizationComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_1__["OrganizationListComponent"] },
                    { path: ':id', component: _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__["OrganizationDetailsComponent"] },
                    { path: ':id/u/:userID', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailsComponent"] },
                    { path: ':id/r/:reportID', component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_5__["AdminReportDetailsComponent"] },
                    {
                        path: ':id/u/:userID/r/:reportID',
                        component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_5__["AdminReportDetailsComponent"]
                    },
                ]
            },
            {
                path: 'users',
                component: _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_3__["AllUsersComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_2__["AllUserListComponent"] },
                    {
                        path: 'u/:userID',
                        component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailsComponent"]
                    },
                    {
                        path: 'u/:userID/r/:reportID',
                        component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_5__["AdminReportDetailsComponent"]
                    }
                ]
            },
            {
                path: 'reports',
                component: _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_12__["AllReportsComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_0__["AllReportListComponent"] },
                    { path: 'r/:reportID', component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_5__["AdminReportDetailsComponent"] }
                ]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(adminRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n  <!-- Side Navigation Menu-->\n  <div class=\"side-nav\" [ngClass]=\"{'side-nav-minimized': minimized}\">\n    <!-- Company Title and Logo goes Here-->\n    <div class=\"company\">\n      <div class=\"icon-container\">\n        <div class=\"icon\">\n          <img src=\"../../assets/company-icon.png\" alt=\"Smiley face\">\n        </div>\n      </div>\n      <span class=\"name\"> Company </span>\n    </div>\n\n    <!-- Side Navigation Menus -->\n    <div class=\"menu-container\">\n\n      <!-- Menu # 1 -->\n      <div class=\"menu\" routerLink=\"o\" routerLinkActive=\"menu-active\" >\n        <i class=\"material-icons\">\n          business\n        </i>\n        <span class=\"text\">\n          Organizations\n        </span>\n      </div>\n\n      <!-- Menu # 2 -->\n      <div class=\"menu\" routerLink=\"reports\" routerLinkActive=\"menu-active\">\n        <i class=\"material-icons\">\n          assessment\n        </i>\n        <span class=\"text\">\n          Reports\n        </span>\n      </div>\n\n      <!-- Menu # 3 -->\n      <div class=\"menu\" routerLink=\"users\" routerLinkActive=\"menu-active\">\n        <i class=\"material-icons\">\n          person_outline\n        </i>\n        <span class=\"text\">\n          Users\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"right-content\" [ngClass]=\"{'right-content-minimized': minimized}\">\n    <!-- Top Toolbar -->\n    <mat-toolbar class=\"toolbar\">\n      <button mat-button class=\"menu-icon\" (click)=\"toggleMenu()\">\n        <i class=\"material-icons \">\n          menu\n        </i>\n      </button>\n    </mat-toolbar>\n\n    <!-- Main Content -->\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n.side-nav {\n  width: 190px;\n  height: 100%;\n  background-color: #323232;\n  position: fixed;\n  transition: padding-left 0.5s;\n  /* For Safari 3.1 to 6.0 */\n  transition: width 0.5s;\n  overflow: hidden;\n  z-index: 40; }\n.company {\n  height: 64px; }\n.company .icon-container {\n    height: 64px;\n    width: 64px;\n    position: relative; }\n.company .icon-container img {\n      height: 45px;\n      width: 45px;\n      position: absolute;\n      right: 0;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto auto; }\n.company .name {\n    position: absolute;\n    top: 22px;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n    left: 70px; }\n.menu-container {\n  position: relative; }\n.menu-container .menu-active {\n    background-color: #555555; }\n.menu-container .menu:hover {\n    cursor: pointer; }\n.menu-container .menu {\n    height: 50px;\n    color: white; }\n.menu-container .menu .material-icons {\n      font-size: 30px;\n      position: relative;\n      top: 11px;\n      left: 16px; }\n.menu-container .menu .text {\n      position: absolute;\n      font-size: 17px;\n      left: 64px;\n      margin-top: 17px; }\n.side-nav-minimized {\n  width: 64px !important; }\n.toolbar {\n  background-color: #616161;\n  color: white;\n  z-index: 20;\n  position: fixed; }\n.toolbar .menu-icon {\n    min-width: unset;\n    padding: 0; }\n.toolbar .menu-icon i {\n      font-size: 2.5em; }\n.right-content {\n  margin-left: 190px;\n  transition: margin-left 0.5s; }\n.main-content {\n  background-color: #f5f5f5;\n  min-height: calc(100vh - 64px);\n  padding-top: 64px;\n  height: 100%;\n  height: auto; }\n.right-content-minimized {\n  margin-left: 64px !important; }\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(route) {
        this.route = route;
        this.minimized = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.route.navigate(['admin/o']);
    };
    AdminComponent.prototype.toggleMenu = function () {
        this.minimized = !this.minimized;
        console.log('toggled');
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _shared_pipes_org_category_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/pipes/org-category.pipe */ "./src/app/shared/pipes/org-category.pipe.ts");
/* harmony import */ var _shared_pipes_search_name_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/pipes/search-name.pipe */ "./src/app/shared/pipes/search-name.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organization/organization-list/organization-list.component */ "./src/app/admin/organization/organization-list/organization-list.component.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-material/angular-material.module */ "./src/angular-material/angular-material.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/admin/organization/organization.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/admin/user-details/user-details.component.ts");
/* harmony import */ var _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-report-details/admin-report-details.component */ "./src/app/admin/admin-report-details/admin-report-details.component.ts");
/* harmony import */ var _shared_common_view_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/common-view/user-list/user-list.component */ "./src/app/shared/common-view/user-list/user-list.component.ts");
/* harmony import */ var _shared_common_view_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/common-view/report-list/report-list.component */ "./src/app/shared/common-view/report-list/report-list.component.ts");
/* harmony import */ var _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./all-users/all-users.component */ "./src/app/admin/all-users/all-users.component.ts");
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./all-reports/all-reports.component */ "./src/app/admin/all-reports/all-reports.component.ts");
/* harmony import */ var _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./all-users/all-user-list/all-user-list.component */ "./src/app/admin/all-users/all-user-list/all-user-list.component.ts");
/* harmony import */ var _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./all-reports/all-report-list/all-report-list.component */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_pipes_org_sort_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/pipes/org-sort.pipe */ "./src/app/shared/pipes/org-sort.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_5__["OrganizationListComponent"],
                _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_8__["OrganizationDetailsComponent"],
                _organization_organization_component__WEBPACK_IMPORTED_MODULE_9__["OrganizationComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"],
                _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_11__["AdminReportDetailsComponent"],
                _shared_common_view_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"],
                _shared_common_view_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_13__["ReportListComponent"],
                _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_14__["AllUsersComponent"],
                _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_15__["AllReportsComponent"],
                _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_16__["AllUserListComponent"],
                _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_17__["AllReportListComponent"],
                _shared_pipes_search_name_pipe__WEBPACK_IMPORTED_MODULE_1__["SearchNamePipe"],
                _shared_pipes_org_category_pipe__WEBPACK_IMPORTED_MODULE_0__["OrgCategoryPipe"],
                _shared_pipes_org_sort_pipe__WEBPACK_IMPORTED_MODULE_19__["OrgSortPipe"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/all-reports/all-report-list/all-report-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/all-reports/all-report-list/all-report-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-container\">\n    <div class=\"breadcrumb\"> <span class=\"active\"><i class=\"material-icons\">\n        assessment </i> Report List</span></div>\n  </div>\n\n  <div class=\"main-content-view\">\n      <app-report-list [filters] = \"reportListFilter\" (reportID)=\"goToReport($event)\"></app-report-list>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/all-reports/all-report-list/all-report-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/all-reports/all-report-list/all-report-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/all-reports/all-report-list/all-report-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/all-reports/all-report-list/all-report-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: AllReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportListComponent", function() { return AllReportListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllReportListComponent = /** @class */ (function () {
    function AllReportListComponent(route, router) {
        this.route = route;
        this.router = router;
        // Filter for Report
        this.reportListFilter = {
            name: '',
            organizationID: '',
            sort: ''
        };
    }
    AllReportListComponent.prototype.ngOnInit = function () {
        this.reportListFilter = {
            name: '',
            organizationID: 'ALL',
            sort: ''
        };
    };
    AllReportListComponent.prototype.goToReport = function (reportID) {
        this.router.navigate(['/admin/reports/r', reportID], { relativeTo: this.route });
    };
    AllReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-report-list',
            template: __webpack_require__(/*! ./all-report-list.component.html */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.html"),
            styles: [__webpack_require__(/*! ./all-report-list.component.scss */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AllReportListComponent);
    return AllReportListComponent;
}());



/***/ }),

/***/ "./src/app/admin/all-reports/all-reports.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/all-reports/all-reports.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/all-reports/all-reports.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/all-reports/all-reports.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/all-reports/all-reports.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/all-reports/all-reports.component.ts ***!
  \************************************************************/
/*! exports provided: AllReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportsComponent", function() { return AllReportsComponent; });
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

var AllReportsComponent = /** @class */ (function () {
    function AllReportsComponent() {
    }
    AllReportsComponent.prototype.ngOnInit = function () {
    };
    AllReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-reports',
            template: __webpack_require__(/*! ./all-reports.component.html */ "./src/app/admin/all-reports/all-reports.component.html"),
            styles: [__webpack_require__(/*! ./all-reports.component.scss */ "./src/app/admin/all-reports/all-reports.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllReportsComponent);
    return AllReportsComponent;
}());



/***/ }),

/***/ "./src/app/admin/all-users/all-user-list/all-user-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/all-users/all-user-list/all-user-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-container\">\n  <div class=\"breadcrumb\"> <span class=\"active\"> <i class=\"material-icons\">\n        person_outline </i> User List</span></div>\n</div>\n\n<div class=\"main-content-view\">\n  <app-user-list [filters]=\"filters\" (userID)=\"goToUser($event)\"></app-user-list>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/all-users/all-user-list/all-user-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/all-users/all-user-list/all-user-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/all-users/all-user-list/all-user-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/all-users/all-user-list/all-user-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: AllUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUserListComponent", function() { return AllUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllUserListComponent = /** @class */ (function () {
    function AllUserListComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    AllUserListComponent.prototype.ngOnInit = function () {
        this.filters = {
            name: '',
            organizationID: 'ALL',
            role: '',
            sort: ''
        };
    };
    AllUserListComponent.prototype.goToUser = function (userId) {
        this.router.navigate(['/admin/users/u', userId], { relativeTo: this.route });
    };
    AllUserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-user-list',
            template: __webpack_require__(/*! ./all-user-list.component.html */ "./src/app/admin/all-users/all-user-list/all-user-list.component.html"),
            styles: [__webpack_require__(/*! ./all-user-list.component.scss */ "./src/app/admin/all-users/all-user-list/all-user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AllUserListComponent);
    return AllUserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/all-users/all-users.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/all-users/all-users.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/all-users/all-users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/all-users/all-users.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/all-users/all-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/all-users/all-users.component.ts ***!
  \********************************************************/
/*! exports provided: AllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function() { return AllUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllUsersComponent = /** @class */ (function () {
    function AllUsersComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        this.filters = {
            name: '',
            organizationID: 'ALL',
            role: '',
            sort: ''
        };
    };
    AllUsersComponent.prototype.goToUser = function (userId) {
        this.router.navigate(['./u', userId], { relativeTo: this.route });
    };
    AllUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-users',
            template: __webpack_require__(/*! ./all-users.component.html */ "./src/app/admin/all-users/all-users.component.html"),
            styles: [__webpack_require__(/*! ./all-users.component.scss */ "./src/app/admin/all-users/all-users.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AllUsersComponent);
    return AllUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"organization != null\">\r\n  <div class=\"breadcrumb-container\">\r\n    <div> <span routerLink=\"../\"><i class=\"material-icons\"> business </i> Organization List </span> &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span class=\"active\">{{organization.name}}\r\n      </span> </div>\r\n  </div>\r\n\r\n  <div class=\"main-content-view\">\r\n    <div class=\"details\">\r\n      <div class=\"card\">\r\n        <div class=\"container\">\r\n          <h2 class=\"title\">{{organization.name}}</h2>\r\n          <h4 class=\"secondary\"><span *ngFor=\"let category of organization.categories\">{{category}} &nbsp; </span> </h4>\r\n          <p class=\"stats\">\r\n            <span class=\"left\"><i class=\"material-icons\">\r\n                assessment\r\n              </i> {{organization.reportsCount}} Reports</span>\r\n            <span class=\"middle\"> <i class=\"material-icons\">\r\n                person_outline\r\n              </i>{{organization.usersCount}} Users</span>\r\n            <span class=\"right\"> <i class=\"material-icons\">\r\n                dns\r\n              </i> {{organization.datarulesCount}} Data Rules</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tabs\">\r\n        <mat-tab-group>\r\n          <mat-tab label=\"Reports\">\r\n            <app-report-list [filters]=\"reportListFilter\" (reportID)=\"goToReport($event)\"></app-report-list>\r\n          </mat-tab>\r\n          <mat-tab label=\"Users\">\r\n            <app-user-list [filters]=\"userListFilter\" (userID)=\"goToUser($event)\"></app-user-list>\r\n          </mat-tab>\r\n          <mat-tab label=\"Data Rules\">\r\n            <div class=\"data-rules-section\">\r\n              <mat-accordion *ngFor=\"let rule of rules; let i = index\">\r\n                <mat-expansion-panel>\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                     <h4 class=\"title\">{{rule.name}}</h4><br>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <h5>{{rule.datasource}}</h5>\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n                  <hr>\r\n                  <p>Identifier: {{rule.identifier}}</p>\r\n                  <p>Condition: {{rule.condition}}</p>\r\n                  <p>Token: {{rule.token}}</p>\r\n                  <div class=\"buttons\">\r\n                      <button mat-button color=\"danger\" >Delete</button>\r\n                      <button mat-button color=\"primary\" >Edit</button>\r\n\r\n                  </div>\r\n\r\n                </mat-expansion-panel>\r\n\r\n                <br>\r\n\r\n              </mat-accordion>\r\n\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"organization == null\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n.tabs {\n  background-color: white;\n  margin: 20px 0;\n  box-shadow: 2px 3px 4px rgba(101, 101, 101, 0.5); }\n::ng-deep .tabs .mat-tab-header {\n  box-shadow: 0 1px 4px rgba(101, 101, 101, 0.7) !important;\n  border-bottom: none !important; }\n::ng-deep .tabs .mat-tab-label {\n  color: #3E3E3E;\n  opacity: 1;\n  font-size: 17px; }\n::ng-deep .tabs .mat-tab-label-active {\n  color: #0865ee; }\n::ng-deep .tabs .mat-tab-body {\n  padding: 10px; }\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar, ::ng-deep .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background: #0865ee;\n  height: 3px; }\n.data-rules-section {\n  padding: 5px;\n  max-width: 1080px; }\n.data-rules-section p {\n    margin: 0;\n    color: #3e3e3e;\n    font-weight: 500; }\n.data-rules-section .buttons {\n    text-align: right; }\n.data-rules-section hr {\n    border-top: 1px solid #b4b4b4;\n    margin-top: -10px; }\n.data-rules-section .title {\n    color: #E7554B; }\n.data-rules-section .mat-expansion-panel-content {\n    padding-top: 5px;\n    border-top: 1px solid rgba(0, 0, 0, 0.12); }\n.data-rules-section .mat-expansion-panel {\n    border-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrganizationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDetailsComponent", function() { return OrganizationDetailsComponent; });
/* harmony import */ var _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/datarules.service */ "./src/app/shared/services/datarules.service.ts");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var OrganizationDetailsComponent = /** @class */ (function () {
    function OrganizationDetailsComponent(route, router, organizationService, dataruleService) {
        this.route = route;
        this.router = router;
        this.organizationService = organizationService;
        this.dataruleService = dataruleService;
        // Filter for  Users
        this.userListFilter = {
            name: '',
            organizationID: '',
            role: 'VIEWER',
            sort: ''
        };
        // Filter for Report
        this.reportListFilter = {
            name: '',
            organizationID: '',
            sort: ''
        };
    }
    OrganizationDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
                            // Initiate User filter
                            _this.userListFilter.organizationID = params['id'];
                            // Initiate Report Filter
                            _this.reportListFilter = params['id'];
                        });
                        // gets organization info
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getOrganizationById(this.organizationID)];
                    case 1:
                        // gets organization info
                        _a.organization = _c.sent();
                        // gets data rules for this company
                        _b = this;
                        return [4 /*yield*/, this.dataruleService.getDataRules(this.organizationID)];
                    case 2:
                        // gets data rules for this company
                        _b.rules = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    OrganizationDetailsComponent.prototype.goToUser = function (userId) {
        this.router.navigate(['./u', userId], { relativeTo: this.route });
    };
    OrganizationDetailsComponent.prototype.goToReport = function (reportID) {
        this.router.navigate(['./r', reportID], { relativeTo: this.route });
    };
    OrganizationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-organization-details',
            template: __webpack_require__(/*! ./organization-details.component.html */ "./src/app/admin/organization-details/organization-details.component.html"),
            styles: [__webpack_require__(/*! ./organization-details.component.scss */ "./src/app/admin/organization-details/organization-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"],
            _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_0__["DatarulesService"]])
    ], OrganizationDetailsComponent);
    return OrganizationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/organization/organization-list/organization-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/organization/organization-list/organization-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-container\">\r\n  <div class=\"breadcrumb\"> <span class=\"active\"> <i class=\"material-icons\"> business </i> Organization List </span></div>\r\n</div>\r\n\r\n<div class=\"main-content-view\">\r\n  <div class=\"left-main-content-view\">\r\n    <div class=\"list\">\r\n      <div *ngFor=\"let organization of organizations | searchName: search | orgCategory: selectedCategories| orgSort : sortValue \" class=\"card\">\r\n        <div class=\"container\" (click)=\"goToDetails(organization.id)\">\r\n          <h2 class=\"title\">{{organization.name}}</h2>\r\n          <h4 class=\"secondary\"><span *ngFor=\"let category of organization.categories, let i = index\">{{category}}<span *ngIf=\"i < organization.categories.length -1\">,&nbsp;&nbsp;</span>\r\n            </span> </h4>\r\n          <p class=\"stats\">\r\n            <span class=\"left\"><i class=\"material-icons\">\r\n                assessment\r\n              </i> {{organization.reportsCount}} Reports</span>\r\n            <span class=\"middle\"> <i class=\"material-icons\">\r\n                person_outline\r\n              </i>{{organization.usersCount}} Users</span>\r\n            <span class=\"right\"> <i class=\"material-icons\">\r\n                dns\r\n              </i> {{organization.datarulesCount}} Data Rules</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"right-main-content-view\">\r\n    <div class=\"filter\" style=\"margin-top: 13px\">\r\n      <form [formGroup]=\"filterForm\"  (ngSubmit)=\"onSearch()\">\r\n        <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\r\n        <p class=\"title\"> Filter by</p>\r\n        <mat-form-field appearance=\"outline\" class=\"search\">\r\n          <mat-label class=\"label-color\">Name</mat-label>\r\n          <input matInput type=\"text\"  placeholder=\"Search Name\" formControlName=\"name\">\r\n        </mat-form-field>\r\n        <p class=\"title\"> Company Type</p>\r\n        <div class=\"checkbox\" *ngFor=\"let category of categories\">\r\n          <mat-checkbox  value=\"{{category}}\" formControlName=\"{{category}}\" >{{category}}</mat-checkbox>\r\n        </div>\r\n        <br>\r\n        <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"sort\">\r\n      <p class=\"title\"> Sort By</p>\r\n      <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\r\n        <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\"  class=\"radio\">\r\n          {{sort}}\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/organization/organization-list/organization-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/organization/organization-list/organization-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/organization/organization-list/organization-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/organization/organization-list/organization-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganizationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationListComponent", function() { return OrganizationListComponent; });
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var OrganizationListComponent = /** @class */ (function () {
    function OrganizationListComponent(router, route, organizationService) {
        this.router = router;
        this.route = route;
        this.organizationService = organizationService;
        this.sorts = [
            'Alphabetical',
            'Most Reports',
            'Most Users',
            'Most Data Rules'
        ];
        this.searchValue = '';
        // All categories
        this.sortValue = this.sorts[0];
        this.categories = [];
        this.search = '';
        this.selectedCategories = [];
        // form group for filter
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    OrganizationListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _i, _b, category, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getAllOrganizations()];
                    case 1:
                        _a.organizations = _c.sent();
                        return [4 /*yield*/, this.getAllCategories(this.organizations)];
                    case 2:
                        _c.sent();
                        for (_i = 0, _b = this.categories; _i < _b.length; _i++) {
                            category = _b[_i];
                            this.filterForm.addControl(category, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Go to organization details
    OrganizationListComponent.prototype.goToDetails = function (id) {
        this.router.navigate(['../', id], { relativeTo: this.route });
    };
    // Get all categories with no repetition
    OrganizationListComponent.prototype.getAllCategories = function (orgs) {
        var _this = this;
        orgs.forEach(function (org) {
            org.categories.forEach(function (category) {
                if (!_this.categories.includes(category)) {
                    _this.categories.push(category);
                }
            });
        });
    };
    // changes sort preferences
    OrganizationListComponent.prototype.changeSort = function (sort) {
        this.sortValue = sort;
        console.log(this.sortValue);
    };
    // currently done in pipes
    /*
    public sortOrganization(prop) {
      if (prop === 'Alphabetical') {
        const sorted = this.organizations.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
        if (prop.charAt(0) === '-') { sorted.reverse(); }
        this.organizations = sorted;
      }
      if (prop === 'Most Reports') {
        const sorted = this.organizations.sort((a, b) => Number(a.reportsCount) < Number(b.reportsCount) ? 1 : Number(a.reportsCount) === Number(b.reportsCount) ? 0 : -1);
        this.organizations = sorted;
      }
  
      if (prop === 'Most Users') {
        const sorted = this.organizations.sort((a, b) => Number(a.usersCount) < Number(b.usersCount) ? 1 : Number(a.usersCount) === Number(b.usersCount) ? 0 : -1);
        this.organizations = sorted;
      }
  
      if (prop === 'Most Data Rules') {
        const sorted = this.organizations.sort((a, b) => Number(a.datarulesCount) < Number(b.datarulesCount) ? 1 : Number(a.datarulesCount) === Number(b.datarulesCount) ? 0 : -1);
        this.organizations = sorted;
      }
  
    }
  
    */
    // On Search, will search stuff
    OrganizationListComponent.prototype.onSearch = function () {
        this.selectedCategories = [];
        console.log(this.filterForm.value);
        var temp = this.filterForm.value;
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category in temp) {
                if (temp[category]) {
                    this.selectedCategories.push(category);
                }
            }
        }
        this.search = temp.name;
        console.log(this.selectedCategories);
    };
    OrganizationListComponent.prototype.searchFormReset = function () {
        this.filterForm.reset();
    };
    OrganizationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization-list',
            template: __webpack_require__(/*! ./organization-list.component.html */ "./src/app/admin/organization/organization-list/organization-list.component.html"),
            styles: [__webpack_require__(/*! ./organization-list.component.scss */ "./src/app/admin/organization/organization-list/organization-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"]])
    ], OrganizationListComponent);
    return OrganizationListComponent;
}());



/***/ }),

/***/ "./src/app/admin/organization/organization.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/organization/organization.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/organization/organization.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/organization/organization.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/organization/organization.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/organization/organization.component.ts ***!
  \**************************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
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

var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent() {
    }
    OrganizationComponent.prototype.ngOnInit = function () {
    };
    OrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__(/*! ./organization.component.html */ "./src/app/admin/organization/organization.component.html"),
            styles: [__webpack_require__(/*! ./organization.component.scss */ "./src/app/admin/organization/organization.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-details/user-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-details/user-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"organization != null && user != null\">\r\n\r\n  <div class=\"breadcrumb-container\">\r\n    <!-- Breadcrumbs for user details under user list-->\r\n    <div *ngIf=\"this.orgID === undefined\">\r\n      <div class=\"breadcrumb\"> <span routerLink=\"../../\"><i class=\"material-icons\">\r\n            person_outline </i> User List </span> &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span class=\"active\"> {{user.name}} </span> </div>\r\n    </div>\r\n\r\n    <!-- Breadcrumbs for user details under organization list-->\r\n    <div *ngIf=\"this.orgID != undefined\">\r\n      <div class=\"breadcrumb\"> <span routerLink=\"../../../\"><i class=\"material-icons\">\r\n            business </i> Organization List </span> &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span routerLink=\"../../\"> {{organization.name}}</span>\r\n        &nbsp;&nbsp;   <i class=\"material-icons arrow\">     keyboard_arrow_right   </i>   <i style=\"margin-left: -14px\" class=\"material-icons arrow\">     keyboard_arrow_right   </i>&nbsp;&nbsp; <span class=\"active\"> {{user.name}} </span> </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"main-content-view\">\r\n    <div class=\"details\">\r\n      <div class=\"card\">\r\n        <div class=\"container\">\r\n          <h2 class=\"title\"> {{user.name}}</h2>\r\n          <h4 class=\"secondary\">Viewer</h4>\r\n          <p class=\"content\">Email: {{user.googleId}}</p>\r\n          <p class=\"content\">Secondary Email:  {{user.secondaryEmail }}}</p>\r\n          <p class=\"content\"> Accesses: <span  *ngFor=\"let org of user.organizations\"> {{org.name}} </span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <h3 class=\"list-title\">Report List</h3>\r\n      <app-report-list [filters]=\"reportListFilter\" (reportID)=\"goToReport($event)\"></app-report-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/user-details/user-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-details/user-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n.list-title {\n  color: #3e3e3e;\n  margin-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/admin/user-details/user-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/user-details/user-details.component.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router, route, userService, organizationService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.organizationService = organizationService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.orgID = params['id'];
                            _this.userID = params['userID'];
                        });
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getOrganizationById(this.orgID)];
                    case 1:
                        _a.organization = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.userService.getUser(this.userID)];
                    case 2:
                        _b.user = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Gets the name of the organization for breadcrumbs & user acceses
    UserDetailsComponent.prototype.getOrganization = function (id) {
        return this.organizationService.getOrganizationById(id);
    };
    // Gets the user details
    UserDetailsComponent.prototype.getUserDetails = function (id) {
        return this.userService.getUser(id);
    };
    UserDetailsComponent.prototype.goToReport = function (reportID) {
        this.router.navigate(['./r', reportID], { relativeTo: this.route });
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/admin/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/admin/user-details/user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/common-view/report-list/report-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/common-view/report-list/report-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"reports != null\">\r\n  <div class=\"list\">\r\n    <div *ngFor=\"let report of reports\" class=\"card\">\r\n      <div class=\"container\" (click)=\"reportClicked(report.id)\">\r\n        <h4 class=\"title\" ><strong> {{report.name}}</strong></h4>\r\n        <p class=\"secondary\">{{report.organization.name}}</p>\r\n        <p class=\"content\"> {{report.date | date}} </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/common-view/report-list/report-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/common-view/report-list/report-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/common-view/report-list/report-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/common-view/report-list/report-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListComponent", function() { return ReportListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_models_filter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view-models/filter.viewmodel */ "./src/app/shared/view-models/filter.viewmodel.ts");
/* harmony import */ var _view_models_filter_viewmodel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_models_filter_viewmodel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/report.service */ "./src/app/shared/services/report.service.ts");
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



var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(reportService) {
        this.reportService = reportService;
        this.reportID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ReportListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.reportService.getReportByOrganization('orgID')];
                    case 1:
                        _a.reports = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ReportListComponent.prototype.reportClicked = function (id) {
        this.reportID.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportListComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReportListComponent.prototype, "reportID", void 0);
    ReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-list',
            template: __webpack_require__(/*! ./report-list.component.html */ "./src/app/shared/common-view/report-list/report-list.component.html"),
            styles: [__webpack_require__(/*! ./report-list.component.scss */ "./src/app/shared/common-view/report-list/report-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], ReportListComponent);
    return ReportListComponent;
}());



/***/ }),

/***/ "./src/app/shared/common-view/user-list/user-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/common-view/user-list/user-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"users != null\">\r\n  <div class=\"list\">\r\n    <div *ngFor=\"let user of users\" class=\"card\">\r\n      <div class=\"container\"  (click)=\"userClicked(user.id)\">\r\n        <h4 class=\"title\" style=\"font-weight: bold\">{{user.name}}</h4>\r\n        <p class=\"secondary\"> Viewer : <span *ngFor=\"let org of user.organizations; let i = index\">\r\n            {{org.name}}<span *ngIf=\"i < user.organizations.length-1\">, </span> </span> </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/common-view/user-list/user-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/common-view/user-list/user-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/common-view/user-list/user-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/common-view/user-list/user-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _view_models_filter_viewmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view-models/filter.viewmodel */ "./src/app/shared/view-models/filter.viewmodel.ts");
/* harmony import */ var _view_models_filter_viewmodel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_view_models_filter_viewmodel__WEBPACK_IMPORTED_MODULE_2__);
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



var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.userID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.userService.getUsersByOrganization(this.filters.organizationID)];
                    case 1:
                        _a.users = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserListComponent.prototype.userClicked = function (id) {
        this.userID.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "userID", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/shared/common-view/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/shared/common-view/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/org-category.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/org-category.pipe.ts ***!
  \***************************************************/
/*! exports provided: OrgCategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgCategoryPipe", function() { return OrgCategoryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrgCategoryPipe = /** @class */ (function () {
    function OrgCategoryPipe() {
    }
    OrgCategoryPipe.prototype.transform = function (value, input) {
        if (input.length > 0 && value != null) {
            return value.filter(function (element) {
                console.log(element);
                return input.every(function (temp) {
                    return element.categories.indexOf(temp) >= 0;
                });
            });
        }
        return value;
    };
    OrgCategoryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orgCategory'
        })
    ], OrgCategoryPipe);
    return OrgCategoryPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/org-sort.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/org-sort.pipe.ts ***!
  \***********************************************/
/*! exports provided: OrgSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgSortPipe", function() { return OrgSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrgSortPipe = /** @class */ (function () {
    function OrgSortPipe() {
    }
    OrgSortPipe.prototype.transform = function (value, input) {
        if (value != null) {
            if (input === 'Alphabetical') {
                var sorted = value.sort(function (a, b) { return a.name > b.name ? 1 : a.name === b.name ? 0 : -1; });
                if (input.charAt(0) === '-') {
                    sorted.reverse();
                }
                return sorted;
            }
            if (input === 'Most Reports') {
                var sorted = value.sort(function (a, b) { return Number(a.reportsCount) < Number(b.reportsCount) ? 1 : Number(a.reportsCount) === Number(b.reportsCount) ? 0 : -1; });
                return sorted;
            }
            if (input === 'Most Users') {
                var sorted = value.sort(function (a, b) { return Number(a.usersCount) < Number(b.usersCount) ? 1 : Number(a.usersCount) === Number(b.usersCount) ? 0 : -1; });
                return sorted;
            }
            if (input === 'Most Data Rules') {
                var sorted = value.sort(function (a, b) { return Number(a.datarulesCount) < Number(b.datarulesCount) ? 1 : Number(a.datarulesCount) === Number(b.datarulesCount) ? 0 : -1; });
                return sorted;
            }
        }
    };
    OrgSortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orgSort'
        })
    ], OrgSortPipe);
    return OrgSortPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search-name.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/search-name.pipe.ts ***!
  \**************************************************/
/*! exports provided: SearchNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNamePipe", function() { return SearchNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchNamePipe = /** @class */ (function () {
    function SearchNamePipe() {
    }
    SearchNamePipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                return el.name.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    SearchNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchName'
        })
    ], SearchNamePipe);
    return SearchNamePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/datarules.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/datarules.service.ts ***!
  \******************************************************/
/*! exports provided: DatarulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatarulesService", function() { return DatarulesService; });
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


var DatarulesService = /** @class */ (function () {
    function DatarulesService(http) {
        this.http = http;
    }
    /**
     * Gets all the data source for a specific organization
     * @param organizationID - ID of the organization you want to get the data source for
     */
    DatarulesService.prototype.getDataRules = function (organizationID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.get('../../../assets/example-data/datarules.mockdata.json')).toPromise())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatarulesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DatarulesService);
    return DatarulesService;
}());



/***/ }),

/***/ "./src/app/shared/view-models/filter.viewmodel.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/view-models/filter.viewmodel.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map
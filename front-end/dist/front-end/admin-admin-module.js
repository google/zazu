(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-report-details/admin-report-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-report-details/admin-report-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(organization != null && user!= null && report != null) || (organization != null && !userView && report != null)\">\r\n\r\n  <div class=\"breadcrumb-container\">\r\n    <!-- Breadcrumbs for report when navigation from organization list -->\r\n    <div class=\"breadcrumb\" *ngIf=\"!userView && organizationID != undefined\"> <span routerLink=\"../../../\"> <i class=\"material-icons\">\r\n          business </i> Organization List </span> &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\"\r\n        class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../\">\r\n        {{organization.name}}</span>\r\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\r\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}} ({{report.organization.name}})</span> </div>\r\n\r\n    <!-- Breadcrumbs for report when navigation from user under organization list -->\r\n    <div class=\"breadcrumb\" *ngIf=\"userView && organizationID != undefined\"> <span routerLink=\"../../../../../\"> <i class=\"material-icons\">\r\n          business </i> Organization List </span>\r\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\r\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../../../\">\r\n        {{organization.name}}</span>\r\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\r\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../\"> {{user.firstName}} {{user.lastName}} </span> &nbsp;&nbsp; <i class=\"material-icons arrow\">\r\n        keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span\r\n        class=\"active\"> {{report.name}}\r\n        ({{report.organization.name}})</span></div>\r\n\r\n    <!-- Breadcrumbs for report when navigation from user under user list -->\r\n    <div class=\"breadcrumb\" *ngIf=\"organizationID === undefined && userID != undefined\"> <span routerLink=\"../../../../\"> <i class=\"material-icons\">\r\n          person_outline </i> User List </span>\r\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\r\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../\">{{user.firstName}} {{user.lastName}}</span> &nbsp;&nbsp; <i class=\"material-icons arrow\">\r\n        keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span\r\n        class=\"active\"> {{report.name}}\r\n        ({{report.organization.name}})</span></div>\r\n\r\n    <!-- Breadcrumbs for report when navigation from report list -->\r\n    <div class=\"breadcrumb\" *ngIf=\"organizationID === undefined && userID === undefined\"> <span routerLink=\"../../\"> <i class=\"material-icons\">\r\n          assessment </i> Report List </span>\r\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\r\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}} ({{report.organization.name}})</span> </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"main-content-view\">\r\n    <div class=\"left-main-content-view\">\r\n      <iframe class=\"report\" src=\"https://datastudio.google.com/embed/reporting/1XuwM0G2Rx55jEWX_Rus05td2IHN0PnQI/page/1M\" frameborder=\"0\"\r\n        style=\"border:0\" allowfullscreen></iframe>\r\n    </div>\r\n    <div class=\"right-main-content-view\">\r\n      <div class=\"filter information\">\r\n        <div class=\"more-button\" style=\"margin-top: -10px\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon color=\"more-color\">more_vert</mat-icon>\r\n          </button>\r\n\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>Edit</button>\r\n            <button mat-menu-item>Delete</button>\r\n          </mat-menu>\r\n        </div>\r\n        <h4 class=\"info-title\"> Report Information</h4>\r\n        <p> Name: <span class=\"info\">{{report.name}} </span></p>\r\n        <p> Organization: <span class=\"info\">{{report.organization.name}} </span></p>\r\n        <p>Datasource: <span class=\"info\">{{report.datasource}} </span></p>\r\n        <p>Date: <span class=\"info\"> {{report.date | date }}</span> </p>\r\n        <p>Datastudio Link: <span class=\"info\"> {{report.link}}</span></p>\r\n      </div>\r\n\r\n      <div class=\"metadata\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel style=\"box-shadow:none\">\r\n            <mat-expansion-panel-header style=\"padding: 0\">\r\n              <mat-panel-title>\r\n                <h4 class=\"info-title\" style=\"padding-top: 10px;\"> Metadata</h4>\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <p>Created By: <span class=\"info\">{{ report.createdBy}}</span> </p>\r\n            <p>Updated By: <span class=\"info\">{{ report.updatedBy}}</span></p>\r\n            <p>Who can see it: </p>\r\n            <p *ngFor=\"let user of report.accessedBy\"> <span class=\"info\"> &nbsp;&nbsp;&#9679; &nbsp;{{user.firstName}} {{user.lastName}} </span></p>\r\n            <br>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-report-details/admin-report-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-report-details/admin-report-details.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report {\n  width: 100%;\n  height: calc(100vh - 150px);\n  background-color: white; }\n\n.information .info-title, .metadata .info-title {\n  margin: 0;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: initial; }\n\n.information p, .metadata p {\n  font-size: 15px;\n  margin: 2px 0;\n  font-weight: 400;\n  color: #979797; }\n\n.information p .info, .metadata p .info {\n    color: #4a4a4a;\n    font-weight: 500; }\n\n.metadata {\n  padding: 0 15px;\n  background-color: white;\n  margin-top: 25px;\n  margin-left: 15px;\n  max-width: 300px;\n  box-shadow: 2px 3px 4px rgba(101, 101, 101, 0.5);\n  border: 1px solid #e1e1e1; }\n\n.metadata ::ng-deep .mat-expansion-panel-body {\n    padding: 0 !important;\n    margin-top: -10px;\n    padding-bottom: 20px; }\n"

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
/* harmony import */ var _create_new_datarule_create_new_datarule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-new-datarule/create-new-datarule.component */ "./src/app/admin/create-new-datarule/create-new-datarule.component.ts");
/* harmony import */ var _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-new-user/create-new-user.component */ "./src/app/admin/create-new-user/create-new-user.component.ts");
/* harmony import */ var _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-reports/all-report-list/all-report-list.component */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.ts");
/* harmony import */ var _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization/organization-list/organization-list.component */ "./src/app/admin/organization/organization-list/organization-list.component.ts");
/* harmony import */ var _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-users/all-user-list/all-user-list.component */ "./src/app/admin/all-users/all-user-list/all-user-list.component.ts");
/* harmony import */ var _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-users/all-users.component */ "./src/app/admin/all-users/all-users.component.ts");
/* harmony import */ var _auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../auth/admin-guard.service */ "./src/app/auth/admin-guard.service.ts");
/* harmony import */ var _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-report-details/admin-report-details.component */ "./src/app/admin/admin-report-details/admin-report-details.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/admin/user-details/user-details.component.ts");
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/admin/organization/organization.component.ts");
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./all-reports/all-reports.component */ "./src/app/admin/all-reports/all-reports.component.ts");
/* harmony import */ var _create_new_organization_create_new_organization_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-new-organization/create-new-organization.component */ "./src/app/admin/create-new-organization/create-new-organization.component.ts");
/* harmony import */ var _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-new-report/create-new-report.component */ "./src/app/admin/create-new-report/create-new-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var adminRoutes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
        canActivate: [_auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]],
        children: [
            {
                path: 'o',
                component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_13__["OrganizationComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationListComponent"] },
                    { path: 'new-organization', component: _create_new_organization_create_new_organization_component__WEBPACK_IMPORTED_MODULE_15__["CreateNewOrganizationComponent"] },
                    { path: 'new-user', component: _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_1__["CreateNewUserComponent"] },
                    { path: 'new-data-rule', component: _create_new_datarule_create_new_datarule_component__WEBPACK_IMPORTED_MODULE_0__["CreateNewDataruleComponent"] },
                    { path: 'new-report', component: _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_16__["CreateNewReportComponent"] },
                    { path: ':id', component: _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_9__["OrganizationDetailsComponent"] },
                    { path: ':id/u/:userID', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"] },
                    { path: ':id/r/:reportID', component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_7__["AdminReportDetailsComponent"] },
                    {
                        path: ':id/u/:userID/r/:reportID',
                        component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_7__["AdminReportDetailsComponent"]
                    },
                ]
            },
            {
                path: 'users',
                component: _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_5__["AllUsersComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_4__["AllUserListComponent"] },
                    {
                        path: 'u/:userID',
                        component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"]
                    },
                    {
                        path: 'u/:userID/r/:reportID',
                        component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_7__["AdminReportDetailsComponent"]
                    }
                ]
            },
            {
                path: 'reports',
                component: _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_14__["AllReportsComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_2__["AllReportListComponent"] },
                    { path: 'r/:reportID', component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_7__["AdminReportDetailsComponent"] }
                ]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(adminRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
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

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n/***** Filter Card ***/\n/****** Buttons Colors  **/\n.side-nav {\n  width: 190px;\n  height: 100%;\n  background-color: #323232;\n  position: fixed;\n  transition: padding-left 0.5s;\n  /* For Safari 3.1 to 6.0 */\n  transition: width 0.5s;\n  overflow: hidden;\n  z-index: 40; }\n.company {\n  height: 64px; }\n.company .icon-container {\n    height: 64px;\n    width: 64px;\n    position: relative; }\n.company .icon-container img {\n      height: 45px;\n      width: 45px;\n      position: absolute;\n      right: 0;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto auto; }\n.company .name {\n    position: absolute;\n    top: 22px;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n    left: 70px; }\n.menu-container {\n  position: relative; }\n.menu-container .menu-active {\n    background-color: #555555; }\n.menu-container .menu:hover {\n    cursor: pointer; }\n.menu-container .menu {\n    height: 50px;\n    color: white; }\n.menu-container .menu .material-icons {\n      font-size: 30px;\n      position: relative;\n      top: 11px;\n      left: 16px; }\n.menu-container .menu .text {\n      position: absolute;\n      font-size: 17px;\n      left: 64px;\n      margin-top: 17px; }\n.side-nav-minimized {\n  width: 64px !important; }\n.toolbar {\n  background-color: #616161;\n  color: white;\n  z-index: 20;\n  position: fixed; }\n.toolbar .menu-icon {\n    min-width: unset;\n    padding: 0; }\n.toolbar .menu-icon i {\n      font-size: 2.5em; }\n.right-content {\n  margin-left: 190px;\n  transition: margin-left 0.5s; }\n.main-content {\n  background-color: #f5f5f5;\n  min-height: calc(100vh - 64px);\n  padding-top: 64px;\n  height: 100%;\n  height: auto; }\n.right-content-minimized {\n  margin-left: 64px !important; }\n"

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
/* harmony import */ var _shared_pipes_report_list_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/pipes/report-list.pipe */ "./src/app/shared/pipes/report-list.pipe.ts");
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
/* harmony import */ var _shared_pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/pipes/pagination.pipe */ "./src/app/shared/pipes/pagination.pipe.ts");
/* harmony import */ var _shared_pipes_org_list_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/pipes/org-list.pipe */ "./src/app/shared/pipes/org-list.pipe.ts");
/* harmony import */ var _shared_pipes_user_list_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/pipes/user-list.pipe */ "./src/app/shared/pipes/user-list.pipe.ts");
/* harmony import */ var _shared_pipes_datarules_list_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/pipes/datarules-list.pipe */ "./src/app/shared/pipes/datarules-list.pipe.ts");
/* harmony import */ var _create_new_organization_create_new_organization_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-new-organization/create-new-organization.component */ "./src/app/admin/create-new-organization/create-new-organization.component.ts");
/* harmony import */ var _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./create-new-report/create-new-report.component */ "./src/app/admin/create-new-report/create-new-report.component.ts");
/* harmony import */ var _create_new_datarule_create_new_datarule_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./create-new-datarule/create-new-datarule.component */ "./src/app/admin/create-new-datarule/create-new-datarule.component.ts");
/* harmony import */ var _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./create-new-user/create-new-user.component */ "./src/app/admin/create-new-user/create-new-user.component.ts");
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
                _shared_pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_19__["PaginationPipe"],
                _shared_pipes_org_list_pipe__WEBPACK_IMPORTED_MODULE_20__["OrgListPipe"],
                _shared_pipes_report_list_pipe__WEBPACK_IMPORTED_MODULE_0__["ReportListPipe"],
                _shared_pipes_user_list_pipe__WEBPACK_IMPORTED_MODULE_21__["UserListPipe"],
                _shared_pipes_datarules_list_pipe__WEBPACK_IMPORTED_MODULE_22__["DataRulesListPipe"],
                _create_new_organization_create_new_organization_component__WEBPACK_IMPORTED_MODULE_23__["CreateNewOrganizationComponent"],
                _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_24__["CreateNewReportComponent"],
                _create_new_datarule_create_new_datarule_component__WEBPACK_IMPORTED_MODULE_25__["CreateNewDataruleComponent"],
                _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_26__["CreateNewUserComponent"]
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

module.exports = "<div class=\"breadcrumb-container\">\n    <div class=\"breadcrumb\"> <span class=\"active\"><i class=\"material-icons\">\n        assessment </i> Report List</span></div>\n  </div>\n\n  <div class=\"main-content-view\">\n      <app-report-list [reports] = \"reports\" (reportID)=\"goToReport($event)\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-report-list>\n\n  </div>\n"

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
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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



var AllReportListComponent = /** @class */ (function () {
    function AllReportListComponent(route, router, reportService) {
        this.route = route;
        this.router = router;
        this.reportService = reportService;
    }
    AllReportListComponent.prototype.ngOnInit = function () {
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
    AllReportListComponent.prototype.goToReport = function (reportID) {
        this.router.navigate(['/admin/reports/r', reportID], { relativeTo: this.route });
    };
    AllReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-report-list',
            template: __webpack_require__(/*! ./all-report-list.component.html */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.html"),
            styles: [__webpack_require__(/*! ./all-report-list.component.scss */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_report_service__WEBPACK_IMPORTED_MODULE_0__["ReportService"]])
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

module.exports = "<div class=\"breadcrumb-container\">\n  <div class=\"breadcrumb\"> <span class=\"active\"> <i class=\"material-icons\">\n        person_outline </i> User List</span></div>\n</div>\n\n<div class=\"main-content-view\">\n  <app-user-list [users]=\"users\" (userID)=\"goToUser($event)\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-user-list>\n</div>\n"

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
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
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



var AllUserListComponent = /** @class */ (function () {
    function AllUserListComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    AllUserListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.userService.getUsersByOrganization('All')];
                    case 1:
                        _a.users = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('error');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AllUserListComponent.prototype.goToUser = function (userId) {
        this.router.navigate(['/admin/users/u', userId], {
            relativeTo: this.route
        });
    };
    AllUserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-user-list',
            template: __webpack_require__(/*! ./all-user-list.component.html */ "./src/app/admin/all-users/all-user-list/all-user-list.component.html"),
            styles: [__webpack_require__(/*! ./all-user-list.component.scss */ "./src/app/admin/all-users/all-user-list/all-user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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

/***/ "./src/app/admin/create-new-datarule/create-new-datarule.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/create-new-datarule/create-new-datarule.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\">\n      <form>\n        <h2 class=\"title\"> Create New Data Rule</h2>\n        <hr>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> New Rule for \"Organization\"</h4>\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Rule Name</mat-label>\n            <input matInput placeholder=\"Enter Name\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Data Source</mat-label>\n            <input matInput placeholder=\"Select Data Source\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <h4 class=\"input-header\"> Condition   <i class=\"material-icons info-icon\">\n            info\n          </i></h4>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Identifier</mat-label>\n            <input matInput placeholder=\"Select Data Source\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Condition</mat-label>\n            <input matInput placeholder=\"Select Data Source\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Token</mat-label>\n            <input matInput placeholder=\"Select Data Source\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"buttons\">\n          <button mat-button>Cancel</button><button class=\"done\" mat-flat-button>Done</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/create-new-datarule/create-new-datarule.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/create-new-datarule/create-new-datarule.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/create-new-datarule/create-new-datarule.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/create-new-datarule/create-new-datarule.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateNewDataruleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewDataruleComponent", function() { return CreateNewDataruleComponent; });
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

var CreateNewDataruleComponent = /** @class */ (function () {
    function CreateNewDataruleComponent() {
    }
    CreateNewDataruleComponent.prototype.ngOnInit = function () {
    };
    CreateNewDataruleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-datarule',
            template: __webpack_require__(/*! ./create-new-datarule.component.html */ "./src/app/admin/create-new-datarule/create-new-datarule.component.html"),
            styles: [__webpack_require__(/*! ./create-new-datarule.component.scss */ "./src/app/admin/create-new-datarule/create-new-datarule.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateNewDataruleComponent);
    return CreateNewDataruleComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-new-organization/create-new-organization.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/create-new-organization/create-new-organization.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\" *ngIf=\"orgForm\">\n      <!-- *********************************  -->\n      <form [formGroup]=\"orgForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"title\"> Create New Organization</h2>\n        <hr>\n        <h4 class=\"input-header\"> Please enter organization information </h4>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Organization Name</mat-label>\n            <input matInput type=\"text\" id=\"name\" placeholder=\"Enter Name\" formControlName=\"orgName\">\n            <mat-error>\n              Organization name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\" matTooltip=\"{{orgNameTooltip}}\">\n            info\n          </i>\n        </div>\n        <h4 class=\"input-header\">Categories <span style=\"position: relative;top: 6px; left: -10px;\">\n            <i class=\"material-icons info-icon\" matTooltip=\"{{orgNameTooltip}}\">\n              info\n            </i> </span>\n        </h4>\n        <div formArrayName=\"itemRows\">\n          <div *ngFor=\"let itemrow of orgForm.controls.itemRows.controls; let i=index\" [formGroupName]=\"i\">\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                book\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Category </mat-label>\n                <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput formControlName=\"itemname\" [matAutocomplete]=\"auto\">\n                <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                    <span>{{option}} </span>\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error>\n                  Category name is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"orgForm.get('itemRows').getError('duplicate')\">\n                  Duplicated Category\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons close-icon\" *ngIf=\"orgForm.controls.itemRows.controls.length > 1\" (click)=\"deleteRow(i)\">\n                close\n              </i>\n            </div>\n          </div>\n        </div>\n        <p class=\"custom-error\" *ngIf=\"orgForm.get('itemRows').getError('duplicate')\">\n            Cannot have duplicate categories </p>\n        <p class=\"add-row\" (click)=\"addNewRow()\">+ Add another category</p>\n        <div class=\"buttons\">\n          <button mat-button routerLink=\"../list\">Cancel</button>\n          <button class=\"done primary\" [disabled]=\"!orgForm.valid\" [ngClass]=\"{'button-disabled': !orgForm.valid}\" mat-flat-button type=\"submit\">Done\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/create-new-organization/create-new-organization.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/create-new-organization/create-new-organization.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/create-new-organization/create-new-organization.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/create-new-organization/create-new-organization.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreateNewOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewOrganizationComponent", function() { return CreateNewOrganizationComponent; });
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var CreateNewOrganizationComponent = /** @class */ (function () {
    function CreateNewOrganizationComponent(organizatinonService, _fb) {
        this.organizatinonService = organizatinonService;
        this._fb = _fb;
        this.options = [];
        this.orgNameTooltip = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata paria. Restinguet citius, si ardentem acceperit. Sed quid sentiat, non videtis. Vide, quantum, inquam, fallare, Torquate. Age, inquies, ista parva sunt.';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selectedCategories = [''];
    }
    CreateNewOrganizationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.organizatinonService.getAllCategories()];
                    case 1:
                        _a.options = _b.sent();
                        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
                        this.orgForm = this._fb.group({
                            orgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                this.noWhitespaceValidator
                            ]),
                            itemRows: this._fb.array([this.initItemRows()], this.noDuplicate)
                        });
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
    CreateNewOrganizationComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    CreateNewOrganizationComponent.prototype.addAnotherCategory = function () {
        this.selectedCategories.push('');
    };
    CreateNewOrganizationComponent.prototype.initItemRows = function () {
        return this._fb.group({
            itemname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator]]
        });
    };
    CreateNewOrganizationComponent.prototype.addNewRow = function () {
        var control = this.orgForm.controls['itemRows'];
        control.push(this.initItemRows());
    };
    CreateNewOrganizationComponent.prototype.deleteRow = function (index) {
        var control = this.orgForm.controls['itemRows'];
        control.removeAt(index);
    };
    Object.defineProperty(CreateNewOrganizationComponent.prototype, "controls", {
        get: function () {
            return this.orgForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateNewOrganizationComponent.prototype.onSubmit = function () {
        var temp = [];
        for (var _i = 0, _a = this.orgForm.value.itemRows; _i < _a.length; _i++) {
            var itemname = _a[_i];
            temp.push(itemname.itemname);
        }
        var org = {
            name: this.orgForm.value.orgName,
            categories: temp
        };
        console.log(org);
    };
    CreateNewOrganizationComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    };
    CreateNewOrganizationComponent.prototype.getForm = function () {
        return this.orgForm;
    };
    CreateNewOrganizationComponent.prototype.noDuplicate = function (array) {
        if (array.errors) {
            console.log(array.errors.duplicate);
        }
        if (array.value) {
            var temp = [];
            for (var _i = 0, _a = array.value; _i < _a.length; _i++) {
                var itemname = _a[_i];
                if (!temp.includes(itemname.itemname)) {
                    temp.push(itemname.itemname);
                }
                else {
                    return { duplicate: true };
                }
            }
        }
        return null;
    };
    CreateNewOrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-new-organization',
            template: __webpack_require__(/*! ./create-new-organization.component.html */ "./src/app/admin/create-new-organization/create-new-organization.component.html"),
            styles: [__webpack_require__(/*! ./create-new-organization.component.scss */ "./src/app/admin/create-new-organization/create-new-organization.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateNewOrganizationComponent);
    return CreateNewOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-new-report/create-new-report.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/create-new-report/create-new-report.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\">\n\n\n      <form>\n        <h2 class=\"title\"> Create New Report</h2>\n        <hr>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> Please select organization for new report <i class=\"material-icons info-icon\">\n              info\n            </i></h4>\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Select Organization(s)</mat-label>\n            <input matInput placeholder=\"Placeholder\">\n          </mat-form-field>\n        </div>\n        <div class=\"row\">\n          <p class=\"create-new-text\">Organization not on the list? <span class=\"create-new-button\">Create New Organization </span></p>\n        </div>\n        <div class=\"buttons\">\n          <button mat-button>Cancel</button><button class=\"done\" mat-flat-button>Next</button>\n        </div>\n      </form>\n\n\n      <form>\n        <h2 class=\"title\"> Create New Report</h2>\n        <hr>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> New Report for \"Organization\"</h4>\n        </div>\n        <div class=\"row\" style=\"display:flex\">\n          <div style=\"text-align: center\">\n            <button mat-fab>New</button>\n            <p>Create New Report</p>\n          </div>\n          <div style=\"text-align: center\">\n            <button class=\"done\" mat-fab>Share </button>\n            <p>Share Existing Report</p>\n          </div>\n        </div>\n        <div class=\"buttons\">\n          <button mat-button>Cancel</button><button class=\"done\" mat-flat-button>Next</button>\n        </div>\n      </form>\n\n      <!-- CREATE NEW -->\n      <form>\n        <h2 class=\"title\"> Create New Report</h2>\n        <hr>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> Create New Report for \"Organization\"</h4>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            assessment\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Report Name</mat-label>\n            <input matInput placeholder=\"Report Name\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            assessment\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Data Studio Link</mat-label>\n            <input matInput placeholder=\"Data Studio Link\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            assessment\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Data Source(s)</mat-label>\n            <input matInput placeholder=\"Data Source(s)\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"buttons\">\n          <button mat-button>Cancel</button><button class=\"done\" mat-flat-button>Done</button>\n        </div>\n      </form>\n\n      <!-- Share EXISTING -->\n\n      <!-- selecting report -->\n      <form>\n        <h2 class=\"title\"> Create New Report</h2>\n        <hr>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> Create New Report for \"Organization\"</h4>\n        </div>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> Please Select a report to share to \"Organization\" </h4>\n        </div>\n        <div class=\"main-content-view\" style=\"padding:0\">\n          <app-report-list [reports]=\"reports\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-report-list>\n        </div>\n        <div class=\"buttons\">\n          <button mat-button>Cancel</button><button class=\"done\" mat-flat-button>Done</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/create-new-report/create-new-report.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/create-new-report/create-new-report.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/create-new-report/create-new-report.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/create-new-report/create-new-report.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateNewReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewReportComponent", function() { return CreateNewReportComponent; });
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



var CreateNewReportComponent = /** @class */ (function () {
    function CreateNewReportComponent(route, router, reportService) {
        this.route = route;
        this.router = router;
        this.reportService = reportService;
    }
    CreateNewReportComponent.prototype.ngOnInit = function () {
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
    CreateNewReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-report',
            template: __webpack_require__(/*! ./create-new-report.component.html */ "./src/app/admin/create-new-report/create-new-report.component.html"),
            styles: [__webpack_require__(/*! ./create-new-report.component.scss */ "./src/app/admin/create-new-report/create-new-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], CreateNewReportComponent);
    return CreateNewReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-new-user/create-new-user.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/create-new-user/create-new-user.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\">\n      <form>\n        <h2 class=\"title\"> Create New User</h2>\n        <hr>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> Please select role for new user <i class=\"material-icons info-icon\">\n              info\n            </i></h4>\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Organization Name</mat-label>\n            <input matInput placeholder=\"Placeholder\">\n          </mat-form-field>\n        </div>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> Please select organization(s) for new user <i class=\"material-icons info-icon\">\n              info\n            </i></h4>\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Select Organization(s)</mat-label>\n            <input matInput placeholder=\"Placeholder\">\n          </mat-form-field>\n        </div>\n        <div class=\"row\">\n          <p class=\"create-new-text\">Organization not on the list? <span class=\"create-new-button\">Create New Organization </span></p>\n        </div>\n        <div class=\"buttons\">\n          <button mat-button>Cancel</button><button class=\"done\" mat-flat-button>Next</button>\n        </div>\n      </form>\n\n\n      <!-- ADMIN ACCESS -->\n      <form>\n        <h2 class=\"title\"> Create New User</h2>\n        <hr>\n        <p class=\"description\"> New Admin user</p>\n        <p class=\"description\"> New Viewer for *Organizations*</p>\n        <h4 class=\"input-header\"> Please enter user information </h4>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            person-outline\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>First Name</mat-label>\n            <input matInput placeholder=\"\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            person-outline\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Last Name</mat-label>\n            <input matInput placeholder=\"\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            person-outline\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"\">\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <button mat-stroked-button class=\"add-another\">Add Secondary Email</button>\n        </div>\n\n        <div class=\"buttons\">\n          <button mat-button>Cancel</button><button class=\"done\" mat-flat-button>Done</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/create-new-user/create-new-user.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/create-new-user/create-new-user.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/create-new-user/create-new-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/create-new-user/create-new-user.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateNewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewUserComponent", function() { return CreateNewUserComponent; });
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

var CreateNewUserComponent = /** @class */ (function () {
    function CreateNewUserComponent() {
    }
    CreateNewUserComponent.prototype.ngOnInit = function () {
    };
    CreateNewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-user',
            template: __webpack_require__(/*! ./create-new-user.component.html */ "./src/app/admin/create-new-user/create-new-user.component.html"),
            styles: [__webpack_require__(/*! ./create-new-user.component.scss */ "./src/app/admin/create-new-user/create-new-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateNewUserComponent);
    return CreateNewUserComponent;
}());



/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"organization != null\">\r\n  <div class=\"breadcrumb-container\">\r\n    <div> <span routerLink=\"../\"><i class=\"material-icons\"> business </i> Organization List </span> &nbsp;&nbsp; <i class=\"material-icons arrow\">\r\n        keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span\r\n        class=\"active\">{{organization.name}}\r\n      </span> </div>\r\n  </div>\r\n\r\n  <div class=\"main-content-view\">\r\n    <div class=\"full-content-view\">\r\n      <div class=\"details\">\r\n        <div class=\"card\">\r\n          <div class=\"more-button\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon color=\"more-color\">more_vert</mat-icon>\r\n            </button>\r\n\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Edit</button>\r\n              <button mat-menu-item>Delete</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"container\">\r\n            <h2 class=\"title\">{{organization.name}}</h2>\r\n            <h4 class=\"secondary\"><span *ngFor=\"let category of organization.categories\">{{category}} &nbsp; </span> </h4>\r\n            <p class=\"stats\">\r\n              <span class=\"left\"><i class=\"material-icons\">\r\n                  assessment\r\n                </i> {{organization.reportsCount}} Reports</span>\r\n              <span class=\"middle\"> <i class=\"material-icons\">\r\n                  person_outline\r\n                </i>{{organization.usersCount}} Users</span>\r\n              <span class=\"right\"> <i class=\"material-icons\">\r\n                  dns\r\n                </i> {{organization.datarulesCount}} Data Rules</span>\r\n            </p>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"tabs\">\r\n          <mat-tab-group (selectedIndexChange)=\"selected($event)\">\r\n            <mat-tab label=\"Reports\">\r\n              <app-report-list *ngIf=\"selectedTab === 0\" [reports]=\"reports\" (reportID)=\"goToReport($event)\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-report-list>\r\n            </mat-tab>\r\n            <mat-tab label=\"Users\">\r\n              <app-user-list *ngIf=\"selectedTab === 1\" [users]=\"users\" (userID)=\"goToUser($event)\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-user-list>\r\n            </mat-tab>\r\n            <mat-tab label=\"Data Rules\">\r\n              <div class=\"data-rules-section\" *ngIf=\"selectedTab === 2\">\r\n                <div class=\"left-main-content-view\">\r\n                  <mat-accordion *ngFor=\"let rule of rules | datarulesList : searchName : selectedDataSource : sortValue : pagination.currentPage; let i = index\">\r\n                    <mat-expansion-panel class=\"data-rules-card\">\r\n                      <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                          <h4 class=\"title\">{{rule.name}}</h4><br>\r\n                        </mat-panel-title>\r\n                        <mat-panel-description>\r\n                          <h5>{{rule.datasource.name}}</h5>\r\n                        </mat-panel-description>\r\n                      </mat-expansion-panel-header>\r\n                      <hr>\r\n                      <p>Created At: {{rule.date | date }}</p>\r\n                      <p>Identifier: {{rule.identifier}}</p>\r\n                      <p>Condition: {{rule.condition}}</p>\r\n                      <p>Token: {{rule.token}}</p>\r\n                      <div class=\"buttons\">\r\n                        <button mat-button color=\"danger\">Delete</button>\r\n                        <button mat-button color=\"primary\">Edit</button>\r\n                      </div>\r\n                    </mat-expansion-panel>\r\n                    <br>\r\n                  </mat-accordion>\r\n                  <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\" color=\"white\"\r\n                    [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\r\n                      chevron_left\r\n                    </i> </button>\r\n                  {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \" [disabled]=\"pagination.currentPage === pagination.totalPages\"\r\n                    color=\"white\"> <i class=\"material-icons\">\r\n                      chevron_right\r\n                    </i> </button>\r\n                </p>\r\n                </div>\r\n                <div class=\"right-main-content-view\">\r\n                  <!-- Filters -->\r\n                  <div class=\"filter\">\r\n                    <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\r\n                      <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\r\n                      <p class=\"title\"> Filter by</p>\r\n                      <mat-form-field appearance=\"outline\" class=\"search\">\r\n                        <mat-label class=\"label-color\">Name</mat-label>\r\n                        <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\r\n                      </mat-form-field>\r\n                      <p class=\"title\"> Data Source</p>\r\n                      <mat-form-field appearance=\"outline\" class=\"select\">\r\n                        <mat-select formControlName=\"selectedDataSource\">\r\n                          <mat-option value=\"All\">All</mat-option>\r\n                          <mat-option *ngFor=\"let datasource of dataSources\" value=\"{{datasource.id}}\">{{datasource.name}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <br>\r\n                      <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\r\n                    </form>\r\n                  </div>\r\n                  <div class=\"sort\">\r\n                    <p class=\"title\"> Sort By</p>\r\n                    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\r\n                      <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\r\n                        {{sort}}\r\n                      </mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                  <div class=\"add-button\">\r\n                    <button mat-fab class=\"button-fab\" color=\"primary-button\"> <i class=\"material-icons\">\r\n                        add\r\n                      </i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"organization == null\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n/***** Filter Card ***/\n/****** Buttons Colors  **/\n.tabs {\n  background-color: white;\n  margin: 20px 0;\n  box-shadow: 2px 3px 4px rgba(101, 101, 101, 0.5); }\n::ng-deep .mat-tab-body .mat-tab-body-content {\n  overflow: hidden; }\n::ng-deep .tabs .mat-tab-header {\n  box-shadow: 0 1px 4px rgba(101, 101, 101, 0.7) !important;\n  border-bottom: none !important; }\n::ng-deep .tabs .mat-tab-label {\n  color: #3E3E3E;\n  opacity: 1;\n  font-size: 17px; }\n::ng-deep .tabs .mat-tab-label-active {\n  color: #0865ee; }\n::ng-deep .tabs .mat-tab-body {\n  padding: 10px; }\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar,\n::ng-deep .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background: #0865ee;\n  height: 3px; }\n.data-rules-card {\n  border: 1px solid #D7D7D7;\n  border-radius: 5px; }\n.mat-tab {\n  padding: 5px; }\n.data-rules-section {\n  margin-bottom: 10px;\n  display: flex; }\n.data-rules-section .left-main-content-view {\n    margin-top: 10px; }\n.data-rules-section .left-main-content-view p {\n      margin: 0;\n      color: #3e3e3e;\n      font-weight: 500; }\n.data-rules-section .left-main-content-view .buttons {\n      text-align: right; }\n.data-rules-section .left-main-content-view hr {\n      border-top: 1px solid #b4b4b4;\n      margin-top: -10px; }\n.data-rules-section .left-main-content-view .title {\n      color: #E7554B; }\n.data-rules-section .left-main-content-view .mat-expansion-panel-content {\n      padding-top: 5px;\n      border-top: 1px solid rgba(0, 0, 0, 0.12); }\n.data-rules-section .left-main-content-view .mat-expansion-panel {\n      border-radius: 3px; }\n"

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
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function OrganizationDetailsComponent(route, router, organizationService, dataruleService, reportService, userService, paginationService) {
        this.route = route;
        this.router = router;
        this.organizationService = organizationService;
        this.dataruleService = dataruleService;
        this.reportService = reportService;
        this.userService = userService;
        this.paginationService = paginationService;
        this.selectedTab = 0;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            selectedDataSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('All')
        });
        this.formInitialize = false;
        this.sorts = ['Latest', 'Alphabetical'];
        this.sortValue = this.sorts[0];
        this.selectedDataSource = 'All';
    }
    OrganizationDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, _d, _e, error_1;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 6, , 7]);
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
                        });
                        // gets organization info
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getOrganizationById(this.organizationID)];
                    case 1:
                        // gets organization info
                        _a.organization = _f.sent();
                        // gets reports for this organization
                        _b = this;
                        return [4 /*yield*/, this.reportService.getReportByOrganization('orgID')];
                    case 2:
                        // gets reports for this organization
                        _b.reports = _f.sent();
                        // gets data rules for this organization
                        _c = this;
                        return [4 /*yield*/, this.dataruleService.getDataRules(this.organizationID)];
                    case 3:
                        // gets data rules for this organization
                        _c.rules = _f.sent();
                        // gets users for this organization
                        _d = this;
                        return [4 /*yield*/, this.userService.getUsersByOrganization('orgID')];
                    case 4:
                        // gets users for this organization
                        _d.users = _f.sent();
                        // get all data sources for this organization
                        _e = this;
                        return [4 /*yield*/, this.dataruleService.getAllDataSourceForOrganization('orgID')];
                    case 5:
                        // get all data sources for this organization
                        _e.dataSources = _f.sent();
                        this.pageSubscription = this.paginationService.paginationChanged.subscribe(function (pagination) {
                            _this.pagination = pagination;
                        });
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _f.sent();
                        console.log(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationDetailsComponent.prototype.selected = function (event) {
        this.selectedTab = event;
        if (event === 2) {
            this.paginationService.resetPage();
        }
    };
    OrganizationDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        if (this.pageSubscription) {
            this.pageSubscription.unsubscribe();
        }
    };
    OrganizationDetailsComponent.prototype.goToUser = function (userId) {
        this.router.navigate(['./u', userId], { relativeTo: this.route });
    };
    OrganizationDetailsComponent.prototype.goToReport = function (reportID) {
        this.router.navigate(['./r', reportID], { relativeTo: this.route });
    };
    OrganizationDetailsComponent.prototype.changeSort = function (sort) {
        this.paginationService.resetPage();
        this.sortValue = sort;
    };
    OrganizationDetailsComponent.prototype.onSearch = function () {
        console.log(this.filterForm.value);
        this.paginationService.resetPage();
        var temp = this.filterForm.value;
        this.searchName = temp.name;
        this.selectedDataSource = temp.selectedDataSource;
    };
    OrganizationDetailsComponent.prototype.searchFormReset = function () {
        this.filterForm.reset();
        this.paginationService.resetPage();
        this.filterForm.patchValue({ selectedDataSource: 'All' });
    };
    // Pagination Methods
    OrganizationDetailsComponent.prototype.nextPage = function () {
        if (this.pagination.currentPage < this.pagination.totalPages) {
            this.paginationService.changePage(this.pagination.currentPage + 1);
        }
    };
    // Pagination Methods
    OrganizationDetailsComponent.prototype.previousPage = function () {
        if (this.pagination.currentPage > 1) {
            this.paginationService.changePage(this.pagination.currentPage - 1);
        }
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
            _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_0__["DatarulesService"],
            _shared_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"]])
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

module.exports = "<div class=\"breadcrumb-container\">\r\n  <div class=\"breadcrumb\"> <span class=\"active\"> <i class=\"material-icons\"> business </i> Organization List </span></div>\r\n</div>\r\n\r\n<div class=\"main-content-view\">\r\n  <div class=\"left-main-content-view\">\r\n    <div class=\"list\" *ngIf=\"pagination\">\r\n      <div *ngFor=\"let organization of organizations  |   orgList:  search: selectedCategories : sortValue: pagination.currentPage \" class=\"card\">\r\n        <div class=\"container\" (click)=\"goToDetails(organization.id)\">\r\n          <h2 class=\"title\">{{organization.name}}</h2>\r\n          <h4 class=\"secondary\"><span *ngFor=\"let category of organization.categories, let i = index\">{{category}}<span *ngIf=\"i < organization.categories.length -1\">,&nbsp;&nbsp;</span>\r\n            </span> </h4>\r\n          <p class=\"stats\">\r\n            <span class=\"left\"><i class=\"material-icons\">\r\n                assessment\r\n              </i> {{organization.reportsCount}} Reports</span>\r\n            <span class=\"middle\"> <i class=\"material-icons\">\r\n                person_outline\r\n              </i>{{organization.usersCount}} Users</span>\r\n            <span class=\"right\"> <i class=\"material-icons\">\r\n                dns\r\n              </i> {{organization.datarulesCount}} Data Rules</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\" color=\"white\"\r\n      [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\r\n        chevron_left\r\n      </i> </button>\r\n    {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \" [disabled]=\"pagination.currentPage === pagination.totalPages\"\r\n      color=\"white\"> <i class=\"material-icons\">\r\n        chevron_right\r\n      </i> </button>\r\n  </p>\r\n  </div>\r\n  <div class=\"right-main-content-view\">\r\n    <div class=\"filter\" style=\"margin-top: 13px\">\r\n      <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\r\n        <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\r\n        <p class=\"title\"> Filter by</p>\r\n        <mat-form-field appearance=\"outline\" class=\"search\">\r\n          <mat-label class=\"label-color\">Name</mat-label>\r\n          <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\r\n        </mat-form-field>\r\n        <p class=\"title\"> Company Type</p>\r\n        <div class=\"checkbox\" *ngFor=\"let category of categories\">\r\n          <mat-checkbox value=\"{{category}}\" formControlName=\"{{category}}\">{{category}}</mat-checkbox>\r\n        </div>\r\n        <br>\r\n        <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"sort\">\r\n      <p class=\"title\"> Sort By</p>\r\n      <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\r\n        <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\r\n          {{sort}}\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n\r\n    <div class=\"add-button\">\r\n      <button routerLink=\"../new-organization\" mat-fab class=\"button-fab\" color=\"primary-button\"> <i class=\"material-icons\">\r\n          add\r\n        </i></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
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





var OrganizationListComponent = /** @class */ (function () {
    function OrganizationListComponent(router, route, organizationService, paginationService) {
        this.router = router;
        this.route = route;
        this.organizationService = organizationService;
        this.paginationService = paginationService;
        this.sorts = ['Alphabetical', 'Most Reports', 'Most Users', 'Most Data Rules'];
        this.searchValue = '';
        // All categories
        this.sortValue = this.sorts[0];
        this.categories = [];
        this.search = '';
        this.selectedCategories = [];
        this.viewChange = false;
        // form group for filter
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    }
    OrganizationListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
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
                            this.filterForm.addControl(category, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
                        }
                        this.pageSubscription = this.paginationService.paginationChanged.subscribe(function (pagination) {
                            _this.pagination = pagination;
                        });
                        this.paginationService.getPagination();
                        this.paginationService.changePage(1);
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
        this.paginationService.changePage(1);
    };
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
        this.paginationService.changePage(1);
    };
    OrganizationListComponent.prototype.searchFormReset = function () {
        this.filterForm.reset();
    };
    // Pagination Methods
    OrganizationListComponent.prototype.nextPage = function () {
        if (this.pagination.currentPage < this.pagination.totalPages) {
            this.paginationService.changePage(this.pagination.currentPage + 1);
        }
    };
    OrganizationListComponent.prototype.previousPage = function () {
        if (this.pagination.currentPage > 1) {
            this.paginationService.changePage(this.pagination.currentPage - 1);
        }
    };
    OrganizationListComponent.prototype.ngOnDestroy = function () {
        this.pageSubscription.unsubscribe();
    };
    OrganizationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-organization-list',
            template: __webpack_require__(/*! ./organization-list.component.html */ "./src/app/admin/organization/organization-list/organization-list.component.html"),
            styles: [__webpack_require__(/*! ./organization-list.component.scss */ "./src/app/admin/organization/organization-list/organization-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"],
            _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_0__["PaginationService"]])
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

module.exports = "<div *ngIf=\"organization != null && user != null\">\r\n\r\n  <div class=\"breadcrumb-container\">\r\n    <!-- Breadcrumbs for user details under user list-->\r\n    <div *ngIf=\"this.orgID === undefined\">\r\n      <div class=\"breadcrumb\"> <span routerLink=\"../../\"><i class=\"material-icons\">\r\n            person_outline </i> User List </span> &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\"\r\n          class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{user.firstName}} {{user.lastName}}  </span> </div>\r\n    </div>\r\n\r\n    <!-- Breadcrumbs for user details under organization list-->\r\n    <div *ngIf=\"this.orgID != undefined\">\r\n      <div class=\"breadcrumb\"> <span routerLink=\"../../../\"><i class=\"material-icons\">\r\n            business </i> Organization List </span> &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\"\r\n          class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../\"> {{organization.name}}</span>\r\n        &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\r\n          keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{user.firstName}} {{user.lastName}} </span> </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"main-content-view\">\r\n    <div class=\"full-content-view\">\r\n\r\n\r\n      <div class=\"details\">\r\n        <div class=\"more-button\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon color=\"more-color\">more_vert</mat-icon>\r\n          </button>\r\n\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>Edit</button>\r\n            <button mat-menu-item>Delete</button>\r\n          </mat-menu>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"container\">\r\n            <h2 class=\"title\"> {{user.firstName}} {{user.lastName}}</h2>\r\n            <h4 class=\"secondary\">Viewer</h4>\r\n            <p class=\"content\">Email: {{user.googleId}}</p>\r\n            <p class=\"content\">Secondary Email: {{user.secondaryEmail }}}</p>\r\n            <p class=\"content\"> Accesses: <span *ngFor=\"let org of user.organizations\"> {{org.name}} </span></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div>\r\n        <h3 class=\"list-title\">Report List</h3>\r\n        <app-report-list style=\"display:flex; width: 100%;\" [reports]=\"reports\" (reportID)=\"goToReport($event)\"></app-report-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/user-details/user-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-details/user-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n/***** Filter Card ***/\n/****** Buttons Colors  **/\n.list-title {\n  color: #3e3e3e;\n  margin-bottom: 5px; }\n"

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
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function UserDetailsComponent(router, route, userService, organizationService, reportService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.organizationService = organizationService;
        this.reportService = reportService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 4, , 5]);
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.orgID = params['id'];
                            _this.userID = params['userID'];
                        });
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getOrganizationById(this.orgID)];
                    case 1:
                        _a.organization = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.userService.getUser(this.userID)];
                    case 2:
                        _b.user = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.reportService.getReportByOrganizations(['orgIDs'])];
                    case 3:
                        _c.reports = _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _d.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/admin/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/admin/user-details/user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"],
            _shared_services_report_service__WEBPACK_IMPORTED_MODULE_0__["ReportService"]])
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

module.exports = "<div class=\"left-main-content-view\">\r\n  <div *ngIf=\"reports != null \">\r\n    <div class=\"list\">\r\n      <div *ngFor=\"let report of reports | reportList: searchName: selectedOrganization : sortValue :  pagination.currentPage\" class=\"card\">\r\n        <div class=\"container\" (click)=\"reportClicked(report.id)\">\r\n          <h4 class=\"title\"><strong> {{report.name}}</strong></h4>\r\n          <p class=\"secondary\">{{report.organization.name}}</p>\r\n          <p class=\"content\"> {{report.date | date}} </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\" color=\"white\"\r\n    [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\r\n      chevron_left\r\n    </i> </button>\r\n  {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \" [disabled]=\"pagination.currentPage === pagination.totalPages\"\r\n    color=\"white\"> <i class=\"material-icons\">\r\n      chevron_right\r\n    </i> </button>\r\n</p>\r\n\r\n</div>\r\n<div class=\"right-main-content-view\" *ngIf=\"formInitialize\">\r\n  <div class=\"filter\">\r\n    <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\r\n      <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\r\n      <p class=\"title\"> Filter by</p>\r\n      <mat-form-field appearance=\"outline\" class=\"search\">\r\n        <mat-label class=\"label-color\">Name</mat-label>\r\n        <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\r\n      </mat-form-field>\r\n      <p class=\"title\" *ngIf=\"organizations.length > 1\"> Organization</p>\r\n      <mat-form-field appearance=\"outline\" class=\"select\" *ngIf=\"organizations.length > 1\">\r\n        <mat-select formControlName=\"selectedOrganization\">\r\n          <mat-option value=\"All\">All</mat-option>\r\n          <mat-option *ngFor=\"let organization of organizations\" value=\"{{organization.id}}\">{{organization.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br>\r\n      <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"sort\">\r\n    <p class=\"title\"> Sort By</p>\r\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\r\n      <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\r\n        {{sort}}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"add-button\">\r\n    <button mat-fab class=\"button-fab\" color=\"primary-button\"> <i class=\"material-icons\">\r\n        add\r\n      </i></button>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
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





var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(paginationService, organizationService, route) {
        this.paginationService = paginationService;
        this.organizationService = organizationService;
        this.route = route;
        this.reportID = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.organizations = [];
        this.sorts = ['Latest', 'Alphabetical'];
        this.selectedOrganization = '';
        this.sortValue = this.sorts[0];
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.formInitialize = false;
    }
    ReportListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.paginationService.resetPage();
                    this.sub = this.route.params.subscribe(function (params) {
                        _this.organizationID = params['id'];
                    });
                    this.pageSubscription = this.paginationService.paginationChanged.subscribe(function (pagination) {
                        _this.pagination = pagination;
                    });
                    this.paginationService.getPagination();
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    ReportListComponent.prototype.ngOnChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, report;
            return __generator(this, function (_b) {
                if (this.reports != null && this.organizations != null) {
                    for (_i = 0, _a = this.reports; _i < _a.length; _i++) {
                        report = _a[_i];
                        if (!this.organizations.includes(report.organization)) {
                            this.organizations.push(report.organization);
                        }
                    }
                    if (this.organizations.length > 1) {
                        this.filterForm.addControl('selectedOrganization', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('All'));
                    }
                    this.formInitialize = true;
                }
                return [2 /*return*/];
            });
        });
    };
    ReportListComponent.prototype.reportClicked = function (id) {
        this.reportID.emit(id);
    };
    ReportListComponent.prototype.changeSort = function (sort) {
        this.paginationService.resetPage();
        this.sortValue = sort;
    };
    ReportListComponent.prototype.onSearch = function () {
        this.paginationService.resetPage();
        var temp = this.filterForm.value;
        this.searchName = temp.name;
        this.selectedOrganization = temp.selectedOrganization;
    };
    ReportListComponent.prototype.searchFormReset = function () {
        this.filterForm.reset();
        this.filterForm.patchValue({ selectedOrganization: 'All' });
        this.paginationService.resetPage();
    };
    // Pagination Methods
    ReportListComponent.prototype.nextPage = function () {
        if (this.pagination.currentPage < this.pagination.totalPages) {
            this.paginationService.changePage(this.pagination.currentPage + 1);
        }
    };
    // Pagination Methods
    ReportListComponent.prototype.previousPage = function () {
        if (this.pagination.currentPage > 1) {
            this.paginationService.changePage(this.pagination.currentPage - 1);
        }
    };
    ReportListComponent.prototype.ngOnDestroy = function () {
        this.pageSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Array)
    ], ReportListComponent.prototype, "reports", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], ReportListComponent.prototype, "reportID", void 0);
    ReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-report-list',
            template: __webpack_require__(/*! ./report-list.component.html */ "./src/app/shared/common-view/report-list/report-list.component.html"),
            styles: [__webpack_require__(/*! ./report-list.component.scss */ "./src/app/shared/common-view/report-list/report-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"],
            _services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
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

module.exports = "<div class=\"left-main-content-view\">\r\n  <div *ngIf=\"users != null\">\r\n    <div class=\"list\">\r\n      <div *ngFor=\"let user of users | userList: searchName: selectedRole: selectedOrganization : sortValue :  pagination.currentPage\"\r\n        class=\"card\">\r\n        <div class=\"container\" (click)=\"userClicked(user.id)\">\r\n          <h4 class=\"title\" style=\"font-weight: bold\">{{user.firstName}} {{user.lastName}}</h4>\r\n          <p class=\"secondary\"> Viewer : <span *ngFor=\"let org of user.organizations; let i = index\">\r\n              {{org.name}}<span *ngIf=\"i < user.organizations.length-1\">, </span> </span> </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\" color=\"white\"\r\n    [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\r\n      chevron_left\r\n    </i> </button>\r\n  {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \" [disabled]=\"pagination.currentPage === pagination.totalPages\"\r\n    color=\"white\"> <i class=\"material-icons\">\r\n      chevron_right\r\n    </i> </button>\r\n</p>\r\n</div>\r\n<div class=\"right-main-content-view\" *ngIf=\"formInitialize\">\r\n  <div class=\"filter\">\r\n    <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\r\n      <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\r\n      <p class=\"title\"> Filter by</p>\r\n      <mat-form-field appearance=\"outline\" class=\"search\">\r\n        <mat-label class=\"label-color\">Name</mat-label>\r\n        <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\r\n      </mat-form-field>\r\n      <p class=\"title\" *ngIf=\"!organizationID\"> Role</p>\r\n      <mat-form-field appearance=\"outline\" class=\"select\" *ngIf=\"!organizationID\">\r\n        <mat-select formControlName=\"selectedRole\">\r\n          <mat-option value=\"All\">All</mat-option>\r\n          <mat-option value=\"Admin\">Admin</mat-option>\r\n          <mat-option value=\"Viewer\">Viewer</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <p class=\"title\" *ngIf=\"!organizationID\"> Organization</p>\r\n      <mat-form-field class=\"select\" appearance=\"outline\" *ngIf=\"!organizationID\">\r\n        <mat-select formControlName=\"selectedOrganization\">\r\n          <mat-option value=\"All\">All</mat-option>\r\n          <mat-option *ngFor=\"let organization of organizations\" value=\"{{organization.id}}\">{{organization.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br>\r\n      <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"sort\">\r\n    <p class=\"title\"> Sort By</p>\r\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\r\n      <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\r\n        {{sort}}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n  </div>\r\n\r\n  <div class=\"add-button\">\r\n    <button mat-fab class=\"button-fab\" color=\"primary-button\"> <i class=\"material-icons\">\r\n        add\r\n      </i></button>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function UserListComponent(organizationService, paginationService, route) {
        this.organizationService = organizationService;
        this.paginationService = paginationService;
        this.route = route;
        this.userID = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedOrganization = '';
        this.selectedRole = '';
        this.sorts = ['First Name', 'Last Name'];
        this.sortValue = this.sorts[0];
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            selectedRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('All')
        });
        this.formInitialize = false;
    }
    UserListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        this.paginationService.resetPage();
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
                        });
                        this.pageSubscription = this.paginationService.paginationChanged.subscribe(function (pagination) {
                            _this.pagination = pagination;
                        });
                        this.paginationService.getPagination();
                        if (!!this.organizationID) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getAllOrganizationsWithNoDetails()];
                    case 1:
                        _a.organizations = _b.sent();
                        this.filterForm.addControl('selectedOrganization', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('All'));
                        _b.label = 2;
                    case 2:
                        this.formInitialize = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserListComponent.prototype.userClicked = function (id) {
        this.userID.emit(id);
    };
    UserListComponent.prototype.changeSort = function (sort) {
        this.paginationService.resetPage();
        this.sortValue = sort;
    };
    UserListComponent.prototype.onSearch = function () {
        console.log(this.filterForm.value);
        this.paginationService.resetPage();
        var temp = this.filterForm.value;
        this.searchName = temp.name;
        this.selectedOrganization = temp.selectedOrganization;
        this.selectedRole = temp.selectedRole;
    };
    UserListComponent.prototype.searchFormReset = function () {
        this.filterForm.reset();
        this.filterForm.patchValue({ selectedRole: 'All' });
        this.filterForm.patchValue({ selectedOrganization: 'All' });
        this.paginationService.resetPage();
    };
    // Pagination Methods
    UserListComponent.prototype.nextPage = function () {
        if (this.pagination.currentPage < this.pagination.totalPages) {
            this.paginationService.changePage(this.pagination.currentPage + 1);
        }
    };
    // Pagination Methods
    UserListComponent.prototype.previousPage = function () {
        if (this.pagination.currentPage > 1) {
            this.paginationService.changePage(this.pagination.currentPage - 1);
        }
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.pageSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "userID", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/shared/common-view/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/shared/common-view/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"],
            _services_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/datarules-list.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/datarules-list.pipe.ts ***!
  \*****************************************************/
/*! exports provided: DataRulesListPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRulesListPipe", function() { return DataRulesListPipe; });
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


var DataRulesListPipe = /** @class */ (function () {
    function DataRulesListPipe(paginationService) {
        this.paginationService = paginationService;
    }
    DataRulesListPipe.prototype.transform = function (rules, searchName, datasource, sort, page) {
        if (rules) {
            var currentList = rules;
            // If there's a search
            if (searchName) {
                searchName = searchName.toLowerCase();
                currentList = currentList.filter(function (el) { return el.name.toLowerCase().indexOf(searchName) > -1; });
            }
            // if there's a organization
            if (datasource) {
                if (datasource !== 'All') {
                    currentList = currentList.filter(function (element) { return element.datasource.id === datasource; });
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
        return rules;
    };
    DataRulesListPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'datarulesList'
        }),
        __metadata("design:paramtypes", [_services_pagination_service__WEBPACK_IMPORTED_MODULE_1__["PaginationService"]])
    ], DataRulesListPipe);
    return DataRulesListPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/org-list.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/org-list.pipe.ts ***!
  \***********************************************/
/*! exports provided: OrgListPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgListPipe", function() { return OrgListPipe; });
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


var OrgListPipe = /** @class */ (function () {
    function OrgListPipe(paginationService) {
        this.paginationService = paginationService;
    }
    OrgListPipe.prototype.transform = function (organization, searchName, categories, sort, page) {
        if (organization) {
            var currentList = organization;
            // If there's a search
            if (searchName) {
                searchName = searchName.toLowerCase();
                currentList = currentList.filter(function (el) { return el.name.toLowerCase().indexOf(searchName) > -1; });
            }
            // If there's a category
            if (categories.length > 0) {
                currentList = currentList.filter(function (element) {
                    return categories.every(function (temp) { return element.categories.indexOf(temp) >= 0; });
                });
            }
            // If there's a sort
            if (sort) {
                if (sort === 'Alphabetical') {
                    var sorted = currentList.sort(function (a, b) { return (a.name > b.name ? 1 : a.name === b.name ? 0 : -1); });
                    if (sort.charAt(0) === '-') {
                        sorted.reverse();
                    }
                    currentList = sorted;
                }
                if (sort === 'Most Reports') {
                    var sorted = currentList.sort(function (a, b) {
                        return Number(a.reportsCount) < Number(b.reportsCount)
                            ? 1
                            : Number(a.reportsCount) === Number(b.reportsCount)
                                ? 0
                                : -1;
                    });
                    currentList = sorted;
                }
                if (sort === 'Most Users') {
                    var sorted = currentList.sort(function (a, b) {
                        return Number(a.usersCount) < Number(b.usersCount)
                            ? 1
                            : Number(a.usersCount) === Number(b.usersCount)
                                ? 0
                                : -1;
                    });
                    currentList = sorted;
                }
                if (sort === 'Most Data Rules') {
                    var sorted = currentList.sort(function (a, b) {
                        return Number(a.datarulesCount) < Number(b.datarulesCount)
                            ? 1
                            : Number(a.datarulesCount) === Number(b.datarulesCount)
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
        return organization;
    };
    OrgListPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orgList'
        }),
        __metadata("design:paramtypes", [_services_pagination_service__WEBPACK_IMPORTED_MODULE_1__["PaginationService"]])
    ], OrgListPipe);
    return OrgListPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/pagination.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/pagination.pipe.ts ***!
  \*************************************************/
/*! exports provided: PaginationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipe", function() { return PaginationPipe; });
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


var PaginationPipe = /** @class */ (function () {
    function PaginationPipe(paginationService) {
        this.paginationService = paginationService;
    }
    PaginationPipe.prototype.transform = function (currentList, page) {
        console.log('pagination called');
        this.paginationService.changeTotalPages(Math.ceil(currentList.length / this.paginationService.pagination.itemsPerPage));
        return currentList.slice(this.paginationService.pagination.currentPage *
            this.paginationService.pagination.itemsPerPage -
            this.paginationService.pagination.itemsPerPage, this.paginationService.pagination.itemsPerPage *
            this.paginationService.pagination.currentPage);
    };
    PaginationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pagination'
        }),
        __metadata("design:paramtypes", [_services_pagination_service__WEBPACK_IMPORTED_MODULE_1__["PaginationService"]])
    ], PaginationPipe);
    return PaginationPipe;
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
        console.log('searchName');
        if (value) {
            if (input) {
                input = input.toLowerCase();
                var temp = value.filter(function (el) { return el.name.toLowerCase().indexOf(input) > -1; });
                console.log(temp.length);
                return temp;
            }
            return value;
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

/***/ "./src/app/shared/pipes/user-list.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/user-list.pipe.ts ***!
  \************************************************/
/*! exports provided: UserListPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPipe", function() { return UserListPipe; });
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


var UserListPipe = /** @class */ (function () {
    function UserListPipe(paginationService) {
        this.paginationService = paginationService;
    }
    UserListPipe.prototype.transform = function (userList, searchName, role, organization, sort, page) {
        var currentList = userList;
        // If there's a reportList
        if (userList) {
            // If there's a search
            if (searchName) {
                searchName = searchName.toLowerCase();
                currentList = currentList.filter(function (el) {
                    return (el.firstName + ' ' + el.lastName)
                        .toLowerCase()
                        .indexOf(searchName) > -1;
                });
            }
            // if there's a organization
            if (organization) {
                if (organization !== 'All') {
                    currentList = currentList.filter(function (element) {
                        return element.organizations.filter(function (org) {
                            console.log(org);
                            return org.id === organization;
                        }).length > 0;
                    });
                }
            }
            // checks for role
            if (role !== 'All' && role) {
                currentList = currentList.filter(function (element) { return element.role === role; });
            }
            // if there's a sort
            if (sort) {
                if (sort === 'First Name') {
                    var sorted = currentList.sort(function (a, b) {
                        return a.firstName > b.firstName
                            ? 1
                            : a.firstName === b.firstName
                                ? 0
                                : -1;
                    });
                    currentList = sorted;
                }
                if (sort === 'Last Name') {
                    var sorted = currentList.sort(function (a, b) {
                        return a.lastName > b.lastName ? 1 : a.lastName === b.lastName ? 0 : -1;
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
    UserListPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userList'
        }),
        __metadata("design:paramtypes", [_services_pagination_service__WEBPACK_IMPORTED_MODULE_1__["PaginationService"]])
    ], UserListPipe);
    return UserListPipe;
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
        this.URL = '../../../assets/example-data/';
    }
    /**
     * Gets all the data source for a specific organization
     * @param organizationID - ID of the organization you want to get the data source for
     */
    DatarulesService.prototype.getDataRules = function (organizationID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .get(this.URL +
                            'datarules.mockdata.json')
                            .toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Getting the list of all Datasource for specific organization
     * @param orgID - ID of organization you want to get all available data source for it
     */
    DatarulesService.prototype.getAllDataSourceForOrganization = function (orgID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .get(this.URL +
                            'datasources.mockdata.json')
                            .toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create new data rule
     * @param datarule - datarule object
     */
    DatarulesService.prototype.CreateNewDataRule = function (datarule) {
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
     * Edit data rule
     * @param datarule - datarule object
     */
    DatarulesService.prototype.EditDataRule = function (datarule) {
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
     * Delete Data rule
     * @param dataruleID - id of the data rule you want to delete
     */
    DatarulesService.prototype.DeleteDataRule = function (dataruleID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, null];
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



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map
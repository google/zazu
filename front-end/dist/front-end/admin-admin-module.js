(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-report-details/admin-report-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-report-details/admin-report-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(organization != null && user!= null && report != null) || (!organization  && !userView && report != null) || (!organization && !user && report != null)\">\n\n  <div class=\"breadcrumb-container\">\n    <!-- Breadcrumbs for report when navigation from organization list -->\n    <div class=\"breadcrumb\" *ngIf=\"!userView && organizationID != undefined\"> <span routerLink=\"../../../\"> <i class=\"material-icons\">\n          business </i> Organization List </span> &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\"\n        class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../\">\n        {{organization.name}}</span>\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}} ({{report.organization.name}})</span> </div>\n\n    <!-- Breadcrumbs for report when navigation from user under organization list -->\n    <div class=\"breadcrumb\" *ngIf=\"userView && organizationID != undefined\"> <span routerLink=\"../../../../../\"> <i class=\"material-icons\">\n          business </i> Organization List </span>\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../../../\">\n        {{organization.name}}</span>\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../\"> {{user.firstName}} {{user.lastName}} </span> &nbsp;&nbsp; <i class=\"material-icons arrow\">\n        keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span\n        class=\"active\"> {{report.name}}\n        ({{report.organization.name}})</span></div>\n\n    <!-- Breadcrumbs for report when navigation from user under user list -->\n    <div class=\"breadcrumb\" *ngIf=\"organizationID === undefined && userID != undefined\"> <span routerLink=\"../../../../\"> <i class=\"material-icons\">\n          person_outline </i> User List </span>\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../\">{{user.firstName}} {{user.lastName}}</span> &nbsp;&nbsp; <i class=\"material-icons arrow\">\n        keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span\n        class=\"active\"> {{report.name}}\n        ({{report.organization.name}})</span></div>\n\n    <!-- Breadcrumbs for report when navigation from report list -->\n    <div class=\"breadcrumb\" *ngIf=\"organizationID === undefined && userID === undefined\"> <span routerLink=\"../../\"> <i class=\"material-icons\">\n          assessment </i> Report List </span>\n      &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\n        keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{report.name}} ({{report.organization.name}})</span> </div>\n  </div>\n\n\n  <div class=\"main-content-view\" *ngIf=\"viewInitialized\">\n    <div class=\"left-main-content-view\">\n      <iframe class=\"report\" src=\"https://datastudio.google.com/embed/reporting/1XuwM0G2Rx55jEWX_Rus05td2IHN0PnQI/page/1M\" frameborder=\"0\"\n        style=\"border:0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"right-main-content-view\">\n      <div class=\"filter information\">\n        <div class=\"more-button\" style=\"margin-top: -10px\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon color=\"more-color\">more_vert</mat-icon>\n          </button>\n\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item routerLink=\"./edit-report\">Edit</button>\n            <button mat-menu-item (click)=\"openDialog()\">Delete</button>\n          </mat-menu>\n        </div>\n        <h4 class=\"info-title\"> Report Information</h4>\n        <p> Name: <span class=\"info\">{{report.name}} </span></p>\n        <p>Organization: <span class=\"info\">{{report.organization.name}} </span></p>\n        <p>Date: <span class=\"info\"> {{report.date | date }}</span> </p>\n        <p>Datastudio Link: <span class=\"info\"> {{report.link}}</span></p>\n        <p>Datasources: </p>\n        <div *ngFor=\"let datasource of report.datasources; let i = index\">\n          <p>&nbsp;&nbsp;&nbsp;&bull;<span class=\"info\"> {{datasource.name}} </span> </p>\n        </div>\n      </div>\n\n      <div class=\"metadata\">\n        <mat-accordion>\n          <mat-expansion-panel style=\"box-shadow:none\">\n            <mat-expansion-panel-header style=\"padding: 0\">\n              <mat-panel-title>\n                <h4 class=\"info-title\" style=\"padding-top: 10px;\"> Metadata</h4>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <div *ngFor=\"let datasource of report.datasources; let i = index\">\n                <p>Datasource: <span class=\"info\">{{datasource.name}} </span> </p>\n                <p>&nbsp;&nbsp;&bull; ID: <span class=\"info\">{{datasource._id}} </span></p>\n            </div>\n            <p>Created By: <span class=\"info\">{{ report.createdBy}}</span> </p>\n            <p>Updated By: <span class=\"info\">{{ report.updatedBy}}</span></p>\n            <p>Who can see it: </p>\n            <p *ngFor=\"let user of report.accessedBy\"> <span class=\"info\"> &nbsp;&nbsp;&#9679; &nbsp;{{user.firstName}} {{user.lastName}}\n              </span></p>\n            <br>\n          </mat-expansion-panel>\n        </mat-accordion>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!viewInitialized\" style=\"margin:auto; padding-top: 80px; text-align: center\">\n      <mat-spinner style=\"margin:auto\"></mat-spinner>\n      <p style=\"text-align: center;\">Report Loading...</p>\n  </div>\n\n\n</div>\n"

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
/*! exports provided: AdminReportDetailsComponent, DeleteReportConfirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReportDetailsComponent", function() { return AdminReportDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteReportConfirmation", function() { return DeleteReportConfirmation; });
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    function AdminReportDetailsComponent(reportService, route, userService, organizationService, dialog, router) {
        this.reportService = reportService;
        this.route = route;
        this.userService = userService;
        this.organizationService = organizationService;
        this.dialog = dialog;
        this.router = router;
        this.organization = null;
        this.user = undefined;
        this.report = null;
        this.viewInitialized = false;
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
                        return [4 /*yield*/, this.userService.getLocalUser(this.userID)];
                    case 2:
                        _b.user = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.userView = false;
                        this.user = false;
                        _d.label = 4;
                    case 4:
                        if (!this.organizationID) return [3 /*break*/, 6];
                        _c = this;
                        return [4 /*yield*/, this.organizationService.getLocalOrganization(this.organizationID)];
                    case 5:
                        _c.organization = _d.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        this.organization = false;
                        _d.label = 7;
                    case 7:
                        this.viewInitialized = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminReportDetailsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteReportConfirmation, {
            data: { report: this.report.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.reportService.deleteReport(_this.reportID);
                _this.router.navigate(['../../'], { relativeTo: _this.route });
            }
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
        __metadata("design:paramtypes", [_shared_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminReportDetailsComponent);
    return AdminReportDetailsComponent;
}());

var DeleteReportConfirmation = /** @class */ (function () {
    function DeleteReportConfirmation(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteReportConfirmation.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteReportConfirmation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-report-confirmation',
            template: __webpack_require__(/*! ./delete-report-confirmation.html */ "./src/app/admin/admin-report-details/delete-report-confirmation.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], DeleteReportConfirmation);
    return DeleteReportConfirmation;
}());



/***/ }),

/***/ "./src/app/admin/admin-report-details/delete-report-confirmation.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-report-details/delete-report-confirmation.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\n    <h2 class=\"title delete\"><i class=\"material-icons\">\n        warning\n      </i> Delete {{data.report}}?</h2>\n    <div mat-dialog-content>\n      <h4 class=\"subtitle\">Warning: this cannot be undone</h4>\n      <p>Iam id ipsum absurdum, maximum malum neglegi. Quoniam, si dis placet, ab Epicuro loqui discimus. Duo Reges: constructio interrete.</p>\n    </div>\n    <div mat-dialog-actions style=\"float:right\">\n      <button mat-button (click)=\"onNoClick()\">Cancel</button>\n      <button mat-button mat-flat-button [mat-dialog-close]=\"true\" class=\"danger\" cdkFocusInitial>Continue</button>\n    </div>\n  </div>\n"

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
/* harmony import */ var _shared_common_view_viewer_report_viewer_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/common-view/viewer-report/viewer-report.component */ "./src/app/shared/common-view/viewer-report/viewer-report.component.ts");
/* harmony import */ var _shared_common_view_viewer_report_list_viewer_report_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/common-view/viewer-report-list/viewer-report-list.component */ "./src/app/shared/common-view/viewer-report-list/viewer-report-list.component.ts");
/* harmony import */ var _ghost_ghost_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghost/ghost.component */ "./src/app/admin/ghost/ghost.component.ts");
/* harmony import */ var _edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-report/edit-report.component */ "./src/app/admin/edit-report/edit-report.component.ts");
/* harmony import */ var _share_report_share_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share-report/share-report.component */ "./src/app/admin/share-report/share-report.component.ts");
/* harmony import */ var _create_new_datarule_create_new_datarule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-new-datarule/create-new-datarule.component */ "./src/app/admin/create-new-datarule/create-new-datarule.component.ts");
/* harmony import */ var _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-new-user/create-new-user.component */ "./src/app/admin/create-new-user/create-new-user.component.ts");
/* harmony import */ var _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-reports/all-report-list/all-report-list.component */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.ts");
/* harmony import */ var _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organization/organization-list/organization-list.component */ "./src/app/admin/organization/organization-list/organization-list.component.ts");
/* harmony import */ var _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-users/all-user-list/all-user-list.component */ "./src/app/admin/all-users/all-user-list/all-user-list.component.ts");
/* harmony import */ var _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./all-users/all-users.component */ "./src/app/admin/all-users/all-users.component.ts");
/* harmony import */ var _auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../auth/admin-guard.service */ "./src/app/auth/admin-guard.service.ts");
/* harmony import */ var _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-report-details/admin-report-details.component */ "./src/app/admin/admin-report-details/admin-report-details.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/admin/user-details/user-details.component.ts");
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/admin/organization/organization.component.ts");
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./all-reports/all-reports.component */ "./src/app/admin/all-reports/all-reports.component.ts");
/* harmony import */ var _create_new_organization_create_new_organization_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./create-new-organization/create-new-organization.component */ "./src/app/admin/create-new-organization/create-new-organization.component.ts");
/* harmony import */ var _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./create-new-report/create-new-report.component */ "./src/app/admin/create-new-report/create-new-report.component.ts");
/* harmony import */ var _edit_organization_edit_organization_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-organization/edit-organization.component */ "./src/app/admin/edit-organization/edit-organization.component.ts");
/* harmony import */ var _edit_data_rule_edit_data_rule_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-data-rule/edit-data-rule.component */ "./src/app/admin/edit-data-rule/edit-data-rule.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/admin/edit-user/edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var adminRoutes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
        canActivate: [_auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        children: [
            {
                path: 'o',
                component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_18__["OrganizationComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_8__["OrganizationListComponent"] },
                    { path: 'new-organization', component: _create_new_organization_create_new_organization_component__WEBPACK_IMPORTED_MODULE_20__["CreateNewOrganizationComponent"] },
                    { path: 'share-report', component: _share_report_share_report_component__WEBPACK_IMPORTED_MODULE_4__["ShareReportComponent"] },
                    { path: ':id', component: _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_14__["OrganizationDetailsComponent"] },
                    { path: ':id/new-user', component: _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_6__["CreateNewUserComponent"] },
                    { path: ':id/new-report', component: _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_21__["CreateNewReportComponent"] },
                    { path: ':id/share-report', component: _share_report_share_report_component__WEBPACK_IMPORTED_MODULE_4__["ShareReportComponent"] },
                    { path: ':id/edit-organization', component: _edit_organization_edit_organization_component__WEBPACK_IMPORTED_MODULE_22__["EditOrganizationComponent"] },
                    { path: ':id/new-rule', component: _create_new_datarule_create_new_datarule_component__WEBPACK_IMPORTED_MODULE_5__["CreateNewDataruleComponent"] },
                    { path: ':id/edit-rule/:ruleID', component: _edit_data_rule_edit_data_rule_component__WEBPACK_IMPORTED_MODULE_23__["EditDataRuleComponent"] },
                    { path: ':id/u/:userID', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__["UserDetailsComponent"] },
                    { path: ':id/u/:userID/ghost/:userName', component: _ghost_ghost_component__WEBPACK_IMPORTED_MODULE_2__["GhostComponent"], children: [
                            { path: '', redirectTo: 'list' },
                            { path: 'list', component: _shared_common_view_viewer_report_list_viewer_report_list_component__WEBPACK_IMPORTED_MODULE_1__["ViewerReportListComponent"] },
                            { path: ':reportID', component: _shared_common_view_viewer_report_viewer_report_component__WEBPACK_IMPORTED_MODULE_0__["ViewerReportComponent"] }
                        ] },
                    { path: ':id/u/:userID/edit-user', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_24__["EditUserComponent"] },
                    { path: ':id/r/:reportID', component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_12__["AdminReportDetailsComponent"] },
                    { path: ':id/r/:reportID/edit-report', component: _edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_3__["EditReportComponent"] },
                    {
                        path: ':id/u/:userID/r/:reportID',
                        component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_12__["AdminReportDetailsComponent"]
                    },
                    {
                        path: ':id/u/:userID/r/:reportID/edit-report',
                        component: _edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_3__["EditReportComponent"]
                    }
                ]
            },
            {
                path: 'users',
                component: _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_10__["AllUsersComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_9__["AllUserListComponent"] },
                    { path: 'new-user', component: _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_6__["CreateNewUserComponent"] },
                    { path: 'u/:userID', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__["UserDetailsComponent"] },
                    { path: 'u/:userID/ghost/:userName', component: _ghost_ghost_component__WEBPACK_IMPORTED_MODULE_2__["GhostComponent"], children: [
                            { path: '', redirectTo: 'list' },
                            { path: 'list', component: _shared_common_view_viewer_report_list_viewer_report_list_component__WEBPACK_IMPORTED_MODULE_1__["ViewerReportListComponent"] },
                            { path: ':reportID', component: _shared_common_view_viewer_report_viewer_report_component__WEBPACK_IMPORTED_MODULE_0__["ViewerReportComponent"] }
                        ] },
                    { path: 'u/:userID/edit-user', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_24__["EditUserComponent"] },
                    { path: 'u/:userID/r/:reportID', component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_12__["AdminReportDetailsComponent"] }
                ]
            },
            {
                path: 'reports',
                component: _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_19__["AllReportsComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_7__["AllReportListComponent"] },
                    { path: 'new-report', component: _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_21__["CreateNewReportComponent"] },
                    { path: 'r/:reportID', component: _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_12__["AdminReportDetailsComponent"] },
                    { path: 'r/:reportID/edit-report', component: _edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_3__["EditReportComponent"] }
                ]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forChild(adminRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]]
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

module.exports = "<div class=\"main\" *ngIf=\"!ghostStatus\">\n\n  <!-- Side Navigation Menu-->\n  <div class=\"side-nav\" [ngClass]=\"{'side-nav-minimized': minimized}\">\n    <!-- Company Title and Logo goes Here-->\n    <div class=\"company\">\n      <div class=\"icon-container\">\n        <div class=\"icon\">\n          <img src=\"../../assets/company-icon.png\" alt=\"Smiley face\">\n        </div>\n      </div>\n      <span class=\"name\"> Company </span>\n    </div>\n\n    <!-- Side Navigation Menus -->\n    <div class=\"menu-container\">\n\n      <!-- Menu # 1 -->\n      <div class=\"menu\" routerLink=\"o\" routerLinkActive=\"menu-active\">\n        <i class=\"material-icons\">\n          business\n        </i>\n        <span class=\"text\">\n          Organizations\n        </span>\n      </div>\n\n      <!-- Menu # 2 -->\n      <div class=\"menu\" routerLink=\"reports\" routerLinkActive=\"menu-active\">\n        <i class=\"material-icons\">\n          assessment\n        </i>\n        <span class=\"text\">\n          Reports\n        </span>\n      </div>\n\n      <!-- Menu # 3 -->\n      <div class=\"menu\" routerLink=\"users\" routerLinkActive=\"menu-active\">\n        <i class=\"material-icons\">\n          person_outline\n        </i>\n        <span class=\"text\">\n          Users\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"right-content\" [ngClass]=\"{'right-content-minimized': minimized}\">\n    <!-- Top Toolbar -->\n    <mat-toolbar class=\"toolbar\" [ngClass]=\"{'toobar-max': minimized}\">\n      <button mat-button class=\"menu-icon\" (click)=\"toggleMenu()\">\n        <i class=\"material-icons \">\n          menu\n        </i>\n      </button>\n      <div style=\"flex: 1 1 auto\">\n      </div>\n      <button mat-button class=\"menu-icon right\"   matTooltip=\"FAQs\"\n      matTooltipPosition=\"below\">\n        <i class=\"material-icons\">\n          help_outline\n        </i>\n      </button>\n      <button mat-button class=\"menu-icon right\"  matTooltip=\"Logout\"\n      matTooltipPosition=\"below\">\n        <i class=\"material-icons\">\n          power_settings_new\n        </i>\n      </button>\n\n\n    </mat-toolbar>\n\n    <!-- Main Content -->\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"ghostStatus\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/******* GHOST HEADER TITLE ******/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n/***** Filter Card ***/\n/****** Buttons Colors  **/\n/**** Empty List Color Styles ****/\n.side-nav {\n  width: 190px;\n  height: 100%;\n  background-color: #323232;\n  position: fixed;\n  transition: padding-left 0.5s;\n  /* For Safari 3.1 to 6.0 */\n  transition: width 0.5s;\n  overflow: hidden;\n  z-index: 40; }\n.company {\n  height: 64px; }\n.company .icon-container {\n    height: 64px;\n    width: 64px;\n    position: relative; }\n.company .icon-container img {\n      height: 45px;\n      width: 45px;\n      position: absolute;\n      right: 0;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto auto; }\n.company .name {\n    position: absolute;\n    top: 22px;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n    left: 70px; }\n.menu-container {\n  position: relative; }\n.menu-container .menu-active {\n    background-color: #555555; }\n.menu-container .menu:hover {\n    cursor: pointer; }\n.menu-container .menu {\n    height: 50px;\n    color: white; }\n.menu-container .menu .material-icons {\n      font-size: 30px;\n      position: relative;\n      top: 11px;\n      left: 16px; }\n.menu-container .menu .text {\n      position: absolute;\n      font-size: 17px;\n      left: 64px;\n      margin-top: 17px; }\n.side-nav-minimized {\n  width: 64px !important; }\n.toobar-max {\n  max-width: calc(100vw - 64px) !important; }\n.toolbar {\n  background-color: #616161;\n  color: white;\n  z-index: 20;\n  position: fixed;\n  max-width: calc(100vw -  190px);\n  -webkit-transition: max-width 0.5s; }\n.toolbar .menu-icon {\n    min-width: unset;\n    padding: 0; }\n.toolbar .menu-icon i {\n      font-size: 2.5em; }\n.toolbar .menu-icon.right {\n    margin: 0 10px; }\n.toolbar .menu-icon.right i {\n      font-size: 2.2em; }\n.right-content {\n  margin-left: 190px;\n  transition: margin-left 0.5s; }\n.main-content {\n  background-color: #f5f5f5;\n  min-height: calc(100vh - 64px);\n  padding-top: 64px;\n  height: 100%;\n  height: auto; }\n.right-content-minimized {\n  margin-left: 64px !important; }\n"

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
/* harmony import */ var _shared_services_ghost_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/ghost.service */ "./src/app/shared/services/ghost.service.ts");
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



var AdminComponent = /** @class */ (function () {
    function AdminComponent(route, ghostService) {
        this.route = route;
        this.ghostService = ghostService;
        this.minimized = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ghostSubscription = this.ghostService.ghostStatusObservable.subscribe(function (status) {
            _this.ghostStatus = status;
        });
        this.ghostService.getStatus();
        this.route.navigate(['admin/o']);
    };
    AdminComponent.prototype.toggleMenu = function () {
        this.minimized = !this.minimized;
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        this.ghostSubscription.unsubscribe();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_ghost_service__WEBPACK_IMPORTED_MODULE_0__["GhostService"]])
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
/* harmony import */ var _shared_pipes_category_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/pipes/category.pipe */ "./src/app/shared/pipes/category.pipe.ts");
/* harmony import */ var _shared_pipes_search_name_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/pipes/search-name.pipe */ "./src/app/shared/pipes/search-name.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _organization_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organization/organization-list/organization-list.component */ "./src/app/admin/organization/organization-list/organization-list.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/admin/organization/organization.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/admin/user-details/user-details.component.ts");
/* harmony import */ var _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-report-details/admin-report-details.component */ "./src/app/admin/admin-report-details/admin-report-details.component.ts");
/* harmony import */ var _shared_common_view_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/common-view/user-list/user-list.component */ "./src/app/shared/common-view/user-list/user-list.component.ts");
/* harmony import */ var _shared_common_view_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/common-view/report-list/report-list.component */ "./src/app/shared/common-view/report-list/report-list.component.ts");
/* harmony import */ var _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./all-users/all-users.component */ "./src/app/admin/all-users/all-users.component.ts");
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./all-reports/all-reports.component */ "./src/app/admin/all-reports/all-reports.component.ts");
/* harmony import */ var _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./all-users/all-user-list/all-user-list.component */ "./src/app/admin/all-users/all-user-list/all-user-list.component.ts");
/* harmony import */ var _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./all-reports/all-report-list/all-report-list.component */ "./src/app/admin/all-reports/all-report-list/all-report-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/pipes/pagination.pipe */ "./src/app/shared/pipes/pagination.pipe.ts");
/* harmony import */ var _shared_pipes_org_list_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/pipes/org-list.pipe */ "./src/app/shared/pipes/org-list.pipe.ts");
/* harmony import */ var _shared_pipes_user_list_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/pipes/user-list.pipe */ "./src/app/shared/pipes/user-list.pipe.ts");
/* harmony import */ var _shared_pipes_datarules_list_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/pipes/datarules-list.pipe */ "./src/app/shared/pipes/datarules-list.pipe.ts");
/* harmony import */ var _create_new_organization_create_new_organization_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./create-new-organization/create-new-organization.component */ "./src/app/admin/create-new-organization/create-new-organization.component.ts");
/* harmony import */ var _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-new-report/create-new-report.component */ "./src/app/admin/create-new-report/create-new-report.component.ts");
/* harmony import */ var _create_new_datarule_create_new_datarule_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./create-new-datarule/create-new-datarule.component */ "./src/app/admin/create-new-datarule/create-new-datarule.component.ts");
/* harmony import */ var _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./create-new-user/create-new-user.component */ "./src/app/admin/create-new-user/create-new-user.component.ts");
/* harmony import */ var _share_report_share_report_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./share-report/share-report.component */ "./src/app/admin/share-report/share-report.component.ts");
/* harmony import */ var _edit_organization_edit_organization_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-organization/edit-organization.component */ "./src/app/admin/edit-organization/edit-organization.component.ts");
/* harmony import */ var _edit_data_rule_edit_data_rule_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./edit-data-rule/edit-data-rule.component */ "./src/app/admin/edit-data-rule/edit-data-rule.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/admin/edit-user/edit-user.component.ts");
/* harmony import */ var _edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./edit-report/edit-report.component */ "./src/app/admin/edit-report/edit-report.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ghost_ghost_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ghost/ghost.component */ "./src/app/admin/ghost/ghost.component.ts");
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
                _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__["OrganizationDetailsComponent"],
                _organization_organization_component__WEBPACK_IMPORTED_MODULE_8__["OrganizationComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailsComponent"],
                _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_10__["AdminReportDetailsComponent"],
                _shared_common_view_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__["UserListComponent"],
                _shared_common_view_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_12__["ReportListComponent"],
                _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_13__["AllUsersComponent"],
                _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_14__["AllReportsComponent"],
                _all_users_all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_15__["AllUserListComponent"],
                _all_reports_all_report_list_all_report_list_component__WEBPACK_IMPORTED_MODULE_16__["AllReportListComponent"],
                _shared_pipes_search_name_pipe__WEBPACK_IMPORTED_MODULE_1__["SearchNamePipe"],
                _shared_pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_18__["PaginationPipe"],
                _shared_pipes_org_list_pipe__WEBPACK_IMPORTED_MODULE_19__["OrgListPipe"],
                _shared_pipes_user_list_pipe__WEBPACK_IMPORTED_MODULE_20__["UserListPipe"],
                _shared_pipes_datarules_list_pipe__WEBPACK_IMPORTED_MODULE_21__["DataRulesListPipe"],
                _create_new_organization_create_new_organization_component__WEBPACK_IMPORTED_MODULE_22__["CreateNewOrganizationComponent"],
                _create_new_report_create_new_report_component__WEBPACK_IMPORTED_MODULE_23__["CreateNewReportComponent"],
                _create_new_datarule_create_new_datarule_component__WEBPACK_IMPORTED_MODULE_24__["CreateNewDataruleComponent"],
                _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_25__["CreateNewUserComponent"],
                _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_25__["NewUserOrganizationConfirmation"],
                _share_report_share_report_component__WEBPACK_IMPORTED_MODULE_26__["ShareReportComponent"],
                _edit_organization_edit_organization_component__WEBPACK_IMPORTED_MODULE_27__["EditOrganizationComponent"],
                _edit_data_rule_edit_data_rule_component__WEBPACK_IMPORTED_MODULE_28__["EditDataRuleComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_29__["EditUserComponent"],
                _shared_pipes_category_pipe__WEBPACK_IMPORTED_MODULE_0__["CategoryPipe"],
                _edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_30__["EditReportComponent"],
                _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__["DeleteOrganizationConfirmation"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__["DeleteUserConfirmation"],
                _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_10__["DeleteReportConfirmation"],
                _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDataruleConfirmation"],
                _ghost_ghost_component__WEBPACK_IMPORTED_MODULE_32__["GhostComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__["SharedModule"]
            ],
            entryComponents: [
                _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_25__["NewUserOrganizationConfirmation"],
                _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__["DeleteOrganizationConfirmation"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__["DeleteUserConfirmation"],
                _admin_report_details_admin_report_details_component__WEBPACK_IMPORTED_MODULE_10__["DeleteReportConfirmation"],
                _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDataruleConfirmation"]
            ]
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

module.exports = "<div class=\"breadcrumb-container\">\n  <div class=\"breadcrumb\"> <span class=\"active\"><i class=\"material-icons\">\n        assessment </i> Report List</span></div>\n</div>\n\n<div class=\"main-content-view\" *ngIf=\"viewInitialized  && reports.length > 0\">\n  <app-report-list [reports]=\"reports\" [allowAdd]=true (reportID)=\"goToReport($event)\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-report-list>\n\n</div>\n\n<div *ngIf=\"!viewInitialized\" style=\"margin:auto; padding-top: 80px; text-align: center\">\n  <mat-spinner style=\"margin:auto\"></mat-spinner>\n  <p style=\"text-align: center;\">Reports Loading...</p>\n</div>\n\n<div *ngIf=\"viewInitialized && reports.length === 0 \" class=\"empty-list\" >\n  <div class=\"icons\">\n    <i class=\"material-icons main\"> assessment </i>\n    <button routerLink=\"../new-report\" mat-fab class=\"button-fab add\" color=\"primary-button\"> <i class=\"material-icons\">\n        add\n      </i>\n    </button>\n  </div>\n  <h2 class=\"title\"> There are no reports.</h2>\n  <h3 class=\"create-text\" routerLink=\"../new-report\"> Create new report</h3>\n</div>\n"

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
        this.viewInitialized = false;
    }
    AllReportListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.reportService.getReportByOrganization('orgID')];
                    case 1:
                        _a.reports = _c.sent();
                        _b = this;
                        return [4 /*yield*/, true];
                    case 2:
                        _b.viewInitialized = _c.sent();
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

module.exports = "<div class=\"breadcrumb-container\">\n  <div class=\"breadcrumb\"> <span class=\"active\"> <i class=\"material-icons\">\n        person_outline </i> User List</span></div>\n</div>\n\n<div class=\"main-content-view\" *ngIf=\"viewInitialized && users.length > 0 \" >\n  <app-user-list [users]=\"users\" (userID)=\"goToUser($event)\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-user-list>\n</div>\n\n<div *ngIf=\"!viewInitialized\" style=\"margin:auto; padding-top: 80px; text-align: center\">\n  <mat-spinner style=\"margin:auto\"></mat-spinner>\n  <p style=\"text-align: center;\">Users Loading...</p>\n</div>\n\n<div *ngIf=\"viewInitialized && users.length === 0 \" class=\"empty-list\" >\n    <div class=\"icons\">\n      <i class=\"material-icons main\"> person_outline </i>\n      <button routerLink=\"../new-user\" mat-fab class=\"button-fab add\" color=\"primary-button\"> <i class=\"material-icons\">\n          add\n        </i>\n      </button>\n    </div>\n    <h2 class=\"title\"> There are no users.</h2>\n    <h3 class=\"create-text\" routerLink=\"../new-user\"> Create new user</h3>\n  </div>\n"

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
        this.viewInitialized = false;
    }
    AllUserListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.userService.timeout()];
                    case 1:
                        _a.users = _b.sent();
                        this.userService.setLocalUsers(this.users);
                        this.viewInitialized = true;
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

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\">\n      <form [formGroup]=\"dataruleFormGroup\" *ngIf=\"dataruleFormGroup\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"title\"> Create New Data Rule</h2>\n        <hr>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> New Rule for {{organization.name}}</h4>\n          <i class=\"material-icons form-icon\">\n            dns\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Rule Name</mat-label>\n            <input formControlName=\"name\" matInput placeholder=\"Enter Name\">\n            <mat-error>\n              Rule name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            storage\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Data Source</mat-label>\n            <mat-select formControlName=\"datasource\">\n              <mat-option *ngFor=\"let datasource of datasources\" value=\"{{datasource._id}}\">{{datasource.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              Data source is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            priority_high\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Identifier</mat-label>\n            <mat-select formControlName=\"identifier\">\n                <mat-option *ngFor=\"let identifier of identifiers\" value=\"{{identifier}}\">{{identifier}}</mat-option>\n\n              </mat-select>\n            <mat-error>\n              Identifier is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            compare\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Condition</mat-label>\n            <mat-select formControlName=\"condition\">\n              <mat-option value=\"equals\">Equals</mat-option>\n              <mat-option value=\"contains\">Contains</mat-option>\n              <mat-option value=\"excludes\">Excludes</mat-option>\n            </mat-select>\n            <mat-error>\n              Condition is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            title\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Token</mat-label>\n            <input formControlName=\"token\" matInput placeholder=\"Select Data Source\">\n            <mat-error>\n              Token is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"buttons\">\n          <button mat-button routerLink=\"..\">Cancel</button>\n          <button class=\"done primary\" [disabled]=\"!dataruleFormGroup.valid\" [ngClass]=\"{'button-disabled': !dataruleFormGroup.valid}\"\n            mat-flat-button type=\"submit\">Done </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/datarules.service */ "./src/app/shared/services/datarules.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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





var CreateNewDataruleComponent = /** @class */ (function () {
    function CreateNewDataruleComponent(formBuilder, datarulesService, route, organizationService) {
        this.formBuilder = formBuilder;
        this.datarulesService = datarulesService;
        this.route = route;
        this.organizationService = organizationService;
    }
    CreateNewDataruleComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationId = params['id'];
                        });
                        _a = this;
                        return [4 /*yield*/, this.datarulesService.getAllDataSourceForOrganization('id')];
                    case 1:
                        _a.datasources = _c.sent();
                        this.identifiers = [
                            'Identifier 1',
                            'Identifier 2',
                            'Identifier 3',
                            'Identifier 4'
                        ];
                        this.dataruleFormGroup = this.formBuilder.group({
                            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.noWhitespaceValidator]],
                            datasource: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            identifier: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            condition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            token: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.noWhitespaceValidator]]
                        });
                        _b = this;
                        return [4 /*yield*/, this.organizationService.getLocalOrganization(this.organizationId)];
                    case 2:
                        _b.organization = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CreateNewDataruleComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    CreateNewDataruleComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    };
    CreateNewDataruleComponent.prototype.onSubmit = function () {
        var form = this.dataruleFormGroup.value;
        var datarule = {
            name: form.name,
            datasourceID: form.datasource,
            identifier: form.identifier,
            condition: form.condition,
            token: form.token,
            organizationID: this.organizationId
        };
        console.log(datarule);
        this.datarulesService.createNewDataRule(datarule);
    };
    CreateNewDataruleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-create-new-datarule',
            template: __webpack_require__(/*! ./create-new-datarule.component.html */ "./src/app/admin/create-new-datarule/create-new-datarule.component.html"),
            styles: [__webpack_require__(/*! ./create-new-datarule.component.scss */ "./src/app/admin/create-new-datarule/create-new-datarule.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_2__["DatarulesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"]])
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

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\" *ngIf=\"orgForm\">\n      <!-- *********************************  -->\n      <form [formGroup]=\"orgForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"title\"> Create New Organization</h2>\n        <hr>\n        <h4 class=\"input-header\"> Please enter organization information </h4>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Organization Name</mat-label>\n            <input matInput type=\"text\" id=\"name\" placeholder=\"Enter Name\" formControlName=\"orgName\">\n            <mat-error>\n              Organization name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\" matTooltip=\"{{orgNameTooltip}}\">\n            info\n          </i>\n        </div>\n        <h4 class=\"input-header\">Categories\n          <i class=\"material-icons info-icon\" matTooltip=\"{{orgNameTooltip}}\">\n            info\n          </i>\n        </h4>\n        <div formArrayName=\"itemRows\">\n          <div *ngFor=\"let itemrow of orgForm.controls.itemRows.controls; let i=index\" [formGroupName]=\"i\">\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                book\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Category </mat-label>\n                <input type=\"text\" placeholder=\"Category\" aria-label=\"Number\" matInput formControlName=\"itemname\" [matAutocomplete]=\"auto\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of options | category: this.orgForm.controls.itemRows.controls[i].controls.itemname.value\" [value]=\"option\">\n                    {{option}}\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error>\n                  Category name is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"orgForm.get('itemRows').getError('duplicate')\">\n                  Duplicated Category\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons close-icon\" *ngIf=\"orgForm?.controls.itemRows?.controls.length > 1\" (click)=\"deleteRow(i)\">\n                close\n              </i>\n            </div>\n          </div>\n        </div>\n        <p class=\"custom-error\" *ngIf=\"orgForm.get('itemRows').getError('duplicate')\">\n          Cannot have duplicate categories </p>\n        <p class=\"add-row\" (click)=\"addNewRow()\">+ Add another category</p>\n        <div class=\"buttons\">\n          <button mat-button routerLink=\"../list\">Cancel</button>\n          <button class=\"done primary\" [disabled]=\"!orgForm.valid\" [ngClass]=\"{'button-disabled': !orgForm.valid}\" mat-flat-button type=\"submit\">Done\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

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
        this.selectedCategories = [''];
    }
    CreateNewOrganizationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.organizatinonService.getAllCategories()];
                    case 1:
                        _a.options = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this._fb.group({
                                orgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                    this.noWhitespaceValidator
                                ]),
                                itemRows: this._fb.array([this.initItemRows()], this.noDuplicate)
                            })];
                    case 2:
                        _b.orgForm = _c.sent();
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
        this.organizatinonService.createNewOrganization(org);
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

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\">\n      <h2 class=\"title\"> Create New Report</h2>\n      <hr>\n      <mat-horizontal-stepper #stepper>\n        <!-- First Step -->\n        <mat-step [stepControl]=\"orgForm\" *ngIf=\"orgForm && !organizationID\">\n          <form [formGroup]=\"orgForm\">\n\n            <div class=\"row\">\n              <h4 class=\"input-header\"> Please select organization for new report <i class=\"material-icons info-icon\">\n                  info\n                </i></h4>\n              <i class=\"material-icons form-icon\">\n                business\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Select Organization</mat-label>\n                <mat-select formControlName=\"organization\">\n                  <mat-option (click)=\"selectOrg()\" *ngFor=\"let organization of organizations\" value=\"{{organization._id}}\">{{organization.name}}</mat-option>\n                </mat-select>\n                <mat-error>\n                  Organization is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"row\">\n\n              <p class=\"create-new-text\">Organization not on the list? <span class=\"create-new-button\">Create New Organization </span></p>\n            </div>\n            <div class=\"buttons\">\n              <button mat-button type='button' routerLink=\"../\">Cancel</button>\n              <button mat-button type='button' mat-flat-button class=\"done primary\" [disabled]=\"!orgForm.valid\" [ngClass]=\"{'button-disabled': !orgForm.valid}\"\n                matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n\n        <!-- 2nd -->\n        <mat-step [stepControl]=\"reportInfoForm\" *ngIf=\"reportInfoForm && selectedOrg || reportInfoForm && organizationID\">\n          <form [formGroup]=\"reportInfoForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n              <h4 class=\"input-header\">New Report for {{selectedOrg.name}} </h4>\n              <h4 class=\"input-header\">Please enter report information</h4>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                assessment\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Report Name</mat-label>\n                <input formControlName=\"name\" matInput placeholder=\"Report Name\">\n                <mat-error>\n                  Report name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                link\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Data Studio Link</mat-label>\n                <input formControlName=\"datastudioLink\" matInput placeholder=\"Data Studio Link\">\n                <mat-error>\n                  Data Studio Link is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n\n            <div formArrayName=\"datasourceRows\">\n              <div *ngFor=\"let datasource of reportInfoForm.controls.datasourceRows.controls; let i=index\" [formGroupName]=\"i\">\n                <h4 class=\"input-header\">Data Source {{i+1}}\n                    <i class=\"material-icons info-icon\">\n                        info\n                      </i>\n                 </h4>\n                <div class=\"row\">\n                  <i class=\"material-icons form-icon\">\n                    storage\n                  </i>\n                  <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                    <mat-label>Data Source</mat-label>\n                    <mat-select formControlName=\"name\">\n                      <mat-option *ngFor=\"let datasource of datasources\" value=\"{{datasource.name}}\">{{datasource.name}}</mat-option>\n                    </mat-select>\n                    <mat-error>\n                      Data Source is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                  <i class=\"material-icons close-icon\" *ngIf=\"reportInfoForm?.controls.datasourceRows?.controls.length > 1\" (click)=\"deleteRow(i)\">\n                      close\n                    </i>\n                </div>\n                <div class=\"row\">\n                  <i class=\"material-icons form-icon\">\n                    class\n                  </i>\n                  <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                    <mat-label>Data Studio ID</mat-label>\n                    <input formControlName=\"_id\" matInput placeholder=\"Data Studio ID\">\n                    <mat-error>\n                      Data Studio ID is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                  <i class=\"material-icons info-icon\">\n                    info\n                  </i>\n                </div>\n              </div>\n            </div>\n            <p class=\"custom-error\" *ngIf=\"reportInfoForm.get('datasourceRows').getError('duplicate')\">\n                Cannot have duplicate Data Sources </p>\n\n            <p class=\"add-row\" (click)=\"addNewRow()\">+ Add another Data source</p>\n            <div class=\"buttons\">\n              <button mat-button type='button' *ngIf=\"!organizationID\" (click)=\"selectStep(0)\">Back</button>\n              <button mat-button type='button' *ngIf=\"organizationID\" routerLink=\"../\">Back</button>\n              <button mat-button type='submit' mat-flat-button class=\"done primary\" [disabled]=\"!reportInfoForm.valid\" [ngClass]=\"{'button-disabled': !reportInfoForm.valid}\">Done</button>\n            </div>\n          </form>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/create-new-report/create-new-report.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/create-new-report/create-new-report.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-new-button:hover {\n  cursor: pointer; }\n\n::ng-deep .mat-horizontal-stepper-header-container {\n  display: none !important; }\n"

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
/* harmony import */ var src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/datarules.service */ "./src/app/shared/services/datarules.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function CreateNewReportComponent(route, router, organizationService, formBuilder, datarulesService, reportService) {
        this.route = route;
        this.router = router;
        this.organizationService = organizationService;
        this.formBuilder = formBuilder;
        this.datarulesService = datarulesService;
        this.reportService = reportService;
    }
    CreateNewReportComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, , 7]);
                        _a = this;
                        return [4 /*yield*/, this.datarulesService.getAllDataSourceForOrganization('id')];
                    case 1:
                        _a.datasources = _d.sent();
                        this.orgForm = this.formBuilder.group({
                            organization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                        });
                        this.reportInfoForm = this.formBuilder.group({
                            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
                            datastudioLink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
                            datasourceRows: this.formBuilder.array([this.initItemRows()], this.noDuplicate)
                        });
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
                        });
                        if (!this.organizationID) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this.organizationService.getLocalOrganization(this.organizationID)];
                    case 2:
                        _b.selectedOrg = _d.sent();
                        console.log(this.selectedOrg);
                        return [3 /*break*/, 5];
                    case 3:
                        _c = this;
                        return [4 /*yield*/, this.organizationService.getAllOrganizationsWithNoDetails()];
                    case 4:
                        _c.organizations = _d.sent();
                        _d.label = 5;
                    case 5:
                        console.log(this.reportInfoForm.controls.datasourceRows);
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _d.sent();
                        console.log(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CreateNewReportComponent.prototype.selectStep = function (id) {
        this.stepper.selectedIndex = id;
    };
    CreateNewReportComponent.prototype.initItemRows = function () {
        return this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]]
        });
    };
    CreateNewReportComponent.prototype.addNewRow = function () {
        var control = this.reportInfoForm.controls['datasourceRows'];
        control.push(this.initItemRows());
    };
    CreateNewReportComponent.prototype.deleteRow = function (index) {
        var control = this.reportInfoForm.controls['datasourceRows'];
        control.removeAt(index);
    };
    CreateNewReportComponent.prototype.selectOrg = function () {
        var _this = this;
        this.selectedOrg = this.organizations.find(function (org) {
            return org._id === _this.orgForm.value.organization;
        });
    };
    CreateNewReportComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    };
    CreateNewReportComponent.prototype.noDuplicate = function (array) {
        if (array.errors) {
            console.log(array.errors.duplicate);
        }
        if (array.value) {
            var temp = [];
            for (var _i = 0, _a = array.value; _i < _a.length; _i++) {
                var datasource = _a[_i];
                if (!temp.includes(datasource.name)) {
                    if (datasource.name !== '') {
                        temp.push(datasource.name);
                    }
                }
                else {
                    return { duplicate: true };
                }
            }
            return null;
        }
    };
    CreateNewReportComponent.prototype.onSubmit = function () {
        var organization;
        if (this.organizationID) {
            organization = this.organizationID;
        }
        else {
            organization = this.orgForm.value.organization;
        }
        var rForm = this.reportInfoForm.value;
        var report = {
            name: rForm.name,
            datastudioLink: rForm.datastudioLink,
            datasources: rForm.datasourceRows,
            organizationID: organization
        };
        this.reportService.createNewReport(report);
        console.log(report);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepper"])
    ], CreateNewReportComponent.prototype, "stepper", void 0);
    CreateNewReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-report',
            template: __webpack_require__(/*! ./create-new-report.component.html */ "./src/app/admin/create-new-report/create-new-report.component.html"),
            styles: [__webpack_require__(/*! ./create-new-report.component.scss */ "./src/app/admin/create-new-report/create-new-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_5__["DatarulesService"],
            src_app_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
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

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\">\n      <h2 class=\"title\"> Create New User</h2>\n      <hr>\n      <mat-horizontal-stepper linear #stepper *ngIf=\"firstFormGroup && secondFormGroup\">\n        <!-- First Step-->\n        <mat-step [stepControl]=\"firstFormGroup\">\n            <form [formGroup]=\"firstFormGroup\">\n              <ng-template matStepLabel>Fill out your name</ng-template>\n              <div class=\"row\">\n                <h4 class=\"input-header\"> Please select role for new user <i class=\"material-icons info-icon\">\n                    info\n                  </i></h4>\n                <i class=\"material-icons form-icon\">\n                  business\n                </i>\n                <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                  <mat-label>Role</mat-label>\n                  <mat-select formControlName=\"role\" [(value)]=\"roleSelected\" >\n                    <mat-option value=\"admin\" (click)=\"checkRole()\">Admin</mat-option>\n                    <mat-option value=\"viewer\" (click)=\"checkRole()\">Viewer</mat-option>\n                  </mat-select>\n                  <mat-error>\n                      Role is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n              </div>\n              <div class=\"row\" *ngIf=\"roleSelected === 'viewer'\">\n                <h4 class=\"input-header\"> Please select organization(s) for new user <i class=\"material-icons info-icon\">\n                    info\n                  </i></h4>\n                <i class=\"material-icons form-icon\">\n                  business\n                </i>\n                <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                  <mat-label>Select Organization(s)</mat-label>\n                  <mat-select  formControlName=\"organizations\" [(value)]=\"selectedOrganizationIds\" multiple>\n                    <mat-option *ngFor=\"let organization of organizations\" value=\"{{organization._id}}\">{{organization.name}}</mat-option>\n                  </mat-select>\n                  <mat-error>\n                      Organization is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n                <p class=\"create-new-text\">Organization not on the list? <span class=\"create-new-button\" routerLink=\"/admin/o/new-organization\">Create\n                    New Organization </span></p>\n              </div>\n              <div class=\"buttons\">\n                <button mat-button type='button'  routerLink=\"../\">Cancel</button>\n                <button mat-button type='button' mat-flat-button class=\"done primary\" [disabled]=\"!firstFormGroup.valid\" [ngClass]=\"{'button-disabled': !firstFormGroup.valid}\" (click)=\"openDialog()\">Next</button>\n              </div>\n            </form>\n        </mat-step>\n        <!-- Second Step-->\n        <mat-step [stepControl]=\"secondFormGroup\">\n          <form [formGroup]=\"secondFormGroup\" (ngSubmit)=\"onSubmit()\">\n            <p class=\"description\" *ngIf=\"roleSelected === 'admin'\"> New Admin user</p>\n            <p class=\"description\" *ngIf=\"roleSelected === 'viewer'\"> New Viewer for <span *ngFor=\"let org of selectedOrganizationNames; let i = index\">{{org.name}}<span *ngIf=\"i < selectedOrganizationNames.length - 1\">,</span>&nbsp;</span></p>\n            <h4 class=\"input-header\"> Please enter user information </h4>\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                  person_outline\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label   >First Name</mat-label>\n                <input formControlName=\"firstName\" matInput placeholder=\"\">\n                <mat-error>\n                  First Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                person_outline\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label >Last Name</mat-label>\n                <input formControlName=\"lastName\" matInput placeholder=\"\">\n                <mat-error>\n                  Last Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                email\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Gmail</mat-label>\n                <input  type=\"email\" formControlName=\"email\" matInput placeholder=\"\">\n                <mat-error *ngIf=\"secondFormGroup?.controls.email?.errors?.required \">\n                  Email is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"secondFormGroup?.controls.email?.errors?.email \">\n                 Must be in email format\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <div class=\"row\" *ngIf=\"allowSecondaryEmail\">\n              <i class=\"material-icons form-icon\">\n                alternate_email\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label  >Secondary Email</mat-label>\n                <input formControlName=\"secondaryEmail\" type=\"email\" matInput placeholder=\"\">\n                <mat-hint>Not Required</mat-hint>\n                <mat-error *ngIf=\"secondFormGroup?.controls.secondaryEmail?.errors?.email \">\n                  Must be in email format\n                 </mat-error>\n\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <p class=\"add-row\"  *ngIf=\"!allowSecondaryEmail\" (click)=\"addSecondaryEmail()\">+ Add secondary email</p>\n\n            <div class=\"buttons\">\n              <button mat-button matStepperPrevious type=\"button\">Back</button>\n              <button class=\"done primary\" mat-flat-button  [disabled]=\"!secondFormGroup.valid\" [ngClass]=\"{'button-disabled': !secondFormGroup.valid}\" type=\"submit\">Done</button>\n            </div>\n          </form>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/create-new-user/create-new-user.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/create-new-user/create-new-user.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-new-button:hover {\n  cursor: pointer; }\n\n::ng-deep .mat-horizontal-stepper-header-container {\n  display: none !important; }\n"

/***/ }),

/***/ "./src/app/admin/create-new-user/create-new-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/create-new-user/create-new-user.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateNewUserComponent, NewUserOrganizationConfirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewUserComponent", function() { return CreateNewUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserOrganizationConfirmation", function() { return NewUserOrganizationConfirmation; });
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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






var CreateNewUserComponent = /** @class */ (function () {
    function CreateNewUserComponent(organizationService, formBuilder, dialog, route, userService) {
        this.organizationService = organizationService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.route = route;
        this.userService = userService;
        this.allowSecondaryEmail = false;
    }
    CreateNewUserComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getAllOrganizationsWithNoDetails()];
                    case 1:
                        _a.organizations = _b.sent();
                        this.firstFormGroup = this.formBuilder.group({
                            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                        });
                        this.secondFormGroup = this.formBuilder.group({
                            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
                            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
                            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, this.noWhitespaceValidator]],
                            secondaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
                        });
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
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
    CreateNewUserComponent.prototype.checkRole = function () {
        if (this.roleSelected === 'admin') {
            this.firstFormGroup.removeControl('organizations');
        }
        if (this.roleSelected === 'viewer') {
            this.firstFormGroup.addControl('organizations', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
        }
    };
    /**
     * ON SUBMIT FOR CREATING NEW USER
     */
    CreateNewUserComponent.prototype.onSubmit = function () {
        var firstForm = this.firstFormGroup.value;
        var secondForm = this.secondFormGroup.value;
        var orgs = [];
        if (firstForm.role === 'viewer') {
            orgs = firstForm.organizations;
        }
        var newUser = {
            firstName: secondForm.firstName,
            lastName: secondForm.lastName,
            googleID: secondForm.email,
            secondaryEmail: secondForm.secondaryEmail,
            organizations: orgs,
            role: firstForm.role
        };
        this.userService.createNewUser(newUser);
        console.log(newUser);
    };
    CreateNewUserComponent.prototype.openDialog = function (stepper) {
        var _this = this;
        if (this.roleSelected === 'viewer') {
            this.selectedOrganizationNames = this.organizations.filter(function (org) {
                return _this.selectedOrganizationIds.includes(org._id);
            });
        }
        var dialogRef = this.dialog.open(NewUserOrganizationConfirmation, {
            data: { orgs: this.selectedOrganizationNames, role: this.roleSelected }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.stepper.next();
            }
        });
    };
    CreateNewUserComponent.prototype.addSecondaryEmail = function () {
        this.allowSecondaryEmail = true;
    };
    CreateNewUserComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('stepper'),
        __metadata("design:type", Object)
    ], CreateNewUserComponent.prototype, "stepper", void 0);
    CreateNewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-new-user',
            template: __webpack_require__(/*! ./create-new-user.component.html */ "./src/app/admin/create-new-user/create-new-user.component.html"),
            styles: [__webpack_require__(/*! ./create-new-user.component.scss */ "./src/app/admin/create-new-user/create-new-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], CreateNewUserComponent);
    return CreateNewUserComponent;
}());

var NewUserOrganizationConfirmation = /** @class */ (function () {
    function NewUserOrganizationConfirmation(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NewUserOrganizationConfirmation.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewUserOrganizationConfirmation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'new-user-organization-confirmation',
            template: __webpack_require__(/*! ./new-user-organization-confirmation.html */ "./src/app/admin/create-new-user/new-user-organization-confirmation.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], NewUserOrganizationConfirmation);
    return NewUserOrganizationConfirmation;
}());



/***/ }),

/***/ "./src/app/admin/create-new-user/new-user-organization-confirmation.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/create-new-user/new-user-organization-confirmation.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\" *ngIf=\"data.role === 'viewer'\">\n  <h2 class=\"title\" >Multiple Viewer Access</h2>\n  <div mat-dialog-content>\n    <h4 class=\"subtitle\">Give this user Viewer Access for the following Organizations?</h4>\n    <ul class=\"conditions\">\n      <li *ngFor=\"let temp of data.orgs\"> {{temp.name}}</li>\n    </ul>\n  </div>\n  <div mat-dialog-actions style=\"float:right\">\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button mat-flat-button [mat-dialog-close]=\"true\" class=\"primary\" cdkFocusInitial>Continue</button>\n  </div>\n</div>\n\n\n<div class=\"dialog\" *ngIf=\"data.role === 'admin'\">\n  <h2 class=\"title\"><i class=\"material-icons\">\n    warning\n    </i>Give Admin Access</h2>\n  <div mat-dialog-content>\n    <h4 class=\"subtitle\">Warning: Giving Admin access will grant the following:</h4>\n    <ul  class=\"conditions\">\n      <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n      <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n      <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n    </ul>\n  </div>\n  <div mat-dialog-actions style=\"float:right\">\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button mat-flat-button [mat-dialog-close]=\"true\" class=\"primary\" cdkFocusInitial>Continue</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/edit-data-rule/edit-data-rule.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/edit-data-rule/edit-data-rule.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\">\n      <form [formGroup]=\"dataruleFormGroup\" *ngIf=\"dataruleFormGroup && dataRule\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"title\">Edit Data Rule: <span class=\"input-header\">{{dataRule.name}} </span> </h2>\n        <hr>\n        <div class=\"row\">\n          <h4 class=\"input-header\"> Editing rule for {{organization.name}}</h4>\n          <i class=\"material-icons form-icon\">\n            dns\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Rule Name</mat-label>\n            <input formControlName=\"name\" matInput placeholder=\"Enter Name\">\n            <mat-error>\n              Rule name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            storage\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Data Source</mat-label>\n            <mat-select formControlName=\"datasource\">\n              <mat-option *ngFor=\"let datasource of datasources\" value=\"{{datasource._id}}\">{{datasource.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              Data source is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            priority_high\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Identifier</mat-label>\n            <mat-select formControlName=\"identifier\">\n                <mat-option *ngFor=\"let identifier of identifiers\" value=\"{{identifier}}\">{{identifier}}</mat-option>\n\n              </mat-select>\n            <mat-error>\n              Identifier is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            compare\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Condition</mat-label>\n            <mat-select formControlName=\"condition\">\n              <mat-option value=\"equals\">Equals</mat-option>\n              <mat-option value=\"contains\">Contains</mat-option>\n              <mat-option value=\"excludes\">Excludes</mat-option>\n            </mat-select>\n            <mat-error>\n              Condition is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n\n        </div>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            title\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Token</mat-label>\n            <input formControlName=\"token\" matInput placeholder=\"Select Data Source\">\n            <mat-error>\n              Token is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\">\n            info\n          </i>\n        </div>\n        <div class=\"buttons\">\n          <button mat-button routerLink=\"../../\">Cancel</button>\n          <button class=\"done primary\" [disabled]=\"!dataruleFormGroup.valid\" [ngClass]=\"{'button-disabled': !dataruleFormGroup.valid}\"\n            mat-flat-button type=\"submit\">Done </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/edit-data-rule/edit-data-rule.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/edit-data-rule/edit-data-rule.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/edit-data-rule/edit-data-rule.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/edit-data-rule/edit-data-rule.component.ts ***!
  \******************************************************************/
/*! exports provided: EditDataRuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataRuleComponent", function() { return EditDataRuleComponent; });
/* harmony import */ var src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/datarules.service */ "./src/app/shared/services/datarules.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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





var EditDataRuleComponent = /** @class */ (function () {
    function EditDataRuleComponent(formBuilder, datarulesService, route, organizationService, dataruleService) {
        this.formBuilder = formBuilder;
        this.datarulesService = datarulesService;
        this.route = route;
        this.organizationService = organizationService;
        this.dataruleService = dataruleService;
    }
    EditDataRuleComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 4, , 5]);
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationId = params['id'];
                            _this.dataRuleId = params['ruleID'];
                        });
                        _a = this;
                        return [4 /*yield*/, this.datarulesService.getDataRules('orgID')];
                    case 1:
                        _a.dataRules = _d.sent();
                        this.dataRule = this.dataRules.find(function (element) {
                            return element._id === _this.dataRuleId;
                        });
                        _b = this;
                        return [4 /*yield*/, this.datarulesService.getAllDataSourceForOrganization('id')];
                    case 2:
                        _b.datasources = _d.sent();
                        this.identifiers = [
                            'Identifier 1',
                            'Identifier 2',
                            'Identifier 3',
                            'Identifier 4'
                        ];
                        this.dataruleFormGroup = this.formBuilder.group({
                            name: [this.dataRule.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.noWhitespaceValidator]],
                            datasource: [this.dataRule.datasource, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            identifier: [this.dataRule.identifier, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            condition: [this.dataRule.condition, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            token: [this.dataRule.token, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.noWhitespaceValidator]]
                        });
                        _c = this;
                        return [4 /*yield*/, this.organizationService.getLocalOrganization(this.organizationId)];
                    case 3:
                        _c.organization = _d.sent();
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
    EditDataRuleComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    EditDataRuleComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    };
    EditDataRuleComponent.prototype.onSubmit = function () {
        var form = this.dataruleFormGroup.value;
        var datarule = {
            _id: this.dataRuleId,
            name: form.name,
            datasourceID: form.datasource,
            identifier: form.identifier,
            condition: form.condition,
            token: form.token,
            organizationID: this.organizationId
        };
        this.dataruleService.editDataRule(datarule);
        console.log(datarule);
    };
    EditDataRuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-edit-data-rule',
            template: __webpack_require__(/*! ./edit-data-rule.component.html */ "./src/app/admin/edit-data-rule/edit-data-rule.component.html"),
            styles: [__webpack_require__(/*! ./edit-data-rule.component.scss */ "./src/app/admin/edit-data-rule/edit-data-rule.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_2__["DatarulesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"],
            _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_2__["DatarulesService"]])
    ], EditDataRuleComponent);
    return EditDataRuleComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-organization/edit-organization.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/edit-organization/edit-organization.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\" *ngIf=\"orgForm && org\">\n      <!-- *********************************  -->\n      <form [formGroup]=\"orgForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"title\"> Edit Organization: <span class=\"input-header\">{{org.name}} </span></h2>\n        <hr>\n        <h4 class=\"input-header\"> Please enter organization information </h4>\n        <div class=\"row\">\n          <i class=\"material-icons form-icon\">\n            business\n          </i>\n          <mat-form-field appearance=\"fill\" style=\"width:80%\">\n            <mat-label>Organization Name</mat-label>\n            <input matInput type=\"text\" id=\"name\" placeholder=\"Enter Name\" formControlName=\"orgName\">\n            <mat-error>\n              Organization name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <i class=\"material-icons info-icon\" matTooltip=\"{{orgNameTooltip}}\">\n            info\n          </i>\n        </div>\n        <h4 class=\"input-header\">Categories\n            <i class=\"material-icons info-icon\" matTooltip=\"{{orgNameTooltip}}\">\n              info\n            </i>\n        </h4>\n        <div formArrayName=\"itemRows\">\n          <div *ngFor=\"let itemrow of orgForm.controls.itemRows.controls; let i=index\" [formGroupName]=\"i\">\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                book\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Category </mat-label>\n                <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput formControlName=\"itemname\" [matAutocomplete]=\"auto\">\n                <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of options | category: this.orgForm.controls.itemRows.controls[i].controls.itemname.value\" [value]=\"option\">\n                    <span>{{option}} </span>\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error>\n                  Category name is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"orgForm.get('itemRows').getError('duplicate')\">\n                  Duplicated Category\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons close-icon\" *ngIf=\"orgForm.controls.itemRows.controls.length > 1\" (click)=\"deleteRow(i)\">\n                close\n              </i>\n            </div>\n          </div>\n        </div>\n        <p class=\"custom-error\" *ngIf=\"orgForm.get('itemRows').getError('duplicate')\">\n            Cannot have duplicate categories </p>\n        <p class=\"add-row\" (click)=\"addNewRow('')\">+ Add another category</p>\n        <div class=\"buttons\">\n          <button mat-button routerLink=\"../\">Cancel</button>\n          <button class=\"done primary\" [disabled]=\"!orgForm.valid\" [ngClass]=\"{'button-disabled': !orgForm.valid}\" mat-flat-button type=\"submit\">Done\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/edit-organization/edit-organization.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/edit-organization/edit-organization.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/edit-organization/edit-organization.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/edit-organization/edit-organization.component.ts ***!
  \************************************************************************/
/*! exports provided: EditOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrganizationComponent", function() { return EditOrganizationComponent; });
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var EditOrganizationComponent = /** @class */ (function () {
    function EditOrganizationComponent(organizatinonService, _fb, route) {
        this.organizatinonService = organizatinonService;
        this._fb = _fb;
        this.route = route;
        this.options = [];
        this.orgNameTooltip = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata paria. Restinguet citius, si ardentem acceperit. ';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selectedCategories = [''];
    }
    EditOrganizationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, control, _i, _c, category, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
                        });
                        _a = this;
                        return [4 /*yield*/, this.organizatinonService.getLocalOrganization(this.organizationID)];
                    case 1:
                        _a.org = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.organizatinonService.getAllCategories()];
                    case 2:
                        _b.options = _d.sent();
                        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
                        this.orgForm = this._fb.group({
                            orgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.org.name, [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                this.noWhitespaceValidator
                            ]),
                            itemRows: this._fb.array([this.initItemRows('')], this.noDuplicate)
                        });
                        control = this.orgForm.controls['itemRows'];
                        control.removeAt(0);
                        for (_i = 0, _c = this.org.categories; _i < _c.length; _i++) {
                            category = _c[_i];
                            this.addNewRow(category);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _d.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditOrganizationComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    EditOrganizationComponent.prototype.addAnotherCategory = function () {
        this.selectedCategories.push('');
    };
    EditOrganizationComponent.prototype.initItemRows = function (name) {
        return this._fb.group({
            itemname: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator]]
        });
    };
    EditOrganizationComponent.prototype.addNewRow = function (name) {
        var control = this.orgForm.controls['itemRows'];
        control.push(this.initItemRows(name));
    };
    EditOrganizationComponent.prototype.deleteRow = function (index) {
        var control = this.orgForm.controls['itemRows'];
        control.removeAt(index);
    };
    Object.defineProperty(EditOrganizationComponent.prototype, "controls", {
        get: function () {
            return this.orgForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditOrganizationComponent.prototype.onSubmit = function () {
        var temp = [];
        for (var _i = 0, _a = this.orgForm.value.itemRows; _i < _a.length; _i++) {
            var itemname = _a[_i];
            temp.push(itemname.itemname);
        }
        var org = {
            _id: this.organizationID,
            name: this.orgForm.value.orgName,
            categories: temp
        };
        this.organizatinonService.editOrganization(org);
    };
    EditOrganizationComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    };
    EditOrganizationComponent.prototype.getForm = function () {
        return this.orgForm;
    };
    EditOrganizationComponent.prototype.noDuplicate = function (array) {
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
    EditOrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-organization',
            template: __webpack_require__(/*! ./edit-organization.component.html */ "./src/app/admin/edit-organization/edit-organization.component.html"),
            styles: [__webpack_require__(/*! ./edit-organization.component.scss */ "./src/app/admin/edit-organization/edit-organization.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditOrganizationComponent);
    return EditOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-report/edit-report.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/edit-report/edit-report.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n    <div class=\"card\">\n      <div class=\"form\">\n        <h2 class=\"title\">Edit Report: <span class=\"input-header\">Report Name </span> </h2>\n        <hr>\n            <form [formGroup]=\"reportInfoForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"reportInfoForm\">\n                <h4 class=\"input-header\"> Please Enter Report Information</h4>\n                <div class=\"row\">\n                    <i class=\"material-icons form-icon\">\n                      business\n                    </i>\n                    <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                      <mat-label>Organization</mat-label>\n                      <mat-select formControlName=\"organization\">\n                        <mat-option (click)=\"selectOrg()\" *ngFor=\"let organization of organizations\" value=\"{{organization._id}}\">{{organization.name}}</mat-option>\n                      </mat-select>\n                      <mat-error>\n                        Organization is <strong>required</strong>\n                      </mat-error>\n\n                    </mat-form-field>\n                    <i class=\"material-icons info-icon\">\n                        info\n                      </i>\n                  </div>\n                  <div class=\"row\">\n                    <p class=\"create-new-text\">Organization not on the list? <span class=\"create-new-button\">Create New Organization </span></p>\n                  </div>\n              <div class=\"row\">\n                <i class=\"material-icons form-icon\">\n                  assessment\n                </i>\n                <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                  <mat-label>Report Name</mat-label>\n                  <input formControlName=\"name\" matInput placeholder=\"Report Name\">\n                  <mat-error>\n                    Report name is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n                <i class=\"material-icons info-icon\">\n                  info\n                </i>\n              </div>\n              <div class=\"row\">\n                <i class=\"material-icons form-icon\">\n                  link\n                </i>\n                <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                  <mat-label>Data Studio Link</mat-label>\n                  <input formControlName=\"datastudioLink\" matInput placeholder=\"Data Studio Link\">\n                  <mat-error>\n                    Data Studio Link is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n                <i class=\"material-icons info-icon\">\n                  info\n                </i>\n              </div>\n\n              <div formArrayName=\"datasourceRows\" *ngIf=\"reportInfoForm.controls.datasourceRows.controls\">\n                  <div *ngFor=\"let datasource of reportInfoForm.controls.datasourceRows.controls; let i=index\" [formGroupName]=\"i\">\n                  <h4 class=\"input-header\">Data Source {{i+1}}\n                      <i class=\"material-icons info-icon\">\n                          info\n                        </i>\n                   </h4>\n                  <div class=\"row\">\n                    <i class=\"material-icons form-icon\">\n                      storage\n                    </i>\n                    <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                      <mat-label>Data Source</mat-label>\n                      <mat-select formControlName=\"name\">\n                        <mat-option *ngFor=\"let datasource of datasources\" value=\"{{datasource.name}}\">{{datasource.name}}</mat-option>\n                      </mat-select>\n                      <mat-error>\n                        Data Source is <strong>required</strong>\n                      </mat-error>\n                    </mat-form-field>\n                    <i class=\"material-icons close-icon\" *ngIf=\"reportInfoForm?.controls?.datasourceRows?.controls.length > 1\" (click)=\"deleteRow(i)\">\n                        close\n                      </i>\n                  </div>\n                  <div class=\"row\">\n                    <i class=\"material-icons form-icon\">\n                      class\n                    </i>\n                    <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                      <mat-label>Data Studio ID</mat-label>\n                      <input formControlName=\"datastudioId\" matInput placeholder=\"Data Studio ID\">\n                      <mat-error>\n                        Data Studio ID is <strong>required</strong>\n                      </mat-error>\n                    </mat-form-field>\n                    <i class=\"material-icons info-icon\">\n                      info\n                    </i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"custom-error\" *ngIf=\"reportInfoForm.get('datasourceRows').getError('duplicate')\">\n                  Cannot have duplicate Data Sources </p>\n              <p class=\"add-row\" (click)=\"addNewRow('','')\">+ Add another Data source</p>\n              <div class=\"buttons\">\n                <button mat-button type='button' routerLink=\"../\">Back</button>\n                <button mat-button type='submit' mat-flat-button class=\"done primary\" [disabled]=\"!reportInfoForm.valid\" [ngClass]=\"{'button-disabled': !reportInfoForm.valid}\">Done</button>\n              </div>\n            </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/edit-report/edit-report.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/edit-report/edit-report.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/edit-report/edit-report.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/edit-report/edit-report.component.ts ***!
  \************************************************************/
/*! exports provided: EditReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReportComponent", function() { return EditReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/datarules.service */ "./src/app/shared/services/datarules.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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







var EditReportComponent = /** @class */ (function () {
    function EditReportComponent(route, router, organizationService, formBuilder, datarulesService, reportService) {
        this.route = route;
        this.router = router;
        this.organizationService = organizationService;
        this.formBuilder = formBuilder;
        this.datarulesService = datarulesService;
        this.reportService = reportService;
    }
    EditReportComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, _d, control, _i, _e, datasource, error_1;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 5, , 6]);
                        _a = this;
                        return [4 /*yield*/, this.route.params.subscribe(function (params) {
                                _this.reportID = params['reportID'];
                            })];
                    case 1:
                        _a.sub = _f.sent();
                        _b = this;
                        return [4 /*yield*/, this.organizationService.getAllOrganizationsWithNoDetails()];
                    case 2:
                        _b.organizations = _f.sent();
                        _c = this;
                        return [4 /*yield*/, this.datarulesService.getAllDataSourceForOrganization(this.reportID)];
                    case 3:
                        _c.datasources = _f.sent();
                        _d = this;
                        return [4 /*yield*/, this.reportService.getReport(this.reportID)];
                    case 4:
                        _d.report = _f.sent();
                        this.organizationID = this.report.organization._id;
                        if (this.organizationID) {
                            this.selectedOrg = this.organizations.find(function (org) {
                                return org._id === _this.organizationID;
                            });
                        }
                        this.reportInfoForm = this.formBuilder.group({
                            organization: [this.report.organization._id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            name: [this.report.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
                            datastudioLink: [this.report.link, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
                            datasourceRows: this.formBuilder.array([this.initItemRows('', '')], this.noDuplicate)
                        });
                        control = this.reportInfoForm.controls['datasourceRows'];
                        control.removeAt(0);
                        for (_i = 0, _e = this.report.datasources; _i < _e.length; _i++) {
                            datasource = _e[_i];
                            this.addNewRow(datasource.name, datasource._id);
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _f.sent();
                        console.log(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EditReportComponent.prototype.initItemRows = function (name, id) {
        return this.formBuilder.group({
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            datastudioId: [id, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]]
        });
    };
    EditReportComponent.prototype.addNewRow = function (name, id) {
        var control = this.reportInfoForm.controls['datasourceRows'];
        control.push(this.initItemRows(name, id));
    };
    EditReportComponent.prototype.deleteRow = function (index) {
        var control = this.reportInfoForm.controls['datasourceRows'];
        control.removeAt(index);
    };
    EditReportComponent.prototype.selectOrg = function () {
        var _this = this;
        this.selectedOrg = this.organizations.find(function (org) {
            return org._id === _this.orgForm.value.organization;
        });
    };
    EditReportComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    };
    EditReportComponent.prototype.noDuplicate = function (array) {
        if (array.errors) {
            console.log(array.errors.duplicate);
        }
        if (array.value) {
            var temp = [];
            for (var _i = 0, _a = array.value; _i < _a.length; _i++) {
                var datasource = _a[_i];
                if (!temp.includes(datasource.name)) {
                    if (datasource.name !== '') {
                        temp.push(datasource.name);
                    }
                }
                else {
                    return { duplicate: true };
                }
            }
            return null;
        }
    };
    EditReportComponent.prototype.onSubmit = function () {
        var rForm = this.reportInfoForm.value;
        var report = {
            _id: this.reportID,
            organizationID: this.organizationID,
            name: rForm.name,
            datastudioLink: rForm.datastudioLink,
            datasources: rForm.datasourceRows,
        };
        this.reportService.editReport(report);
        console.log(report);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepper"])
    ], EditReportComponent.prototype, "stepper", void 0);
    EditReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-report',
            template: __webpack_require__(/*! ./edit-report.component.html */ "./src/app/admin/edit-report/edit-report.component.html"),
            styles: [__webpack_require__(/*! ./edit-report.component.scss */ "./src/app/admin/edit-report/edit-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_5__["DatarulesService"],
            src_app_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], EditReportComponent);
    return EditReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-user/edit-user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/edit-user/edit-user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"card\" *ngIf=\"firstFormGroup  && user\">\n    <div class=\"form\">\n      <h2 class=\"title\">Edit User: <span class=\"input-header\"> {{user.firstName}}   {{user.lastName}}    </span></h2>\n      <hr>\n            <form [formGroup]=\"firstFormGroup\" (ngSubmit)=\"onSubmit()\">\n              <ng-template matStepLabel>Fill out your name</ng-template>\n              <div class=\"row\">\n                <h4 class=\"input-header\"> Viewer for <span *ngFor=\"let org of user.organizations; let i = index\">{{org.name}}<span *ngIf=\"i < user.organizations.length -1\">,</span> &nbsp;</span></h4>\n                <i class=\"material-icons form-icon\">\n                  business\n                </i>\n                <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                  <mat-label>Role</mat-label>\n                  <mat-select formControlName=\"role\" [(value)]=\"roleSelected\" >\n                    <mat-option value=\"Admin\" (click)=\"openDialog()\">Admin</mat-option>\n                    <mat-option value=\"Viewer\" (click)=\"checkRole()\">Viewer</mat-option>\n                  </mat-select>\n                  <mat-error>\n                      Role is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n                <i class=\"material-icons info-icon\">\n                  info\n                </i>\n              </div>\n\n              <div class=\"row\" *ngIf=\"firstFormGroup.value.role === 'Viewer'\">\n                <i class=\"material-icons form-icon\">\n                  business\n                </i>\n                <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                  <mat-label>Select Organization(s)</mat-label>\n                  <mat-select  formControlName=\"organizations\" [(ngModel)]=\"selectedOrganizationIds\"  multiple>\n                    <mat-option *ngFor=\"let organization of organizations\" value=\"{{organization._id}}\">{{organization.name}}</mat-option>\n                  </mat-select>\n                  <mat-error>\n                      Organization is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n                <i class=\"material-icons info-icon\">\n                  info\n                </i>\n                <p class=\"create-new-text\" style=\"padding-left: 35px;\n                padding-bottom: 10px;\">Organization not on the list? <span class=\"create-new-button\" routerLink=\"/admin/o/new-organization\">Create\n                    New Organization </span></p>\n              </div>\n\n\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                  person_outline\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label   >First Name</mat-label>\n                <input formControlName=\"firstName\" matInput placeholder=\"\">\n                <mat-error>\n                  First Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                person_outline\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label >Last Name</mat-label>\n                <input formControlName=\"lastName\" matInput placeholder=\"\">\n                <mat-error>\n                  Last Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                email\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Gmail</mat-label>\n                <input  type=\"email\" formControlName=\"email\" matInput placeholder=\"\">\n                <mat-error *ngIf=\"firstFormGroup?.controls.email?.errors?.required \">\n                  Email is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"firstFormGroup?.controls.email?.errors?.email \">\n                 Must be in email format\n                </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons form-icon\">\n                alternate_email\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label  >Secondary Email</mat-label>\n                <input formControlName=\"secondaryEmail\" type=\"email\" matInput placeholder=\"\">\n                <mat-hint>Not Required</mat-hint>\n                <mat-error>\n                  Must be in email format\n                 </mat-error>\n              </mat-form-field>\n              <i class=\"material-icons info-icon\">\n                info\n              </i>\n            </div>\n            <div class=\"buttons\" *ngIf=\"firstFormGroup\">\n              <button mat-button  type=\"button\" routerLink=\"../\">Back</button>\n              <button class=\"done primary\" mat-flat-button  [disabled]=\"!firstFormGroup.valid\" [ngClass]=\"{'button-disabled': !firstFormGroup.valid}\" type=\"submit\">Done</button>\n            </div>\n          </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/edit-user/edit-user.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/edit-user/edit-user.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-new-button:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/admin/edit-user/edit-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/edit-user/edit-user.component.ts ***!
  \********************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../create-new-user/create-new-user.component */ "./src/app/admin/create-new-user/create-new-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
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
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};







var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(organizationService, formBuilder, dialog, route, userService) {
        this.organizationService = organizationService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.route = route;
        this.userService = userService;
        this.selectedOrganizationIds = [];
    }
    EditUserComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, _d, org, e_1_1, _e, error_1, e_1, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 18, , 19]);
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getAllOrganizationsWithNoDetails()];
                    case 1:
                        _a.organizations = _g.sent();
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
                            _this.userID = params['userID'];
                        });
                        _b = this;
                        return [4 /*yield*/, this.userService.getUser(this.userID)];
                    case 2:
                        _b.user = _g.sent();
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 9, 10, 15]);
                        _c = __asyncValues(this.user.organizations);
                        _g.label = 4;
                    case 4: return [4 /*yield*/, _c.next()];
                    case 5:
                        if (!(_d = _g.sent(), !_d.done)) return [3 /*break*/, 8];
                        return [4 /*yield*/, _d.value];
                    case 6:
                        org = _g.sent();
                        this.selectedOrganizationIds.push(org._id);
                        _g.label = 7;
                    case 7: return [3 /*break*/, 4];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _g.trys.push([10, , 13, 14]);
                        if (!(_d && !_d.done && (_f = _c.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, _f.call(_c)];
                    case 11:
                        _g.sent();
                        _g.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15:
                        _e = this;
                        return [4 /*yield*/, this.formBuilder.group({
                                role: [this.user.role, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                                organizations: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                                firstName: [
                                    this.user.firstName,
                                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]
                                ],
                                lastName: [
                                    this.user.lastName,
                                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]
                                ],
                                email: [
                                    this.user.googleID,
                                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, this.noWhitespaceValidator]
                                ],
                                secondaryEmail: [this.user.secondaryEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]
                            })];
                    case 16:
                        _e.firstFormGroup = _g.sent();
                        return [4 /*yield*/, console.log(this.user)];
                    case 17:
                        _g.sent();
                        return [3 /*break*/, 19];
                    case 18:
                        error_1 = _g.sent();
                        console.log(error_1);
                        return [3 /*break*/, 19];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    EditUserComponent.prototype.checkRole = function () {
        if (this.roleSelected === 'admin') {
            this.firstFormGroup.removeControl('organizations');
        }
        if (this.roleSelected === 'viewer') {
            this.firstFormGroup.addControl('organizations', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
        }
    };
    /**
     * ON SUBMIT FOR CREATING NEW USER
     */
    EditUserComponent.prototype.onSubmit = function () {
        var firstForm = this.firstFormGroup.value;
        var orgs = [];
        if (firstForm.role === 'Viewer') {
            orgs = firstForm.organizations;
            var newUser = {
                _id: this.userID,
                firstName: firstForm.firstName,
                lastName: firstForm.lastName,
                googleID: firstForm.email,
                secondaryEmail: firstForm.secondaryEmail,
                organizations: orgs,
                role: firstForm.role
            };
            this.userService.editUser(newUser);
            console.log(newUser);
        }
        if (firstForm.role === 'Admin') {
            var newUser = {
                _id: this.userID,
                firstName: firstForm.firstName,
                lastName: firstForm.lastName,
                googleID: firstForm.email,
                secondaryEmail: firstForm.secondaryEmail,
                organizations: [],
                role: firstForm.role
            };
            this.userService.editUser(newUser);
            console.log(newUser);
        }
    };
    EditUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_create_new_user_create_new_user_component__WEBPACK_IMPORTED_MODULE_0__["NewUserOrganizationConfirmation"], {
            data: { orgs: '', role: 'admin' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(true);
            if (!result) {
                _this.firstFormGroup.controls['role'].setValue('Viewer');
            }
        });
    };
    EditUserComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/admin/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/admin/edit-user/edit-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/admin/ghost/ghost.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/ghost/ghost.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\n  <div class=\"company\">\n    <div class=\"icon-container\">\n      <div class=\"icon\">\n        <img src=\"../../assets/company-icon.png\" alt=\"Smiley face\">\n      </div>\n    </div>\n    <span class=\"name\"> Company </span>\n  </div>\n  <div class=\"ghost-title\">\n      Acting as: <span>{{name}}</span>&nbsp; <span class=\"close\"> <i class=\"material-icons\" (click)=\"disableGhost()\">\n          close\n        </i></span>\n\n\n  </div>\n</mat-toolbar>\n\n<div class=\"viewer-container\">\n\n  <div class=\"viewer-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/ghost/ghost.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/ghost/ghost.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/******* GHOST HEADER TITLE ******/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n/***** Filter Card ***/\n/****** Buttons Colors  **/\n/**** Empty List Color Styles ****/\n.toolbar {\n  background-color: #616161;\n  color: white;\n  z-index: 20;\n  position: fixed; }\n.toolbar .menu-icon {\n    min-width: unset;\n    padding: 0; }\n.toolbar .menu-icon i {\n      font-size: 2.5em; }\n.company {\n  height: 64px; }\n.company .icon-container {\n    height: 64px;\n    width: 64px;\n    position: relative; }\n.company .icon-container img {\n      height: 45px;\n      width: 45px;\n      position: absolute;\n      right: 0;\n      left: -30px;\n      top: 0;\n      bottom: 5px;\n      margin: auto auto; }\n.company .name {\n    position: absolute;\n    top: 15px;\n    font-size: 25px;\n    font-weight: bold;\n    color: white;\n    left: 65px; }\n.viewer-container {\n  background-color: #f5f5f5;\n  min-height: calc(100vh - 64px);\n  padding-top: 64px;\n  height: auto; }\n.ghost-title {\n  text-align: center;\n  width: 100%;\n  color: #c0c0c0; }\n.ghost-title .close i {\n    background-color: white;\n    color: #616161;\n    border-radius: 50%;\n    position: relative;\n    top: 5px; }\n.ghost-title .close i:hover {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/admin/ghost/ghost.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/ghost/ghost.component.ts ***!
  \************************************************/
/*! exports provided: GhostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhostComponent", function() { return GhostComponent; });
/* harmony import */ var _shared_services_ghost_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/ghost.service */ "./src/app/shared/services/ghost.service.ts");
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



var GhostComponent = /** @class */ (function () {
    function GhostComponent(ghostService, router, route) {
        this.ghostService = ghostService;
        this.router = router;
        this.route = route;
    }
    GhostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.name = params['userName'];
        });
    };
    GhostComponent.prototype.disableGhost = function () {
        this.ghostService.disableGhost();
        this.router.navigate(['../../'], { relativeTo: this.route });
    };
    GhostComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    GhostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ghost',
            template: __webpack_require__(/*! ./ghost.component.html */ "./src/app/admin/ghost/ghost.component.html"),
            styles: [__webpack_require__(/*! ./ghost.component.scss */ "./src/app/admin/ghost/ghost.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_ghost_service__WEBPACK_IMPORTED_MODULE_0__["GhostService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GhostComponent);
    return GhostComponent;
}());



/***/ }),

/***/ "./src/app/admin/organization-details/delete-datarule-confirmation.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/organization-details/delete-datarule-confirmation.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\n    <h2 class=\"title delete\"><i class=\"material-icons\">\n        warning\n      </i>Delete {{data.datarule}}?</h2>\n    <div mat-dialog-content>\n      <h4 class=\"subtitle\">Warning: this cannot be undone</h4>\n      <p>Iam id ipsum absurdum, maximum malum neglegi. Quoniam, si dis placet, ab Epicuro loqui discimus. Duo Reges: constructio interrete.</p>\n    </div>\n    <div mat-dialog-actions style=\"float:right\">\n      <button mat-button (click)=\"onNoClick()\">Cancel</button>\n      <button mat-button mat-flat-button [mat-dialog-close]=\"true\" class=\"danger\" cdkFocusInitial>Continue</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/organization-details/delete-organization-confirmation.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/organization-details/delete-organization-confirmation.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"dialog\">\n  <h2 class=\"title delete\"><i class=\"material-icons\">\n      warning\n    </i>Delete {{data.organization}}?</h2>\n  <div mat-dialog-content>\n    <h4 class=\"subtitle\">Warning: this cannot be undone</h4>\n    <ul class=\"conditions\">\n      <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n      <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n      <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n    </ul>\n  </div>\n  <div mat-dialog-actions style=\"float:right\">\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button mat-flat-button [mat-dialog-close]=\"true\" class=\"danger\" cdkFocusInitial>Continue</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"organization != null\">\n  <div class=\"breadcrumb-container\">\n    <div> <span routerLink=\"../\"><i class=\"material-icons\"> business </i> Organization List </span> &nbsp;&nbsp; <i class=\"material-icons arrow\">\n        keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span\n        class=\"active\">{{organization.name}}\n      </span> </div>\n  </div>\n\n  <div class=\"main-content-view\">\n    <div class=\"full-content-view\" *ngIf=\"viewInitialized\">\n      <div class=\"details\">\n        <div class=\"card\">\n          <div class=\"more-button\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon color=\"more-color\">more_vert</mat-icon>\n            </button>\n\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item routerLink=\"./edit-organization\">Edit</button>\n              <button mat-menu-item (click)=\"openDialog()\">Delete</button>\n            </mat-menu>\n          </div>\n          <div class=\"container\">\n            <h2 class=\"title\">{{organization.name}}</h2>\n            <h4 class=\"secondary\"><span *ngFor=\"let category of organization.categories\">{{category}} &nbsp; </span> </h4>\n            <p class=\"stats\">\n              <span class=\"left\"><i class=\"material-icons\">\n                  assessment\n                </i> {{organization.reportsCount}} Reports</span>\n              <span class=\"middle\"> <i class=\"material-icons\">\n                  person_outline\n                </i>{{organization.usersCount}} Users</span>\n              <span class=\"right\"> <i class=\"material-icons\">\n                  dns\n                </i> {{organization.datarulesCount}} Data Rules</span>\n            </p>\n\n          </div>\n\n        </div>\n\n        <div class=\"tabs\">\n          <mat-tab-group (selectedIndexChange)=\"selected($event)\">\n            <mat-tab label=\"Reports\">\n              <div *ngIf=\"!reportsInitialized\" style=\"margin:auto; padding-top: 50px; text-align: center\">\n                <mat-spinner style=\"margin:auto\"></mat-spinner>\n                <p style=\"text-align: center;\">Reports Loading...</p>\n              </div>\n\n              <div *ngIf=\"reportsInitialized && reports.length === 0 \" class=\"empty-list\">\n                <div class=\"icons\">\n                  <i class=\"material-icons main\"> assessment </i>\n                  <button routerLink=\"./new-report\" mat-fab class=\"button-fab add\" color=\"primary-button\"> <i class=\"material-icons\">\n                      add\n                    </i>\n                  </button>\n                </div>\n                <h2 class=\"title\"> There are no reports.</h2>\n                <h3 class=\"create-text\" routerLink=\"./new-report\"> Create new report</h3>\n              </div>\n\n\n              <app-report-list [allowAdd]=true *ngIf=\"selectedTab === 0 && reportsInitialized && reports.length > 0 \" [reports]=\"reports\" (reportID)=\"goToReport($event)\"\n                style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-report-list>\n            </mat-tab>\n            <mat-tab label=\"Users\">\n              <div *ngIf=\"!usersInitialized\" style=\"margin:auto; padding-top: 50px; text-align: center\">\n                <mat-spinner style=\"margin:auto\"></mat-spinner>\n                <p style=\"text-align: center;\">Users Loading...</p>\n              </div>\n              <app-user-list *ngIf=\"selectedTab === 1 && usersInitialized && users.length > 0 \" [users]=\"users\" (userID)=\"goToUser($event)\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-user-list>\n\n\n              <div *ngIf=\"usersInitialized && users.length === 0 && selectedTab === 1  \" class=\"empty-list\">\n                  <div class=\"icons\">\n                    <i class=\"material-icons main\"> person_outline </i>\n                    <button routerLink=\"./new-user\" mat-fab class=\"button-fab add\" color=\"primary-button\"> <i class=\"material-icons\">\n                        add\n                      </i>\n                    </button>\n                  </div>\n                  <h2 class=\"title\"> There are no users.</h2>\n                  <h3 class=\"create-text\" routerLink=\"./new-user\"> Create new user</h3>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Data Rules\">\n              <div *ngIf=\"!datarulesInitialized\" style=\"margin:auto; padding-top: 50px; text-align: center\">\n                <mat-spinner style=\"margin:auto\"></mat-spinner>\n                <p style=\"text-align: center;\">Data Rules Loading...</p>\n              </div>\n              <div class=\"data-rules-section\" *ngIf=\"selectedTab === 2 && datarulesInitialized && rules.length > 0\">\n                <div class=\"left-main-content-view\">\n                  <mat-accordion *ngFor=\"let rule of rules | datarulesList : searchName : selectedDataSource : sortValue : pagination.currentPage; let i = index\">\n                    <mat-expansion-panel class=\"data-rules-card\">\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          <h4 class=\"title\">{{rule.name}}</h4><br>\n                        </mat-panel-title>\n                        <mat-panel-description>\n                          <h5>{{rule.datasource.name}}</h5>\n                        </mat-panel-description>\n                      </mat-expansion-panel-header>\n                      <hr>\n                      <p>Created At: {{rule.date | date }}</p>\n                      <p>Identifier: {{rule.identifier}}</p>\n                      <p>Condition: {{rule.condition}}</p>\n                      <p>Token: {{rule.token}}</p>\n                      <div class=\"buttons\">\n                        <button mat-button color=\"danger\" (click)=\"deleteRule(rule)\">Delete</button>\n                        <button mat-button color=\"primary\" (click)=\"editRule(rule._id)\">Edit</button>\n                      </div>\n                    </mat-expansion-panel>\n                    <br>\n                  </mat-accordion>\n                  <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\"\n                      color=\"white\" [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\n                        chevron_left\n                      </i> </button>\n                    {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \"\n                      [disabled]=\"pagination.currentPage === pagination.totalPages\" color=\"white\"> <i class=\"material-icons\">\n                        chevron_right\n                      </i> </button>\n                  </p>\n                </div>\n                <div class=\"right-main-content-view\">\n                  <!-- Filters -->\n                  <div class=\"filter\">\n                    <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\n                      <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\n                      <p class=\"title\"> Filter by</p>\n                      <mat-form-field appearance=\"outline\" class=\"search\">\n                        <mat-label class=\"label-color\">Name</mat-label>\n                        <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\n                      </mat-form-field>\n                      <p class=\"title\"> Data Source</p>\n                      <mat-form-field appearance=\"outline\" class=\"select\">\n                        <mat-select formControlName=\"selectedDataSource\">\n                          <mat-option value=\"All\">All</mat-option>\n                          <mat-option *ngFor=\"let datasource of dataSources\" value=\"{{datasource._id}}\">{{datasource.name}}</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                      <br>\n                      <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\n                    </form>\n                  </div>\n                  <div class=\"sort\">\n                    <p class=\"title\"> Sort By</p>\n                    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\n                      <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\n                        {{sort}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                  <div class=\"add-button\">\n                    <button routerLink=\"./new-rule\" mat-fab class=\"button-fab\" color=\"primary-button\"> <i class=\"material-icons plus-icon\">\n                        add\n                      </i>\n                      <i class=\"material-icons back-icon\">\n                        dns\n                      </i></button>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngIf=\"datarulesInitialized && rules.length === 0 && selectedTab === 2 \" class=\"empty-list\">\n                  <div class=\"icons\">\n                    <i class=\"material-icons main\"> dns </i>\n                    <button routerLink=\"./new-rule\" mat-fab class=\"button-fab add\" color=\"primary-button\"> <i class=\"material-icons\">\n                        add\n                      </i>\n                    </button>\n                  </div>\n                  <h2 class=\"title\"> There are no data rules.</h2>\n                  <h3 class=\"create-text\" routerLink=\"./new-rule\"> Create new data rule</h3>\n                </div>\n            </mat-tab>\n          </mat-tab-group>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!viewInitialized\" style=\"margin:auto; padding-top: 50px;\">\n      <mat-spinner></mat-spinner>\n      <p style=\"text-align: center;\">Loading...</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/******* GHOST HEADER TITLE ******/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n/***** Filter Card ***/\n/****** Buttons Colors  **/\n/**** Empty List Color Styles ****/\n.tabs {\n  background-color: white;\n  margin: 20px 0;\n  box-shadow: 2px 3px 4px rgba(101, 101, 101, 0.5); }\n::ng-deep .mat-tab-body .mat-tab-body-content {\n  overflow: hidden; }\n::ng-deep .tabs .mat-tab-header {\n  box-shadow: 0 1px 4px rgba(101, 101, 101, 0.7) !important;\n  border-bottom: none !important; }\n::ng-deep .tabs .mat-tab-label {\n  color: #3E3E3E;\n  opacity: 1;\n  font-size: 17px; }\n::ng-deep .tabs .mat-tab-label-active {\n  color: #0865ee; }\n::ng-deep .tabs .mat-tab-body {\n  padding: 10px; }\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar,\n::ng-deep .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background: #0865ee;\n  height: 3px; }\n.data-rules-card {\n  border: 1px solid #D7D7D7;\n  border-radius: 5px; }\n.mat-tab {\n  padding: 5px; }\n.data-rules-section {\n  margin-bottom: 10px;\n  display: flex; }\n.data-rules-section .left-main-content-view {\n    margin-top: 10px; }\n.data-rules-section .left-main-content-view p {\n      margin: 0;\n      color: #3e3e3e;\n      font-weight: 500; }\n.data-rules-section .left-main-content-view .buttons {\n      text-align: right; }\n.data-rules-section .left-main-content-view hr {\n      border-top: 1px solid #b4b4b4;\n      margin-top: -10px; }\n.data-rules-section .left-main-content-view .title {\n      color: #E7554B; }\n.data-rules-section .left-main-content-view .mat-expansion-panel-content {\n      padding-top: 5px;\n      border-top: 1px solid rgba(0, 0, 0, 0.12); }\n.data-rules-section .left-main-content-view .mat-expansion-panel {\n      border-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrganizationDetailsComponent, DeleteOrganizationConfirmation, DeleteDataruleConfirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDetailsComponent", function() { return OrganizationDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOrganizationConfirmation", function() { return DeleteOrganizationConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDataruleConfirmation", function() { return DeleteDataruleConfirmation; });
/* harmony import */ var _shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/datarules.service */ "./src/app/shared/services/datarules.service.ts");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    function OrganizationDetailsComponent(route, router, organizationService, dataruleService, reportService, userService, paginationService, dialog) {
        this.route = route;
        this.router = router;
        this.organizationService = organizationService;
        this.dataruleService = dataruleService;
        this.reportService = reportService;
        this.userService = userService;
        this.paginationService = paginationService;
        this.dialog = dialog;
        this.selectedTab = 0;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            selectedDataSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('All')
        });
        this.formInitialize = false;
        this.sorts = ['Latest', 'Alphabetical'];
        this.sortValue = this.sorts[0];
        this.selectedDataSource = 'All';
        this.reportsInitialized = false;
        this.usersInitialized = false;
        this.datarulesInitialized = false;
        this.viewInitialized = false;
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
                        });
                        // gets organization info
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getOrganizationById(this.organizationID)];
                    case 1:
                        // gets organization info
                        _a.organization = _c.sent();
                        // gets reports for this organization
                        _b = this;
                        return [4 /*yield*/, this.reportService.getReportByOrganization('orgID')];
                    case 2:
                        // gets reports for this organization
                        _b.reports = _c.sent();
                        this.pageSubscription = this.paginationService.paginationChanged.subscribe(function (pagination) {
                            _this.pagination = pagination;
                        });
                        this.viewInitialized = true;
                        this.reportsInitialized = true;
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
    OrganizationDetailsComponent.prototype.selected = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.selectedTab = event;
                        if (!(event === 1)) return [3 /*break*/, 4];
                        if (!!this.users) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getUsers()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.userService.setLocalUsers(this.users)];
                    case 2:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, true];
                    case 3:
                        _a.usersInitialized = _c.sent();
                        _c.label = 4;
                    case 4:
                        if (!(event === 2)) return [3 /*break*/, 8];
                        if (!!this.rules) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getRules()];
                    case 5:
                        _c.sent();
                        _b = this;
                        return [4 /*yield*/, true];
                    case 6:
                        _b.datarulesInitialized = _c.sent();
                        _c.label = 7;
                    case 7:
                        this.paginationService.resetPage();
                        _c.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        if (this.pageSubscription) {
            this.pageSubscription.unsubscribe();
        }
    };
    // gets users for this organization
    OrganizationDetailsComponent.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userService.getUsersByOrganization('orgID')];
                    case 1:
                        _a.users = _b.sent();
                        return [4 /*yield*/, this.userService.setLocalUsers(this.users)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // gets data rules for this organization
    OrganizationDetailsComponent.prototype.getRules = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _loop_1, this_1, _i, _b, rule;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.dataruleService.getDataRules(this.organizationID)];
                    case 1:
                        _a.rules = _c.sent();
                        this.dataSources = [];
                        _loop_1 = function (rule) {
                            if (((this_1.dataSources.filter(function (datasource) {
                                return datasource._id === rule.datasource._id;
                            })).length === 0)) {
                                this_1.dataSources.push(rule.datasource);
                            }
                        };
                        this_1 = this;
                        for (_i = 0, _b = this.rules; _i < _b.length; _i++) {
                            rule = _b[_i];
                            _loop_1(rule);
                        }
                        console.log(this.dataSources);
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationDetailsComponent.prototype.goToUser = function (userId) {
        this.router.navigate(['./u', userId], { relativeTo: this.route });
    };
    OrganizationDetailsComponent.prototype.goToReport = function (reportID) {
        this.router.navigate(['./r', reportID], { relativeTo: this.route });
    };
    OrganizationDetailsComponent.prototype.editRule = function (ruleID) {
        this.router.navigate(['./edit-rule', ruleID], { relativeTo: this.route });
    };
    OrganizationDetailsComponent.prototype.changeSort = function (sort) {
        this.paginationService.resetPage();
        this.sortValue = sort;
    };
    OrganizationDetailsComponent.prototype.onSearch = function () {
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
    OrganizationDetailsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteOrganizationConfirmation, {
            data: { organization: this.organization.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.organizationService.deleteOrganization(_this.organizationID);
                _this.router.navigate(['../list'], { relativeTo: _this.route });
            }
        });
    };
    OrganizationDetailsComponent.prototype.deleteRule = function (datarule) {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteDataruleConfirmation, {
            data: { datarule: datarule.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataruleService.deleteDataRule(datarule._id);
            }
        });
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
            _shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], OrganizationDetailsComponent);
    return OrganizationDetailsComponent;
}());

var DeleteOrganizationConfirmation = /** @class */ (function () {
    function DeleteOrganizationConfirmation(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteOrganizationConfirmation.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteOrganizationConfirmation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'delete-organization-confirmation',
            template: __webpack_require__(/*! ./delete-organization-confirmation.html */ "./src/app/admin/organization-details/delete-organization-confirmation.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], DeleteOrganizationConfirmation);
    return DeleteOrganizationConfirmation;
}());

var DeleteDataruleConfirmation = /** @class */ (function () {
    function DeleteDataruleConfirmation(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteDataruleConfirmation.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteDataruleConfirmation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'delete-datarule-confirmation',
            template: __webpack_require__(/*! ./delete-datarule-confirmation.html */ "./src/app/admin/organization-details/delete-datarule-confirmation.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], DeleteDataruleConfirmation);
    return DeleteDataruleConfirmation;
}());



/***/ }),

/***/ "./src/app/admin/organization/organization-list/organization-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/organization/organization-list/organization-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-container\">\n  <div class=\"breadcrumb\"> <span class=\"active\"> <i class=\"material-icons\"> business </i> Organization List </span></div>\n</div>\n\n<div class=\"main-content-view\">\n  <div class=\"left-main-content-view\" *ngIf=\"initialized  && organizations.length > 0\">\n    <div class=\"list\" *ngIf=\"pagination\">\n      <div *ngFor=\"let organization of organizations  |   orgList:  search: selectedCategories : sortValue: pagination.currentPage \" class=\"card\">\n        <div class=\"container\" (click)=\"goToDetails(organization._id)\">\n          <h2 class=\"title\">{{organization.name}}</h2>\n          <h4 class=\"secondary\"><span *ngFor=\"let category of organization.categories, let i = index\">{{category}}<span *ngIf=\"i < organization.categories.length -1\">,&nbsp;&nbsp;</span>\n            </span> </h4>\n          <p class=\"stats\">\n            <span class=\"left\"><i class=\"material-icons\">\n                assessment\n              </i> {{organization.reportsCount}} Reports</span>\n            <span class=\"middle\"> <i class=\"material-icons\">\n                person_outline\n              </i>{{organization.usersCount}} Users</span>\n            <span class=\"right\"> <i class=\"material-icons\">\n                dns\n              </i> {{organization.datarulesCount}} Data Rules</span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\" color=\"white\"\n        [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\n          chevron_left\n        </i> </button>\n      {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \" [disabled]=\"pagination.currentPage === pagination.totalPages\"\n        color=\"white\"> <i class=\"material-icons\">\n          chevron_right\n        </i> </button>\n    </p>\n  </div>\n  <div class=\"right-main-content-view\" *ngIf=\"initialized && organizations.length > 0\">\n    <div class=\"filter\" style=\"margin-top: 13px\">\n      <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\n        <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\n        <p class=\"title\"> Filter by</p>\n        <mat-form-field appearance=\"outline\" class=\"search\">\n          <mat-label class=\"label-color\">Name</mat-label>\n          <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\n        </mat-form-field>\n        <p class=\"title\"> Company Type</p>\n        <div class=\"checkbox\" *ngFor=\"let category of categories\">\n          <mat-checkbox value=\"{{category}}\" formControlName=\"{{category}}\">{{category}}</mat-checkbox>\n        </div>\n        <br>\n        <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\n      </form>\n    </div>\n\n    <div class=\"sort\">\n      <p class=\"title\"> Sort By</p>\n      <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\n        <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\n          {{sort}}\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"add-button\">\n      <button routerLink=\"../new-organization\" mat-fab class=\"button-fab\" color=\"primary-button\"> <i class=\"material-icons plus-icon\">\n          add\n        </i>\n        <i class=\"material-icons back-icon\">\n          business\n        </i></button>\n    </div>\n  </div>\n\n  <div *ngIf=\"!initialized\" style=\"margin:auto; padding-top: 50px;\">\n    <mat-spinner></mat-spinner>\n    <p style=\"text-align: center;\">Loading...</p>\n  </div>\n\n  <div *ngIf=\"initialized && organizations.length === 0 \" class=\"empty-list\" style=\"\">\n    <div class=\"icons\">\n      <i class=\"material-icons main\"> business </i>\n      <button routerLink=\"../new-organization\" mat-fab class=\"button-fab add\" color=\"primary-button\"> <i class=\"material-icons\">\n          add\n        </i>\n        </button>\n    </div>\n    <h2 class=\"title\"> There are no organizations.</h2>\n    <h3 class=\"create-text\" routerLink=\"../new-organization\"> Create new organization</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/organization/organization-list/organization-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/organization/organization-list/organization-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plus-icon {\n  background-color: #0877c1;\n  position: relative;\n  top: 15px;\n  z-index: 20;\n  left: 30px;\n  font-size: 30px;\n  border-radius: 50%;\n  border: 4px solid white;\n  font-weight: normal; }\n\n.back-icon {\n  position: relative;\n  margin-left: -30px;\n  font-size: 55px;\n  color: #ffffff;\n  font-weight: normal;\n  right: 5px; }\n"

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
        this.initialized = false;
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
                        this.organizationService.setLocalOrg(this.organizations);
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
                        this.initialized = true;
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
        console.log(id);
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
        if (this.pageSubscription) {
            this.pageSubscription.unsubscribe();
        }
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

/***/ "./src/app/admin/share-report/share-report.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/share-report/share-report.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"card\">\n    <div class=\"form\">\n      <h2 class=\"title\"> Share Report</h2>\n      <hr>\n      <mat-horizontal-stepper #stepper>\n        <!-- First Step -->\n        <mat-step [stepControl]=\"orgForm\" *ngIf=\"orgForm\">\n          <form [formGroup]=\"orgForm\">\n\n            <div class=\"row\">\n              <h4 class=\"input-header\"> Please select organization to share report <i class=\"material-icons info-icon\">\n                  info\n                </i></h4>\n              <i class=\"material-icons form-icon\">\n                business\n              </i>\n              <mat-form-field appearance=\"fill\" style=\"width:80%\">\n                <mat-label>Select Organization</mat-label>\n                <mat-select formControlName=\"organization\">\n                  <mat-option (click)=\"selectOrg()\" *ngFor=\"let organization of organizations\" value=\"{{organization._id}}\">{{organization.name}}</mat-option>\n                </mat-select>\n                <mat-error>\n                  Organization is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"row\">\n\n              <p class=\"create-new-text\">Organization not on the list? <span class=\"create-new-button\">Create New Organization </span></p>\n            </div>\n            <div class=\"buttons\">\n              <button mat-button type='button' routerLink=\"../\">Cancel</button>\n              <button mat-button type='button' mat-flat-button class=\"done primary\" [disabled]=\"!orgForm.valid\" [ngClass]=\"{'button-disabled': !orgForm.valid}\"\n                matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <!-- ***** 2nd step: Selecting from list-->\n        <mat-step *ngIf=\"reports && selectedOrg\">\n          <!-- selecting report -->\n          <form>\n            <div class=\"row\">\n              <h4 class=\"input-header\"> Please Select a report to share to {{selectedOrg.name}} </h4>\n            </div>\n            <div class=\"main-content-view\" style=\"padding:0\">\n              <app-report-list [reports]=\"reports\" [allowAdd]=false (reportID)=\"selectReport($event)\" style=\"display:flex; width: 100%; margin-bottom: 10px;\"></app-report-list>\n            </div>\n            <div class=\"buttons\">\n              <button mat-button matStepperPrevious>Cancel</button><button [disabled]=\"!selectedReport\" [ngClass]=\"{'button-disabled': !selectedReport}\"\n                (click)=\"selectStep(2)\" class=\"done primary\" mat-flat-button>Next</button>\n            </div>\n          </form>\n        </mat-step>\n\n        <mat-step *ngIf=\"selectedReport && selectedOrg\">\n          <form *ngIf=\"selectedReport\">\n\n            <div class=\"row\">\n              <h4 class=\"input-header\">New Report for {{selectedOrg.name}}</h4>\n            </div>\n            <div class=\"row\">\n              <p style=\"margin:0\">This report is currently being used by \"2\" other organizations:</p>\n              <ul>\n                <li>\n                  Org 1\n                </li>\n                <li>\n                  Org 2\n                </li>\n              </ul>\n            </div>\n            <div class=\"main-content-view\" style=\"padding:0\">\n              <div style=\"max-width:700px; width: 100%; margin-bottom: 10px;\">\n                <div class=\"list\">\n                  <div class=\"card\">\n                    <div class=\"container\">\n                      <h4 class=\"title\"><strong> {{selectedReport.name}}</strong></h4>\n                      <p class=\"secondary\">{{selectedReport.organization.name}}</p>\n                      <p class=\"content\"> {{selectedReport.date | date}} </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"buttons\">\n              <button mat-button matStepperPrevious>Cancel</button><button class=\"done primary\" mat-flat-button>Done</button>\n            </div>\n          </form>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/share-report/share-report.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/share-report/share-report.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-new-button:hover {\n  cursor: pointer; }\n\n::ng-deep .mat-horizontal-stepper-header-container {\n  display: none !important; }\n"

/***/ }),

/***/ "./src/app/admin/share-report/share-report.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/share-report/share-report.component.ts ***!
  \**************************************************************/
/*! exports provided: ShareReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareReportComponent", function() { return ShareReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/datarules.service */ "./src/app/shared/services/datarules.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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







var ShareReportComponent = /** @class */ (function () {
    function ShareReportComponent(route, router, reportService, organizationService, formBuilder, datarulesService) {
        this.route = route;
        this.router = router;
        this.reportService = reportService;
        this.organizationService = organizationService;
        this.formBuilder = formBuilder;
        this.datarulesService = datarulesService;
    }
    ShareReportComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.reportService.getReportByOrganization('orgID')];
                    case 1:
                        _a.reports = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.organizationService.getAllOrganizationsWithNoDetails()];
                    case 2:
                        _b.organizations = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.datarulesService.getAllDataSourceForOrganization('id')];
                    case 3:
                        _c.datasources = _d.sent();
                        this.orgForm = this.formBuilder.group({
                            organization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                        });
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.organizationID = params['id'];
                        });
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
    ShareReportComponent.prototype.selectReport = function (id) {
        this.selectedReport = this.reports.find(function (report) {
            return report._id === id;
        });
    };
    ShareReportComponent.prototype.selectStep = function (id) {
        this.stepper.selectedIndex = id;
    };
    ShareReportComponent.prototype.selectOrg = function () {
        var _this = this;
        this.selectedOrg = this.organizations.find(function (org) {
            return org._id === _this.orgForm.value.organization;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepper"])
    ], ShareReportComponent.prototype, "stepper", void 0);
    ShareReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share-report',
            template: __webpack_require__(/*! ./share-report.component.html */ "./src/app/admin/share-report/share-report.component.html"),
            styles: [__webpack_require__(/*! ./share-report.component.scss */ "./src/app/admin/share-report/share-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            src_app_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_shared_services_datarules_service__WEBPACK_IMPORTED_MODULE_5__["DatarulesService"]])
    ], ShareReportComponent);
    return ShareReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-details/delete-user-confirmation.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/user-details/delete-user-confirmation.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\n    <h2 class=\"title delete\"><i class=\"material-icons\">\n        warning\n      </i>Delete {{data.user}}?</h2>\n    <div mat-dialog-content>\n      <h4 class=\"subtitle\">Warning: this cannot be undone</h4>\n      <p>Iam id ipsum absurdum, maximum malum neglegi. Quoniam, si dis placet, ab Epicuro loqui discimus. Duo Reges: constructio interrete.</p>\n    </div>\n    <div mat-dialog-actions style=\"float:right\">\n      <button mat-button (click)=\"onNoClick()\">Cancel</button>\n      <button mat-button mat-flat-button [mat-dialog-close]=\"true\" class=\"danger\" cdkFocusInitial>Continue</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/user-details/user-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-details/user-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"organization != null && user != null && viewInitialized\">\n\n  <div class=\"breadcrumb-container\">\n    <!-- Breadcrumbs for user details under user list-->\n    <div *ngIf=\"this.orgID === undefined\">\n      <div class=\"breadcrumb\"> <span routerLink=\"../../\"><i class=\"material-icons\">\n            person_outline </i> User List </span> &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\"\n          class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{user.firstName}} {{user.lastName}}\n        </span> </div>\n    </div>\n\n    <!-- Breadcrumbs for user details under organization list-->\n    <div *ngIf=\"this.orgID != undefined\">\n      <div class=\"breadcrumb\"> <span routerLink=\"../../../\"><i class=\"material-icons\">\n            business </i> Organization List </span> &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\"\n          class=\"material-icons arrow\"> keyboard_arrow_right </i>&nbsp;&nbsp; <span routerLink=\"../../\"> {{organization.name}}</span>\n        &nbsp;&nbsp; <i class=\"material-icons arrow\"> keyboard_arrow_right </i> <i style=\"margin-left: -14px\" class=\"material-icons arrow\">\n          keyboard_arrow_right </i>&nbsp;&nbsp; <span class=\"active\"> {{user.firstName}} {{user.lastName}} </span> </div>\n    </div>\n\n  </div>\n\n  <div class=\"main-content-view\">\n    <div class=\"full-content-view\">\n\n\n      <div class=\"details\">\n        <div class=\"more-button\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon color=\"more-color\">more_vert</mat-icon>\n          </button>\n\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"ghostView()\">User View</button>\n            <mat-divider></mat-divider>\n            <button mat-menu-item routerLink=\"./edit-user\">Edit</button>\n            <button mat-menu-item (click)=\"openDialog()\">Delete</button>\n          </mat-menu>\n        </div>\n        <div class=\"card\">\n          <div class=\"container\">\n            <h2 class=\"title\"> {{user.firstName}} {{user.lastName}}</h2>\n            <h4 class=\"secondary\">Viewer</h4>\n            <p class=\"content\">Gmail: {{user.googleID}}</p>\n            <p class=\"content\">Secondary Email: {{user.secondaryEmail}}</p>\n            <p class=\"content\"> Accesses: <span *ngFor=\"let org of user.organizations\"> {{org.name}} </span></p>\n          </div>\n        </div>\n      </div>\n\n      <div>\n        <h3 class=\"list-title\">Report List</h3>\n        <app-report-list style=\"display:flex; width: 100%;\" [reports]=\"reports\" (reportID)=\"goToReport($event)\"></app-report-list>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!viewInitialized \" style=\"margin:auto; padding-top: 80px; text-align: center\">\n  <mat-spinner style=\"margin:auto\"></mat-spinner>\n  <p style=\"text-align: center;\">User Loading...</p>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/user-details/user-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-details/user-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION VARIABLES *******************/\n/* Side nav color */\n/********* ORGANIZATION DETAILS VARIABLES **********/\n/******* GHOST HEADER TITLE ******/\n/*********** LIST CARD VARIABLES  ***********/\n/********* BREADCRUMBS STYLING ******/\n/******* FORMS STYLING & FILTERS ******/\n/***** Filter Card ***/\n/****** Buttons Colors  **/\n/**** Empty List Color Styles ****/\n.list-title {\n  color: #3e3e3e;\n  margin-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/admin/user-details/user-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/user-details/user-details.component.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailsComponent, DeleteUserConfirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserConfirmation", function() { return DeleteUserConfirmation; });
/* harmony import */ var _shared_services_ghost_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/ghost.service */ "./src/app/shared/services/ghost.service.ts");
/* harmony import */ var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/report.service */ "./src/app/shared/services/report.service.ts");
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    function UserDetailsComponent(router, route, userService, organizationService, reportService, dialog, ghostsService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.organizationService = organizationService;
        this.reportService = reportService;
        this.dialog = dialog;
        this.ghostsService = ghostsService;
        this.viewInitialized = false;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, , 7]);
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.orgID = params['id'];
                            _this.userID = params['userID'];
                        });
                        if (!this.orgID) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.organizationService.getLocalOrganization(this.orgID)];
                    case 1:
                        _a.organization = _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.organization = false;
                        _d.label = 3;
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.userService.getUser(this.userID)];
                    case 4:
                        _b.user = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.reportService.getReportByOrganizations([
                                'orgIDs'
                            ])];
                    case 5:
                        _c.reports = _d.sent();
                        this.viewInitialized = true;
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _d.sent();
                        console.log(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UserDetailsComponent.prototype.ghostView = function () {
        var userName = this.user.firstName + ' ' + this.user.lastName;
        this.ghostsService.activatedGhost();
        this.router.navigate(['./ghost', userName], { relativeTo: this.route });
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
    UserDetailsComponent.prototype.openDialog = function () {
        var _this = this;
        var user = this.user.firstName + ' ' + this.user.lastName;
        var dialogRef = this.dialog.open(DeleteUserConfirmation, {
            data: { user: user }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.deleteUser(_this.userID);
                _this.router.navigate(['../../'], { relativeTo: _this.route });
            }
        });
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/admin/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/admin/user-details/user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"],
            _shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _shared_services_ghost_service__WEBPACK_IMPORTED_MODULE_0__["GhostService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());

var DeleteUserConfirmation = /** @class */ (function () {
    function DeleteUserConfirmation(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteUserConfirmation.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteUserConfirmation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'delete-user-confirmation',
            template: __webpack_require__(/*! ./delete-user-confirmation.html */ "./src/app/admin/user-details/delete-user-confirmation.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
    ], DeleteUserConfirmation);
    return DeleteUserConfirmation;
}());



/***/ }),

/***/ "./src/app/shared/common-view/report-list/report-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/common-view/report-list/report-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-main-content-view\">\n  <div *ngIf=\"reports != null \">\n    <div class=\"list\">\n      <div *ngFor=\"let report of reports | reportList: searchName: selectedOrganization : sortValue :  pagination.currentPage\" class=\"card\">\n        <div class=\"container\" (click)=\"reportClicked(report._id)\">\n          <h4 class=\"title\"><strong> {{report.name}}</strong></h4>\n          <p class=\"secondary\">{{report.organization.name}}</p>\n          <p class=\"content\"> {{report.date | date}} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\" color=\"white\"\n    [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\n      chevron_left\n    </i> </button>\n  {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \" [disabled]=\"pagination.currentPage === pagination.totalPages\"\n    color=\"white\"> <i class=\"material-icons\">\n      chevron_right\n    </i> </button>\n</p>\n\n</div>\n<div class=\"right-main-content-view\" *ngIf=\"formInitialize\">\n  <div class=\"filter\">\n    <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\n      <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\n      <p class=\"title\"> Filter by</p>\n      <mat-form-field appearance=\"outline\" class=\"search\">\n        <mat-label class=\"label-color\">Name</mat-label>\n        <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\n      </mat-form-field>\n      <p class=\"title\" *ngIf=\"organizations.length > 1\"> Organization</p>\n      <mat-form-field appearance=\"outline\" class=\"select\" *ngIf=\"organizations.length > 1\">\n        <mat-select formControlName=\"selectedOrganization\">\n          <mat-option value=\"All\">All</mat-option>\n          <mat-option *ngFor=\"let organization of organizations\" value=\"{{organization._id}}\">{{organization.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <br>\n      <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\n    </form>\n  </div>\n  <div class=\"sort\">\n    <p class=\"title\"> Sort By</p>\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\n      <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\n        {{sort}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n\n  <div class=\"add-button\" *ngIf=\"allowAdd\">\n    <button mat-fab class=\"button-fab\" color=\"primary-button\" *ngIf=\"organizationID\" routerLink='new-report'> <i class=\"material-icons plus-icon\">\n      add\n    </i>\n    <i class=\"material-icons back-icon\">\n      assessment\n    </i></button>\n    <button mat-fab class=\"button-fab\" color=\"primary-button\" *ngIf=\"!organizationID\" routerLink='../new-report'> <i class=\"material-icons plus-icon\">\n      add\n    </i>\n    <i class=\"material-icons back-icon\">\n      assessment\n    </i></button>\n  </div>\n</div>\n"

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
                        _this.userID = params['userID'];
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReportListComponent.prototype, "allowAdd", void 0);
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

module.exports = "<div class=\"left-main-content-view\">\n  <div *ngIf=\"users != null\">\n    <div class=\"list\">\n      <div *ngFor=\"let user of users | userList: searchName: selectedRole: selectedOrganization : sortValue :  pagination.currentPage\"\n        class=\"card\">\n        <div class=\"container\" (click)=\"userClicked(user._id)\">\n          <h4 class=\"title\" style=\"font-weight: bold\">{{user.firstName}} {{user.lastName}}</h4>\n          <p class=\"secondary\"> Viewer : <span *ngFor=\"let org of user.organizations; let i = index\">\n              {{org.name}}<span *ngIf=\"i < user.organizations.length-1\">, </span> </span> </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"pagination\" *ngIf=\"this.pagination\" style=\"text-align: center\"> <button mat-mini-fab (click)=\"previousPage()\" color=\"white\"\n    [disabled]=\"pagination.currentPage===1\"> <i class=\"material-icons\">\n      chevron_left\n    </i> </button>\n  {{this.pagination.currentPage}}/{{this.pagination.totalPages}} <button mat-mini-fab active (click)=\"nextPage() \" [disabled]=\"pagination.currentPage === pagination.totalPages\"\n    color=\"white\"> <i class=\"material-icons\">\n      chevron_right\n    </i> </button>\n</p>\n</div>\n<div class=\"right-main-content-view\" *ngIf=\"formInitialize\">\n  <div class=\"filter\">\n    <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSearch()\">\n      <button class=\"reset\" mat-stroked-button (click)=\"searchFormReset()\">RESET</button>\n      <p class=\"title\"> Filter by</p>\n      <mat-form-field appearance=\"outline\" class=\"search\">\n        <mat-label class=\"label-color\">Name</mat-label>\n        <input matInput type=\"text\" placeholder=\"Search Name\" formControlName=\"name\">\n      </mat-form-field>\n      <p class=\"title\" *ngIf=\"!organizationID\"> Role</p>\n      <mat-form-field appearance=\"outline\" class=\"select\" *ngIf=\"!organizationID\">\n        <mat-select formControlName=\"selectedRole\">\n          <mat-option value=\"All\">All</mat-option>\n          <mat-option value=\"Admin\">Admin</mat-option>\n          <mat-option value=\"Viewer\">Viewer</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <p class=\"title\" *ngIf=\"!organizationID\"> Organization</p>\n      <mat-form-field class=\"select\" appearance=\"outline\" *ngIf=\"!organizationID\">\n        <mat-select formControlName=\"selectedOrganization\">\n          <mat-option value=\"All\">All</mat-option>\n          <mat-option *ngFor=\"let organization of organizations\" value=\"{{organization._id}}\">{{organization.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <br>\n      <button mat-raised-button class=\"search\" type=\"submit\">Search</button>\n    </form>\n  </div>\n\n  <div class=\"sort\">\n    <p class=\"title\"> Sort By</p>\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"sortValue\">\n      <mat-radio-button *ngFor=\"let sort of sorts\" value=\"{{sort}}\" (click)=\"changeSort(sort)\" class=\"radio\">\n        {{sort}}\n      </mat-radio-button>\n    </mat-radio-group>\n\n  </div>\n\n  <div class=\"add-button\">\n    <button  *ngIf=\"organizationID\" routerLink=\"./new-user\" mat-fab class=\"button-fab\" color=\"primary-button\"> <i class=\"material-icons plus-icon\">\n      add\n    </i>\n    <i class=\"material-icons back-icon\">\n      person_outline\n    </i></button>\n    <button  *ngIf=\"!organizationID\" routerLink=\"../new-user\" mat-fab class=\"button-fab\" color=\"primary-button\"> <i class=\"material-icons plus-icon\">\n      add\n    </i>\n    <i class=\"material-icons back-icon\">\n      person_outline\n    </i></button>\n  </div>\n</div>\n"

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

/***/ "./src/app/shared/pipes/category.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/category.pipe.ts ***!
  \***********************************************/
/*! exports provided: CategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPipe", function() { return CategoryPipe; });
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

var CategoryPipe = /** @class */ (function () {
    function CategoryPipe() {
    }
    CategoryPipe.prototype.transform = function (categories, searchName) {
        var currentList = categories;
        if (searchName && searchName !== '') {
            // If there's a search
            if (searchName) {
                currentList = currentList.filter(function (el) { return el.toLowerCase().indexOf(searchName.toLowerCase()) > -1; });
            }
        }
        return currentList;
    };
    CategoryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'category'
        }),
        __metadata("design:paramtypes", [])
    ], CategoryPipe);
    return CategoryPipe;
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
                    currentList = currentList.filter(function (element) { return element.datasource._id === datasource; });
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
                            return org._id === organization;
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
    DatarulesService.prototype.createNewDataRule = function (datarule) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.post(this.URL + 'createRule/', datarule)).toPromise())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Edit data rule
     * @param datarule - datarule object
     */
    DatarulesService.prototype.editDataRule = function (datarule) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.post(this.URL + 'editRule/', datarule)).toPromise())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete Data rule
     * @param dataruleID - id of the data rule you want to delete
     */
    DatarulesService.prototype.deleteDataRule = function (dataruleID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ((this.http.post(this.URL + 'deleteRule/', dataruleID)).toPromise())];
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

/***/ "./src/app/shared/services/ghost.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/ghost.service.ts ***!
  \**************************************************/
/*! exports provided: GhostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhostService", function() { return GhostService; });
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


var GhostService = /** @class */ (function () {
    function GhostService() {
        this.ghostStatus = false;
        this.ghostStatusObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    GhostService.prototype.getStatus = function () {
        this.ghostStatusObservable.next(this.ghostStatus);
    };
    GhostService.prototype.activatedGhost = function () {
        this.ghostStatus = true;
        this.ghostStatusObservable.next(this.ghostStatus);
    };
    GhostService.prototype.disableGhost = function () {
        this.ghostStatus = false;
        this.ghostStatusObservable.next(this.ghostStatus);
    };
    GhostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GhostService);
    return GhostService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map
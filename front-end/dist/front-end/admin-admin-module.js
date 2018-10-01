(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
/* harmony import */ var _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-list/organization-list.component */ "./src/app/admin/organization-list/organization-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var adminRoutes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], children: [
            { path: '', redirectTo: 'organizations' },
            { path: 'organizations', component: _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_1__["OrganizationListComponent"] },
            { path: ':id', component: _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_0__["OrganizationDetailsComponent"] }
        ] },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(adminRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
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

module.exports = "<div class=\"main\">\n\n  <!-- Side Navigation Menu-->\n  <div class=\"side-nav\" [ngClass]=\"{'side-nav-minimized': minimized}\">\n    <button mat-button>\n      Organization\n    </button>\n    <button mat-button>\n      Report List\n    </button>\n    <button mat-button>\n      User List\n    </button>\n  </div>\n\n  <div class=\"side-content\" [ngClass]=\"{'side-content-minimized': minimized}\">\n    <!-- Top Toolbar -->\n    <mat-toolbar class=\"toolbar\">\n      <button mat-button class=\"menu-icon\" (click)=\"toggleMenu()\">\n        <i class=\"material-icons \">\n          menu\n        </i>\n      </button>\n    </mat-toolbar>\n\n    <!-- Main Content -->\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Side nav color */\n/* Main content colour */\n.side-nav {\n  width: 150px;\n  height: 100%;\n  background-color: #424242;\n  position: fixed;\n  transition: padding-left 0.5s;\n  /* For Safari 3.1 to 6.0 */\n  transition: width 0.5s;\n  overflow: hidden;\n  z-index: 20; }\n.side-nav-minimized {\n  width: 60px !important; }\n.toolbar {\n  background-color: #616161;\n  color: white;\n  z-index: 20; }\n.toolbar .menu-icon {\n    min-width: unset;\n    padding: 0; }\n.toolbar .menu-icon i {\n      font-size: 2.5em; }\n.side-content {\n  margin-left: 150px;\n  transition: margin-left 0.5s; }\n.toolbar {\n  position: fixed; }\n.main-content {\n  background-color: #f5f5f5;\n  min-height: calc(100vh - 64px);\n  padding-top: 64px; }\n.side-content-minimized {\n  margin-left: 60px !important; }\n"

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
    function AdminComponent() {
        this.minimized = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization-list/organization-list.component */ "./src/app/admin/organization-list/organization-list.component.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material/angular-material.module */ "./src/angular-material/angular-material.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationListComponent"], _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_6__["OrganizationDetailsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; background-color: white; box-shadow: 0 1px 2px gray; height: 50px; position:fixed; z-index: 20\">\n  <p> <span routerLink=\"/admin\"> Organization List </span> >> {{organization}} </p>\n</div>\n\n<div style=\"padding-top: 50px\">\n  <h4>{{organization}} Details</h4>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/organization-details/organization-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/organization-details/organization-details.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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


var OrganizationDetailsComponent = /** @class */ (function () {
    function OrganizationDetailsComponent(route) {
        this.route = route;
    }
    OrganizationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.organization = params['id'];
        });
    };
    OrganizationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-details',
            template: __webpack_require__(/*! ./organization-details.component.html */ "./src/app/admin/organization-details/organization-details.component.html"),
            styles: [__webpack_require__(/*! ./organization-details.component.scss */ "./src/app/admin/organization-details/organization-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OrganizationDetailsComponent);
    return OrganizationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/organization-list/organization-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/organization-list/organization-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; background-color: white; box-shadow: 0 1px 2px gray; height: 50px; position:fixed; z-index: 20\">\r\n  <p>Organization List</p>\r\n</div>\r\n\r\n<div style=\"padding-top: 50px\">\r\n  <p>\r\n    <button mat-button (click)=\"goToDetails('OrganizationOne')\">\r\n      Organization One\r\n    </button>\r\n  </p>\r\n  <p>\r\n    <button mat-button (click)=\"goToDetails('OrganizationTwo')\">\r\n      Organization Two\r\n    </button>\r\n  </p>\r\n  <p>\r\n    <button mat-button (click)=\"goToDetails('OrganizationThree')\">\r\n      Organization Three\r\n    </button>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/organization-list/organization-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/organization-list/organization-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/organization-list/organization-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/organization-list/organization-list.component.ts ***!
  \************************************************************************/
/*! exports provided: OrganizationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationListComponent", function() { return OrganizationListComponent; });
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


var OrganizationListComponent = /** @class */ (function () {
    function OrganizationListComponent(router) {
        this.router = router;
    }
    OrganizationListComponent.prototype.ngOnInit = function () {
    };
    OrganizationListComponent.prototype.goToDetails = function (id) {
        this.router.navigate(['/admin', id]);
    };
    OrganizationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-list',
            template: __webpack_require__(/*! ./organization-list.component.html */ "./src/app/admin/organization-list/organization-list.component.html"),
            styles: [__webpack_require__(/*! ./organization-list.component.scss */ "./src/app/admin/organization-list/organization-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrganizationListComponent);
    return OrganizationListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map
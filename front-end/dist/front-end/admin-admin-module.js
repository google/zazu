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
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/admin/user-details/user-details.component.ts");
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
/* harmony import */ var _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-list/organization-list.component */ "./src/app/admin/organization-list/organization-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/admin/organization/organization.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var adminRoutes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        children: [
            {
                path: 'o',
                component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_6__["OrganizationComponent"],
                children: [
                    { path: '', redirectTo: 'list' },
                    { path: 'list', component: _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_2__["OrganizationListComponent"] },
                    { path: ':id', component: _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_1__["OrganizationDetailsComponent"] },
                    { path: ':id/u/:userID', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_0__["UserDetailsComponent"] },
                ]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(adminRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
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

module.exports = "<div class=\"main\">\n\n  <!-- Side Navigation Menu-->\n  <div class=\"side-nav\" [ngClass]=\"{'side-nav-minimized': minimized}\">\n    <!-- Company Title and Logo goes Here-->\n    <div class=\"company\">\n      <div class=\"icon-container\">\n        <div class=\"icon\">\n          <img src=\"../../assets/company-icon.png\" alt=\"Smiley face\">\n        </div>\n      </div>\n      <span class=\"name\"> Company </span>\n    </div>\n\n    <!-- Side Navigation Menus -->\n    <div class=\"menu-container\">\n\n      <!-- Menu # 1 -->\n      <div class=\"menu\" routerLink=\"o\" routerLinkActive=\"menu-active\" >\n        <i class=\"material-icons\">\n          business\n        </i>\n        <span class=\"text\">\n          Organizations\n        </span>\n      </div>\n\n      <!-- Menu # 2 -->\n      <div class=\"menu\">\n        <i class=\"material-icons\">\n          assessment\n        </i>\n        <span class=\"text\">\n          Reports\n        </span>\n      </div>\n\n      <!-- Menu # 3 -->\n      <div class=\"menu\">\n        <i class=\"material-icons\">\n          person_outline\n        </i>\n        <span class=\"text\">\n          Users\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"right-content\" [ngClass]=\"{'right-content-minimized': minimized}\">\n    <!-- Top Toolbar -->\n    <mat-toolbar class=\"toolbar\">\n      <button mat-button class=\"menu-icon\" (click)=\"toggleMenu()\">\n        <i class=\"material-icons \">\n          menu\n        </i>\n      </button>\n    </mat-toolbar>\n\n    <!-- Main Content -->\n    <div class=\"main-content\">\n\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tool bar top colour */\n/* Main content colour */\n/*************** SIDE NAVIGATION STYLES *******************/\n/* Side nav color */\n.side-nav {\n  width: 190px;\n  height: 100%;\n  background-color: #323232;\n  position: fixed;\n  transition: padding-left 0.5s;\n  /* For Safari 3.1 to 6.0 */\n  transition: width 0.5s;\n  overflow: hidden;\n  z-index: 40; }\n.company {\n  height: 64px; }\n.company .icon-container {\n    height: 64px;\n    width: 64px;\n    position: relative; }\n.company .icon-container img {\n      height: 45px;\n      width: 45px;\n      position: absolute;\n      right: 0;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto auto; }\n.company .name {\n    position: absolute;\n    top: 22px;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n    left: 70px; }\n.menu-container {\n  position: relative; }\n.menu-container .menu-active {\n    background-color: #555555; }\n.menu-container .menu:hover {\n    cursor: pointer; }\n.menu-container .menu {\n    height: 50px;\n    color: white; }\n.menu-container .menu .material-icons {\n      font-size: 30px;\n      position: relative;\n      top: 11px;\n      left: 16px; }\n.menu-container .menu .text {\n      position: absolute;\n      font-size: 17px;\n      left: 64px;\n      margin-top: 17px; }\n.side-nav-minimized {\n  width: 64px !important; }\n.toolbar {\n  background-color: #616161;\n  color: white;\n  z-index: 20;\n  position: fixed; }\n.toolbar .menu-icon {\n    min-width: unset;\n    padding: 0; }\n.toolbar .menu-icon i {\n      font-size: 2.5em; }\n.right-content {\n  margin-left: 190px;\n  transition: margin-left 0.5s; }\n.main-content {\n  background-color: #f5f5f5;\n  min-height: calc(100vh - 64px);\n  padding-top: 64px; }\n.right-content-minimized {\n  margin-left: 64px !important; }\n"

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
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization-list/organization-list.component */ "./src/app/admin/organization-list/organization-list.component.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-material/angular-material.module */ "./src/angular-material/angular-material.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organization-details/organization-details.component */ "./src/app/admin/organization-details/organization-details.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/admin/organization/organization.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/admin/user-details/user-details.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationListComponent"],
                _organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_7__["OrganizationDetailsComponent"],
                _organization_organization_component__WEBPACK_IMPORTED_MODULE_8__["OrganizationComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailsComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]],
            providers: [_shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"]]
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

module.exports = "<div class=\"breadcrumb\">\n  <p> <span routerLink=\"../\"> Organization List </span> >> {{organization.name}} </p>\n</div>\n\n<div style=\"padding-top: 50px\">\n  <h2>{{organization.name}}</h2>\n\n  <h4>User List</h4>\n\n  <button *ngFor=\"let user of users\" mat-button style=\"border: 1px solid rgba(240,240,240); box-shadow: 2px 2px 4px rgb(185, 185, 185); margin: 10px 10px; border-radius: 5px; background-color: white\">\n    <div (click)=\"goToUser(user.id)\">\n      <p>{{user.name}}</p>\n      <p>Google Id: {{user.googleId}}</p>\n      <p>Secondary Id: {{user.secondaryEmail}}</p>\n      <p> Accesses: </p>\n      <p *ngFor=\"let org of user.organizations\">\n        {{org.name}}\n      </p>\n    </div>\n  </button>\n\n</div>\n"

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
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
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
    function OrganizationDetailsComponent(route, router, organizationService, userService) {
        this.route = route;
        this.router = router;
        this.organizationService = organizationService;
        this.userService = userService;
    }
    OrganizationDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.route.params.subscribe(function (params) {
                                // Gets the Information for this specific organization
                                _this.organization = _this.organizationService.getOrganizationById(params['id']);
                                // Gets all the user for this organization
                                _this.users = _this.userService.getUsersByOrganization(params['id']);
                            })];
                    case 1:
                        _a.sub = _b.sent();
                        return [2 /*return*/];
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
    OrganizationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization-details',
            template: __webpack_require__(/*! ./organization-details.component.html */ "./src/app/admin/organization-details/organization-details.component.html"),
            styles: [__webpack_require__(/*! ./organization-details.component.scss */ "./src/app/admin/organization-details/organization-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

module.exports = "<div class=\"breadcrumb\">\r\n  <p>Organization List</p>\r\n</div>\r\n\r\n<div style=\"padding-top: 50px\">\r\n  <p *ngFor=\"let organization of organizations\">\r\n    <button mat-button (click)=\"goToDetails(organization.id)\" style=\"border: 1px solid rgba(240,240,240); box-shadow: 2px 2px 4px rgb(185, 185, 185); margin: 0 20px; border-radius: 5px; background-color: white\">\r\n      <p>{{organization.name}}({{organization.id}})</p>\r\n      <p><span *ngFor=\"let category of organization.categories\">{{category}}</span>  </p>\r\n    </button>\r\n  </p>\r\n</div>\r\n"

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
/* harmony import */ var _shared_services_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/organization.service */ "./src/app/shared/services/organization.service.ts");
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



var OrganizationListComponent = /** @class */ (function () {
    function OrganizationListComponent(router, route, organizationService) {
        this.router = router;
        this.route = route;
        this.organizationService = organizationService;
    }
    OrganizationListComponent.prototype.ngOnInit = function () {
        // Gets all organizations OnInit
        this.organizations = this.organizationService.getAllOrganizations();
    };
    OrganizationListComponent.prototype.goToDetails = function (id) {
        this.router.navigate(['../', id], { relativeTo: this.route });
    };
    OrganizationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization-list',
            template: __webpack_require__(/*! ./organization-list.component.html */ "./src/app/admin/organization-list/organization-list.component.html"),
            styles: [__webpack_require__(/*! ./organization-list.component.scss */ "./src/app/admin/organization-list/organization-list.component.scss")]
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

module.exports = "<div class=\"breadcrumb\">\n  <p> <span routerLink=\"../../../\"> Organization List </span> >> <span routerLink=\"../../\"> {{organization.name}}</span>\n    >> <span> {{user.name}} </span> </p>\n</div>\n\n<div style=\"padding-top: 60px\">\n  <p> {{user.name}} </p>\n  <p> {{user.googleId }}</p>\n  <p> {{user.secondaryEmail }} </p>\n  <p> <strong>Accesses: </strong></p>\n  <p *ngFor=\"let org of user.organizations\"> {{org.name}}  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/user-details/user-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-details/user-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router, route, userService, organizationService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.organizationService = organizationService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route);
        this.sub = this.route.params.subscribe(function (params) {
            _this.organization = _this.getOrganization(params['id']);
            _this.user = _this.userService.getUser(params['userID']);
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

/***/ "./src/app/shared/services/organization.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/organization.service.ts ***!
  \*********************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
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

var OrganizationService = /** @class */ (function () {
    function OrganizationService() {
        // Mocking Organizations Object
        this.mockOrganizations = [
            {
                id: '1',
                name: 'Hasbro Inc.',
                categories: ['Toy Company']
            },
            {
                id: '2',
                name: 'Mattel Inc.',
                categories: ['Toy Company']
            },
            {
                id: '3',
                name: 'The Lego Company',
                categories: ['Toy Company']
            },
            {
                id: '4',
                name: 'Something',
                categories: ['Toy Company', 'Electronics']
            }
        ];
    }
    /**
     * Method for getting all of the organizations
     */
    OrganizationService.prototype.getAllOrganizations = function () {
        return this.mockOrganizations.slice();
    };
    /**
     *  Method for getting organization with filters
     *  ********** MUST CONSULT HOW TO DO THIS *******
     */
    OrganizationService.prototype.getOrganizationsWithFilter = function (filter) {
        return null;
    };
    /**
     *  Method for getting Organization object with ID
     */
    OrganizationService.prototype.getOrganizationById = function (id) {
        return this.mockOrganizations.filter(function (x) { return x.id === id; })[0];
    };
    OrganizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OrganizationService);
    return OrganizationService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map
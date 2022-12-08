"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_auth_sign-out_sign-out_module_ts"],{

/***/ 57653:
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/sign-out/sign-out.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignOutComponent": () => (/* binding */ AuthSignOutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/auth.service */ 88951);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);





function AuthSignOutComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Redirecting in ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.countdown, ctx_r0.countdownMapping), " ");
} }
function AuthSignOutComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You are now being redirected! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["/sign-in"]; };
class AuthSignOutComponent {
    /**
     * Constructor
     */
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.countdown = 5;
        this.countdownMapping = {
            '=1': '# second',
            'other': '# seconds'
        };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Sign out
        this._authService.signOut();
        // Redirect after the countdown
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1000, 1000)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
            this._router.navigate(['sign-in']);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeWhile)(() => this.countdown > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.countdown--))
            .subscribe();
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
AuthSignOutComponent.ɵfac = function AuthSignOutComponent_Factory(t) { return new (t || AuthSignOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
AuthSignOutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthSignOutComponent, selectors: [["auth-sign-out"]], decls: 15, vars: 4, consts: [[1, "flex", "flex-col", "flex-auto", "items-center", "sm:justify-center", "min-w-0"], [1, "w-full", "sm:w-auto", "py-8", "px-4", "sm:p-12", "sm:rounded-2xl", "sm:shadow", "sm:bg-card"], [1, "w-full", "max-w-80", "sm:w-80", "mx-auto", "sm:mx-0"], [1, "w-12", "mx-auto"], ["src", "assets/images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "tracking-tight", "leading-tight", "text-center"], [1, "flex", "justify-center", "mt-0.5", "font-medium"], [4, "ngIf"], [1, "mt-8", "text-md", "font-medium", "text-secondary", "text-center"], [1, "ml-1", "text-primary-500", "hover:underline", 3, "routerLink"]], template: function AuthSignOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "You have signed out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AuthSignOutComponent_ng_container_8_Template, 3, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AuthSignOutComponent_ng_container_9_Template, 2, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Go to");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.countdown > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.countdown === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.I18nPluralPipe], encapsulation: 2 });


/***/ }),

/***/ 19903:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/sign-out/sign-out.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignOutModule": () => (/* binding */ AuthSignOutModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _fuse_components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/card */ 25553);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var app_modules_auth_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/auth/sign-out/sign-out.component */ 57653);
/* harmony import */ var app_modules_auth_sign_out_sign_out_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/auth/sign-out/sign-out.routing */ 58221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class AuthSignOutModule {
}
AuthSignOutModule.ɵfac = function AuthSignOutModule_Factory(t) { return new (t || AuthSignOutModule)(); };
AuthSignOutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthSignOutModule });
AuthSignOutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(app_modules_auth_sign_out_sign_out_routing__WEBPACK_IMPORTED_MODULE_3__.authSignOutRoutes),
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _fuse_components_card__WEBPACK_IMPORTED_MODULE_0__.FuseCardModule,
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthSignOutModule, { declarations: [app_modules_auth_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_2__.AuthSignOutComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _fuse_components_card__WEBPACK_IMPORTED_MODULE_0__.FuseCardModule,
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 58221:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/sign-out/sign-out.routing.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authSignOutRoutes": () => (/* binding */ authSignOutRoutes)
/* harmony export */ });
/* harmony import */ var app_modules_auth_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/auth/sign-out/sign-out.component */ 57653);

const authSignOutRoutes = [
    {
        path: '',
        component: app_modules_auth_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_0__.AuthSignOutComponent
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_sign-out_sign-out_module_ts.js.map
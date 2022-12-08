"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["common"],{

/***/ 16834:
/*!*************************************************!*\
  !*** ./src/app/shared/services/swal.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwalService": () => (/* binding */ SwalService)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class SwalService {
    constructor() { }
    swalSUccess(title, message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'success',
            title: title,
            text: message,
            showCancelButton: false
        });
    }
    swalError(title, message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'error',
            title: title,
            text: message,
            showCancelButton: false
        });
    }
}
SwalService.ɵfac = function SwalService_Factory(t) { return new (t || SwalService)(); };
SwalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SwalService, factory: SwalService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map
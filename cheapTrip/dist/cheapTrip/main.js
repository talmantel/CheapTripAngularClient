(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Olga\CheapTripAngularClient\cheapTrip\src\main.ts */"zUnb");


/***/ }),

/***/ "8EOA":
/*!**************************************************************!*\
  !*** ./src/app/search-result/store/search-result.actions.ts ***!
  \**************************************************************/
/*! exports provided: SOME_ACTION, SomeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOME_ACTION", function() { return SOME_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomeAction", function() { return SomeAction; });
const SOME_ACTION = '[Search Result] Some Action';
class SomeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = SOME_ACTION;
    }
}


/***/ }),

/***/ "AvlM":
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path-details/path-details.component */ "M1wl");
/* harmony import */ var _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path-map/path-map.component */ "RM3O");









function SearchResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-path-details", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-path-map", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paths", ctx_r0.paths);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDeskTop", ctx_r0.isDesktop)("frameWidth", ctx_r0.iframeWidth)("frameHeight", ctx_r0.iframeHeight);
} }
// reference information: available resolutions
var VIEWPORTS;
(function (VIEWPORTS) {
    VIEWPORTS[VIEWPORTS["XSmall"] = 0] = "XSmall";
    VIEWPORTS[VIEWPORTS["Small"] = 1] = "Small";
    VIEWPORTS[VIEWPORTS["SmallPortrait"] = 2] = "SmallPortrait";
    VIEWPORTS[VIEWPORTS["Medium"] = 3] = "Medium";
    VIEWPORTS[VIEWPORTS["Large"] = 4] = "Large";
    VIEWPORTS[VIEWPORTS["XLarge"] = 5] = "XLarge";
    VIEWPORTS[VIEWPORTS["WebLandscape"] = 6] = "WebLandscape";
    VIEWPORTS[VIEWPORTS["WebPortrait"] = 7] = "WebPortrait";
    VIEWPORTS[VIEWPORTS["HandsetLandscape"] = 8] = "HandsetLandscape";
    VIEWPORTS[VIEWPORTS["HandsetPortrait"] = 9] = "HandsetPortrait";
    VIEWPORTS[VIEWPORTS["TabletLandscape"] = 10] = "TabletLandscape";
    VIEWPORTS[VIEWPORTS["TabletPortrait"] = 11] = "TabletPortrait";
    VIEWPORTS[VIEWPORTS["Phones"] = 12] = "Phones";
    VIEWPORTS[VIEWPORTS["SmallPhones"] = 13] = "SmallPhones";
})(VIEWPORTS || (VIEWPORTS = {}));
const ROW_HEIGHT = 250;
const iframeSizeMap = new Map();
iframeSizeMap.set(VIEWPORTS.XSmall, { width: 500, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.Small, { width: 590, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.Medium, { width: 590, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.Large, { width: 650, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.XLarge, { width: 650, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.WebLandscape, { width: 650, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.WebPortrait, { width: 400, height: 2000 });
iframeSizeMap.set(VIEWPORTS.HandsetPortrait, { width: 400, height: 2000 });
iframeSizeMap.set(VIEWPORTS.HandsetLandscape, { width: 400, height: 2000 });
iframeSizeMap.set(VIEWPORTS.TabletLandscape, { width: 590, height: 1300 }); //
iframeSizeMap.set(VIEWPORTS.TabletPortrait, { width: 590, height: 1300 }); //
iframeSizeMap.set(VIEWPORTS.Phones, { width: 390, height: 2000 });
iframeSizeMap.set(VIEWPORTS.SmallPhones, { width: 360, height: 2000 });
class SearchResultComponent {
    // matcher: MediaQueryList;
    constructor(breakpointObserver, store, mediaMatcher) {
        this.store = store;
        this.mediaMatcher = mediaMatcher;
        this.isDesktop = false;
        breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait,
        ])
            .subscribe((state) => {
            this.getIFrameSize(breakpointObserver);
        });
    }
    ngOnInit() {
        this.getPathsSubscription = this.store
            .select('directions')
            .subscribe((state) => {
            this.paths = state.paths;
            this.isLoading = state.isLoading;
        });
    }
    ngOnDestroy() {
        this.getPathsSubscription.unsubscribe();
    }
    keyEvent(event) {
        let el = document.getElementById('map').getBoundingClientRect();
    }
    getIFrameSize(obs) {
        if (obs.isMatched('(max-width: 361px)')) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.SmallPhones);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
        }
        else if (obs.isMatched('(max-width: 412px)')) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.Phones);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.XSmall);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.Small);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.Medium);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.WebLandscape);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.WebPortrait);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.HandsetLandscape);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.HandsetPortrait);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletLandscape)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.TabletLandscape);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.TabletPortrait);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
    }
}
SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) { return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"])); };
SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultComponent, selectors: [["app-search-result"]], hostBindings: function SearchResultComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchResultComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 1, consts: [["class", "mainContainer", 4, "ngIf"], [1, "mainContainer"], [1, "aside"], [3, "paths"], ["id", "map", 1, "map"], [3, "isDeskTop", "frameWidth", "frameHeight"]], template: function SearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchResultComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"], _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__["PathMapComponent"]], styles: ["div.mainContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 98%;\n  margin: auto;\n  position: relative;\n  justify-content: stretch;\n  align-items: flex-start;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n  flex-basis: 49%;\n  flex-grow: 1;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  display: flex;\n  justify-content: space-around;\n  border-left: 1px solid var(--color-accent);\n}\n@media screen and (min-width: 960px) and (max-width: 1279.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    width: 95%;\n    height: auto;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 95%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 599.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 98%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 360px) and (max-width: 419.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 98%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 359.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 0.5rem;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGSjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0FBRko7QUM0Q0U7RURoQ0E7SUFDRSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBUkY7RUFTRTtJQUVFLFlBQUE7SUFFQSxhQUFBO0lBQ0EsNkJBQUE7RUFUSjtBQUNGO0FDOERFO0VEaERBO0lBQ0UsU0FBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RUFYRjtFQVlFO0lBQ0UsbUJBQUE7RUFWSjtFQVlFO0lBQ0UsbUJBQUE7SUFDQSxZQUFBO0lBQ0YsWUFBQTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtFQVZKO0FBQ0Y7QUMrQ0U7RURoQ0E7SUFDRSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLHFCQUFBO0VBWkY7RUFjRTtJQUNFLG1CQUFBO0VBWko7RUFjRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFaSjtBQUNGO0FDNENDO0VENUJDO0lBQ0UsU0FBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtFQWJGO0VBZUU7SUFDRSxtQkFBQTtFQWJKO0VBZUU7SUFDRSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0VBYko7QUFDRjtBQzZCRTtFRFhBO0lBQ0UsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtFQWZGO0VBZ0JFO0lBQ0UsbUJBQUE7RUFkSjtFQWdCRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFkSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2NoZWFwVHJpcFN0eWxlcy9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuZGl2Lm1haW5Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogOTglO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBtYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICBkaXYuYXNpZGUge1xyXG4gICAgZmxleC1iYXNpczogNDklO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICBkaXYubWFwIHtcclxuICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICB9XHJcbn1cclxuQGluY2x1ZGUgTGFyZ2Uge1xyXG4gIGRpdi5tYXAge1xyXG4gICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBNZWRpdW0ge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgLy8gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAvLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBTbWFsbCB7XHJcbiAgZGl2Lm1haW5Db250YWluZXIge1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXYuYXNpZGUge1xyXG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1hcCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBYU21hbGwge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgIGRpdi5hc2lkZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AaW5jbHVkZSBQaG9uZXMge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgIGRpdi5hc2lkZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgU21hbGxwaG9uZXMge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMC41cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgZGl2LmFzaWRlIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIH1cclxuICAgIGRpdi5tYXAge1xyXG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxufVxyXG5cclxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbiAgYm94LXNpemluZzogJGJveFNpemluZztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbkBtaXhpbiBYTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIE1lZGl1bSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFRhYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBUYWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gWFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFBob25lcyB7XHJcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxscGhvbmVzIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-result',
                templateUrl: './search-result.component.html',
                styleUrls: ['./search-result.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }]; }, { keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url68: 'http://3.18.167.68:8080/',
    url104: 'http://18.158.89.230:8080/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _alertMessage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertMessage.model */ "Mkpf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function ErrorComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", btn_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r1);
} }
class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.currentClass = {
            error: this.data.type == "error",
            warning: this.data.type == "warning"
        };
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["ng-component"]], decls: 8, vars: 4, consts: [[1, "main", 3, "ngClass"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "mat-body-1"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["mat-button", "", "mat-dialog-close", "", 3, "ngClass"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ErrorComponent_button_7_Template, 2, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["div.main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 6rem;\n  color: white;\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Back[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Close[_ngcontent-%COMP%] {\n  background-color: var(--color-accent);\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Download[_ngcontent-%COMP%] {\n  background-color: var(--color-success);\n}\n.error[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.warning[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUROO0FBR0k7RUFDRSxzQ0FBQTtBQUROO0FBR0k7RUFDRSxxQ0FBQTtBQUROO0FBR0k7RUFDRSxzQ0FBQTtBQUROO0FBT0U7RUFDRSwyQkFBQTtBQUpKO0FBVUU7RUFDRSwwQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubWFpbiB7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBkaXYge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5CYWNre1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5DbG9zZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5Eb3dubG9hZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4uZXJyb3Ige1xyXG4gIGgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ud2FybmluZyB7XHJcbiAgaDEge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return [{ type: _alertMessage_model__WEBPACK_IMPORTED_MODULE_2__["AlertMessage"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");








class LandingComponent {
    constructor(router) {
        this.router = router;
    }
    onScroll(event) {
        let el = document.getElementById('secondScreen').getBoundingClientRect();
        if (el.top < 650) {
            this.isDark = true;
        }
        else {
            this.isDark = false;
        }
    }
    ngOnInit() {
        this.isDark = false;
        let el = document.getElementById('secondScreen');
    }
    toSearchPage() {
        this.router.navigate(['/search']);
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], hostBindings: function LandingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function LandingComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 59, vars: 3, consts: [[1, "logo"], ["mat-button", ""], [1, "menu"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "material-icons"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["mat-menu-item", "", 1, "submenu"], [1, "buttons"], ["mat-button", "", "type", "button", 1, "btn", "login"], ["mat-button", "", "type", "button", 1, "btn", "start", 3, "click"], [1, "screen", "screen_1"], [1, "message"], ["mat-button", "", "type", "button", 1, "start", 3, "click"], [1, "picture"], ["src", "../../assets/images/computer1.png"], ["id", "secondScreen", 1, "screen", "screen_2"], ["src", "../../assets/images/computer4.png"], ["src", "../../assets/images/ball.png", 1, "ball"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " CHEAP TRIP. PAY LESS, VISIT MORE! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PRODUCT1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "CUSTOMRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " keyboard_arrow_down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_24_listener() { return ctx.toSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "By combining different types of transport, you can create a route that will be cheaper than you originally thought.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Priceless impressions by less price! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Discover the cheapest way to get anywhere (Currently in Europe) combining plane, train, bus and rideshare. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_35_listener() { return ctx.toSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "We present you a tool that will revolutionize your travel experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " The direct route is no longer the cheapest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Analyzing the most up-to-date information, we compose a route that will lead you to your destination for less money. The proposed route includes various types of public transport. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "How does it work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Just select the start and end point of your trip from the list in the fields From and To, and click the Start button. Several route options are displayed on the page. By clicking on one of them, you can get acquainted with the details of the proposed route. At the moment the database works with the largest cities in Europe. Always check your travel details with your direct carrier. Ready, then you go there: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_54_listener() { return ctx.toSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dark", ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #e0e2e1;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton.btn[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n\nbutton.start[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  color: white;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  position: fixed;\n  z-index: 100;\n  background-color: #e0e2e1;\n  font-size: 90%;\n  transition: background-color 1s, color 1s;\n  color: var(--color-primary);\n  font-family: \"Lato\", sans-serif;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: italic;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-style: italic !important;\n  font-size: 12px;\n  color: var(--color-primary);\n}\n\nmat-toolbar.dark[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: white;\n  transition: background-color 1s, color 1s;\n}\n\nmat-toolbar.dark[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]   button.start[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  background-color: #e0e2e1;\n  transition: background-color 1s, color 1s;\n}\n\nbutton.start[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--color-primary);\n  border-radius: 0%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  outline: white 1px solid;\n  transition: background-color 1s, color 1s;\n}\n\ndiv.screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  background-color: #e0e2e1;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  width: 45%;\n  height: auto;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: auto;\n  position: relative;\n  top: 100px;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%] {\n  width: 65%;\n  height: auto;\n}\n\ndiv.screen_2[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  color: white;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: gray;\n  width: 90%;\n  top: 0;\n  margin: 0;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 1em;\n  font-size: 0.7rem;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding-top: 0px;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  padding: 1rem inherit;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  left: 5rem;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%]   img.ball[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  top: 18rem;\n  left: 33rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURFO0VBQ0Usa0JBQUE7QUFHSjs7QUFGSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0FBR0o7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUdGOztBQURJO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0FBR047O0FBRUE7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRU47O0FBRE07RUFDRSxpQ0FBQTtBQUdSOztBQURNO0VBQ0UsK0JBQUE7QUFHUjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBSUE7RUFDRSwyQkFBQTtBQURGOztBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUNJO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUFDTjs7QUFBTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUNNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFBUTtFQUVFLHFCQUFBO0FBQ1Y7O0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRk47O0FBSUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI2LCAyMjUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmJ1dHRvbi5idG4ge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5idXR0b24uc3RhcnQge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI1KTtcclxuICBmb250LXNpemU6IDkwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBjb2xvciAxcztcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuICBkaXYubG9nbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXYubWVudSBidXR0b24ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbn1cclxuYnV0dG9uLm1hdC1tZW51LWl0ZW0ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWMhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5tYXQtdG9vbGJhci5kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgY29sb3IgMXM7XHJcbiAgZGl2LmJ1dHRvbnMge1xyXG4gICAgYnV0dG9uLnN0YXJ0IHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjYsIDIyNSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uLnN0YXJ0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgb3V0bGluZTogd2hpdGUgMXB4IHNvbGlkO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xyXG59XHJcblxyXG5kaXYuc2NyZWVuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI1KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXYubWVzc2FnZSB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdi5waWN0dXJlIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuZGl2LnNjcmVlbl8yIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgZGl2Lm1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGl2IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgc3BhbntcclxuXHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdi5waWN0dXJlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDVyZW07XHJcbiAgICB9XHJcbiAgICBpbWcuYmFsbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB0b3A6IDE4cmVtO1xyXG4gICAgICBsZWZ0OiAzM3JlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myInsertRemoveTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myInsertRemoveTrigger', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "M1wl":
/*!**********************************************************************!*\
  !*** ./src/app/search-result/path-details/path-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: PathDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathDetailsComponent", function() { return PathDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");






function PathDetailsComponent_section_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", icon_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PathDetailsComponent_section_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r6);
} }
function PathDetailsComponent_section_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const path_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", path_r7.from, " -> ", path_r7.to, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r7.transportation_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r7.duration_minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](12, 5, path_r7.euro_price, "EUR", "symbol", "1.2-2"));
} }
function PathDetailsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PathDetailsComponent_section_0_ng_container_6_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PathDetailsComponent_section_0_span_10_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PathDetailsComponent_section_0_div_18_Template, 13, 10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rout_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details["transport"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details["points"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rout_r1.details.duration_minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](17, 5, rout_r1.details.euro_price, "EUR", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details.direct_paths);
} }
class PathDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PathDetailsComponent.ɵfac = function PathDetailsComponent_Factory(t) { return new (t || PathDetailsComponent)(); };
PathDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathDetailsComponent, selectors: [["app-path-details"]], inputs: { paths: "paths", startPoint: "startPoint", endPoint: "endPoint" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["expandedHeight", "*", "collapsedHeight", "*"], [1, "icons"], [1, "description"], ["class", "points", 4, "ngFor", "ngForOf"], [1, "time"], [1, "spacer"], ["color", "warn", "selected", ""], ["class", "details", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "points"], [1, "details"]], template: function PathDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PathDetailsComponent_section_0_Template, 19, 10, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paths);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  position: relative;\n  height: auto;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\np[_ngcontent-%COMP%]   span.points[_ngcontent-%COMP%] {\n  font-style: oblique;\n}\n\np[_ngcontent-%COMP%]   span.points[_ngcontent-%COMP%]:after {\n  content: \" > \";\n  font-weight: bold;\n  color: var(--color-primary);\n}\n\np[_ngcontent-%COMP%]   span.points[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\nsection[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 0.2rem;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%] {\n  width: 100%;\n  height: inherit;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 70%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-accent);\n  width: 95%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  padding-top: 0.5rem;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid var(--color-primary);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.1rem 1rem;\n  color: var(--color-primary);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.material-icons[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  padding: 0.5rem 0;\n  color: var(--color-accent);\n  font-size: 0.9rem;\n  margin: 0;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 599.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 360px) and (max-width: 419.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    font-size: 1rem;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLWRldGFpbHMvcGF0aC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFERTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBR0o7O0FBRkk7RUFDRSxVQUFBO0FBSU47O0FBSE07RUFDRSxlQUFBO0FBS1I7O0FBSE07RUFDRSxlQUFBO0FBS1I7O0FBSE07RUFDRSx5Q0FBQTtFQUNBLFVBQUE7QUFLUjs7QUFKUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFNVjs7QUFKUTtFQUNFLGFBQUE7QUFNVjs7QUFMVTtFQUNFLGNBQUE7QUFPWjs7QUFITTtFQUNFLHVCQUFBO0FBS1I7O0FBSFU7RUFDRSxhQUFBO0VDM0NWLHNCRDRDNkI7RUFDbkIsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUFNWjs7QUFMWTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7QUFPZDs7QUFOYztFQUNFLDJCQUFBO0FBUWhCOztBQUZVO0VBQ0UsV0FBQTtBQUlaOztBQUhZO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUFJZDs7QUFGWTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsV0FBQTtBQUdkOztBQURjO0VBQ0UsY0FBQTtBQUdoQjs7QUNHRTtFRGVBO0lBQ0UsV0FBQTtFQWRGO0FBQ0Y7O0FDSUU7RURnQkE7SUFDRSxXQUFBO0VBakJGO0FBQ0Y7O0FDaUJDO0VES0M7SUFDRSxXQUFBO0VBbkJGO0VBeUJZO0lBQ0UsZUFBQTtFQXZCZDtFQTRCTTtJQUNFLGVBQUE7RUExQlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvcGF0aC1kZXRhaWxzL3BhdGgtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnAgc3Bhbi5wb2ludHMge1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxucCBzcGFuLnBvaW50czphZnRlciB7XHJcbiAgY29udGVudDogXCIgPiBcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbnAgc3Bhbi5wb2ludHM6bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBtYXQtYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzAlO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi5kZXRhaWxzIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBzcGFuLnNwYWNlciB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF0LXBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgIGRpdi5pY29ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveFNpemluZyhib3JkZXItYm94KTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgc3Bhbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBkaXYuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwLnRpbWUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAuc3BhY2VyIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AaW5jbHVkZSBMYXJnZSB7XHJcblxyXG59XHJcblxyXG5cclxuQGluY2x1ZGUgTWVkaXVte1xyXG4gIHNlY3Rpb257XHJcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxse1xyXG4gIHNlY3Rpb257XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAyMzYsIDk4KTtcclxuICAvLyAgYm9yZGVyOjNweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBYU21hbGx7XHJcbiAgc2VjdGlvbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MiwgNTEpO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgUGhvbmVzIHtcclxuICBzZWN0aW9uIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXQtYWNjb3JkaW9uIHtcclxuICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgICAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZGl2LmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmRldGFpbHMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxufVxyXG5cclxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbiAgYm94LXNpemluZzogJGJveFNpemluZztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbkBtaXhpbiBYTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIE1lZGl1bSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFRhYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBUYWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gWFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFBob25lcyB7XHJcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxscGhvbmVzIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-details',
                templateUrl: './path-details.component.html',
                styleUrls: ['./path-details.component.scss'],
            }]
    }], function () { return []; }, { paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Mkpf":
/*!*********************************************!*\
  !*** ./src/app/error/alertMessage.model.ts ***!
  \*********************************************/
/*! exports provided: AlertMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessage", function() { return AlertMessage; });
class AlertMessage {
    constructor(type, header, text, buttons) {
        this.type = type;
        this.header = header;
        this.text = text;
        this.buttons = buttons;
    }
}


/***/ }),

/***/ "RM3O":
/*!**************************************************************!*\
  !*** ./src/app/search-result/path-map/path-map.component.ts ***!
  \**************************************************************/
/*! exports provided: PathMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathMapComponent", function() { return PathMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PathMapComponent {
    constructor() {
    }
}
PathMapComponent.ɵfac = function PathMapComponent_Factory(t) { return new (t || PathMapComponent)(); };
PathMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathMapComponent, selectors: [["app-path-map"]], inputs: { frameWidth: "frameWidth", frameHeight: "frameHeight", isDeskTop: "isDeskTop" }, decls: 3, vars: 4, consts: [["id", "map"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSdq-5XxSDlosGda8c9hh9MbfPDT-sfAyLWxbS8OOUgQl_XwTw/viewform?embedded=true", "scrolling", "no", "frameborder", "0", "marginheight", "0", "marginwidth", "0", 3, "width", "height"]], template: function PathMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("desktop", ctx.isDeskTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.frameWidth)("height", ctx.frameHeight);
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding: 0;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.desktop[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  top: -0.6rem;\n}\n\n@media screen and (min-width: 360px) and (max-width: 419.99px) {\n  div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    position: relative;\n  }\n  div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLW1hcC9wYXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRkY7O0FBR0U7RUFDRSxrQkFBQTtBQURKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQUpKOztBQ21HQztFRDFGQztJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFMRjtFQU1FO0lBQ0Usa0JBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLW1hcC9wYXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL0BleHRlbmQgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbmRpdi5kZXNrdG9wIHtcclxuXHJcbiAgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IC0wLjZyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBQaG9uZXMge1xyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIGJvcmRlclJhZGl1cygkdG9wTGVmdCwgJHRvcFJpZ2h0LCAkYm90dG9tTGVmdCwgJGJvdHRvbVJpZ2h0KSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXJSYWQoJHZhbCkge1xyXG4gIEBpbmNsdWRlIGJvcmRlclJhZGl1cygkdmFsLCAkdmFsLCAkdmFsLCAkdmFsKTtcclxufVxyXG5cclxuQG1peGluIGJveFNpemluZygkYm94U2l6aW5nKSB7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG4gIGJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250U2l6ZSwgJGZvbnRXZWlnaHQsICRmb250U3R5bGUpIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaGFkb3coJGhMZW5ndGgsICR2TGVuZ3RoLCAkYmx1clIsICRzcHJlYWRSKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5AbWl4aW4gWExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBNZWRpdW0ge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgIChtYXgtd2lkdGg6IDEyNzkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBUYWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kICAobWF4LXdpZHRoOiA4MzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiAxMjgwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1peGluIFhTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0TGFuZFNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBQaG9uZXMge1xyXG4gQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNDE5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbHBob25lcyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5Ljk5cHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxuIH1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-map',
                templateUrl: './path-map.component.html',
                styleUrls: ['./path-map.component.scss'],
            }]
    }], function () { return []; }, { frameWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], frameHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDeskTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "S2wL":
/*!***************************************************!*\
  !*** ./src/app/header/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../trip-direction/store/trip-direction.actions */ "k/2q");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class HeaderComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
        this.isDarkTheme = false;
    }
    ngOnInit() { }
    toHomePage() {
        this.store.dispatch(new _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__["GoHome"]());
        this.route.navigate(['/']);
    }
    onChangeTheme() {
        this.isDarkTheme = !this.isDarkTheme;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [["color", "primary", "role", "heading"], [1, "slogan"], [1, "spacer"], ["mat-button", "", 3, "click"], [1, "material-icons"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHEAP TRIP. PAY LESS, VISIT MORE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.toHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9em;\n  color: white;\n  margin: 0%;\n  line-height: 1.5rem;\n  font-family: \"Anton\", sans-serif;\n  font-style: italic;\n  font-weight: lighter;\n  letter-spacing: 4px;\n}\n\n@media screen and (min-width: 360px) and (max-width: 419.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQzRHQztFRHBHRztJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFKSjtBQUNGOztBQ3VHRTtFRDdGRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzXCI7XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuZGl2LnNsb2dhbiB7XHJcbiAgcCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJBbnRvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgUGhvbmVzIHtcclxuICBkaXYuc2xvZ2FuIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBkaXYuc2xvZ2FuIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIGJvcmRlclJhZGl1cygkdG9wTGVmdCwgJHRvcFJpZ2h0LCAkYm90dG9tTGVmdCwgJGJvdHRvbVJpZ2h0KSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXJSYWQoJHZhbCkge1xyXG4gIEBpbmNsdWRlIGJvcmRlclJhZGl1cygkdmFsLCAkdmFsLCAkdmFsLCAkdmFsKTtcclxufVxyXG5cclxuQG1peGluIGJveFNpemluZygkYm94U2l6aW5nKSB7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG4gIGJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250U2l6ZSwgJGZvbnRXZWlnaHQsICRmb250U3R5bGUpIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaGFkb3coJGhMZW5ndGgsICR2TGVuZ3RoLCAkYmx1clIsICRzcHJlYWRSKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5AbWl4aW4gWExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBNZWRpdW0ge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgIChtYXgtd2lkdGg6IDEyNzkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBUYWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kICAobWF4LXdpZHRoOiA4MzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiAxMjgwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1peGluIFhTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0TGFuZFNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBQaG9uZXMge1xyXG4gQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNDE5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbHBob25lcyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5Ljk5cHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxuIH1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "S3+y":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _trip_direction_store_trip_direction_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-direction/store/trip-direction.reducer */ "sCT4");
/* harmony import */ var _search_result_store_search_result_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-result/store/search-result.reducer */ "ggAr");


const appReducer = {
    directions: _trip_direction_store_trip_direction_reducer__WEBPACK_IMPORTED_MODULE_0__["tripDirectionReducer"],
    searchResult: _search_result_store_search_result_reducer__WEBPACK_IMPORTED_MODULE_1__["searchResultReducer"]
};


/***/ }),

/***/ "SAvh":
/*!********************************************************!*\
  !*** ./src/app/trip-direction/trip-direction.model.ts ***!
  \********************************************************/
/*! exports provided: Modes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modes", function() { return Modes; });
var PointType;
(function (PointType) {
    PointType["START"] = "startPoint";
    PointType["END"] = "endPoint";
})(PointType || (PointType = {}));
var Modes;
(function (Modes) {
    Modes[Modes["SEARCH"] = 0] = "SEARCH";
    Modes[Modes["DELIVERY"] = 1] = "DELIVERY";
})(Modes || (Modes = {}));


/***/ }),

/***/ "SJn0":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-direction/store/trip-direction.actions */ "k/2q");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/alertMessage.model */ "Mkpf");












//import { ErrorComponent } from "./error/error.component";
//ngimport { ErrorService } from "./error/error.service";
class ErrorInterceptor {
    constructor(dialog, store) {
        this.dialog = dialog;
        this.store = store;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((evt) => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                if (evt.body.length == 0) {
                    const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('warning', 'Oh no!', 'Sorry, the data we have accumulated is not enough to build a route between the indicated cities. Try changing your request.', ['Back']);
                    this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
                        data: alertMessage,
                    });
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorData;
            switch (true) {
                case error.status >= 400:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('warning', 'Oh no!', 'Sorry, the data we have accumulated is not enough to build a route between the indicated cities. Try changing your request.', ['Back']);
                    break;
                case error.status >= 500:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', 'Oops!', 'Pss! Our server is sleeping now. Please come back later.', ['Close']);
                    break;
            }
            this.store.dispatch(new _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["AutocompleteFail"]('errorMessage'));
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: errorData });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "SqVX":
/*!*****************************************************************!*\
  !*** ./src/app/trip-direction/trip-direction-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TripDirectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionRoutingModule", function() { return TripDirectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../no-page/no-page.component */ "krUe");
/* harmony import */ var _search_result_search_result_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-result/search-result.guard */ "Szjs");
/* harmony import */ var _trip_direction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-direction.component */ "jEWW");







const routes = [
    // {path: 'landing', component: LandingComponent},
    {
        path: '',
        component: _trip_direction_component__WEBPACK_IMPORTED_MODULE_4__["TripDirectionComponent"],
        children: [
            {
                path: 'myPath',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../search-result/search-result.module */ "vrIs")).then((m) => m.SearchResultModule),
            },
            { path: 'noPage', component: _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_2__["NoPageComponent"] },
        ],
    },
];
class TripDirectionRoutingModule {
}
TripDirectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TripDirectionRoutingModule });
TripDirectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TripDirectionRoutingModule_Factory(t) { return new (t || TripDirectionRoutingModule)(); }, providers: [_search_result_search_result_guard__WEBPACK_IMPORTED_MODULE_3__["SearchResultGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TripDirectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_search_result_search_result_guard__WEBPACK_IMPORTED_MODULE_3__["SearchResultGuard"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/alertMessage.model */ "Mkpf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
        console.log(this.myBrowser());
        console.log(this.getBrowserVersion());
        if (this.getBrowserVersion() == 'Opera 72') {
            const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_2__["AlertMessage"]('warning', 'Unsupported!', 'Sorry, we did not have time to adapt our application for the type of web browser you are using. But we managed to optimize it for Google Chrome ver. 86 or newest. We recommend trying it!', ['Close', 'Download']);
            /*  this.dialog.open(ErrorComponent, {
               data: alertMessage,
             }); */
        }
    }
    myBrowser() {
        if ((navigator.userAgent.indexOf('Opera') ||
            navigator.userAgent.indexOf('OPR')) != -1) {
            return 'Opera';
        }
        else if (navigator.userAgent.indexOf('Chrome') != -1) {
            return 'Chrome';
        }
        else if (navigator.userAgent.indexOf('Safari') != -1) {
            return 'Safari';
        }
        else if (navigator.userAgent.indexOf('Firefox') != -1) {
            return 'Firefox';
        }
        else if (navigator.userAgent.indexOf('MSIE') != -1 ||
            !!document.DOCUMENT_NODE == true) {
            return 'IE';
        }
        else {
            return 'unknown';
        }
    }
    getBrowserVersion() {
        var userAgent = navigator.userAgent, tem, matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(matchTest[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (matchTest[1] === 'Chrome') {
            tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        matchTest = matchTest[2]
            ? [matchTest[1], matchTest[2]]
            : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = userAgent.match(/version\/(\d+)/i)) != null)
            matchTest.splice(1, 1, tem[1]);
        return matchTest.join(' ');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Szjs":
/*!******************************************************!*\
  !*** ./src/app/search-result/search-result.guard.ts ***!
  \******************************************************/
/*! exports provided: SearchResultGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultGuard", function() { return SearchResultGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class SearchResultGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate(route, state) {
        return this.store.select('directions').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('guard', res);
            console.log('guard', !res.startPoint);
            console.log('guard', !!res.startPoint);
            return true;
        }));
    }
}
SearchResultGuard.ɵfac = function SearchResultGuard_Factory(t) { return new (t || SearchResultGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SearchResultGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchResultGuard, factory: SearchResultGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header/header.component */ "S2wL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/app.reducer */ "S3+y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trip-direction/trip-direction.module */ "dZhj");
/* harmony import */ var _trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trip-direction/store/trip-direction.effects */ "a6s2");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-result/search-result.module */ "vrIs");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./no-page/no-page.component */ "krUe");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error-interceptor */ "SJn0");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authors/data-table/data-table.component */ "btlR");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__["TripDirectionModule"],
            _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__["SearchResultModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_8__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__["TripDirectionEffects"]]),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__["NoPageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"], _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__["TripDirectionModule"],
        _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__["SearchResultModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsRootModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__["NoPageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"], _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__["TripDirectionModule"],
                    _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__["SearchResultModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_8__["appReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__["TripDirectionEffects"]]),
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a6s2":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.effects.ts ***!
  \****************************************************************/
/*! exports provided: TripDirectionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionEffects", function() { return TripDirectionEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _trip_direction_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-direction.actions */ "k/2q");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
















var Icons;
(function (Icons) {
    Icons["FLIGHT"] = "<span class=\"material-icons\">\n  flight\n  </span>";
    Icons["BUS"] = "<span class=\"material-icons\">\n  directions_bus\n  </span>";
    Icons["TRAIN"] = "<span class=\"material-icons\">\n  directions_railway\n  </span>";
    Icons["SUBWAY"] = "<span class=\"material-icons\">\n  directions_subway\n  </span>";
    Icons["SHIP"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["ONFOOT"] = "<span class=\"material-icons\">\n  directions_walk\n  </span>";
    Icons["CAR"] = "<span class=\"material-icons\">\n  directions_car\n  </span>";
    Icons["TAXI"] = "<span class=\"material-icons\">\n  local_taxi\n  </span>";
    Icons["SHUTTLE"] = "<span class=\"material-icons\">\n  shuttle\n  </span>";
})(Icons || (Icons = {}));
const PATHMAP = new Map();
PATHMAP.set('mixed_routes', {
    type: 'Mixed Trip',
});
PATHMAP.set('flying_routes', {
    type: 'Air Trip',
});
PATHMAP.set('ground_routes', {
    type: 'Ground Trip',
});
const PATHMAPDETAILED = new Map();
PATHMAPDETAILED.set('Bus', Icons.BUS);
PATHMAPDETAILED.set('Flight', Icons.FLIGHT);
PATHMAPDETAILED.set('Train', Icons.TRAIN);
PATHMAPDETAILED.set('Ride Share', Icons.CAR);
PATHMAPDETAILED.set('Car Drive', Icons.CAR);
PATHMAPDETAILED.set('Walk', Icons.ONFOOT);
PATHMAPDETAILED.set('Town Car', Icons.CAR);
PATHMAPDETAILED.set('Car Ferry', Icons.CAR);
PATHMAPDETAILED.set('Shuttle', Icons.SHUTTLE);
PATHMAPDETAILED.set('Taxi', Icons.TAXI);
class TripDirectionEffects {
    constructor(actions$, sanitizer, http, router, store$) {
        this.actions$ = actions$;
        this.sanitizer = sanitizer;
        this.http = http;
        this.router = router;
        this.store$ = store$;
        /*  @Effect()
        newEffect = this.actions$.pipe(
          ofType(TripDirectionActions.GET_AUTOCOMPLETE),
           withLatestFrom(this.store$.select('directions')),
           tap(state => {console.log('new effect, ', state)}),
           mergeMap(req =>{
             console.log('new effect,', req);
             return of('1')
           })
        ) */
        // 'http://52.14.161.122:8080/locations?type=from&search_name=6',
        // http://3.23.159.104:3333/CheapTrip/getLocations?type=1
        this.getAutocomplete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_5__["GET_AUTOCOMPLETE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.select('directions')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            let url = '';
            if (request[1].currentServer === 'server68') {
                url =
                    _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url68 +
                        'locations?type=' +
                        'from' +
                        // request[0].payload.type +
                        '&search_name=' +
                        encodeURIComponent(request[0].payload.name);
            }
            else {
                url =
                    _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url104 +
                        'locations?type=' +
                        'from' +
                        // request[0].payload.type +
                        '&search_name=' +
                        encodeURIComponent(request[0].payload.name);
            }
            return this.http
                .get(url, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                const newAction = request[0].payload.type === 'from'
                    ? new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_5__["SetStartPointAutocomplete"](res.body)
                    : new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_5__["SetEndPointAutocomplete"](res.body);
                return newAction;
            })
            /*  catchError((error) => {
            console.log('error', error);
            this.handleError(error);
  
            return of(new TripDirectionActions.AutoCompleteFail(error));
          }) */
            );
        }));
        this.getRouts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_5__["GET_ROUTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.select('directions')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            let url = '';
            if (request[1].currentServer === 'server68') {
                url =
                    _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url68 +
                        'routes?from=' +
                        request[1].startPoint.id +
                        '&to=' +
                        request[1].endPoint.id;
            }
            else {
                url =
                    _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url104 +
                        'routes?from=' +
                        request[1].startPoint.id +
                        '&to=' +
                        request[1].endPoint.id;
            }
            return this.http.get(url, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                let resultPathArr = null;
                resultPathArr = this.transformObject(res.body);
                const endPoints = {
                    from: request[1].startPoint,
                    to: request[1].endPoint,
                };
                const queryParams = {
                    from: request[1].startPoint.name,
                    fromID: request[1].startPoint.id,
                    to: request[1].endPoint.name,
                    toID: request[1].endPoint.id,
                };
                this.router.navigate(['/search/myPath'], {
                    queryParams,
                });
                return new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_5__["SetRouts"]({
                    paths: resultPathArr,
                    endPoints: endPoints,
                });
            })
            /* atchError((error) => {
                const errorMessage = 'An unknown error occured!';
                this.handleError(error);
                return of(new TripDirectionActions.AutoCompleteFail(error));
              }) */
            );
        }));
        //   this.server = 'tomcat'; //to be fixed
        // this.server = Server.SERVER104;
    }
    /*   private transformObjectTomCat(obj: object): IPath[] {
      const objArr: IPath[] = [];
      for (const i in obj) {
        const transformedDetails = this.transformDetails(obj[i]);
        const testObj: IPath = {
          pathType: PATHMAP.get(i).type,
          details: transformedDetails,
        };
        objArr.push(testObj);
      }
      return this.reducedPaths(objArr);
    } */
    transformObject(routs) {
        const objArr = [];
        routs.forEach((rout) => {
            const details = {
                euro_price: rout.euro_price,
                duration_minutes: rout.duration_minutes,
                direct_paths: rout.direct_paths,
            };
            const transformedRout = {
                pathType: rout.routeType,
                details: this.transformDetails(details),
            };
            if (transformedRout.details['duration_minutes'] != '  0min') {
                objArr.push(transformedRout);
            }
        });
        return this.reducedPaths(objArr);
    }
    transformDetails(obj) {
        const transport = this.getTransport(obj.direct_paths);
        const points = this.getPoints(obj.direct_paths);
        const newPaths = obj.direct_paths.map((item) => {
            return Object.assign(Object.assign({}, item), { duration_minutes: this.transformTime(+item.duration_minutes), euro_price: this.transformPrice(+item.euro_price) });
        });
        const newObj = {
            direct_paths: newPaths,
            euro_price: this.transformPrice(+obj.euro_price),
            duration_minutes: this.transformTime(+obj.duration_minutes),
            points: points,
            transport: transport,
        };
        return newObj;
    }
    transformTime(minutes) {
        const days = Math.floor(minutes / 60 / 24);
        const dayStr = days < 1 ? '' : days + 'd';
        const hours = Math.floor(minutes / 60 - days * 24);
        const hourStr = hours < 1 ? '' : hours + 'h';
        const min = minutes - days * 24 * 60 - hours * 60;
        const minStr = min + 'min';
        return dayStr + ' ' + hourStr + ' ' + minStr;
    }
    transformPrice(price) {
        const euro = Math.floor(+price);
        const cent = Math.floor(+price - euro) * 10;
        return price;
    }
    mapSanitazingDetaled() {
        const newSanitisedMap = new Map();
        PATHMAPDETAILED.forEach((value, key, _map) => {
            newSanitisedMap.set(key, this.sanitizer.bypassSecurityTrustHtml(value));
        });
        return newSanitisedMap;
    }
    getTransport(paths) {
        const sanitisedMap = this.mapSanitazingDetaled();
        const result = [];
        paths.map((item) => {
            const smth = sanitisedMap.get(item.transportation_type);
            result.push(smth);
        });
        return result;
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // client-side error
            //  errorMessage = `Error: ${err.error.message}`;
        }
        else {
            // server-side error
            //   errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        //  window.alert(errorMessage);
    }
    getPoints(paths) {
        const transformedArr = paths.map((item) => [item.from, item.to]);
        const result = new Set(transformedArr.reduce((a, b) => a.concat(b), []));
        return result;
    }
    reducedPaths(paths) {
        const stringifyArr = paths.map((p) => JSON.stringify(p.details));
        let ind = -1;
        for (let i = 1; i < paths.length; i++) {
            if (stringifyArr[0] == stringifyArr[i]) {
                ind = i;
            }
        }
        return paths.filter((_path, index) => {
            return index != ind;
        });
    }
}
TripDirectionEffects.ɵfac = function TripDirectionEffects_Factory(t) { return new (t || TripDirectionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"])); };
TripDirectionEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TripDirectionEffects, factory: TripDirectionEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getAutocomplete$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getRouts$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TripDirectionEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }]; }, { getAutocomplete$: [], getRouts$: [] }); })();


/***/ }),

/***/ "btlR":
/*!************************************************************!*\
  !*** ./src/app/authors/data-table/data-table.component.ts ***!
  \************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-table-datasource */ "gX/U");









function DataTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.id);
} }
function DataTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.name);
} }
function DataTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function DataTableComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const _c0 = function () { return [25, 50, 100, 250]; };
class DataTableComponent {
    constructor() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    ngOnInit() {
        this.dataSource = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_4__["DataTableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["app-data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 12, vars: 7, consts: [[1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", "aria-label", "Elements", 1, "full-width-table"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DataTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DataTableComponent_tr_8_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DataTableComponent_tr_9_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 50)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9ycy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-table',
                templateUrl: './data-table.component.html',
                styleUrls: ['./data-table.component.scss']
            }]
    }], null, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]]
        }] }); })();


/***/ }),

/***/ "dUNL":
/*!*******************************************************************************!*\
  !*** ./src/app/trip-direction/select-direction/select-direction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectDirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDirectionComponent", function() { return SelectDirectionComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/trip-direction.actions */ "k/2q");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _trip_direction_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trip-direction.model */ "SAvh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















const _c0 = ["startPointInput"];
const _c1 = ["endPointInput"];
const _c2 = ["nameText"];
function SelectDirectionComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", start_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", start_r9.name, " ");
} }
function SelectDirectionComponent_div_18_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r10.directionForm.get("startPointControl").errors.invalidMsg, "");
} }
function SelectDirectionComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectDirectionComponent_div_18_p_1_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.directionForm.get("startPointControl").errors.invalidMsg);
} }
function SelectDirectionComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const end_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", end_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", end_r11.name, " ");
} }
function SelectDirectionComponent_div_31_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r12.directionForm.get("endPointControl").errors.invalidMsg, "");
} }
function SelectDirectionComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectDirectionComponent_div_31_p_1_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.directionForm.get("endPointControl").errors.invalidMsg);
} }
const _c3 = function (a0, a1) { return { "searchMode": a0, "deliveryMode": a1 }; };
class SelectDirectionComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.modes = _trip_direction_model__WEBPACK_IMPORTED_MODULE_6__["Modes"];
        this.startSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.endSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnDestroy() { }
    ngOnInit() {
        this.mode = _trip_direction_model__WEBPACK_IMPORTED_MODULE_6__["Modes"].SEARCH;
        this.startPointAutoComplete = [];
        this.endPointAutoComplete = [];
        this.setForm();
        this.startPoint = { id: 0, name: '' };
        this.endPoint = { id: 0, name: '' };
        this.defineRouterParams();
        this.stateSubscription = this.store
            .select('directions')
            .subscribe((state) => {
            this.startPointAutoComplete = state.startPointAutoComplete;
            this.endPointAutoComplete = state.endPointAutoComplete;
            this.mode = state.mode;
        });
        this.pointsSubscription();
        this.router.events.subscribe((res) => console.log('rout'));
    }
    // autocomplete is invoked
    onInput(str, type) {
        const point = { name: str, type: type };
        if (type === 'from' &&
            this.directionForm.get('startPointControl').valid &&
            str.length > 0) {
            this.startPoint = { id: 0, name: '' };
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetAutocomplete"](point));
        }
        else if (type === 'to' &&
            this.directionForm.get('endPointControl').valid &&
            str.length > 0) {
            this.endPoint = { id: 0, name: '' };
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetAutocomplete"](point));
        }
    }
    onSubmit() {
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetRouts"]());
    }
    optionSelected(point, type) {
        if (type == 'from') {
            this.startSubj.next(point);
        }
        else if (type === 'to') {
            this.endSubj.next(point);
        }
    }
    cleanForm() {
        this.directionForm.reset();
        this.startPoint = { id: 0, name: '' };
        this.endPoint = { id: 0, name: '' };
        this.startPointAutoComplete = [];
        this.endPointAutoComplete = [];
        this.directionForm.markAsUntouched();
        this.directionForm.markAsPristine();
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["CleanData"](false));
    }
    onCleanInput(point) {
        if (point === 'start') {
            this.startPoint = { id: 0, name: '' };
            this.startPointAutoComplete = [];
            this.directionForm.patchValue({
                startPointControl: '',
            });
            this.directionForm.get('startPointControl').markAsUntouched();
            this.directionForm.get('startPointControl').markAsPristine();
            this.directionForm.get('startPointControl').valid;
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetStartPointAutocomplete"]([]));
            this.startPointInputEl.nativeElement.focus();
        }
        else {
            this.endPoint = { id: 0, name: '' };
            this.endPointAutoComplete = [];
            this.directionForm.patchValue({
                endPointControl: '',
            });
            this.directionForm.get('endPointControl').markAsUntouched();
            this.directionForm.get('endPointControl').markAsPristine();
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetEndPointAutocomplete"]([]));
            this.directionForm.get('endPointControl').valid;
            this.endPointInputEl.nativeElement.focus();
        }
    }
    /*  notInStartListValidator(control: FormControl): { [s: string]: boolean } {
     if (this.startPointAutoComplete.length > 0) {
        const arr = this.startPointAutoComplete.map((point) =>
          point.name.toLocaleLowerCase()
        );
        if (arr.indexOf(control.value.toLowerCase()) == -1) {
          return { notInList: true };
        }
      }
  
      return null;
    } */
    /*   notInStartListValidatorAsync(
      control: FormControl
    ): Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve, reset) => {
        if (this.startPointAutoComplete.length > 0) {
          const arr = this.startPointAutoComplete.map((point) =>
            point.name.toLocaleLowerCase()
          );
          if (arr.indexOf(control.value.toLowerCase()) == -1) {
            resolve({ notInList: true });
          }
        } else {
          resolve(null);
        }
      });
      return promise;
    } */
    notInEndListValidator(control) {
        return null;
    }
    onFocusOut(event) {
        if (event.target.attributes.formControlName.value === 'startPointControl') {
            if (this.startPoint.name === '') {
                if (this.startPointAutoComplete.length === 0) {
                    this.directionForm.patchValue({
                        startPointControl: '',
                    });
                    this.directionForm.get('startPointControl').markAsUntouched();
                    return;
                }
                this.startSubj.next(this.startPointAutoComplete[0]);
            }
        }
        else if (event.target.attributes.formControlName.value === 'endPointControl') {
            if (this.endPoint.name === '') {
                if (this.endPointAutoComplete.length === 0) {
                    this.directionForm.patchValue({
                        endPointControl: '',
                    });
                    this.directionForm.get('endPointControl').markAsUntouched();
                    return;
                }
                this.endSubj.next(this.endPointAutoComplete[0]);
            }
        }
    }
    setForm() {
        this.directionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            startPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                this.patternValid({
                    pattern: /[a-zA-Z0-9\-\s]/,
                    msg: 'Sorry, only Latin names are allowed',
                }),
            ]),
            endPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                this.patternValid({
                    pattern: /[a-zA-Z0-9\-\s]/,
                    msg: 'Sorry, only Latin names are allowed',
                }),
            ]),
        });
    }
    patternValid(config) {
        return (control) => {
            let urlRegEx = config.pattern;
            if (control.value) {
            }
            if (control.value && !control.value.match(urlRegEx)) {
                return {
                    invalidMsg: config.msg,
                };
            }
            else {
                return null;
            }
        };
    }
    defineRouterParams() {
        this.route.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length === 0 &&
                queryParams.constructor === Object &&
                this.directionForm) {
                this.cleanForm();
            }
            else {
                this.startPoint = {
                    id: queryParams.fromID,
                    name: queryParams.from,
                };
                this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetStartPoint"](Object.assign({}, this.startPoint)));
                this.endPoint = {
                    id: queryParams.toID,
                    name: queryParams.to,
                };
                this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetEndPoint"](Object.assign({}, this.endPoint)));
                this.setForm();
                this.directionForm.setValue({
                    startPointControl: this.startPoint.name,
                    endPointControl: this.endPoint.name,
                });
                this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetRouts"]());
            }
        });
    }
    pointsSubscription() {
        this.startSubj.subscribe((res) => {
            if (typeof res == 'string') {
                this.startPoint = this.startPointAutoComplete.filter((p) => p.name === res)[0];
            }
            else {
                this.startPoint = res;
                this.directionForm.patchValue({
                    startPointControl: this.startPoint.name,
                });
            }
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetStartPoint"](Object.assign({}, this.startPoint)));
        });
        this.endSubj.subscribe((res) => {
            if (typeof res == 'string') {
                this.endPoint = this.endPointAutoComplete.filter((p) => p.name === res)[0];
            }
            else {
                this.endPoint = res;
                this.directionForm.patchValue({
                    endPointControl: this.endPoint.name,
                });
            }
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetEndPoint"](Object.assign({}, this.endPoint)));
        });
    }
}
SelectDirectionComponent.ɵfac = function SelectDirectionComponent_Factory(t) { return new (t || SelectDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
SelectDirectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectDirectionComponent, selectors: [["app-select-direction"]], viewQuery: function SelectDirectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.startPointInputEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.endPointInputEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nameParagraph = _t.first);
    } }, decls: 38, vars: 21, consts: [[1, "mainContainer", 3, "ngClass"], [1, "message"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "formInfo"], [1, "input"], [1, "startPoint"], ["type", "text", "placeholder", "From", "aria-label", "Number", "matInput", "", "formControlName", "startPointControl", 3, "matAutocomplete", "focusout", "input"], ["startPointInput", ""], [1, "single-autocomplete", 3, "optionSelected"], ["auto1", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matTooltip", "Remove StartPoint", 1, "material-icons", 3, "click"], ["class", "error", 4, "ngIf"], [1, "material-icons", "arrows"], [1, "endPoint"], ["type", "text", "placeholder", "To", "aria-label", "Number", "matInput", "", "formControlName", "endPointControl", 3, "matAutocomplete", "focusout", "input"], ["endPointInput", ""], ["auto2", "matAutocomplete"], ["matTooltip", "Remove EndPoint", 1, "material-icons", 3, "click"], [1, "actions"], ["mat-flat-button", "", "color", "accent", "type", "reset", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["sBtn", ""], [3, "value"], [1, "error"], [4, "ngIf"]], template: function SelectDirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Discover the cheapest way ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "to get anywhere combining plane, train, bus and rideshare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SelectDirectionComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function SelectDirectionComponent_Template_input_focusout_11_listener($event) { return ctx.onFocusOut($event); })("input", function SelectDirectionComponent_Template_input_input_11_listener($event) { return ctx.onInput($event.target.value, "from"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-autocomplete", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SelectDirectionComponent_Template_mat_autocomplete_optionSelected_13_listener($event) { return ctx.optionSelected($event.option.value, "from"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SelectDirectionComponent_mat_option_15_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_span_click_16_listener() { return ctx.onCleanInput("start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SelectDirectionComponent_div_18_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " double_arrow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function SelectDirectionComponent_Template_input_focusout_24_listener($event) { return ctx.onFocusOut($event); })("input", function SelectDirectionComponent_Template_input_input_24_listener($event) { return ctx.onInput($event.target.value, "to"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-autocomplete", 8, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SelectDirectionComponent_Template_mat_autocomplete_optionSelected_26_listener($event) { return ctx.optionSelected($event.option.value, "to"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SelectDirectionComponent_mat_option_28_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_span_click_29_listener() { return ctx.onCleanInput("end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SelectDirectionComponent_div_31_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_button_click_33_listener() { return ctx.cleanForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Clear form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Let's go");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c3, ctx.mode === ctx.modes.SEARCH, ctx.mode === ctx.modes.DELIVERY));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@insertRemoveTrigger1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.directionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("valid", ctx.directionForm.get("startPointControl").valid && ctx.directionForm.get("startPointControl").touched)("invalid", ctx.directionForm.get("startPointControl").invalid && ctx.directionForm.get("startPointControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.startPointAutoComplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.directionForm.get("startPointControl").valid && (ctx.directionForm.get("startPointControl").pristine || ctx.directionForm.get("startPointControl").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("valid", ctx.directionForm.get("endPointControl").valid && ctx.directionForm.get("endPointControl").touched)("invalid", ctx.directionForm.get("endPointControl").invalid && ctx.directionForm.get("endPointControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.endPointAutoComplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.directionForm.get("endPointControl").valid && (ctx.directionForm.get("endPointControl").pristine || ctx.directionForm.get("endPointControl").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.endPoint.name.length < 1 || ctx.startPoint.name.length < 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nmat-option[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  height: 40px;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  height: auto;\n  box-sizing: border-box;\n  position: relative;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  margin: 0.5rem auto 0.5rem;\n  padding: 0;\n  color: var(--color-accent);\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem auto;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem auto 0.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-warn);\n  font-style: italic;\n  padding-left: 3rem;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: grey;\n  cursor: pointer;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border-left: 3px solid var(--color-accent);\n  padding-left: 0.5rem;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.valid[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.invalid[_ngcontent-%COMP%] {\n  border-color: var(--color-warn);\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n  height: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 6rem;\n  margin: 0 2rem;\n}\n\ndiv.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  height: 2.5rem;\n}\n\n@media screen and (min-width: 1280px) and (max-width: 1919.99px) {\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n\n  div.searchMode[_ngcontent-%COMP%]   .mat-autocomplete[_ngcontent-%COMP%]   .autocomplete[_ngcontent-%COMP%] {\n    height: 50% !important;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.searchMode[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 98%;\n  }\n  div.searchMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    position: relative;\n    top: 1rem;\n  }\n  div.searchMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: block;\n    width: 90%;\n    margin: auto;\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    top: -0.5rem;\n    width: 100%;\n    flex-direction: column;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    flex-direction: column;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    margin: auto;\n    position: relative;\n    padding-left: 0.4rem;\n    border: none;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field.startPoint[_ngcontent-%COMP%] {\n    top: 0.5rem;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    align-self: center;\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    height: auto;\n    align-items: flex-start;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    border: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0.5rem auto 0;\n    position: relative;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    position: relative;\n    border-left: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n@media screen and (min-width: 360px) and (max-width: 419.99px) {\n  div.searchMode[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 98%;\n  }\n  div.searchMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    margin-top: 0;\n    position: relative;\n    top: 1rem;\n  }\n  div.searchMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: block;\n    width: 90%;\n    margin: auto;\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    top: -0.5rem;\n    width: 100%;\n    flex-direction: column;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    flex-direction: column;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    margin: auto;\n    position: relative;\n    padding-left: 0.4rem;\n    border: none;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.startPoint[_ngcontent-%COMP%] {\n    top: 0.5rem;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    height: auto;\n    align-items: flex-start;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0.5rem auto 0;\n    position: relative;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    position: relative;\n    border: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: relative;\n    left: -1rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi9zZWxlY3QtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSwwQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFDRTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQURKOztBQUVJO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUFOOztBQUNNO0VBQ0UsVUFBQTtBQUNSOztBQUNVO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ1o7O0FBR1E7RUFDRSxXQUFBO0VBRUEsYUFBQTtBQUZWOztBQUdVO0VBRUUsV0FBQTtFQUNBLGVBQUE7QUFGWjs7QUFLVTtFQUNFLFdBQUE7RUNsRFYsc0JEbUQ2QjtFQUNuQiwwQ0FBQTtFQUNBLG9CQUFBO0FBRlo7O0FDL0NFO0VBQ0Usb0JBQUE7RUFDQSwyQkRrRCtCO0VDakQvQixlRGlEcUQ7RUNoRHJELG1CRGdEMkQ7RUMvQzNELG1CRCtDbUU7QUFFdkU7O0FDL0NFO0VBQ0UsNEJBQUE7RUFDQSwyQkQyQytCO0VDMUMvQixlRDBDcUQ7RUN6Q3JELG1CRHlDMkQ7RUN4QzNELG1CRHdDbUU7QUFTdkU7O0FDL0NFO0VBQ0Usd0JBQUE7RUFDQSwyQkRvQytCO0VDbkMvQixlRG1DcUQ7RUNsQ3JELG1CRGtDMkQ7RUNqQzNELG1CRGlDbUU7QUFnQnZFOztBQy9DRTtFQUNFLDBCQUFBO0VBQ0EsMkJENkIrQjtFQzVCL0IsZUQ0QnFEO0VDM0JyRCxtQkQyQjJEO0VDMUIzRCxtQkQwQm1FO0FBdUJ2RTs7QUFwQlU7RUFDRSxpQ0FBQTtBQXNCWjs7QUFuQlU7RUFDRSwrQkFBQTtBQXFCWjs7QUFqQk07RUFDRSwyQkFBQTtBQW1CUjs7QUFmSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBaUJOOztBQWhCTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBa0JSOztBQVZJO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBYU47O0FDMURFO0VEcURJO0lBQ0UsZ0JBQUE7RUFTTjs7RUFGSTtJQUNFLGlCQUFBO0VBS047QUFDRjs7QUMvQkU7RUQrQkE7SUFDRSxVQUFBO0VBR0Y7RUFESTtJQUNFLGlCQUFBO0VBR047O0VBRUU7SUFDRSxzQkFBQTtFQUNKO0FBQ0Y7O0FDWkU7RURnQkE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQURGO0VBRUU7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFBSjtFQUNJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBQ047RUFFRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtFQUFKO0VBQ0k7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQUNOO0VBQU07SUFDRSxXQUFBO0VBRVI7RUFBVTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtFQUVaO0VBQVU7SUFDRSxXQUFBO0VBRVo7RUFFTTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0Esd0JBQUE7RUFEUjtFQUlJO0lBQ0UsWUFBQTtJQUNBLHVCQUFBO0VBRk47O0VBT0E7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFKRjtFQUtFO0lBQ0UsYUFBQTtFQUhKO0VBUU07SUFDRSxrQkFBQTtFQU5SO0VBUVU7SUFDRSxZQUFBO0VBTlo7RUFZSTtJQUNFLFNBQUE7RUFWTjtFQVlJO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7RUFWTjtFQVlNO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQVZSO0VBWU07SUFDRSxpQkFBQTtFQVZSO0FBQ0Y7O0FDakdDO0VEa0hDO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFkRjtFQWVFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtFQWJKO0VBY0k7SUFDRSxjQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFaTjtFQWVFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0VBYko7RUFjSTtJQUNFLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0VBWk47RUFhTTtJQUNFLFdBQUE7RUFYUjtFQWFVO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0VBWFo7RUFhVTtJQUNFLFdBQUE7RUFYWjtFQWVNO0lBQ0Usa0JBQUE7SUFDQSx3QkFBQTtFQWJSO0VBZ0JJO0lBQ0UsWUFBQTtJQUNBLHVCQUFBO0VBZE47O0VBbUJBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBaEJGO0VBaUJFO0lBQ0UsYUFBQTtFQWZKO0VBbUJJO0lBQ0UsU0FBQTtFQWpCTjtFQW1CSTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0VBakJOO0VBb0JVO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBbEJaO0VBb0JVO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUFsQlo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3NlbGVjdC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5tYXQtb3B0aW9uIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuZGl2Lm1haW5Db250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXYubWVzc2FnZSB7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMC41cmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBkaXYuZXJyb3Ige1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuKTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgIC8vIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBib3hTaXppbmcoYm9yZGVyLWJveCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIodmFyKC0tY29sb3ItcHJpbWFyeSksIDJyZW0sIG5vcm1hbCwgY3Vyc2l2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1hdC1mb3JtLWZpZWxkLnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1hdC1mb3JtLWZpZWxkLmludmFsaWQge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXdhcm4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzcGFuLmFycm93cyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmRpdi5kZWxpdmVyeU1vZGUge1xyXG4gIGZvcm0ge1xyXG4gICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBMYXJnZSB7XHJcbiAgZGl2Lm1haW5Db250YWluZXIge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIGRpdi5hY3Rpb25zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuZGVsaXZlcnlNb2RlIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQGluY2x1ZGUgU21hbGwge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXYubWVzc2FnZSB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkaXYuc2VhcmNoTW9kZSB7XHJcbiAgICAubWF0LWF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlIHtcclxuICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBkaXYuc2VhcmNoTW9kZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgZGl2Lm1lc3NhZ2Uge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMXJlbTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0wLjVyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZC5zdGFydFBvaW50IHtcclxuICAgICAgICAgICAgICB0b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLmFycm93cyB7XHJcbiAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBkaXYubWVzc2FnZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICBkaXYuaW5wdXQge1xyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFBob25lcyB7XHJcbiAgZGl2LnNlYXJjaE1vZGUge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGRpdi5tZXNzYWdlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDFyZW07XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMC41cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZGl2LmZvcm1JbmZvIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXYuaW5wdXQge1xyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQuc3RhcnRQb2ludCB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhbi5hcnJvd3Mge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuZGVsaXZlcnlNb2RlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGRpdi5tZXNzYWdlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gYXV0byAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgIGRpdi5pbnB1dCB7XHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMXJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAvLyAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcclxuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcclxuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuQG1peGluIFhMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTWVkaXVtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIFRhYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBYU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gUGhvbmVzIHtcclxuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDQxOS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGxwaG9uZXMge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbiB9XHJcblxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger1', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger2', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms 1300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectDirectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-select-direction',
                templateUrl: './select-direction.component.html',
                styleUrls: ['./select-direction.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms 1300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { startPointInputEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['startPointInput', { static: false }]
        }], endPointInputEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['endPointInput', { static: false }]
        }], nameParagraph: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['nameText', { static: false }]
        }] }); })();


/***/ }),

/***/ "dZhj":
/*!*********************************************************!*\
  !*** ./src/app/trip-direction/trip-direction.module.ts ***!
  \*********************************************************/
/*! exports provided: TripDirectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionModule", function() { return TripDirectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-direction/select-direction.component */ "dUNL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _trip_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-direction.component */ "jEWW");
/* harmony import */ var _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-direction-routing.module */ "SqVX");








class TripDirectionModule {
}
TripDirectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TripDirectionModule });
TripDirectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TripDirectionModule_Factory(t) { return new (t || TripDirectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__["TripDirectionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TripDirectionModule, { declarations: [_select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_2__["SelectDirectionComponent"], _trip_direction_component__WEBPACK_IMPORTED_MODULE_5__["TripDirectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__["TripDirectionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_2__["SelectDirectionComponent"], _trip_direction_component__WEBPACK_IMPORTED_MODULE_5__["TripDirectionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__["TripDirectionRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "gX/U":
/*!*************************************************************!*\
  !*** ./src/app/authors/data-table/data-table-datasource.ts ***!
  \*************************************************************/
/*! exports provided: DataTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDataSource", function() { return DataTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class DataTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor() {
        super();
        this.data = EXAMPLE_DATA;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "ggAr":
/*!**************************************************************!*\
  !*** ./src/app/search-result/store/search-result.reducer.ts ***!
  \**************************************************************/
/*! exports provided: searchResultReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchResultReducer", function() { return searchResultReducer; });
/* harmony import */ var _search_result_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-result.actions */ "8EOA");

const initialState = {
    someVal: 'some attribute'
};
function searchResultReducer(state = initialState, action) {
    switch (action.type) {
        case _search_result_actions__WEBPACK_IMPORTED_MODULE_0__["SOME_ACTION"]:
            // do smth
            return Object.assign({}, state);
        default:
            return state;
    }
}


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "STbY");

























class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jEWW":
/*!************************************************************!*\
  !*** ./src/app/trip-direction/trip-direction.component.ts ***!
  \************************************************************/
/*! exports provided: TripDirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionComponent", function() { return TripDirectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/trip-direction.actions */ "k/2q");
/* harmony import */ var _trip_direction_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-direction.model */ "SAvh");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-direction/select-direction.component */ "dUNL");












class TripDirectionComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    onPopState(event) {
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__["SetMode"](_trip_direction_model__WEBPACK_IMPORTED_MODULE_4__["Modes"].SEARCH));
    }
    ngOnInit() { }
    toHomePage() {
        this.router.navigate(['/']);
    }
}
TripDirectionComponent.ɵfac = function TripDirectionComponent_Factory(t) { return new (t || TripDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TripDirectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TripDirectionComponent, selectors: [["app-trip-direction"]], hostBindings: function TripDirectionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popstate", function TripDirectionComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 11, vars: 0, consts: [["color", "primary", "role", "heading"], [1, "slogan"], [1, "spacer"], ["mat-button", "", 3, "click"], [1, "material-icons"]], template: function TripDirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHEAP TRIP. PAY LESS, VISIT MORE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TripDirectionComponent_Template_button_click_6_listener() { return ctx.toHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-select-direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_7__["SelectDirectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9em;\n  color: white;\n  margin: 0%;\n  line-height: 1.5rem;\n  font-family: \"Anton\", sans-serif;\n  font-style: italic;\n  font-weight: lighter;\n  letter-spacing: 4px;\n}\n\n@media screen and (min-width: 360px) and (max-width: 419.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vdHJpcC1kaXJlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUN1R0M7RUQ5Rkc7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBTEo7QUFDRjs7QUNrR0U7RUR2RkU7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBUko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3RyaXAtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgJy4uLy4uL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2Nzcyc7XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbmRpdi5zbG9nYW4ge1xyXG4gIHAge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFBob25lcyB7XHJcbiAgZGl2LnNsb2dhbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBTbWFsbHBob25lcyB7XHJcbiAgZGl2LnNsb2dhbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcclxuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcclxuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuQG1peGluIFhMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTWVkaXVtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIFRhYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBYU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gUGhvbmVzIHtcclxuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDQxOS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGxwaG9uZXMge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbiB9XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trip-direction',
                templateUrl: './trip-direction.component.html',
                styleUrls: ['./trip-direction.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onPopState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:popstate', ['$event']]
        }] }); })();


/***/ }),

/***/ "k/2q":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.actions.ts ***!
  \****************************************************************/
/*! exports provided: SET_START_POINT, SET_END_POINT, GET_START_POINT, GET_END_POINT, GET_AUTOCOMPLETE, SET_START_POINT_AUTOCOMPLETE, SET_END_POINT_AUTOCOMPLETE, GET_ROUTS, SET_ROUTS, AUTOCOMPLETE_FAIL, CLEAN_DATA, SET_MODE, GO_HOME, SetStartPoint, SetEndPoint, GetStartPoint, GetEndPoint, GetAutocomplete, SetStartPointAutocomplete, SetEndPointAutocomplete, GetRouts, SetRouts, AutocompleteFail, CleanData, SetMode, GoHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_START_POINT", function() { return SET_START_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_END_POINT", function() { return SET_END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_START_POINT", function() { return GET_START_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_END_POINT", function() { return GET_END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTOCOMPLETE", function() { return GET_AUTOCOMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_START_POINT_AUTOCOMPLETE", function() { return SET_START_POINT_AUTOCOMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_END_POINT_AUTOCOMPLETE", function() { return SET_END_POINT_AUTOCOMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ROUTS", function() { return GET_ROUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ROUTS", function() { return SET_ROUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_FAIL", function() { return AUTOCOMPLETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_DATA", function() { return CLEAN_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MODE", function() { return SET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO_HOME", function() { return GO_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStartPoint", function() { return SetStartPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEndPoint", function() { return SetEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartPoint", function() { return GetStartPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEndPoint", function() { return GetEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutocomplete", function() { return GetAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStartPointAutocomplete", function() { return SetStartPointAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEndPointAutocomplete", function() { return SetEndPointAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRouts", function() { return GetRouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRouts", function() { return SetRouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteFail", function() { return AutocompleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanData", function() { return CleanData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMode", function() { return SetMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoHome", function() { return GoHome; });
const SET_START_POINT = '[TripDirection] Set startPoint';
const SET_END_POINT = '[TripDirection] Set endPoint';
const GET_START_POINT = '[TripDirection] Get startPoint';
const GET_END_POINT = '[TripDirection] Get endPoint';
const GET_AUTOCOMPLETE = '[TripDirection] Get Autocomplete';
const SET_START_POINT_AUTOCOMPLETE = '[TripDirection] Set startPointAutocomplete';
const SET_END_POINT_AUTOCOMPLETE = '[TripDirection] Set endPointAutocomplete';
const GET_ROUTS = '[TripDirection] Get Routs';
const SET_ROUTS = '[TripDirection] Set Routs';
const AUTOCOMPLETE_FAIL = '[TripDirection] Autocomplete Fail';
const CLEAN_DATA = '[TripDirection] Clean Data';
const SET_MODE = '[TripDirection] Set Mode';
const GO_HOME = '[TripDirection] Go Home';
class SetStartPoint {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_START_POINT;
    }
}
class SetEndPoint {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_END_POINT;
    }
}
class GetStartPoint {
    constructor() {
        this.type = GET_START_POINT;
    }
}
class GetEndPoint {
    constructor() {
        this.type = GET_END_POINT;
    }
}
class GetAutocomplete {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_AUTOCOMPLETE;
    }
}
class SetStartPointAutocomplete {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_START_POINT_AUTOCOMPLETE;
    }
}
class SetEndPointAutocomplete {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_END_POINT_AUTOCOMPLETE;
    }
}
class GetRouts {
    constructor() {
        this.type = GET_ROUTS;
    }
}
class SetRouts {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ROUTS;
    }
}
class AutocompleteFail {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTOCOMPLETE_FAIL;
    }
}
class CleanData {
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAN_DATA;
    }
}
class SetMode {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_MODE;
    }
}
class GoHome {
    constructor() {
        this.type = GO_HOME;
    }
}


/***/ }),

/***/ "krUe":
/*!**********************************************!*\
  !*** ./src/app/no-page/no-page.component.ts ***!
  \**********************************************/
/*! exports provided: NoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageComponent", function() { return NoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NoPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoPageComponent.ɵfac = function NoPageComponent_Factory(t) { return new (t || NoPageComponent)(); };
NoPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoPageComponent, selectors: [["app-no-page"]], decls: 3, vars: 0, consts: [[1, "mat-typography"]], template: function NoPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry, no such page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vLXBhZ2Uvbm8tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-no-page',
                templateUrl: './no-page.component.html',
                styleUrls: ['./no-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rFQM":
/*!***************************************************************!*\
  !*** ./src/app/search-result/search-result-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchResultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultRoutingModule", function() { return SearchResultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-result.component */ "AvlM");





const routes = [
    {
        path: '', component: _search_result_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultComponent"],
    },
];
class SearchResultRoutingModule {
}
SearchResultRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchResultRoutingModule });
SearchResultRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchResultRoutingModule_Factory(t) { return new (t || SearchResultRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchResultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "sCT4":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.reducer.ts ***!
  \****************************************************************/
/*! exports provided: tripDirectionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripDirectionReducer", function() { return tripDirectionReducer; });
/* harmony import */ var _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-direction.model */ "SAvh");
/* harmony import */ var _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-direction.actions */ "k/2q");


const initialState = {
    startPoint: { id: 0, name: '' },
    endPoint: { id: 0, name: '' },
    startPointAutoComplete: [],
    endPointAutoComplete: [],
    paths: [],
    mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].SEARCH,
    errorMessage: '',
    pathsAmount: 0,
    isLoading: false,
    reset: false,
    currentServer: 'server104',
    serverChanged: false
};
function tripDirectionReducer(state = initialState, action) {
    switch (action.type) {
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_START_POINT"]:
            return Object.assign(Object.assign({}, state), { startPoint: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_END_POINT"]:
            return Object.assign(Object.assign({}, state), { endPoint: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_START_POINT_AUTOCOMPLETE"]:
            let newStartAutocompleteList = [];
            if (action.payload.length === 0) {
                newStartAutocompleteList = [...state.startPointAutoComplete];
            }
            else {
                newStartAutocompleteList = action.payload;
            }
            return Object.assign(Object.assign({}, state), { startPointAutoComplete: newStartAutocompleteList });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_END_POINT_AUTOCOMPLETE"]:
            let newEndAutocompleteList = [];
            if (action.payload.length === 0) {
                newEndAutocompleteList = [...state.endPointAutoComplete];
            }
            else {
                newEndAutocompleteList = action.payload;
            }
            return Object.assign(Object.assign({}, state), { endPointAutoComplete: newEndAutocompleteList });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_START_POINT"]:
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_END_POINT"]:
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_AUTOCOMPLETE"]:
            if (state.reset) {
                return Object.assign(Object.assign({}, state), { reset: false });
            }
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ROUTS"]:
            return Object.assign(Object.assign({}, state), { isLoading: true });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_ROUTS"]:
            const pathsAmount = action.payload.paths.length;
            const length1 = action.payload.paths.reduce((sum, current) => {
                return sum + current.details.direct_paths.length;
            }, 0);
            const res = length1 + pathsAmount;
            return Object.assign(Object.assign({}, state), { paths: [...action.payload.paths], startPoint: action.payload.endPoints.from, endPoint: action.payload.endPoints.to, mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].DELIVERY, pathsAmount: res, isLoading: false });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["AUTOCOMPLETE_FAIL"]:
            let server = 'server68';
            if (state.currentServer == 'server104') {
                //  server = Server.SERVER104;
            }
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAN_DATA"]:
            const empty = { id: 0, name: '' };
            return Object.assign(Object.assign({}, state), { startPoint: empty, endPoint: empty, startPointAutoComplete: [], endPointAutoComplete: [], errorMessage: '' });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_MODE"]:
            return Object.assign(Object.assign({}, state), { mode: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GO_HOME"]:
            return Object.assign(Object.assign({}, state), { startPoint: { id: 0, name: '' }, endPoint: { id: 0, name: '' }, startPointAutoComplete: [], endPointAutoComplete: [], paths: [], mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].SEARCH, errorMessage: '', pathsAmount: 0, isLoading: false, reset: true });
        default:
            return state;
    }
}


/***/ }),

/***/ "ti1q":
/*!***********************************************************************!*\
  !*** ./src/app/search-result/path-details/capitalFirstLetter.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: CapitalFirstLetterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalFirstLetterPipe", function() { return CapitalFirstLetterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CapitalFirstLetterPipe {
    transform(value) {
        return value[0].toUpperCase() + value.substr(1).toLowerCase();
    }
}
CapitalFirstLetterPipe.ɵfac = function CapitalFirstLetterPipe_Factory(t) { return new (t || CapitalFirstLetterPipe)(); };
CapitalFirstLetterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "capitalFirstLetter", type: CapitalFirstLetterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalFirstLetterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'capitalFirstLetter' }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-page/no-page.component */ "krUe");






const routes = [
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    //  { path: 'main',component: HeaderComponent},
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    {
        path: 'search',
        //   canActivate: [SearchResultGuard],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./trip-direction/trip-direction.module */ "dZhj")).then((m) => m.TripDirectionModule),
    },
    /*  {
      path: '',
      component: HeaderComponent,
      children: [
        {
          path: 'search',
          //   canActivate: [SearchResultGuard],
          loadChildren: () =>
            import('./trip-direction/trip-direction.module').then(
              (m) => m.TripDirectionModule
            ),
        },
      ],
    }, */
    { path: '**', component: _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_3__["NoPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vrIs":
/*!*******************************************************!*\
  !*** ./src/app/search-result/search-result.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchResultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultModule", function() { return SearchResultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-result.component */ "AvlM");
/* harmony import */ var _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path-details/path-details.component */ "M1wl");
/* harmony import */ var _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path-map/path-map.component */ "RM3O");
/* harmony import */ var _path_details_capitalFirstLetter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path-details/capitalFirstLetter.pipe */ "ti1q");
/* harmony import */ var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-result-routing.module */ "rFQM");









class SearchResultModule {
}
SearchResultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchResultModule });
SearchResultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchResultModule_Factory(t) { return new (t || SearchResultModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchResultModule, { declarations: [_search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"],
        _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"],
        _path_details_capitalFirstLetter_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalFirstLetterPipe"],
        _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__["PathMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"],
                    _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"],
                    _path_details_capitalFirstLetter_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalFirstLetterPipe"],
                    _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__["PathMapComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
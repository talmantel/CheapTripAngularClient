(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-page/no-page.component */ "./src/app/no-page/no-page.component.ts");





const routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    {
        path: 'search',
        //   canActivate: [SearchResultGuard],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./trip-direction/trip-direction.module */ "./src/app/trip-direction/trip-direction.module.ts")).then((m) => m.TripDirectionModule),
    },
    { path: '**', component: _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_2__["NoPageComponent"] },
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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header/header.component */ "./src/app/header/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'CheapTrip';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nversion_1.2\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header/header.component */ "./src/app/header/header/header.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trip-direction/trip-direction.module */ "./src/app/trip-direction/trip-direction.module.ts");
/* harmony import */ var _trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trip-direction/store/trip-direction.effects */ "./src/app/trip-direction/store/trip-direction.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-result/search-result.module */ "./src/app/search-result/search-result.module.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./no-page/no-page.component */ "./src/app/no-page/no-page.component.ts");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
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
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__["TripDirectionEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _test_test_component__WEBPACK_IMPORTED_MODULE_15__["TestComponent"],
        _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_16__["NoPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__["TripDirectionModule"],
        _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__["SearchResultModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _test_test_component__WEBPACK_IMPORTED_MODULE_15__["TestComponent"],
                    _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_16__["NoPageComponent"],
                ],
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
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__["TripDirectionEffects"]])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/header/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../trip-direction/store/trip-direction.actions */ "./src/app/trip-direction/store/trip-direction.actions.ts");
/* harmony import */ var src_app_trip_direction_trip_direction_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/trip-direction/trip-direction.model */ "./src/app/trip-direction/trip-direction.model.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");










class HeaderComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
    }
    toHomePage() {
        this.store.dispatch(new _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__["SetMode"](src_app_trip_direction_trip_direction_model__WEBPACK_IMPORTED_MODULE_4__["Modes"].SEARCH));
        this.store.dispatch(new _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__["CleanData"]());
        this.route.navigate(["/"]);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, consts: [["color", "primary", "role", "heading"], ["src", "../../../assets/images/logo.jpg", "alt", "CheapTrip", "matTooltip", "Home", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_1_listener() { return ctx.toHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 4rem;\n  cursor: pointer;\n}\n\ndiv[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  display: block;\n}\n\np[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 95%;\n  margin: 2rem auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFESTtFQUNBLGNBQUE7QUFHSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Qsa0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6NHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5kaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgLm1hdGVyaWFsLWljb25zeyAgICAgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAgIFxyXG59XHJcbn1cclxuICAgIFxyXG4gICAgXHJcbnAge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46MnJlbSAgYXV0bztcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");























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
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"]] });
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
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"]] }); })();
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
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/no-page/no-page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/no-page/no-page.component.ts ***!
  \**********************************************/
/*! exports provided: NoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageComponent", function() { return NoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NoPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoPageComponent.ɵfac = function NoPageComponent_Factory(t) { return new (t || NoPageComponent)(); };
NoPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoPageComponent, selectors: [["app-no-page"]], decls: 2, vars: 0, template: function NoPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No such page");
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

/***/ "./src/app/search-result/path-details/capitalFirstLetter.pipe.ts":
/*!***********************************************************************!*\
  !*** ./src/app/search-result/path-details/capitalFirstLetter.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: CapitalFirstLetterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalFirstLetterPipe", function() { return CapitalFirstLetterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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

/***/ "./src/app/search-result/path-details/path-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/search-result/path-details/path-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: PathDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathDetailsComponent", function() { return PathDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");





function PathDetailsComponent_article_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", icon_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PathDetailsComponent_article_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r6);
} }
function PathDetailsComponent_article_0_section_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Duration: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const path_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", path_r7.from, " -> ", path_r7.to, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" By:\u2002", path_r7.transportation_type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", path_r7.euro_price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r7.duration_minutes);
} }
function PathDetailsComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PathDetailsComponent_article_0_ng_container_5_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PathDetailsComponent_article_0_span_12_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price:\u2002");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Duation:\u2002");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PathDetailsComponent_article_0_section_23_Template, 17, 5, "section", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rout_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expandedHeight", "110px")("collapsedHeight", "130px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.pathType.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rout_r1.pathType.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rout_r1.details.euro_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rout_r1.details.duration_minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details.direct_paths);
} }
class PathDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PathDetailsComponent.ɵfac = function PathDetailsComponent_Factory(t) { return new (t || PathDetailsComponent)(); };
PathDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathDetailsComponent, selectors: [["app-path-details"]], inputs: { paths: "paths", startPoint: "startPoint", endPoint: "endPoint" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "expandedHeight", "collapsedHeight"], ["class", "points", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "points"], [1, "spacer"]], template: function PathDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PathDetailsComponent_article_0_Template, 24, 8, "article", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paths);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"]], styles: [":host {\n  width: 100%;\n  position: relative;\n  height: auto;\n}\n\n/* article {\n  width: 95%;\n  margin: 0.5rem auto;\n  padding: 0.5rem;\n  background-color: rgba(202, 199, 199, 0.479);\n  section {\n    border-bottom: 1px grey dashed;\n    padding: 0.5rem;\n    h4 {\n      color: blue;\n      font-weight: 800;\n    }\n    div {\n      display: flex;\n      justify-content: flex-start;\n      p {\n        span {\n          font-weight: 600;\n        }\n      }\n      span.spacer {\n        flex: 1 1 auto;\n      }\n    }\n  }\n  section:last-child {\n    border: none;\n  }\n  section.totalInfo {\n    box-shadow: 1px 1px 2px 3px rgba(128, 145, 230, 0.5);\n    background-color: whitesmoke;\n    border: none;\n   border-radius: 3px ;\n  }\n}\n */\n\nh3 {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  color: blue;\n  height: 2em;\n  background-color: rgba(219, 224, 223, 0.2);\n  position: relative;\n  top: 6px;\n}\n\np span.points {\n  font-style: oblique;\n  font-weight: bold;\n}\n\np span.points:after {\n  content: \" -> \";\n}\n\np span.points:last-child:after {\n  content: \"\";\n}\n\n@media screen and (max-width: 650px) and (orientation: portrait) {\n  article {\n    width: 100%;\n    background-color: rgba(219, 224, 223, 0.2);\n    height: auto;\n  }\n  article mat-accordion {\n    width: 100%;\n    height: inherit;\n  }\n  article mat-accordion mat-expansion-panel {\n    padding: 0;\n    width: 100%;\n  }\n  article mat-accordion mat-expansion-panel mat-expansion-panel-header {\n    padding: 0;\n    align-items: stretch !important;\n  }\n  article mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-title {\n    background-color: #cecdcd;\n    padding: 1em;\n    box-sizing: content-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n  article mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-title span {\n    margin: 0;\n    padding: 0;\n  }\n  article mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-title span span.material-icons {\n    color: blue;\n    margin: 0;\n  }\n  article mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-description {\n    font-weight: 400;\n    box-sizing: content-box;\n    width: 100%;\n  }\n  article mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-description div {\n    margin: 0;\n    padding: 0;\n  }\n  article mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-description div p:first-child {\n    color: blue;\n    padding-top: 1em;\n  }\n  article mat-accordion mat-expansion-panel section {\n    margin-top: 1rem;\n    background-color: rgba(206, 205, 205, 0.884);\n    padding: 5px;\n    border-bottom: 1px solid grey;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLWRldGFpbHMvcGF0aC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztBQW9DQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUVBLDBDQUFBO0lBQ0EsWUFBQTtFQUNGO0VBQUU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUVKO0VBREk7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQUdOO0VBRk07SUFDRSxVQUFBO0lBQ0EsK0JBQUE7RUFJUjtFQUhRO0lBQ0UseUJBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSwyQkFBQTtJQUNBLHVCQUFBO0VBS1Y7RUFKVTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBTVo7RUFMWTtJQUNFLFdBQUE7SUFDQSxTQUFBO0VBT2Q7RUFIUTtJQUNFLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VBS1Y7RUFKVTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBTVo7RUFMWTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQU9kO0VBRk07SUFDRSxnQkFBQTtJQUNBLDRDQUFBO0lBQ0EsWUFBQTtJQUNBLDZCQUFBO0VBSVI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvcGF0aC1kZXRhaWxzL3BhdGgtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi8qIGFydGljbGUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDE5OSwgMTk5LCAwLjQ3OSk7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ3JleSBkYXNoZWQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBwIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNwYW4uc3BhY2VyIHtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZWN0aW9uOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBzZWN0aW9uLnRvdGFsSW5mbyB7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAzcHggcmdiYSgxMjgsIDE0NSwgMjMwLCAwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgYm9yZGVyLXJhZGl1czogM3B4IDtcclxuICB9XHJcbn1cclxuICovXHJcbmgzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBjb2xvcjogYmx1ZTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjQsIDIyMywgMC4yKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA2cHg7XHJcbn1cclxuXHJcbnAgc3Bhbi5wb2ludHN7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5wIHNwYW4ucG9pbnRzOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiAtPiBcIjtcclxufVxyXG5cclxuXHJcbnAgc3Bhbi5wb2ludHM6bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgYXJ0aWNsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjQsIDIyMywgMC4yKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hdC1hY2NvcmRpb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWF0LXBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA1LCAyMDUpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBzcGFuLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjA1LCAyMDUsIDAuODg0KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-details',
                templateUrl: './path-details.component.html',
                styleUrls: ['./path-details.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, { paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/search-result/path-map/path-map.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/search-result/path-map/path-map.component.ts ***!
  \**************************************************************/
/*! exports provided: PathMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathMapComponent", function() { return PathMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");






class PathMapComponent {
    constructor() {
    }
    ngOnInit() {
        this.initilizeMap();
    }
    initilizeMap() {
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_1__["default"]({
            target: 'map',
            layers: [
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_4__["default"]()
                })
            ],
            view: new ol_View__WEBPACK_IMPORTED_MODULE_2__["default"]({
                center: [37.41, 8.82],
                zoom: 4
            })
        });
    }
}
PathMapComponent.ɵfac = function PathMapComponent_Factory(t) { return new (t || PathMapComponent)(); };
PathMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathMapComponent, selectors: [["app-path-map"]], decls: 1, vars: 0, consts: [["lang", "en"]], template: function PathMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "html", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvcGF0aC1tYXAvcGF0aC1tYXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-map',
                templateUrl: './path-map.component.html',
                styleUrls: ['./path-map.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/search-result/search-result-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/search-result/search-result-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchResultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultRoutingModule", function() { return SearchResultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-result.component */ "./src/app/search-result/search-result.component.ts");





const routes = [
    {
        path: "",
        component: _search_result_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultComponent"],
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

/***/ "./src/app/search-result/search-result.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path-details/path-details.component */ "./src/app/search-result/path-details/path-details.component.ts");
/* harmony import */ var _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path-map/path-map.component */ "./src/app/search-result/path-map/path-map.component.ts");









class SearchResultComponent {
    constructor(breakpointObserver, store) {
        this.store = store;
        this.colsAmount = 7;
        // reference information: available resolutions
        this.viewportSizes = [
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Web,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Tablet,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait,
        ];
        breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait])
            .subscribe((state) => {
        });
        breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
        ])
            .subscribe((state) => {
            this.grids = this.getGridsSize(breakpointObserver);
        });
    }
    ngOnInit() {
        this.getPathsSubscription = this.store
            .select('directions')
            .subscribe((state) => {
            this.paths = state.paths;
        });
    }
    ngOnDestroy() {
        this.getPathsSubscription.unsubscribe;
    }
    getGridsSize(obs) {
        let sizeTab = [];
        if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall) || obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small)) {
            sizeTab = [
                { color: 'grey', cols: 7, rows: 2 },
                { color: 'blue', cols: 0, rows: 2 },
            ];
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium) ||
            obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large) ||
            obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge)) {
            sizeTab = [
                { color: 'grey', cols: 2, rows: 2 },
                { color: 'whitesmoke', cols: 5, rows: 2 },
            ];
        }
        return sizeTab;
    }
}
SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) { return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultComponent, selectors: [["app-search-result"]], decls: 5, vars: 10, consts: [["rowHeight", "600px", 3, "cols"], [1, "aside-grid", 3, "colspan", "rowspan"], [3, "paths"], [1, "main-grid", 3, "colspan", "rowspan"]], template: function SearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-path-details", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-path-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.colsAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.grids[0].color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.grids[0].cols)("rowspan", ctx.grids[0].rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paths", ctx.paths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.grids[1].color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.grids[1].cols)("rowspan", ctx.grids[1].rows);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"], _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__["PathMapComponent"]], styles: ["mat-grid-list[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 2rem auto;\n  height: auto;\n}\nmat-grid-list[_ngcontent-%COMP%]   .aside-grid[_ngcontent-%COMP%]    >   .mat-figure {\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSx1QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtbGlzdCB7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBtYXJnaW46MnJlbSBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAuYXNpZGUtZ3JpZCA+OjpuZy1kZWVwIC5tYXQtZmlndXJle1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-result',
                templateUrl: './search-result.component.html',
                styleUrls: ['./search-result.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search-result/search-result.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/search-result/search-result.guard.ts ***!
  \******************************************************/
/*! exports provided: SearchResultGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultGuard", function() { return SearchResultGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class SearchResultGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate(route, state) {
        return this.store.select('directions').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log("guard", res);
            console.log("guard", !res.startPoint);
            console.log("guard", !!res.startPoint);
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

/***/ "./src/app/search-result/search-result.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/search-result/search-result.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchResultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultModule", function() { return SearchResultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-result.component */ "./src/app/search-result/search-result.component.ts");
/* harmony import */ var _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path-details/path-details.component */ "./src/app/search-result/path-details/path-details.component.ts");
/* harmony import */ var _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path-map/path-map.component */ "./src/app/search-result/path-map/path-map.component.ts");
/* harmony import */ var _path_details_capitalFirstLetter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path-details/capitalFirstLetter.pipe */ "./src/app/search-result/path-details/capitalFirstLetter.pipe.ts");
/* harmony import */ var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-result-routing.module */ "./src/app/search-result/search-result-routing.module.ts");









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

/***/ "./src/app/search-result/store/search-result.actions.ts":
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

/***/ "./src/app/search-result/store/search-result.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/search-result/store/search-result.reducer.ts ***!
  \**************************************************************/
/*! exports provided: searchResultReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchResultReducer", function() { return searchResultReducer; });
/* harmony import */ var _search_result_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-result.actions */ "./src/app/search-result/store/search-result.actions.ts");

const initialState = {
    someVal: "some attribute"
};
function searchResultReducer(state = initialState, action) {
    switch (action.type) {
        case _search_result_actions__WEBPACK_IMPORTED_MODULE_0__["SOME_ACTION"]:
            //do smth
            return Object.assign({}, state);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _trip_direction_store_trip_direction_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-direction/store/trip-direction.reducer */ "./src/app/trip-direction/store/trip-direction.reducer.ts");
/* harmony import */ var _search_result_store_search_result_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-result/store/search-result.reducer */ "./src/app/search-result/store/search-result.reducer.ts");


const appReducer = {
    directions: _trip_direction_store_trip_direction_reducer__WEBPACK_IMPORTED_MODULE_0__["tripDirectionReducer"],
    searchResult: _search_result_store_search_result_reducer__WEBPACK_IMPORTED_MODULE_1__["searchResultReducer"]
};


/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/trip-direction/select-direction/select-direction.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/trip-direction/select-direction/select-direction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectDirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDirectionComponent", function() { return SelectDirectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _trip_direction_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trip-direction.model */ "./src/app/trip-direction/trip-direction.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function SelectDirectionComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", start_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", start_r4.name, " ");
} }
function SelectDirectionComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const end_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", end_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", end_r5.name, " ");
} }
const _c0 = function (a0, a1) { return { "mainContainer searchMode": a0, "mainContainer deliveryMode": a1 }; };
class SelectDirectionComponent {
    constructor() {
        this.mode = _trip_direction_model__WEBPACK_IMPORTED_MODULE_2__["Modes"].SEARCH;
        this.changePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedPoints = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cleanData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modes = _trip_direction_model__WEBPACK_IMPORTED_MODULE_2__["Modes"];
    }
    ngOnInit() {
        [this.startPoint, this.endPoint] = [...this.points];
        this.directionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            startPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.startPoint.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.endPoint.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    onChangePoint(str, type) {
        const point = { name: str, type: type };
        this.changePoint.emit(point);
    }
    changeDirection() {
        [this.startPoint, this.endPoint] = [this.endPoint, this.startPoint];
        this.directionForm.controls['endPointControl'].setValue(this.endPoint.name);
        this.directionForm.controls['startPointControl'].setValue(this.startPoint.name);
    }
    onSubmit() {
        this.selectedPoints.emit([
            { id: this.startPoint.id, name: this.startPoint.name },
            { id: this.endPoint.id, name: this.endPoint.name }
        ]);
    }
    selectPoint(point, type) {
        if (type == 'start') {
            this.startPoint = {
                name: point,
                id: this.startPointAutoComplete.filter((item) => item.name == point)[0]
                    .id,
            };
        }
        else {
            this.endPoint = {
                name: point,
                id: this.endPointAutoComplete.filter((item) => item.name == point)[0]
                    .id,
            };
        }
    }
    cleanForm() {
        this.cleanData.emit(true);
    }
}
SelectDirectionComponent.ɵfac = function SelectDirectionComponent_Factory(t) { return new (t || SelectDirectionComponent)(); };
SelectDirectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectDirectionComponent, selectors: [["app-select-direction"]], inputs: { points: "points", startPointAutoComplete: "startPointAutoComplete", endPointAutoComplete: "endPointAutoComplete", mode: "mode" }, outputs: { changePoint: "changePoint", selectedPoints: "selectedPoints", cleanData: "cleanData" }, decls: 22, vars: 9, consts: [[3, "ngClass"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "formInfo"], [1, "full-width"], ["type", "text", "placeholder", "From", "aria-label", "Number", "matInput", "", "formControlName", "startPointControl", 3, "matAutocomplete", "input"], [3, "optionSelected"], ["auto1", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "material-icons", 3, "click"], ["type", "text", "placeholder", "To", "aria-label", "Number", "matInput", "", "formControlName", "endPointControl", 3, "matAutocomplete", "input"], ["auto2", "matAutocomplete"], [1, "actions"], ["mat-flat-button", "", "color", "accent", "type", "reset", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [3, "value"]], template: function SelectDirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Discover the cheapest way to get anywhere by plane, train, bus and ride share altogether");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SelectDirectionComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SelectDirectionComponent_Template_input_input_6_listener($event) { return ctx.onChangePoint($event.target.value, "1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function SelectDirectionComponent_Template_mat_autocomplete_optionSelected_7_listener($event) { return ctx.selectPoint($event.option.value, "start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectDirectionComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_span_click_10_listener() { return ctx.changeDirection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " sync_alt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SelectDirectionComponent_Template_input_input_13_listener($event) { return ctx.onChangePoint($event.target.value, "2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-autocomplete", 5, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function SelectDirectionComponent_Template_mat_autocomplete_optionSelected_14_listener($event) { return ctx.selectPoint($event.option.value, "end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SelectDirectionComponent_mat_option_16_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_button_click_18_listener() { return ctx.cleanForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Clear form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Let's go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.mode === ctx.modes.SEARCH, ctx.mode === ctx.modes.DELIVERY));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.directionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.startPointAutoComplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.endPointAutoComplete);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  height: auto;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n}\n\ndiv.mainContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  font-family: \"Lobster\", cursive;\n  color: blue;\n}\n\n@media screen and (max-width: 650px) and (orientation: landscape) {\n  div.mainContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    background-color: rgba(219, 224, 223, 0.2);\n    width: 45%;\n    border-radius: 5px;\n    box-sizing: border-box;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n}\n\n@media screen and (max-width: 599px) and (orientation: portrait) {\n  div.searchMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    width: 95%;\n    margin: 2rem auto;\n    text-align: center;\n    font-size: 1.5rem;\n    line-height: 150%;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    background-color: rgba(219, 224, 223, 0.2);\n    margin: 0 auto;\n    padding: 0.5rem;\n    border-radius: 5px;\n    box-sizing: border-box;\n    width: 95%;\n    margin: auto;\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    align-self: center;\n    justify-self: baseline;\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    margin: 0.5rem auto;\n    flex-direction: row;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    box-sizing: border-box;\n    justify-content: center;\n    position: relative;\n    width: 100%;\n    margin: auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    background-color: rgba(219, 224, 223, 0.2);\n    width: 180px !important;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding-left: 1rem !important;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    border-radius: 50%;\n    top: 1.5em;\n    z-index: 10;\n    color: cornsilk;\n    background-color: blue;\n    padding: 0.5rem;\n    box-sizing: border-box;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  div.mainContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], div.searchMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    width: 70%;\n    margin: 2rem auto;\n    text-align: center;\n    font-size: 1.5rem;\n    line-height: 3rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%], div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    flex-direction: row;\n    width: 70%;\n    margin: auto;\n    box-sizing: border-box;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    background-color: rgba(219, 224, 223, 0.2);\n    margin: 0 auto;\n    padding: 0.5rem;\n    border-radius: 5px;\n    box-sizing: border-box;\n    width: 95%;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 3rem;\n    align-self: center;\n    justify-self: baseline;\n    text-align: center;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%], div.searchMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi9zZWxlY3QtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBRUE7RUFFSTtJQUNFLGlCQUFBO0VBQUo7RUFFRTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQUFKO0VBQ0k7SUFDRSwwQ0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VBQ047RUFDSTtJQUNFLFlBQUE7RUFDTjtBQUNGOztBQUdBO0VBR0k7SUFDRSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUhKO0VBS0U7SUFDRSxXQUFBO0lBQ0Esc0JBQUE7RUFISjtFQUlJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0VBRk47RUFHTTtJQUNFLDBDQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFEUjtFQUdNO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLHdCQUFBO0VBRFI7RUFJSTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VBRk47O0VBUUU7SUFDRSxhQUFBO0VBTEo7RUFPRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQUxKO0VBTUk7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQUpOO0VBS007SUFDRSwwQ0FBQTtJQUNBLHVCQUFBO0VBSFI7RUFJUTtJQUNFLDZCQUFBO0VBRlY7RUFLTTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQUhSO0VBTUk7SUFDRSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VBSk47QUFDRjs7QUFTQTtFQUdJOztJQUNFLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBUko7RUFXRTs7SUFDRSxXQUFBO0VBUko7RUFTSTs7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQU5OO0VBT007O0lBQ0UsMENBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUpSO0VBTU07O0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQUhSO0VBTUk7O0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQUhOOztFQVNFO0lBQ0UsYUFBQTtFQU5KO0VBUUU7SUFDRSxZQUFBO0VBTko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3NlbGVjdC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5kaXYubWFpbkNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgZGl2Lm1haW5Db250YWluZXIge1xyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIyNCwgMjIzLCAwLjIpO1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgZGl2LnNlYXJjaE1vZGUge1xyXG5cclxuICAgIHAge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIyNCwgMjIzLCAwLjIpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjI0LCAyMjMsIDAuMik7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgdG9wOiAxLjVlbTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGRpdi5hY3Rpb25zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyLFxyXG4gIGRpdi5zZWFyY2hNb2RlIHtcclxuICAgIHAge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjQsIDIyMywgMC4yKTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICBtYXJnaW46IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDirectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-direction',
                templateUrl: './select-direction.component.html',
                styleUrls: ['./select-direction.component.scss'],
            }]
    }], function () { return []; }, { points: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startPointAutoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endPointAutoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedPoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cleanData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/trip-direction/store/trip-direction.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.actions.ts ***!
  \****************************************************************/
/*! exports provided: SET_START_POINT, SET_END_POINT, GET_START_POINT, GET_END_POINT, GET_AUTOCOMPLETE, SET_START_POINT_AUTOCOMPLETE, SET_END_POINT_AUTOCOMPLETE, GET_ROUTS, SET_ROUTS, AUTOCOMPLETE_FAIL, CLEAN_DATA, SET_MODE, SetStartPoint, SetEndPoint, GetStartPoint, GetEndPoint, GetAutocomplete, SetStartPointAutocomplete, SetEndPointAutocomplete, GetRouts, SetRouts, AutoCompleteFail, CleanData, SetMode */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStartPoint", function() { return SetStartPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEndPoint", function() { return SetEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartPoint", function() { return GetStartPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEndPoint", function() { return GetEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutocomplete", function() { return GetAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStartPointAutocomplete", function() { return SetStartPointAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEndPointAutocomplete", function() { return SetEndPointAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRouts", function() { return GetRouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRouts", function() { return SetRouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteFail", function() { return AutoCompleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanData", function() { return CleanData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMode", function() { return SetMode; });
const SET_START_POINT = '[TripDirection] Set startPoint';
const SET_END_POINT = '[TripDirection] Set endartPoint';
const GET_START_POINT = '[TripDirection] Get startPoint';
const GET_END_POINT = '[TripDirection] Get endartPoint';
const GET_AUTOCOMPLETE = '[TripDirection] Get Autocomplete';
const SET_START_POINT_AUTOCOMPLETE = '[TripDirection] Set startPointAutocomplete';
const SET_END_POINT_AUTOCOMPLETE = '[TripDirection] Set endPointAutocomplete';
const GET_ROUTS = '[TripDirection] Get Routs';
const SET_ROUTS = '[TripDirection] Set Routs';
const AUTOCOMPLETE_FAIL = '[TripDirection] Autocomplete Fail';
const CLEAN_DATA = '[TripDirection] Clean Data';
const SET_MODE = '[TripDirection] Set Mode';
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
    constructor(payload) {
        this.payload = payload;
        this.type = GET_ROUTS;
    }
}
class SetRouts {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ROUTS;
    }
}
class AutoCompleteFail {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTOCOMPLETE_FAIL;
    }
}
class CleanData {
    constructor() {
        this.type = CLEAN_DATA;
    }
}
class SetMode {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_MODE;
    }
}


/***/ }),

/***/ "./src/app/trip-direction/store/trip-direction.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.effects.ts ***!
  \****************************************************************/
/*! exports provided: TripDirectionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionEffects", function() { return TripDirectionEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-direction.actions */ "./src/app/trip-direction/store/trip-direction.actions.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");















var Icons;
(function (Icons) {
    Icons["FLIGHT"] = "<span class=\"material-icons\">\n  flight\n  </span>";
    Icons["BUS"] = "<span class=\"material-icons\">\n  directions_bus\n  </span>";
    Icons["TRAIN"] = "<span class=\"material-icons\">\n  directions_railway\n  </span>";
    Icons["SUBWAY"] = "<span class=\"material-icons\">\n  directions_subway\n  </span>";
    Icons["SHIP"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["ONFOOT"] = "<span class=\"material-icons\">\n  directions_walk\n  </span>";
})(Icons || (Icons = {}));
const PATHMAP = new Map();
PATHMAP.set('mixed_routes', {
    type: 'Mixed Trip',
    icon: [Icons.BUS, Icons.FLIGHT],
});
PATHMAP.set('flying_routes', {
    type: 'Air Trip',
    icon: [Icons.FLIGHT],
});
PATHMAP.set('ground_routes', {
    type: 'Ground Trip',
    icon: [Icons.TRAIN, Icons.SUBWAY],
});
class TripDirectionEffects {
    constructor(actions$, sanitizer, http, router, route) {
        this.actions$ = actions$;
        this.sanitizer = sanitizer;
        this.http = http;
        this.router = router;
        this.route = route;
        this.getAutocomplete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["GET_AUTOCOMPLETE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url +
                'CheapTrip/getLocations?type=' +
                request.payload.type +
                '&search_name=' +
                encodeURIComponent(request.payload.name);
            return this.http.get(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                const newAction = request.payload.type == '1'
                    ? new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetStartPointAutocomplete"](res)
                    : new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetEndPointAutocomplete"](res);
                return newAction;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                const errorMessage = 'An unknown error occured!';
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteFail"](error));
            }));
        }));
        this.getRouts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["GET_ROUTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url +
                'CheapTrip/getRoute?format=json&from=' +
                request.payload[0].id +
                '&to=' +
                request.payload[1].id;
            return this.http.get(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                const resultPathArr = this.transformObject(res);
                const queryParams = {
                    from: request.payload[0].name,
                    to: request.payload[1].name,
                };
                this.router.navigate(['path', queryParams], {
                    relativeTo: this.route,
                });
                return new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetRouts"]({
                    paths: resultPathArr,
                    endPoints: queryParams,
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                const errorMessage = 'An unknown error occured!';
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteFail"](error));
            }));
        }));
        this.setRouts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SET_ROUTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.router.navigate(['/search/myPath'], {
                queryParams: res.payload.endPoints,
            });
        }));
    }
    transformObject(obj) {
        let objArr = [];
        for (let i in obj) {
            const transformedDetails = this.transformDetails(obj[i]);
            const testObj = {
                pathType: this.mapSanitazing().get(i),
                details: transformedDetails,
            };
            const newObj = { pathType: PATHMAP.get(i), details: transformedDetails };
            objArr.push(testObj);
        }
        return objArr;
    }
    transformDetails(obj) {
        const points = this.getPoints(obj.direct_paths);
        const newPaths = obj.direct_paths.map((item) => {
            return Object.assign(Object.assign({}, item), { duration_minutes: this.transformTime(+item.duration_minutes), euro_price: this.transformPrice(+item.euro_price) });
        });
        const newObj = {
            direct_paths: newPaths,
            euro_price: this.transformPrice(+obj.euro_price),
            duration_minutes: this.transformTime(+obj.duration_minutes),
            points: points
        };
        return newObj;
    }
    transformTime(minutes) {
        const days = Math.floor(minutes / 60 / 24);
        const dayStr = days == 0 ? '' : days == 1 ? days + ' day' : days + ' days';
        const hours = Math.floor(minutes / 60 - days * 24);
        const hourStr = hours == 0 ? '' : hours == 1 ? hours + ' hour' : hours + ' hours';
        const min = minutes - days * 24 * 60 - hours * 60;
        const minStr = min == 0 ? '' : min == 1 ? min + ' minute' : min + ' minutes';
        return dayStr + ' ' + hourStr + ' ' + minStr;
    }
    transformPrice(price) {
        const euro = Math.floor(+price);
        const cent = Math.floor(+price - euro) * 10;
        const euroStr = euro == 0 ? '' : euro + ' euro';
        const centStr = cent == 0 ? '' : cent + ' cent';
        return euroStr + '' + centStr;
    }
    mapSanitazing() {
        let newMap = new Map();
        PATHMAP.forEach((value, key, map) => {
            const sanitizedArr = value.icon.map((icon) => this.sanitizer.bypassSecurityTrustHtml(icon));
            const val = Object.assign(Object.assign({}, value), { icon: sanitizedArr });
            newMap.set(key, val);
            return newMap;
        });
        return newMap;
    }
    handleError(err) {
        let message = '';
        switch (err.status) {
            case 201:
                message = 'dfdfdf';
                break;
            case 400:
                message = 'dfdfdf';
                break;
        }
    }
    getPoints(paths) {
        const transformedArr = paths.map((item) => [item.from, item.to]);
        const result = new Set(transformedArr.reduce((a, b) => a.concat(b), []));
        return result;
    }
}
TripDirectionEffects.ɵfac = function TripDirectionEffects_Factory(t) { return new (t || TripDirectionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"])); };
TripDirectionEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TripDirectionEffects, factory: TripDirectionEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getAutocomplete$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getRouts$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "setRouts$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TripDirectionEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }]; }, { getAutocomplete$: [], getRouts$: [], setRouts$: [] }); })();


/***/ }),

/***/ "./src/app/trip-direction/store/trip-direction.reducer.ts":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.reducer.ts ***!
  \****************************************************************/
/*! exports provided: tripDirectionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripDirectionReducer", function() { return tripDirectionReducer; });
/* harmony import */ var _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-direction.model */ "./src/app/trip-direction/trip-direction.model.ts");
/* harmony import */ var _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-direction.actions */ "./src/app/trip-direction/store/trip-direction.actions.ts");


const initialState = {
    startPoint: '',
    endPoint: '',
    startPointAutoComplete: [],
    endPointAutoComplete: [],
    paths: [],
    mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].SEARCH,
    errorMessage: '',
};
function tripDirectionReducer(state = initialState, action) {
    switch (action.type) {
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_START_POINT"]:
            return Object.assign(Object.assign({}, state), { startPoint: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_END_POINT"]:
            return Object.assign(Object.assign({}, state), { startPoint: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_START_POINT_AUTOCOMPLETE"]:
            return Object.assign(Object.assign({}, state), { startPointAutoComplete: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_END_POINT_AUTOCOMPLETE"]:
            return Object.assign(Object.assign({}, state), { endPointAutoComplete: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_START_POINT"]:
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_END_POINT"]:
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_AUTOCOMPLETE"]:
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ROUTS"]:
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_ROUTS"]:
            return Object.assign(Object.assign({}, state), { paths: [...action.payload.paths], mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].DELIVERY });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["AUTOCOMPLETE_FAIL"]:
            return Object.assign(Object.assign({}, state), { errorMessage: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAN_DATA"]:
            return Object.assign(Object.assign({}, state), { startPoint: '', endPoint: '', startPointAutoComplete: [], endPointAutoComplete: [], paths: [], mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].SEARCH, errorMessage: '' });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_MODE"]:
            console.log('reducer');
            return Object.assign(Object.assign({}, state), { mode: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/trip-direction/trip-direction-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/trip-direction/trip-direction-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TripDirectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionRoutingModule", function() { return TripDirectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../no-page/no-page.component */ "./src/app/no-page/no-page.component.ts");
/* harmony import */ var _search_result_search_result_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-result/search-result.guard */ "./src/app/search-result/search-result.guard.ts");
/* harmony import */ var _trip_direction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-direction.component */ "./src/app/trip-direction/trip-direction.component.ts");







const routes = [
    {
        path: '',
        component: _trip_direction_component__WEBPACK_IMPORTED_MODULE_4__["TripDirectionComponent"],
        children: [
            {
                path: 'myPath',
                // canActivate: [SearchResultGuard],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../search-result/search-result.module */ "./src/app/search-result/search-result.module.ts")).then((m) => m.SearchResultModule),
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

/***/ "./src/app/trip-direction/trip-direction.component.ts":
/*!************************************************************!*\
  !*** ./src/app/trip-direction/trip-direction.component.ts ***!
  \************************************************************/
/*! exports provided: TripDirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionComponent", function() { return TripDirectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/trip-direction.actions */ "./src/app/trip-direction/store/trip-direction.actions.ts");
/* harmony import */ var _select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-direction/select-direction.component */ "./src/app/trip-direction/select-direction/select-direction.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class TripDirectionComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.selectDirectionSubscription = this.store
            .select('directions')
            .subscribe((state) => {
            this.points = [state.startPoint, state.endPoint];
            this.startPointAutoComplete = state.startPointAutoComplete;
            this.endPointAutoComplete = state.endPointAutoComplete;
            this.mode = state.mode;
        });
    }
    onChangePoint(point) {
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_2__["GetAutocomplete"](point));
    }
    getRouts(event) {
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_2__["GetRouts"](event));
    }
    cleanData(_event) {
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_2__["CleanData"]());
    }
}
TripDirectionComponent.ɵfac = function TripDirectionComponent_Factory(t) { return new (t || TripDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
TripDirectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TripDirectionComponent, selectors: [["app-trip-direction"]], decls: 2, vars: 4, consts: [[3, "points", "startPointAutoComplete", "endPointAutoComplete", "mode", "changePoint", "selectedPoints", "cleanData"]], template: function TripDirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-select-direction", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePoint", function TripDirectionComponent_Template_app_select_direction_changePoint_0_listener($event) { return ctx.onChangePoint($event); })("selectedPoints", function TripDirectionComponent_Template_app_select_direction_selectedPoints_0_listener($event) { return ctx.getRouts($event); })("cleanData", function TripDirectionComponent_Template_app_select_direction_cleanData_0_listener($event) { return ctx.cleanData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("points", ctx.points)("startPointAutoComplete", ctx.startPointAutoComplete)("endPointAutoComplete", ctx.endPointAutoComplete)("mode", ctx.mode);
    } }, directives: [_select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_3__["SelectDirectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vdHJpcC1kaXJlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vdHJpcC1kaXJlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjowO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trip-direction',
                templateUrl: './trip-direction.component.html',
                styleUrls: ['./trip-direction.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/trip-direction/trip-direction.model.ts":
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

/***/ "./src/app/trip-direction/trip-direction.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/trip-direction/trip-direction.module.ts ***!
  \*********************************************************/
/*! exports provided: TripDirectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionModule", function() { return TripDirectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-direction/select-direction.component */ "./src/app/trip-direction/select-direction/select-direction.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _trip_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-direction.component */ "./src/app/trip-direction/trip-direction.component.ts");
/* harmony import */ var _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-direction-routing.module */ "./src/app/trip-direction/trip-direction-routing.module.ts");








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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://3.23.159.104:3333/'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\oldpu\Documents\PROJECTS\CheapTrip\CheapTripAngularClient\cheapTrip\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
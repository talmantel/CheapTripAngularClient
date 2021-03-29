var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"ua"});
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maxim\Documents\GitHub\CheapTripAngularClient\cheapTrip\src\main.ts */"zUnb");


/***/ }),

/***/ "5Luu":
/*!******************************************!*\
  !*** ./src/app/links/links.component.ts ***!
  \******************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _link_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-card */ "e8Bi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function LinksComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinksComponent_section_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const card_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToLink(card_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", card_r1.icolink, ") ; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 ", card_r1.link, "");
} }
class LinksComponent {
    constructor() {
        this.cards = new Array();
    }
    ngOnInit() {
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("BlaBlaCar", "https://www.blablacar.com/", "Share your journey with BlaBlaCar - Trusted carpooling"));
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("Skyscanner", "https://www.skyscanner.net/", "Skyscanner: Compare Cheap Flights, Hotels & Car Hire | Last Minute Flights"));
        // this.cards.push (new LinkCard("title","link","desc"));
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("Пассажирам", "https://www.rzd.ru/#", "Официальный портал ОАО «РЖД». Купить билет на поезд без комиссии. Акции и скидки. Расписание поездов и электричек по всем направлениям. Скоростные поезда «Сапсан», «Ласточка», «Стриж» и «Аллегро»."));
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("Tutu.ru: Авиа, ЖД, билеты на автобус и туры онлайн.", "https://www.tutu.ru/", "Tutu.ru — это продажа ж/д билетов, авиабилетов, туров и билетов на автобус, бронирование отелей, точное расписание электричек. Также вы найдете у нас обширную справочную информацию для путешественников."));
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("Название", "гиперссылка", "описание"));
    }
    goToLink(url) {
        window.open(url, "_blank");
    }
}
LinksComponent.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(); };
LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-links"]], decls: 1, vars: 1, consts: [["class", "cards-space", 4, "ngFor", "ngForOf"], [1, "cards-space"], [1, "link-card"], ["mat-card-avatar", "", 1, "header-image"], ["mat-button", "", 3, "click"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LinksComponent_section_0_Template, 13, 6, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".link-card[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  max-width: 16px;\n  max-height: 16px;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZ0IsWUFBQTtFQUNaLGFBQUE7QUFFSjs7QUFDRTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9saW5rcy9saW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rLWNhcmQgeyAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1pbWFnZSB7XHJcbiAgIFxyXG4gICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4uY2FyZHMtc3BhY2V7XHJcbiAgICBcclxuICB9Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-links',
                templateUrl: './links.component.html',
                styleUrls: ['./links.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5Zoz":
/*!*******************************************!*\
  !*** ./src/app/service/locale.service.ts ***!
  \*******************************************/
/*! exports provided: LocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return LocaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocaleService {
    constructor() { }
    getUsersLocale(defaultValue) {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return defaultValue;
        }
        const wn = window.navigator;
        let lang = wn.languages ? wn.languages[0] : defaultValue;
        lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
        return lang;
    }
}
LocaleService.ɵfac = function LocaleService_Factory(t) { return new (t || LocaleService)(); };
LocaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocaleService, factory: LocaleService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7Yj5":
/*!*******************************************************************!*\
  !*** ./src/app/trip-direction/select-direction/select.service.ts ***!
  \*******************************************************************/
/*! exports provided: SelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectService", function() { return SelectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







class SelectService {
    constructor(http) {
        this.http = http;
        this.server = 'tomcat'; //to be fixed
        // this.server = 'appachi'
    }
    getUrl(name, type) {
        if (this.server === 'tomcat') {
            // const t = type === 'start' ? '1' : '2';
            console.log('tomacat');
            return (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlTomCat +
                'getLocations?type=' +
                name +
                '&search_name=' +
                encodeURIComponent(name));
        }
        // console.log('appachi');
        // return (
        //   environment.urlAppachi +
        //   'locations?type=' +
        //   type +
        //   '&search_name=' +
        //   encodeURIComponent(name)
        // );
    }
    getStartPointAutoComplete$(name) {
        if (name == null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([]);
        }
        console.log('to server', this.getUrl(name, 'start'));
        return this.http
            .get(this.getUrl(name, 'start'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((arr) => console.log('form server', arr)));
    }
    getEndPointAutoComplete$(name) {
        if (name == null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([]);
        }
        return this.http
            .get(this.getUrl(name, 'end'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((arr) => { }));
    }
}
SelectService.ɵfac = function SelectService_Factory(t) { return new (t || SelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SelectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectService, factory: SelectService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

/***/ "9NvV":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");










const URL = 'MY_URL';
const PATHMAP = new Map();
var Icons;
(function (Icons) {
    Icons["FLIGHT"] = "<span class=\"material-icons\">\n  flight\n  </span>";
    Icons["BUS"] = "<span class=\"material-icons\">\n  directions_bus\n  </span>";
    Icons["TRAIN"] = "<span class=\"material-icons\">\n  directions_railway\n  </span>";
    Icons["SUBWAY"] = "<span class=\"material-icons\">\n  directions_subway\n  </span>";
    Icons["SHIP"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["ONFOOT"] = "<span class=\"material-icons\">\n  directions_walk\n  </span>";
})(Icons || (Icons = {}));
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
const PATHS = `{"mixed_routes":
{"direct_paths":
[
  {
    "transportation_type":"Bus",
    "euro_price":19.3951,
    "duration_minutes":3360,
    "from":"Bournemouth",
    "to":"Bucharest"},
    {
    "transportation_type":"Bus",
    "euro_price":12.5216,
    "duration_minutes":509,
    "from":"Bucharest",
    "to":"Budapest"}
],
"euro_price":31.0,
"duration_minutes":3869
},

"flying_routes":{"direct_paths":[{"transportation_type":"Flight","euro_price":76.0,"duration_minutes":347,"from":"Bournemouth","to":"Alicante"},{"transportation_type":"Flight","euro_price":47.8124,"duration_minutes":361,"from":"Alicante","to":"Budapest"}],"euro_price":123.0,"duration_minutes":708},"ground_routes":{"direct_paths":[{"transportation_type":"Bus","euro_price":19.3951,"duration_minutes":3360,"from":"Bournemouth","to":"Bucharest"},{"transportation_type":"Bus","euro_price":12.5216,"duration_minutes":509,"from":"Bucharest","to":"Budapest"}],"euro_price":31.0,"duration_minutes":3869}}`;
// url = http://3.23.159.104:3333
class HttpService {
    constructor(http, router, sanitizer) {
        this.http = http;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    getUserCountry() {
        // let url="https://api.hostip.info/country.php";
        let url = "http://api.ipstack.com/check?access_key=21c2d85bf7168d059b04bb14c15228ac";
        // let url="http://ip-api.com/json/";
        // return this.http.get(url ,{responseType: 'text'});
        return this.http.get(url);
    }
    getAutoCompleteData(data, type) {
        const address = URL +
            'getLocations?type=' +
            type +
            '&search_name=' +
            encodeURIComponent(data);
        const DIRECTIONS_FROM = [
            'Moscow',
            'Tel-Aviv',
            'London',
            'Viena',
            'San-Paolo',
            'Krakow',
            'Bansko',
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(DIRECTIONS_FROM);
    }
    getPaths(from, to) {
        this.startPoint = from;
        this.endPoint = to;
        const newPath = JSON.parse(PATHS);
        return this.transformObject(newPath);
    }
    transformObject(obj) {
        const objArr = [];
        for (const i in obj) {
            const transformedDetails = this.transformDetails(obj[i]);
            const testObj = {
                pathType: this.mapSanitazing().get(i),
                details: transformedDetails,
            };
            const newObj = { pathType: PATHMAP.get(i), details: transformedDetails };
            objArr.push(testObj);
        }
        this.currentPaths = objArr;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(objArr);
    }
    transformDetails(obj) {
        const newPaths = obj.direct_paths.map((item) => {
            return Object.assign(Object.assign({}, item), { duration_minutes: this.transformTime(+obj.duration_minutes), euro_price: this.transformPrice(+obj.euro_price) });
        });
        const newObj = {
            direct_paths: newPaths,
            euro_price: this.transformPrice(+obj.euro_price),
            duration_minutes: this.transformTime(+obj.duration_minutes),
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
        const newMap = new Map();
        PATHMAP.forEach((value, key, map) => {
            const sanitizedArr = value.icon.map((icon) => this.sanitizer.bypassSecurityTrustHtml(icon));
            const val = Object.assign(Object.assign({}, value), { icon: sanitizedArr });
            newMap.set(key, val);
            return newMap;
        });
        return newMap;
    }
    getAllEnLocationsTomcat() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].urlTomCat +
            'CheapTrip/getLocations?type=' +
            '0' +
            '&search_name=' +
            '';
        let locations;
        this.http.get(url).subscribe(data => {
            locations = data;
            console.log("ru locations received");
        });
        console.log("ru locations returned");
        return locations;
    }
    getAllRuLocationsTomcat() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].urlTomCat +
            'CheapTrip/getLocations?type=' +
            '0' +
            '&search_name=' +
            '' +
            '&language_name=ru';
        return this.http.get(url, { observe: "response" });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"], _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__["PathMapComponent"]], styles: ["div.mainContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 98%;\n  margin: auto;\n  position: relative;\n  justify-content: stretch;\n  align-items: flex-start;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n  flex-basis: 49%;\n  flex-grow: 1;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  display: flex;\n  justify-content: space-around;\n  border-left: 1px solid var(--color-accent);\n}\n@media screen and (min-width: 960px) and (max-width: 1279.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    width: 95%;\n    height: auto;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 95%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 599.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 98%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 98%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 359.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 0.5rem;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGSjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0FBRko7QUNtREU7RUR2Q0E7SUFDRSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBUkY7RUFTRTtJQUVFLFlBQUE7SUFFQSxhQUFBO0lBQ0EsNkJBQUE7RUFUSjtBQUNGO0FDcUVFO0VEdkRBO0lBQ0UsU0FBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RUFYRjtFQVlFO0lBQ0UsbUJBQUE7RUFWSjtFQVlFO0lBQ0UsbUJBQUE7SUFDQSxZQUFBO0lBQ0YsWUFBQTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtFQVZKO0FBQ0Y7QUNzREU7RUR2Q0E7SUFDRSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLHFCQUFBO0VBWkY7RUFjRTtJQUNFLG1CQUFBO0VBWko7RUFjRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFaSjtBQUNGO0FDbURDO0VEbkNDO0lBQ0UsU0FBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtFQWJGO0VBZUU7SUFDRSxtQkFBQTtFQWJKO0VBZUU7SUFDRSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0VBYko7QUFDRjtBQ29DRTtFRGxCQTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7RUFmRjtFQWdCRTtJQUNFLG1CQUFBO0VBZEo7RUFnQkU7SUFDRSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0VBZEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcblxuZGl2Lm1haW5Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICBtYXQtc3Bpbm5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgZGl2LmFzaWRlIHtcbiAgICBmbGV4LWJhc2lzOiA0OSU7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIGRpdi5tYXAge1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgfVxufVxuQGluY2x1ZGUgTGFyZ2Uge1xuICBkaXYubWFwIHtcbiAgIC8vIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgfVxufVxuXG5AaW5jbHVkZSBNZWRpdW0ge1xuICBkaXYubWFpbkNvbnRhaW5lciB7XG4gICAgdG9wOiAycmVtO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXYubWFwIHtcbiAgICAgIC8vICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAvLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgU21hbGwge1xuICBkaXYubWFpbkNvbnRhaW5lciB7XG4gICAgdG9wOiAycmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpdi5hc2lkZSB7XG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIH1cbiAgICBkaXYubWFwIHtcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBYU21hbGwge1xuICBkaXYubWFpbkNvbnRhaW5lciB7XG4gICAgdG9wOiAycmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDk4JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cbiAgICBkaXYuYXNpZGUge1xuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICB9XG4gICAgZGl2Lm1hcCB7XG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgfVxufVxuQGluY2x1ZGUgUGhvbmVzIHtcbiAgZGl2Lm1haW5Db250YWluZXIge1xuICAgIHRvcDogMnJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXG4gICAgZGl2LmFzaWRlIHtcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgfVxuICAgIGRpdi5tYXAge1xuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgU21hbGxwaG9uZXMge1xuICBkaXYubWFpbkNvbnRhaW5lciB7XG4gICAgdG9wOiAwLjVyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgZGl2LmFzaWRlIHtcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgfVxuICAgIGRpdi5tYXAge1xuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGJvcmRlclJhZGl1cygkdG9wTGVmdCwgJHRvcFJpZ2h0LCAkYm90dG9tTGVmdCwgJGJvdHRvbVJpZ2h0KSB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICAtbXMtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbn1cblxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XG4gIEBpbmNsdWRlIGJvcmRlclJhZGl1cygkdmFsLCAkdmFsLCAkdmFsLCAkdmFsKTtcbn1cblxuQG1peGluIGJveFNpemluZygkYm94U2l6aW5nKSB7XG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcbiAgYm94LXNpemluZzogJGJveFNpemluZztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xuICB9XG4gICY6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xuICB9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xuICB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xuICB9XG59XG5cbkBtaXhpbiBib3hTaGFkb3coJGhMZW5ndGgsICR2TGVuZ3RoLCAkYmx1clIsICRzcHJlYWRSKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG5AbWl4aW4gRGVza3RvcCB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xufVxuICBcbn1cblxuQG1peGluIFhMYXJnZSB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIExhcmdlIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIE1lZGl1bSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgIChtYXgtd2lkdGg6IDEyNzkuOTlweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFRhYkxhbmRzY2FwZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5cblxuQG1peGluIFRhYlBvcnRyYWl0IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFdlYlBvcnRyYWl0IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gU21hbGwge1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5AbWl4aW4gWFNtYWxsIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFBob25lcyB7XG4gQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIEBjb250ZW50O1xuIH1cbn1cblxuQG1peGluIFNtYWxscGhvbmVzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5Ljk5cHgpIHtcbiAgICAgICBAY29udGVudDtcbiAgfVxuIH1cblxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
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
    mainServer: "tomcat",
    url68: 'http://3.18.167.68:8080/',
    url104: 'http://3.18.167.68:8080/',
    // urlTomCat: 'https://test2.lowcoststrip.com:8443/'
    urlTomCat: 'http://3.64.201.17:8080/',
    urlGoogleFormEng: 'https://docs.google.com/forms/d/11mnL9hPZHkbixglQNqlN-iChn4-dYidnNnQAPXakYvA/edit?usp=sharing',
    urlGoogleFormRus: 'https://docs.google.com/forms/d/1ypZL2BFqHmlgPrzsbg3BbOK1Ns_FBYuMrsvYoUOskJM/edit?usp=sharing',
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["div.main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 6rem;\n  color: white;\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Back[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Close[_ngcontent-%COMP%] {\n  background-color: var(--color-accent);\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Download[_ngcontent-%COMP%] {\n  background-color: var(--color-success);\n}\n.error[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.warning[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUROO0FBR0k7RUFDRSxzQ0FBQTtBQUROO0FBR0k7RUFDRSxxQ0FBQTtBQUROO0FBR0k7RUFDRSxzQ0FBQTtBQUROO0FBT0U7RUFDRSwyQkFBQTtBQUpKO0FBVUU7RUFDRSwwQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubWFpbiB7XG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgZGl2IHtcbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDZyZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGJ1dHRvbi5CYWNre1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIGJ1dHRvbi5DbG9zZXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgfVxuICAgIGJ1dHRvbi5Eb3dubG9hZHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIH1cblxuICB9XG59XG4uZXJyb3Ige1xuICBoMSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbn1cblxuLndhcm5pbmcge1xuICBoMSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIH1cblxufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
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
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #e0e2e1;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton.btn[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n\nbutton.start[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  color: white;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  position: fixed;\n  z-index: 100;\n  background-color: #e0e2e1;\n  font-size: 90%;\n  transition: background-color 1s, color 1s;\n  color: var(--color-primary);\n  font-family: \"Lato\", sans-serif;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: italic;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-style: italic !important;\n  font-size: 12px;\n  color: var(--color-primary);\n}\n\nmat-toolbar.dark[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: white;\n  transition: background-color 1s, color 1s;\n}\n\nmat-toolbar.dark[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]   button.start[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  background-color: #e0e2e1;\n  transition: background-color 1s, color 1s;\n}\n\nbutton.start[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--color-primary);\n  border-radius: 0%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  outline: white 1px solid;\n  transition: background-color 1s, color 1s;\n}\n\ndiv.screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  background-color: #e0e2e1;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  width: 45%;\n  height: auto;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: auto;\n  position: relative;\n  top: 100px;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%] {\n  width: 65%;\n  height: auto;\n}\n\ndiv.screen_2[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  color: white;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: gray;\n  width: 90%;\n  top: 0;\n  margin: 0;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 1em;\n  font-size: 0.7rem;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding-top: 0px;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  padding: 1rem inherit;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  left: 5rem;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%]   img.ball[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  top: 18rem;\n  left: 33rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURFO0VBQ0Usa0JBQUE7QUFHSjs7QUFGSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0FBR0o7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUdGOztBQURJO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0FBR047O0FBRUE7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRU47O0FBRE07RUFDRSxpQ0FBQTtBQUdSOztBQURNO0VBQ0UsK0JBQUE7QUFHUjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBSUE7RUFDRSwyQkFBQTtBQURGOztBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUNJO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUFDTjs7QUFBTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUNNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFBUTtFQUVFLHFCQUFBO0FBQ1Y7O0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRk47O0FBSUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI1KTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5idXR0b24uYnRuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuYnV0dG9uLnN0YXJ0IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1hdC10b29sYmFyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjYsIDIyNSk7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBjb2xvciAxcztcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG5cbiAgZGl2LmxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBidXR0b24ge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICB9XG4gIGRpdi5tZW51IGJ1dHRvbiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbn1cbmJ1dHRvbi5tYXQtbWVudS1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWMhaW1wb3J0YW50O1xuICBmb250LXNpemU6MTJweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxubWF0LXRvb2xiYXIuZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xuICBkaXYuYnV0dG9ucyB7XG4gICAgYnV0dG9uLnN0YXJ0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI1KTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xuICAgIH1cbiAgfVxufVxuXG5idXR0b24uc3RhcnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBvdXRsaW5lOiB3aGl0ZSAxcHggc29saWQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xufVxuXG5kaXYuc2NyZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI2LCAyMjUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpdi5tZXNzYWdlIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIGRpdiB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxMDBweDtcbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXYucGljdHVyZSB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLy8gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG5kaXYuc2NyZWVuXzIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGRpdi5tZXNzYWdlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGl2IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcCB7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICB9XG5cbiAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBzcGFue1xuXG4gICAgICAgICAgcGFkZGluZzogMXJlbSBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRpdi5waWN0dXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogNXJlbTtcbiAgICB9XG4gICAgaW1nLmJhbGwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgdG9wOiAxOHJlbTtcbiAgICAgIGxlZnQ6IDMzcmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myInsertRemoveTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingComponent, [{
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
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function PathDetailsComponent_section_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", icon_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PathDetailsComponent_section_0_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
} }
function PathDetailsComponent_section_0_div_20_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PathDetailsComponent_section_0_div_20_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const path_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.openTransport(path_r7.transportation_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PathDetailsComponent_section_0_div_20_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PathDetailsComponent_section_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PathDetailsComponent_section_0_div_20_button_10_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PathDetailsComponent_section_0_div_20_p_17_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const path_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", path_r7.from, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", path_r7.to, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getTransportName(path_r7.transportation_type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getTransportUrl(path_r7.transportation_type) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r7.duration_minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](16, 8, path_r7.euro_price, "EUR", "symbol-narrow", "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", path_r7.transportation_type == "Flight");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PathDetailsComponent_section_0_li_10_Template, 4, 2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PathDetailsComponent_section_0_div_20_Template, 18, 13, "div", 9);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 5, rout_r1.details.euro_price, "EUR", "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details.direct_paths);
} }
const TRANSPORT = new Map();
TRANSPORT.set('Bus', "Bus");
TRANSPORT.set('Flight', "Flight");
TRANSPORT.set('Train', "Train");
TRANSPORT.set('Ride Share', "Ride Share");
TRANSPORT.set('Car Drive', "Car Drive");
TRANSPORT.set('Walk', "Walk");
TRANSPORT.set('Town Car', "Town Car");
TRANSPORT.set('Car Ferry', "Car Ferry"); // two variants for ferry
TRANSPORT.set('Ferry', "Car Ferry"); //
TRANSPORT.set('Shuttle', "Shuttle");
TRANSPORT.set('Taxi', "Taxi");
class PathDetailsComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.httpService.getUserCountry().subscribe({
            next: (data) => {
                console.log("Got user country:" + data.country_code);
                this.country = data.country_code;
            },
            error: (err) => {
                console.log(err);
                this.country = "undefined";
            }
        });
    }
    ngOnInit() {
    }
    getTransportName(transport) {
        return TRANSPORT.get(transport);
    }
    getTransportUrl(transport) {
        let url = '';
        switch (transport) {
            case "Flight": {
                url = "http://Skyscanner.com";
                break;
            }
            case "Bus": {
                //url = "http://bus.tickets.ua";
                url = this.getBusUrl();
                break;
            }
            case "Train": {
                //url = "http://gd.tickets.ua";
                url = this.getTrainUrl();
                //url = "https://www.tutu.ru/poezda";
                break;
            }
            case "Car Ferry": {
                url = "http://www.aferry.com";
                break;
            }
            case "Ferry": {
                url = "http://www.aferry.com";
                break;
            }
            case "Ride Share": {
                url = "http://BlaBlaCar.com";
                break;
            }
            default: {
                url = '';
                break;
            }
        }
        return url;
    }
    getBusUrl() {
        console.log("bus " + this.country);
        switch (this.country) {
            case "RU":
            case "BY":
            case "UA":
                return "http://bus.tutu.ru";
            case "IN":
                return "https://www.makemytrip.com/bus-tickets/";
            default:
                return "http://www.omio.com";
        }
    }
    getTrainUrl() {
        console.log("train " + this.country);
        switch (this.country) {
            case "RU":
            case "BY":
            case "UA":
                return "https://www.tutu.ru/poezda";
            case "IN":
                return "https://www.makemytrip.com/railways/";
            default:
                return "http://www.omio.com";
        }
    }
    openTransport(transport) {
        //function for opening site of corresponding transportation type
        let url = this.getTransportUrl(transport);
        if (url != '') {
            // window.open(url, "_blank");
            window.open(url, "_blank");
        }
    }
}
PathDetailsComponent.ɵfac = function PathDetailsComponent_Factory(t) { return new (t || PathDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
PathDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathDetailsComponent, selectors: [["app-path-details"]], inputs: { paths: "paths", startPoint: "startPoint", endPoint: "endPoint" }, decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Buy ticket
         */
        const MSG_EXTERNAL_BuyTicket$$SRC_APP_SEARCH_RESULT_PATH_DETAILS_PATH_DETAILS_COMPONENT_TS____1 = goog.getMsg("Buy ticket");
        i18n_0 = MSG_EXTERNAL_BuyTicket$$SRC_APP_SEARCH_RESULT_PATH_DETAILS_PATH_DETAILS_COMPONENT_TS____1;
    }
    else {
        i18n_0 = "Buy ticket";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_priceAndDurationForFlight$$SRC_APP_SEARCH_RESULT_PATH_DETAILS_PATH_DETAILS_COMPONENT_TS____3 = goog.getMsg(" price and duration include transfer to/from airport ");
        i18n_2 = MSG_EXTERNAL_priceAndDurationForFlight$$SRC_APP_SEARCH_RESULT_PATH_DETAILS_PATH_DETAILS_COMPONENT_TS____3;
    }
    else {
        i18n_2 = "\u0446\u0456\u043D\u0430 \u0442\u0430 \u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440 \u0434\u043E / \u0437 \u0430\u0435\u0440\u043E\u043F\u043E\u0440\u0442\u0443";
    } return [[4, "ngFor", "ngForOf"], ["expandedHeight", "*", "collapsedHeight", "*"], [1, "icons"], [1, "description"], [1, "city"], ["class", "points", 4, "ngFor", "ngForOf"], [1, "time"], [1, "spacer"], ["selected", "true", 1, "price-top"], ["class", "details", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "points"], [3, "inline"], [1, "details"], [1, "rout"], ["class", "buy-ticket-button", "mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "currency"], ["style", "justify-content:center; ", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "buy-ticket-button", 3, "click"], i18n_0, [2, "justify-content", "center"], i18n_2]; }, template: function PathDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PathDetailsComponent_section_0_Template, 21, 10, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paths);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelDescription"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".price[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  border-radius: 5px;\n  color: white;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  position: relative;\n  height: auto;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.transport[_ngcontent-%COMP%] {\n  color: #607D8B;\n}\n\n.time[_ngcontent-%COMP%] {\n  color: #757575;\n}\n\nul.city[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #212121;\n  white-space: normal;\n  line-height: 1.2;\n  padding: 1px;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.1rem;\n  margin-left: 5px;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   mat-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\nli.points[_ngcontent-%COMP%] {\n  font-style: oblique;\n}\n\np[_ngcontent-%COMP%]   span.points[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.buy-ticket-button[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: max-content;\n  display: inline-flex;\n  height: 20px;\n  line-height: 20px;\n  color: inherit;\n  font-style: initial;\n  border-color: var(--color-primary);\n  position: absolute;\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n\np[_ngcontent-%COMP%]   span.currency[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  display: inline-block;\n}\n\n.rout[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: bold;\n  color: #212121;\n}\n\n.mat-chip[_ngcontent-%COMP%] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding: 4px 4px !important;\n  border-radius: 5px;\n  min-height: 20px !important;\n  background-color: var(--color-primary) !important;\n  color: white !important;\n}\n\nsection[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 0.2rem;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%] {\n  width: 100%;\n  height: inherit;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  min-width: 70px;\n  max-width: 70px;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 70%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-accent);\n  width: calc(100% - 24px);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  padding-top: 0.5rem;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.spacer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1 1 auto;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.1rem 1rem;\n  color: var(--color-accent);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.material-icons[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  padding: 0.5rem 0;\n  color: #212121;\n  font-size: 0.9rem;\n  margin: 0;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%] {\n  color: #757575;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 599.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    font-size: 1rem;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLWRldGFpbHMvcGF0aC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBR0csV0FBQTtFQUNBLGNBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFIOztBQUNHO0VBRUUsZUFBQTtBQUFMOztBQUdLO0VBR0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFIUDs7QUFPSztFQUNFLGFBQUE7QUFMUDs7QUFXQTtFQUNFLG1CQUFBO0FBUkY7O0FBa0JBO0VBQ0UsV0FBQTtBQWZGOztBQWlCQTtFQUVFLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFtQkE7RUFDRSw2QkFBQTtBQWhCRjs7QUFpQkU7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FBZko7O0FBbUJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFoQkY7O0FBNkJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7QUExQkY7O0FBNkJBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTNCRjs7QUE2QkU7RUFFRSxXQUFBO0VBQ0EsZUFBQTtBQTVCSjs7QUE2Qkk7RUFFRSxVQUFBO0FBNUJOOztBQTZCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTNCUjs7QUE2Qk07RUFFRSxlQUFBO0FBNUJSOztBQThCTTtFQUVFLHlDQUFBO0VBRUEsd0JBQUE7QUE5QlI7O0FBK0JRO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQTdCVjs7QUErQlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUE3QlY7O0FBOEJVO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQTdCWjs7QUFpQ007RUFDRSx1QkFBQTtBQS9CUjs7QUFpQ1U7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQ3BKVixzQkRxSjZCO0VBQ25CLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQS9CWjs7QUFpQ1k7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0FBL0JkOztBQWdDYztFQUNFLDBCQUFBO0FBOUJoQjs7QUFvQ1U7RUFFRSxXQUFBO0FBbkNaOztBQW9DWTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUFuQ2Q7O0FBcUNZO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsV0FBQTtBQXBDZDs7QUFzQ2M7RUFDRSxjQUFBO0FBcENoQjs7QUMxREU7RURvSEE7SUFDRSxXQUFBO0VBdERGO0FBQ0Y7O0FDekRFO0VEcUhBO0lBQ0UsV0FBQTtFQXpERjtBQUNGOztBQzVDQztFRDBHQztJQUNFLFdBQUE7RUEzREY7RUFpRVk7SUFDRSxlQUFBO0VBL0RkO0VBb0VNO0lBQ0UsZUFBQTtFQWxFUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLWRldGFpbHMvcGF0aC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2NoZWFwVHJpcFN0eWxlcy9zdHlsZXMuc2Nzc1wiO1xuLnByaWNle1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnRyYW5zcG9ydCB7XG4gIGNvbG9yOiM2MDdEOEI7XG59IFxuLnRpbWV7XG4gIGNvbG9yOiAgIzc1NzU3NTtcbn1cbnVsLmNpdHkge1xuICAvLyBmb250LXNpemU6IDAuOHJlbTtcblxuICAgd2lkdGg6IDEwMCU7XG4gICBjb2xvcjogIzIxMjEyMTtcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgIHBhZGRpbmc6IDFweDtcbiAgIGxpIHtcblxuICAgICBkaXNwbGF5OiBpbmxpbmU7XG5cbiAgICBcbiAgICAgbWF0LWljb24ge1xuXG4gICAgICAgLy9wYWRkaW5nOiA4cHggMnB4IDBweDtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgdG9wOiAwLjFyZW07XG4gICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgfVxuICAgfVxuICAgbGk6bGFzdC1jaGlsZCB7XG4gICAgIG1hdC1pY29uIHtcbiAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICB9XG4gICB9XG4gICAvLyAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIC8vICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiB9XG5saS5wb2ludHMge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuLy8gcCBzcGFuLnBvaW50czphZnRlciB7XG4vLyAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4vLyAgICAgY29udGVudDogXCJcXGYwNTRcIjtcbiBcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbi8vIH1cblxucCBzcGFuLnBvaW50czpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cbi5idXktdGlja2V0LWJ1dHRvbiB7XG4gIFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyBcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaXRpYWw7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIFxufVxucCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBzcGFuLmN1cnJlbmN5IHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgXG4gIH1cbn1cbi5yb3V0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vIHNwYW57XG4gIC8vICAgd2lkdGg6NDAlO1xuICAvLyB9XG4gIC8vIHNwYW46bGFzdC1jaGlsZHtcbiAgLy8gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAvLyAganVzdGlmeS1zZWxmOiBlbmQ7XG5cbiAgLy8gfVxuICBcbn1cblxuLm1hdC1jaGlwe1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBwYWRkaW5nOiA0cHggNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLWhlaWdodDogMjBweCAhaW1wb3J0YW50IDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24ge1xuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICBcbiAgbWF0LWFjY29yZGlvbiB7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICBcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgICAgICBmbGV4LWJhc2lzOiAxMCU7XG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgICAgfVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XG4gICAgICB9XG4gICAgICBkaXYuZGV0YWlscyB7XG4gICAgICAgIFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0cHgpO1xuICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgc3Bhbi5zcGFjZXIge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hdC1wYW5lbC10aXRsZSB7XG4gICAgICAgICAgZGl2Lmljb25zIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveFNpemluZyhib3JkZXItYm94KTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC4xcmVtIDFyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgICAgICAgICAgICBzcGFuLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXQtcGFuZWwtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpdi5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAudGltZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgTGFyZ2Uge1xuXG59XG5cblxuQGluY2x1ZGUgTWVkaXVte1xuICBzZWN0aW9ue1xuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICB9XG59XG5cbkBpbmNsdWRlIFNtYWxse1xuICBzZWN0aW9ue1xuICAgIHdpZHRoOjEwMCU7XG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAyMzYsIDk4KTtcbiAgLy8gIGJvcmRlcjozcHggc29saWQgcmVkO1xuICB9XG59XG5cbkBpbmNsdWRlIFhTbWFsbHtcbiAgc2VjdGlvbntcbiAgICB3aWR0aDoxMDAlO1xuICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjUyLCA1MSk7XG4gIH1cbn1cblxuQGluY2x1ZGUgUGhvbmVzIHtcbiAgc2VjdGlvbiB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXQtYWNjb3JkaW9uIHtcbiAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICAgICAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGRpdi5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXYuZGV0YWlscyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xufVxuXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xufVxuXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbn1cblxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbkBtaXhpbiBEZXNrdG9wIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG59XG4gIFxufVxuXG5AbWl4aW4gWExhcmdlIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gTGFyZ2Uge1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gTWVkaXVtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFdlYkxhbmRzY2FwZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBTbWFsbCB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbkBtaXhpbiBYU21hbGwge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gUGhvbmVzIHtcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gfVxufVxuXG5AbWl4aW4gU21hbGxwaG9uZXMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xuICAgICAgIEBjb250ZW50O1xuICB9XG4gfVxuXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-details',
                templateUrl: './path-details.component.html',
                styleUrls: ['./path-details.component.scss'],
            }]
    }], function () { return [{ type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, { paths: [{
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
// type warning = $localize`warning`;
// type MessageType = 'warning' | 'error';
// enum MessageHeader{ oops='Oops!' , ohNo= 'Oh no!' ,unsupported =  'Unsupported!'};
// export type MessageText =
//   | 'Pss! Our server is sleeping now. Please come back later.'
//   | 'Sorry, the data we have accumulated is not enough to build a route between the indicated cities. Try changing your request.'
//   | 'Sorry, we did not have time to adapt our application for the type of web browser you are using. But we managed to optimize it for Google Chrome ver. 86 or newest. We recommend trying it!';
// type MessageButton = 'Close' | 'Back' | 'Download';
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
PathMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathMapComponent, selectors: [["app-path-map"]], inputs: { frameWidth: "frameWidth", frameHeight: "frameHeight", isDeskTop: "isDeskTop" }, decls: 3, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_questions$$SRC_APP_SEARCH_RESULT_PATH_MAP_PATH_MAP_COMPONENT_TS_1 = goog.getMsg("https://docs.google.com/forms/d/11mnL9hPZHkbixglQNqlN-iChn4-dYidnNnQAPXakYvA/edit?usp=sharing");
        i18n_0 = MSG_EXTERNAL_questions$$SRC_APP_SEARCH_RESULT_PATH_MAP_PATH_MAP_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "https://docs.google.com/forms/d/11mnL9hPZHkbixglQNqlN-iChn4-dYidnNnQAPXakYvA/edit?usp=sharing";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_loading$$SRC_APP_SEARCH_RESULT_PATH_MAP_PATH_MAP_COMPONENT_TS_3 = goog.getMsg("Loading...");
        i18n_2 = MSG_EXTERNAL_loading$$SRC_APP_SEARCH_RESULT_PATH_MAP_PATH_MAP_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F ...";
    } return [["id", "map"], ["src", i18n_0, "scrolling", "no", "frameborder", "0", "marginheight", "0", "marginwidth", "0", 3, "width", "height"], i18n_2]; }, template: function PathMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("desktop", ctx.isDeskTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.frameWidth)("height", ctx.frameHeight);
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding: 0;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.desktop[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  top: 0.6rem;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    position: relative;\n  }\n  div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLW1hcC9wYXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRkY7O0FBR0U7RUFDRSxrQkFBQTtBQURKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUpKOztBQzBHQztFRGpHQztJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFMRjtFQU1FO0lBQ0Usa0JBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLW1hcC9wYXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL0BleHRlbmQgZGlzcGxheTogYmxvY2s7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBpZnJhbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG5kaXYuZGVza3RvcCB7XG5cbiAgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDAuNnJlbTtcbiAgfVxufVxuXG5AaW5jbHVkZSBQaG9uZXMge1xuICBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaWZyYW1lIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG59XG5cbkBtaXhpbiBib3JkZXJSYWQoJHZhbCkge1xuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XG59XG5cbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XG4gIGJveC1zaXppbmc6ICRib3hTaXppbmc7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250U2l6ZSwgJGZvbnRXZWlnaHQsICRmb250U3R5bGUpIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcbiAgfVxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcbiAgfVxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcbiAgfVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcbiAgfVxufVxuXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuQG1peGluIERlc2t0b3Age1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbn1cbiAgXG59XG5cbkBtaXhpbiBYTGFyZ2Uge1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBMYXJnZSB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBNZWRpdW0ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBUYWJMYW5kc2NhcGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBUYWJQb3J0cmFpdCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kICAobWF4LXdpZHRoOiA4MzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBXZWJQb3J0cmFpdCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiAxMjgwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFNtYWxsIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuQG1peGluIFhTbWFsbCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIEhhbmRTZXRQb3J0cmFpdCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBIYW5kU2V0TGFuZFNjYXBlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBQaG9uZXMge1xuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICBAY29udGVudDtcbiB9XG59XG5cbkBtaXhpbiBTbWFsbHBob25lcyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gIH1cbiB9XG5cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathMapComponent, [{
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
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9em;\n  color: white;\n  margin: 0%;\n  line-height: 1.5rem;\n  font-family: \"Anton\", sans-serif;\n  font-style: italic;\n  font-weight: lighter;\n  letter-spacing: 4px;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQ21IQztFRDNHRztJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFKSjtBQUNGOztBQzhHRTtFRHBHRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzXCI7XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuZGl2LnNsb2dhbiB7XG4gIHAge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgfVxufVxuXG5AaW5jbHVkZSBQaG9uZXMge1xuICBkaXYuc2xvZ2FuIHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW46IDAlO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcbiAgZGl2LnNsb2dhbiB7XG4gICAgcCB7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGJvcmRlclJhZGl1cygkdG9wTGVmdCwgJHRvcFJpZ2h0LCAkYm90dG9tTGVmdCwgJGJvdHRvbVJpZ2h0KSB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICAtbXMtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbn1cblxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XG4gIEBpbmNsdWRlIGJvcmRlclJhZGl1cygkdmFsLCAkdmFsLCAkdmFsLCAkdmFsKTtcbn1cblxuQG1peGluIGJveFNpemluZygkYm94U2l6aW5nKSB7XG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcbiAgYm94LXNpemluZzogJGJveFNpemluZztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xuICB9XG4gICY6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xuICB9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xuICB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xuICB9XG59XG5cbkBtaXhpbiBib3hTaGFkb3coJGhMZW5ndGgsICR2TGVuZ3RoLCAkYmx1clIsICRzcHJlYWRSKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG5AbWl4aW4gRGVza3RvcCB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xufVxuICBcbn1cblxuQG1peGluIFhMYXJnZSB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIExhcmdlIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIE1lZGl1bSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgIChtYXgtd2lkdGg6IDEyNzkuOTlweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFRhYkxhbmRzY2FwZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5cblxuQG1peGluIFRhYlBvcnRyYWl0IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFdlYlBvcnRyYWl0IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gU21hbGwge1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5AbWl4aW4gWFNtYWxsIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFBob25lcyB7XG4gQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIEBjb250ZW50O1xuIH1cbn1cblxuQG1peGluIFNtYWxscGhvbmVzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5Ljk5cHgpIHtcbiAgICAgICBAY29udGVudDtcbiAgfVxuIH1cblxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
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
                    const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('warning', "Oh no!", "Sorry, the data we have accumulated is nots\n              enough to build a route between the indicated cities. Try changing your request.", ["Close"]);
                    this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
                        data: alertMessage,
                    });
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorData;
            // console.log ("--==unknown error==-- "+error)
            switch (true) {
                case error.status >= 400:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('warning', "Oh no!", "Sorry, the data we have accumulated is not\n             enough to build a route between the indicated cities. Try changing your request.", ["Close"]);
                    break;
                case error.status >= 500:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', "oops", "Pss! Our server is sleeping now. Please come back later.", ['Close']);
                    break;
                default:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', error.name, error.message, ['Close']);
                    break;
            }
            this.store.dispatch(new _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["AutocompleteFail"]('errorMessage'));
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: errorData });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    showError(title, message) {
        const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', title, message, ["Close"]);
        this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: alertMessage });
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
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
            { path: 'noPage', component: _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_2__["NoPageComponent"] }
            // {path: 'myPath1', component: SearchResultComponent}
        ],
    },
];
class TripDirectionRoutingModule {
}
TripDirectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TripDirectionRoutingModule });
TripDirectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TripDirectionRoutingModule_Factory(t) { return new (t || TripDirectionRoutingModule)(); }, providers: [_search_result_search_result_guard__WEBPACK_IMPORTED_MODULE_3__["SearchResultGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TripDirectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionRoutingModule, [{
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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.localesList = [
            { code: 'en-US', label: 'English' },
            { code: 'ru', label: 'Русский' },
            { code: 'ua', label: 'Українська' }
        ];
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Cheaptrip$$SRC_APP_APP_COMPONENT_TS_1 = goog.getMsg(" CheapTrip ");
        i18n_0 = MSG_EXTERNAL_Cheaptrip$$SRC_APP_APP_COMPONENT_TS_1;
    }
    else {
        i18n_0 = " CheapTrip ";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_PayLess$$SRC_APP_APP_COMPONENT_TS_3 = goog.getMsg(" Pay less, ");
        i18n_2 = MSG_EXTERNAL_PayLess$$SRC_APP_APP_COMPONENT_TS_3;
    }
    else {
        i18n_2 = " Pay less, ";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_VisitMore$$SRC_APP_APP_COMPONENT_TS_5 = goog.getMsg(" visit more! ");
        i18n_4 = MSG_EXTERNAL_VisitMore$$SRC_APP_APP_COMPONENT_TS_5;
    }
    else {
        i18n_4 = " visit more! ";
    } return [["color", "primary", "role", "heading"], [1, "cheaptrip"], i18n_0, [1, "words"], [1, "wordsUp"], i18n_2, [1, "wordsDown"], i18n_4]; }, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.cheaptrip[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-style: italic;\n  font-size: 2em;\n  color: white;\n  line-height: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bolder;\n}\n\n.words[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-style: italic;\n  color: white;\n  margin: 0%;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bolder;\n}\n\n.wordsUp[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  line-height: 1rem;\n}\n\n.wordsDown[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  margin-left: 30px;\n  font-size: 1.3em;\n  line-height: 0.5rem;\n}\n\n@media screen and (min-width: 960px) {\n  div.cheaptrip[_ngcontent-%COMP%] {\n    margin: 50px;\n    width: auto;\n    font-size: 2.8em;\n    line-height: 3rem;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    line-height: 1rem;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    margin-left: 190px;\n  }\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.cheaptrip[_ngcontent-%COMP%] {\n    margin: 5px;\n    width: auto;\n    font-size: 1.5em;\n    line-height: 1.5rem;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    line-height: 1rem;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n  div.cheaptrip[_ngcontent-%COMP%] {\n    margin: 5px;\n    width: auto;\n    font-size: 1.2em;\n    line-height: 1.5rem;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    width: auto;\n    font-size: 0.6em;\n    line-height: 0.8rem;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVFLFVBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU1BO0VBR0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUxGOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUNnQkU7RURTQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBRUEsZ0JBQUE7SUFDQSxpQkFBQTtFQXRCRjs7RUEwQkE7SUFFRSxnQkFBQTtJQUNBLGlCQUFBO0VBeEJGOztFQTJCQTtJQUNFLGtCQUFBO0VBeEJGO0FBQ0Y7O0FDd0VDO0VEMUNDO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFFQSxnQkFBQTtJQUNBLG1CQUFBO0VBNUJGOztFQWdDQTtJQUVFLGdCQUFBO0lBQ0EsaUJBQUE7RUE5QkY7O0VBaUNBO0lBQ0UsaUJBQUE7RUE5QkY7QUFDRjs7QUM2REU7RUR6QkE7SUFDRSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7RUFqQ0Y7O0VBb0NBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFFQSxnQkFBQTtJQUNBLG1CQUFBO0VBbENGOztFQXNDQTtJQUNFLFdBQUE7SUFFQSxnQkFBQTtJQUNBLG1CQUFBO0VBcENGOztFQXVDQTtJQUNFLGlCQUFBO0VBcENGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJy4uL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2Nzcyc7XG5cbioge1xuICBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmRpdi5jaGVhcHRyaXAge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi53b3Jkc3tcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwJTtcbiAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ud29yZHNVcCB7XG4gIFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbn1cbi53b3Jkc0Rvd24ge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgZm9udC1zaXplOiAgMS4zZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjVyZW07XG59XG5cbi8vIGRpdi5zbG9nYW4ge1xuLy8gICBwIHtcbiAgICBcbi8vICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4vLyAgICAgZm9udC1zaXplOiAwLjllbTtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgbWFyZ2luOiAwJTtcbi8vICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuLy8gICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xuLy8gICAgIC8vIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHNhbnMtc2VyaWY7XG4vLyAgICAgLy9mb250LWZhbWlseTogXCJBcmlhbCBOYXJyb3dcIiwgc2Fucy1zZXJpZlxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgXG4vLyAgIH1cbi8vIH1cblxuQGluY2x1ZGUgRGVza3RvcCAge1xuICBkaXYuY2hlYXB0cmlwIHtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgd2lkdGg6YXV0bztcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcblxuICB9XG4gIFxuICAud29yZHN7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIH1cbiBcbiAgLndvcmRzRG93biB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xuIFxuICB9XG4gXG59XG5cbkBpbmNsdWRlIFBob25lcyB7XG4gIGRpdi5jaGVhcHRyaXAge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOmF1dG87XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcblxuICB9XG4gIFxuICAud29yZHN7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIH1cbiBcbiAgLndvcmRzRG93biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gXG4gIH1cblxufVxuXG5AaW5jbHVkZSBTbWFsbHBob25lcyB7XG4gIG1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgZGl2LmNoZWFwdHJpcCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6YXV0bztcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuXG4gIH1cbiAgXG4gIC53b3Jkc3tcbiAgICB3aWR0aDogYXV0bztcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICBsaW5lLWhlaWdodDogMC44cmVtO1xuICB9XG4gXG4gIC53b3Jkc0Rvd24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuIFxuICB9XG5cblxufVxuXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xufVxuXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xufVxuXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbn1cblxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbkBtaXhpbiBEZXNrdG9wIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG59XG4gIFxufVxuXG5AbWl4aW4gWExhcmdlIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gTGFyZ2Uge1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gTWVkaXVtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFdlYkxhbmRzY2FwZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBTbWFsbCB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbkBtaXhpbiBYU21hbGwge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gUGhvbmVzIHtcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gfVxufVxuXG5AbWl4aW4gU21hbGxwaG9uZXMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xuICAgICAgIEBjb250ZW50O1xuICB9XG4gfVxuXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultGuard, [{
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
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./links/links.component */ "5Luu");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/locales/ru */ "wq8c");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/locales/uk */ "dp1V");
/* harmony import */ var _angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./logo/logo.component */ "ySb0");































// the second parameter 'fr-FR' is optional
Object(_angular_common__WEBPACK_IMPORTED_MODULE_26__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24___default.a, 'ru');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_26__["registerLocaleData"])(_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25___default.a, 'ua');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true
        }
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__["NoPageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"], _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"], _links_links_component__WEBPACK_IMPORTED_MODULE_23__["LinksComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_27__["LogoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__["NoPageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"], _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"], _links_links_component__WEBPACK_IMPORTED_MODULE_23__["LinksComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_27__["LogoComponent"]],
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
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true
                    }
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
/* harmony import */ var _service_locale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/locale.service */ "5Zoz");
/* harmony import */ var _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-direction.actions */ "k/2q");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _select_direction_select_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../select-direction/select.service */ "7Yj5");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../error-interceptor */ "SJn0");
























var Icons;
(function (Icons) {
    Icons["FLIGHT"] = "<span class=\"material-icons\">\n  flight\n  </span>";
    // FLIGHT = `<img src="assets/Icons/plane-h24.svg" height="24">`,
    Icons["BUS"] = "<span class=\"material-icons\">\n  directions_bus\n  </span>";
    // BUS =  `<img src="assets/Icons/Bus-h24.svg" height="24">`,
    Icons["TRAIN"] = "<span class=\"material-icons\">\n  directions_railway\n  </span>";
    // TRAIN =  `<img src="assets/Icons/train-h24.svg" height="24">`,
    Icons["SUBWAY"] = "<span class=\"material-icons\">\n  directions_subway\n  </span>";
    Icons["SHIP"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["ONFOOT"] = "<span class=\"material-icons\">\n  directions_walk\n  </span>";
    Icons["CAR"] = "<span class=\"material-icons\">\n  directions_car\n  </span>";
    Icons["TAXI"] = "<span class=\"material-icons\">\n  local_taxi\n  </span>";
    Icons["SHUTTLE"] = "<span class=\"material-icons\">\n  shuttle\n  </span>";
    Icons["FERRY"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["RIDESHARE"] = "<img src=\"assets/Icons/rideshare_h24_30.svg\" width=\"18\">";
    // RIDESHARE = `<span class="material-icons">
    // directions_car
    // </span>`
    // FERRY =  `<img src="assets/old Icons/ferryboat.png" height="24">`,
    // RIDESHARE =  `<img src="assets/old Icons/auto_bla.png" height="24">`,
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
PATHMAP.set('fixed_routes_without_ride_share', {
    type: 'Fixed trip without ride share'
});
PATHMAP.set('routes_without_ride_share', {
    type: 'Trip without ride share'
});
const PATHMAPDETAILED = new Map();
PATHMAPDETAILED.set('Bus', Icons.BUS);
PATHMAPDETAILED.set('Flight', Icons.FLIGHT);
PATHMAPDETAILED.set('Train', Icons.TRAIN);
PATHMAPDETAILED.set('Ride Share', Icons.RIDESHARE);
PATHMAPDETAILED.set('Car Drive', Icons.CAR);
PATHMAPDETAILED.set('Walk', Icons.ONFOOT);
PATHMAPDETAILED.set('Town Car', Icons.CAR);
PATHMAPDETAILED.set('Car Ferry', Icons.FERRY); // two variants for ferry
PATHMAPDETAILED.set('Ferry', Icons.FERRY); //
PATHMAPDETAILED.set('Shuttle', Icons.SHUTTLE);
PATHMAPDETAILED.set('Taxi', Icons.TAXI);
class TripDirectionEffects {
    constructor(errorInterceptor, localeService, selectService, actions$, sanitizer, http, router, store$, httpService) {
        this.errorInterceptor = errorInterceptor;
        this.localeService = localeService;
        this.selectService = selectService;
        this.actions$ = actions$;
        this.sanitizer = sanitizer;
        this.http = http;
        this.router = router;
        this.store$ = store$;
        this.httpService = httpService;
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
        this.getAutocomplete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["GET_AUTOCOMPLETE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.select('directions')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            let url = '';
            //this is url for spring server
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
            //here is url for a Tomcat server
            // url = this.selectService.getUrl('from',request[0].payload.name);
            // if (!this.checkLanguageValidity(request[0].payload.name[0])) {
            //   return;
            // }
            this.language = this.getLanguage(request[0].payload.name[0]);
            //actual query
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mainServer == "tomcat") {
                url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlTomCat +
                    'CheapTrip/getLocations?type=' +
                    '0' +
                    '&search_name=' +
                    encodeURIComponent(request[0].payload.name);
                '';
                if (this.language == 'ru') {
                    url += '&language_name=ru';
                }
            }
            let locations = this.LocationsEN;
            if (this.getLanguage(request[0].payload.name[0]) == "ru") {
                locations = this.LocationsRU;
            }
            //local locations array
            // return locations.pipe(
            //   map((res) => {
            //     console.log(res.body);
            //     let resArray:IPathPoint[]= res.body;
            //     // let result = resArray.filter(s => s.includes(request[0].payload.name));
            //     let result = resArray.filter((element) => {
            //       return element.name.includes(request[0].payload.name);
            //     });
            //     const newAction =
            //       request[0].payload.type === 'from'
            //         // ? new TripDirectionActions.SetStartPointAutocomplete(res.body)
            //         // : new TripDirectionActions.SetEndPointAutocomplete(res.body);
            //            ? new TripDirectionActions.SetStartPointAutocomplete(result)
            //         : new TripDirectionActions.SetEndPointAutocomplete(result);
            //     return newAction;
            //   })
            //actual http
            return this.http
                .get(url, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                console.log(res);
                const newAction = request[0].payload.type === 'from'
                    ? new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetStartPointAutocomplete"](res.body)
                    : new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetEndPointAutocomplete"](res.body);
                return newAction;
            })
            /*  catchError((error) => {
            console.log('error', error);
            this.handleError(error);
  
            return of(new TripDirectionActions.AutoCompleteFail(error));
          }) */
            );
        }));
        this.getRouts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["GET_ROUTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.select('directions')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            this.checkPoints = new Array;
            this.checkPointsStrings = new Array;
            let url = '';
            // lower is url for a spring server
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
            //here is url for a Tomcat server to be fixed
            // url = this.selectService.getUrl('from','to')
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mainServer == "tomcat") {
                url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlTomCat +
                    'CheapTrip/getRoute?from=' +
                    request[1].startPoint.id +
                    '&to=' +
                    request[1].endPoint.id;
            }
            //  this.checkPoints.push(Date.now());
            //  this.checkPointsStrings.push("Before request");
            if (this.language == 'ru') {
                url += '&language_name=ru';
            }
            return this.http.get(url, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                // next is for timing... obsolete
                // this.checkPoints.push(Date.now());
                // this.checkPointsStrings.push("received request");
                console.log(res);
                let resultPathArr = null;
                resultPathArr = this.transformObject(res.body);
                resultPathArr.sort((a, b) => (a.details.euro_price > b.details.euro_price) ? 1 : -1);
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
                // next is for timing... obsolete
                // this.checkPoints.push(Date.now());
                // this.checkPointsStrings.push("Before navigation to mypath");
                this.router.navigate(['/search/myPath'], {
                    queryParams,
                });
                // next is for timing... obsolete
                // this.checkPoints.push(Date.now());
                // this.checkPointsStrings.push("after nav, before return");
                //can be used to determine user locale
                // console.log('User locale -------'+this.localeService.getUsersLocale('en'));
                // next is for timing... obsolete
                // for (let index = 1; index < this.checkPoints.length; index++) {
                //   console.log (this.checkPointsStrings[index-1]+" -> "+this.checkPointsStrings[index]
                //   +" elapsed "+(this.checkPoints[index]-this.checkPoints[index-1])+" ms");
                // }
                return new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetRouts"]({
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
        console.log("constructor inoked");
        this.LocationsEN = httpService.getAllEnLocationsTomcat();
        this.LocationsRU = httpService.getAllRuLocationsTomcat();
        console.log(this.LocationsRU);
        console.log("en loc " + this.LocationsEN);
        //console.log ("init country "+this.country)
        //"wake up" servlet
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlTomCat + 'CheapTrip/getRoute?from=' + 10 + '&to=' + 20).subscribe(data => {
            console.log("received routes");
            console.log(this.LocationsRU);
        });
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
        //to be translated or fixed
        const days = Math.floor(minutes / 60 / 24);
        const dayStr = days < 1 ? '' : days + "d";
        const hours = Math.floor(minutes / 60 - days * 24);
        const hourStr = hours < 1 ? '' : hours + "h";
        const min = minutes - days * 24 * 60 - hours * 60;
        const minStr = min + "min";
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
        // console.log("-=Paths=- "+paths.length);
        this.checkPoints.push(Date.now());
        this.checkPointsStrings.push("Before filter");
        let stringifyArr;
        let duplicateIndex;
        do {
            stringifyArr = paths.map((p) => JSON.stringify(p.details));
            duplicateIndex = -1; //means no duplicate 
            for (let j = 0; j < paths.length; j++) {
                for (let i = 0; i < paths.length; i++) {
                    if ((stringifyArr[j] == stringifyArr[i]) && (i != j)) {
                        duplicateIndex = i;
                    }
                }
            }
            paths = paths.filter((_path, index) => {
                return index != duplicateIndex;
            });
        } while (duplicateIndex != -1); //do... while there is duplicates
        this.checkPoints.push(Date.now());
        this.checkPointsStrings.push("after filter");
        return paths;
    }
    checkLanguageValidity(char) {
        if ((/[а-яА-Я]/).test(char)) {
            return true;
        }
        if ((/[a-zA-Z]/).test(char)) {
            return true;
        }
        //error only rus eng allowed
        this.errorInterceptor.showError("Oops", "Sorry, only Latin and Russian characteres are allowed now.");
        return false;
    }
    getLanguage(char) {
        // if ((/[a-zA-Z]/).test(char) ){
        //   return 'en';
        // }
        if ((/[а-яА-Я]/).test(char)) {
            return 'ru';
        }
        if ((/[a-zA-Z]/).test(char)) {
            return 'en';
        }
        return 'undefined';
    }
}
TripDirectionEffects.ɵfac = function TripDirectionEffects_Factory(t) { return new (t || TripDirectionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_select_direction_select_service__WEBPACK_IMPORTED_MODULE_11__["SelectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"])); };
TripDirectionEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TripDirectionEffects, factory: TripDirectionEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getAutocomplete$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getRouts$", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TripDirectionEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"] }, { type: _service_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"] }, { type: _select_direction_select_service__WEBPACK_IMPORTED_MODULE_11__["SelectService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"] }]; }, { getAutocomplete$: [], getRouts$: [] }); })();


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
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
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9ycy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableComponent, [{
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
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../error-interceptor */ "SJn0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















const _c0 = ["startPointInput"];
const _c1 = ["endPointInput"];
const _c2 = ["nameText"];
function SelectDirectionComponent_mat_option_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](",", start_r9.country, "");
} }
function SelectDirectionComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectDirectionComponent_mat_option_13_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", start_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", start_r9.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", start_r9.country !== undefined);
} }
function SelectDirectionComponent_div_16_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r12.directionForm.get("startPointControl").errors.invalidMsg, "");
} }
function SelectDirectionComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectDirectionComponent_div_16_p_1_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.directionForm.get("startPointControl").errors.invalidMsg);
} }
function SelectDirectionComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const end_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", end_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", end_r13.name, " ");
} }
function SelectDirectionComponent_div_29_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r14.directionForm.get("endPointControl").errors.invalidMsg, "");
} }
function SelectDirectionComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectDirectionComponent_div_29_p_1_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.directionForm.get("endPointControl").errors.invalidMsg);
} }
const _c13 = function (a0, a1) { return { "searchMode": a0, "deliveryMode": a1 }; };
class SelectDirectionComponent {
    constructor(errorInterceptor, store, route, router) {
        this.errorInterceptor = errorInterceptor;
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
        //deactivated due to russian lan
        this.directionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            startPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                this.patternValid({
                    pattern: /[a-zA-Zа-яА-Я0-9\-\s]/,
                    msg: "Sorry,\n          For now, we support only English and Russian input.",
                }),
            ]),
            endPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                this.patternValid({
                    pattern: /[a-zA-Zа-яА-Я0-9\-\s]/,
                    msg: "Sorry,\n          For now, we support only English and Russian input.",
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
                this.errorInterceptor.showError("Oops", "Sorry, only Latin and Russian characteres are allowed now.");
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
SelectDirectionComponent.ɵfac = function SelectDirectionComponent_Factory(t) { return new (t || SelectDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
SelectDirectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectDirectionComponent, selectors: [["app-select-direction"]], viewQuery: function SelectDirectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.startPointInputEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.endPointInputEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nameParagraph = _t.first);
    } }, decls: 36, vars: 21, consts: function () { let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Long slogan
         */
        const MSG_EXTERNAL_longslogan$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_4 = goog.getMsg("Find most beneficial and unusual routes between cities with airports, combining flight, train, bus, ferry and rideshare.");
        i18n_3 = MSG_EXTERNAL_longslogan$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_4;
    }
    else {
        i18n_3 = "\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u043D\u0430\u0439\u0434\u0435\u0448\u0435\u0432\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0434\u0456\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0437 \u043C\u0456\u0441\u0442\u0430 \u0432 \u043C\u0456\u0441\u0442\u043E, \u043F\u043E\u0454\u0434\u043D\u0443\u044E\u0447\u0438 \u043B\u0456\u0442\u0430\u043A, \u043F\u043E\u0442\u044F\u0433, \u0430\u0432\u0442\u043E\u0431\u0443\u0441 \u0456 \u0441\u043F\u0456\u043B\u044C\u043D\u0456 \u043F\u043E\u0457\u0437\u0434\u043A\u0438 \u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5203279511751768967$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_6 = goog.getMsg("From");
        i18n_5 = MSG_EXTERNAL_5203279511751768967$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_6;
    }
    else {
        i18n_5 = "\u0417\u0432\u0456\u0434\u043A\u0438";
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1640609344969975994$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_8 = goog.getMsg("To");
        i18n_7 = MSG_EXTERNAL_1640609344969975994$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_8;
    }
    else {
        i18n_7 = "\u041A\u0443\u0434\u0438";
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Clear form
         */
        const MSG_EXTERNAL_clearform$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_10 = goog.getMsg("Clear form");
        i18n_9 = MSG_EXTERNAL_clearform$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_10;
    }
    else {
        i18n_9 = "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438";
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc letsgo
         */
        const MSG_EXTERNAL_letsgo$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_12 = goog.getMsg("Let's go");
        i18n_11 = MSG_EXTERNAL_letsgo$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_12;
    }
    else {
        i18n_11 = "\u041F\u043E\u0457\u0445\u0430\u043B\u0438!";
    } return [[1, "mainContainer", 3, "ngClass"], [1, "message"], [1, "LongSlogan"], i18n_3, ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "formInfo"], [1, "input"], [1, "startPoint"], ["type", "text", "placeholder", i18n_5, "aria-label", "Number", "matInput", "", "formControlName", "startPointControl", 3, "matAutocomplete", "focusout", "input"], ["startPointInput", ""], [1, "single-autocomplete", 3, "optionSelected"], ["auto1", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "material-icons", 3, "click"], ["class", "error", 4, "ngIf"], [1, "material-icons", "arrows"], [1, "endPoint"], ["type", "text", "placeholder", i18n_7, "aria-label", "Number", "matInput", "", "formControlName", "endPointControl", 3, "matAutocomplete", "focusout", "input"], ["endPointInput", ""], ["auto2", "matAutocomplete"], [1, "actions"], ["mat-flat-button", "", "color", "accent", "type", "reset", 3, "click"], i18n_9, ["mat-flat-button", "", "color", "primary", "type", "submit", 2, "color", "white", 3, "disabled"], ["sBtn", ""], i18n_11, [3, "value"], [4, "ngIf"], [1, "error"]]; }, template: function SelectDirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SelectDirectionComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function SelectDirectionComponent_Template_input_focusout_9_listener($event) { return ctx.onFocusOut($event); })("input", function SelectDirectionComponent_Template_input_input_9_listener($event) { return ctx.onInput($event.target.value, "from"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-autocomplete", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SelectDirectionComponent_Template_mat_autocomplete_optionSelected_11_listener($event) { return ctx.optionSelected($event.option.value, "from"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SelectDirectionComponent_mat_option_13_Template, 3, 3, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_span_click_14_listener() { return ctx.onCleanInput("start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SelectDirectionComponent_div_16_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " double_arrow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function SelectDirectionComponent_Template_input_focusout_22_listener($event) { return ctx.onFocusOut($event); })("input", function SelectDirectionComponent_Template_input_input_22_listener($event) { return ctx.onInput($event.target.value, "to"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-autocomplete", 10, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SelectDirectionComponent_Template_mat_autocomplete_optionSelected_24_listener($event) { return ctx.optionSelected($event.option.value, "to"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SelectDirectionComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_span_click_27_listener() { return ctx.onCleanInput("end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SelectDirectionComponent_div_29_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_button_click_31_listener() { return ctx.cleanForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](32, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](35, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c13, ctx.mode === ctx.modes.SEARCH, ctx.mode === ctx.modes.DELIVERY));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@insertRemoveTrigger1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\nmat-option[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  height: 40px;\n}\ndiv.mainContainer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  height: auto;\n  box-sizing: border-box;\n  position: relative;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  margin: 0.5rem auto 0.5rem;\n  padding: 0;\n  color: #607D8B;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   .LongSlogan[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n  margin: 1rem auto;\n  font-size: 0.9rem;\n  line-height: 2rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem auto 0.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 45%;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-warn);\n  font-style: italic;\n  padding-left: 3rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: grey;\n  cursor: pointer;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding-left: 0.5rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.valid[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.invalid[_ngcontent-%COMP%] {\n  border-color: var(--color-warn);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n  height: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 6rem;\n  margin: 0 2rem;\n}\ndiv.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  height: 2.5rem;\n}\n@media screen and (min-width: 960px) {\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   .LongSlogan[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.99px) {\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n\n  div.searchMode[_ngcontent-%COMP%]   .mat-autocomplete[_ngcontent-%COMP%]   .autocomplete[_ngcontent-%COMP%] {\n    height: 50% !important;\n  }\n}\n@media screen and (max-width: 359.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 98%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    position: relative;\n    top: 1rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: block;\n    width: 90%;\n    margin: auto;\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    top: -0.5rem;\n    width: 100%;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    margin: auto;\n    position: relative;\n    padding-left: 0.4rem;\n    border: none;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field.startPoint[_ngcontent-%COMP%] {\n    top: 0.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    align-self: center;\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    height: auto;\n    align-items: flex-start;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    border: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0.5rem auto 0;\n    position: relative;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    position: relative;\n    border-left: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 98%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    margin-top: 0;\n    position: relative;\n    top: 1rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: block;\n    width: 90%;\n    margin: auto;\n    line-height: 1.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    top: -0.5rem;\n    width: 100%;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    margin: auto;\n    position: relative;\n    padding-left: 0.4rem;\n    border: none;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.startPoint[_ngcontent-%COMP%] {\n    top: 0.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    height: auto;\n    align-items: flex-start;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0.5rem auto 0;\n    position: relative;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    position: relative;\n    border: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: relative;\n    left: -1rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi9zZWxlY3QtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSwyRUFBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUFGO0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUZKO0FBR0k7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBRE47QUFFTTtFQUNFLFVBQUE7QUFBUjtBQUVVO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFJUTtFQUNFLFdBQUE7RUFFQSxhQUFBO0FBSFY7QUFJVTtFQUVFLFdBQUE7RUFDQSxlQUFBO0FBSFo7QUFNVTtFQUNFLFdBQUE7RUM3RFYsc0JEOEQ2QjtFQUVuQixvQkFBQTtBQUpaO0FDeERFO0VBQ0Usb0JBQUE7RUFDQSwyQkQ2RCtCO0VDNUQvQixlRDREcUQ7RUMzRHJELG1CRDJEMkQ7RUMxRDNELG1CRDBEbUU7QUFBdkU7QUN4REU7RUFDRSw0QkFBQTtFQUNBLDJCRHNEK0I7RUNyRC9CLGVEcURxRDtFQ3BEckQsbUJEb0QyRDtFQ25EM0QsbUJEbURtRTtBQU92RTtBQ3hERTtFQUNFLHdCQUFBO0VBQ0EsMkJEK0MrQjtFQzlDL0IsZUQ4Q3FEO0VDN0NyRCxtQkQ2QzJEO0VDNUMzRCxtQkQ0Q21FO0FBY3ZFO0FDeERFO0VBQ0UsMEJBQUE7RUFDQSwyQkR3QytCO0VDdkMvQixlRHVDcUQ7RUN0Q3JELG1CRHNDMkQ7RUNyQzNELG1CRHFDbUU7QUFxQnZFO0FBbEJVO0VBQ0UsaUNBQUE7QUFvQlo7QUFqQlU7RUFDRSwrQkFBQTtBQW1CWjtBQWZNO0VBQ0UsMkJBQUE7QUFpQlI7QUFiSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBZU47QUFkTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBZ0JSO0FBUkk7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFXTjtBQ3hFRTtFRHdFQTtJQUNFLGlCQUFBO0VBSUY7QUFDRjtBQ2xFRTtFRHVFSTtJQUNFLGdCQUFBO0VBRk47O0VBU0k7SUFDRSxpQkFBQTtFQU5OO0FBQ0Y7QUN0Q0U7RURpREE7SUFDRSxVQUFBO0VBUkY7RUFVSTtJQUNFLGlCQUFBO0VBUk47O0VBY0U7SUFDRSxzQkFBQTtFQVhKO0FBQ0Y7QUNuQkU7RURtQ0E7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQWJGO0VBY0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFaSjtFQWFJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBWE47RUFjRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtFQVpKO0VBYUk7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQVhOO0VBWU07SUFDRSxXQUFBO0VBVlI7RUFZVTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtFQVZaO0VBWVU7SUFDRSxXQUFBO0VBVlo7RUFjTTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0Esd0JBQUE7RUFiUjtFQWdCSTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtFQWROOztFQW1CQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQWhCRjtFQWlCRTtJQUNFLGFBQUE7RUFmSjtFQW9CTTtJQUNFLGtCQUFBO0VBbEJSO0VBb0JVO0lBQ0UsWUFBQTtFQWxCWjtFQXdCSTtJQUNFLFNBQUE7RUF0Qk47RUF3Qkk7SUFDRSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQXRCTjtFQXdCTTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUF0QlI7RUF3Qk07SUFDRSxpQkFBQTtFQXRCUjtBQUNGO0FDeEdDO0VEeUlDO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUE5QkY7RUErQkU7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VBN0JKO0VBOEJJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBRUEsbUJBQUE7RUE3Qk47RUFnQ0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7RUE5Qko7RUErQkk7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQTdCTjtFQThCTTtJQUNFLFdBQUE7RUE1QlI7RUE4QlU7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7RUE1Qlo7RUE4QlU7SUFDRSxXQUFBO0VBNUJaO0VBZ0NNO0lBQ0Usa0JBQUE7SUFDQSx3QkFBQTtFQTlCUjtFQWlDSTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtFQS9CTjs7RUFvQ0E7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFqQ0Y7RUFrQ0U7SUFDRSxhQUFBO0VBaENKO0VBb0NJO0lBQ0UsU0FBQTtFQWxDTjtFQW9DSTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0VBbENOO0VBcUNVO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBbkNaO0VBcUNVO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUFuQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3NlbGVjdC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxubWF0LW9wdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5kaXYubWFpbkNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpdi5tZXNzYWdlIHtcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiM2MDdEOEI7XG5cbiAgICAuTG9uZ1Nsb2dhbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgXG4gICAgICBcbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGl2LmZvcm1JbmZvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMC41cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgZGl2LmVycm9yIHtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuKTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBAaW5jbHVkZSBib3hTaXppbmcoYm9yZGVyLWJveCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKHZhcigtLWNvbG9yLXByaW1hcnkpLCAycmVtLCBub3JtYWwsIGN1cnNpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBtYXQtZm9ybS1maWVsZC52YWxpZCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWZvcm0tZmllbGQuaW52YWxpZCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXdhcm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3Bhbi5hcnJvd3Mge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZGl2LmFjdGlvbnMge1xuICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA2cmVtO1xuICAgICAgICBtYXJnaW46IDAgMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZGl2LmRlbGl2ZXJ5TW9kZSB7XG4gIGZvcm0ge1xuICAgIGRpdi5hY3Rpb25zIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIERlc2t0b3Age1xuICBkaXYubWFpbkNvbnRhaW5lcntcbiAgICBcbiAgZGl2Lm1lc3NhZ2V7XG4gICAgXG4gXG4gIC5Mb25nU2xvZ2Fue1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59XG4gIH1cbn1cblxuQGluY2x1ZGUgTGFyZ2Uge1xuIFxuICBkaXYubWFpbkNvbnRhaW5lciB7XG4gICAgZm9ybSB7XG4gICAgICBkaXYuYWN0aW9ucyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XG4gICAgZm9ybSB7XG4gICAgICBkaXYuYWN0aW9ucyB7XG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQGluY2x1ZGUgU21hbGwge1xuICBkaXYubWFpbkNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXYubWVzc2FnZSB7XG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXYuc2VhcmNoTW9kZSB7XG4gICAgLm1hdC1hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZSB7XG4gICAgICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBTbWFsbHBob25lcyB7XG4gIGRpdi5tYWluQ29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDk4JTtcbiAgICBkaXYubWVzc2FnZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDFyZW07XG4gICAgICBoMSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9ybSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC0wLjVyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBkaXYuZm9ybUluZm8ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQuc3RhcnRQb2ludCB7XG4gICAgICAgICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzcGFuLmFycm93cyB7XG4gICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXYuYWN0aW9ucyB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICBkaXYubWVzc2FnZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgZGl2LmZvcm1JbmZvIHtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIGRpdi5pbnB1dCB7XG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGl2LmFjdGlvbnMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBkaXYuZm9ybUluZm8ge1xuICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5AaW5jbHVkZSBQaG9uZXMge1xuXG4gIFxuICBkaXYubWFpbkNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgZGl2Lm1lc3NhZ2Uge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMXJlbTtcbiAgICAgIGgxIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLy8gZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3JtIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTAuNXJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGRpdi5mb3JtSW5mbyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGl2LmlucHV0IHtcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZC5zdGFydFBvaW50IHtcbiAgICAgICAgICAgICAgdG9wOiAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNwYW4uYXJyb3dzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXYuYWN0aW9ucyB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICBkaXYubWVzc2FnZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgZGl2LmFjdGlvbnMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBkaXYuZm9ybUluZm8ge1xuICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgZGl2LmlucHV0IHtcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0OiAtMXJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgIC8vICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xufVxuXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xufVxuXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XG4gIH1cbn1cblxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbkBtaXhpbiBEZXNrdG9wIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG59XG4gIFxufVxuXG5AbWl4aW4gWExhcmdlIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gTGFyZ2Uge1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gTWVkaXVtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFdlYkxhbmRzY2FwZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBTbWFsbCB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbkBtaXhpbiBYU21hbGwge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gUGhvbmVzIHtcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gfVxufVxuXG5AbWl4aW4gU21hbGxwaG9uZXMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xuICAgICAgIEBjb250ZW50O1xuICB9XG4gfVxuXG4iXX0= */"], data: { animation: [
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectDirectionComponent, [{
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
    }], function () { return [{ type: _error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { startPointInputEl: [{
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionModule, [{
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

/***/ "e8Bi":
/*!************************************!*\
  !*** ./src/app/links/link-card.ts ***!
  \************************************/
/*! exports provided: LinkCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkCard", function() { return LinkCard; });
class LinkCard {
    constructor(title, link, description) {
        this.title = title;
        this.link = link;
        this.description = description;
        this.icolink = 'https://www.google.com/s2/favicons?domain=' + link;
    }
}


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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
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
/* harmony import */ var _select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-direction/select-direction.component */ "dUNL");










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
        this.router.navigate(['/search']);
    }
}
TripDirectionComponent.ɵfac = function TripDirectionComponent_Factory(t) { return new (t || TripDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TripDirectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TripDirectionComponent, selectors: [["app-trip-direction"]], hostBindings: function TripDirectionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popstate", function TripDirectionComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 0, template: function TripDirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-select-direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_5__["SelectDirectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9em;\n  color: white;\n  margin: 0%;\n  line-height: 1.5rem;\n  font-family: \"Anton\", sans-serif;\n  font-style: italic;\n  font-weight: lighter;\n  letter-spacing: 4px;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vdHJpcC1kaXJlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUM4R0M7RURyR0c7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBTEo7QUFDRjs7QUN5R0U7RUQ5RkU7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBUko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3RyaXAtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi9jaGVhcFRyaXBTdHlsZXMvbWl4aW5zLnNjc3MnO1xuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmRpdi5zbG9nYW4ge1xuICBwIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIH1cbn1cblxuQGluY2x1ZGUgUGhvbmVzIHtcbiAgZGl2LnNsb2dhbiB7XG4gICAgcCB7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBTbWFsbHBob25lcyB7XG4gIGRpdi5zbG9nYW4ge1xuICAgIHAge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbjogMCU7XG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XG59XG5cbkBtaXhpbiBib3JkZXJSYWQoJHZhbCkge1xuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XG59XG5cbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XG4gIGJveC1zaXppbmc6ICRib3hTaXppbmc7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250U2l6ZSwgJGZvbnRXZWlnaHQsICRmb250U3R5bGUpIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcbiAgfVxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcbiAgfVxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcbiAgfVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcbiAgfVxufVxuXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuQG1peGluIERlc2t0b3Age1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbn1cbiAgXG59XG5cbkBtaXhpbiBYTGFyZ2Uge1xuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBMYXJnZSB7XG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBNZWRpdW0ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBUYWJMYW5kc2NhcGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBUYWJQb3J0cmFpdCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kICAobWF4LXdpZHRoOiA4MzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBXZWJQb3J0cmFpdCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiAxMjgwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIFNtYWxsIHtcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuQG1peGluIFhTbWFsbCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIEhhbmRTZXRQb3J0cmFpdCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBIYW5kU2V0TGFuZFNjYXBlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcbiAgICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBQaG9uZXMge1xuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICBAY29udGVudDtcbiB9XG59XG5cbkBtaXhpbiBTbWFsbHBob25lcyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gIH1cbiB9XG5cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionComponent, [{
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
NoPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoPageComponent, selectors: [["app-no-page"]], decls: 3, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc no page
         */
        const MSG_EXTERNAL_nopage$$SRC_APP_NO_PAGE_NO_PAGE_COMPONENT_TS_1 = goog.getMsg("Sorry, no such page");
        i18n_0 = MSG_EXTERNAL_nopage$$SRC_APP_NO_PAGE_NO_PAGE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u041D\u0430 \u0436\u0430\u043B\u044C, \u0442\u0430\u043A\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043D\u0435\u043C\u0430\u0454";
    } return [[1, "mat-typography"], i18n_0]; }, template: function NoPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vLXBhZ2Uvbm8tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoPageComponent, [{
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
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo.component */ "ySb0");
/* harmony import */ var _search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-result.component */ "AvlM");






const routes = [
    {
        path: '', component: _search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"],
    },
    {
        path: 'logo', component: _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"],
    }
];
class SearchResultRoutingModule {
}
SearchResultRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchResultRoutingModule });
SearchResultRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchResultRoutingModule_Factory(t) { return new (t || SearchResultRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchResultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultRoutingModule, [{
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalFirstLetterPipe, [{
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
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links/links.component */ "5Luu");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-page/no-page.component */ "krUe");







const routes = [
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    //  { path: 'main',component: HeaderComponent},
    { path: '', redirectTo: '/search/myPath/logo', pathMatch: 'full' },
    {
        path: 'search',
        //   canActivate: [SearchResultGuard],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./trip-direction/trip-direction.module */ "dZhj")).then((m) => m.TripDirectionModule),
    },
    {
        path: 'links', component: _links_links_component__WEBPACK_IMPORTED_MODULE_3__["LinksComponent"]
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
    { path: '**', component: _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_4__["NoPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultModule, [{
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

/***/ "ySb0":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 1, vars: 0, consts: [["src", "assets\\images\\Logo_ChT_2.png", "alt", "logo", 1, "center"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: [".center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH0iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


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
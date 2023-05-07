var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"en-US"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(n){let i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en-us-posix"]=["en-US-POSIX",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","0/00","INF","NaN",":"],["0.######","0%","\xA4\xA00.00","0.000000E+000"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+hqa":
/*!******************************************************************!*\
  !*** ./src/app/currency-selector/currency-selector.component.ts ***!
  \******************************************************************/
/*! exports provided: CurrencySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySelectorComponent", function() { return CurrencySelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/global.service */ "Nrpk");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/http.service */ "9NvV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");










class CurrencySelectorComponent {
    constructor(document, globalLocale, router, httpService, globalService) {
        this.document = document;
        this.globalLocale = globalLocale;
        this.router = router;
        this.httpService = httpService;
        this.globalService = globalService;
        this.localesList = [
            { code: 'en-US', label: 'English', flag: 'us' },
        ];
    }
    ngOnInit() {
        this.selectedLocale = this.localesList[0];
        // this.localesList.forEach(element => {
        //   if (element.code==this.globalLocale){
        //     this.selectedLocale=element;
        //   }
        // });
        console.log("code found " + this.selectedLocale.code);
        this.httpService.getCurrencies().subscribe(data => {
            // console.log(data);
            // console.log("received currencies");
            // this.currencies=data.body;
            this.currencies = JSON.parse('[{"code":"EUR", "name":"Euro", "oneEuroRate":"1", "r2rSymbol":"€"}]');
            // this.currencies.sort(function(a, b){
            //   if (a.code=="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="ILS" && b.code!="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="USD" && b.code!="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="RUB" && b.code!="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="INR" && b.code!="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="UAH" && b.code!="EUR"){
            //     return -1;
            //   }
            //   return 0;
            // });
            this.setSelectedCurrency();
            this.setGlobalCurrency();
        });
    }
    setNewLocale() {
        let href = this.router.url;
        // console.log(this.selectedLocale.code);
        // console.log(this.router.url);
        // console.log ("navigate to... "+this.selectedLocale.code+href);
        console.log(document.location);
        window.location.assign(document.location.protocol + '//' + document.location.host + '/' + this.selectedLocale.code + '/#/' + href);
    }
    setSelectedCurrency() {
        //     let savedCurrencyCode = this.globalService.getCurrencyFromLocalStorage();
        this.selectedCurrency = this.currencies[0]; //euro is first
        //  console.log("got from local "+ this.selectedCurrency);
        //     this.currencies.forEach(element => {
        //       if (element.code==savedCurrencyCode){
        //         //found match
        //         this.selectedCurrency=element;
        //         console.log("found match "+this.selectedCurrency.name);
        //         return;
        //       }
        //     });
    }
    setGlobalCurrency() {
        console.log("Set global " + this.selectedCurrency.name);
        this.globalService.setCurrency(this.selectedCurrency);
    }
}
CurrencySelectorComponent.ɵfac = function CurrencySelectorComponent_Factory(t) { return new (t || CurrencySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"])); };
CurrencySelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencySelectorComponent, selectors: [["app-currency-selector"]], decls: 0, vars: 0, template: function CurrencySelectorComponent_Template(rf, ctx) { }, styles: ["mat-divider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.form-currency[_ngcontent-%COMP%] {\n  width: 70px !important;\n  color: white;\n  height: 100%;\n  margin-top: 10%;\n}\n\n.form-locale[_ngcontent-%COMP%] {\n  width: 50px !important;\n  color: white;\n  height: 100%;\n  margin-top: 10%;\n}\n\n.locale-selector[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n  height: 100%;\n  width: -moz-fit-content;\n  width: fit-content;\n  vertical-align: middle;\n}\n\n.currency-selector[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n  height: 100%;\n  width: -moz-fit-content;\n  width: fit-content;\n  vertical-align: middle;\n}\n\n.currency-selector[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.locale-selector[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n@media screen and (max-width: 359.99px) {\n  .form-currency[_ngcontent-%COMP%] {\n    width: 50px !important;\n  }\n\n  .form-locale[_ngcontent-%COMP%] {\n    width: 30px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVuY3ktc2VsZWN0b3IvY3VycmVuY3ktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtBQUZGOztBQW1CQTtFQUNHLGNBQUE7QUFoQkg7O0FBa0JBO0VBQ0csc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFmSDs7QUFrQkE7RUFDSSxzQkFBQTtFQUNELFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWZIOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHNCQUFBO0FBZEY7O0FBZ0JBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esc0JBQUE7QUFkSjs7QUEyQkM7RUFDQyxlQUFBO0FBeEJGOztBQTBCRTtFQUNFLGVBQUE7QUF2Qko7O0FDNkZFO0VEMURBO0lBQ0Usc0JBQUE7RUEvQkY7O0VBbUNEO0lBRUksc0JBQUE7RUFqQ0g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbmN5LXNlbGVjdG9yL2N1cnJlbmN5LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzJztcclxuXHJcblxyXG5tYXQtZGl2aWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgXHJcbn1cclxuOjpuZy1kZWVwIHtcclxuICAubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWZsZXh7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnBhbGV2aW9sZXRyZWQ7XHJcbiAgfVxyXG59XHJcbi8vIDo6bmctZGVlcCAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvd3tcclxuLy8gICAgcGFkZGluZzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIDo6bmctZGVlcCAubWF0LWJvZHkgcCwgLm1hdC1ib2R5LTEgcCwgLm1hdC10eXBvZ3JhcGh5IHB7XHJcbi8vICAgIG1hcmdpbjogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5zcGFjZXIge1xyXG4gICBmbGV4OiAxIDEgYXV0bztcclxuIH1cclxuLmZvcm0tY3VycmVuY3l7XHJcbiAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgIFxyXG59XHJcbi5mb3JtLWxvY2FsZXtcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmxvY2FsZS1zZWxlY3RvciA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4uY3VycmVuY3ktc2VsZWN0b3IgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAvLyBjb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuLy8gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuLy8gICAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4vLyAgIH1cclxuLy8gICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXh7XHJcbi8vICAgICBwYWRkaW5nOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMC44ICFpbXBvcnRhbnRcclxuLy8gIH1cclxuLy8gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuLy8gICAgIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuLy8gIH1cclxuIC5jdXJyZW5jeS1zZWxlY3RvciB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAubG9jYWxlLXNlbGVjdG9ye1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAvLyAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIC8vICAgZm9udC1zaXplOiAxLjFlbTtcclxuICB9XHJcbi8vICAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4vLyAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbi8vICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuLy8gICB9XHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBcclxuICAuZm9ybS1jdXJyZW5jeXtcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICBjb2xvcjogcGFsZXZpb2xldHJlZDtcclxuICAgIFxyXG4gfVxyXG4gLmZvcm0tbG9jYWxle1xyXG4gIC8vICBjb2xvcjogcGluaztcclxuICAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gfVxyXG5cclxufVxyXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxufVxyXG5cclxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbiAgYm94LXNpemluZzogJGJveFNpemluZztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbkBtaXhpbiBEZXNrdG9wIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG59XHJcbiAgXHJcbn1cclxuXHJcbkBtaXhpbiBYTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIE1lZGl1bSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFRhYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBUYWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gWFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFBob25lcyB7XHJcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxscGhvbmVzIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencySelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-selector',
                templateUrl: './currency-selector.component.html',
                styleUrls: ['./currency-selector.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\38096\Desktop\cheapTrip-lika\CheapTripAngularClient\cheapTrip\src\main.ts */"zUnb");


/***/ }),

/***/ "1u3u":
/*!**********************************************************!*\
  !*** ./src/app/budget-travel/budget-travel.component.ts ***!
  \**********************************************************/
/*! exports provided: BudgetTravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetTravelComponent", function() { return BudgetTravelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BudgetTravelComponent_ng_template_12_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetTravelComponent_ng_template_12_li_4_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const city_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.showCityInfo(city_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", city_r4.imageUrlW, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", city_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", city_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", city_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r4.name);
} }
function BudgetTravelComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The most popular cities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BudgetTravelComponent_ng_template_12_li_4_Template, 8, 5, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cities);
} }
function BudgetTravelComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The most popular countries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "picture", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "picture", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "source", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "source", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "picture", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "source", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "source", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Great Britain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetTravelComponent_div_14_ul_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fact_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fact_r9, " ");
} }
function BudgetTravelComponent_div_14_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetTravelComponent_div_14_li_21_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const city_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.showCityInfo(city_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "", city_r10.imageUrlW, " 1x", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "", city_r10.imageUrl, " 1x", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", city_r10.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", city_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r10.name);
} }
function BudgetTravelComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fun facts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BudgetTravelComponent_div_14_ul_14_Template, 3, 1, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Find routes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Also check this");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BudgetTravelComponent_div_14_li_21_Template, 8, 5, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.selectedCity.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedCity.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedCity.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.selectedCity.facts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cities);
} }
class BudgetTravelComponent {
    constructor() {
        this.cities = [
            {
                name: 'Paris',
                imageUrl: 'assets/images/images_budget/paris.jpg',
                imageUrlW: 'assets/images/images_budget/paris.webp',
                description: 'Paris is the capital and most populous city of France.',
                facts: [
                    'France Is the Most-Visited Country in the World',
                    'France Is Smaller Than Texas',
                    'France Has the Largest Art Museum.',
                    'The French Eat 25,000 Tons of Snails Each Year.',
                    'France Produces Over 1,500 Types of Cheese.',
                    "Supermarkets in France Can't Throw Away Food.",
                ],
            },
            {
                name: 'London',
                imageUrl: 'assets/images/images_budget/london.jpg',
                imageUrlW: 'assets/images/images_budget/london.webp',
                description: ' Great Britain is an island in the North Atlantic Ocean off the north-west coast of continental Europe. With an area of 209,331 km2 (80,823 sq mi), it is the largest of the British Isles, the largest European island and the ninth-largest island in the world. It is dominated by a maritime climate with narrow temperature differences between seasons.',
                facts: [''],
            },
        ];
        this.selectedCity = null;
    }
    ngOnInit() { }
    showCityInfo(city) {
        this.selectedCity = city;
    }
}
BudgetTravelComponent.ɵfac = function BudgetTravelComponent_Factory(t) { return new (t || BudgetTravelComponent)(); };
BudgetTravelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetTravelComponent, selectors: [["app-budget-travel"]], decls: 15, vars: 3, consts: [[1, "pb-5"], [1, "container", "section", "section--search"], [1, "search-form"], [1, "row", "justify-content-between", "search-group"], [1, "col-12", "col-md-6", "mb-3", "mb-md-0", "search-item"], ["for", "cityfrom", 1, "search-item__label"], ["type", "text", "id", "find_city", "placeholder", "Enter city name", "maxlength", "50", 1, "search-item__input"], [1, "row"], [1, "col-12", "text-center"], ["type", "submit", "aria-label", "find most beneficial and unusual routes between cities", 1, "action-btn", "mt-3"], [3, "ngIf"], [4, "ngIf"], [1, "container", "section"], [1, "section-title"], [1, "mt-3", "places"], ["class", "card card--additional", 4, "ngFor", "ngForOf"], [1, "card", "card--additional"], ["type", "image/webp", 3, "srcset"], ["type", "image/jpeg", 3, "srcset"], ["width", "375", "height", "250", "loading", "lazy", 1, "card-img-top", "places__img", 3, "srcset", "alt", "click"], [1, "card-body", "py-2", "py-lg-3", "text-center"], [1, "card-text", "card-title"], [1, "card", "card--additional", "mt-3"], [1, "gallery"], [1, "gallery__item"], ["srcset", "assets/images/images_budget/london.webp 1x", "type", "image/webp"], ["srcset", "assets/images/images_budget/london.jpg 1x", "type", "image/jpeg"], ["src", "assets/images/images_budget/london.jpg", "width", "375", "height", "250", "alt", "Great Britain", "loading", "lazy", 1, "gallery__img"], ["srcset", "assets/images/images_budget/london1.webp 1x", "type", "image/webp"], ["srcset", "assets/images/images_budget/london1.jpg 1x", "type", "image/jpeg"], ["src", "assets/images/images_budget/london1.jpg", "width", "375", "height", "299", "alt", "Great Britain", "loading", "lazy", 1, "gallery__img"], [1, "img-container"], ["alt", "City", 1, "city-img", 3, "src"], [1, "city-details"], [1, "city-details__title"], [1, "city-details__text"], ["class", "city-details__list", 4, "ngFor", "ngForOf"], ["href", "#", 1, "city-details__button"], [1, "city-details__list"], [1, "city-details__li"]], template: function BudgetTravelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Find a city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BudgetTravelComponent_ng_template_12_Template, 5, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BudgetTravelComponent_ng_template_13_Template, 24, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BudgetTravelComponent_div_14_Template, 22, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCity);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\n\n.section[_ngcontent-%COMP%] {\n  min-width: 200px;\n  background-color: #fff;\n  margin: 2rem auto 0;\n}\n\n@media (min-width: 576px) {\n  .section[_ngcontent-%COMP%] {\n    margin: 4rem auto 0;\n  }\n}\n\n.section--search[_ngcontent-%COMP%] {\n  margin: 1rem auto 0;\n}\n\n@media (min-width: 576px) {\n  .section--search[_ngcontent-%COMP%] {\n    margin: 2rem auto 0;\n  }\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  color: #000;\n}\n\n@media (min-width: 576px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  min-width: 200px;\n  background-color: #ff5722;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 0.5rem 2px 1rem;\n}\n\n.headline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.headline__logo[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: bolder;\n  font-size: 1.6rem;\n  color: #fff;\n}\n\n@media (min-width: 350px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n\n@media (min-width: 576px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 2.3rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 3.3rem;\n  }\n}\n\n.headline__slogan[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  font-size: 1rem;\n  font-style: italic;\n  font-weight: bolder;\n  color: #fff;\n  display: none;\n}\n\n@media (min-width: 410px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n@media (min-width: 576px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.menu[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n\n.menu__btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 50%;\n  height: 3rem;\n  width: 3rem;\n  background-color: #ff5722;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu__btn[_ngcontent-%COMP%]:hover, .menu__btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.services[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100vh;\n  box-shadow: 0px 6px 7px #000;\n  border-radius: 0;\n  background-color: #ff5722;\n}\n\n@media (min-width: 200px) {\n  .services[_ngcontent-%COMP%] {\n    top: 50% !important;\n    left: 100% !important;\n    transform: translate(-100%, -50%) !important;\n  }\n}\n\n.services__item[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 0 !important;\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n}\n\n.services__item[_ngcontent-%COMP%]:hover, .services__item[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.04) !important;\n}\n\n.services__item--close[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  border-radius: 50% !important;\n}\n\n.services-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 35px 5px 35px 10px;\n}\n\n.services-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 400;\n  color: #fff;\n}\n\n.item-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  padding-left: 8px;\n  display: inline-block;\n}\n\n@media (min-width: 768px) {\n  .search-form[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n.search-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 768px) {\n  .search-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n    min-width: 100%;\n  }\n}\n\n.search-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 768px) {\n  .search-item[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n.search-item__label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 300;\n  color: #000;\n}\n\n.search-item__input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ff5722;\n  padding: 0.9rem 0.6rem;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: #000;\n}\n\n.search-item__input[_ngcontent-%COMP%]::placeholder {\n  font-weight: 300;\n  color: #bbb;\n}\n\n@media (min-width: 768px) {\n  .search-item__input[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    min-width: 100%;\n  }\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ff5722;\n  color: #fff;\n  background-color: #ff5722;\n  padding: 0.4rem 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  min-width: 100%;\n}\n\n.action-btn[_ngcontent-%COMP%]:hover, .action-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ca2f00c7;\n  background-color: #ca2f00c7;\n}\n\n@media (min-width: 576px) {\n  .action-btn[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n.action-btn--additional[_ngcontent-%COMP%] {\n  border: 1px solid #cecece;\n  color: #000;\n  background-color: #fff;\n}\n\n.action-btn--additional[_ngcontent-%COMP%]:hover, .action-btn--additional[_ngcontent-%COMP%]:focus {\n  border-color: #cecece;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.card--additional[_ngcontent-%COMP%] {\n  border: 1px solid #cecece;\n  box-shadow: none;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  color: #000;\n}\n\n@media (min-width: 768px) {\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n.places[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1rem;\n}\n\n.places__img[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 120px;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #cecece;\n  overflow: hidden;\n  border-top-left-radius: var(--mdb-card-inner-border-radius);\n  border-top-right-radius: var(--mdb-card-inner-border-radius);\n  border-bottom: 1px solid #cecece;\n}\n\n.gallery__item[_ngcontent-%COMP%] {\n  max-width: 25%;\n  min-height: 120px;\n  max-height: 250px;\n  object-fit: cover;\n}\n\n.gallery__item[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #cecece;\n}\n\n.gallery__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\n\n.section[_ngcontent-%COMP%] {\n  min-width: 200px;\n  background-color: #fff;\n  margin: 2rem auto 0;\n}\n\n@media (min-width: 576px) {\n  .section[_ngcontent-%COMP%] {\n    margin: 4rem auto 0;\n    max-width: 33vw;\n  }\n}\n\n.section--search[_ngcontent-%COMP%] {\n  margin: 1rem auto 0;\n}\n\n@media (min-width: 576px) {\n  .section--search[_ngcontent-%COMP%] {\n    margin: 2rem auto 0;\n  }\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: #000;\n  margin-bottom: 20px;\n}\n\n@media (min-width: 576px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  min-width: 200px;\n  background-color: #ff5722;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 0.5rem 2px 1rem;\n}\n\n.headline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.headline__logo[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: bolder;\n  font-size: 1.6rem;\n  color: #fff;\n}\n\n@media (min-width: 350px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n\n@media (min-width: 576px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 2.3rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 3.3rem;\n  }\n}\n\n.headline__slogan[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  font-size: 1rem;\n  font-style: italic;\n  font-weight: bolder;\n  color: #fff;\n  display: none;\n}\n\n@media (min-width: 410px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n@media (min-width: 576px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.menu[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n\n.menu__btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 50%;\n  height: 3rem;\n  width: 3rem;\n  background-color: #ff5722;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu__btn[_ngcontent-%COMP%]:hover, .menu__btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.services[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100vh;\n  box-shadow: 0px 6px 7px #000;\n  border-radius: 0;\n  background-color: #ff5722;\n}\n\n@media (min-width: 200px) {\n  .services[_ngcontent-%COMP%] {\n    top: 50% !important;\n    left: 100% !important;\n    transform: translate(-100%, -50%) !important;\n  }\n}\n\n.services__item[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 0 !important;\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n}\n\n.services__item[_ngcontent-%COMP%]:hover, .services__item[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.04) !important;\n}\n\n.services__item--close[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  border-radius: 50% !important;\n}\n\n.services-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 35px 5px 35px 10px;\n}\n\n.services-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 400;\n  color: #fff;\n}\n\n.item-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  padding-left: 8px;\n  display: inline-block;\n}\n\n.search-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 768px) {\n  .search-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n    min-width: 100%;\n  }\n}\n\n.search-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 768px) {\n  .search-item[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n.search-item__label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 300;\n  color: #000;\n}\n\n.search-item__input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ff5722;\n  padding: 0.9rem 0.6rem;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: #000;\n}\n\n.search-item__input[_ngcontent-%COMP%]::placeholder {\n  font-weight: 300;\n  color: #bbb;\n}\n\n@media (min-width: 768px) {\n  .search-item__input[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    min-width: 100%;\n  }\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ff5722;\n  color: #fff;\n  background-color: #ff5722;\n  padding: 0.4rem 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  min-width: 100%;\n}\n\n.action-btn[_ngcontent-%COMP%]:hover, .action-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ca2f00c7;\n  background-color: #ca2f00c7;\n}\n\n@media (min-width: 576px) {\n  .action-btn[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n.action-btn--additional[_ngcontent-%COMP%] {\n  border: 1px solid #cecece;\n  color: #000;\n  background-color: #fff;\n}\n\n.action-btn--additional[_ngcontent-%COMP%]:hover, .action-btn--additional[_ngcontent-%COMP%]:focus {\n  border-color: #cecece;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.card--additional[_ngcontent-%COMP%] {\n  border: 1px solid #cecece;\n  box-shadow: none;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  color: #000;\n}\n\n@media (min-width: 768px) {\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n.places[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1rem;\n}\n\n.places__img[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 120px;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #cecece;\n  overflow: hidden;\n  border-top-left-radius: var(--mdb-card-inner-border-radius);\n  border-top-right-radius: var(--mdb-card-inner-border-radius);\n  border-bottom: 1px solid #cecece;\n}\n\n.gallery__item[_ngcontent-%COMP%] {\n  max-width: 25%;\n  min-height: 120px;\n  max-height: 250px;\n  object-fit: cover;\n}\n\n.gallery__item[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #cecece;\n}\n\n.gallery__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.city-img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 32px;\n}\n\n@media (min-width: 768px) {\n  .city-img[_ngcontent-%COMP%] {\n    max-width: 33%;\n    min-width: 33%;\n    margin: 32px auto 0;\n  }\n}\n\n.city-details__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: #000;\n  margin-bottom: 20px;\n}\n\n@media (min-width: 576px) {\n  .city-details__title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .city-details__title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n\n.city-details__text[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.city-details__list[_ngcontent-%COMP%] {\n  list-style: inside;\n  color: #000;\n}\n\n.city-details__button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 18px;\n  margin-bottom: 15px;\n  text-decoration: none;\n  border-radius: 8px;\n  border: 1px solid #ff5722;\n  color: #fff;\n  background-color: #ff5722;\n  padding: 0.4rem 0;\n  font-size: 1rem;\n  font-weight: 300;\n  min-width: 100%;\n  line-height: 38px;\n  text-align: center;\n}\n\n.city-details__button[_ngcontent-%COMP%]:hover, .city-details__button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ca2f00c7;\n  background-color: #ca2f00c7;\n  color: #fff;\n}\n\n@media (min-width: 576px) {\n  .city-details__button[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jaGVhcFRyaXBTdHlsZXMvY3NzX21haW5fYnVkZ2V0L19jdXN0b20tcmVzZXQuc2NzcyIsInNyYy9hcHAvYnVkZ2V0LXRyYXZlbC9idWRnZXQtdHJhdmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9jc3NfbWFpbl9idWRnZXQvX3NlY3Rpb25zLnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL2Nzc19tYWluX2J1ZGdldC9fdmFycy5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9jc3NfbWFpbl9idWRnZXQvX2hlYWRlci5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9jc3NfbWFpbl9idWRnZXQvX3NlYXJjaC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9jc3NfbWFpbl9idWRnZXQvX2NhcmRzLnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL2Nzc19jaXR5L19jdXN0b20tcmVzZXQuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvY3NzX2NpdHkvX3NlY3Rpb25zLnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL2Nzc19jaXR5L192YXJzLnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL2Nzc19jaXR5L19oZWFkZXIuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvY3NzX2NpdHkvX3NlYXJjaC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9jc3NfY2l0eS9fY2FyZHMuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvY3NzX2NpdHkvX2NpdHktaW1nLnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL2Nzc19jaXR5L19jaXR5LWRldGFpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRERBOzs7O0VBSUUscUJBQUE7QUNJRjs7QUN4QkE7RUFDRSxnQkNEWTtFREVaLHNCQ01nQjtFRExoQixtQkFBQTtBRDJCRjs7QUMxQkU7RUFKRjtJQUtJLG1CQUFBO0VENkJGO0FBQ0Y7O0FDMUJBO0VBQ0UsbUJBQUE7QUQ2QkY7O0FDNUJFO0VBRkY7SUFHSSxtQkFBQTtFRCtCRjtBQUNGOztBQzVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdDYmdCO0FGNENsQjs7QUM5QkU7RUFKRjtJQUtJLGlCQUFBO0VEaUNGO0FBQ0Y7O0FDaENFO0VBUEY7SUFRSSxpQkFBQTtFRG1DRjtBQUNGOztBRzVEQTtFQUNFLGdCRERZO0VDRVoseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FIK0RGOztBRzVEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBSCtERjs7QUc1REE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRFhrQjtBRjBFcEI7O0FHOURFO0VBTEY7SUFNSSxlQUFBO0VIaUVGO0FBQ0Y7O0FHaEVFO0VBUkY7SUFTSSxpQkFBQTtFSG1FRjtBQUNGOztBR2xFRTtFQVhGO0lBWUksaUJBQUE7RUhxRUY7QUFDRjs7QUdsRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0Q1QmtCO0VDNkJsQixhQUFBO0FIcUVGOztBR3BFRTtFQVBGO0lBUUksZUFBQTtFSHVFRjtBQUNGOztBR3RFRTtFQVZGO0lBV0ksaUJBQUE7RUh5RUY7QUFDRjs7QUd4RUU7RUFiRjtJQWNJLGlCQUFBO0VIMkVGO0FBQ0Y7O0FHeEVBO0VBQ0UsZ0JBQUE7QUgyRUY7O0FHeEVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkR2RGM7RUN3RGQsV0RuRGtCO0VDb0RsQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBSDJFRjs7QUcxRUU7RUFFRSxhQUFBO0VBQ0EscUNBQUE7QUgyRUo7O0FHdkVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJEeEVjO0FGa0poQjs7QUd6RUU7RUFORjtJQU9JLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSw0Q0FBQTtFSDRFRjtBQUNGOztBR3pFQTtFQUNFLFdENUVrQjtFQzZFbEIsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBSDRFRjs7QUczRUU7RUFFRSxhQUFBO0VBQ0EsV0RwRmdCO0VDcUZoQixnREFBQTtBSDRFSjs7QUd4RUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FIMkVGOztBR3hFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUgyRUY7O0FHeEVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdEekdrQjtBRm9McEI7O0FHeEVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBSDJFRjs7QUlqTUU7RUFERjtJQUVJLGVBQUE7RUpxTUY7QUFDRjs7QUlsTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUpxTUY7O0FJcE1FO0VBSEY7SUFJSSxtQkFBQTtJQUNBLGVBQUE7RUp1TUY7QUFDRjs7QUlwTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUp1TUY7O0FJdE1FO0VBSEY7SUFJSSxlQUFBO0VKeU1GO0FBQ0Y7O0FJdE1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0ZwQmdCO0FGNk5sQjs7QUl0TUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0Y3QmdCO0FGc09sQjs7QUl4TUU7RUFDRSxnQkFBQTtFQUNBLFdGakNnQjtBRjJPcEI7O0FJeE1FO0VBWEY7SUFZSSxlQUFBO0lBQ0EsZUFBQTtFSjJNRjtBQUNGOztBSXhNQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXRjFDa0I7RUUyQ2xCLHlCRmhEYztFRWlEZCxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FKMk1GOztBSTFNRTtFQUVFLGFBQUE7RUFDQSx1QkZ2RGlCO0VFd0RqQiwyQkZ4RGlCO0FGbVFyQjs7QUl6TUU7RUFmRjtJQWdCSSxpQkFBQTtFSjRNRjtBQUNGOztBSXpNQTtFQUNFLHlCQUFBO0VBQ0EsV0Y5RGdCO0VFK0RoQixzQkY3RGdCO0FGeVFsQjs7QUkzTUU7RUFFRSxxQkZwRVc7RUVxRVgscUNBQUE7QUo0TUo7O0FLclJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBTHdSRjs7QUtyUkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXSEZnQjtBRjBSbEI7O0FLdlJFO0VBSkY7SUFLSSxpQkFBQTtFTDBSRjtBQUNGOztBS3ZSQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUwwUkY7O0FLdlJBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUwwUkY7O0FLdlJBO0VBQ0UsYUFBQTtFQUNBLHlCSDFCYTtFRzJCYixnQkFBQTtFQUNBLDJEQUFBO0VBQ0EsNERBQUE7RUFDQSxnQ0FBQTtBTDBSRjs7QUt2UkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FMMFJGOztBS3pSRTtFQUNFLCtCQUFBO0FMMlJKOztBS3ZSQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBTDBSRjs7QU03VUE7O0VBRUUsU0FBQTtFQUNBLFVBQUE7QU5nVkY7O0FNOVVBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtBTmlWRjs7QU0vVUE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FOa1ZGOztBTWhWQTs7OztFQUlFLHFCQUFBO0FObVZGOztBT3ZXQTtFQUNFLGdCQ0RZO0VERVosc0JDTWdCO0VETGhCLG1CQUFBO0FQMFdGOztBT3pXRTtFQUpGO0lBS0ksbUJBQUE7SUFDQSxlQUFBO0VQNFdGO0FBQ0Y7O0FPeldBO0VBQ0UsbUJBQUE7QVA0V0Y7O0FPM1dFO0VBRkY7SUFHSSxtQkFBQTtFUDhXRjtBQUNGOztBTzNXQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQ2RnQjtFRGVoQixtQkFBQTtBUDhXRjs7QU83V0U7RUFMRjtJQU1JLGlCQUFBO0VQZ1hGO0FBQ0Y7O0FPL1dFO0VBUkY7SUFTSSxpQkFBQTtFUGtYRjtBQUNGOztBUzdZQTtFQUNFLGdCRERZO0VDRVoseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FUZ1pGOztBUzdZQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBVGdaRjs7QVM3WUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRFhrQjtBUjJacEI7O0FTL1lFO0VBTEY7SUFNSSxlQUFBO0VUa1pGO0FBQ0Y7O0FTalpFO0VBUkY7SUFTSSxpQkFBQTtFVG9aRjtBQUNGOztBU25aRTtFQVhGO0lBWUksaUJBQUE7RVRzWkY7QUFDRjs7QVNuWkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0Q1QmtCO0VDNkJsQixhQUFBO0FUc1pGOztBU3JaRTtFQVBGO0lBUUksZUFBQTtFVHdaRjtBQUNGOztBU3ZaRTtFQVZGO0lBV0ksaUJBQUE7RVQwWkY7QUFDRjs7QVN6WkU7RUFiRjtJQWNJLGlCQUFBO0VUNFpGO0FBQ0Y7O0FTelpBO0VBQ0UsZ0JBQUE7QVQ0WkY7O0FTelpBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkR2RGM7RUN3RGQsV0RuRGtCO0VDb0RsQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBVDRaRjs7QVMzWkU7RUFFRSxhQUFBO0VBQ0EscUNBQUE7QVQ0Wko7O0FTeFpBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJEeEVjO0FSbWVoQjs7QVMxWkU7RUFORjtJQU9JLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSw0Q0FBQTtFVDZaRjtBQUNGOztBUzFaQTtFQUNFLFdENUVrQjtFQzZFbEIsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBVDZaRjs7QVM1WkU7RUFFRSxhQUFBO0VBQ0EsV0RwRmdCO0VDcUZoQixnREFBQTtBVDZaSjs7QVN6WkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FUNFpGOztBU3paQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QVQ0WkY7O0FTelpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdEekdrQjtBUnFnQnBCOztBU3paQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QVQ0WkY7O0FVbmhCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBVnNoQkY7O0FVcmhCRTtFQUhGO0lBSUksbUJBQUE7SUFDQSxlQUFBO0VWd2hCRjtBQUNGOztBVXJoQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QVZ3aEJGOztBVXZoQkU7RUFIRjtJQUlJLGVBQUE7RVYwaEJGO0FBQ0Y7O0FVdmhCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdGZGdCO0FSd2lCbEI7O0FVdmhCQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXRnZCZ0I7QVJpakJsQjs7QVV6aEJFO0VBQ0UsZ0JBQUE7RUFDQSxXRjNCZ0I7QVJzakJwQjs7QVV6aEJFO0VBWEY7SUFZSSxlQUFBO0lBQ0EsZUFBQTtFVjRoQkY7QUFDRjs7QVV6aEJBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdGcENrQjtFRXFDbEIseUJGMUNjO0VFMkNkLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QVY0aEJGOztBVTNoQkU7RUFFRSxhQUFBO0VBQ0EsdUJGakRpQjtFRWtEakIsMkJGbERpQjtBUjhrQnJCOztBVTFoQkU7RUFmRjtJQWdCSSxpQkFBQTtFVjZoQkY7QUFDRjs7QVUxaEJBO0VBQ0UseUJBQUE7RUFDQSxXRnhEZ0I7RUV5RGhCLHNCRnZEZ0I7QVJvbEJsQjs7QVU1aEJFO0VBRUUscUJGOURXO0VFK0RYLHFDQUFBO0FWNmhCSjs7QVdobUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBWG1tQkY7O0FXaG1CQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdIRmdCO0FScW1CbEI7O0FXbG1CRTtFQUpGO0lBS0ksaUJBQUE7RVhxbUJGO0FBQ0Y7O0FXbG1CQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QVhxbUJGOztBV2xtQkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBWHFtQkY7O0FXbG1CQTtFQUNFLGFBQUE7RUFDQSx5QkgxQmE7RUcyQmIsZ0JBQUE7RUFDQSwyREFBQTtFQUNBLDREQUFBO0VBQ0EsZ0NBQUE7QVhxbUJGOztBV2xtQkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FYcW1CRjs7QVdwbUJFO0VBQ0UsK0JBQUE7QVhzbUJKOztBV2xtQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QVhxbUJGOztBWXhwQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FaMnBCRjs7QVl4cEJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FaMnBCRjs7QVl6cEJFO0VBSkY7SUFLSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VaNHBCRjtBQUNGOztBYXpxQkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0xFYztFS0FkLG1CQUFBO0FiMnFCSjs7QWExcUJJO0VBTkY7SUFPSSxpQkFBQTtFYjZxQko7QUFDRjs7QWE1cUJJO0VBVEY7SUFVSSxpQkFBQTtFYitxQko7QUFDRjs7QWE1cUJFO0VBQ0UsV0xWYztBUndyQmxCOztBYTNxQkU7RUFDRSxrQkFBQTtFQUNBLFdMZmM7QVI0ckJsQjs7QWExcUJFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0x4QmdCO0VLeUJoQix5Qkw5Qlk7RUsrQlosaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBYjRxQko7O0FhM3FCSTtFQUVFLGFBQUE7RUFDQSx1Qkx2Q2U7RUt3Q2YsMkJMeENlO0VLeUNmLFdMckNjO0FSaXRCcEI7O0FhMXFCSTtFQXRCRjtJQXVCSSxpQkFBQTtFYjZxQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1ZGdldC10cmF2ZWwvYnVkZ2V0LXRyYXZlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiwgXHJcbmlucHV0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5oMSxcclxuaDIsXHJcbmgze1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuYSxcclxuYTpob3ZlcixcclxuYTpmb2N1cyxcclxuYTphY3RpdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSIsImJ1dHRvbixcbmlucHV0IHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmEsXG5hOmhvdmVyLFxuYTpmb2N1cyxcbmE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMnJlbSBhdXRvIDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIG1hcmdpbjogNHJlbSBhdXRvIDA7XG4gIH1cbn1cblxuLnNlY3Rpb24tLXNlYXJjaCB7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tLXNlYXJjaCB7XG4gICAgbWFyZ2luOiAycmVtIGF1dG8gMDtcbiAgfVxufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAwLjVyZW0gMnB4IDFyZW07XG59XG5cbi5oZWFkbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkbGluZV9fbG9nbyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XG4gIC5oZWFkbGluZV9fbG9nbyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRsaW5lX19sb2dvIHtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkbGluZV9fbG9nbyB7XG4gICAgZm9udC1zaXplOiAzLjNyZW07XG4gIH1cbn1cblxuLmhlYWRsaW5lX19zbG9nYW4ge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMHB4KSB7XG4gIC5oZWFkbGluZV9fc2xvZ2FuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGxpbmVfX3Nsb2dhbiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGxpbmVfX3Nsb2dhbiB7XG4gICAgZm9udC1zaXplOiAyLjFyZW07XG4gIH1cbn1cblxuLm1lbnUge1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4ubWVudV9fYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51X19idG46aG92ZXIsIC5tZW51X19idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4uc2VydmljZXMge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjAwcHgpIHtcbiAgLnNlcnZpY2VzIHtcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc2VydmljZXNfX2l0ZW0ge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZXJ2aWNlc19faXRlbTpob3ZlciwgLnNlcnZpY2VzX19pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCkgIWltcG9ydGFudDtcbn1cblxuLnNlcnZpY2VzX19pdGVtLS1jbG9zZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uc2VydmljZXMtdGl0bGUtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzVweCA1cHggMzVweCAxMHB4O1xufVxuXG4uc2VydmljZXMtdGl0bGUge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXRlbS10ZXh0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1mb3JtIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnNlYXJjaC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnNlYXJjaC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VhcmNoLWl0ZW0ge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc2VhcmNoLWl0ZW1fX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNlYXJjaC1pdGVtX19pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTcyMjtcbiAgcGFkZGluZzogMC45cmVtIDAuNnJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlYXJjaC1pdGVtX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2JiYjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VhcmNoLWl0ZW1fX2lucHV0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY1NzIyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgcGFkZGluZzogMC40cmVtIDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uYWN0aW9uLWJ0bjpob3ZlciwgLmFjdGlvbi1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICNjYTJmMDBjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhMmYwMGM3O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5hY3Rpb24tYnRuIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufVxuXG4uYWN0aW9uLWJ0bi0tYWRkaXRpb25hbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmFjdGlvbi1idG4tLWFkZGl0aW9uYWw6aG92ZXIsIC5hY3Rpb24tYnRuLS1hZGRpdGlvbmFsOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjZWNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4uY2FyZC0tYWRkaXRpb25hbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cblxuLnBsYWNlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG5cbi5wbGFjZXNfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdhbGxlcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1tZGItY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLW1kYi1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcbn1cblxuLmdhbGxlcnlfX2l0ZW0ge1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5nYWxsZXJ5X19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG4uZ2FsbGVyeV9faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5idXR0b24sXG5pbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNlY3Rpb24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDJyZW0gYXV0byAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uIHtcbiAgICBtYXJnaW46IDRyZW0gYXV0byAwO1xuICAgIG1heC13aWR0aDogMzN2dztcbiAgfVxufVxuXG4uc2VjdGlvbi0tc2VhcmNoIHtcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi0tc2VhcmNoIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwO1xuICB9XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMXJlbTtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggMC41cmVtIDJweCAxcmVtO1xufVxuXG4uaGVhZGxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGxpbmVfX2xvZ28ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkge1xuICAuaGVhZGxpbmVfX2xvZ28ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5oZWFkbGluZV9fbG9nbyB7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGxpbmVfX2xvZ28ge1xuICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xuICB9XG59XG5cbi5oZWFkbGluZV9fc2xvZ2FuIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTBweCkge1xuICAuaGVhZGxpbmVfX3Nsb2dhbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRsaW5lX19zbG9nYW4ge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRsaW5lX19zbG9nYW4ge1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICB9XG59XG5cbi5tZW51IHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLm1lbnVfX2J0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudV9fYnRuOmhvdmVyLCAubWVudV9fYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLnNlcnZpY2VzIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDdweCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwMHB4KSB7XG4gIC5zZXJ2aWNlcyB7XG4gICAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnNlcnZpY2VzX19pdGVtIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VydmljZXNfX2l0ZW06aG92ZXIsIC5zZXJ2aWNlc19faXRlbTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpICFpbXBvcnRhbnQ7XG59XG5cbi5zZXJ2aWNlc19faXRlbS0tY2xvc2Uge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLnNlcnZpY2VzLXRpdGxlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDM1cHggNXB4IDM1cHggMTBweDtcbn1cblxuLnNlcnZpY2VzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLml0ZW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlYXJjaC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnNlYXJjaC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VhcmNoLWl0ZW0ge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc2VhcmNoLWl0ZW1fX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNlYXJjaC1pdGVtX19pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTcyMjtcbiAgcGFkZGluZzogMC45cmVtIDAuNnJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlYXJjaC1pdGVtX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2JiYjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VhcmNoLWl0ZW1fX2lucHV0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY1NzIyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgcGFkZGluZzogMC40cmVtIDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uYWN0aW9uLWJ0bjpob3ZlciwgLmFjdGlvbi1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICNjYTJmMDBjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhMmYwMGM3O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5hY3Rpb24tYnRuIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufVxuXG4uYWN0aW9uLWJ0bi0tYWRkaXRpb25hbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmFjdGlvbi1idG4tLWFkZGl0aW9uYWw6aG92ZXIsIC5hY3Rpb24tYnRuLS1hZGRpdGlvbmFsOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjZWNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4uY2FyZC0tYWRkaXRpb25hbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cblxuLnBsYWNlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG5cbi5wbGFjZXNfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdhbGxlcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1tZGItY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLW1kYi1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcbn1cblxuLmdhbGxlcnlfX2l0ZW0ge1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5nYWxsZXJ5X19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG4uZ2FsbGVyeV9faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNpdHktaW1nIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jaXR5LWltZyB7XG4gICAgbWF4LXdpZHRoOiAzMyU7XG4gICAgbWluLXdpZHRoOiAzMyU7XG4gICAgbWFyZ2luOiAzMnB4IGF1dG8gMDtcbiAgfVxufVxuXG4uY2l0eS1kZXRhaWxzX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY2l0eS1kZXRhaWxzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2l0eS1kZXRhaWxzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjlyZW07XG4gIH1cbn1cbi5jaXR5LWRldGFpbHNfX3RleHQge1xuICBjb2xvcjogIzAwMDtcbn1cbi5jaXR5LWRldGFpbHNfX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBpbnNpZGU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNpdHktZGV0YWlsc19fYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTcyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaXR5LWRldGFpbHNfX2J1dHRvbjpob3ZlciwgLmNpdHktZGV0YWlsc19fYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjY2EyZjAwYzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYTJmMDBjNztcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNpdHktZGV0YWlsc19fYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufSIsIi5zZWN0aW9uIHtcclxuICBtaW4td2lkdGg6ICRtaW4tY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmFjay1tYWluO1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvIDA7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbSkge1xyXG4gICAgbWFyZ2luOiA0cmVtIGF1dG8gMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLS1zZWFyY2gge1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvIDA7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbSkge1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG8gMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtbWFpbjtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgfVxyXG59IiwiJG1pbi1jb250ZW50OiAyMDBweDtcclxuXHJcbiRjb2xvci1wcmltYXJ5OiAjZmY1NzIyO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjY2EyZjAwYzc7XHJcbiRjb2xvci1ib3JkZXI6ICNjZWNlY2U7XHJcbiRjb2xvci1wbGFjZWhvbGRlcjogI2JiYjtcclxuJGNvbG9yLWZvbnQtbWFpbjogIzAwMDtcclxuJGNvbG9yLWZvbnQtc2Vjb25kOiAjZmZmO1xyXG4kY29sb3ItYmFjay1tYWluOiAjZmZmO1xyXG5cclxuJGJwLXhzOiAzNTBweDtcclxuJGJwLXM6IDQxMHB4O1xyXG4kYnAtc206IDU3NnB4O1xyXG4kYnAtbWQ6IDc2OHB4OyIsIi5oZWFkZXIge1xyXG4gIG1pbi13aWR0aDogJG1pbi1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnB4IC41cmVtIDJweCAxcmVtO1xyXG59XHJcblxyXG4uaGVhZGxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRsaW5lX19sb2dvIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAteHMpIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbSkge1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtbWQpIHtcclxuICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRsaW5lX19zbG9nYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zKSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtc20pIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLW1kKSB7XHJcbiAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG4ubWVudV9fYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCA3cHggIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbWluLWNvbnRlbnQpIHtcclxuICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlc19faXRlbSB7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlc19faXRlbS0tY2xvc2Uge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlcnZpY2VzLXRpdGxlLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzVweCA1cHggMzVweCAxMHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAkY29sb3ItZm9udC1zZWNvbmQ7XHJcbn1cclxuXHJcbi5pdGVtLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmctbGVmdDogOHB4OyBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIuc2VhcmNoLWZvcm0ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtbWQpIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLW1kKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1pdGVtX19sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbn1cclxuXHJcbi5zZWFyY2gtaXRlbV9faW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuICBwYWRkaW5nOiAwLjlyZW0gMC42cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAkY29sb3ItcGxhY2Vob2xkZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtbWQpIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXByaW1hcnktZGFyaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtc20pIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idG4tLWFkZGl0aW9uYWwge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJhY2stbWFpbjtcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYm9yZGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICB9XHJcbn1cclxuIiwiLmNhcmQtLWFkZGl0aW9uYWwge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAkY29sb3ItZm9udC1tYWluO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtbWQpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnBsYWNlcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wbGFjZXNfX2ltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5nYWxsZXJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1tZGItY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tbWRiLWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7XHJcbn1cclxuXHJcbi5nYWxsZXJ5X19pdGVtIHtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAmOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbGxlcnlfX2ltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG59IiwiYnV0dG9uLCBcclxuaW5wdXQge1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmgxLFxyXG5oMixcclxuaDN7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzLFxyXG5hOmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59IiwiLnNlY3Rpb24ge1xyXG4gIG1pbi13aWR0aDogJG1pbi1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iYWNrLW1haW47XHJcbiAgbWFyZ2luOiAycmVtIGF1dG8gMDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBtYXJnaW46IDRyZW0gYXV0byAwO1xyXG4gICAgbWF4LXdpZHRoOiAzM3Z3O1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24tLXNlYXJjaCB7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgfVxyXG59XHJcbiIsIiRtaW4tY29udGVudDogMjAwcHg7XHJcblxyXG4kY29sb3ItcHJpbWFyeTogI2ZmNTcyMjtcclxuJGNvbG9yLXByaW1hcnktZGFyazogI2NhMmYwMGM3O1xyXG4kY29sb3ItYm9yZGVyOiAjY2VjZWNlO1xyXG4kY29sb3ItcGxhY2Vob2xkZXI6ICNiYmI7XHJcbiRjb2xvci1mb250LW1haW46ICMwMDA7XHJcbiRjb2xvci1mb250LXNlY29uZDogI2ZmZjtcclxuJGNvbG9yLWJhY2stbWFpbjogI2ZmZjtcclxuXHJcbiRicC14czogMzUwcHg7XHJcbiRicC1zOiA0MTBweDtcclxuJGJwLXNtOiA1NzZweDtcclxuJGJwLW1kOiA3NjhweDsiLCIuaGVhZGVyIHtcclxuICBtaW4td2lkdGg6ICRtaW4tY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJweCAuNXJlbSAycHggMXJlbTtcclxufVxyXG5cclxuLmhlYWRsaW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkbGluZV9fbG9nbyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXhzKSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtc20pIHtcclxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLW1kKSB7XHJcbiAgICBmb250LXNpemU6IDMuM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkbGluZV9fc2xvZ2FuIHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtcykge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLm1lbnVfX2J0biB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZXMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4ICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbi1jb250ZW50KSB7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZXNfX2l0ZW0ge1xyXG4gIGNvbG9yOiAkY29sb3ItZm9udC1zZWNvbmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1zZWNvbmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZXNfX2l0ZW0tLWNsb3NlIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy10aXRsZS13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDM1cHggNXB4IDM1cHggMTBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG59XHJcblxyXG4uaXRlbS10ZXh0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDsgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59IiwiLnNlYXJjaC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtbWQpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLW1kKSB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWl0ZW1fX2xhYmVsIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtbWFpbjtcclxufVxyXG5cclxuLnNlYXJjaC1pdGVtX19pbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xyXG4gIHBhZGRpbmc6IDAuOXJlbSAwLjZyZW07XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtbWFpbjtcclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICRjb2xvci1wbGFjZWhvbGRlcjtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktZGFyaztcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbSkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ0bi0tYWRkaXRpb25hbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtbWFpbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmFjay1tYWluO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1ib3JkZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIH1cclxufVxyXG4iLCIuY2FyZC0tYWRkaXRpb25hbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ucGxhY2VzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnBsYWNlc19faW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvcmRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLW1kYi1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1tZGItY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjtcclxufVxyXG5cclxuLmdhbGxlcnlfX2l0ZW0ge1xyXG4gIG1heC13aWR0aDogMjUlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FsbGVyeV9faW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn0iLCIuaW1nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNpdHktaW1nIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgbWF4LXdpZHRoOiAzMyU7XHJcbiAgICBtaW4td2lkdGg6IDMzJTtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvIDA7XHJcbiAgfVxyXG59XHJcbiIsIi5jaXR5LWRldGFpbHMge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1tYWluO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgICBmb250LXNpemU6IDEuOXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IGluc2lkZTtcclxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1tYWluO1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbSkge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetTravelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-budget-travel',
                templateUrl: './budget-travel.component.html',
                styleUrls: ['./budget-travel.component.scss'],
            }]
    }], function () { return []; }, null); })();


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

/***/ "91lv":
/*!************************************************!*\
  !*** ./src/app/route-service/getTravelData.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ground_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ground_routes */ "i2ms");
/* harmony import */ var _flying_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flying_routes */ "GQ6p");
/* harmony import */ var _mixed_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixed_routes */ "cGIP");











class DataService {
    // private mergedData: IJsonTravelData[];
    constructor(flyingData, groundData, mixedData) {
        this.flyingData = flyingData;
        this.groundData = groundData;
        this.mixedData = mixedData;
    }
    getFilterJson(startPoint, endPoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.time('-------------------------- Travel_data');
            return caches
                .match(new Request('direct_routes'))
                .then(response => {
                if (response) {
                    return response.json();
                }
            })
                .then(data => {
                const objArray = Object.values(data);
                const filterData = objArray.filter((el) => el.from === +startPoint && el.to === +endPoint);
                console.timeEnd('-------------------------- Travel_data');
                return filterData;
            });
        });
    }
    getTravelData({ startPoint, endPoint, }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.time('GetTransportAndLocation');
            const transportType = JSON.parse(sessionStorage.getItem('transportationTypes'));
            const locations = JSON.parse(sessionStorage.getItem('locations'));
            console.timeEnd('GetTransportAndLocation');
            console.time('GetFilterJson Travel_data');
            return this.getFilterJson(startPoint, endPoint).then(data => {
                if (data.length > 0) {
                    console.log(data);
                    let result = [];
                    for (let i = 0; i < data.length; i++) {
                        result.push({
                            duration_minutes: data[i].duration,
                            euro_price: data[i].price,
                            route_type: 'direct_routes',
                            direct_paths: [
                                {
                                    duration_minutes: data[i].duration,
                                    euro_price: +data[i].price,
                                    from: locations[data[i].from].name,
                                    to: locations[data[i].to].name,
                                    transportation_type: transportType[data[i].transport].name,
                                },
                            ],
                        });
                    }
                    console.timeEnd('GetFilterJson Travel_data');
                    return result;
                }
                else {
                    return [];
                }
            });
        });
    }
    getPathMap(startPoint, endPoint) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.getTravelData({ startPoint, endPoint }),
            this.flyingData.getTravelData(startPoint, endPoint),
            this.groundData.getTravelData(startPoint, endPoint),
            this.mixedData.getTravelData(startPoint, endPoint),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([travelData, flyingData, groundData, mixedData]) => {
            const pathMap = [
                ...travelData,
                ...flyingData,
                ...groundData,
                ...mixedData,
            ];
            console.log(pathMap);
            return pathMap;
        }));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_flying_routes__WEBPACK_IMPORTED_MODULE_5__["FlyingRoutes"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ground_routes__WEBPACK_IMPORTED_MODULE_4__["GroundRoutes"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_mixed_routes__WEBPACK_IMPORTED_MODULE_6__["MixedRoutes"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _flying_routes__WEBPACK_IMPORTED_MODULE_5__["FlyingRoutes"] }, { type: _ground_routes__WEBPACK_IMPORTED_MODULE_4__["GroundRoutes"] }, { type: _mixed_routes__WEBPACK_IMPORTED_MODULE_6__["MixedRoutes"] }]; }, null); })();


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
const SKYCODEMAP = new Map([
    ['Tehran', 'thra'],
    ['Tashkent', 'tas'],
    ['Sanaa', 'sah'],
    ['Phnom Penh', 'pnh'],
    ['Naypyidaw', 'nyt'],
    ['Muscat', 'mct'],
    ['Manila', 'mnlp'],
    ['Male', 'mle'],
    ['Lhasa', 'lxa'],
    ['Kuwait City', 'kwi'],
    ['Kathmandu', 'ktm'],
    ['Kabul', 'kbl'],
    ['Islamabad', 'isb'],
    ['Dushanbe', 'dyu'],
    ['Doha', 'doh'],
    ['Dhaka', 'dac'],
    ['Colombo', 'cmba'],
    ['Bishkek', 'fru'],
    ['Beirut', 'bey'],
    ['Bandar Seri Begawan', 'bwn'],
    ['Baghdad', 'bgw'],
    ['Astana Nur-Sultan', 'nqz'],
    ['Ashgabat', 'asb'],
    ['Amman', 'amma'],
    ['Manama', 'bah'],
    ['Tbilisi', 'tbs'],
    ['Baku', 'gyd'],
    ['Yerevan', 'evn'],
    ['Honolulu', 'hnl'],
    ['San Francisco', 'sfo'],
    ['Orlando', 'orlb'],
    ['Las Vegas', 'lasa'],
    ['Los Angeles', 'laxa'],
    ['Miami', 'mia'],
    ['New York', 'nyca'],
    ['Johannesburg', 'jnba'],
    ['Dammam', 'dmm'],
    ['Riyadh', 'ruh'],
    ['Cancun', 'cun'],
    ['Fukuoka', 'fuk'],
    ['Chiba', ''],
    ['Kyoto', ''],
    ['Osaka', 'osaa'],
    ['Jerusalem', ''],
    ['Batam', 'bth'],
    ['Kolkatta', 'ccu'],
    ['Jaipur', 'jai'],
    ['Chennai', 'maa'],
    ['Hurgada', 'hrg'],
    ['Beijing', 'any'],
    ['Zhuhai', 'zuh'],
    ['Guilin', 'kwl'],
    ['Vancouver', 'yvra'],
    ['Toronto', 'ytoa'],
    ['Rio de Janeiro', 'rioa'],
    ['Buenos Aires', 'buea'],
    ['Bangalore', 'blr'],
    ['Krabi', 'kbv'],
    ['Jeju', 'cju'],
    ['Abu Dhabi', 'auha'],
    ['Auckland', 'akl'],
    ['Cebu', 'ceb'],
    ['Sydney', 'syd'],
    ['Melbourne', 'mela'],
    ['Marrakech', 'rak'],
    ['Penang Island', 'pen'],
    ['Jakarta', 'cgki'],
    ['Ha Noi', 'han'],
    ['Cairo', 'cai'],
    ['Johor Bahru', 'jhb'],
    ['Denpasar', 'dps'],
    ['Ho Chi Minh', 'sgn'],
    ['Shanghai', 'csha'],
    ['Seoul', 'sela'],
    ['Medina', 'med'],
    ['Guangzhou', 'can'],
    ['Mecca', 'jed'],
    ['Taipei', 'tpet'],
    ['Pattaya', 'utp'],
    ['Tokyo', 'tyoa'],
    ['Phuket', 'hkt'],
    ['Mumbai', 'bom'],
    ['Shenzhen', 'szx'],
    ['Delhi', 'del'],
    ['Kuala Lumpur', 'kulm'],
    ['Dubai', 'dzba'],
    ['Singapore', 'sins'],
    ['Macau', 'mfm'],
    ['Bangkok', 'bkkt'],
    ['Hong Kong', 'hkga'],
    ['Antwerp', 'anr'],
    ['Aberdeen', 'abz'],
    ['Augsburg', 'agb'],
    ['Alexandroupolis', 'axd'],
    ['Athens', 'ath'],
    ['Alicante', 'alc'],
    ['Almeria', 'lei'],
    ['Aalborg', 'aal'],
    ['Aarhus', 'aar'],
    ['Ancona', 'aoi'],
    ['Aosta', ''],
    ['Amsterdam', 'ams'],
    ['Alanya', 'gzp'],
    ['Ankara', 'esb'],
    ['Antalya', 'ayt'],
    ['Altenrhein', 'ach'],
    ['Brussels', 'brus'],
    ['Burgas', 'boj'],
    ['Banja Luka', 'bnx'],
    ['Belfast', 'belf'],
    ['Birmingham', 'bhx'],
    ['Bournemouth', 'boh'],
    ['Bristol', 'brs'],
    ['Budapest', 'bud'],
    ['Berlin', 'ber'],
    ['Bremen', 'bre'],
    ['Billund', 'bll'],
    ['Barcelona', 'bcn'],
    ['Bilbao', 'bio'],
    ['Bologna', 'blq'],
    ['Bergen', 'bgo'],
    ['Bodo', 'boo'],
    ['Bucharest', 'otp'],
    ['Belgrade', 'beli'],
    ['Bratislava', 'bts'],
    ['Bordeaux', 'bod'],
    ['Brno', 'brq'],
    ['Basel', 'bsl'],
    ['Bern', 'brn'],
    ['Cardiff', 'cwl'],
    ['Cambridge', ''],
    ['Coventry', ''],
    ['Cologne', 'cgn'],
    ['Corfu', 'cfu'],
    ['Copenhagen', 'cope'],
    ['Cork', 'ork'],
    ['Cagliari', 'cag'],
    ['Catania', 'cta'],
    ['Cluj-Napoca', 'clj'],
    ['Clermont-Ferrand', 'cfe'],
    ['Chambery-Savoie', 'cmf'],
    ['Cherbourg', 'cfr'],
    ['Doncaster', 'dsa'],
    ['Dortmund', 'dtm'],
    ['Dresden', 'drs'],
    ['Duesseldorf', 'duss'],
    ['Dublin', 'dub'],
    ['Dalaman', 'dlm'],
    ['Dubrovnik', 'dbv'],
    ['East Midlands', 'ema'],
    ['Edinburgh', 'edi'],
    ['Exeter', 'ext'],
    ['Esbjerg', 'ebj'],
    ['Eilat', 'etm'],
    ['Eindhoven', 'ein'],
    ['Frankfurt', 'fran'],
    ['Friedrichshafen', 'fdh'],
    ['Fuerteventura', 'fue'],
    ['Florence', 'flr'],
    ['Floro', 'fro'],
    ['Faro', 'fao'],
    ['Funchal', 'fnc'],
    ['Graz', 'grz'],
    ['Gorna Oryahovitsa', ''],
    ['Guernsey', 'gci'],
    ['Glasgow', 'glas'],
    ['Gloucestershire', 'glo'],
    ['Granada', 'grx'],
    ['Girona', 'gro'],
    ['Galway', ''],
    ['Genoa', 'goa'],
    ['Groningen', 'grq'],
    ['Gdansk', 'gdn'],
    ['Geneva', 'gva'],
    ['Gothenburg', 'goth'],
    ['Humberside', 'huy'],
    ['Hamburg', 'hamb'],
    ['Hannover', 'haj'],
    ['Heraklion', 'her'],
    ['Helsinki', 'hel'],
    ['Innsbruck', 'inn'],
    ['Inverness', 'inv'],
    ['Debrecen', 'deb'],
    ['Ibiza', 'ibz'],
    ['Izmir', 'izmi'],
    ['Istanbul', 'ista'],
    ['Jonkoping', 'jkg'],
    ['Klagenfurt', 'klu'],
    ['Karlsruhe Baden-Baden', 'fkb'],
    ['Kortrijk', 'kjk'],
    ['Kaunas', 'kun'],
    ['Katowice', 'ktw'],
    ['Krakow', 'krk'],
    ['Kosice', 'ksc'],
    ['Karlovy Vary', 'klv'],
    ['Karlstad', 'ksd'],
    ['Kuressaare', 'ure'],
    ['Linz', 'lnz'],
    ['Liege', 'lgg'],
    ["Land's End", 'leq'],
    ['Liverpool', 'lpl'],
    ['Lydd', ''],
    ['Leeds', 'lba'],
    ['London', 'lond'],
    ['Luebeck', ''],
    ['Lanzarote', 'ace'],
    ['Las Palmas de Gran Canaria', 'lpa'],
    ['Lamezia Terme', 'suf'],
    ['Larnaca', 'lca'],
    ['Liepaja', 'lpx'],
    ['Luxembourg', 'lux'],
    ['Lisbon', 'lis'],
    ['Ljubljana', 'lju'],
    ['Lappeenranta', 'lpp'],
    ['Le Touquet', ''],
    ['Lille', 'lil'],
    ['Lyon', 'lyon'],
    ['Lugano', 'lug'],
    ['Lulea', 'lla'],
    ['Manchester', 'man'],
    ['Mannheim', 'mhg'],
    ['Memmingen', 'fmm'],
    ['Muenster', 'fmo'],
    ['Munich', 'muc'],
    ['Madrid', 'mad'],
    ['Malaga', 'agp'],
    ['Mahon', 'mah'],
    ['Murcia', 'rmu'],
    ['Milan', 'mila'],
    ['Malta', 'mla'],
    ['Monte Carlo', ''],
    ['Maastricht', 'mst'],
    ['Milas', 'bjv'],
    ['Marseille', 'mrs'],
    ['Metz', 'etz'],
    ['Montpellier', 'mpl'],
    ['Malmo', 'mmx'],
    ['Norwich', 'nwi'],
    ['Newcastle', 'ncl'],
    ['Newquay', 'nqy'],
    ['Nuremberg', 'nue'],
    ['Naples', 'nap'],
    ['Constanta', 'cnd'],
    ['Nantes', 'nte'],
    ['Nice', 'nce'],
    ['Norrkoping', 'nrk'],
    ['Ostend', 'ost'],
    ['Alderney', 'aci'],
    ['Oviedo', 'ovd'],
    ['Olbia', 'olb'],
    ['Ohrid', 'ohd'],
    ['Oslo', 'oslo'],
    ['Ostrava', 'osr'],
    ['Plovdiv', 'pdv'],
    ['Plymouth', 'plh'],
    ['Paderborn', 'pad'],
    ['Rostock', 'rlg'],
    ['Palma Majorca', 'pmi'],
    ['Palermo', 'pmo'],
    ['Pescara', 'psr'],
    ['Pisa', 'psa'],
    ['Paphos', 'pfo'],
    ['Palanga', 'plg'],
    ['Ponta Delgada', 'pdl'],
    ['Porto', 'opo'],
    ['Poprad', 'tat'],
    ['Paris', 'pari'],
    ['Pula', 'puy'],
    ['Podgorica', 'tgd'],
    ['Pardubice', 'ped'],
    ['Prague', 'prg'],
    ['Parnu', ''],
    ['Rhodes', 'rho'],
    ['Reykjavik', 'reyk'],
    ['Reus', 'reu'],
    ['Rijeka', 'rjk'],
    ['Rome', 'rome'],
    ['Rimini', 'rmi'],
    ['Riga', 'rix'],
    ['Rotterdam', 'rtm'],
    ['Ronneby', 'rnb'],
    ['Salzburg', 'szg'],
    ['Sofia', 'sof'],
    ['Sarajevo', 'sjj'],
    ['Southampton', 'sou'],
    ['Swansea', 'sws'],
    ['Shoreham', ''],
    ['Poznan', 'poz'],
    ['Saarbruecken', 'saar'],
    ['Stuttgart', 'str'],
    ['Santorini', 'jtr'],
    ['Shannon', 'snn'],
    ['Salamanca', 'slm'],
    ['Santiago de Compostela', 'scq'],
    ['Sevilla', 'svq'],
    ['Siauliai', ''],
    ['Skopje', 'skp'],
    ['Stavanger', 'svg'],
    ['Strasbourg', 'sxb'],
    ['Split', 'spu'],
    ['Sion', ''],
    ['Stockholm', 'stoc'],
    ['Tirana', 'tia'],
    ['Thessaloniki', 'skg'],
    ['Tenerife', 'tene'],
    ['Treviso', ''],
    ['Trieste', 'trs'],
    ['Turin', 'trn'],
    ['Tel-Aviv', 'tlv'],
    ['Terceira Island', 'ter'],
    ['Timisoara', 'tsr'],
    ['Trabzon', 'tzx'],
    ['Tampere', 'tmp'],
    ['Turku', 'tku'],
    ['Toulouse', 'tls'],
    ['Tivat', 'tiv'],
    ['Trollhattan', ''],
    ['Tallinn', 'tll'],
    ['Tartu', 'tay'],
    ['Umea', 'ume'],
    ['Vienna', 'vie'],
    ['Varna', 'var'],
    ['Valencia', 'vlc'],
    ['Valladolid', 'vll'],
    ['Venice', 'veni'],
    ['Verona', 'vero'],
    ['Ventspils', ''],
    ['Vilnius', 'vno'],
    ['Iasi', 'ias'],
    ['Vaxjo', 'vxo'],
    ['Visby', 'vby'],
    ['Weeze', 'nrn'],
    ['Westerland', 'gwt'],
    ['Wilhelmshaven', ''],
    ['Warsaw', 'waw'],
    ['Wroclaw', 'wro'],
    ['Zweibruecken', 'zqw'],
    ['Zaragoza', 'zaz'],
    ['Zagreb', 'zag'],
    ['Zadar', 'zad'],
    ['Zurich', 'zrh'],
    ['Chisinau', 'kiv'],
    ['Minsk', 'msqa'],
    ['Gomel', 'gme'],
    ['Brest', 'bqt'],
    ['Vitebsk', 'vtb'],
    ['Hrodna', 'gna'],
    ['Kiev', 'kiev'],
    ['Kherson', 'khe'],
    ['Chernivtsi', 'cwc'],
    ['Odesa', 'ods'],
    ['Zaporizhia', 'ozh'],
    ['Vinnytsia', 'vin'],
    ['Lviv', 'lwo'],
    ['Dnipro', 'dnk'],
    ['Kharkiv', 'hrk'],
    ['Ivano-Frankivsk', 'ifo'],
    ['Moscow', 'mosc'],
    ['Saint Petersburg', 'led'],
    ['Sochi', 'aer'],
    ['Novosibirsk', 'ovb'],
    ['Ekaterinburg', 'svx'],
    ['Krasnodar', 'krr'],
    ['Anapa', 'aaq'],
    ['Kaliningrad', 'kgd'],
    ['Platov', ''],
    ['Samara', 'kuf'],
    ['Irkutsk', 'ikt'],
    ['Krasnoyarsk', 'kja'],
    ['Ufa', 'ufa'],
    ['Kazan', 'kzn'],
    ['Mineralnye Vody', 'mrv'],
    ['Tyumen', 'tjm'],
    ['Khabarovsk', 'khv'],
    ['Surgut', 'sgc'],
    ['Vladivostok', 'vvo'],
    ['Yakutsk', 'yaku'],
    ['Perm', 'pee'],
    ['Chelyabinsk', 'cek'],
    ['Novy Urengoy', 'nux'],
    ['Murmansk', 'mmk'],
    ['Nizhniy Novgorod', 'goj'],
    ['Volgograd', 'vog'],
    ['Yuzhno-Sakhalinsk', 'uus'],
    ['Arkhangelsk', 'arh'],
    ['Omsk', 'oms'],
    ['Makhachkala', 'mcx'],
    ['Gelendzik', 'gdz'],
    ['Petropavlovsk-Kamchatsky', 'pkc'],
    ['Naberezhnye Chelny', 'nbc'],
    ['Tomsk', 'tof'],
    ['Nizhnevartovsk', 'njc'],
    ['Orenburg', 'ren'],
    ['Voronezh', 'voz'],
    ['Syktyvkar', 'scw'],
    ['Barnaul', 'bax'],
    ['Astrakhan', 'asf'],
    ['Norilsk', 'nsk'],
    ['Belgorod', 'ego'],
    ['Salehard', 'sly'],
    ['Chita', 'hta'],
    ['Izhevsk', 'ijk'],
    ['Khanty-Mansiysk', 'hma'],
    ['Saratov', 'sarb'],
    ['Stavropol', 'stw'],
    ['Kemerovo', 'kej'],
    ['Abakan', 'aba'],
    ['Grozny', 'grv'],
    ['Vladikavkaz', 'ogz'],
    ['Ulyanovsk', 'ulya'],
    ['Penza', 'pez'],
    ['Saransk', 'skx'],
    ['Nadym', 'nym'],
    ['Magnitogorsk', 'mqf'],
    ['Rostov on Don', 'rov'],
    ['Cheboksary', 'scy'],
    ['Nalchik', 'nal'],
    ['Cherepovets', 'cee'],
    ['Magas', 'igt'],
    ['Kirov', 'kvx'],
    ['Naryan-Mar', 'nnm'],
    ['Bratsk', 'btk'],
    ['Elista', 'esl'],
    ['Gorno-Altaysk', 'rgk'],
    ['Tambov', 'tbw'],
    ['Vorkuta', 'vkt'],
    ['Neryungri', 'ner'],
    ['Ivanovo', 'iwa'],
    ['Anadyr', 'dyr'],
    ['Kursk', 'urs'],
    ['Kogalym', 'kgp'],
    ['Kurgan', 'kro'],
    ['Petrozavodsk', 'pes'],
    ['Orsk', 'osw'],
    ['Kaluga', 'klf'],
    ['Okha', 'ohh'],
    ['Briansk', 'bzk'],
    ['Kyzyl', 'kyz'],
    ['Tiksi', 'iks'],
    ['Yaroslavl', 'iar'],
    ['Pevek', 'pwe'],
    ['Velikij Ustyug', 'vus'],
    ['Aldan', 'adh'],
    ['Beloyarsky', 'eyk'],
    ['Bodaybo', 'odo'],
    ['Ust-Kut', 'ukx'],
    ['Usinsk', 'usk'],
    ['Nyagan', 'nya'],
    ['Lensk', 'ulk'],
    ['Batagay', 'bqj'],
    ['Uraj', 'urj'],
    ['Nikolaevsk-na-Amure', 'nli'],
    ['Berezovo', 'ezv'],
    ['Bugulma', 'uua'],
    ['Belaya Gora', 'bgn'],
    ['Mendeleyevo', ''],
    ['Lipetsk', 'lpk'],
    ['Nyurba', 'nyr'],
    ['Ust-Maya', 'ums'],
    ['Iturup', 'itu'],
    ['Keperveyem', 'kpw'],
    ['Deputatsky', 'dpt'],
    ['Ust-Nera', 'usr'],
    ['Terney', 'nei'],
    ['Olenyok', 'onk'],
    ['Cherskiy', 'cyx'],
    ['Kavalerovo', 'kvr'],
    ['Igarka', 'iaa'],
    ['Igrim', 'irm'],
    ['Ust-Kuyga', 'ukg'],
    ['Hatanga', 'htg'],
    ['Dalnegorsk', 'dhg'],
    ['Nogliki', 'ngk'],
    ['Chokurdah', 'ckh'],
    ['Tynda', 'tyd'],
    ['Podkamennaya Tunguska', 'tgp'],
    ['Zhigansk', 'zix'],
    ['Dikson', 'dks'],
    ['Verkhnevilyuysk', 'vhv'],
    ['Vilyuysk', 'vyi'],
    ['Dalnerechensk', 'dlr'],
    ['Svetlaya', 'etl'],
    ['Komsomolsk Na Amure', 'kxk'],
    ['Plastun', 'tly'],
    ['Kotlas', ''],
    ['Gagra', ''],
    ['New Athos', ''],
    ['Sukhumi', ''],
    ['Ukhta', 'uct'],
    ['Pristina', 'prn'],
    ['Thimphu', ''],
    ['Ulaanbaatar', 'uln'],
    ['Agartala', 'ixa'],
    ['Agra', 'agp'],
    ['Ahmedabad', 'amd'],
    ['Aizawl', 'ajl'],
    ['Allahabad', 'ixd'],
]);
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
        let url = 'https://api.ipgeolocation.io/ipgeo?apiKey=781c831b771b440f9adcf6a6b2e5bb23';
        // let url="https://api.hostip.info/country.php";
        // let url="http://api.ipstack.com/check?access_key=21c2d85bf7168d059b04bb14c15228ac";
        // let url="https://ipgeolocation.abstractapi.com/v1/?api_key=f75c54d6ee64403cbf9c58b1b4e5cdf0"
        // let url="http://ip-api.com/json/";
        // return this.http.get(url ,{responseType: 'text'});
        return this.http.get(url);
    }
    getSkyScannerCode(locationName) {
        let code = '';
        if (SKYCODEMAP.has(locationName)) {
            return SKYCODEMAP.get(locationName);
        }
        return code;
    }
    getCurrencies() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].urlTomCat + 'CheapTrip/GetCurrencyRate';
        return this.http.get(url, { observe: 'response' });
        // return
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
        const newPaths = obj.direct_paths.map(item => {
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
            const sanitizedArr = value.icon.map(icon => this.sanitizer.bypassSecurityTrustHtml(icon));
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
        });
        return locations;
    }
    getAllRuLocationsTomcat() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].urlTomCat +
            'CheapTrip/getLocations?type=' +
            '0' +
            '&search_name=' +
            '' +
            '&language_name=ru';
        return this.http.get(url, { observe: 'response' });
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








function SearchResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-path-details", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paths", ctx_r0.paths);
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
            .subscribe(state => {
            this.paths = state.paths;
            this.isLoading = state.isLoading;
        });
        console.log('SEARCH RESULT');
    }
    ngOnDestroy() {
        this.getPathsSubscription.unsubscribe();
    }
    keyEvent(event) {
        // let el = document.getElementById('map').getBoundingClientRect();
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
    } }, decls: 1, vars: 1, consts: [["class", "mainContainer", 4, "ngIf"], [1, "mainContainer"], [1, "aside"], [3, "paths"]], template: function SearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchResultComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"]], styles: ["div.mainContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 98%;\n  margin: auto;\n  position: relative;\n  justify-content: center;\n  align-items: flex-start;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n  flex-grow: 0.67;\n}\n@media screen and (min-width: 960px) and (max-width: 1279.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    width: 95%;\n    height: auto;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 95%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 599.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 98%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 98%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 359.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 0.5rem;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBRUUsZUFBQTtBQUhKO0FDMERFO0VEdkNBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQWZGO0VBZ0JFO0lBRUUsWUFBQTtJQUVBLGFBQUE7SUFDQSw2QkFBQTtFQWhCSjtBQUNGO0FDNEVFO0VEdkRBO0lBQ0UsU0FBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RUFsQkY7RUFtQkU7SUFDRSxtQkFBQTtFQWpCSjtFQW1CRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNGLFlBQUE7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7RUFqQko7QUFDRjtBQzZERTtFRHZDQTtJQUNFLFNBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7RUFuQkY7RUFxQkU7SUFDRSxtQkFBQTtFQW5CSjtFQXFCRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFuQko7QUFDRjtBQzBEQztFRG5DQztJQUNFLFNBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7RUFwQkY7RUFzQkU7SUFDRSxtQkFBQTtFQXBCSjtFQXNCRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFwQko7QUFDRjtBQzJDRTtFRGxCQTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7RUF0QkY7RUF1QkU7SUFDRSxtQkFBQTtFQXJCSjtFQXVCRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFyQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuXHJcbmRpdi5tYWluQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBtYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICBkaXYuYXNpZGUge1xyXG4gICAgLy8gZmxleC1iYXNpczogNDklO1xyXG4gICAgZmxleC1ncm93OiAwLjY3O1xyXG4gIH1cclxuICAvLyBkaXYubWFwIHtcclxuICAvLyAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAvLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAvLyB9XHJcbn1cclxuQGluY2x1ZGUgTGFyZ2Uge1xyXG4gIC8vIGRpdi5tYXAge1xyXG4gIC8vICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5AaW5jbHVkZSBNZWRpdW0ge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgLy8gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAvLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBTbWFsbCB7XHJcbiAgZGl2Lm1haW5Db250YWluZXIge1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXYuYXNpZGUge1xyXG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1hcCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBYU21hbGwge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgIGRpdi5hc2lkZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AaW5jbHVkZSBQaG9uZXMge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgIGRpdi5hc2lkZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgU21hbGxwaG9uZXMge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMC41cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgZGl2LmFzaWRlIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIH1cclxuICAgIGRpdi5tYXAge1xyXG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxufVxyXG5cclxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbiAgYm94LXNpemluZzogJGJveFNpemluZztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbkBtaXhpbiBEZXNrdG9wIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG59XHJcbiAgXHJcbn1cclxuXHJcbkBtaXhpbiBYTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIE1lZGl1bSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFRhYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBUYWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gWFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFBob25lcyB7XHJcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxscGhvbmVzIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIl19 */"] });
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
    mainServer: 'tomcat',
    url68: 'http://3.18.167.68:8080/',
    url104: 'http://3.18.167.68:8080/',
    // urlTomCat: 'https://test2.lowcoststrip.com:8443/'
    // urlTomCat: 'http://3.64.201.17:8080/',
    // urlTomCat: 'https://test3.lowcoststrip.com:8443/',
    urlTomCat: 'https://cheaptrip.guru:8443/',
    urlGoogleFormEng: 'https://docs.google.com/forms/d/11mnL9hPZHkbixglQNqlN-iChn4-dYidnNnQAPXakYvA/viewform',
    urlGoogleFormRus: 'https://docs.google.com/forms/d/1ypZL2BFqHmlgPrzsbg3BbOK1Ns_FBYuMrsvYoUOskJM/viewForm',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// как сделать это?  использовать AJAX-запрос для загрузки файла после загрузки страницы
// Кроме того, вы можете использовать метод fetch вместо jQuery для загрузки файла. Ниже приведен пример кода на чистом JavaScript:
// fetch("file.json") .then(response => response.json()) .then(data => console.log(data));
// Здесь мы используем метод fetch, чтобы загрузить файл JSON с именем "file.json". Затем мы вызываем функцию json() для обработки ответа, а затем выводим его содержимое в консоль.
// file.json - это путь к файлу?  это может быть локальный путь?
// <html>
//   <head>
//     <script src="data.json"></script>
//     <script>
//       // код для работы с данными из JSON файла
//     </script>
//   </head>
//   <body>
//     <!-- остальной HTML-код страницы -->
//   </body>
// </html>
// # Ответ эксперта
// Да, тег `<script>` с атрибутом `src` загружает файл.
// Файл загружается в браузер и хранится в оперативной памяти.
// Для работы с данными из JSON файла в Angular можно использовать специальный сервис `HttpClient`, который позволяет выполнять HTTP-запросы и получать данные в различных форматах, в том числе в формате JSON. Пример использования `HttpClient` для получения данных из JSON файла:
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::```
// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   template: `
//     <ul>
//       <li *ngFor="let item of data">{{ item.name }}</li>
//     </ul>
//   `,
// })
// export class AppComponent {
//   data: any;
//   constructor(private http: HttpClient) {
//     this.http.get('data.json').subscribe(data => {
//       this.data = data;
//     });
//   }
// }
// ```
// В этом примере мы импортируем сервис`HttpClient`, используем его в конструкторе компонента и
// выполняем GET - запрос к файлу`data.json`.Результат запроса представляет собой объект,
//   который мы присваиваем переменной`data`.Затем мы используем
// директиву `*ngFor` для создания списка элементов, каждый из которых представляет собой объект
//  из массива`data`.Если вы хотите получить данные из JSON файла в сервисе или другом компоненте,
//   вы можете использовать тот же самый код.
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Вы можете заменить `http.get` на вашу собственную функцию, которая будет возвращать данные. Например:
// ```typescript
// getData(): Observable<any> {
//   const data = { name: 'John', age: 30 };
//   return of(data);
// }
// ```
// И использовать его таким образом:
// ```typescript
// this.getData().subscribe(data => console.log(data));
// ```
// Это позволит вам получить данные из функции, а не из http-запроса.
// Код правильный, но проблема в том, что вы пытаетесь получить данные асинхронно. Метод http.get является асинхронным, поэтому результат будет возвращен в виде Observable, который нужно подписать. Вам нужно обновить метод travelData следующим образом:
// travelData(startPoint: string, endPoint: string) { return this.http.get('assets/new_json/fixed_routes.json') .pipe( map(data => { const filterData: any = data.filter((el: any) => el === startPoint); console.log(filterData); return filterData; }) ); }
// Этот метод будет возвращать Observable, который вы можете подписать, чтобы получить данные.
// Относительный путь до файла должен быть изменен, чтобы указывать на корректную директорию. Поместите файл в папку assets и обновите путь на 'assets/new_json/fixed_routes.json'.
// Скрипт <script src="./assets/new_json/fixed_routes.json"></script> загружает файл фиксированных маршрутов в HTML-страницу. Он не загружает файл в приложение Angular, который вы можете использовать для получения данных в вашем сервисе.


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", btn_r1.buttonType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r1.buttonText);
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

/***/ "GQ6p":
/*!************************************************!*\
  !*** ./src/app/route-service/flying_routes.ts ***!
  \************************************************/
/*! exports provided: FlyingRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyingRoutes", function() { return FlyingRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class FlyingRoutes {
    // pathData: IJsonTravelData[];
    constructor(http) {
        this.http = http;
    }
    // getFilterJson({
    //   startPoint,
    //   endPoint,
    // }: {
    //   startPoint: string;
    //   endPoint: string;
    // }): Promise<any> {
    //   const pathData: IJsonTravelData[] = [];
    //   console.time('GetFilterJson Flying_Data');
    //   return caches
    //     .match(new Request('assets/new_json/flying_routes.json'))
    //     .then(response => {
    //       if (response) {
    //         return response.json();
    //       }
    //     })
    //     .then(flyingData => {
    //       const filterData = flyingData[`${startPoint}0${endPoint}`];
    //       if (!filterData) return [];
    //       const path: [] = filterData.direct_routes.split(',');
    //       return caches
    //         .match(new Request('assets/new_json/direct_routes.json'))
    //         .then(response => {
    //           if (response) {
    //             return response.json();
    //           }
    //         })
    //         .then(data => {
    //           // console.log(data);
    //           path.forEach((id: string): void => {
    //             pathData.push(data[id]);
    //           });
    //           filterData.travel_data = pathData;
    //           console.timeEnd('GetFilterJson Flying_Data');
    //           return filterData;
    //         });
    //     });
    // }
    getFilterJson({ startPoint, endPoint, }) {
        const pathData = [];
        console.time('GetFilterJson Flying_Data');
        return this.http
            .get(`assets/new_json/partly/flying_routes/${startPoint}.json`)
            .toPromise()
            .then(flyingData => {
            const filterData = flyingData[`${endPoint}`];
            if (!filterData)
                return [];
            const path = filterData.direct_routes.split(',');
            return caches.match('direct_routes').then(response => {
                if (response) {
                    return response.json().then(data => {
                        path.forEach((id) => {
                            pathData.push(data[id]);
                        });
                        filterData.travel_data = pathData;
                        console.timeEnd('GetFilterJson Flying_Data');
                        console.log('filterData', filterData);
                        return filterData;
                    });
                }
            });
        })
            .catch(error => {
            console.error('Error Fly:', error);
        });
    }
    getTravelData(startPoint, endPoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // return [];
            console.time('GetTransportAndLocationFlying');
            const transportType = JSON.parse(sessionStorage.getItem('transportationTypes'));
            const locations = JSON.parse(sessionStorage.getItem('locations'));
            console.timeEnd('GetTransportAndLocationFlying');
            return this.getFilterJson({ startPoint, endPoint }).then(data => {
                console.log('data', data);
                if (data && data.length !== 0) {
                    const result = [];
                    const directPaths = data.travel_data.map(el => ({
                        duration_minutes: el.duration,
                        euro_price: el.price,
                        from: locations[el.from].name,
                        to: locations[el.to].name,
                        transportation_type: transportType[el.transport].name,
                    }));
                    result.push({
                        duration_minutes: data.duration,
                        euro_price: data.price,
                        route_type: 'flying_routes',
                        direct_paths: directPaths,
                    });
                    return result;
                }
                else {
                    return [];
                }
            });
        });
    }
}
FlyingRoutes.ɵfac = function FlyingRoutes_Factory(t) { return new (t || FlyingRoutes)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FlyingRoutes.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FlyingRoutes, factory: FlyingRoutes.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlyingRoutes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #e0e2e1;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton.btn[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n\nbutton.start[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  color: white;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  position: fixed;\n  z-index: 100;\n  background-color: #e0e2e1;\n  font-size: 90%;\n  transition: background-color 1s, color 1s;\n  color: var(--color-primary);\n  font-family: \"Lato\", sans-serif;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: italic;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-style: italic !important;\n  font-size: 12px;\n  color: var(--color-primary);\n}\n\nmat-toolbar.dark[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: white;\n  transition: background-color 1s, color 1s;\n}\n\nmat-toolbar.dark[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]   button.start[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  background-color: #e0e2e1;\n  transition: background-color 1s, color 1s;\n}\n\nbutton.start[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--color-primary);\n  border-radius: 0%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  outline: white 1px solid;\n  transition: background-color 1s, color 1s;\n}\n\ndiv.screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  background-color: #e0e2e1;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  width: 45%;\n  height: auto;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: auto;\n  position: relative;\n  top: 100px;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%] {\n  width: 65%;\n  height: auto;\n}\n\ndiv.screen_2[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  color: white;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: gray;\n  width: 90%;\n  top: 0;\n  margin: 0;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 1em;\n  font-size: 0.7rem;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding-top: 0px;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  padding: 1rem inherit;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  left: 5rem;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%]   img.ball[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  top: 18rem;\n  left: 33rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURFO0VBQ0Usa0JBQUE7QUFHSjs7QUFGSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0FBR0o7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUdGOztBQURJO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0FBR047O0FBRUE7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRU47O0FBRE07RUFDRSxpQ0FBQTtBQUdSOztBQURNO0VBQ0UsK0JBQUE7QUFHUjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBSUE7RUFDRSwyQkFBQTtBQURGOztBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUNJO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUFDTjs7QUFBTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUNNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFBUTtFQUVFLHFCQUFBO0FBQ1Y7O0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRk47O0FBSUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI2LCAyMjUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmJ1dHRvbi5idG4ge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5idXR0b24uc3RhcnQge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI1KTtcclxuICBmb250LXNpemU6IDkwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBjb2xvciAxcztcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuICBkaXYubG9nbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXYubWVudSBidXR0b24ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbn1cclxuYnV0dG9uLm1hdC1tZW51LWl0ZW0ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWMhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5tYXQtdG9vbGJhci5kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgY29sb3IgMXM7XHJcbiAgZGl2LmJ1dHRvbnMge1xyXG4gICAgYnV0dG9uLnN0YXJ0IHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjYsIDIyNSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uLnN0YXJ0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgb3V0bGluZTogd2hpdGUgMXB4IHNvbGlkO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xyXG59XHJcblxyXG5kaXYuc2NyZWVuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI1KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXYubWVzc2FnZSB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdi5waWN0dXJlIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuZGl2LnNjcmVlbl8yIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgZGl2Lm1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGl2IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgc3BhbntcclxuXHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdi5waWN0dXJlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDVyZW07XHJcbiAgICB9XHJcbiAgICBpbWcuYmFsbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB0b3A6IDE4cmVtO1xyXG4gICAgICBsZWZ0OiAzM3JlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
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

/***/ "LsXf":
/*!********************************************!*\
  !*** ./src/assets/new_json/locations.json ***!
  \********************************************/
/*! exports provided: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"1\":{\"id\":8,\"name\":\"Tehran\",\"country_name\":\"Iran\",\"latitude\":35.70000076293945,\"longitude\":51.41669845581055},\"2\":{\"id\":9,\"name\":\"Tashkent\",\"country_name\":\"Uzbekistan\",\"latitude\":41.29999923706055,\"longitude\":69.2667007446289},\"3\":{\"id\":10,\"name\":\"Sanaa\",\"country_name\":\"Yemen\",\"latitude\":15.350000381469727,\"longitude\":44.20000076293945},\"4\":{\"id\":11,\"name\":\"Phnom Penh\",\"country_name\":\"Cambodia\",\"latitude\":11.569600105285645,\"longitude\":104.9209976196289},\"5\":{\"id\":12,\"name\":\"Naypyidaw\",\"country_name\":\"Myanmar\",\"latitude\":19.754005432128906,\"longitude\":96.1344985961914},\"6\":{\"id\":13,\"name\":\"Muscat\",\"country_name\":\"Oman\",\"latitude\":23.61389923095703,\"longitude\":58.592201232910156},\"7\":{\"id\":14,\"name\":\"Manila\",\"country_name\":\"Philippines\",\"latitude\":14.595800399780273,\"longitude\":120.97720336914062},\"8\":{\"id\":15,\"name\":\"Male\",\"country_name\":\"Maldives\",\"latitude\":4.175000190734863,\"longitude\":73.50830078125},\"9\":{\"id\":16,\"name\":\"Lhasa\",\"country_name\":\"China\",\"latitude\":29.649999618530273,\"longitude\":91.0999984741211},\"10\":{\"id\":17,\"name\":\"Kuwait City\",\"country_name\":\"Kuwait\",\"latitude\":29.375,\"longitude\":47.97999954223633},\"11\":{\"id\":18,\"name\":\"Kathmandu\",\"country_name\":\"Nepal\",\"latitude\":27.716699600219727,\"longitude\":85.36669921875},\"12\":{\"id\":20,\"name\":\"Islamabad\",\"country_name\":\"Pakistan\",\"latitude\":33.69889831542969,\"longitude\":73.03690338134766},\"13\":{\"id\":21,\"name\":\"Dushanbe\",\"country_name\":\"Tajikistan\",\"latitude\":38.57310104370117,\"longitude\":68.7863998413086},\"14\":{\"id\":22,\"name\":\"Doha\",\"country_name\":\"Qatar\",\"latitude\":25.299999237060547,\"longitude\":51.53329849243164},\"15\":{\"id\":23,\"name\":\"Dhaka\",\"country_name\":\"Bangladesh\",\"latitude\":23.716100692749023,\"longitude\":90.39610290527344},\"16\":{\"id\":24,\"name\":\"Colombo\",\"country_name\":\"Sri Lanka\",\"latitude\":6.9166998863220215,\"longitude\":79.83329772949219},\"17\":{\"id\":25,\"name\":\"Bishkek\",\"country_name\":\"Kyrgyzstan\",\"latitude\":42.86669921875,\"longitude\":74.56670379638672},\"18\":{\"id\":26,\"name\":\"Beirut\",\"country_name\":\"Lebanon\",\"latitude\":33.88690185546875,\"longitude\":35.513099670410156},\"19\":{\"id\":27,\"name\":\"Bandar Seri Begawan\",\"country_name\":\"Brunei\",\"latitude\":4.9166998863220215,\"longitude\":114.91670227050781},\"20\":{\"id\":28,\"name\":\"Baghdad\",\"country_name\":\"Iraq\",\"latitude\":33.349998474121094,\"longitude\":44.41669845581055},\"21\":{\"id\":29,\"name\":\"Astana Nur-Sultan\",\"country_name\":\"Kazakhstan\",\"latitude\":51.13330078125,\"longitude\":71.43329620361328},\"22\":{\"id\":30,\"name\":\"Ashgabat\",\"country_name\":\"Turkmenistan\",\"latitude\":37.95000076293945,\"longitude\":58.38330078125},\"23\":{\"id\":31,\"name\":\"Amman\",\"country_name\":\"Jordan\",\"latitude\":31.950000762939453,\"longitude\":35.93330001831055},\"24\":{\"id\":32,\"name\":\"Manama\",\"country_name\":\"Bahrain\",\"latitude\":26.216699600219727,\"longitude\":50.583099365234375},\"25\":{\"id\":33,\"name\":\"Tbilisi\",\"country_name\":\"Georgia\",\"latitude\":41.72249984741211,\"longitude\":44.79249954223633},\"26\":{\"id\":34,\"name\":\"Baku\",\"country_name\":\"Azerbaijan\",\"latitude\":40.36669921875,\"longitude\":49.835201263427734},\"27\":{\"id\":35,\"name\":\"Yerevan\",\"country_name\":\"Armenia\",\"latitude\":40.181400299072266,\"longitude\":44.514400482177734},\"28\":{\"id\":36,\"name\":\"Honolulu\",\"country_name\":\"USA\",\"latitude\":21.32939910888672,\"longitude\":-157.8459930419922},\"29\":{\"id\":37,\"name\":\"San Francisco\",\"country_name\":\"USA\",\"latitude\":37.75619888305664,\"longitude\":-122.44300079345703},\"30\":{\"id\":38,\"name\":\"Orlando\",\"country_name\":\"USA\",\"latitude\":28.47719955444336,\"longitude\":-81.33689880371094},\"31\":{\"id\":39,\"name\":\"Las Vegas\",\"country_name\":\"USA\",\"latitude\":36.233299255371094,\"longitude\":-115.2654037475586},\"32\":{\"id\":40,\"name\":\"Los Angeles\",\"country_name\":\"USA\",\"latitude\":34.11389923095703,\"longitude\":-118.40679931640625},\"33\":{\"id\":41,\"name\":\"Miami\",\"country_name\":\"USA\",\"latitude\":25.783899307250977,\"longitude\":-80.21019744873047},\"34\":{\"id\":42,\"name\":\"New York\",\"country_name\":\"USA\",\"latitude\":40.69430160522461,\"longitude\":-73.92489624023438},\"35\":{\"id\":43,\"name\":\"Johannesburg\",\"country_name\":\"South Africa\",\"latitude\":-26.20439910888672,\"longitude\":28.04159927368164},\"36\":{\"id\":44,\"name\":\"Dammam\",\"country_name\":\"Saudi Arabia\",\"latitude\":26.433300018310547,\"longitude\":50.099998474121094},\"37\":{\"id\":45,\"name\":\"Riyadh\",\"country_name\":\"Saudi Arabia\",\"latitude\":24.649999618530273,\"longitude\":46.709999084472656},\"38\":{\"id\":47,\"name\":\"Cancun\",\"country_name\":\"Mexico\",\"latitude\":21.161785125732422,\"longitude\":-86.85104370117188},\"39\":{\"id\":48,\"name\":\"Fukuoka\",\"country_name\":\"Japan\",\"latitude\":33.590301513671875,\"longitude\":130.4019012451172},\"40\":{\"id\":50,\"name\":\"Kyoto\",\"country_name\":\"Japan\",\"latitude\":35.01110076904297,\"longitude\":135.76690673828125},\"41\":{\"id\":51,\"name\":\"Osaka\",\"country_name\":\"Japan\",\"latitude\":34.693599700927734,\"longitude\":135.5019073486328},\"42\":{\"id\":52,\"name\":\"Jerusalem\",\"country_name\":\"Israel\",\"latitude\":31.783300399780273,\"longitude\":35.21670150756836},\"43\":{\"id\":53,\"name\":\"Batam\",\"country_name\":\"Indonesia\",\"latitude\":1.1061034202575684,\"longitude\":104.03782653808594},\"44\":{\"id\":55,\"name\":\"Kolkatta\",\"country_name\":\"India\",\"latitude\":22.541099548339844,\"longitude\":88.33779907226562},\"45\":{\"id\":56,\"name\":\"Jaipur\",\"country_name\":\"India\",\"latitude\":26.91670036315918,\"longitude\":75.86669921875},\"46\":{\"id\":57,\"name\":\"Chennai\",\"country_name\":\"India\",\"latitude\":13.082500457763672,\"longitude\":80.2750015258789},\"47\":{\"id\":58,\"name\":\"Hurgada\",\"country_name\":\"Egypt\",\"latitude\":27.22255516052246,\"longitude\":33.83070755004883},\"48\":{\"id\":59,\"name\":\"Beijing\",\"country_name\":\"China\",\"latitude\":39.904998779296875,\"longitude\":116.39140319824219},\"49\":{\"id\":60,\"name\":\"Zhuhai\",\"country_name\":\"China\",\"latitude\":22.276899337768555,\"longitude\":113.56780242919922},\"50\":{\"id\":61,\"name\":\"Guilin\",\"country_name\":\"China\",\"latitude\":25.266700744628906,\"longitude\":110.2833023071289},\"51\":{\"id\":62,\"name\":\"Vancouver\",\"country_name\":\"Canada\",\"latitude\":49.25,\"longitude\":-123.0999984741211},\"52\":{\"id\":63,\"name\":\"Toronto\",\"country_name\":\"Canada\",\"latitude\":43.74169921875,\"longitude\":-79.37329864501953},\"53\":{\"id\":64,\"name\":\"Rio de Janeiro\",\"country_name\":\"Brazil\",\"latitude\":-22.908300399780273,\"longitude\":-43.1963996887207},\"54\":{\"id\":65,\"name\":\"Buenos Aires\",\"country_name\":\"Argentina\",\"latitude\":-34.599700927734375,\"longitude\":-58.381900787353516},\"55\":{\"id\":66,\"name\":\"Bangalore\",\"country_name\":\"India\",\"latitude\":12.969900131225586,\"longitude\":77.5979995727539},\"56\":{\"id\":67,\"name\":\"Krabi\",\"country_name\":\"Thailand\",\"latitude\":8.059200286865234,\"longitude\":98.91889953613281},\"57\":{\"id\":68,\"name\":\"Jeju\",\"country_name\":\"South Korea\",\"latitude\":33.509700775146484,\"longitude\":126.52189636230469},\"58\":{\"id\":69,\"name\":\"Abu Dhabi\",\"country_name\":\"United Arab Emirates\",\"latitude\":24.478099822998047,\"longitude\":54.36859893798828},\"59\":{\"id\":70,\"name\":\"Auckland\",\"country_name\":\"New Zealand\",\"latitude\":-36.849998474121094,\"longitude\":174.78329467773438},\"60\":{\"id\":71,\"name\":\"Cebu\",\"country_name\":\"Philippines\",\"latitude\":10.300000190734863,\"longitude\":123.9000015258789},\"61\":{\"id\":72,\"name\":\"Sydney\",\"country_name\":\"Australia\",\"latitude\":-33.8650016784668,\"longitude\":151.2093963623047},\"62\":{\"id\":73,\"name\":\"Melbourne\",\"country_name\":\"Australia\",\"latitude\":-37.8135986328125,\"longitude\":144.96310424804688},\"63\":{\"id\":74,\"name\":\"Marrakech\",\"country_name\":\"Morocco\",\"latitude\":31.629499435424805,\"longitude\":-7.981100082397461},\"64\":{\"id\":75,\"name\":\"Penang Island\",\"country_name\":\"Malaysia\",\"latitude\":5.3787922859191895,\"longitude\":100.25017547607422},\"65\":{\"id\":76,\"name\":\"Jakarta\",\"country_name\":\"Indonesia\",\"latitude\":-6.214600086212158,\"longitude\":106.84510040283203},\"66\":{\"id\":77,\"name\":\"Ha Noi\",\"country_name\":\"Vietnam\",\"latitude\":21.029449462890625,\"longitude\":105.85444641113281},\"67\":{\"id\":78,\"name\":\"Cairo\",\"country_name\":\"Egypt\",\"latitude\":30.056100845336914,\"longitude\":31.23940086364746},\"68\":{\"id\":79,\"name\":\"Johor Bahru\",\"country_name\":\"Malaysia\",\"latitude\":1.4556000232696533,\"longitude\":103.76110076904297},\"69\":{\"id\":80,\"name\":\"Denpasar\",\"country_name\":\"Indonesia\",\"latitude\":-8.66670036315918,\"longitude\":115.2166976928711},\"70\":{\"id\":81,\"name\":\"Ho Chi Minh\",\"country_name\":\"Vietnam\",\"latitude\":10.775843620300293,\"longitude\":106.70175170898438},\"71\":{\"id\":82,\"name\":\"Shanghai\",\"country_name\":\"China\",\"latitude\":31.16670036315918,\"longitude\":121.4666976928711},\"72\":{\"id\":83,\"name\":\"Seoul\",\"country_name\":\"South Korea\",\"latitude\":37.58330154418945,\"longitude\":127},\"73\":{\"id\":84,\"name\":\"Medina\",\"country_name\":\"Saudi Arabia\",\"latitude\":24.466699600219727,\"longitude\":39.599998474121094},\"74\":{\"id\":85,\"name\":\"Guangzhou\",\"country_name\":\"China\",\"latitude\":23.128799438476562,\"longitude\":113.25900268554688},\"75\":{\"id\":86,\"name\":\"Mecca\",\"country_name\":\"Saudi Arabia\",\"latitude\":21.422500610351562,\"longitude\":39.82609939575195},\"76\":{\"id\":87,\"name\":\"Taipei\",\"country_name\":\"Taiwan\",\"latitude\":25.047800064086914,\"longitude\":121.53189849853516},\"77\":{\"id\":88,\"name\":\"Pattaya\",\"country_name\":\"Thailand\",\"latitude\":12.931941032409668,\"longitude\":100.90095520019531},\"78\":{\"id\":89,\"name\":\"Tokyo\",\"country_name\":\"Japan\",\"latitude\":35.689701080322266,\"longitude\":139.69219970703125},\"79\":{\"id\":90,\"name\":\"Phuket\",\"country_name\":\"Thailand\",\"latitude\":7.8881001472473145,\"longitude\":98.39749908447266},\"80\":{\"id\":91,\"name\":\"Mumbai\",\"country_name\":\"India\",\"latitude\":18.966699600219727,\"longitude\":72.83329772949219},\"81\":{\"id\":92,\"name\":\"Shenzhen\",\"country_name\":\"China\",\"latitude\":22.53499984741211,\"longitude\":114.05400085449219},\"82\":{\"id\":93,\"name\":\"Delhi\",\"country_name\":\"India\",\"latitude\":28.65999984741211,\"longitude\":77.2300033569336},\"83\":{\"id\":94,\"name\":\"Kuala Lumpur\",\"country_name\":\"Malaysia\",\"latitude\":3.1477999687194824,\"longitude\":101.69529724121094},\"84\":{\"id\":95,\"name\":\"Dubai\",\"country_name\":\"United Arab Emirates\",\"latitude\":25.269699096679688,\"longitude\":55.30939865112305},\"85\":{\"id\":96,\"name\":\"Singapore\",\"country_name\":\"Singapore\",\"latitude\":1.2999999523162842,\"longitude\":103.80000305175781},\"86\":{\"id\":97,\"name\":\"Macau\",\"country_name\":\"China\",\"latitude\":22.202999114990234,\"longitude\":113.54499816894531},\"87\":{\"id\":98,\"name\":\"Bangkok\",\"country_name\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.5167007446289},\"88\":{\"id\":99,\"name\":\"Hong Kong\",\"country_name\":\"China\",\"latitude\":22.30500030517578,\"longitude\":114.18499755859375},\"89\":{\"id\":100,\"name\":\"Antwerp\",\"country_name\":\"Belgium\",\"latitude\":51.221099853515625,\"longitude\":4.399700164794922},\"90\":{\"id\":101,\"name\":\"Aberdeen\",\"country_name\":\"United Kingdom\",\"latitude\":57.150001525878906,\"longitude\":-2.109999895095825},\"91\":{\"id\":102,\"name\":\"Augsburg\",\"country_name\":\"Germany\",\"latitude\":48.371700286865234,\"longitude\":10.898300170898438},\"92\":{\"id\":103,\"name\":\"Alexandroupolis\",\"country_name\":\"Greece\",\"latitude\":40.849998474121094,\"longitude\":25.86669921875},\"93\":{\"id\":104,\"name\":\"Athens\",\"country_name\":\"Greece\",\"latitude\":37.979400634765625,\"longitude\":23.716100692749023},\"94\":{\"id\":105,\"name\":\"Alicante\",\"country_name\":\"Spain\",\"latitude\":38.345298767089844,\"longitude\":-0.4830999970436096},\"95\":{\"id\":106,\"name\":\"Almeria\",\"country_name\":\"Spain\",\"latitude\":36.8414192199707,\"longitude\":-2.46281361579895},\"96\":{\"id\":107,\"name\":\"Aalborg\",\"country_name\":\"Denmark\",\"latitude\":57.03369903564453,\"longitude\":9.916600227355957},\"97\":{\"id\":108,\"name\":\"Aarhus\",\"country_name\":\"Denmark\",\"latitude\":56.15719985961914,\"longitude\":10.210700035095215},\"98\":{\"id\":109,\"name\":\"Ancona\",\"country_name\":\"Italy\",\"latitude\":43.61669921875,\"longitude\":13.51669979095459},\"99\":{\"id\":111,\"name\":\"Amsterdam\",\"country_name\":\"Netherlands\",\"latitude\":52.349998474121094,\"longitude\":4.916600227355957},\"100\":{\"id\":112,\"name\":\"Alanya\",\"country_name\":\"Turkey\",\"latitude\":36.54359817504883,\"longitude\":31.99970054626465},\"101\":{\"id\":113,\"name\":\"Ankara\",\"country_name\":\"Turkey\",\"latitude\":39.93000030517578,\"longitude\":32.849998474121094},\"102\":{\"id\":114,\"name\":\"Antalya\",\"country_name\":\"Turkey\",\"latitude\":36.90810012817383,\"longitude\":30.695600509643555},\"103\":{\"id\":115,\"name\":\"Altenrhein\",\"country_name\":\"Switzerland\",\"latitude\":47.49038314819336,\"longitude\":9.554054260253906},\"104\":{\"id\":116,\"name\":\"Brussels\",\"country_name\":\"Belgium\",\"latitude\":50.84669876098633,\"longitude\":4.3516998291015625},\"105\":{\"id\":117,\"name\":\"Burgas\",\"country_name\":\"Bulgaria\",\"latitude\":42.5,\"longitude\":27.466699600219727},\"106\":{\"id\":118,\"name\":\"Banja Luka\",\"country_name\":\"Bosnia and Herzegovina\",\"latitude\":44.766700744628906,\"longitude\":17.183300018310547},\"107\":{\"id\":119,\"name\":\"Belfast\",\"country_name\":\"United Kingdom\",\"latitude\":54.59640121459961,\"longitude\":-5.929999828338623},\"108\":{\"id\":120,\"name\":\"Birmingham\",\"country_name\":\"United Kingdom\",\"latitude\":52.47999954223633,\"longitude\":-1.902500033378601},\"109\":{\"id\":121,\"name\":\"Bournemouth\",\"country_name\":\"United Kingdom\",\"latitude\":50.720001220703125,\"longitude\":-1.8799999952316284},\"110\":{\"id\":122,\"name\":\"Bristol\",\"country_name\":\"United Kingdom\",\"latitude\":51.45000076293945,\"longitude\":-2.5833001136779785},\"111\":{\"id\":123,\"name\":\"Budapest\",\"country_name\":\"Hungary\",\"latitude\":47.49829864501953,\"longitude\":19.040800094604492},\"112\":{\"id\":124,\"name\":\"Berlin\",\"country_name\":\"Germany\",\"latitude\":52.516700744628906,\"longitude\":13.383299827575684},\"113\":{\"id\":126,\"name\":\"Bremen\",\"country_name\":\"Germany\",\"latitude\":53.115299224853516,\"longitude\":8.797499656677246},\"114\":{\"id\":127,\"name\":\"Billund\",\"country_name\":\"Denmark\",\"latitude\":55.73094177246094,\"longitude\":9.115935325622559},\"115\":{\"id\":128,\"name\":\"Barcelona\",\"country_name\":\"Spain\",\"latitude\":41.38249969482422,\"longitude\":2.1768999099731445},\"116\":{\"id\":129,\"name\":\"Bilbao\",\"country_name\":\"Spain\",\"latitude\":43.26219940185547,\"longitude\":-2.9532999992370605},\"117\":{\"id\":130,\"name\":\"Bologna\",\"country_name\":\"Italy\",\"latitude\":44.493900299072266,\"longitude\":11.34280014038086},\"118\":{\"id\":131,\"name\":\"Bergen\",\"country_name\":\"Norway\",\"latitude\":60.39250183105469,\"longitude\":5.323299884796143},\"119\":{\"id\":132,\"name\":\"Bodo\",\"country_name\":\"Norway\",\"latitude\":67.28269958496094,\"longitude\":14.375100135803223},\"120\":{\"id\":134,\"name\":\"Bucharest\",\"country_name\":\"Romania\",\"latitude\":44.400001525878906,\"longitude\":26.08329963684082},\"121\":{\"id\":135,\"name\":\"Belgrade\",\"country_name\":\"Serbia\",\"latitude\":44.81669998168945,\"longitude\":20.466699600219727},\"122\":{\"id\":136,\"name\":\"Bratislava\",\"country_name\":\"Slovakia\",\"latitude\":48.14469909667969,\"longitude\":17.11280059814453},\"123\":{\"id\":137,\"name\":\"Bordeaux\",\"country_name\":\"France\",\"latitude\":44.84000015258789,\"longitude\":-0.5799999833106995},\"124\":{\"id\":139,\"name\":\"Brno\",\"country_name\":\"Czech Republic\",\"latitude\":49.1953010559082,\"longitude\":16.608299255371094},\"125\":{\"id\":140,\"name\":\"Basel\",\"country_name\":\"Switzerland\",\"latitude\":47.56060028076172,\"longitude\":7.59060001373291},\"126\":{\"id\":141,\"name\":\"Bern\",\"country_name\":\"Switzerland\",\"latitude\":46.948001861572266,\"longitude\":7.447400093078613},\"127\":{\"id\":142,\"name\":\"Cardiff\",\"country_name\":\"United Kingdom\",\"latitude\":51.48165512084961,\"longitude\":-3.1791934967041016},\"128\":{\"id\":145,\"name\":\"Cologne\",\"country_name\":\"Germany\",\"latitude\":50.94219970703125,\"longitude\":6.957799911499023},\"129\":{\"id\":146,\"name\":\"Corfu\",\"country_name\":\"Greece\",\"latitude\":39.59133529663086,\"longitude\":19.859619140625},\"130\":{\"id\":147,\"name\":\"Copenhagen\",\"country_name\":\"Denmark\",\"latitude\":55.6786003112793,\"longitude\":12.56350040435791},\"131\":{\"id\":150,\"name\":\"Cork\",\"country_name\":\"Ireland\",\"latitude\":51.900001525878906,\"longitude\":-8.473099708557129},\"132\":{\"id\":151,\"name\":\"Cagliari\",\"country_name\":\"Italy\",\"latitude\":39.2224006652832,\"longitude\":9.104000091552734},\"133\":{\"id\":152,\"name\":\"Catania\",\"country_name\":\"Italy\",\"latitude\":37.50270080566406,\"longitude\":15.087300300598145},\"134\":{\"id\":153,\"name\":\"Cluj-Napoca\",\"country_name\":\"Romania\",\"latitude\":46.779998779296875,\"longitude\":23.55940055847168},\"135\":{\"id\":154,\"name\":\"Clermont-Ferrand\",\"country_name\":\"France\",\"latitude\":45.78310012817383,\"longitude\":3.08240008354187},\"136\":{\"id\":155,\"name\":\"Chambery-Savoie\",\"country_name\":\"France\",\"latitude\":45.56999969482422,\"longitude\":5.911799907684326},\"137\":{\"id\":156,\"name\":\"Cherbourg\",\"country_name\":\"France\",\"latitude\":49.65039825439453,\"longitude\":-1.649999976158142},\"138\":{\"id\":158,\"name\":\"Doncaster\",\"country_name\":\"United Kingdom\",\"latitude\":53.51499938964844,\"longitude\":-1.1330000162124634},\"139\":{\"id\":159,\"name\":\"Dortmund\",\"country_name\":\"Germany\",\"latitude\":51.51390075683594,\"longitude\":7.4653000831604},\"140\":{\"id\":160,\"name\":\"Dresden\",\"country_name\":\"Germany\",\"latitude\":51.04930114746094,\"longitude\":13.73840045928955},\"141\":{\"id\":161,\"name\":\"Duesseldorf\",\"country_name\":\"Germany\",\"latitude\":51.22540283203125,\"longitude\":6.776313781738281},\"142\":{\"id\":162,\"name\":\"Dublin\",\"country_name\":\"Ireland\",\"latitude\":53.342498779296875,\"longitude\":-6.2657999992370605},\"143\":{\"id\":163,\"name\":\"Dalaman\",\"country_name\":\"Turkey\",\"latitude\":36.81257629394531,\"longitude\":28.883140563964844},\"144\":{\"id\":164,\"name\":\"Dubrovnik\",\"country_name\":\"Croatia\",\"latitude\":42.64030075073242,\"longitude\":18.108299255371094},\"145\":{\"id\":165,\"name\":\"East Midlands\",\"country_name\":\"United Kingdom\",\"latitude\":52.79656219482422,\"longitude\":-0.6717947721481323},\"146\":{\"id\":166,\"name\":\"Edinburgh\",\"country_name\":\"United Kingdom\",\"latitude\":55.952999114990234,\"longitude\":-3.188999891281128},\"147\":{\"id\":167,\"name\":\"Exeter\",\"country_name\":\"United Kingdom\",\"latitude\":50.71670150756836,\"longitude\":-3.5332999229431152},\"148\":{\"id\":169,\"name\":\"Esbjerg\",\"country_name\":\"Denmark\",\"latitude\":55.46699905395508,\"longitude\":8.449999809265137},\"149\":{\"id\":171,\"name\":\"Eilat\",\"country_name\":\"Israel\",\"latitude\":29.556934356689453,\"longitude\":34.94979476928711},\"150\":{\"id\":172,\"name\":\"Eindhoven\",\"country_name\":\"Netherlands\",\"latitude\":51.43000030517578,\"longitude\":5.5},\"151\":{\"id\":174,\"name\":\"Frankfurt\",\"country_name\":\"Germany\",\"latitude\":50.11360168457031,\"longitude\":8.679699897766113},\"152\":{\"id\":175,\"name\":\"Friedrichshafen\",\"country_name\":\"Germany\",\"latitude\":47.65420150756836,\"longitude\":9.47920036315918},\"153\":{\"id\":176,\"name\":\"Fuerteventura\",\"country_name\":\"Spain\",\"latitude\":28.40037727355957,\"longitude\":-14.00486946105957},\"154\":{\"id\":177,\"name\":\"Florence\",\"country_name\":\"Italy\",\"latitude\":43.771400451660156,\"longitude\":11.254199981689453},\"155\":{\"id\":178,\"name\":\"Floro\",\"country_name\":\"Norway\",\"latitude\":61.59859848022461,\"longitude\":5.017199993133545},\"156\":{\"id\":179,\"name\":\"Faro\",\"country_name\":\"Portugal\",\"latitude\":37.016700744628906,\"longitude\":-7.933300018310547},\"157\":{\"id\":180,\"name\":\"Funchal\",\"country_name\":\"Portugal\",\"latitude\":32.650001525878906,\"longitude\":-16.91670036315918},\"158\":{\"id\":181,\"name\":\"Graz\",\"country_name\":\"Austria\",\"latitude\":47.06669998168945,\"longitude\":15.433300018310547},\"159\":{\"id\":183,\"name\":\"Guernsey\",\"country_name\":\"United Kingdom\",\"latitude\":57.166996002197266,\"longitude\":-7.374732971191406},\"160\":{\"id\":184,\"name\":\"Glasgow\",\"country_name\":\"United Kingdom\",\"latitude\":55.86090087890625,\"longitude\":-4.251399993896484},\"161\":{\"id\":185,\"name\":\"Gloucestershire\",\"country_name\":\"United Kingdom\",\"latitude\":51.76437759399414,\"longitude\":-2.188066244125366},\"162\":{\"id\":186,\"name\":\"Granada\",\"country_name\":\"Spain\",\"latitude\":37.1781005859375,\"longitude\":-3.600800037384033},\"163\":{\"id\":187,\"name\":\"Girona\",\"country_name\":\"Spain\",\"latitude\":41.983299255371094,\"longitude\":2.816699981689453},\"164\":{\"id\":189,\"name\":\"Genoa\",\"country_name\":\"Italy\",\"latitude\":44.40719985961914,\"longitude\":8.934000015258789},\"165\":{\"id\":190,\"name\":\"Groningen\",\"country_name\":\"Netherlands\",\"latitude\":53.220401763916016,\"longitude\":6.579999923706055},\"166\":{\"id\":191,\"name\":\"Gdansk\",\"country_name\":\"Poland\",\"latitude\":54.36669921875,\"longitude\":18.63330078125},\"167\":{\"id\":192,\"name\":\"Geneva\",\"country_name\":\"Switzerland\",\"latitude\":46.20000076293945,\"longitude\":6.150000095367432},\"168\":{\"id\":193,\"name\":\"Gothenburg\",\"country_name\":\"Sweden\",\"latitude\":57.67169952392578,\"longitude\":11.980999946594238},\"169\":{\"id\":194,\"name\":\"Humberside\",\"country_name\":\"United Kingdom\",\"latitude\":53.57139587402344,\"longitude\":-0.3534606993198395},\"170\":{\"id\":196,\"name\":\"Hamburg\",\"country_name\":\"Germany\",\"latitude\":53.54999923706055,\"longitude\":10},\"171\":{\"id\":197,\"name\":\"Hannover\",\"country_name\":\"Germany\",\"latitude\":52.3744010925293,\"longitude\":9.73859977722168},\"172\":{\"id\":200,\"name\":\"Heraklion\",\"country_name\":\"Greece\",\"latitude\":35.34001159667969,\"longitude\":25.134347915649414},\"173\":{\"id\":201,\"name\":\"Helsinki\",\"country_name\":\"Finland\",\"latitude\":60.17559814453125,\"longitude\":24.934200286865234},\"174\":{\"id\":202,\"name\":\"Innsbruck\",\"country_name\":\"Austria\",\"latitude\":47.2682991027832,\"longitude\":11.39330005645752},\"175\":{\"id\":203,\"name\":\"Inverness\",\"country_name\":\"United Kingdom\",\"latitude\":57.47809982299805,\"longitude\":-4.223299980163574},\"176\":{\"id\":204,\"name\":\"Debrecen\",\"country_name\":\"Hungary\",\"latitude\":47.529998779296875,\"longitude\":21.63920021057129},\"177\":{\"id\":205,\"name\":\"Ibiza\",\"country_name\":\"Spain\",\"latitude\":38.90890121459961,\"longitude\":1.432800054550171},\"178\":{\"id\":206,\"name\":\"Izmir\",\"country_name\":\"Turkey\",\"latitude\":38.41473388671875,\"longitude\":27.14341163635254},\"179\":{\"id\":207,\"name\":\"Istanbul\",\"country_name\":\"Turkey\",\"latitude\":41.0099983215332,\"longitude\":28.96030044555664},\"180\":{\"id\":208,\"name\":\"Jonkoping\",\"country_name\":\"Sweden\",\"latitude\":57.782562255859375,\"longitude\":14.165719032287598},\"181\":{\"id\":209,\"name\":\"Klagenfurt\",\"country_name\":\"Austria\",\"latitude\":46.61669921875,\"longitude\":14.300000190734863},\"182\":{\"id\":210,\"name\":\"Karlsruhe Baden-Baden\",\"country_name\":\"Germany\",\"latitude\":49.016700744628906,\"longitude\":8.399999618530273},\"183\":{\"id\":211,\"name\":\"Kortrijk\",\"country_name\":\"Belgium\",\"latitude\":50.82764434814453,\"longitude\":3.265988349914551},\"184\":{\"id\":212,\"name\":\"Kaunas\",\"country_name\":\"Lithuania\",\"latitude\":54.900001525878906,\"longitude\":23.933300018310547},\"185\":{\"id\":213,\"name\":\"Katowice\",\"country_name\":\"Poland\",\"latitude\":50.25,\"longitude\":19},\"186\":{\"id\":214,\"name\":\"Krakow\",\"country_name\":\"Poland\",\"latitude\":50.0614013671875,\"longitude\":19.93720054626465},\"187\":{\"id\":215,\"name\":\"Kosice\",\"country_name\":\"Slovakia\",\"latitude\":48.717227935791016,\"longitude\":21.249677658081055},\"188\":{\"id\":216,\"name\":\"Karlovy Vary\",\"country_name\":\"Czech Republic\",\"latitude\":50.23059844970703,\"longitude\":12.8725004196167},\"189\":{\"id\":217,\"name\":\"Karlstad\",\"country_name\":\"Sweden\",\"latitude\":59.36709976196289,\"longitude\":13.499899864196777},\"190\":{\"id\":218,\"name\":\"Kuressaare\",\"country_name\":\"Estonia\",\"latitude\":58.253299713134766,\"longitude\":22.486099243164062},\"191\":{\"id\":219,\"name\":\"Linz\",\"country_name\":\"Austria\",\"latitude\":48.29999923706055,\"longitude\":14.283300399780273},\"192\":{\"id\":220,\"name\":\"Liege\",\"country_name\":\"Belgium\",\"latitude\":50.625,\"longitude\":5.590700149536133},\"193\":{\"id\":221,\"name\":\"Lands End\",\"country_name\":\"United Kingdom\",\"latitude\":50.06626510620117,\"longitude\":-5.714822292327881},\"194\":{\"id\":222,\"name\":\"Liverpool\",\"country_name\":\"United Kingdom\",\"latitude\":53.400001525878906,\"longitude\":-2.983299970626831},\"195\":{\"id\":224,\"name\":\"Leeds\",\"country_name\":\"United Kingdom\",\"latitude\":53.79970169067383,\"longitude\":-1.5492000579833984},\"196\":{\"id\":225,\"name\":\"London\",\"country_name\":\"United Kingdom\",\"latitude\":51.507198333740234,\"longitude\":-0.1274999976158142},\"197\":{\"id\":227,\"name\":\"Lanzarote\",\"country_name\":\"Spain\",\"latitude\":29.01300048828125,\"longitude\":-13.633999824523926},\"198\":{\"id\":228,\"name\":\"Las Palmas de Gran Canaria\",\"country_name\":\"Spain\",\"latitude\":28.099729537963867,\"longitude\":-15.413430213928223},\"199\":{\"id\":230,\"name\":\"Lamezia Terme\",\"country_name\":\"Italy\",\"latitude\":38.964508056640625,\"longitude\":16.30214500427246},\"200\":{\"id\":231,\"name\":\"Larnaca\",\"country_name\":\"Cyprus\",\"latitude\":34.923301696777344,\"longitude\":33.63050079345703},\"201\":{\"id\":232,\"name\":\"Liepaja\",\"country_name\":\"Latvia\",\"latitude\":56.50830078125,\"longitude\":21.01110076904297},\"202\":{\"id\":233,\"name\":\"Luxembourg\",\"country_name\":\"Luxembourg\",\"latitude\":49.610599517822266,\"longitude\":6.132800102233887},\"203\":{\"id\":235,\"name\":\"Lisbon\",\"country_name\":\"Portugal\",\"latitude\":38.745201110839844,\"longitude\":-9.160400390625},\"204\":{\"id\":236,\"name\":\"Ljubljana\",\"country_name\":\"Slovenia\",\"latitude\":46.04999923706055,\"longitude\":14.51669979095459},\"205\":{\"id\":237,\"name\":\"Lappeenranta\",\"country_name\":\"Finland\",\"latitude\":61.05830001831055,\"longitude\":28.186100006103516},\"206\":{\"id\":239,\"name\":\"Lille\",\"country_name\":\"France\",\"latitude\":50.62779998779297,\"longitude\":3.058300018310547},\"207\":{\"id\":240,\"name\":\"Lyon\",\"country_name\":\"France\",\"latitude\":45.7599983215332,\"longitude\":4.840000152587891},\"208\":{\"id\":241,\"name\":\"Lugano\",\"country_name\":\"Switzerland\",\"latitude\":46.01029968261719,\"longitude\":8.962499618530273},\"209\":{\"id\":242,\"name\":\"Lulea\",\"country_name\":\"Sweden\",\"latitude\":65.58312225341797,\"longitude\":22.145954132080078},\"210\":{\"id\":243,\"name\":\"Manchester\",\"country_name\":\"United Kingdom\",\"latitude\":53.479400634765625,\"longitude\":-2.245300054550171},\"211\":{\"id\":244,\"name\":\"Mannheim\",\"country_name\":\"Germany\",\"latitude\":49.48780059814453,\"longitude\":8.466099739074707},\"212\":{\"id\":245,\"name\":\"Memmingen\",\"country_name\":\"Germany\",\"latitude\":47.98780059814453,\"longitude\":10.181099891662598},\"213\":{\"id\":246,\"name\":\"Muenster\",\"country_name\":\"Germany\",\"latitude\":51.96250915527344,\"longitude\":7.625187873840332},\"214\":{\"id\":247,\"name\":\"Munich\",\"country_name\":\"Germany\",\"latitude\":48.13719940185547,\"longitude\":11.575499534606934},\"215\":{\"id\":248,\"name\":\"Madrid\",\"country_name\":\"Spain\",\"latitude\":40.41889953613281,\"longitude\":-3.6919000148773193},\"216\":{\"id\":249,\"name\":\"Malaga\",\"country_name\":\"Spain\",\"latitude\":36.7213020324707,\"longitude\":-4.421636581420898},\"217\":{\"id\":250,\"name\":\"Mahon\",\"country_name\":\"Ireland\",\"latitude\":51.89220428466797,\"longitude\":-8.404247283935547},\"218\":{\"id\":251,\"name\":\"Murcia\",\"country_name\":\"Spain\",\"latitude\":37.98659896850586,\"longitude\":-1.1414999961853027},\"219\":{\"id\":252,\"name\":\"Milan\",\"country_name\":\"Italy\",\"latitude\":45.46689987182617,\"longitude\":9.1899995803833},\"220\":{\"id\":253,\"name\":\"Malta\",\"country_name\":\"Malta\",\"latitude\":42.98529815673828,\"longitude\":-73.78790283203125},\"221\":{\"id\":255,\"name\":\"Maastricht\",\"country_name\":\"Netherlands\",\"latitude\":50.85300064086914,\"longitude\":5.677000045776367},\"222\":{\"id\":257,\"name\":\"Milas\",\"country_name\":\"Turkey\",\"latitude\":37.27455139160156,\"longitude\":27.808570861816406},\"223\":{\"id\":259,\"name\":\"Marseille\",\"country_name\":\"France\",\"latitude\":43.2963981628418,\"longitude\":5.369999885559082},\"224\":{\"id\":260,\"name\":\"Metz\",\"country_name\":\"France\",\"latitude\":49.12030029296875,\"longitude\":6.177800178527832},\"225\":{\"id\":261,\"name\":\"Montpellier\",\"country_name\":\"France\",\"latitude\":43.611900329589844,\"longitude\":3.87719988822937},\"226\":{\"id\":262,\"name\":\"Malmo\",\"country_name\":\"Sweden\",\"latitude\":55.60529327392578,\"longitude\":13.00015640258789},\"227\":{\"id\":263,\"name\":\"Norwich\",\"country_name\":\"United Kingdom\",\"latitude\":52.630001068115234,\"longitude\":1.2970000505447388},\"228\":{\"id\":264,\"name\":\"Newcastle\",\"country_name\":\"United Kingdom\",\"latitude\":55.0077018737793,\"longitude\":-1.6577999591827393},\"229\":{\"id\":265,\"name\":\"Newquay\",\"country_name\":\"United Kingdom\",\"latitude\":50.4119987487793,\"longitude\":-5.075699806213379},\"230\":{\"id\":266,\"name\":\"Nuremberg\",\"country_name\":\"Germany\",\"latitude\":49.45280075073242,\"longitude\":11.077799797058105},\"231\":{\"id\":267,\"name\":\"Naples\",\"country_name\":\"Italy\",\"latitude\":40.83330154418945,\"longitude\":14.25},\"232\":{\"id\":268,\"name\":\"Constanta\",\"country_name\":\"Romania\",\"latitude\":44.173301696777344,\"longitude\":28.6382999420166},\"233\":{\"id\":269,\"name\":\"Nantes\",\"country_name\":\"France\",\"latitude\":47.218101501464844,\"longitude\":-1.5528000593185425},\"234\":{\"id\":270,\"name\":\"Nice\",\"country_name\":\"France\",\"latitude\":43.703399658203125,\"longitude\":7.266300201416016},\"235\":{\"id\":271,\"name\":\"Norrkoping\",\"country_name\":\"Sweden\",\"latitude\":58.590911865234375,\"longitude\":16.190351486206055},\"236\":{\"id\":272,\"name\":\"Ostend\",\"country_name\":\"Belgium\",\"latitude\":51.22585678100586,\"longitude\":2.9194960594177246},\"237\":{\"id\":273,\"name\":\"Alderney\",\"country_name\":\"United Kingdom\",\"latitude\":49.728370666503906,\"longitude\":-2.2254276275634766},\"238\":{\"id\":274,\"name\":\"Oviedo\",\"country_name\":\"Spain\",\"latitude\":43.363399505615234,\"longitude\":-5.842299938201904},\"239\":{\"id\":275,\"name\":\"Olbia\",\"country_name\":\"Italy\",\"latitude\":40.91429901123047,\"longitude\":9.51509952545166},\"240\":{\"id\":276,\"name\":\"Ohrid\",\"country_name\":\"North Macedonia\",\"latitude\":41.11690139770508,\"longitude\":20.80190086364746},\"241\":{\"id\":277,\"name\":\"Oslo\",\"country_name\":\"Norway\",\"latitude\":59.91109848022461,\"longitude\":10.752799987792969},\"242\":{\"id\":279,\"name\":\"Ostrava\",\"country_name\":\"Czech Republic\",\"latitude\":49.835601806640625,\"longitude\":18.292499542236328},\"243\":{\"id\":280,\"name\":\"Plovdiv\",\"country_name\":\"Bulgaria\",\"latitude\":42.1432991027832,\"longitude\":24.748899459838867},\"244\":{\"id\":281,\"name\":\"Plymouth\",\"country_name\":\"United Kingdom\",\"latitude\":50.37139892578125,\"longitude\":-4.142199993133545},\"245\":{\"id\":282,\"name\":\"Paderborn\",\"country_name\":\"Germany\",\"latitude\":51.71670150756836,\"longitude\":8.76669979095459},\"246\":{\"id\":283,\"name\":\"Rostock\",\"country_name\":\"Germany\",\"latitude\":54.08330154418945,\"longitude\":12.133299827575684},\"247\":{\"id\":284,\"name\":\"Palma Majorca\",\"country_name\":\"Spain\",\"latitude\":39.56863021850586,\"longitude\":2.6482481956481934},\"248\":{\"id\":285,\"name\":\"Palermo\",\"country_name\":\"Italy\",\"latitude\":38.115699768066406,\"longitude\":13.361300468444824},\"249\":{\"id\":286,\"name\":\"Pescara\",\"country_name\":\"Italy\",\"latitude\":42.464298248291016,\"longitude\":14.214200019836426},\"250\":{\"id\":287,\"name\":\"Pisa\",\"country_name\":\"Italy\",\"latitude\":43.71670150756836,\"longitude\":10.399999618530273},\"251\":{\"id\":288,\"name\":\"Paphos\",\"country_name\":\"Cyprus\",\"latitude\":34.776100158691406,\"longitude\":32.42649841308594},\"252\":{\"id\":289,\"name\":\"Palanga\",\"country_name\":\"Lithuania\",\"latitude\":55.91669845581055,\"longitude\":21.063899993896484},\"253\":{\"id\":290,\"name\":\"Ponta Delgada\",\"country_name\":\"Portugal\",\"latitude\":37.7400016784668,\"longitude\":-25.670000076293945},\"254\":{\"id\":291,\"name\":\"Porto\",\"country_name\":\"Portugal\",\"latitude\":41.14950180053711,\"longitude\":-8.610799789428711},\"255\":{\"id\":292,\"name\":\"Poprad\",\"country_name\":\"Slovakia\",\"latitude\":49.04999923706055,\"longitude\":20.299999237060547},\"256\":{\"id\":293,\"name\":\"Paris\",\"country_name\":\"France\",\"latitude\":48.85660171508789,\"longitude\":2.3522000312805176},\"257\":{\"id\":294,\"name\":\"Pula\",\"country_name\":\"Croatia\",\"latitude\":44.86669921875,\"longitude\":13.83329963684082},\"258\":{\"id\":295,\"name\":\"Podgorica\",\"country_name\":\"Montenegro\",\"latitude\":42.439701080322266,\"longitude\":19.26609992980957},\"259\":{\"id\":296,\"name\":\"Pardubice\",\"country_name\":\"Czech Republic\",\"latitude\":50.03860092163086,\"longitude\":15.779199600219727},\"260\":{\"id\":297,\"name\":\"Prague\",\"country_name\":\"Czech Republic\",\"latitude\":50.08330154418945,\"longitude\":14.41670036315918},\"261\":{\"id\":299,\"name\":\"Rhodes\",\"country_name\":\"Greece\",\"latitude\":36.441200256347656,\"longitude\":28.22249984741211},\"262\":{\"id\":300,\"name\":\"Reykjavik\",\"country_name\":\"Iceland\",\"latitude\":64.14598083496094,\"longitude\":-21.942235946655273},\"263\":{\"id\":301,\"name\":\"Reus\",\"country_name\":\"Spain\",\"latitude\":41.155555725097656,\"longitude\":1.1076133251190186},\"264\":{\"id\":302,\"name\":\"Rijeka\",\"country_name\":\"Croatia\",\"latitude\":45.3297004699707,\"longitude\":14.43220043182373},\"265\":{\"id\":303,\"name\":\"Rome\",\"country_name\":\"Italy\",\"latitude\":41.89310073852539,\"longitude\":12.482799530029297},\"266\":{\"id\":304,\"name\":\"Rimini\",\"country_name\":\"Italy\",\"latitude\":44.05939865112305,\"longitude\":12.568300247192383},\"267\":{\"id\":305,\"name\":\"Riga\",\"country_name\":\"Latvia\",\"latitude\":56.9474983215332,\"longitude\":24.10689926147461},\"268\":{\"id\":306,\"name\":\"Rotterdam\",\"country_name\":\"Netherlands\",\"latitude\":51.91999816894531,\"longitude\":4.480000019073486},\"269\":{\"id\":307,\"name\":\"Ronneby\",\"country_name\":\"Sweden\",\"latitude\":56.29999923706055,\"longitude\":15.283332824707031},\"270\":{\"id\":308,\"name\":\"Salzburg\",\"country_name\":\"Austria\",\"latitude\":47.79719924926758,\"longitude\":13.047699928283691},\"271\":{\"id\":309,\"name\":\"Sofia\",\"country_name\":\"Bulgaria\",\"latitude\":42.6974983215332,\"longitude\":23.324100494384766},\"272\":{\"id\":310,\"name\":\"Sarajevo\",\"country_name\":\"Bosnia and Herzegovina\",\"latitude\":43.86669921875,\"longitude\":18.41670036315918},\"273\":{\"id\":311,\"name\":\"Southampton\",\"country_name\":\"United Kingdom\",\"latitude\":50.900001525878906,\"longitude\":-1.399999976158142},\"274\":{\"id\":312,\"name\":\"Swansea\",\"country_name\":\"United Kingdom\",\"latitude\":41.75709915161133,\"longitude\":-71.21199798583984},\"275\":{\"id\":314,\"name\":\"Poznan\",\"country_name\":\"Poland\",\"latitude\":52.400001525878906,\"longitude\":16.91670036315918},\"276\":{\"id\":315,\"name\":\"Saarbruecken\",\"country_name\":\"Germany\",\"latitude\":49.2343635559082,\"longitude\":6.9963788986206055},\"277\":{\"id\":316,\"name\":\"Stuttgart\",\"country_name\":\"Germany\",\"latitude\":48.776100158691406,\"longitude\":9.177499771118164},\"278\":{\"id\":317,\"name\":\"Santorini\",\"country_name\":\"Greece\",\"latitude\":36.40711212158203,\"longitude\":25.456663131713867},\"279\":{\"id\":318,\"name\":\"Shannon\",\"country_name\":\"Ireland\",\"latitude\":52.71369934082031,\"longitude\":-8.868599891662598},\"280\":{\"id\":319,\"name\":\"Salamanca\",\"country_name\":\"Spain\",\"latitude\":20.57029914855957,\"longitude\":-101.19719696044922},\"281\":{\"id\":320,\"name\":\"Santiago de Compostela\",\"country_name\":\"Spain\",\"latitude\":42.88050079345703,\"longitude\":-8.545700073242188},\"282\":{\"id\":321,\"name\":\"Sevilla\",\"country_name\":\"Spain\",\"latitude\":37.3828010559082,\"longitude\":-5.973100185394287},\"283\":{\"id\":323,\"name\":\"Skopje\",\"country_name\":\"North Macedonia\",\"latitude\":41.983299255371094,\"longitude\":21.433300018310547},\"284\":{\"id\":325,\"name\":\"Stavanger\",\"country_name\":\"Norway\",\"latitude\":58.97010040283203,\"longitude\":5.73330020904541},\"285\":{\"id\":326,\"name\":\"Strasbourg\",\"country_name\":\"France\",\"latitude\":48.58330154418945,\"longitude\":7.745800018310547},\"286\":{\"id\":327,\"name\":\"Split\",\"country_name\":\"Croatia\",\"latitude\":43.5099983215332,\"longitude\":16.450000762939453},\"287\":{\"id\":329,\"name\":\"Stockholm\",\"country_name\":\"Sweden\",\"latitude\":59.32939910888672,\"longitude\":18.068599700927734},\"288\":{\"id\":330,\"name\":\"Tirana\",\"country_name\":\"Albania\",\"latitude\":41.33000183105469,\"longitude\":19.81999969482422},\"289\":{\"id\":331,\"name\":\"Thessaloniki\",\"country_name\":\"Greece\",\"latitude\":40.63330078125,\"longitude\":22.950000762939453},\"290\":{\"id\":332,\"name\":\"Tenerife\",\"country_name\":\"Spain\",\"latitude\":28.216999053955078,\"longitude\":-16.589000701904297},\"291\":{\"id\":334,\"name\":\"Trieste\",\"country_name\":\"Italy\",\"latitude\":45.63610076904297,\"longitude\":13.804200172424316},\"292\":{\"id\":335,\"name\":\"Turin\",\"country_name\":\"Italy\",\"latitude\":45.06669998168945,\"longitude\":7.699999809265137},\"293\":{\"id\":336,\"name\":\"Tel-Aviv\",\"country_name\":\"Israel\",\"latitude\":32.08330154418945,\"longitude\":34.79999923706055},\"294\":{\"id\":337,\"name\":\"Terceira Island\",\"country_name\":\"Portugal\",\"latitude\":38.72116470336914,\"longitude\":-27.217639923095703},\"295\":{\"id\":338,\"name\":\"Timisoara\",\"country_name\":\"Romania\",\"latitude\":45.759700775146484,\"longitude\":21.229999542236328},\"296\":{\"id\":339,\"name\":\"Trabzon\",\"country_name\":\"Turkey\",\"latitude\":41.005001068115234,\"longitude\":39.72249984741211},\"297\":{\"id\":340,\"name\":\"Tampere\",\"country_name\":\"Finland\",\"latitude\":61.49810028076172,\"longitude\":23.760799407958984},\"298\":{\"id\":341,\"name\":\"Turku\",\"country_name\":\"Finland\",\"latitude\":60.451698303222656,\"longitude\":22.270000457763672},\"299\":{\"id\":342,\"name\":\"Toulouse\",\"country_name\":\"France\",\"latitude\":43.60449981689453,\"longitude\":1.444000005722046},\"300\":{\"id\":343,\"name\":\"Tivat\",\"country_name\":\"Montenegro\",\"latitude\":42.43000030517578,\"longitude\":18.700000762939453},\"301\":{\"id\":345,\"name\":\"Tallinn\",\"country_name\":\"Estonia\",\"latitude\":59.437198638916016,\"longitude\":24.7450008392334},\"302\":{\"id\":346,\"name\":\"Tartu\",\"country_name\":\"Estonia\",\"latitude\":58.380001068115234,\"longitude\":26.72249984741211},\"303\":{\"id\":347,\"name\":\"Umea\",\"country_name\":\"Sweden\",\"latitude\":63.82565689086914,\"longitude\":20.26307487487793},\"304\":{\"id\":348,\"name\":\"Vienna\",\"country_name\":\"Austria\",\"latitude\":48.20830154418945,\"longitude\":16.37310028076172},\"305\":{\"id\":349,\"name\":\"Varna\",\"country_name\":\"Bulgaria\",\"latitude\":43.207801818847656,\"longitude\":27.916900634765625},\"306\":{\"id\":351,\"name\":\"Valencia\",\"country_name\":\"Spain\",\"latitude\":10.16670036315918,\"longitude\":-68},\"307\":{\"id\":352,\"name\":\"Valladolid\",\"country_name\":\"Spain\",\"latitude\":41.652000427246094,\"longitude\":-4.728600025177002},\"308\":{\"id\":353,\"name\":\"Venice\",\"country_name\":\"Italy\",\"latitude\":45.439701080322266,\"longitude\":12.331899642944336},\"309\":{\"id\":354,\"name\":\"Verona\",\"country_name\":\"Italy\",\"latitude\":45.4385986328125,\"longitude\":10.992799758911133},\"310\":{\"id\":356,\"name\":\"Vilnius\",\"country_name\":\"Lithuania\",\"latitude\":54.68330001831055,\"longitude\":25.283300399780273},\"311\":{\"id\":357,\"name\":\"Iasi\",\"country_name\":\"Romania\",\"latitude\":47.162200927734375,\"longitude\":27.588899612426758},\"312\":{\"id\":358,\"name\":\"Vaxjo\",\"country_name\":\"Sweden\",\"latitude\":56.878719329833984,\"longitude\":14.809438705444336},\"313\":{\"id\":359,\"name\":\"Visby\",\"country_name\":\"Sweden\",\"latitude\":57.62900161743164,\"longitude\":18.307100296020508},\"314\":{\"id\":361,\"name\":\"Weeze\",\"country_name\":\"Germany\",\"latitude\":51.62672805786133,\"longitude\":6.201155662536621},\"315\":{\"id\":362,\"name\":\"Westerland\",\"country_name\":\"Germany\",\"latitude\":54.90999984741211,\"longitude\":8.307499885559082},\"316\":{\"id\":364,\"name\":\"Warsaw\",\"country_name\":\"Poland\",\"latitude\":52.21670150756836,\"longitude\":21.033300399780273},\"317\":{\"id\":365,\"name\":\"Wroclaw\",\"country_name\":\"Poland\",\"latitude\":51.10770034790039,\"longitude\":17.03529930114746},\"318\":{\"id\":366,\"name\":\"Zweibruecken\",\"country_name\":\"Germany\",\"latitude\":49.248653411865234,\"longitude\":7.364198207855225},\"319\":{\"id\":367,\"name\":\"Zaragoza\",\"country_name\":\"Spain\",\"latitude\":41.64830017089844,\"longitude\":-0.8830000162124634},\"320\":{\"id\":368,\"name\":\"Zagreb\",\"country_name\":\"Croatia\",\"latitude\":45.79999923706055,\"longitude\":15.949999809265137},\"321\":{\"id\":369,\"name\":\"Zadar\",\"country_name\":\"Croatia\",\"latitude\":44.11669921875,\"longitude\":15.216699600219727},\"322\":{\"id\":370,\"name\":\"Zurich\",\"country_name\":\"Switzerland\",\"latitude\":47.37445068359375,\"longitude\":8.54104232788086},\"323\":{\"id\":371,\"name\":\"Chisinau\",\"country_name\":\"Moldova\",\"latitude\":47.00559997558594,\"longitude\":28.857500076293945},\"324\":{\"id\":546,\"name\":\"Pristina\",\"country_name\":\"Kosovo\",\"latitude\":42.66669845581055,\"longitude\":21.16670036315918},\"325\":{\"id\":547,\"name\":\"Thimphu\",\"country_name\":\"Bhutan\",\"latitude\":27.483299255371094,\"longitude\":89.63330078125},\"326\":{\"id\":548,\"name\":\"Ulaanbaatar\",\"country_name\":\"Mongolia\",\"latitude\":47.9202995300293,\"longitude\":106.91719818115234},\"327\":{\"id\":550,\"name\":\"Agartala\",\"country_name\":\"India\",\"latitude\":23.83329963684082,\"longitude\":91.2667007446289},\"328\":{\"id\":551,\"name\":\"Agra\",\"country_name\":\"India\",\"latitude\":27.18000030517578,\"longitude\":78.0199966430664},\"329\":{\"id\":552,\"name\":\"Ahmedabad\",\"country_name\":\"India\",\"latitude\":23.030000686645508,\"longitude\":72.58000183105469},\"330\":{\"id\":553,\"name\":\"Aizawl\",\"country_name\":\"India\",\"latitude\":23.710399627685547,\"longitude\":92.72000122070312},\"331\":{\"id\":554,\"name\":\"Allahabad\",\"country_name\":\"India\",\"latitude\":25.454999923706055,\"longitude\":81.83999633789062},\"332\":{\"id\":626,\"name\":\"Thiruvananthapuram\",\"country_name\":\"India\",\"latitude\":8.5,\"longitude\":76.89969635009766},\"333\":{\"id\":663,\"name\":\"Chicago\",\"country_name\":\"USA\",\"latitude\":41.83729934692383,\"longitude\":-87.68620300292969}}");

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
/* harmony import */ var src_app_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global/global.service */ "Nrpk");
/* harmony import */ var src_assets_new_json_locations_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/new_json/locations.json */ "LsXf");
var src_assets_new_json_locations_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/new_json/locations.json */ "LsXf", 1);
/* harmony import */ var src_assets_new_json_booking_ids_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/new_json/booking_ids.json */ "WklR");
var src_assets_new_json_booking_ids_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/new_json/booking_ids.json */ "WklR", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", point_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
} }
function PathDetailsComponent_section_0_div_20_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PathDetailsComponent_section_0_div_20_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const path_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.openTransport(path_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PathDetailsComponent_section_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PathDetailsComponent_section_0_div_20_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const path_r7 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.linkToBooking(path_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Booking.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PathDetailsComponent_section_0_div_20_button_16_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PathDetailsComponent_section_0_div_20_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.linkTohostelworld(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Hostelworld ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r7.duration_minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.booking - ctx_r4.button);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getTransportUrl(path_r7) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.hostelworld - ctx_r4.button);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](22, 9, path_r7.euro_price * ctx_r4.getGlobalCurrency().oneEuroRate, ctx_r4.getGlobalCurrency().code, "symbol-narrow", "1.2-2"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PathDetailsComponent_section_0_div_20_Template, 23, 14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rout_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details["transport"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details["points"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rout_r1.details.duration_minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 5, rout_r1.details.euro_price * ctx_r0.getGlobalCurrency().oneEuroRate, ctx_r0.getGlobalCurrency().code, "symbol", "1.2-2"), " ");
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
    constructor(httpService, globalService) {
        this.httpService = httpService;
        this.globalService = globalService;
        this.locations_data = src_assets_new_json_locations_json__WEBPACK_IMPORTED_MODULE_3___namespace;
        this.booking_data = src_assets_new_json_booking_ids_json__WEBPACK_IMPORTED_MODULE_4___namespace;
        this.httpService.getUserCountry().subscribe({
            next: (data) => {
                console.log('Got user country:' + data.country_code);
                this.country = data.country_code;
            },
            error: (err) => {
                console.log(err);
                this.country = 'undefined';
            },
        });
    }
    ngOnInit() {
        // this.currency = this.globalService.getCurrency();
    }
    getGlobalCurrency() {
        // console.log(this.globalService.getCurrency())
        return this.globalService.getCurrency();
    }
    getTransportName(transport) {
        return TRANSPORT.get(transport);
    }
    getTransportUrl(rout) {
        let url = '';
        switch (rout.transportation_type) {
            case 'Flight': {
                //url = "http://Skyscanner.com";
                url = this.getSkyScannerUrl(rout);
                break;
            }
            case 'Bus': {
                //url = "http://bus.tickets.ua";
                url = this.getBusUrl(rout);
                break;
            }
            case 'Train': {
                //url = "http://gd.tickets.ua";
                url = this.getTrainUrl(rout);
                //url = "https://www.tutu.ru/poezda";
                break;
            }
            case 'Car Ferry': {
                url = 'http://www.aferry.com';
                break;
            }
            case 'Ferry': {
                url = 'http://www.aferry.com';
                break;
            }
            case 'Ride Share': {
                url = 'http://BlaBlaCar.com';
                break;
            }
            default: {
                url = '';
                break;
            }
        }
        return url;
    }
    getBusUrl(rout) {
        // console.log ("bus "+this.country);
        // if((from == 545 OR to == 545) AND (transportation_type == 2))
        // console.log("bus new "+JSON.stringify(rout));
        if (rout.from == 'Донецк' ||
            rout.from == 'Donetsk' ||
            rout.to == 'Донецк' ||
            rout.to == 'Donetsk') {
            //right way is to use ID of city, but current server is not build for that
            return 'http://bustravel.dn.ua/';
        }
        switch (this.country) {
            case 'RU':
            case 'BY':
                return 'http://bus.tutu.ru';
            case 'IN':
                return 'https://www.makemytrip.com/bus-tickets/';
            case 'UA':
            default:
                return 'https://omio.sjv.io/XxEWmb';
        }
    }
    getTrainUrl(rout) {
        // console.log('train ' + this.country);
        switch (this.country) {
            case 'RU':
            case 'BY':
                return 'https://www.tutu.ru/poezda';
            case 'IN':
                return 'https://www.makemytrip.com/railways/';
            case 'UA':
            default:
                return 'https://omio.sjv.io/XxEWmb';
        }
    }
    openTransport(rout) {
        //function for opening site of corresponding transportation type
        let url = this.getTransportUrl(rout);
        if (url != '') {
            window.open(url, '_blank');
        }
    }
    getSkyScannerUrl(rout) {
        // let from=this.httpService.getSkyScannerCode(rout.from);
        // let to = this.httpService.getSkyScannerCode(rout.to);
        // let to = this.httpService.getSkyScannerCode(rout.to);
        // if (from==""||to==""){
        return 'https://omio.sjv.io/XxEWmb';
        // }
        // return "https://omio.sjv.io/XxEWmb"+from+"/"+to;
    }
    onSubmitBooking($event) {
        $event.preventDefault();
        // console.log('SUBMITTED!');
        // window.open(
        //   'https://www.booking.com/searchresults.en.html?aid=7920152',
        //   '_blank'
        // );
    }
    linkToBooking(path) {
        var a = path.to;
        //console.log('booking data', this.booking_data);
        const res = Object.keys(this.locations_data.default).map(key => (Object.assign({ name: key }, this.locations_data.default[key])));
        res.forEach(r => (r.name == a ? (this.locationId = r.id) : '-'));
        //console.log(this.locationId);
        window.open('https://www.booking.com/searchresults.en.html?aid=7920152&city=' +
            this.booking_data.default[this.locationId] +
            '&lang=en&selected_currency=EUR', '_blank');
        //if there is city
        //https://www.booking.com/searchresults.en.html?aid=7920152&city=-73635&lang=en&selected_currency=EUR
    }
    onSubmitHostelworld($event) {
        $event.preventDefault();
        console.log('SUBMITTED!');
        // window.open(
        //   'https://hostelworld.prf.hn/click/camref:1101lmmsq/[p_id:1011l441771]',
        //   '_blank'
        // );
    }
    linkTohostelworld() {
        console.log('linkToBooking!');
        window.open('https://hostelworld.prf.hn/click/camref:1101lmmsq/[p_id:1011l441771]', '_blank');
    }
}
PathDetailsComponent.ɵfac = function PathDetailsComponent_Factory(t) { return new (t || PathDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"])); };
PathDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathDetailsComponent, selectors: [["app-path-details"]], inputs: { paths: "paths", startPoint: "startPoint", endPoint: "endPoint" }, decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Buy ticket
         */
        const MSG_EXTERNAL_BuyTicket$$SRC_APP_SEARCH_RESULT_PATH_DETAILS_PATH_DETAILS_COMPONENT_TS____1 = goog.getMsg(" Buy ticket ");
        i18n_0 = MSG_EXTERNAL_BuyTicket$$SRC_APP_SEARCH_RESULT_PATH_DETAILS_PATH_DETAILS_COMPONENT_TS____1;
    }
    else {
        i18n_0 = " Buy ticket ";
    } return [[4, "ngFor", "ngForOf"], ["expandedHeight", "*", "collapsedHeight", "*"], [1, "icons"], [1, "description"], [1, "city"], ["class", "points", 4, "ngFor", "ngForOf"], [1, "time"], [1, "spacer"], ["selected", "true", 1, "price-top"], ["class", "details", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "points"], [3, "inline"], [1, "details"], [1, "rout"], [1, "time-links-price"], [1, "buttons-links"], ["novalidate", "", "ngSubmit", "onSubmitBooking($event)", 3, "formGroup"], ["mat-stroked-button", "", "color", "accent", "id", "booking-button", "type", "button", 3, "click"], ["class", "buy-ticket-button", "mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["novalidate", "", "ngSubmit", "onSubmitHostelworld($event)", 3, "formGroup"], ["id", "hostelworld-button", "mat-stroked-button", "", "color", "accent", "type", "button", 3, "click"], [1, "currency"], ["mat-stroked-button", "", "color", "primary", 1, "buy-ticket-button", 3, "click"], i18n_0]; }, template: function PathDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PathDetailsComponent_section_0_Template, 21, 10, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paths);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".price[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  border-radius: 5px;\n  color: white;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  position: relative;\n  height: auto;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.transport[_ngcontent-%COMP%] {\n  color: #607d8b;\n}\n\n.time[_ngcontent-%COMP%] {\n  color: #757575;\n}\n\nul.city[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #212121;\n  white-space: normal;\n  line-height: 1.2;\n  padding: 1px;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.1rem;\n  margin-left: 5px;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   mat-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\nli.points[_ngcontent-%COMP%] {\n  font-style: oblique;\n}\n\np[_ngcontent-%COMP%]   span.points[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n\np[_ngcontent-%COMP%]   span.currency[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  display: inline-block;\n  text-align: right;\n}\n\n.rout[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: bold;\n  color: #212121;\n}\n\n.mat-chip[_ngcontent-%COMP%] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding: 4px 4px !important;\n  border-radius: 5px;\n  min-height: 20px !important;\n  background-color: var(--color-primary) !important;\n  color: white !important;\n}\n\nsection[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 0.2rem;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%] {\n  width: 100%;\n  height: inherit;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  min-width: 70px;\n  max-width: 70px;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 70%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-accent);\n  width: calc(100% - 24px);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  padding-top: 0.5rem;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.spacer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1 1 auto;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.1rem 1rem;\n  color: var(--color-accent);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.material-icons[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  padding: 0.5rem 0;\n  color: #212121;\n  font-size: 0.9rem;\n  margin: 0;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%] {\n  color: #757575;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .time-links-price[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n}\n\n@media screen and (max-width: 599.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  .time-links-price[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    width: 40%;\n    order: 0;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n    width: 40%;\n    order: 1;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .buttons-links[_ngcontent-%COMP%] {\n    order: 2;\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    font-size: 1rem;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .time-links-price[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    width: 40%;\n    order: 0;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n    width: 40%;\n    order: 1;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .buttons-links[_ngcontent-%COMP%] {\n    order: 2;\n    width: 100%;\n  }\n\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    font-size: 1rem;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .time-links-price[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    width: 40%;\n    order: 0;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n    width: 40%;\n    order: 1;\n  }\n  .time-links-price[_ngcontent-%COMP%]   .buttons-links[_ngcontent-%COMP%] {\n    order: 2;\n    width: 100%;\n  }\n\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    font-size: 1rem;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n.time-links-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-self: center;\n}\n\n.time-links-price[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.time-links-price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: right;\n}\n\n.time-links-price[_ngcontent-%COMP%]   .buttons-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.time-links-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-self: center;\n}\n\n.time-links-price[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.time-links-price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: right;\n}\n\n.time-links-price[_ngcontent-%COMP%]   .buttons-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n#booking-button[_ngcontent-%COMP%], #hostelworld-button[_ngcontent-%COMP%], .buy-ticket-button[_ngcontent-%COMP%] {\n  margin: 2px;\n  color: black;\n  padding: 3px;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  cursor: pointer;\n  border: 1px solid #ff5722;\n}\n\n.buy-ticket-button[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLWRldGFpbHMvcGF0aC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBR0UsV0FBQTtFQUNBLGNBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVFFO0VBQ0UsZUFBQTtBQU5KOztBQVFJO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFQTjs7QUFZSTtFQUNFLGFBQUE7QUFWTjs7QUFrQkE7RUFDRSxtQkFBQTtBQWZGOztBQTBCQTtFQUNFLFdBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsNkJBQUE7QUF2QkY7O0FBeUJFO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBdkJKOztBQTJCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBeEJGOztBQW9DQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpREFBQTtFQUNBLHVCQUFBO0FBakNGOztBQW9DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFqQ0Y7O0FBbUNFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFqQ0o7O0FBbUNJO0VBQ0UsVUFBQTtBQWpDTjs7QUFtQ007RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFqQ1I7O0FBb0NNO0VBRUUsZUFBQTtBQW5DUjs7QUFzQ007RUFDRSx5Q0FBQTtFQUVBLHdCQUFBO0FBckNSOztBQXVDUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFyQ1Y7O0FBd0NRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBdENWOztBQXdDVTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUF0Q1o7O0FBMkNNO0VBQ0UsdUJBQUE7QUF6Q1I7O0FBNENVO0VBQ0UsV0FBQTtFQUVBLGFBQUE7RUNySlYsc0JEc0o2QjtFQUNuQixzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUExQ1o7O0FBNENZO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtBQTFDZDs7QUE0Q2M7RUFDRSwwQkFBQTtBQTFDaEI7O0FBaURVO0VBQ0UsV0FBQTtBQS9DWjs7QUFpRFk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0FBaERkOztBQW1EWTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFFQSw4QkFBQTtFQUNBLFdBQUE7QUFsRGQ7O0FBb0RjO0VBQ0UsY0FBQTtBQWxEaEI7O0FDaERFO0VEc0hBO0lBQ0UsV0FBQTtFQWxFRjs7RUF3RUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7RUFyRUo7QUFDRjs7QUN0REU7RURnSUE7SUFDRSxXQUFBO0VBdkVGO0FBQ0Y7O0FDekNDO0VEcUhDO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQXpFRjtFQTJFRTtJQUNFLFVBQUE7SUFDQSxRQUFBO0VBekVKO0VBNEVFO0lBQ0UsVUFBQTtJQUNBLFFBQUE7RUExRUo7RUE2RUU7SUFDRSxRQUFBO0lBQ0EsV0FBQTtFQTNFSjtBQUNGOztBQ3RERTtFRHFJQTtJQUNFLFdBQUE7RUE1RUY7RUFtRlk7SUFDRSxlQUFBO0VBakZkO0VBdUZNO0lBQ0UsZUFBQTtFQXJGUjs7RUEwRkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBdkZGO0VBeUZFO0lBQ0UsVUFBQTtJQUNBLFFBQUE7RUF2Rko7RUEwRkU7SUFDRSxVQUFBO0lBQ0EsUUFBQTtFQXhGSjtFQTJGRTtJQUNFLFFBQUE7SUFDQSxXQUFBO0VBekZKOztFQTZGQTtJQUNFLFdBQUE7RUExRkY7RUFpR1k7SUFDRSxlQUFBO0VBL0ZkO0VBcUdNO0lBQ0UsZUFBQTtFQW5HUjs7RUF3R0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBckdKO0VBdUdJO0lBQ0UsVUFBQTtJQUNBLFFBQUE7RUFyR047RUF3R0k7SUFDRSxVQUFBO0lBQ0EsUUFBQTtFQXRHTjtFQXlHSTtJQUNFLFFBQUE7SUFDQSxXQUFBO0VBdkdOOztFQTZHRTtJQUNFLFdBQUE7RUExR0o7RUFpSGM7SUFDRSxlQUFBO0VBL0doQjtFQXFIUTtJQUNFLGVBQUE7RUFuSFY7QUFDRjs7QUEwSEE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBekhGOztBQTJIRTtFQUNFLFlBQUE7QUF6SEo7O0FBNEhFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBMUhKOztBQTZIRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQTVISjs7QUFnSUE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBOUhGOztBQWdJRTtFQUNFLFlBQUE7QUE5SEo7O0FBaUlFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBL0hKOztBQWtJRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWpJSjs7QUFxSUE7OztFQUdFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQW5JRjs7QUFzSUE7RUFDRSxnQkFBQTtBQW5JRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvcGF0aC1kZXRhaWxzL3BhdGgtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2NoZWFwVHJpcFN0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2Nzcyc7XHJcblxyXG4ucHJpY2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRyYW5zcG9ydCB7XHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG5cclxudWwuY2l0eSB7XHJcbiAgLy8gZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuXHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgLy9wYWRkaW5nOiA4cHggMnB4IDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy8gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG5saS5wb2ludHMge1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuXHJcbi8vIHAgc3Bhbi5wb2ludHM6YWZ0ZXIge1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XHJcbi8vICAgICBjb250ZW50OiBcIlxcZjA1NFwiO1xyXG5cclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbi8vIH1cclxuXHJcbnAgc3Bhbi5wb2ludHM6bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG5cclxuICBzcGFuLmN1cnJlbmN5IHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLnJvdXQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyMTIxMjE7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vIHNwYW57XHJcbiAgLy8gICB3aWR0aDo0MCU7XHJcbiAgLy8gfVxyXG4gIC8vIHNwYW46bGFzdC1jaGlsZHtcclxuICAvLyAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgLy8gIGp1c3RpZnktc2VsZjogZW5kO1xyXG5cclxuICAvLyB9XHJcbn1cclxuXHJcbi5tYXQtY2hpcCB7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIHBhZGRpbmc6IDRweCA0cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWluLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcblxyXG4gIG1hdC1hY2NvcmRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdi5kZXRhaWxzIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcclxuXHJcbiAgICAgICAgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBzcGFuLnNwYWNlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgbWF0LXBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgIGRpdi5pY29ucyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveFNpemluZyhib3JkZXItYm94KTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgc3Bhbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBkaXYuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAudGltZSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBMYXJnZSB7XHJcbn1cclxuXHJcbkBpbmNsdWRlIE1lZGl1bSB7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICAvLyAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgU21hbGwge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjM2LCA5OCk7XHJcbiAgICAvLyAgYm9yZGVyOjNweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG5cclxuICAudGltZS1saW5rcy1wcmljZSB7XHJcbiAgICBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgWFNtYWxsIHtcclxuICBzZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjUyLCA1MSk7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBQaG9uZXMge1xyXG4gIC50aW1lLWxpbmtzLXByaWNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC50aW1lIHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgb3JkZXI6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1cnJlbmN5IHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgb3JkZXI6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMtbGlua3Mge1xyXG4gICAgICBvcmRlcjogMjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBzZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hdC1hY2NvcmRpb24ge1xyXG4gICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICAgICAgICBtYXQtcGFuZWwtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBkaXYuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmRldGFpbHMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGltZS1saW5rcy1wcmljZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAudGltZSB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIG9yZGVyOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyZW5jeSB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIG9yZGVyOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zLWxpbmtzIHtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXQtYWNjb3JkaW9uIHtcclxuICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgICAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZGl2LmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5kZXRhaWxzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgICAudGltZS1saW5rcy1wcmljZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICBcclxuICAgICAgLnRpbWUge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmN1cnJlbmN5IHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5idXR0b25zLWxpbmtzIHtcclxuICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAgIG1hdC1hY2NvcmRpb24ge1xyXG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgICAgICBtYXQtcGFuZWwtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgIGRpdi5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgZGl2LmRldGFpbHMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuLnRpbWUtbGlua3MtcHJpY2Uge1xyXG4gIC8vd2lkdGg6IDIzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAudGltZSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVuY3kge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC5idXR0b25zLWxpbmtzIHtcclxuICAgIC8vd2lkdGg6IDYwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udGltZS1saW5rcy1wcmljZSB7XHJcbiAgLy93aWR0aDogMjMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gIC50aW1lIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMtbGlua3Mge1xyXG4gICAgLy93aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiNib29raW5nLWJ1dHRvbixcclxuI2hvc3RlbHdvcmxkLWJ1dHRvbixcclxuLmJ1eS10aWNrZXQtYnV0dG9uIHtcclxuICBtYXJnaW46IDJweDtcclxuICAvL3dpZHRoOiAxMDBweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTcyMjtcclxufVxyXG5cclxuLmJ1eS10aWNrZXQtYnV0dG9uIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcclxuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcclxuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuQG1peGluIERlc2t0b3Age1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxuICBcclxufVxyXG5cclxuQG1peGluIFhMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTWVkaXVtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIFRhYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBYU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gUGhvbmVzIHtcclxuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGxwaG9uZXMge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbiB9XHJcblxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-details',
                templateUrl: './path-details.component.html',
                styleUrls: ['./path-details.component.scss'],
            }]
    }], function () { return [{ type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }]; }, { paths: [{
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
/*! exports provided: AlertMessage, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessage", function() { return AlertMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
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
class Button {
    constructor(buttonType, buttonText) {
        this.buttonType = buttonType;
        this.buttonText = buttonText;
    }
}


/***/ }),

/***/ "Nrpk":
/*!******************************************!*\
  !*** ./src/app/global/global.service.ts ***!
  \******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GlobalService {
    constructor() {
        this.currency = JSON.parse('{"code":"EUR", "name":"Euro", "oneEuroRate":"1", "r2rSymbol":"€"}');
    }
    getCurrency() {
        // console.log(this.currency)
        return this.currency;
    }
    setCurrency(currency) {
        this.currency = currency;
        this.setCurrencyToLocalStorage();
    }
    setCurrencyToLocalStorage() {
        localStorage.setItem('currency', this.currency.code);
    }
    getCurrencyFromLocalStorage() {
        console.log("Local stored currency " + localStorage.getItem('currency'));
        return localStorage.getItem('currency'); //null if none present
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
PathMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathMapComponent, selectors: [["app-path-map"]], inputs: { frameWidth: "frameWidth", frameHeight: "frameHeight", isDeskTop: "isDeskTop" }, decls: 1, vars: 2, consts: [["id", "map"]], template: function PathMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("desktop", ctx.isDeskTop);
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding: 0;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.desktop[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  top: 0.6rem;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    position: relative;\n  }\n  div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLW1hcC9wYXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRkY7O0FBR0U7RUFDRSxrQkFBQTtBQURKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUpKOztBQzBHQztFRGpHQztJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFMRjtFQU1FO0lBQ0Usa0JBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLW1hcC9wYXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL0BleHRlbmQgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbmRpdi5kZXNrdG9wIHtcclxuXHJcbiAgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDAuNnJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFBob25lcyB7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaWZyYW1lIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxufVxyXG5cclxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbiAgYm94LXNpemluZzogJGJveFNpemluZztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbkBtaXhpbiBEZXNrdG9wIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG59XHJcbiAgXHJcbn1cclxuXHJcbkBtaXhpbiBYTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIE1lZGl1bSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFRhYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBUYWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gWFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFBob25lcyB7XHJcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxscGhvbmVzIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIl19 */"] });
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
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9em;\n  color: white;\n  margin: 0%;\n  line-height: 1.5rem;\n  font-family: \"Anton\", sans-serif;\n  font-style: italic;\n  font-weight: lighter;\n  letter-spacing: 4px;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQ21IQztFRDNHRztJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFKSjtBQUNGOztBQzhHRTtFRHBHRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzXCI7XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuZGl2LnNsb2dhbiB7XHJcbiAgcCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJBbnRvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgUGhvbmVzIHtcclxuICBkaXYuc2xvZ2FuIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBkaXYuc2xvZ2FuIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIGJvcmRlclJhZGl1cygkdG9wTGVmdCwgJHRvcFJpZ2h0LCAkYm90dG9tTGVmdCwgJGJvdHRvbVJpZ2h0KSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXJSYWQoJHZhbCkge1xyXG4gIEBpbmNsdWRlIGJvcmRlclJhZGl1cygkdmFsLCAkdmFsLCAkdmFsLCAkdmFsKTtcclxufVxyXG5cclxuQG1peGluIGJveFNpemluZygkYm94U2l6aW5nKSB7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG4gIGJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250U2l6ZSwgJGZvbnRXZWlnaHQsICRmb250U3R5bGUpIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaGFkb3coJGhMZW5ndGgsICR2TGVuZ3RoLCAkYmx1clIsICRzcHJlYWRSKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5AbWl4aW4gRGVza3RvcCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxufVxyXG4gIFxyXG59XHJcblxyXG5AbWl4aW4gWExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBNZWRpdW0ge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgIChtYXgtd2lkdGg6IDEyNzkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBUYWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kICAobWF4LXdpZHRoOiA4MzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiAxMjgwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1peGluIFhTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0TGFuZFNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBQaG9uZXMge1xyXG4gQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbHBob25lcyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5Ljk5cHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxuIH1cclxuXHJcbiJdfQ== */"] });
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
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(evt => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                if (evt.body.length == 0) {
                    const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('warning', "Oh no!", "Sorry, the data we have accumulated is nots\n              enough to build a route between the indicated cities. Try changing your request.", [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]('Close', "Close")]);
                    this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
                        data: alertMessage,
                    });
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorData;
            // console.log ("--==unknown error==-- "+error)
            switch (true) {
                case error.status === 500:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', "oops", "Sorry. We are currently working only with Latin characters. But we promise to fix it soon.", [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]('Close', "Close")]);
                    break;
                case error.status >= 500:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', "oops", "Pss! Our server is sleeping now. Please come back later.", [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]('Close', "Close")]);
                    break;
                case error.status >= 400:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('warning', "Oh no!", "Sorry, the data we have accumulated is not\n             enough to build a route between the indicated cities. Try changing your request.", [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]('Close', "Close")]);
                    break;
                default:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', error.name, 'Unknown error', [
                        new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]('Close', "Close"),
                    ]);
                    break;
            }
            this.store.dispatch(new _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["AutocompleteFail"]('errorMessage'));
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: errorData });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    showError(title, message) {
        const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', title, message, [
            new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]('Close', "Close"),
        ]);
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
    }
    ngOnInit() {
        console.log(this.myBrowser());
        console.log(this.getBrowserVersion());
        if (this.getBrowserVersion() == 'Opera 72') {
            const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_2__["AlertMessage"]('warning', 'Unsupported!', 'Sorry, we did not have time to adapt our application for the type of web browser you are using. But we managed to optimize it for Google Chrome ver. 86 or newest. We recommend trying it!', [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_2__["Button"]("Close", "Close")]);
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Cheaptrip$$SRC_APP_APP_COMPONENT_TS_1 = goog.getMsg("CheapTrip");
        i18n_0 = MSG_EXTERNAL_Cheaptrip$$SRC_APP_APP_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "CheapTrip";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_PayLess$$SRC_APP_APP_COMPONENT_TS_3 = goog.getMsg("Pay less,");
        i18n_2 = MSG_EXTERNAL_PayLess$$SRC_APP_APP_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Pay less,";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_VisitMore$$SRC_APP_APP_COMPONENT_TS_5 = goog.getMsg("visit more!");
        i18n_4 = MSG_EXTERNAL_VisitMore$$SRC_APP_APP_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "visit more!";
    } return [["color", "primary", "role", "heading", 2, "padding", "0 0 0 0"], [1, "cheaptrip"], i18n_0, [1, "words"], [1, "wordsUp"], i18n_2, [1, "wordsDown"], i18n_4, [1, "spacer"], [1, "selector"], [1, "nav-bar"], ["routerLink", "/search/myPath/logo", "routerLinkActive", "active"], ["routerLink", "/travel", "routerLinkActive", "active"]]; }, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Find routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Budget Travel Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\nnav[_ngcontent-%COMP%] {\n  clear: both;\n  padding-top: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-decoration: none;\n  color: var(--color-primary);\n  background-color: white;\n  border-radius: 15px;\n  font-size: 0.9rem;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: white;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.selector[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n}\n\ndiv.cheaptrip[_ngcontent-%COMP%] {\n  margin: 0 0 0 15px;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-style: italic;\n  font-size: 1.8em;\n  color: white;\n  line-height: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bolder;\n}\n\n.words[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-style: italic;\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bolder;\n  display: flex;\n  align-items: baseline;\n  margin-left: 15%;\n}\n\n.wordsUp[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 1rem;\n  margin-bottom: 0;\n}\n\n.wordsDown[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: bolder;\n  margin-left: 5px;\n  font-size: 1.2em;\n  line-height: 0.5rem;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n@media screen and (min-width: 960px) {\n  .mat-toolbar[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n\n  div.cheaptrip[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    width: auto;\n    font-size: 2.8em;\n    line-height: 3rem;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n\n  .wordsUp[_ngcontent-%COMP%] {\n    margin: 0 0 0 0;\n    font-size: 1.63em;\n    line-height: 1.63rem;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    font-size: 1.63em;\n    line-height: 1.63rem;\n    margin: 0 0 0 0;\n    display: inline-flex;\n    margin-left: 8px;\n  }\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.cheaptrip[_ngcontent-%COMP%] {\n    width: auto;\n    font-size: 1.3em;\n    line-height: 1.3rem;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n    line-height: 1rem;\n    margin-left: 12%;\n  }\n\n  .wordsUp[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-bottom: 0;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    display: flex;\n    height: auto;\n  }\n\n  div.cheaptrip[_ngcontent-%COMP%] {\n    width: auto;\n    font-size: 1em;\n    line-height: 1.2rem;\n    font-weight: lighter;\n    padding: 10px 0;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    width: auto;\n    font-size: 0.5em;\n    line-height: 0.5rem;\n    margin-bottom: 0;\n    margin-left: 10%;\n  }\n\n  .wordsUp[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-bottom: 0;\n  }\n\n  .selector[_ngcontent-%COMP%] {\n    font-size: 0.4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBRUUsc0NBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRjs7QUNyQkU7RUQ0Q0E7SUFDRSxrQkFBQTtFQW5CRjs7RUFxQkE7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFFQSxnQkFBQTtJQUNBLGlCQUFBO0VBbkJGOztFQXNCQTtJQUdFLGdCQUFBO0VBckJGOztFQXlCQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBdEJGOztFQXlCQTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtFQXRCRjtBQUNGOztBQ3NCQztFRElDO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUF2QkY7O0VBMEJBO0lBRUUsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBeEJGOztFQTJCQTtJQUNFLGdCQUFBO0VBeEJGOztFQTJCQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUF4QkY7QUFDRjs7QUNNRTtFRHNCQTtJQUNFLGVBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQXpCRjs7RUE0QkE7SUFDRSxXQUFBO0lBRUEsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0VBMUJGOztFQTZCQTtJQUNFLG9CQUFBO0lBQ0EsV0FBQTtJQUVBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBM0JGOztFQThCQTtJQUNFLGdCQUFBO0VBM0JGOztFQThCQTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUEzQkY7O0VBNkJBO0lBQ0UsZ0JBQUE7RUExQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2Nzcyc7XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubmF2LWJhcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxubmF2IHtcclxuICBjbGVhcjogYm90aDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5hIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uc2VsZWN0b3Ige1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgLy8gbWFyZ2luOiAwIDAgMCAwO1xyXG4gIC8vIHBhZGRpbmc6IDAgMCAwIDA7XHJcbn1cclxuXHJcbmRpdi5jaGVhcHRyaXAge1xyXG4gIG1hcmdpbjogMCAwIDAgMTVweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ud29yZHMge1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy8gbWFyZ2luOjEwJTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcbi53b3Jkc1VwIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLndvcmRzRG93biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIGRpdi5zbG9nYW4ge1xyXG4vLyAgIHAge1xyXG5cclxuLy8gICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBtYXJnaW46IDAlO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuLy8gICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgLy8gZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcclxuLy8gICAgIC8vZm9udC1mYW1pbHk6IFwiQXJpYWwgTmFycm93XCIsIHNhbnMtc2VyaWZcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuQGluY2x1ZGUgRGVza3RvcCB7XHJcbiAgLm1hdC10b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcbiAgZGl2LmNoZWFwdHJpcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMi44ZW07XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICB9XHJcblxyXG4gIC53b3JkcyB7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gIH1cclxuXHJcbiAgLndvcmRzVXAge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAxLjYzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42M3JlbTtcclxuICB9XHJcblxyXG4gIC53b3Jkc0Rvd24ge1xyXG4gICAgZm9udC1zaXplOiAxLjYzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42M3JlbTtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFBob25lcyB7XHJcbiAgZGl2LmNoZWFwdHJpcCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLndvcmRzIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgfVxyXG5cclxuICAud29yZHNVcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLndvcmRzRG93biB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBtYXQtdG9vbGJhciB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgZGl2LmNoZWFwdHJpcCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgLndvcmRzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLndvcmRzVXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC53b3Jkc0Rvd24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2VsZWN0b3Ige1xyXG4gICAgZm9udC1zaXplOiAwLjRlbTtcclxuICAgIC8vIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIC8vIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcclxuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcclxuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuQG1peGluIERlc2t0b3Age1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxuICBcclxufVxyXG5cclxuQG1peGluIFhMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTWVkaXVtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIFRhYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBYU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gUGhvbmVzIHtcclxuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGxwaG9uZXMge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbiB9XHJcblxyXG4iXX0= */"] });
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

/***/ "WklR":
/*!**********************************************!*\
  !*** ./src/assets/new_json/booking_ids.json ***!
  \**********************************************/
/*! exports provided: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 48, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 126, 127, 128, 129, 130, 131, 132, 134, 135, 136, 137, 139, 140, 141, 142, 145, 146, 147, 150, 151, 152, 153, 154, 155, 156, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 169, 171, 172, 174, 175, 176, 177, 178, 179, 180, 181, 183, 184, 186, 187, 189, 190, 191, 192, 193, 194, 196, 197, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 222, 224, 225, 227, 228, 230, 231, 232, 233, 235, 236, 237, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 255, 257, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 314, 315, 316, 317, 318, 319, 320, 321, 323, 325, 326, 327, 329, 330, 331, 332, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 345, 346, 347, 348, 349, 351, 352, 353, 354, 356, 357, 358, 359, 362, 364, 365, 366, 367, 368, 369, 370, 371, 546, 547, 548, 550, 551, 552, 553, 554, 626, 663, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"8\":234027,\"9\":-2579372,\"10\":-3191442,\"11\":-1033783,\"12\":900052139,\"13\":-788003,\"14\":-2437894,\"15\":900052399,\"16\":-1914533,\"17\":-789552,\"18\":-1022136,\"20\":-2762812,\"21\":900052907,\"22\":-785169,\"23\":-2737683,\"24\":-2214877,\"25\":-2331392,\"26\":-801546,\"27\":-1337176,\"28\":-3103581,\"29\":-2334218,\"30\":900053908,\"31\":-970362,\"32\":-784833,\"33\":900047975,\"34\":-2705195,\"35\":-2325645,\"36\":20030916,\"37\":20015732,\"38\":20023488,\"39\":20079110,\"40\":20014181,\"41\":20023181,\"42\":20085207,\"43\":-1240261,\"44\":-3091069,\"45\":900040280,\"48\":900047908,\"50\":-235402,\"51\":-240905,\"52\":900000000,\"53\":900048183,\"55\":-2092511,\"56\":-2098033,\"57\":-2103041,\"58\":-290029,\"59\":-1898541,\"60\":-1931786,\"61\":-1907565,\"62\":-575268,\"63\":-574890,\"64\":-666610,\"65\":-979186,\"66\":-2090174,\"67\":-3249904,\"68\":-714191,\"69\":-782066,\"70\":-1506909,\"71\":-2421883,\"72\":-1603135,\"73\":-1586844,\"74\":-38833,\"75\":-2403069,\"76\":-2679652,\"77\":-3708248,\"78\":-290692,\"79\":-2405456,\"80\":900040134,\"81\":-3730078,\"82\":-1924465,\"83\":-716583,\"84\":-3092186,\"85\":-1907161,\"86\":-3096949,\"87\":-2637882,\"88\":-3239247,\"89\":-246227,\"90\":-3253342,\"91\":-2092174,\"92\":-1925268,\"93\":-2106102,\"94\":-2403010,\"95\":-782831,\"96\":-73635,\"97\":-1204094,\"98\":-3234299,\"99\":-1353149,\"100\":-1953257,\"101\":-2587757,\"102\":-1742412,\"103\":-813621,\"104\":-814876,\"105\":-370210,\"106\":-370374,\"107\":-2739166,\"108\":-2739400,\"109\":-110393,\"111\":-2140479,\"112\":-734728,\"113\":-735338,\"114\":-735347,\"115\":900039774,\"116\":-1955538,\"117\":-832673,\"118\":-74381,\"119\":-2589607,\"120\":-2589989,\"121\":-2590498,\"122\":-2590919,\"123\":-850553,\"124\":-1746443,\"126\":-1752234,\"127\":-2739909,\"128\":-372490,\"129\":-373608,\"130\":-111742,\"131\":-252873,\"132\":-253799,\"134\":-1153951,\"135\":-74897,\"136\":-840999,\"137\":-1413751,\"139\":-542184,\"140\":-2551183,\"141\":-2551235,\"142\":-2591777,\"145\":-1810561,\"146\":-820069,\"147\":-2745636,\"150\":-1501986,\"151\":-112463,\"152\":-114787,\"153\":-1156174,\"154\":-1420711,\"155\":-1417924,\"156\":-1419880,\"158\":-2594486,\"159\":-1761123,\"160\":-1761619,\"161\":-1762397,\"162\":-1502554,\"163\":900039811,\"164\":-79996,\"165\":-2602872,\"166\":-2595386,\"167\":-2595805,\"169\":-2741608,\"171\":-779626,\"172\":-2144027,\"174\":-1873064,\"175\":-1772098,\"176\":-405262,\"177\":-117543,\"178\":-258195,\"179\":-2165075,\"180\":-2166199,\"181\":-1978544,\"183\":-1176826,\"184\":-2597039,\"186\":-384328,\"187\":-383956,\"189\":-118400,\"190\":-2145032,\"191\":-501400,\"192\":-2552151,\"193\":-2482986,\"194\":-2601408,\"196\":-1785434,\"197\":-1785903,\"200\":-818172,\"201\":-1364995,\"202\":-1981445,\"203\":-2599537,\"204\":-851960,\"205\":-385722,\"206\":-755097,\"207\":-755070,\"208\":-2492129,\"209\":-1982354,\"210\":-1803994,\"211\":-1962372,\"212\":-2615427,\"213\":-507224,\"214\":-510625,\"215\":-843247,\"216\":-547025,\"217\":-2493635,\"218\":-2623022,\"219\":-1984321,\"220\":-1964016,\"222\":-2601889,\"224\":-2600941,\"225\":-2601889,\"227\":900039128,\"228\":-388528,\"230\":-123036,\"231\":-2738479,\"232\":-3210389,\"233\":-1736191,\"235\":-2167973,\"236\":-87271,\"237\":-1374408,\"239\":-1447079,\"240\":-1448468,\"241\":-2552969,\"242\":-2502432,\"243\":-2602512,\"244\":-1822951,\"245\":-1824854,\"246\":-1829320,\"247\":-1829149,\"248\":-390625,\"249\":-390787,\"250\":-1501986,\"251\":-393418,\"252\":-121726,\"253\":-19310,\"255\":-2149006,\"257\":-765320,\"259\":-1449947,\"260\":-1451260,\"261\":-1453260,\"262\":-2503264,\"263\":-2604458,\"264\":-2603966,\"265\":-2604050,\"266\":-1835238,\"267\":-122902,\"268\":-1156502,\"269\":-1454460,\"270\":-1454990,\"271\":-2508303,\"272\":-1966651,\"273\":-2590498,\"274\":-394970,\"275\":-123255,\"276\":-90608,\"277\":-273837,\"279\":-552065,\"280\":-837298,\"281\":-2605448,\"282\":-1841161,\"283\":-1852370,\"284\":-395224,\"285\":-123798,\"286\":-124336,\"287\":-124918,\"288\":-2738671,\"289\":-2617520,\"290\":-2172835,\"291\":-2173088,\"292\":-845153,\"293\":-1456928,\"294\":-93462,\"295\":-92306,\"296\":-552283,\"297\":-553173,\"299\":213835,\"300\":-2651804,\"301\":-398917,\"302\":-94414,\"303\":-126693,\"304\":-126373,\"305\":-3212216,\"306\":-2152403,\"307\":-2515591,\"308\":-1989985,\"309\":-838489,\"310\":-94996,\"311\":-2608164,\"312\":-2609220,\"314\":-523642,\"315\":-1854320,\"316\":-1871728,\"317\":-829275,\"318\":-1501211,\"319\":-400105,\"320\":-402059,\"321\":-402849,\"323\":-95841,\"325\":-280816,\"326\":-1471697,\"327\":-96492,\"329\":-2524279,\"330\":-108649,\"331\":-829252,\"332\":-375686,\"334\":-131346,\"335\":-130938,\"336\":-781545,\"337\":-2179574,\"338\":-1172411,\"339\":-773700,\"340\":-1388513,\"341\":-1389822,\"342\":-1473166,\"343\":-98296,\"345\":-2625660,\"346\":-2625737,\"347\":-2532255,\"348\":-1995499,\"349\":-839465,\"351\":-406131,\"352\":-406201,\"353\":-132007,\"354\":-132092,\"356\":-2620663,\"357\":-1161664,\"358\":-2535225,\"359\":-2536120,\"362\":-1886793,\"364\":-534433,\"365\":-537080,\"366\":-1893493,\"367\":-409149,\"368\":-101579,\"369\":-101499,\"370\":-2554935,\"371\":-2276223,\"546\":-93264,\"547\":-2211419,\"548\":-2353539,\"550\":-2088213,\"551\":-2088244,\"552\":-2088270,\"553\":-2088317,\"554\":-2088510,\"626\":-2113457,\"663\":20033173}");

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
/* harmony import */ var _currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./currency-selector/currency-selector.component */ "+hqa");
/* harmony import */ var _budget_travel_tip_city_tip_city_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./budget-travel/tip-city/tip-city.component */ "uHMY");
/* harmony import */ var _budget_travel_budget_travel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./budget-travel/budget-travel.component */ "1u3u");


































// the second parameter 'fr-FR' is optional
Object(_angular_common__WEBPACK_IMPORTED_MODULE_26__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24___default.a, 'ru');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_26__["registerLocaleData"])(_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25___default.a, 'ua');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true },
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_28__["CurrencySelectorComponent"],
        _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__["NoPageComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"],
        _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"],
        _links_links_component__WEBPACK_IMPORTED_MODULE_23__["LinksComponent"],
        _logo_logo_component__WEBPACK_IMPORTED_MODULE_27__["LogoComponent"],
        _budget_travel_tip_city_tip_city_component__WEBPACK_IMPORTED_MODULE_29__["TipCityComponent"],
        _budget_travel_budget_travel_component__WEBPACK_IMPORTED_MODULE_30__["BudgetTravelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_28__["CurrencySelectorComponent"],
                    _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__["NoPageComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"],
                    _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"],
                    _links_links_component__WEBPACK_IMPORTED_MODULE_23__["LinksComponent"],
                    _logo_logo_component__WEBPACK_IMPORTED_MODULE_27__["LogoComponent"],
                    _budget_travel_tip_city_tip_city_component__WEBPACK_IMPORTED_MODULE_29__["TipCityComponent"],
                    _budget_travel_budget_travel_component__WEBPACK_IMPORTED_MODULE_30__["BudgetTravelComponent"],
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
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__["TripDirectionEffects"]]),
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"]],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _route_service_getTravelData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../route-service/getTravelData */ "91lv");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../error-interceptor */ "SJn0");



























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
    type: 'Fixed trip without ride share',
});
PATHMAP.set('routes_without_ride_share', {
    type: 'Trip without ride share',
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
    constructor(errorInterceptor, localeService, selectService, actions$, sanitizer, http, router, store$, httpService, dataService) {
        this.errorInterceptor = errorInterceptor;
        this.localeService = localeService;
        this.selectService = selectService;
        this.actions$ = actions$;
        this.sanitizer = sanitizer;
        this.http = http;
        this.router = router;
        this.store$ = store$;
        this.httpService = httpService;
        this.dataService = dataService;
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
        //@Effect()
        // getAutocomplete$ = this.actions$.pipe(
        //   ofType(TripDirectionActions.GET_AUTOCOMPLETE),
        //   withLatestFrom(this.store$.select('directions')),
        //   switchMap((request: Array<any>) => {
        //     let url = '';
        //     //this is url for spring server
        //     if (request[1].currentServer === 'server68') {
        //       url =
        //         environment.url68 +
        //         'locations?type=' +
        //         'from' +
        //         // request[0].payload.type +
        //         '&search_name=' +
        //         encodeURIComponent(request[0].payload.name);
        //     } else {
        //       url =
        //         environment.url104 +
        //         'locations?type=' +
        //         'from' +
        //         // request[0].payload.type +
        //         '&search_name=' +
        //         encodeURIComponent(request[0].payload.name);
        //     // if (!this.checkLanguageValidity(request[0].payload.name[0])) {
        //     //   return;
        //     // }
        //     this.language = this.getLanguage(request[0].payload.name[0]);
        //     //actual query
        //     if (environment.mainServer == 'tomcat') {
        //       url =
        //         environment.urlTomCat +
        //         'CheapTrip/getLocations?type=' +
        //         '0' +
        //         '&search_name=' +
        //         encodeURIComponent(request[0].payload.name);
        //       ('');
        //       if (this.language == 'ru') {
        //         url += '&language_name=ru';
        //       }
        //     }
        //     let locations = this.LocationsEN;
        //     if (this.getLanguage(request[0].payload.name[0]) == 'ru') {
        //       locations = this.LocationsRU;
        //     }
        //     //local locations array
        //     // return locations.pipe(
        //     //   map((res) => {
        //     //     console.log(res.body);
        //     //     let resArray:IPathPoint[]= res.body;
        //     //     // let result = resArray.filter(s => s.includes(request[0].payload.name));
        //     //     let result = resArray.filter((element) => {
        //     //       return element.name.includes(request[0].payload.name);
        //     //     });
        //     //     const newAction =
        //     //       request[0].payload.type === 'from'
        //     //         // ? new TripDirectionActions.SetStartPointAutocomplete(res.body)
        //     //         // : new TripDirectionActions.SetEndPointAutocomplete(res.body);
        //     //            ? new TripDirectionActions.SetStartPointAutocomplete(result)
        //     //         : new TripDirectionActions.SetEndPointAutocomplete(result);
        //     //     return newAction;
        //     //   })
        //     //actual http
        //     return this.http.get<any>(url, { observe: 'response' }).pipe(
        //       map(res => {
        //         console.log(res);
        //         const newAction =
        //           request[0].payload.type === 'from'
        //             ? new TripDirectionActions.SetStartPointAutocomplete(res.body)
        //             : new TripDirectionActions.SetEndPointAutocomplete(res.body);
        //         return newAction;
        //       })
        //       /*  catchError((error) => {
        //         console.log('error', error);
        //         this.handleError(error);
        //         return of(new TripDirectionActions.AutoCompleteFail(error));
        //       }) */
        //     );
        //   })
        // );
        // getRouts$ = this.actions$.pipe(
        //   ofType(TripDirectionActions.GET_ROUTS),
        //   withLatestFrom(this.store$.select('directions')),
        //   switchMap((request: Array<any>) => {
        //     this.checkPoints = new Array();
        //     this.checkPointsStrings = new Array();
        //     let url = '';
        //     // lower is url for a spring server
        //     // if (request[1].currentServer === 'server68') {
        //     //   url =
        //     //     environment.url68 +
        //     //     'routes?from=' +
        //     //     request[1].startPoint.id +
        //     //     '&to=' +
        //     //     request[1].endPoint.id;
        //     // } else {
        //     //   url =
        //     //     environment.url104 +
        //     //     'routes?from=' +
        //     //     request[1].startPoint.id +
        //     //     '&to=' +
        //     //     request[1].endPoint.id;
        //     // }
        //     //here is url for a Tomcat server to be fixed
        //     // url = this.selectService.getUrl('from','to')
        //     if (environment.mainServer == 'tomcat') {
        //       url =
        //         environment.urlTomCat +
        //         'CheapTrip/getRoute?from=' +
        //         request[1].startPoint.id +
        //         '&to=' +
        //         request[1].endPoint.id;
        //     }
        //     //  this.checkPoints.push(Date.now());
        //     //  this.checkPointsStrings.push("Before request");
        //     if (this.language == 'ru') {
        //       url += '&language_name=ru';
        //     }
        //
        //       console.log(
        //         'URL',
        //         typeof request[1].startPoint.id,
        //         request[1].endPoint.id
        //       );
        // return this.http.get(url, { observe: 'response' }).pipe(
        //       map((res: any) => {
        //         // next is for timing... obsolete
        //         // this.checkPoints.push(Date.now());
        //         // this.checkPointsStrings.push("received request");
        //         console.log(res);
        //         let resultPathArr = null;
        //         resultPathArr = this.transformObject(res.body as IRecievedRouts[]);
        //         resultPathArr.sort((a, b) =>
        //           a.details.euro_price > b.details.euro_price ? 1 : -1
        //         );
        //         console.log('RESULT', resultPathArr, request);
        //         const endPoints = {
        //           from: request[1].startPoint,
        //           to: request[1].endPoint,
        //         };
        //         const queryParams = {
        //           from: request[1].startPoint.name,
        //           fromID: request[1].startPoint.id,
        //           to: request[1].endPoint.name,
        //           toID: request[1].endPoint.id,
        //         };
        //         // next is for timing... obsolete
        //         // this.checkPoints.push(Date.now());
        //         // this.checkPointsStrings.push("Before navigation to mypath");
        //         this.router.navigate(['/search/myPath'], {
        //           queryParams,
        //         });
        //         // next is for timing... obsolete
        //         // this.checkPoints.push(Date.now());
        //         // this.checkPointsStrings.push("after nav, before return");
        //         //can be used to determine user locale
        //         // console.log('User locale -------'+this.localeService.getUsersLocale('en'));
        //         // next is for timing... obsolete
        //         // for (let index = 1; index < this.checkPoints.length; index++) {
        //         //   console.log (this.checkPointsStrings[index-1]+" -> "+this.checkPointsStrings[index]
        //         //   +" elapsed "+(this.checkPoints[index]-this.checkPoints[index-1])+" ms");
        //         // }
        //         return new TripDirectionActions.SetRouts({
        //           paths: resultPathArr,
        //           endPoints: endPoints,
        //         });
        //       })
        //       /* atchError((error) => {
        //           const errorMessage = 'An unknown error occured!';
        //           this.handleError(error);
        //           return of(new TripDirectionActions.AutoCompleteFail(error));
        //         }) )*/
        //     );
        //   })
        // );
        this.getRouts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["GET_ROUTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.select('directions')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            this.checkPoints = new Array();
            this.checkPointsStrings = new Array();
            let url = '';
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mainServer == 'tomcat') {
                url =
                    _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlTomCat +
                        'CheapTrip/getRoute?from=' +
                        request[1].startPoint.id +
                        '&to=' +
                        request[1].endPoint.id;
            }
            if (this.language == 'ru') {
                url += '&language_name=ru';
            }
            console.time('Effects');
            // Вызываем getTravelData и устанавливаем значение this.body в ответ
            return this.dataService
                .getPathMap(request[1].startPoint.id, request[1].endPoint.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(path => {
                this.body = path;
                console.log('path', path);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
                // Создаем новый HttpResponse с установленным значением this.body
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpResponse"]({
                    status: 200,
                    body: this.body,
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                console.log(res);
                let resultPathArr = null;
                resultPathArr = this.transformObject(res.body);
                resultPathArr.sort((a, b) => a.details.euro_price > b.details.euro_price ? 1 : -1);
                console.log('RESULT', resultPathArr, request);
                console.timeEnd('Effects');
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
                return new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetRouts"]({
                    paths: resultPathArr,
                    endPoints: endPoints,
                });
            }));
        }));
        //   this.server = 'tomcat'; //to be fixed
        // this.server = Server.SERVER104;
        console.log('constructor inoked');
        // this.LocationsEN = httpService.getAllEnLocationsTomcat();
        // this.LocationsRU = httpService.getAllRuLocationsTomcat();
        // console.log (this.LocationsRU);
        // console.log ("en loc "+this.LocationsEN);
        //console.log ("init country "+this.country)
        //"wake up" servlet
        // this.http.get(environment.urlTomCat+'CheapTrip/getRoute?from='+10+'&to='+20).subscribe(data => {
        //   console.log("received routes");
        //   console.log (this.LocationsRU);
        // })
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
        routs.forEach(rout => {
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
        const newPaths = obj.direct_paths.map(item => {
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
        paths.map(item => {
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
        const transformedArr = paths.map(item => [item.from, item.to]);
        const result = new Set(transformedArr.reduce((a, b) => a.concat(b), []));
        return result;
    }
    reducedPaths(paths) {
        // console.log("-=Paths=- "+paths.length);
        this.checkPoints.push(Date.now());
        this.checkPointsStrings.push('Before filter');
        let stringifyArr;
        let duplicateIndex;
        do {
            stringifyArr = paths.map(p => JSON.stringify(p.details));
            duplicateIndex = -1; //means no duplicate
            for (let j = 0; j < paths.length; j++) {
                for (let i = 0; i < paths.length; i++) {
                    if (stringifyArr[j] == stringifyArr[i] && i != j) {
                        duplicateIndex = i;
                    }
                }
            }
            paths = paths.filter((_path, index) => {
                return index != duplicateIndex;
            });
        } while (duplicateIndex != -1); //do... while there is duplicates
        this.checkPoints.push(Date.now());
        this.checkPointsStrings.push('after filter');
        return paths;
    }
    checkLanguageValidity(char) {
        if (/[а-яА-Я]/.test(char)) {
            return true;
        }
        if (/[a-zA-Z]/.test(char)) {
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
        if (/[а-яА-Я]/.test(char)) {
            return 'ru';
        }
        if (/[a-zA-Z]/.test(char)) {
            return 'en';
        }
        return 'undefined';
    }
}
TripDirectionEffects.ɵfac = function TripDirectionEffects_Factory(t) { return new (t || TripDirectionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_select_direction_select_service__WEBPACK_IMPORTED_MODULE_11__["SelectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_route_service_getTravelData__WEBPACK_IMPORTED_MODULE_14__["DataService"])); };
TripDirectionEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TripDirectionEffects, factory: TripDirectionEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getRouts$", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TripDirectionEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"] }, { type: _service_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"] }, { type: _select_direction_select_service__WEBPACK_IMPORTED_MODULE_11__["SelectService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"] }, { type: _route_service_getTravelData__WEBPACK_IMPORTED_MODULE_14__["DataService"] }]; }, { 
    // getRouts$ = this.actions$.pipe(
    //   ofType(TripDirectionActions.GET_ROUTS),
    //   withLatestFrom(this.store$.select('directions')),
    //   switchMap((request: Array<any>) => {
    //     this.checkPoints = new Array();
    //     this.checkPointsStrings = new Array();
    //     let url = '';
    //     // lower is url for a spring server
    //     // if (request[1].currentServer === 'server68') {
    //     //   url =
    //     //     environment.url68 +
    //     //     'routes?from=' +
    //     //     request[1].startPoint.id +
    //     //     '&to=' +
    //     //     request[1].endPoint.id;
    //     // } else {
    //     //   url =
    //     //     environment.url104 +
    //     //     'routes?from=' +
    //     //     request[1].startPoint.id +
    //     //     '&to=' +
    //     //     request[1].endPoint.id;
    //     // }
    //     //here is url for a Tomcat server to be fixed
    //     // url = this.selectService.getUrl('from','to')
    //     if (environment.mainServer == 'tomcat') {
    //       url =
    //         environment.urlTomCat +
    //         'CheapTrip/getRoute?from=' +
    //         request[1].startPoint.id +
    //         '&to=' +
    //         request[1].endPoint.id;
    //     }
    //     //  this.checkPoints.push(Date.now());
    //     //  this.checkPointsStrings.push("Before request");
    //     if (this.language == 'ru') {
    //       url += '&language_name=ru';
    //     }
    //
    //       console.log(
    //         'URL',
    //         typeof request[1].startPoint.id,
    //         request[1].endPoint.id
    //       );
    // return this.http.get(url, { observe: 'response' }).pipe(
    //       map((res: any) => {
    //         // next is for timing... obsolete
    //         // this.checkPoints.push(Date.now());
    //         // this.checkPointsStrings.push("received request");
    //         console.log(res);
    //         let resultPathArr = null;
    //         resultPathArr = this.transformObject(res.body as IRecievedRouts[]);
    //         resultPathArr.sort((a, b) =>
    //           a.details.euro_price > b.details.euro_price ? 1 : -1
    //         );
    //         console.log('RESULT', resultPathArr, request);
    //         const endPoints = {
    //           from: request[1].startPoint,
    //           to: request[1].endPoint,
    //         };
    //         const queryParams = {
    //           from: request[1].startPoint.name,
    //           fromID: request[1].startPoint.id,
    //           to: request[1].endPoint.name,
    //           toID: request[1].endPoint.id,
    //         };
    //         // next is for timing... obsolete
    //         // this.checkPoints.push(Date.now());
    //         // this.checkPointsStrings.push("Before navigation to mypath");
    //         this.router.navigate(['/search/myPath'], {
    //           queryParams,
    //         });
    //         // next is for timing... obsolete
    //         // this.checkPoints.push(Date.now());
    //         // this.checkPointsStrings.push("after nav, before return");
    //         //can be used to determine user locale
    //         // console.log('User locale -------'+this.localeService.getUsersLocale('en'));
    //         // next is for timing... obsolete
    //         // for (let index = 1; index < this.checkPoints.length; index++) {
    //         //   console.log (this.checkPointsStrings[index-1]+" -> "+this.checkPointsStrings[index]
    //         //   +" elapsed "+(this.checkPoints[index]-this.checkPoints[index-1])+" ms");
    //         // }
    //         return new TripDirectionActions.SetRouts({
    //           paths: resultPathArr,
    //           endPoints: endPoints,
    //         });
    //       })
    //       /* atchError((error) => {
    //           const errorMessage = 'An unknown error occured!';
    //           this.handleError(error);
    //           return of(new TripDirectionActions.AutoCompleteFail(error));
    //         }) )*/
    //     );
    //   })
    // );
    getRouts$: [] }); })();


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
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9ycy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
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

/***/ "cGIP":
/*!***********************************************!*\
  !*** ./src/app/route-service/mixed_routes.ts ***!
  \***********************************************/
/*! exports provided: MixedRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixedRoutes", function() { return MixedRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MixedRoutes {
    constructor(http) {
        this.http = http;
    }
    // getFilterJson({
    //   startPoint,
    //   endPoint,
    // }: {
    //   startPoint: string;
    //   endPoint: string;
    // }): Promise<any> {
    //   const pathData: IJsonTravelData[] = [];
    //   return caches
    //     .match(new Request('assets/new_json/routes.json'))
    //     .then(response => {
    //       if (response) {
    //         return response.json();
    //       }
    //     })
    //     .then(mixedData => {
    //       const filterData = mixedData[`${startPoint}0${endPoint}`];
    //       if (!filterData) return [];
    //       const paths = filterData.direct_routes.split(',');
    //       return caches
    //         .match(new Request('assets/new_json/direct_routes.json'))
    //         .then(response => {
    //           if (response) {
    //             return response.json();
    //           }
    //         })
    //         .then(data => {
    //           paths.forEach((id: string): void => {
    //             pathData.push(data[id]);
    //           });
    //           filterData.travel_data = pathData;
    //           return filterData;
    //         });
    //     });
    // }
    getFilterJson({ startPoint, endPoint, }) {
        const pathData = [];
        console.time('GetFilterJson Mixed_Data');
        return this.http
            .get(`assets/new_json/partly/routes/${startPoint}.json`)
            .toPromise()
            .then(flyingData => {
            const filterData = flyingData[`${endPoint}`];
            if (!filterData)
                return [];
            const path = filterData.direct_routes.split(',');
            return caches.match('direct_routes').then(response => {
                if (response) {
                    return response.json().then(data => {
                        path.forEach((id) => {
                            pathData.push(data[id]);
                        });
                        filterData.travel_data = pathData;
                        console.timeEnd('GetFilterJson Mixed_Data');
                        return filterData;
                    });
                }
            });
        })
            .catch(error => {
            console.error('Error:', error);
        });
    }
    getTravelData(startPoint, endPoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const transportType = JSON.parse(sessionStorage.getItem('transportationTypes'));
            const locations = JSON.parse(sessionStorage.getItem('locations'));
            console.time('Get_Mixed_Routes');
            return this.getFilterJson({ startPoint, endPoint }).then(data => {
                if (data.length !== 0) {
                    const result = [];
                    const directPaths = data.travel_data.map(el => ({
                        duration_minutes: el.duration,
                        euro_price: el.price,
                        from: locations[el.from].name,
                        to: locations[el.to].name,
                        transportation_type: transportType[el.transport].name,
                    }));
                    result.push({
                        duration_minutes: data.duration,
                        euro_price: data.price,
                        route_type: 'mixed_routes',
                        direct_paths: directPaths,
                    });
                    console.timeEnd('Get_Mixed_Routes');
                    return result;
                }
                else {
                    return [];
                }
            });
        });
    }
}
MixedRoutes.ɵfac = function MixedRoutes_Factory(t) { return new (t || MixedRoutes)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MixedRoutes.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MixedRoutes, factory: MixedRoutes.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MixedRoutes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var _assets_new_json_locations_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/new_json/locations.json */ "LsXf");
var _assets_new_json_locations_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/new_json/locations.json */ "LsXf", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

























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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r12.directionForm.get("startPointControl").errors.invalidMsg, " ");
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
function SelectDirectionComponent_mat_option_26_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const end_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](",", end_r13.country, "");
} }
function SelectDirectionComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectDirectionComponent_mat_option_26_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const end_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", end_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", end_r13.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", end_r13.country !== undefined);
} }
function SelectDirectionComponent_div_29_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.directionForm.get("endPointControl").errors.invalidMsg, " ");
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
const _c13 = function (a0, a1) { return { searchMode: a0, deliveryMode: a1 }; };
class SelectDirectionComponent {
    constructor(http, httpService, errorInterceptor, store, route, router) {
        this.http = http;
        this.httpService = httpService;
        this.errorInterceptor = errorInterceptor;
        this.store = store;
        this.route = route;
        this.router = router;
        this.modes = _trip_direction_model__WEBPACK_IMPORTED_MODULE_6__["Modes"];
        this.startSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.endSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.locations_data = _assets_new_json_locations_json__WEBPACK_IMPORTED_MODULE_11___namespace;
        this.searchedPoint = [];
    }
    ngOnDestroy() { }
    ngOnInit() {
        console.log('NG ON init start!');
        this.mode = _trip_direction_model__WEBPACK_IMPORTED_MODULE_6__["Modes"].SEARCH;
        this.startPointAutoComplete = [];
        this.endPointAutoComplete = [];
        this.setForm();
        this.startPoint = { id: 0, name: '' };
        this.endPoint = { id: 0, name: '' };
        this.defineRouterParams();
        this.stateSubscription = this.store
            .select('directions')
            .subscribe(state => {
            this.startPointAutoComplete = state.startPointAutoComplete;
            this.endPointAutoComplete = state.endPointAutoComplete;
            this.mode = state.mode;
        });
        this.pointsSubscription();
        this.router.events.subscribe(res => console.log('rout'));
        console.log('NG oninit end!');
    }
    // autocomplete is invoked
    onInput(str, type) {
        const point = { name: str, type: type };
        const resLoc = Object.keys(this.locations_data.default).map(key => (Object.assign({ name: key }, this.locations_data.default[key])));
        this.searchedPoint = [];
        let list = [];
        resLoc.forEach(r => {
            if (r.name.toLowerCase().indexOf(point.name.toLowerCase()) === 0 &&
                list.length <= 9) {
                list.push({ id: r.id, name: r.name });
            }
            this.searchedPoint = list.sort((a, b) => a.name.localeCompare(b.name));
        });
        if (this.searchedPoint.length <= 9) {
            console.log('this.searchedPoint <= 9', 'yes');
            resLoc.forEach(r => {
                if (r.name.toLowerCase().indexOf(point.name.toLowerCase()) > 0 &&
                    list.length <= 9) {
                    list.push({ id: r.id, name: r.name });
                }
            });
        }
        if (type === 'from' &&
            this.directionForm.get('startPointControl').valid &&
            str.length > 0) {
            this.startPoint = { id: 0, name: '' };
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetAutocomplete"](point));
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetStartPointAutocomplete"](this.searchedPoint));
        }
        else if (type === 'to' &&
            this.directionForm.get('endPointControl').valid &&
            str.length > 0) {
            this.endPoint = { id: 0, name: '' };
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetEndPointAutocomplete"](this.searchedPoint));
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetAutocomplete"](point));
        }
    }
    onSubmit() {
        console.log('SUBMITTED!');
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
                    msg: "Sorry,\n          For now, we support only English input.",
                }),
            ]),
            endPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                this.patternValid({
                    pattern: /[a-zA-Z0-9\-\s]/,
                    msg: "Sorry,\n          For now, we support only English input.",
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
                this.errorInterceptor.showError("Oops", "Sorry. We are currently working only with Latin characters. But we promise to fix it soon.");
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
        console.log('Points!');
        this.startSubj.subscribe(res => {
            if (typeof res == 'string') {
                this.startPoint = this.startPointAutoComplete.filter(p => p.name === res)[0];
            }
            else {
                this.startPoint = res;
                this.directionForm.patchValue({
                    startPointControl: this.startPoint.name,
                });
            }
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetStartPoint"](Object.assign({}, this.startPoint)));
        });
        this.endSubj.subscribe(res => {
            if (typeof res == 'string') {
                this.endPoint = this.endPointAutoComplete.filter(p => p.name === res)[0];
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
SelectDirectionComponent.ɵfac = function SelectDirectionComponent_Factory(t) { return new (t || SelectDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
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
        const MSG_EXTERNAL_longslogan$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_4 = goog.getMsg(" Find most beneficial and unusual routes between cities with airports, combining flight, train, bus, ferry and rideshare. ");
        i18n_3 = MSG_EXTERNAL_longslogan$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_4;
    }
    else {
        i18n_3 = " Find most beneficial and unusual routes between cities with airports, combining flight, train, bus, ferry and rideshare. ";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5203279511751768967$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_6 = goog.getMsg("From");
        i18n_5 = MSG_EXTERNAL_5203279511751768967$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_6;
    }
    else {
        i18n_5 = "From";
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1640609344969975994$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_8 = goog.getMsg("To");
        i18n_7 = MSG_EXTERNAL_1640609344969975994$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_8;
    }
    else {
        i18n_7 = "To";
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Clear form
         */
        const MSG_EXTERNAL_clearform$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_10 = goog.getMsg(" Clear form ");
        i18n_9 = MSG_EXTERNAL_clearform$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_10;
    }
    else {
        i18n_9 = " Clear form ";
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc letsgo
         */
        const MSG_EXTERNAL_letsgo$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_12 = goog.getMsg(" Let's go ");
        i18n_11 = MSG_EXTERNAL_letsgo$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_12;
    }
    else {
        i18n_11 = " Let's go ";
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SelectDirectionComponent_mat_option_26_Template, 3, 3, "mat-option", 12);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\nmat-option[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  height: 40px;\n}\ndiv.mainContainer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  height: auto;\n  box-sizing: border-box;\n  position: relative;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  margin: 0.5rem auto 0.5rem;\n  padding: 0;\n  color: #607D8B;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   .LongSlogan[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n  margin: 1rem auto;\n  font-size: 0.9rem;\n  line-height: 2rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem auto 0.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 45%;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-warn);\n  font-style: italic;\n  padding-left: 3rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: grey;\n  cursor: pointer;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding-left: 0.5rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.valid[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.invalid[_ngcontent-%COMP%] {\n  border-color: var(--color-warn);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n  height: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 6rem;\n  margin: 0 2rem;\n}\ndiv.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  height: 2.5rem;\n}\n@media screen and (min-width: 960px) {\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   .LongSlogan[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.99px) {\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n\n  div.searchMode[_ngcontent-%COMP%]   .mat-autocomplete[_ngcontent-%COMP%]   .autocomplete[_ngcontent-%COMP%] {\n    height: 50% !important;\n  }\n}\n@media screen and (max-width: 359.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 98%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    position: relative;\n    top: 1rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: block;\n    width: 90%;\n    margin: auto;\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    top: -0.5rem;\n    width: 100%;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    margin: auto;\n    position: relative;\n    padding-left: 0.4rem;\n    border: none;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field.startPoint[_ngcontent-%COMP%] {\n    top: 0.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    align-self: center;\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    height: auto;\n    align-items: flex-start;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    border: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0.5rem auto 0;\n    position: relative;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    position: relative;\n    border-left: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 98%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    margin-top: 0;\n    position: relative;\n    top: 1rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: block;\n    width: 90%;\n    margin: auto;\n    line-height: 1.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    top: -0.5rem;\n    width: 100%;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    margin: auto;\n    position: relative;\n    padding-left: 0.4rem;\n    border: none;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.startPoint[_ngcontent-%COMP%] {\n    top: 0.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    height: auto;\n    align-items: flex-start;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0.5rem auto 0;\n    position: relative;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    position: relative;\n    border: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: relative;\n    left: -1rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi9zZWxlY3QtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSwyRUFBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUFGO0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUZKO0FBR0k7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBRE47QUFFTTtFQUNFLFVBQUE7QUFBUjtBQUVVO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFJUTtFQUNFLFdBQUE7RUFFQSxhQUFBO0FBSFY7QUFJVTtFQUVFLFdBQUE7RUFDQSxlQUFBO0FBSFo7QUFNVTtFQUNFLFdBQUE7RUM3RFYsc0JEOEQ2QjtFQUVuQixvQkFBQTtBQUpaO0FDeERFO0VBQ0Usb0JBQUE7RUFDQSwyQkQ2RCtCO0VDNUQvQixlRDREcUQ7RUMzRHJELG1CRDJEMkQ7RUMxRDNELG1CRDBEbUU7QUFBdkU7QUN4REU7RUFDRSw0QkFBQTtFQUNBLDJCRHNEK0I7RUNyRC9CLGVEcURxRDtFQ3BEckQsbUJEb0QyRDtFQ25EM0QsbUJEbURtRTtBQU92RTtBQ3hERTtFQUNFLHdCQUFBO0VBQ0EsMkJEK0MrQjtFQzlDL0IsZUQ4Q3FEO0VDN0NyRCxtQkQ2QzJEO0VDNUMzRCxtQkQ0Q21FO0FBY3ZFO0FDeERFO0VBQ0UsMEJBQUE7RUFDQSwyQkR3QytCO0VDdkMvQixlRHVDcUQ7RUN0Q3JELG1CRHNDMkQ7RUNyQzNELG1CRHFDbUU7QUFxQnZFO0FBbEJVO0VBQ0UsaUNBQUE7QUFvQlo7QUFqQlU7RUFDRSwrQkFBQTtBQW1CWjtBQWZNO0VBQ0UsMkJBQUE7QUFpQlI7QUFiSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBZU47QUFkTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBZ0JSO0FBUkk7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFXTjtBQ3hFRTtFRHdFQTtJQUNFLGlCQUFBO0VBSUY7QUFDRjtBQ2xFRTtFRHVFSTtJQUNFLGdCQUFBO0VBRk47O0VBU0k7SUFDRSxpQkFBQTtFQU5OO0FBQ0Y7QUN0Q0U7RURpREE7SUFDRSxVQUFBO0VBUkY7RUFVSTtJQUNFLGlCQUFBO0VBUk47O0VBY0U7SUFDRSxzQkFBQTtFQVhKO0FBQ0Y7QUNuQkU7RURtQ0E7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQWJGO0VBY0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFaSjtFQWFJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBWE47RUFjRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtFQVpKO0VBYUk7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQVhOO0VBWU07SUFDRSxXQUFBO0VBVlI7RUFZVTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtFQVZaO0VBWVU7SUFDRSxXQUFBO0VBVlo7RUFjTTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0Esd0JBQUE7RUFiUjtFQWdCSTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtFQWROOztFQW1CQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQWhCRjtFQWlCRTtJQUNFLGFBQUE7RUFmSjtFQW9CTTtJQUNFLGtCQUFBO0VBbEJSO0VBb0JVO0lBQ0UsWUFBQTtFQWxCWjtFQXdCSTtJQUNFLFNBQUE7RUF0Qk47RUF3Qkk7SUFDRSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQXRCTjtFQXdCTTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUF0QlI7RUF3Qk07SUFDRSxpQkFBQTtFQXRCUjtBQUNGO0FDeEdDO0VEeUlDO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUE5QkY7RUErQkU7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VBN0JKO0VBOEJJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBRUEsbUJBQUE7RUE3Qk47RUFnQ0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7RUE5Qko7RUErQkk7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQTdCTjtFQThCTTtJQUNFLFdBQUE7RUE1QlI7RUE4QlU7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7RUE1Qlo7RUE4QlU7SUFDRSxXQUFBO0VBNUJaO0VBZ0NNO0lBQ0Usa0JBQUE7SUFDQSx3QkFBQTtFQTlCUjtFQWlDSTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtFQS9CTjs7RUFvQ0E7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFqQ0Y7RUFrQ0U7SUFDRSxhQUFBO0VBaENKO0VBb0NJO0lBQ0UsU0FBQTtFQWxDTjtFQW9DSTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0VBbENOO0VBcUNVO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBbkNaO0VBcUNVO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUFuQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3NlbGVjdC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbm1hdC1vcHRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5kaXYubWFpbkNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpdi5tZXNzYWdlIHtcclxuICAgIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiM2MDdEOEI7XHJcblxyXG4gICAgLkxvbmdTbG9nYW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAwLjVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICBzZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGRpdi5lcnJvciB7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdhcm4pO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5pbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveFNpemluZyhib3JkZXItYm94KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKHZhcigtLWNvbG9yLXByaW1hcnkpLCAycmVtLCBub3JtYWwsIGN1cnNpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtYXQtZm9ybS1maWVsZC52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXQtZm9ybS1maWVsZC5pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci13YXJuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3Bhbi5hcnJvd3Mge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdi5hY3Rpb25zIHtcclxuICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5kaXYuZGVsaXZlcnlNb2RlIHtcclxuICBmb3JtIHtcclxuICAgIGRpdi5hY3Rpb25zIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgRGVza3RvcCB7XHJcbiAgZGl2Lm1haW5Db250YWluZXJ7XHJcbiAgICBcclxuICBkaXYubWVzc2FnZXtcclxuICAgIFxyXG4gXHJcbiAgLkxvbmdTbG9nYW57XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcbn1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIExhcmdlIHtcclxuIFxyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBpbmNsdWRlIFNtYWxsIHtcclxuICBkaXYubWFpbkNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGl2Lm1lc3NhZ2Uge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkaXYuc2VhcmNoTW9kZSB7XHJcbiAgICAubWF0LWF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlIHtcclxuICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBkaXYubWFpbkNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgZGl2Lm1lc3NhZ2Uge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMXJlbTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0wLjVyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZC5zdGFydFBvaW50IHtcclxuICAgICAgICAgICAgICB0b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLmFycm93cyB7XHJcbiAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBkaXYubWVzc2FnZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICBkaXYuaW5wdXQge1xyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQGluY2x1ZGUgUGhvbmVzIHtcclxuXHJcbiAgXHJcbiAgZGl2Lm1haW5Db250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGRpdi5tZXNzYWdlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDFyZW07XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAvLyBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMC41cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZGl2LmZvcm1JbmZvIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXYuaW5wdXQge1xyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQuc3RhcnRQb2ludCB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhbi5hcnJvd3Mge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuZGVsaXZlcnlNb2RlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGRpdi5tZXNzYWdlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gYXV0byAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgIGRpdi5pbnB1dCB7XHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMXJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAvLyAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcclxuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcclxuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuQG1peGluIERlc2t0b3Age1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxuICBcclxufVxyXG5cclxuQG1peGluIFhMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTWVkaXVtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIFRhYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBYU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gUGhvbmVzIHtcclxuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGxwaG9uZXMge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbiB9XHJcblxyXG4iXX0= */"], data: { animation: [
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
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"] }, { type: _error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { startPointInputEl: [{
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








// import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';
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

/***/ "i2ms":
/*!************************************************!*\
  !*** ./src/app/route-service/ground_routes.ts ***!
  \************************************************/
/*! exports provided: GroundRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundRoutes", function() { return GroundRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class GroundRoutes {
    constructor(http) {
        this.http = http;
    }
    // getFilterJson({
    //   startPoint,
    //   endPoint,
    // }: {
    //   startPoint: string;
    //   endPoint: string;
    // }): Promise<any> {
    //   const pathData: IJsonTravelData[] = [];
    //   console.time('Get_Ground_Routes');
    //   return caches
    //     .match(new Request('assets/new_json/fixed_routes.json'))
    //     .then(response => {
    //       if (response) {
    //         return response.json();
    //       }
    //     })
    //     .then(fixedData => {
    //       console.timeEnd('Get_Ground_Routes');
    //       const filterData = fixedData[`${startPoint}0${endPoint}`];
    //       if (!filterData) return [];
    //       const path = filterData.direct_routes.split(',');
    //       return caches
    //         .match(new Request('assets/new_json/direct_routes.json'))
    //         .then(response => {
    //           if (response) {
    //             return response.json();
    //           }
    //         })
    //         .then(data => {
    //           path.forEach((id: string): void => {
    //             pathData.push(data[id]);
    //           });
    //           filterData.travel_data = pathData;
    //           return filterData;
    //         });
    //     });
    // }
    getFilterJson({ startPoint, endPoint, }) {
        const pathData = [];
        console.time('GetFilterJson Ground_Data');
        return this.http
            .get(`assets/new_json/partly/fixed_routes/${startPoint}.json`)
            .toPromise()
            .then(flyingData => {
            const filterData = flyingData[`${endPoint}`];
            if (!filterData)
                return [];
            const path = filterData.direct_routes.split(',');
            return caches.match('direct_routes').then(response => {
                if (response) {
                    return response.json().then(data => {
                        path.forEach((id) => {
                            pathData.push(data[id]);
                        });
                        filterData.travel_data = pathData;
                        console.timeEnd('GetFilterJson Ground_Data');
                        return filterData;
                    });
                }
            });
        })
            .catch(error => {
            console.error('Error:', error);
        });
    }
    getTravelData(startPoint, endPoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const transportType = JSON.parse(sessionStorage.getItem('transportationTypes'));
            console.time('Location');
            const locations = JSON.parse(sessionStorage.getItem('locations'));
            console.timeEnd('Location');
            console.time('Ground-Routes');
            return this.getFilterJson({ startPoint, endPoint }).then(data => {
                if (data.length !== 0) {
                    const result = [];
                    const directPaths = data.travel_data.map(el => ({
                        duration_minutes: el.duration,
                        euro_price: el.price,
                        from: locations[el.from].name,
                        to: locations[el.to].name,
                        transportation_type: transportType[el.transport].name,
                    }));
                    result.push({
                        duration_minutes: data.duration,
                        euro_price: data.price,
                        route_type: 'ground_routes',
                        direct_paths: directPaths,
                    });
                    console.timeEnd('Ground-Routes');
                    return result;
                }
                else {
                    return [];
                }
            });
        });
    }
}
GroundRoutes.ɵfac = function GroundRoutes_Factory(t) { return new (t || GroundRoutes)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GroundRoutes.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GroundRoutes, factory: GroundRoutes.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroundRoutes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
    } }, directives: [_select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_5__["SelectDirectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9em;\n  color: white;\n  margin: 0%;\n  line-height: 1.5rem;\n  font-family: \"Anton\", sans-serif;\n  font-style: italic;\n  font-weight: lighter;\n  letter-spacing: 4px;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vdHJpcC1kaXJlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUM4R0M7RURyR0c7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBTEo7QUFDRjs7QUN5R0U7RUQ5RkU7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBUko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3RyaXAtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgJy4uLy4uL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2Nzcyc7XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbmRpdi5zbG9nYW4ge1xyXG4gIHAge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFBob25lcyB7XHJcbiAgZGl2LnNsb2dhbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBTbWFsbHBob25lcyB7XHJcbiAgZGl2LnNsb2dhbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcclxuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcclxuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuQG1peGluIERlc2t0b3Age1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxuICBcclxufVxyXG5cclxuQG1peGluIFhMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTWVkaXVtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIFRhYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBYU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gUGhvbmVzIHtcclxuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGxwaG9uZXMge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbiB9XHJcblxyXG4iXX0= */"] });
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
        console.log("GEt ROUTS Constructor");
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
        i18n_0 = "Sorry, no such page";
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
    serverChanged: false,
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

/***/ "uHMY":
/*!**************************************************************!*\
  !*** ./src/app/budget-travel/tip-city/tip-city.component.ts ***!
  \**************************************************************/
/*! exports provided: TipCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipCityComponent", function() { return TipCityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TipCityComponent {
    constructor() { }
    ngOnInit() {
    }
}
TipCityComponent.ɵfac = function TipCityComponent_Factory(t) { return new (t || TipCityComponent)(); };
TipCityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TipCityComponent, selectors: [["app-tip-city"]], decls: 48, vars: 0, consts: [[1, "pb-5"], [1, "img-container"], ["src", "../../assets/images/images_budget/london.jpg", "alt", "City", 1, "city-img"], [1, "container", "section"], [1, "section-title"], [1, "city-details"], [1, "city-details__title"], [1, "city-details__text"], [1, "city-details__list"], [1, "city-details__li"], ["href", "#", 1, "city-details__button"], [1, "mt-3", "places"], [1, "card", "card--additional"], ["srcset", "../../assets/images/images_budget/paris.webp 1x", "type", "image/webp"], ["srcset", "../../assets/images/images_budget/paris.jpg 1x", "type", "image/jpeg"], ["src", "../../assets/images/images_budget/paris.jpg", "width", "375", "height", "250", "alt", "Paris", "loading", "lazy", 1, "card-img-top", "places__img"], [1, "card-body", "py-2", "py-lg-3", "text-center"], [1, "card-text", "card-title"], ["srcset", "../../assets/images/images_budget/london.webp 1x", "type", "image/webp"], ["srcset", "../../assets/images/images_budget/london.jpg 1x", "type", "image/jpeg"], ["src", "../../assets/images/images_budget/london.jpg", "width", "375", "height", "250", "alt", "London", "loading", "lazy", 1, "card-img-top", "places__img"]], template: function TipCityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Great Britain is an island in the North Atlantic Ocean off the north-west coast of continental Europe. With an area of 209,331 km2 (80,823 sq mi), it is the largest of the British Isles, the largest European island and the ninth-largest island in the world. It is dominated by a maritime climate with narrow temperature differences between seasons. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fun facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " France Is the Most-Visited Country in the World. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "France Is Smaller Than Texas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "France Has the Largest Art Museum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " The French Eat 25,000 Tons of Snails Each Year. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " France Produces Over 1,500 Types of Cheese. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Supermarkets in France Can't Throw Away Food. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Find routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Also check this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "source", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "source", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "source", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\n\n.section[_ngcontent-%COMP%] {\n  min-width: 200px;\n  background-color: #fff;\n  margin: 2rem auto 0;\n}\n\n@media (min-width: 576px) {\n  .section[_ngcontent-%COMP%] {\n    margin: 4rem auto 0;\n    max-width: 33vw;\n  }\n}\n\n.section--search[_ngcontent-%COMP%] {\n  margin: 1rem auto 0;\n}\n\n@media (min-width: 576px) {\n  .section--search[_ngcontent-%COMP%] {\n    margin: 2rem auto 0;\n  }\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: #000;\n  margin-bottom: 20px;\n}\n\n@media (min-width: 576px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  min-width: 200px;\n  background-color: #ff5722;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 0.5rem 2px 1rem;\n}\n\n.headline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.headline__logo[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: bolder;\n  font-size: 1.6rem;\n  color: #fff;\n}\n\n@media (min-width: 350px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n\n@media (min-width: 576px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 2.3rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .headline__logo[_ngcontent-%COMP%] {\n    font-size: 3.3rem;\n  }\n}\n\n.headline__slogan[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  font-size: 1rem;\n  font-style: italic;\n  font-weight: bolder;\n  color: #fff;\n  display: none;\n}\n\n@media (min-width: 410px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n@media (min-width: 576px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .headline__slogan[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.menu[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n\n.menu__btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 50%;\n  height: 3rem;\n  width: 3rem;\n  background-color: #ff5722;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu__btn[_ngcontent-%COMP%]:hover, .menu__btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.services[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100vh;\n  box-shadow: 0px 6px 7px #000;\n  border-radius: 0;\n  background-color: #ff5722;\n}\n\n@media (min-width: 200px) {\n  .services[_ngcontent-%COMP%] {\n    top: 50% !important;\n    left: 100% !important;\n    transform: translate(-100%, -50%) !important;\n  }\n}\n\n.services__item[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 0 !important;\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n}\n\n.services__item[_ngcontent-%COMP%]:hover, .services__item[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.04) !important;\n}\n\n.services__item--close[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  border-radius: 50% !important;\n}\n\n.services-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 35px 5px 35px 10px;\n}\n\n.services-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 400;\n  color: #fff;\n}\n\n.item-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  padding-left: 8px;\n  display: inline-block;\n}\n\n.search-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 768px) {\n  .search-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n    min-width: 100%;\n  }\n}\n\n.search-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 768px) {\n  .search-item[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n.search-item__label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 300;\n  color: #000;\n}\n\n.search-item__input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ff5722;\n  padding: 0.9rem 0.6rem;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: #000;\n}\n\n.search-item__input[_ngcontent-%COMP%]::placeholder {\n  font-weight: 300;\n  color: #bbb;\n}\n\n@media (min-width: 768px) {\n  .search-item__input[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    min-width: 100%;\n  }\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ff5722;\n  color: #fff;\n  background-color: #ff5722;\n  padding: 0.4rem 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  min-width: 100%;\n}\n\n.action-btn[_ngcontent-%COMP%]:hover, .action-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ca2f00c7;\n  background-color: #ca2f00c7;\n}\n\n@media (min-width: 576px) {\n  .action-btn[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n.action-btn--additional[_ngcontent-%COMP%] {\n  border: 1px solid #cecece;\n  color: #000;\n  background-color: #fff;\n}\n\n.action-btn--additional[_ngcontent-%COMP%]:hover, .action-btn--additional[_ngcontent-%COMP%]:focus {\n  border-color: #cecece;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.card--additional[_ngcontent-%COMP%] {\n  border: 1px solid #cecece;\n  box-shadow: none;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  color: #000;\n}\n\n@media (min-width: 768px) {\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n.places[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1rem;\n}\n\n.places__img[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 120px;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #cecece;\n  overflow: hidden;\n  border-top-left-radius: var(--mdb-card-inner-border-radius);\n  border-top-right-radius: var(--mdb-card-inner-border-radius);\n  border-bottom: 1px solid #cecece;\n}\n\n.gallery__item[_ngcontent-%COMP%] {\n  max-width: 25%;\n  min-height: 120px;\n  max-height: 250px;\n  object-fit: cover;\n}\n\n.gallery__item[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #cecece;\n}\n\n.gallery__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.city-img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 32px;\n}\n\n@media (min-width: 768px) {\n  .city-img[_ngcontent-%COMP%] {\n    max-width: 33%;\n    min-width: 33%;\n    margin: 32px auto 0;\n  }\n}\n\n.city-details__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: #000;\n  margin-bottom: 20px;\n}\n\n@media (min-width: 576px) {\n  .city-details__title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .city-details__title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n\n.city-details__text[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.city-details__list[_ngcontent-%COMP%] {\n  list-style: inside;\n  color: #000;\n}\n\n.city-details__button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 18px;\n  margin-bottom: 15px;\n  text-decoration: none;\n  border-radius: 8px;\n  border: 1px solid #ff5722;\n  color: #fff;\n  background-color: #ff5722;\n  padding: 0.4rem 0;\n  font-size: 1rem;\n  font-weight: 300;\n  min-width: 100%;\n  line-height: 38px;\n  text-align: center;\n}\n\n.city-details__button[_ngcontent-%COMP%]:hover, .city-details__button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ca2f00c7;\n  background-color: #ca2f00c7;\n  color: #fff;\n}\n\n@media (min-width: 576px) {\n  .city-details__button[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jaGVhcFRyaXBTdHlsZXMvY3NzX2NpdHkvX2N1c3RvbS1yZXNldC5zY3NzIiwic3JjL2FwcC9idWRnZXQtdHJhdmVsL3RpcC1jaXR5L3RpcC1jaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9jc3NfY2l0eS9fc2VjdGlvbnMuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvY3NzX2NpdHkvX3ZhcnMuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvY3NzX2NpdHkvX2hlYWRlci5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9jc3NfY2l0eS9fc2VhcmNoLnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL2Nzc19jaXR5L19jYXJkcy5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9jc3NfY2l0eS9fY2l0eS1pbWcuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvY3NzX2NpdHkvX2NpdHktZGV0YWlscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEREE7Ozs7RUFJRSxxQkFBQTtBQ0lGOztBQ3hCQTtFQUNFLGdCQ0RZO0VERVosc0JDTWdCO0VETGhCLG1CQUFBO0FEMkJGOztBQzFCRTtFQUpGO0lBS0ksbUJBQUE7SUFDQSxlQUFBO0VENkJGO0FBQ0Y7O0FDMUJBO0VBQ0UsbUJBQUE7QUQ2QkY7O0FDNUJFO0VBRkY7SUFHSSxtQkFBQTtFRCtCRjtBQUNGOztBQzVCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQ2RnQjtFRGVoQixtQkFBQTtBRCtCRjs7QUM5QkU7RUFMRjtJQU1JLGlCQUFBO0VEaUNGO0FBQ0Y7O0FDaENFO0VBUkY7SUFTSSxpQkFBQTtFRG1DRjtBQUNGOztBRzlEQTtFQUNFLGdCRERZO0VDRVoseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FIaUVGOztBRzlEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBSGlFRjs7QUc5REE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRFhrQjtBRjRFcEI7O0FHaEVFO0VBTEY7SUFNSSxlQUFBO0VIbUVGO0FBQ0Y7O0FHbEVFO0VBUkY7SUFTSSxpQkFBQTtFSHFFRjtBQUNGOztBR3BFRTtFQVhGO0lBWUksaUJBQUE7RUh1RUY7QUFDRjs7QUdwRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0Q1QmtCO0VDNkJsQixhQUFBO0FIdUVGOztBR3RFRTtFQVBGO0lBUUksZUFBQTtFSHlFRjtBQUNGOztBR3hFRTtFQVZGO0lBV0ksaUJBQUE7RUgyRUY7QUFDRjs7QUcxRUU7RUFiRjtJQWNJLGlCQUFBO0VINkVGO0FBQ0Y7O0FHMUVBO0VBQ0UsZ0JBQUE7QUg2RUY7O0FHMUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkR2RGM7RUN3RGQsV0RuRGtCO0VDb0RsQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBSDZFRjs7QUc1RUU7RUFFRSxhQUFBO0VBQ0EscUNBQUE7QUg2RUo7O0FHekVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJEeEVjO0FGb0poQjs7QUczRUU7RUFORjtJQU9JLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSw0Q0FBQTtFSDhFRjtBQUNGOztBRzNFQTtFQUNFLFdENUVrQjtFQzZFbEIsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBSDhFRjs7QUc3RUU7RUFFRSxhQUFBO0VBQ0EsV0RwRmdCO0VDcUZoQixnREFBQTtBSDhFSjs7QUcxRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FINkVGOztBRzFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUg2RUY7O0FHMUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdEekdrQjtBRnNMcEI7O0FHMUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBSDZFRjs7QUlwTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUp1TUY7O0FJdE1FO0VBSEY7SUFJSSxtQkFBQTtJQUNBLGVBQUE7RUp5TUY7QUFDRjs7QUl0TUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUp5TUY7O0FJeE1FO0VBSEY7SUFJSSxlQUFBO0VKMk1GO0FBQ0Y7O0FJeE1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0ZkZ0I7QUZ5TmxCOztBSXhNQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXRnZCZ0I7QUZrT2xCOztBSTFNRTtFQUNFLGdCQUFBO0VBQ0EsV0YzQmdCO0FGdU9wQjs7QUkxTUU7RUFYRjtJQVlJLGVBQUE7SUFDQSxlQUFBO0VKNk1GO0FBQ0Y7O0FJMU1BO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdGcENrQjtFRXFDbEIseUJGMUNjO0VFMkNkLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUo2TUY7O0FJNU1FO0VBRUUsYUFBQTtFQUNBLHVCRmpEaUI7RUVrRGpCLDJCRmxEaUI7QUYrUHJCOztBSTNNRTtFQWZGO0lBZ0JJLGlCQUFBO0VKOE1GO0FBQ0Y7O0FJM01BO0VBQ0UseUJBQUE7RUFDQSxXRnhEZ0I7RUV5RGhCLHNCRnZEZ0I7QUZxUWxCOztBSTdNRTtFQUVFLHFCRjlEVztFRStEWCxxQ0FBQTtBSjhNSjs7QUtqUkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FMb1JGOztBS2pSQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdIRmdCO0FGc1JsQjs7QUtuUkU7RUFKRjtJQUtJLGlCQUFBO0VMc1JGO0FBQ0Y7O0FLblJBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBTHNSRjs7QUtuUkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBTHNSRjs7QUtuUkE7RUFDRSxhQUFBO0VBQ0EseUJIMUJhO0VHMkJiLGdCQUFBO0VBQ0EsMkRBQUE7RUFDQSw0REFBQTtFQUNBLGdDQUFBO0FMc1JGOztBS25SQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUxzUkY7O0FLclJFO0VBQ0UsK0JBQUE7QUx1Uko7O0FLblJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FMc1JGOztBTXpVQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QU40VUY7O0FNelVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FONFVGOztBTTFVRTtFQUpGO0lBS0ksY0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFTjZVRjtBQUNGOztBTzFWRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXTEVjO0VLQWQsbUJBQUE7QVA0Vko7O0FPM1ZJO0VBTkY7SUFPSSxpQkFBQTtFUDhWSjtBQUNGOztBTzdWSTtFQVRGO0lBVUksaUJBQUE7RVBnV0o7QUFDRjs7QU83VkU7RUFDRSxXTFZjO0FGeVdsQjs7QU81VkU7RUFDRSxrQkFBQTtFQUNBLFdMZmM7QUY2V2xCOztBTzNWRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdMeEJnQjtFS3lCaEIseUJMOUJZO0VLK0JaLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QVA2Vko7O0FPNVZJO0VBRUUsYUFBQTtFQUNBLHVCTHZDZTtFS3dDZiwyQkx4Q2U7RUt5Q2YsV0xyQ2M7QUZrWXBCOztBTzNWSTtFQXRCRjtJQXVCSSxpQkFBQTtFUDhWSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYnVkZ2V0LXRyYXZlbC90aXAtY2l0eS90aXAtY2l0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiwgXHJcbmlucHV0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5oMSxcclxuaDIsXHJcbmgze1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuYSxcclxuYTpob3ZlcixcclxuYTpmb2N1cyxcclxuYTphY3RpdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSIsImJ1dHRvbixcbmlucHV0IHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmEsXG5hOmhvdmVyLFxuYTpmb2N1cyxcbmE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMnJlbSBhdXRvIDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIG1hcmdpbjogNHJlbSBhdXRvIDA7XG4gICAgbWF4LXdpZHRoOiAzM3Z3O1xuICB9XG59XG5cbi5zZWN0aW9uLS1zZWFyY2gge1xuICBtYXJnaW46IDFyZW0gYXV0byAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLS1zZWFyY2gge1xuICAgIG1hcmdpbjogMnJlbSBhdXRvIDA7XG4gIH1cbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAwLjVyZW0gMnB4IDFyZW07XG59XG5cbi5oZWFkbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkbGluZV9fbG9nbyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XG4gIC5oZWFkbGluZV9fbG9nbyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRsaW5lX19sb2dvIHtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkbGluZV9fbG9nbyB7XG4gICAgZm9udC1zaXplOiAzLjNyZW07XG4gIH1cbn1cblxuLmhlYWRsaW5lX19zbG9nYW4ge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMHB4KSB7XG4gIC5oZWFkbGluZV9fc2xvZ2FuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGxpbmVfX3Nsb2dhbiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGxpbmVfX3Nsb2dhbiB7XG4gICAgZm9udC1zaXplOiAyLjFyZW07XG4gIH1cbn1cblxuLm1lbnUge1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4ubWVudV9fYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51X19idG46aG92ZXIsIC5tZW51X19idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4uc2VydmljZXMge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjAwcHgpIHtcbiAgLnNlcnZpY2VzIHtcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc2VydmljZXNfX2l0ZW0ge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZXJ2aWNlc19faXRlbTpob3ZlciwgLnNlcnZpY2VzX19pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCkgIWltcG9ydGFudDtcbn1cblxuLnNlcnZpY2VzX19pdGVtLS1jbG9zZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uc2VydmljZXMtdGl0bGUtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzVweCA1cHggMzVweCAxMHB4O1xufVxuXG4uc2VydmljZXMtdGl0bGUge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXRlbS10ZXh0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VhcmNoLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VhcmNoLWdyb3VwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc2VhcmNoLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtaXRlbSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5zZWFyY2gtaXRlbV9fbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc2VhcmNoLWl0ZW1fX2lucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY1NzIyO1xuICBwYWRkaW5nOiAwLjlyZW0gMC42cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VhcmNoLWl0ZW1fX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjYmJiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtaXRlbV9faW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmFjdGlvbi1idG4ge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjU3MjI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBwYWRkaW5nOiAwLjRyZW0gMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyLCAuYWN0aW9uLWJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2NhMmYwMGM3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2EyZjAwYzc7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmFjdGlvbi1idG4ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG5cbi5hY3Rpb24tYnRuLS1hZGRpdGlvbmFsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYWN0aW9uLWJ0bi0tYWRkaXRpb25hbDpob3ZlciwgLmFjdGlvbi1idG4tLWFkZGl0aW9uYWw6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNjZWNlY2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5jYXJkLS1hZGRpdGlvbmFsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuXG4ucGxhY2VzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbn1cblxuLnBsYWNlc19faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLW1kYi1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tbWRiLWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG4uZ2FsbGVyeV9faXRlbSB7XG4gIG1heC13aWR0aDogMjUlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmdhbGxlcnlfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbi5nYWxsZXJ5X19pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2l0eS1pbWcge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNpdHktaW1nIHtcbiAgICBtYXgtd2lkdGg6IDMzJTtcbiAgICBtaW4td2lkdGg6IDMzJTtcbiAgICBtYXJnaW46IDMycHggYXV0byAwO1xuICB9XG59XG5cbi5jaXR5LWRldGFpbHNfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jaXR5LWRldGFpbHNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jaXR5LWRldGFpbHNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgfVxufVxuLmNpdHktZGV0YWlsc19fdGV4dCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNpdHktZGV0YWlsc19fbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IGluc2lkZTtcbiAgY29sb3I6ICMwMDA7XG59XG4uY2l0eS1kZXRhaWxzX19idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY1NzIyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgcGFkZGluZzogMC40cmVtIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNpdHktZGV0YWlsc19fYnV0dG9uOmhvdmVyLCAuY2l0eS1kZXRhaWxzX19idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICNjYTJmMDBjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhMmYwMGM3O1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY2l0eS1kZXRhaWxzX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59IiwiLnNlY3Rpb24ge1xyXG4gIG1pbi13aWR0aDogJG1pbi1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iYWNrLW1haW47XHJcbiAgbWFyZ2luOiAycmVtIGF1dG8gMDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBtYXJnaW46IDRyZW0gYXV0byAwO1xyXG4gICAgbWF4LXdpZHRoOiAzM3Z3O1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24tLXNlYXJjaCB7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgfVxyXG59XHJcbiIsIiRtaW4tY29udGVudDogMjAwcHg7XHJcblxyXG4kY29sb3ItcHJpbWFyeTogI2ZmNTcyMjtcclxuJGNvbG9yLXByaW1hcnktZGFyazogI2NhMmYwMGM3O1xyXG4kY29sb3ItYm9yZGVyOiAjY2VjZWNlO1xyXG4kY29sb3ItcGxhY2Vob2xkZXI6ICNiYmI7XHJcbiRjb2xvci1mb250LW1haW46ICMwMDA7XHJcbiRjb2xvci1mb250LXNlY29uZDogI2ZmZjtcclxuJGNvbG9yLWJhY2stbWFpbjogI2ZmZjtcclxuXHJcbiRicC14czogMzUwcHg7XHJcbiRicC1zOiA0MTBweDtcclxuJGJwLXNtOiA1NzZweDtcclxuJGJwLW1kOiA3NjhweDsiLCIuaGVhZGVyIHtcclxuICBtaW4td2lkdGg6ICRtaW4tY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJweCAuNXJlbSAycHggMXJlbTtcclxufVxyXG5cclxuLmhlYWRsaW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkbGluZV9fbG9nbyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXhzKSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtc20pIHtcclxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLW1kKSB7XHJcbiAgICBmb250LXNpemU6IDMuM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkbGluZV9fc2xvZ2FuIHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtcykge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLm1lbnVfX2J0biB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LXNlY29uZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZXMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4ICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbi1jb250ZW50KSB7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZXNfX2l0ZW0ge1xyXG4gIGNvbG9yOiAkY29sb3ItZm9udC1zZWNvbmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1zZWNvbmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZXNfX2l0ZW0tLWNsb3NlIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy10aXRsZS13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDM1cHggNXB4IDM1cHggMTBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG59XHJcblxyXG4uaXRlbS10ZXh0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDsgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59IiwiLnNlYXJjaC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtbWQpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLW1kKSB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWl0ZW1fX2xhYmVsIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtbWFpbjtcclxufVxyXG5cclxuLnNlYXJjaC1pdGVtX19pbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xyXG4gIHBhZGRpbmc6IDAuOXJlbSAwLjZyZW07XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtbWFpbjtcclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICRjb2xvci1wbGFjZWhvbGRlcjtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktZGFyaztcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbSkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ0bi0tYWRkaXRpb25hbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjtcclxuICBjb2xvcjogJGNvbG9yLWZvbnQtbWFpbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmFjay1tYWluO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1ib3JkZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIH1cclxufVxyXG4iLCIuY2FyZC0tYWRkaXRpb25hbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ucGxhY2VzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnBsYWNlc19faW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvcmRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLW1kYi1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1tZGItY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjtcclxufVxyXG5cclxuLmdhbGxlcnlfX2l0ZW0ge1xyXG4gIG1heC13aWR0aDogMjUlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FsbGVyeV9faW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn0iLCIuaW1nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNpdHktaW1nIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgbWF4LXdpZHRoOiAzMyU7XHJcbiAgICBtaW4td2lkdGg6IDMzJTtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvIDA7XHJcbiAgfVxyXG59XHJcbiIsIi5jaXR5LWRldGFpbHMge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1tYWluO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLXNtKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1tZCkge1xyXG4gICAgICBmb250LXNpemU6IDEuOXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgY29sb3I6ICRjb2xvci1mb250LW1haW47XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IGluc2lkZTtcclxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1tYWluO1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWZvbnQtc2Vjb25kO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbSkge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipCityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tip-city',
                templateUrl: './tip-city.component.html',
                styleUrls: ['./tip-city.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _budget_travel_budget_travel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./budget-travel/budget-travel.component */ "1u3u");
/* harmony import */ var _budget_travel_tip_city_tip_city_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./budget-travel/tip-city/tip-city.component */ "uHMY");









const routes = [
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    //  { path: 'main',component: HeaderComponent},
    { path: '', redirectTo: '/search/myPath/logo', pathMatch: 'full' },
    {
        path: 'search',
        //   canActivate: [SearchResultGuard],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./trip-direction/trip-direction.module */ "dZhj")).then(m => m.TripDirectionModule),
    },
    { path: 'links', component: _links_links_component__WEBPACK_IMPORTED_MODULE_3__["LinksComponent"] },
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
    { path: 'city', component: _budget_travel_tip_city_tip_city_component__WEBPACK_IMPORTED_MODULE_6__["TipCityComponent"] },
    { path: 'travel', component: _budget_travel_budget_travel_component__WEBPACK_IMPORTED_MODULE_5__["BudgetTravelComponent"] },
    { path: '**', component: _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_4__["NoPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true,
                relativeLinkResolution: 'legacy',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        relativeLinkResolution: 'legacy',
                    }),
                ],
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
                    _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__["PathMapComponent"],
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
    ngOnInit() { }
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
                styleUrls: ['./logo.component.scss'],
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
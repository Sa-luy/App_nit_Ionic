webpackJsonp([2],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyService = /** @class */ (function () {
    function MyService(http) {
        this.http = http;
    }
    MyService.prototype.getBanner = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBanner + ("?user_id=" + id))
            .map(function (res) { return res; });
    };
    MyService.prototype.addBanner = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBanner, data)
            .map(function (res) { return res; });
    };
    MyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MyService);
    return MyService;
}());

//# sourceMappingURL=my_service.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var urlApi = 'http://127.0.0.1:8000/api/';
var environment = {
    production: false,
    urlLogin: urlApi + 'login',
    urlRegister: urlApi + 'register',
    urlBanner: urlApi + 'banner'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_my_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__awesome_cordova_plugins_native_storage_ngx__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, iab, formBuilder, http, service, NativeStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.formBuilder = formBuilder;
        this.http = http;
        this.service = service;
        this.NativeStorage = NativeStorage;
        this.myGlobal = __WEBPACK_IMPORTED_MODULE_0__app_app_injecter__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* GlobalVars */]);
        this.user_id = 1;
        this.sliders = [
            {
                link: '',
                url_image: ""
            },
        ];
        //Coverflow
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        getUserInfo();
        this.service.getBanner(this.user_id).subscribe(function (data) {
            _this.sliders = data;
        });
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: this.sliders
            };
    }
    HomePage.prototype.getSlider = function () {
        var _this = this;
        this.service.getBanner(this.user_id).subscribe(function (data) {
            _this.sliders = data;
        });
    };
    HomePage.prototype.addSlide = function (item) {
        this.sliders.push(item);
    };
    //Move to Next slide
    HomePage.prototype.slideNext = function (object, slideView) {
        slideView.slideNext(500);
    };
    //Move to previous slide
    HomePage.prototype.slidePrev = function (object, slideView) {
        slideView.slidePrev(500);
    };
    //Method called when slide is changed by drag or navigation
    HomePage.prototype.SlideDidChange = function (object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    };
    //Call methods to check if slide is first or last to enable disbale navigation
    HomePage.prototype.checkIfNavDisabled = function (object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    };
    HomePage.prototype.checkisBeginning = function (object, slideView) {
        if (slideView.isBeginning()) {
            object.isBeginningSlide = true;
        }
        else {
            object.isBeginningSlide = false;
        }
    };
    HomePage.prototype.checkisEnd = function (object, slideView) {
        // slideView.isEnd().then((istrue) => {
        //   object.isEndSlide = istrue;
        // });
        if (slideView.isEnd()) {
            object.isEndSlide = true;
        }
        else {
            object.isEndSlide = false;
        }
    };
    HomePage.prototype.openSeting = function () {
        this.myGlobal.global_SmartAudio.play('click_sound');
        this.myGlobal.openModalByComponentName('SettingComponent');
    };
    HomePage.prototype.openModalLogin = function () {
        this.myGlobal.openModalByComponentName('LoginComponent');
    };
    HomePage.prototype.openModalRegister = function () {
        this.myGlobal.openModalByComponentName('RegisterUserComponent');
    };
    HomePage.prototype.openUpload = function () {
        this.myGlobal.openModalByComponentName('UploadPage');
    };
    HomePage.prototype.openLink = function (url) {
        var browser = this.iab.create(url, '_self');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getSlider();
        // this.slideWithNav.update();
    };
    HomePage.prototype.ngAfterViewInit = function () {
        // this.slideWithNav.Slides = 2000;
        this.slideWithNav.isBeginning;
        // this.slides.autoplayDisableOnInteraction = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('slideWithNav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "slideWithNav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\pages\home\home.html"*/'<img class="rp-landing_image" src="./././assets/imgs/nit_bg1.png" alt="">\n\n<ion-content padding>\n  <img class="nit_main_img" src="./././assets/imgs/nit_main_img.png" alt="">\n  <button class="btn-login" (click)="openModalLogin()">Login</button>\n  <button class="btn-register" (click)="openModalRegister()">Register</button>\n  <div class="nit_button_section">\n    <a  class="nit_button" (click)="this.openSeting()">test modal</a>\n  <h5 class="name_title">{{ user_name }}a</h5>\n\n    <button ion-button class="btn_add_game" *ngIf="this.myGlobal.isLogin" (click)="this.openUpload()"><ion-icon name="add-circle-outline"></ion-icon></button>\n    <ion-grid>\n      <ion-row>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-prev" (click)="slidePrev(sliderOne,slideWithNav)">\n            <div class="prev-icon-custom custon-nav" [class.disabled]="sliderOne.isBeginningSlide"></div>\n          </span>\n        </ion-col>\n        <ion-col size="10">\n\n          <ion-slides pager="false"   #slideWithNav (ionSlideDidChange)="SlideDidChange(sliderOne,slideWithNav)">\n            <ion-slide *ngFor="let s of sliders">\n              <a  href="#" (click)="this.openLink(s.link)">\n                <img src="http://127.0.0.1:8000/{{ s.url_image }}">\n              </a>\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-next" (click)="slideNext(sliderOne,slideWithNav)">\n            <div class="next-icon-custom custon-nav" [class.disabled]="sliderOne.isEndSlide"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_service_my_service__["a" /* MyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_service_my_service__["a" /* MyService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__awesome_cordova_plugins_native_storage_ngx__["a" /* NativeStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__awesome_cordova_plugins_native_storage_ngx__["a" /* NativeStorage */]) === "function" && _h || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

function getUserInfo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(viewContainerRef, navCtrl, navParams, renderer, view, resolver, injecter, appRef, events, alertCtrl) {
        this.viewContainerRef = viewContainerRef;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.view = view;
        this.resolver = resolver;
        this.injecter = injecter;
        this.appRef = appRef;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.myGlobal = __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* GlobalVars */]);
        this.renderer.setElementClass(view.pageRef().nativeElement, 'my-popup', true);
        this.dataPop = this.navParams.get('data');
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ModalPage');
        this.events.unsubscribe("NitCloseModal");
        this.events.subscribe('NitCloseModal', function () {
            _this.closeModal();
        });
    };
    ModalPage.prototype.closeModal = function () {
        var _this = this;
        this.myGlobal.global_SmartAudio.play('click_sound');
        setTimeout(function () {
            _this.navCtrl.pop();
        }, 300);
    };
    ModalPage.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".rp-pop_close").css("pointer-events", "none");
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".rp-pop_close").css("pointer-events", "visible");
        }, 500);
        if (this.dataPop["isSecondPop"] == true) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".second_popup page-modal .rp-modal_wrapper").prepend(this.renderComponent(this.dataPop));
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__("page-modal .rp-modal_wrapper").prepend(this.renderComponent(this.dataPop));
        }
    };
    ModalPage.prototype.renderComponent = function (obj) {
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(this.resolver.resolveComponentFactory((obj.factory)));
        componentRef.instance["homeRef"] = obj.home;
        componentRef.instance["modalRef"] = this;
        componentRef.instance["arrParam"] = obj.params;
        componentRef.instance["rpFactories"] = obj.factory;
        return componentRef.hostView.rootNodes[0];
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="rp-modal_wrapper">\n  <div class="rp-close-pop" >\n      <button ion-button (click)="closeModal()" id="rp-pop_close" class="rp-pop_close"> </button>\n  </div>\n  \n\n</div>'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/modal.module": [
		699,
		1
	],
	"../pages/upload/upload.module": [
		700,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 315;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SmartAudio = /** @class */ (function () {
    function SmartAudio(nativeAudio, platform) {
        this.nativeAudio = nativeAudio;
        this.audioType = 'html5';
        this.sounds = [];
        if (platform.is('cordova')) {
            this.audioType = 'native';
        }
    }
    SmartAudio.prototype.preload = function (key, asset) {
        if (this.audioType === 'html5') {
            var audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        }
        else {
            this.nativeAudio.preloadComplex(key, asset, 1, 1, 0);
            var audio = {
                key: key,
                asset: key,
                type: 'native'
            };
            this.sounds.push(audio);
        }
    };
    SmartAudio.prototype.play = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            if (typeof this.audioAsset !== "undefined") {
                this.audioAsset.pause();
                this.audioAsset.currentTime = 0;
            }
            var audioAsset = new Audio(audio.asset);
            audioAsset.play();
        }
        else {
            this.nativeAudio.play(audio.asset).then(function (res) {
                //console.log(res);
            }, function (err) {
                //console.log(err);
            });
        }
    };
    SmartAudio.prototype.loop = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            if (typeof this.audioAsset !== "undefined") {
                this.audioAsset.pause();
                this.audioAsset.currentTime = 0;
            }
            var audioAsset = new Audio(audio.asset);
            audioAsset.loop = true;
            audioAsset.play();
        }
        else {
            this.nativeAudio.loop(audio.asset).then(function (res) {
                //console.log(res);
            }, function (err) {
                //console.log(err);
            });
        }
    };
    // play(key) {
    //     this.audio = this.sounds.find((sound) => {
    //         return sound.key === key;
    //     });
    //     if (this.audio.type === 'html5') {
    //         if (typeof this.audioAsset !== "undefined") {
    //             this.audioAsset.pause();
    //             this.audioAsset.currentTime = 0;
    //         }
    //         this.audioAsset = new Audio(this.audio.asset);
    //         this.audioAsset.play();
    //     } else {
    //         this.nativeAudio.stop(this.audio.asset).then((res) => {
    //             this.nativeAudio.play(this.audio.asset).then((res1) => {
    //                 //console.log(res1);
    //             }, (err1) => {
    //                 //console.log(err1);
    //             });
    //             //console.log(res);
    //         },(err)=>{
    //             //console.log(err);
    //         });
    //     }
    // }
    SmartAudio.prototype.stop = function (key) {
        if (typeof this.audio !== "undefined") {
            //console.log("ok");
            if (this.audio.type === 'html5') {
                //console.log("html5");
                //let audioAsset = new Audio(this.audio.asset);
                if (typeof this.audioAsset !== "undefined") {
                    this.audioAsset.pause();
                    this.audioAsset.currentTime = 0;
                }
            }
            else {
                //console.log("native");
                this.nativeAudio.stop(this.audio.asset).then(function (res) {
                    //console.log(res);
                }, function (err) {
                    //console.log(err);
                });
            }
        }
    };
    SmartAudio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], SmartAudio);
    return SmartAudio;
}());

//# sourceMappingURL=smart-audio.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_my_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FormBuilder, FormGroup, Validators } from '@angular/forms';




var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, viewCtrl, navParams, service, formBuilder, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.service = service;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.selectedFile = null;
        // console.log(this.homePage.user_id); undefined
        // this.id = this.homePage.user_id;
        this.id = 1;
        this.sliderOne = { isBeginningSlide: true, isEndSlide: false, };
    }
    UploadPage.prototype.ngOnInit = function () {
        this.uploadForm = this.formBuilder.group({
            url_image: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            link: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            user_id: ['']
        });
    };
    UploadPage.prototype.ionViewDidLoad = function () {
        this.homePage = this.navCtrl.getPrevious().instance;
        this.userBanner = this.homePage.sliderOne.slidesItems;
    };
    UploadPage.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    UploadPage.prototype.handleSubmit = function () {
        var _this = this;
        // if (this.selectedFile.type !== 'image/jpeg' || this.selectedFile.type !== 'image/png'){
        var formData = new FormData();
        formData.append('link', this.uploadForm.value.link);
        formData.append('user_id', this.uploadForm.value.user_id);
        formData.append('url_image', this.selectedFile, this.selectedFile.name);
        this.service.addBanner(formData).subscribe();
        var alert = this.alertCtrl.create({
            title: 'Thành công',
            message: 'Ảnh đã được tải lên thành công!',
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        // Đóng trang hiện tại trở lại trang chủ và tải lại trang chủ
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                }]
        });
        setTimeout(function () {
            alert.present();
        }, 500);
        this.viewCtrl.dismiss({ uploaded: true });
        // } else if (this.selectedFile.size > 5000000) {
        // Handle file size too large
        // } else {
        // Valid file type and size, continue processing
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('slideWithNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Slides */])
    ], UploadPage.prototype, "slideWithNav", void 0);
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\pages\upload\upload.html"*/'<!--\n  Generated template for the UploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>upload</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form\n   method="post"\n   [formGroup]="uploadForm"\n  enctype="multipart/form-data"\n  >\n    <ion-item>\n      <ion-label>Link</ion-label>\n      <ion-input type="text" name="link"    placeholder="link game" formControlName="link"></ion-input>\n\n    </ion-item>\n    <ion-text color="danger" *ngIf="uploadForm.get(\'link\').invalid && uploadForm.get(\'link\').touched">\n      <ion-icon name="alert-circle"></ion-icon>\n      <span *ngIf="uploadForm.get(\'link\').errors.required" class="text-danger pdl-9">Email is required.</span>\n    </ion-text>\n    <ion-item>\n      <ion-label>Image</ion-label>\n      <ion-input type="file"  name="url_image" (change)="onFileSelected($event)" formControlName="url_image" ></ion-input>\n      <ion-input type="hidden" value="1" formControlName="user_id" name="user_id"></ion-input>\n    </ion-item>\n    <div class="btn-submit">\n\n      <button ion-button type="submit" block  (click)="handleSubmit()" [disabled]="uploadForm.invalid" >Add</button>\n    </div>\n  </form>\n  <!-- slide -->\n  <div class="main_content">\n    <ion-grid>\n      <ion-row>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-prev" (click)="this.homePage.slidePrev(sliderOne,slideWithNav)">\n            <div class="prev-icon-custom custon-nav" [class.disabled]="this.sliderOne.isBeginningSlide"></div>\n          </span>\n        </ion-col>\n        <ion-col size="10">\n\n          <ion-slides pager="false"   #slideWithNav (ionSlideDidChange)="this.homePage.SlideDidChange(sliderOne,slideWithNav)">\n            <ion-slide *ngFor="let s of this.userBanner">\n              <a  href="#" (click)="openLink(s.path)">\n                <img src="{{ s.url_image }}">\n              </a>\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-next" (click)="this.homePage.slideNext(sliderOne,slideWithNav)">\n            <div class="next-icon-custom custon-nav" [class.disabled]="sliderOne.isEndSlide"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- end slide -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\pages\upload\upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_my_service__["a" /* MyService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__awesome_cordova_plugins_native_storage_ngx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_smart_audio_smart_audio__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_setting_setting__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_user_register_user__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modal_modal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__global__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_service_my_service__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















// @NgModule({
//   declarations: [
//     MyApp,
//     UploadPage,
//     HomePage,
//     SettingComponent,
//     LoginComponent,
//     RegisterUserComponent,
//     ModalPage
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpClientModule,
//     IonicModule ,
//     ReactiveFormsModule,
//     IonicModule.forRoot(MyApp, {
//       mode: 'ios',
//       scrollPadding: false,
//       scrollAssist: false,
//       autoFocusAssist: false
//     })
//   ],
//   bootstrap: [IonicApp],
//   entryComponents: [
//     HomePage,
//     MyApp,
//     SettingComponent,
//     LoginComponent,
//     RegisterUserComponent,
//     UploadPage,
//     ModalPage,
//   ],
//   providers: [
//     StatusBar,
//     SplashScreen,
//     Camera,
//     GlobalVars,
//     InAppBrowser,
//     NativeAudio,
//     HomePage,
//     SmartAudio,
//     NativeStorage,
//     {provide: ErrorHandler, useClass: IonicErrorHandler}
//   ]
// })
var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        Object(__WEBPACK_IMPORTED_MODULE_14__app_injecter__["b" /* setAppInjector */])(injector);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__components_setting_setting__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_register_user_register_user__["a" /* RegisterUserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_modal__["a" /* ModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    scrollPadding: false,
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicModule */] // Add this line to import the IonicModule
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__components_setting_setting__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_register_user_register_user__["a" /* RegisterUserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_modal__["a" /* ModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_20__global__["a" /* GlobalVars */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__providers_smart_audio_smart_audio__["a" /* SmartAudio */],
                __WEBPACK_IMPORTED_MODULE_4__awesome_cordova_plugins_native_storage_ngx__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_21__providers_service_my_service__["a" /* MyService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInjector; });
/* harmony export (immutable) */ __webpack_exports__["b"] = setAppInjector;
/**
 * Allows for retrieving singletons using `AppInjector.get(MyService)` (whereas
 * `ReflectiveInjector.resolveAndCreate(MyService)` would create a new instance
 * of the service).
 */
var AppInjector;
/**
 * Helper to set the exported {@link AppInjector}, needed as ES6 modules export
 * immutable bindings (see http://2ality.com/2015/07/es6-module-exports.html) for
 * which trying to make changes after using `import {AppInjector}` would throw:
 * "TS2539: Cannot assign to 'AppInjector' because it is not a variable".
 */
function setAppInjector(injector) {
    if (AppInjector) {
        // Should not happen
        console.error('Programming error: AppInjector was already set');
    }
    else {
        AppInjector = injector;
    }
}
//# sourceMappingURL=app-injecter.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_storage_ngx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_modal_modal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalVars = /** @class */ (function () {
    function GlobalVars(loadingCtrl, modal, events, nativeAudio, nativeStorage) {
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.events = events;
        this.nativeAudio = nativeAudio;
        this.nativeStorage = nativeStorage;
        this.volume_music = 0.5;
        this.volume_click = 0.5;
        this.isLogin = true;
    }
    GlobalVars.prototype.openModalByComponentName = function (comName, params, isSecondPop) {
        if (params === void 0) { params = [""]; }
        if (isSecondPop === void 0) { isSecondPop = false; }
        var myModalOption = {
            enableBackdropDismiss: false,
            showBackdrop: false,
        };
        if (comName === 'LoginComponent' || comName == 'RegisterUserComponent')
            myModalOption.cssClass = 'modal-login';
        if (comName === 'SettingComponent')
            myModalOption.cssClass = 'modal-setting';
        var factoryClass = this.global_factories.find(function (x) { return x.name === comName; });
        var myModalData = {
            home: this,
            factory: factoryClass,
            componentName: comName,
            params: params,
            isSecondPop: isSecondPop
        };
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__pages_modal_modal__["a" /* ModalPage */], { data: myModalData }, myModalOption);
        myModal.present();
    };
    GlobalVars.prototype.closeModal = function () {
        this.events.publish('NitCloseModal');
    };
    GlobalVars.prototype.play_bg_sound = function (command) {
        switch (command) {
            case "start":
                this.global_SmartAudio.play('bg_sound');
                break;
            case "loop":
                this.global_SmartAudio.loop('bg_sound');
                break;
            case "stop":
                this.global_SmartAudio.stop('bg_sound');
                break;
            default:
                break;
        }
    };
    GlobalVars.prototype.get_volume_music = function () {
        var _this = this;
        return this.nativeStorage.getItem('nit_volume_music')
            .then(function (data) {
            _this.volume_music = data;
        }, function (error) {
            console.error(error);
        });
    };
    GlobalVars.prototype.set_volume_music = function () {
        this.nativeStorage.setItem('nit_volume_music', this.volume_music)
            .then(function () { return console.log('set nit_volume_music'); }, function (error) { return console.error('Error storing nit_volume_music', error); });
    };
    GlobalVars.prototype.get_volume_click = function () {
        var _this = this;
        return this.nativeStorage.getItem('nit_volume_click')
            .then(function (data) {
            _this.volume_click = data;
        }, function (error) {
            console.error(error);
        });
    };
    GlobalVars.prototype.set_volume_click = function () {
        this.nativeStorage.setItem('nit_volume_click', this.volume_click)
            .then(function () { return console.log('set nit_volume_click'); }, function (error) { return console.error('Error storing nit_volume_click', error); });
    };
    GlobalVars.prototype.setLogin = function (data) {
        return this.isLogin = data;
    };
    GlobalVars = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_storage_ngx__["a" /* NativeStorage */]])
    ], GlobalVars);
    return GlobalVars;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_auth_service__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(viewCtrl, navCtrl, http, authService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.authService = authService;
        this.isLogin = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.myGlobal = __WEBPACK_IMPORTED_MODULE_4__app_app_injecter__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* GlobalVars */]);
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6)])
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.loginForm.valid) {
            var name_1 = this.loginForm.value.name;
            var password = this.loginForm.value.password;
            this.authService.login(name_1, password).subscribe(function (data) { return console.log(data); });
            // service call login and change is login
            // this.authService.login(email, password);
            var checkLogin = true;
            checkLogin ? this.myGlobal.setLogin(true) : this.myGlobal.setLogin(false);
        }
    };
    LoginComponent.prototype.closeModalLogin = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.pop();
        }, 300);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "isLogin", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\components\login\login.html"*/'<!-- Generated template for the LoginComponent component -->\n<img class="rp-bg_image" src="./././assets/imgs/setting-box.png" alt="">\n<div class="nit_setting_title"><span>LOGIN</span></div>\n<div class="nit_setting">\n  <ion-grid>\n    <form [formGroup]="loginForm" >\n    <ion-row>\n        <ion-col class="rp-as-range">\n            <div class="rp-as-text">\n              <ion-item fill="solid">\n                <ion-label position="floating">User Name : </ion-label>\n                <!-- <ion-input placeholder="Enter username" formControlName="name" ></ion-input> -->\n                <ion-input type="text" formControlName="name" placeholder="Enter name"></ion-input>\n              </ion-item>\n              <ion-text color="danger" *ngIf="loginForm.get(\'name\').invalid && loginForm.get(\'name\').touched">\n                <ion-icon name="alert-circle"></ion-icon>\n                <span *ngIf="loginForm.get(\'name\').errors.required" class="text-danger pdl-9">Email is required.</span>\n              </ion-text>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="rp-as-range">\n            <div class="rp-as-text">\n              <ion-item fill="solid">\n                <ion-label  position="floating">Password : </ion-label>\n                <!-- <ion-input type="password" formControlName="password"></ion-input> -->\n                <ion-input type="password" formControlName="password" placeholder="Enter password"></ion-input>\n              </ion-item>\n              <ion-text color="danger" *ngIf="loginForm.get(\'password\').invalid && loginForm.get(\'password\').touched">\n                <ion-icon name="alert-circle"></ion-icon>\n                <span *ngIf="loginForm.get(\'password\').errors.required" class="text-danger pdl-9">Password is required.</span>\n                <span *ngIf="loginForm.get(\'password\').errors.minlength" class="text-danger pdl-9">Password must be at least 6 characters long.</span>\n              </ion-text>\n            </div>\n        </ion-col>\n    </ion-row>\n\n      </form>\n      <button type="submit" [disabled]="loginForm.invalid" (click)="onSubmit()" class="login"></button>\n      <button ion-button (click)="closeModalLogin()" class="cancle"></button>\n      </ion-grid>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service_auth_service__["a" /* authService */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';


var authService = /** @class */ (function () {
    function authService(http) {
        this.http = http;
        this.userSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser') || '{}'));
    }
    authService.prototype.login = function (name, password) {
        // code to log in the user
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlLogin, { name: name, password: password });
    };
    // .subscribe(
    //   response => {
    //     console.log(response); // log response từ server
    //     // xử lý response ở đây
    //   },
    //   error => {
    //     console.error(error); // log lỗi nếu có
    //     // xử lý lỗi ở đây
    //   }
    // );
    // return this.http.post(environment.urlLogin, { name, password }).pipe(
    //     map((token) => {
    //       let user: User = {
    //         name: name,
    //         token: token,
    //       };
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //       this.userSubject.next(user);
    //       return user;
    //     })
    //   );
    authService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        var user = {
            name: null,
            token: null,
        };
        this.userSubject.next(user);
    };
    authService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], authService);
    return authService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SettingComponent = /** @class */ (function () {
    function SettingComponent(nativeAudio) {
        this.nativeAudio = nativeAudio;
        this.myGlobal = __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* GlobalVars */]);
        this.volume_music = 50;
        this.volume_sound = 50;
        console.log('Hello SettingComponent Component');
        this.text = 'Hello World';
        if (this.myGlobal.volume_music != 0.5)
            this.volume_music = this.myGlobal.volume_music * 100;
        if (this.myGlobal.volume_click != 0.5)
            this.volume_sound = this.myGlobal.volume_click * 100;
    }
    SettingComponent.prototype.updateMusicVolume = function () {
        this.myGlobal.volume_music = this.volume_music / 100;
        this.nativeAudio.setVolumeForComplexAsset("bg_sound", this.myGlobal.volume_music);
        this.myGlobal.global_SmartAudio.play('click_sound');
        this.myGlobal.set_volume_music();
    };
    SettingComponent.prototype.updateSoundVolume = function () {
        this.myGlobal.volume_click = this.volume_sound / 100;
        this.nativeAudio.setVolumeForComplexAsset("click_sound", this.myGlobal.volume_click);
        this.myGlobal.global_SmartAudio.play('click_sound');
        this.myGlobal.set_volume_click();
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'setting',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\components\setting\setting.html"*/'<!-- Generated template for the SettingComponent component -->\n\n<img class="rp-bg_image" src="./././assets/imgs/setting-box.png" alt="">\n\n<div class="nit_setting_title"><span>SETTINGS</span></div>\n\n<div class="nit_setting">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col class="rp-as-range">\n\n          <div class="rp-as-text">\n\n            <img class="rp-bg_image" src="./././assets/imgs/icon-bgm.png" alt="">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col >\n\n        <ion-item>\n\n            <ion-range min="0" max="100" [(ngModel)]="volume_music" (ionBlur)="updateMusicVolume()" color="secondary">\n\n            </ion-range>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col class="rp-as-range">\n\n            <div class="rp-as-text"><img class="rp-bg_image" src="./././assets/imgs/icon-sfx.png" alt=""></div>\n\n        </ion-col>\n\n        <ion-col >\n\n          <ion-item>\n\n              <ion-range min="0" max="100" [(ngModel)]="volume_sound" (ionBlur)="updateSoundVolume()" color="secondary">\n\n              </ion-range>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n</div>\n\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\components\setting\setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */]])
    ], SettingComponent);
    return SettingComponent;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__awesome_cordova_plugins_native_storage_ngx__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(viewCtrl, navCtrl, NativeStorage, http) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.NativeStorage = NativeStorage;
        this.http = http;
        this.checkbox = false;
        this.RegisterForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(6)]),
            checkbox: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])
        });
    }
    RegisterUserComponent.prototype.handleRegisterUser = function () {
        var _this = this;
        var data = { name: this.RegisterForm.value.name, password: this.RegisterForm.value.password };
        console.log(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlRegister);
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlRegister, data)
            .subscribe(function (response) {
            console.log('API response:', response.status);
            if (response.status === 200) {
                //luu trư  phien token vào thiet bị
                _this.NativeStorage.setItem('user_info', { api_token: response.token,
                    user_id: response.user_id,
                    name: response.name,
                })
                    .then(function () { return console.log('Stored item!'); })
                    .catch(function (error) { return console.error('Error storing item', error); });
                //call api banners
                // set this.slides
            }
            else {
                console.log('Error:', response.status);
            }
        });
        setTimeout(function () {
            _this.navCtrl.pop();
        }, 300);
    };
    RegisterUserComponent.prototype.handleChange = function () {
        console.log(this.checkbox);
    };
    RegisterUserComponent.prototype.closeModalRegister = function () {
        this.navCtrl.pop();
    };
    RegisterUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'register-user',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\components\register-user\register-user.html"*/'<!-- Generated template for the RegisterUserComponent component -->\n<div>\n  <img class="rp-bg_image" src="./././assets/imgs/setting-box.png" alt="">\n<div class="nit_setting_title"><span>REGISTER</span></div>\n<div class="nit_setting">\n  <ion-grid>\n    <form [formGroup]="RegisterForm">\n    <ion-row>\n        <ion-col class="rp-as-range">\n            <div class="rp-as-text">\n              <ion-item fill="solid">\n                <ion-label position="floating">User Name : </ion-label>\n                <ion-input placeholder="Enter username"  name="name" formControlName="name"></ion-input>\n              </ion-item>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="rp-as-range">\n            <div class="rp-as-text">\n              <ion-item fill="solid">\n                <ion-label position="floating">Password : </ion-label>\n                <ion-input  type= \'password\' placeholder="Enter password" formControlName="password" name="password"></ion-input>\n              </ion-item>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row class="checkbox_icon">\n      <ion-item>\n        <ion-checkbox slot="start" formControlName="checkbox" [(ngModel)]="checkbox" name="checkbox" (ionChange)="handleChange()"></ion-checkbox>\n        <ion-label>I agree to the terms and conditions</ion-label>\n      </ion-item>\n    </ion-row>\n\n      </form>\n      <button ion-button *ngIf="this.checkbox"  (click)="handleRegisterUser()" class="login"></button>\n      <button ion-button *ngIf="!this.checkbox"   class="nologin"></button>\n      <button ion-button (click)="closeModalRegister()" class="cancle"></button>\n      </ion-grid>\n\n</div>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\components\register-user\register-user.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__awesome_cordova_plugins_native_storage_ngx__["a" /* NativeStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__awesome_cordova_plugins_native_storage_ngx__["a" /* NativeStorage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
    ], RegisterUserComponent);
    return RegisterUserComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register-user.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_smart_audio_smart_audio__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, resolver, smartAudio, nativeAudio) {
        var _this = this;
        this.resolver = resolver;
        this.nativeAudio = nativeAudio;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        this.myGlobal = __WEBPACK_IMPORTED_MODULE_5__app_injecter__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_6__global__["a" /* GlobalVars */]);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.myGlobal.global_factories = Array.from(_this.resolver['_factories'].keys());
            _this.myGlobal.global_SmartAudio = smartAudio;
            // this.myGlobal.nativeAudio.preloadSimple('bg_sound', 'assets/sounds/bg_audio.mp3').then(this.myGlobal.onSuccessSoundbg, this.myGlobal.onErrorSound);
            // this.myGlobal.nativeAudio.preloadSimple('click_sound', 'assets/sounds/click.wav').then(this.myGlobal.onSuccessSound,this.myGlobal.onErrorSound);
            _this.myGlobal.global_SmartAudio.preload('bg_sound', 'assets/sounds/bg_audio.mp3');
            _this.myGlobal.global_SmartAudio.preload('click_sound', 'assets/sounds/click.wav');
            setTimeout(function () {
                _this.myGlobal.play_bg_sound('loop');
                _this.myGlobal.get_volume_music().then(function () {
                    _this.nativeAudio.setVolumeForComplexAsset("bg_sound", _this.myGlobal.volume_music);
                });
                _this.myGlobal.get_volume_click().then(function () {
                    _this.nativeAudio.setVolumeForComplexAsset("click_sound", _this.myGlobal.volume_click);
                });
            }, 2000);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_8__providers_smart_audio_smart_audio__["a" /* SmartAudio */], __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map
webpackJsonp([2],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(681);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="rp-modal_wrapper">\n  <div class="rp-close-pop" >\n      <button ion-button (click)="closeModal()" id="rp-pop_close" class="rp-pop_close"> </button>\n  </div>\n  \n\n</div>'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_swiper__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedFile = null;
        this.userBanner = [
            { link: "https://volamm.zing.vn/index.html",
                banner: "./././assets/games/1.jpeg"
            },
            { link: "#1",
                banner: "./././assets/games/2.jpeg"
            },
        ];
        this.mySwiper = new __WEBPACK_IMPORTED_MODULE_2_swiper__["a" /* Swiper */]('.swiper-container', {});
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: this.userBanner
            };
    }
    UploadPage.prototype.ionViewDidLoad = function () {
        this.sliderOne = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: this.userBanner
        };
        console.log(this.userBanner);
        console.log('open UploadPage');
    };
    UploadPage.prototype.handleSubmit = function () {
        var _this = this;
        if (!this.selectedFile) {
            console.log('No file selected');
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onload = function () {
            _this.banner = reader.result.toString();
            localStorage.setItem('image', _this.banner);
            var data = {
                link: _this.link,
                banner: _this.banner
            };
            _this.addBanner(data);
        };
    };
    UploadPage.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    UploadPage.prototype.addBanner = function (data) {
        this.userBanner = __spread(this.userBanner, [data]);
        console.log(this.userBanner);
        this.updateSlides();
    };
    //Move to Next slide
    UploadPage.prototype.slideNext = function (object, slideView) {
        slideView.slideNext(500);
    };
    //Move to previous slide
    UploadPage.prototype.slidePrev = function (object, slideView) {
        slideView.slidePrev(500);
    };
    //Method called when slide is changed by drag or navigation
    UploadPage.prototype.SlideDidChange = function (object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    };
    //Call methods to check if slide is first or last to enable disbale navigation
    UploadPage.prototype.checkIfNavDisabled = function (object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    };
    UploadPage.prototype.checkisBeginning = function (object, slideView) {
        if (slideView.isBeginning()) {
            object.isBeginningSlide = true;
        }
        else {
            object.isBeginningSlide = false;
        }
    };
    UploadPage.prototype.checkisEnd = function (object, slideView) {
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
    UploadPage.prototype.updateSlides = function () {
        this.sliderOne.slidesItems = this.userBanner;
        this.slideWithNav.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slideWithNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], UploadPage.prototype, "slideWithNav", void 0);
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\pages\upload\upload.html"*/'<!--\n  Generated template for the UploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>upload</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="handleSubmit()"\n   method="post"\n  enctype="multipart/form-data"\n  >\n    <ion-item>\n      <ion-label>Link</ion-label>\n      <ion-input type="text"  name="link"  [(ngModel)]="link" placeholder="link game"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Image</ion-label>\n      <ion-input type="file"  name="image" (change)="onFileSelected($event)" ></ion-input>\n      <!-- <ion-textarea [(ngModel)]="" name="description"></ion-textarea> -->\n    </ion-item>\n    <div class="btn-submit">\n\n      <button ion-button type="submit" block  >Add</button>\n    </div>\n  </form>\n  <!-- slide -->\n  <div class="main_content">\n    <ion-grid>\n      <ion-row>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-prev" (click)="slidePrev(sliderOne,slideWithNav)">\n            <div class="prev-icon-custom custon-nav" [class.disabled]="sliderOne.isBeginningSlide"></div>\n          </span>\n        </ion-col>\n        <ion-col size="10">\n\n          <ion-slides pager="false"   #slideWithNav (ionSlideDidChange)="SlideDidChange(sliderOne,slideWithNav)">\n            <ion-slide *ngFor="let s of sliderOne.slidesItems">\n              <a target="_blank" href="{{ s.link }}"><img src="{{ s.banner }}"></a>\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-next" (click)="slideNext(sliderOne,slideWithNav)">\n            <div class="next-icon-custom custon-nav" [class.disabled]="sliderOne.isEndSlide"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- end slide -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\pages\upload\upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/modal.module": [
		795,
		1
	],
	"../pages/upload/upload.module": [
		796,
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
webpackAsyncContext.id = 314;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_injecter__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_upload__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.myGlobal = __WEBPACK_IMPORTED_MODULE_0__app_app_injecter__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* GlobalVars */]);
        //Coverflow
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        var uploadPage = new __WEBPACK_IMPORTED_MODULE_5__upload_upload__["a" /* UploadPage */](this.navCtrl, this.navParams);
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    {
                        id: 1,
                        path: 'https://volamm.zing.vn/index.html'
                    },
                    {
                        id: 2,
                        path: 'https://ttlm.vnggames.com/index.html'
                    },
                    {
                        id: 3,
                        path: 'https://ngukiem3d.com/'
                    },
                    {
                        id: 4,
                        path: 'https://vltkm.vnggames.com/'
                    },
                    {
                        id: 5,
                        path: 'https://vltkm.zing.vn/su-kien/phien-ban-moi-son-ha-xa-tac/cap-nhat-khac.html'
                    }
                ]
            };
    }
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
        // console.log('Open modal login');
        this.myGlobal.openModalByComponentName('LoginComponent');
    };
    HomePage.prototype.openUpload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__upload_upload__["a" /* UploadPage */]);
    };
    //in_app_browser
    HomePage.prototype.openLink = function (url) {
        this.iab.create(url, '_blank');
    };
    //endin_app_browser
    HomePage.prototype.ngAfterViewInit = function () {
        // this.slideWithNav.Slides = 2000;
        this.slideWithNav.isBeginning;
        // this.slides.autoplayDisableOnInteraction = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('slideWithNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Slides */])
    ], HomePage.prototype, "slideWithNav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\pages\home\home.html"*/'<img class="rp-landing_image" src="./././assets/imgs/nit_bg1.png" alt="">\n\n<ion-content padding>\n  <img class="nit_main_img" src="./././assets/imgs/nit_main_img.png" alt="">\n  <button class="btn-login" (click)="openModalLogin()">Login</button>\n\n  <div class="nit_button_section">\n    <a  class="nit_button" (click)="this.openSeting()">test modal</a>\n    <a  class="nit_button" (click)="this.openLink(\'https://cuuam.gosu.vn/home/intro/phong-khoi-kiem-ca\')">test2</a>\n    <button ion-button class="btn_add_game" *ngIf="this.myGlobal.isLogin" (click)="this.openUpload()"><ion-icon name="add-circle-outline"></ion-icon></button>\n    <ion-grid>\n      <ion-row>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-prev" (click)="slidePrev(sliderOne,slideWithNav)">\n            <div class="prev-icon-custom custon-nav" [class.disabled]="sliderOne.isBeginningSlide"></div>\n          </span>\n        </ion-col>\n        <ion-col size="10">\n\n          <ion-slides pager="false"   #slideWithNav (ionSlideDidChange)="SlideDidChange(sliderOne,slideWithNav)">\n            <ion-slide *ngFor="let s of sliderOne.slidesItems">\n              <a target="_blank" href="{{ s.path }}"><img src="./././assets/games/{{s.id}}.jpeg"></a>\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-next" (click)="slideNext(sliderOne,slideWithNav)">\n            <div class="next-icon-custom custon-nav" [class.disabled]="sliderOne.isEndSlide"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(69);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], SmartAudio);
    return SmartAudio;
}());

//# sourceMappingURL=smart-audio.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_setting_setting__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__global__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_injecter__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_smart_audio_smart_audio__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__awesome_cordova_plugins_native_storage_ngx__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_upload_upload__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        Object(__WEBPACK_IMPORTED_MODULE_11__app_injecter__["b" /* setAppInjector */])(injector);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_0__components_setting_setting__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__["a" /* ModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    scrollPadding: false,
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_0__components_setting_setting__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__["a" /* ModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__global__["a" /* GlobalVars */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_12__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_13__providers_smart_audio_smart_audio__["a" /* SmartAudio */],
                __WEBPACK_IMPORTED_MODULE_14__awesome_cordova_plugins_native_storage_ngx__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injector */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(69);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'setting',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\components\setting\setting.html"*/'<!-- Generated template for the SettingComponent component -->\n\n<img class="rp-bg_image" src="./././assets/imgs/setting-box.png" alt="">\n\n<div class="nit_setting_title"><span>SETTINGS</span></div>\n\n<div class="nit_setting">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col class="rp-as-range">\n\n          <div class="rp-as-text">\n\n            <img class="rp-bg_image" src="./././assets/imgs/icon-bgm.png" alt="">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col >\n\n        <ion-item>\n\n            <ion-range min="0" max="100" [(ngModel)]="volume_music" (ionBlur)="updateMusicVolume()" color="secondary">\n\n            </ion-range>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col class="rp-as-range">\n\n            <div class="rp-as-text"><img class="rp-bg_image" src="./././assets/imgs/icon-sfx.png" alt=""></div>\n\n        </ion-col>\n\n        <ion-col >\n\n          <ion-item>\n\n              <ion-range min="0" max="100" [(ngModel)]="volume_sound" (ionBlur)="updateSoundVolume()" color="secondary">\n\n              </ion-range>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n</div>\n\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\components\setting\setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */]])
    ], SettingComponent);
    return SettingComponent;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_storage_ngx__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_modal_modal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(69);
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
        //console.log("construct GLobalVars")
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.events = events;
        this.nativeAudio = nativeAudio;
        this.nativeStorage = nativeStorage;
        this.volume_music = 0.5;
        this.volume_click = 0.5;
        this.isLogin = false;
    }
    GlobalVars.prototype.openModalByComponentName = function (comName, params, isSecondPop) {
        if (params === void 0) { params = [""]; }
        if (isSecondPop === void 0) { isSecondPop = false; }
        var myModalOption = {
            enableBackdropDismiss: false,
            showBackdrop: false
        };
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
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

/***/ 49:
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

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(46);
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
    function LoginComponent(viewCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.isLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.myGlobal = __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* GlobalVars */]);
        console.log('open Login Component Component');
    }
    LoginComponent.prototype.handleLogin = function () {
        var data_user = {
            name: this.name,
            password: this.password
        };
        this.login(data_user);
        this.viewCtrl.dismiss();
    };
    LoginComponent.prototype.login = function (data) {
        //call api handle login
        var checkLogin = true;
        checkLogin ? this.myGlobal.setLogin(true) : this.myGlobal.setLogin(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "isLogin", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\components\login\login.html"*/'<!-- Generated template for the LoginComponent component -->\n\n<img class="rp-bg_image" src="./././assets/imgs/setting-box.png" alt="">\n\n<div class="nit_setting_title"><span>LOGIN</span></div>\n\n<div class="nit_setting">\n\n  <ion-grid>\n\n    <form>\n\n    <ion-row>\n\n        <ion-col class="rp-as-range">\n\n            <div class="rp-as-text">\n\n              <ion-item fill="solid">\n\n                <ion-label position="floating">User Name : </ion-label>\n\n                <ion-input placeholder="Enter username" [(ngModel)]="name" name="name"></ion-input>\n\n              </ion-item>\n\n            </div>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col class="rp-as-range">\n\n            <div class="rp-as-text">\n\n              <ion-item fill="solid">\n\n                <ion-label position="floating">Password : </ion-label>\n\n                <ion-input placeholder="Enter password" [(ngModel)]="password" name="password"></ion-input>\n\n              </ion-item>\n\n            </div>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n      </form>\n\n      <button ion-button (click)="handleLogin()">OK</button>\n\n      </ion-grid>\n\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_injecter__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_smart_audio_smart_audio__ = __webpack_require__(362);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_8__providers_smart_audio_smart_audio__["a" /* SmartAudio */], __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_audio_ngx__["a" /* NativeAudio */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map
webpackJsonp([2],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(670);
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
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


// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, navParams, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.selectedFile = null;
        this.sliderOne = { isBeginningSlide: true, isEndSlide: false, };
    }
    UploadPage.prototype.ngOnInit = function () {
        this.uploadForm = this.formBuilder.group({
            url_image: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            link: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
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
        var url = 'https://nitgame/banner';
        var formData = new FormData();
        formData.append('link', this.link);
        formData.append('url_image', this.selectedFile);
        console.log(formData);
        this.http.post(url, formData).subscribe(function (response) {
            console.log('Banner created successfully');
        }, function (error) {
            console.error('Error creating banner', error);
        });
    };
    UploadPage.prototype.addBanner = function (data) {
        this.userBanner = __spread(this.userBanner, [data]);
        var addSlide = this.navParams.get('addSlide');
        addSlide(data);
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('slideWithNav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Slides */]) === "function" && _a || Object)
    ], UploadPage.prototype, "slideWithNav", void 0);
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\pages\upload\upload.html"*/'<!--\n  Generated template for the UploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>upload</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="handleSubmit()"\n   method="post"\n   [formGroup]="uploadForm"\n  enctype="multipart/form-data"\n  >\n    <ion-item>\n      <ion-label>Link</ion-label>\n      <ion-input type="text" name="link"   [(ngModel)]="link" placeholder="link game" formControlName="link"></ion-input>\n      <!-- <div *ngIf="loginForm.controls.link.touched && loginForm.controls.link.errors">\n        <p *ngIf="loginForm.controls.link.errors.required">Name is required.</p>\n      </div>-->\n    </ion-item>\n    <ion-item>\n      <ion-label>Image</ion-label>\n      <ion-input type="file"  name="url_image" (change)="onFileSelected($event)" ></ion-input>\n      <!-- <ion-textarea [(ngModel)]="" name="description"></ion-textarea> -->\n    </ion-item>\n    <div class="btn-submit">\n\n      <button ion-button type="submit" block  >Add</button>\n    </div>\n  </form>\n  <!-- slide -->\n  <div class="main_content">\n    <ion-grid>\n      <ion-row>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-prev" (click)="this.homePage.slidePrev(sliderOne,slideWithNav)">\n            <div class="prev-icon-custom custon-nav" [class.disabled]="this.sliderOne.isBeginningSlide"></div>\n          </span>\n        </ion-col>\n        <ion-col size="10">\n\n          <ion-slides pager="false"   #slideWithNav (ionSlideDidChange)="this.homePage.SlideDidChange(sliderOne,slideWithNav)">\n            <ion-slide *ngFor="let s of this.userBanner">\n              <a  href="#" (click)="openLink(s.path)">\n                <img src="{{ s.url_image }}">\n              </a>\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-next" (click)="this.homePage.slideNext(sliderOne,slideWithNav)">\n            <div class="next-icon-custom custon-nav" [class.disabled]="sliderOne.isEndSlide"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- end slide -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\pages\upload\upload.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object])
    ], UploadPage);
    return UploadPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/modal.module": [
		693,
		1
	],
	"../pages/upload/upload.module": [
		694,
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
webpackAsyncContext.id = 306;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(64);
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

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_upload__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(696);
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
    function HomePage(navCtrl, navParams, iab, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.formBuilder = formBuilder;
        this.http = http;
        this.myGlobal = __WEBPACK_IMPORTED_MODULE_0__app_app_injecter__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* GlobalVars */]);
        this.sliders = [
            {
                link: 'https://ttlm.vnggames.com/index.html',
                url_image: "https://www.techsignin.com/wp-content/uploads/2016/05/vo-lam-truyen-ky-vinagame-vng.jpg"
            },
        ];
        //Coverflow
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        var uploadPage = new __WEBPACK_IMPORTED_MODULE_5__upload_upload__["a" /* UploadPage */](this.navCtrl, this.navParams, this.formBuilder, this.http);
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: this.sliders
            };
    }
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
        console.log('Open modal ');
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
        this.slideWithNav.update();
    };
    HomePage.prototype.ngAfterViewInit = function () {
        // this.slideWithNav.Slides = 2000;
        this.slideWithNav.isBeginning;
        // this.slides.autoplayDisableOnInteraction = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('slideWithNav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "slideWithNav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\pages\home\home.html"*/'<img class="rp-landing_image" src="./././assets/imgs/nit_bg1.png" alt="">\n\n<ion-content padding>\n  <img class="nit_main_img" src="./././assets/imgs/nit_main_img.png" alt="">\n  <button class="btn-login" (click)="openModalLogin()">Login</button>\n  <button class="btn-register" (click)="openModalRegister()">Register</button>\n\n  <div class="nit_button_section">\n    <a  class="nit_button" (click)="this.openSeting()">test modal</a>\n    <button ion-button class="btn_add_game" *ngIf="this.myGlobal.isLogin" (click)="this.openUpload()"><ion-icon name="add-circle-outline"></ion-icon></button>\n    <ion-grid>\n      <ion-row>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-prev" (click)="slidePrev(sliderOne,slideWithNav)">\n            <div class="prev-icon-custom custon-nav" [class.disabled]="sliderOne.isBeginningSlide"></div>\n          </span>\n        </ion-col>\n        <ion-col size="10">\n\n          <ion-slides pager="false"   #slideWithNav (ionSlideDidChange)="SlideDidChange(sliderOne,slideWithNav)">\n            <ion-slide *ngFor="let s of sliderOne.slidesItems">\n              <a  href="#" (click)="this.openLink(s.link)">\n                <img src="{{ s.url_image }}">\n              </a>\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size="1" class="slider_arrow">\n          <span class="slider-nav arrow-next" (click)="slideNext(sliderOne,slideWithNav)">\n            <div class="next-icon-custom custon-nav" [class.disabled]="sliderOne.isEndSlide"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__awesome_cordova_plugins_native_storage_ngx__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_smart_audio_smart_audio__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_setting_setting__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_user_register_user__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modal_modal__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__global__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_14__app_injecter__["b" /* setAppInjector */])(injector);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */],
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
                })
            ],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(64);
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_storage_ngx__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_modal_modal__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(64);
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
        this.isLogin = true;
    }
    GlobalVars.prototype.openModalByComponentName = function (comName, params, isSecondPop) {
        if (params === void 0) { params = [""]; }
        if (isSecondPop === void 0) { isSecondPop = false; }
        console.log(comName);
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

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(43);
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
    LoginComponent.prototype.closeModalLogin = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.pop();
        }, 300);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "isLogin", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\components\login\login.html"*/'<!-- Generated template for the LoginComponent component -->\n<img class="rp-bg_image" src="./././assets/imgs/setting-box.png" alt="">\n<div class="nit_setting_title"><span>LOGIN</span></div>\n<div class="nit_setting">\n  <ion-grid>\n    <form>\n    <ion-row>\n        <ion-col class="rp-as-range">\n            <div class="rp-as-text">\n              <ion-item fill="solid">\n                <ion-label position="floating">User Name : </ion-label>\n                <ion-input placeholder="Enter username" [(ngModel)]="name" name="name"></ion-input>\n              </ion-item>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="rp-as-range">\n            <div class="rp-as-text">\n              <ion-item fill="solid">\n                <ion-label position="floating">Password : </ion-label>\n                <ion-input type= \'password\' placeholder="Enter password" [(ngModel)]="password" name="password"></ion-input>\n              </ion-item>\n            </div>\n        </ion-col>\n    </ion-row>\n\n      </form>\n      <button ion-button (click)="handleLogin()" class="login"></button>\n      <button ion-button (click)="closeModalLogin()" class="cancle"></button>\n      </ion-grid>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__awesome_cordova_plugins_native_audio_ngx__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_injecter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_smart_audio_smart_audio__ = __webpack_require__(349);
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

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
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
    function RegisterUserComponent(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.checkbox = false;
        console.log('Hello RegisterUserComponent Component');
    }
    RegisterUserComponent.prototype.handleRegisterUser = function () {
        var _this = this;
        var data = { name: this.name, password: this.password };
        var url = "https://630d63c4b37c364eb7036ff7.mockapi.io/users";
        this.http.post(url, data)
            .subscribe(function (response) {
            console.log('API response:', response.status);
            if (response.status === 200) {
                console.log('Success!');
            }
            else {
                console.log('Error:', response.status);
            }
        });
        setTimeout(function () {
            _this.navCtrl.pop();
        }, 300);
    };
    RegisterUserComponent.prototype.closeModalLogin = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.pop();
        }, 300);
    };
    RegisterUserComponent.prototype.handleChange = function () {
        console.log(this.checkbox);
    };
    RegisterUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'register-user',template:/*ion-inline-start:"C:\Ionic\Nit2\Nit\src\components\register-user\register-user.html"*/'<!-- Generated template for the RegisterUserComponent component -->\n<div>\n  <img class="rp-bg_image" src="./././assets/imgs/setting-box.png" alt="">\n<div class="nit_setting_title"><span>REGISTER</span></div>\n<div class="nit_setting">\n  <ion-grid>\n    <form>\n    <ion-row>\n        <ion-col class="rp-as-range">\n            <div class="rp-as-text">\n              <ion-item fill="solid">\n                <ion-label position="floating">User Name : </ion-label>\n                <ion-input placeholder="Enter username"  name="name" [(ngModel)]="name"></ion-input>\n              </ion-item>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="rp-as-range">\n            <div class="rp-as-text">\n              <ion-item fill="solid">\n                <ion-label position="floating">Password : </ion-label>\n                <ion-input  type= \'password\' placeholder="Enter password" [(ngModel)]="password" name="password"></ion-input>\n              </ion-item>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row class="checkbox_icon">\n      <ion-item>\n        <ion-checkbox slot="start" [(ngModel)]="checkbox" name="checkbox" (ionChange)="handleChange()"></ion-checkbox>\n        <ion-label>I agree to the terms and conditions</ion-label>\n      </ion-item>\n    </ion-row>\n\n      </form>\n      <button ion-button *ngIf="this.checkbox"  (click)="handleRegisterUser()" class="login"></button>\n      <button ion-button *ngIf="!this.checkbox"   class="nologin"></button>\n      <button ion-button (click)="closeModalLogin()" class="cancle"></button>\n      </ion-grid>\n\n</div>\n'/*ion-inline-end:"C:\Ionic\Nit2\Nit\src\components\register-user\register-user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());

//# sourceMappingURL=register-user.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map
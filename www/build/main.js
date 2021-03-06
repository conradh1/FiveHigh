webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the MarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarkPage = (function () {
    function MarkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.answers = {}; // contains question object
    }
    MarkPage.prototype.showMark = function (question_id, answer_id, question) {
        // returns the source name based on id
        var msg = "";
        if (question_id != answer_id) {
            msg = "Response: " + this.getSource(answer_id, question);
        }
        return msg;
    };
    MarkPage.prototype.getSource = function (id, question) {
        // returns the source name based on id
        switch (id) {
            case "1":
                return question.source_1;
            case "2":
                return question.source_2;
            case "3":
                return question.source_3;
            case "4":
                return question.source_4;
            case "5":
                return question.source_5;
        }
        return "Unknown";
    };
    MarkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarkPage');
        this.answers = this.navParams.get('answers');
        this.category = this.navParams.get('category');
        this.ques_no = this.navParams.get('ques_no');
        this.questions = this.navParams.get('questions');
    };
    return MarkPage;
}());
MarkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mark',template:/*ion-inline-start:"/home/conradh/Code/Projects/FiveHigh/src/pages/mark/mark.html"*/'<!--\n  Generated template for the MarkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FiveHigh Marks</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid *ngFor="let question of questions">\n    <ion-row>\n      <ion-col col-lg-6>Category: {{ category }}</ion-col>\n      <ion-col col-lg-6>{{ ques_no }}). {{ question.title }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-6>{{ question.target_1 }} </ion-col>\n      <ion-col col-lg-6> <ion-icon name=\"md-checkmark-circle\"></ion-icon> {{ question.source_1 }} -> {{ showMark(1, answers["1"],question) }} </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-6>{{ question.target_2 }} </ion-col>\n      <ion-col col-lg-6> <ion-icon name=\"md-close-circle\"></ion-icon> {{ question.source_2 }} -> {{ showMark(2, answers["2"],question) }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-6>{{ question.target_3 }} </ion-col>\n      <ion-col col-lg-6>  {{ question.source_3 }} -> {{ showMark(3, answers["3"],question) }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-6>{{ question.target_4 }} </ion-col>\n      <ion-col col-lg-6>  {{ question.source_4 }} -> {{ showMark(4, answers["4"],question) }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-6>{{ question.target_5 }} </ion-col>\n      <ion-col col-lg-6>  {{ question.source_5 }} -> {{ showMark(5, answers["5"],question) }}</ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/conradh/Code/Projects/FiveHigh/src/pages/mark/mark.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], MarkPage);

var _a, _b;
//# sourceMappingURL=mark.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mark_mark__ = __webpack_require__(102);
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
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizPage = (function () {
    function QuizPage(navCtrl, navParams, alertCtrl, dragulaService, dataProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dragulaService = dragulaService;
        this.dataProvider = dataProvider;
        this.markPage = __WEBPACK_IMPORTED_MODULE_5__mark_mark__["a" /* MarkPage */];
        this.random = [1, 2, 3, 4, 5]; //used to randomly assign sources
        this.answers = {
            // -1, unanswered > 1 answered
            "1": -1,
            "2": -1,
            "3": -1,
            "4": -1,
            "5": -1
        };
        var bag = this.dragulaService.find('quiz-bag');
        if (bag !== undefined)
            this.dragulaService.destroy('quiz-bag');
        dragulaService.setOptions('quiz-bag', {
            copy: false,
            moves: function (el, container, handle) {
                // find the id to determine if the user can drag or not.
                var id = container.id;
                return id.search(/target_/i);
            },
            accepts: function (el, target, source, sibling) {
                // Two rules to note here:
                // 1) A source cannot be dragged into a source.
                // 2) A target cannot only accept one child target.
                if (target.children.length > 2) {
                    return false;
                }
                else {
                    return true;
                }
            },
            revertOnSpill: true,
            direction: 'horizontal'
        });
        dragulaService.drag.subscribe(function (value) {
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
            var e = value[0], el = value[1], target = value[2], source = value[3];
            var marked = _this.mark(source.id, target.id);
            var alert = _this.alertCtrl.create({
                title: _this.results,
                subTitle: 'FiveHigh',
                buttons: ['OK']
            });
            if (marked) {
                alert.present();
            }
        });
        dragulaService.over.subscribe(function (value) {
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            _this.onOut(value.slice(1));
        });
    }
    QuizPage.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    QuizPage.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    QuizPage.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    QuizPage.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
        this.removeClass(e, 'ex-moved');
    };
    QuizPage.prototype.onDrop = function (args) {
        var e = args[0], el = args[1], target = args[2], source = args[3];
        this.addClass(e, 'ex-moved');
    };
    QuizPage.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        this.addClass(el, 'ex-over');
    };
    QuizPage.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        this.removeClass(el, 'ex-over');
    };
    QuizPage.prototype.mark = function (source, target) {
        // split out source/target_0[1-5]
        var sourceList = source.split("_");
        var targetList = target.split("_");
        this.results = "Results: ";
        // mark source with target
        this.answers[targetList[1]] = sourceList[1];
        var marked = true;
        for (var key in this.answers) {
            var value = this.answers[key];
            if (value == -1)
                marked = false;
            this.results += key + ") " + value + "\n";
            if (key == value) {
                this.results += " correct";
            }
        }
        console.log("debug " + this.results);
        return marked;
    };
    QuizPage.prototype.randomize = function () {
        // place array in this.random order
        for (var i = this.random.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.random[i];
            this.random[i] = this.random[j];
            this.random[j] = temp;
        }
    };
    QuizPage.prototype.getSource = function (id, question) {
        // returns the source name based on id
        switch (id) {
            case 1:
                return question.source_1;
            case 2:
                return question.source_2;
            case 3:
                return question.source_3;
            case 4:
                return question.source_4;
            case 5:
                return question.source_5;
        }
        return "Unknown";
    };
    QuizPage.prototype.getQuestions = function (ques_no) {
        var _this = this;
        this.dataProvider.getQuestions().subscribe(function (data) {
            // filter by current question
            //console.log("debug getQuestions"+ques_no);
            _this.questions = data.filter(function (question) {
                if (question.id == ques_no) {
                    // assign sources to array
                    return true;
                }
            });
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    QuizPage.prototype.ionViewDidLoad = function () {
        this.category = this.navParams.get('category').name;
        this.ques_no = this.navParams.get('ques_no');
        this.getQuestions(this.ques_no);
        this.randomize();
        console.log('ionViewDidLoad QuizPage');
    };
    QuizPage.prototype.gotoMark = function () {
        this.navCtrl.push(this.markPage, {
            answers: this.answers,
            category: this.category,
            questions: this.questions,
            ques_no: this.ques_no
        });
    };
    return QuizPage;
}());
QuizPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-quiz',template:/*ion-inline-start:"/home/conradh/Code/Projects/FiveHigh/src/pages/quiz/quiz.html"*/'<!--\n  Generated template for the QuizPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FiveHigh</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid class="wrapper" *ngFor="let question of questions">\n    <ion-row>\n      <ion-col>Category: {{ category }} </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>{{ ques_no }}). {{ question.title }} </ion-col>\n    </ion-row >\n    <ion-row>\n      <ion-col class="container" id=\'target_1\' [dragula]=\'"quiz-bag"\'>\n        <h4>\n          {{ question.target_1 }}\n        </h4>\n      </ion-col>\n      <ion-col class="container" id=\'sources_{{random[0]}} \' [dragula]=\'"quiz-bag"\'>\n          <button ion-item detail-none >\n            {{ getSource(random[0],question) }}\n          </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="container" id=\'target_2\' [dragula]=\'"quiz-bag"\'>\n        <h4>\n          {{ question.target_2 }}\n        </h4>\n      </ion-col>\n      <ion-col class="container" id=\'sources_{{random[1]}} \' [dragula]=\'"quiz-bag"\'>\n          <button ion-item detail-none >\n            {{ getSource(random[1],question) }}\n          </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="container" id=\'target_3\' [dragula]=\'"quiz-bag"\'>\n        <h4>\n          {{ question.target_3 }}\n        </h4>\n      </ion-col>\n      <ion-col class="container" id=\'sources_{{random[2]}}\' [dragula]=\'"quiz-bag"\'>\n          <button ion-item detail-none >\n            {{ getSource(random[2],question) }}\n          </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="container" id=\'target_4\' [dragula]=\'"quiz-bag"\'>\n        <h4>\n          {{ question.target_4 }}\n        </h4>\n      </ion-col>\n      <ion-col class="container" id=\'sources_{{random[3]}}\' [dragula]=\'"quiz-bag"\'>\n          <button ion-item detail-none >\n            {{ getSource(random[3],question) }}\n          </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="container" id=\'target_5\' [dragula]=\'"quiz-bag"\'>\n        <h4>\n          {{ question.target_5 }}\n        </h4>\n      </ion-col>\n      <ion-col class="container" id=\'sources_{{random[4]}}\' [dragula]=\'"quiz-bag"\'>\n          <button ion-item detail-none >\n            {{ getSource(random[4],question) }}\n          </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col><button ion-button (click)="gotoMark(results,1)">Mark</button></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/conradh/Code/Projects/FiveHigh/src/pages/quiz/quiz.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
], QuizPage);

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__ = __webpack_require__(103);
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.categories = [];
        this.quizPage = __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */];
        this.getCategories();
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.getCategories = function () {
        var _this = this;
        this.dataProvider.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    CategoryPage.prototype.gotoQuiz = function (category, ques_no) {
        this.navCtrl.push(this.quizPage, {
            category: category,
            ques_no: ques_no
        });
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-category',template:/*ion-inline-start:"/home/conradh/Code/Projects/FiveHigh/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Category</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Pick a Category:\n  <ion-list *ngFor="let category of categories">\n    <button ion-button (click)="gotoQuiz(category,1)">\n    {{ category.name }}\n  </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/conradh/Code/Projects/FiveHigh/src/pages/category/category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		291,
		2
	],
	"../pages/mark/mark.module": [
		289,
		1
	],
	"../pages/quiz/quiz.module": [
		290,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.categoryPage = __WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */];
    }
    HomePage.prototype.gotoCategoryPage = function () {
        this.navCtrl.push(this.categoryPage);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/home/conradh/Code/Projects/FiveHigh/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Welcome to FiveHigh!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Test your knowledge on the Top Five of Everything!\n  <p>\n    <button ion-button [navPush]="categoryPage">Let\'s get Started!</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/conradh/Code/Projects/FiveHigh/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quiz_quiz__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mark_mark__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_data_data__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_quiz_quiz__["a" /* QuizPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mark_mark__["a" /* MarkPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/mark/mark.module#MarkPageModule', name: 'MarkPage', segment: 'mark', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__["DragulaModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_quiz_quiz__["a" /* QuizPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mark_mark__["a" /* MarkPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_data_data__["a" /* DataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/conradh/Code/Projects/FiveHigh/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/conradh/Code/Projects/FiveHigh/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
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
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.getCategories = function () {
        return this.http.get('data/categories.json').map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getQuestions = function () {
        return this.http.get('data/sports.json').map(function (res) { return res.json(); });
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
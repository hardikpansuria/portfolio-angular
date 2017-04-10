webpackJsonp([2,5],{

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RepoService = (function () {
    function RepoService(http) {
        this.http = http;
        this.reposUrl = 'https://api.github.com/users/atangeman/repos';
    }
    RepoService.prototype.getRepos = function () {
        return this.http.get(this.reposUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RepoService.prototype.extractData = function (res) {
        var body = res.json();
        for (var key in body) {
            if (body.hasOwnProperty(key)) {
                console.log(key + " -> " + body[key]);
            }
        }
        console.log(body);
        return body || {};
    };
    RepoService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RepoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], RepoService);
    return RepoService;
    var _a;
}());
//# sourceMappingURL=/home/zeus/Development/portfolio-angular/src/repo.service.js.map

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 363;


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(476);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/zeus/Development/portfolio-angular/src/main.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repos_repo_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    // end button control
    function AppComponent(repoService) {
        this.repoService = repoService;
        this.title = 'Project Repositories';
        // start button control
        this.isCollapsed = false;
        this.numbers = Array.from(Array(100), function (x, i) { return String(i + 1); });
        this.getRepos();
    }
    AppComponent.prototype.getRepos = function () {
        var _this = this;
        this.repoService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
        console.log(this.repos);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(645),
            styles: [__webpack_require__(633)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repos_repo_service__["a" /* RepoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__repos_repo_service__["a" /* RepoService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/zeus/Development/portfolio-angular/src/app.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repos_repo_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__(477);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__repos_repo_service__["a" /* RepoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/zeus/Development/portfolio-angular/src/app.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repos_repo_service__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    // end button control
    function SidebarComponent(repoService) {
        this.repoService = repoService;
        this.title = 'Project Repositories';
        // start button control
        this.isCollapsed = false;
        this.customClass = 'customClass';
        this.getRepos();
    }
    SidebarComponent.prototype.getRepos = function () {
        var _this = this;
        this.repoService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
        console.log(this.repos);
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__(646),
            styles: [__webpack_require__(634)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repos_repo_service__["a" /* RepoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__repos_repo_service__["a" /* RepoService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
//# sourceMappingURL=/home/zeus/Development/portfolio-angular/src/sidebar.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/zeus/Development/portfolio-angular/src/environment.js.map

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Inconsolata);", ""]);

// module
exports.push([module.i, "\n.extradiv {\n     top:0;\n}\n\nmain {\n    max-width: 700px;\n}\n\na { \n    color: deepskyblue;\n}\n\nh1 {\n    font-family: boldDigits, monospace;\n    font-size: 14px;\n    size: 14px;\n    font-weight: bold;\n}\n\nh2,h3,h4,h5,p,a,body,html{ \n    font-family: boldDigits, monospace;\n    font-size: 14px;\n    size: 14px;\n}\n\nh2 ~ *:not(h1):not(h2):not(h3) {\n    margin-left: 15px;\n}\n\n/*\nh1 ~ *:not(h2) {\n    margin-left: 25px;\n}\nh2 ~ *:not(h3) {\n    margin-left: 50px;\n}*/\n\nh1,h2,h3,h4,h5 {\n    color: forestgreen;\n        font-weight: bold;\n}\n\n\nh1:before {\n   content: \" # \"\n}\n/*\nh1:after {\n   content: \" - \"\n}\n*/\nh2:before {\n   content: \" - \"\n}\nh3:before {\n   content: \" - \"\n}\nh4:before {\n   content: \" - \"\n}\nh5:before {\n   content: \" - \"\n}\n\n.line-cnt a {\n    background-color: #262625;\n    color:#404040;\n    -webkit-box-pack: right;\n        -ms-flex-pack: right;\n            justify-content: right;\n    text-align: right;\n    line-height: 7.5px;\n    padding: 5px;\n    width:12px;\n}\n\n.thin-gutter {\n    min-width: 40px;\n    height: 100%;\n    top: 0;\n    float: left;\n    margin-left: 25px;\n    -webkit-box-pack: right;\n        -ms-flex-pack: right;\n            justify-content: right;\n    text-align: right;\n}\n\nli:not(.line-cnt)  {\n    color: goldenrod;\n    opacity: .7;\n}\nli:before:not(.line-cnt) {\n    content: \" - \";\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, ".card.customClass,\n.card.customClass .card-header,\n.panel.customClass {\n  background-color: #5bc0de;\n\n}\n.panel.customClass .panel-body {\n  background-color: #337aa7;\n}\n\n.panel-body{\n  background-color: #282828;\n      color:white;\n\n}\n.side-nav {\n    left: 0;\n    top:0;\n    max-width: 350px;\n    background-color: #282828;\n    color : white;\n}\n\n.background {\n  background-color: #404040;\n}\n\n.collapsible ul {\n  background-color: #282828;\n}\n\n.collapsible li {\n  background-color: #282828;\n}\n\n.collapsible-header {\n  color:white;\n  background-color: #282828;\n}\n\n.collapsible-header .active:hover {\n  color:white;\n  font-size: 12px;\n  background-color:lightsteelblue;\n}\n\nli .collapsible a {\n  font-size: 9px;\n  background-color: #282828;\n  color:white;\n}\n\n.collapsible li:hover {\n  background-color:lightsteelblue;\n  color:white;\n}\n\n.collapsible li .active:hover {\n  background-color: steelblue;\n  color:white;\n}\n\n.collapsible li {\n  background-color: #282828;\n  color: whitesmoke;\n  margin-left: 15px;\n}\n\n.collapsible div {\n  background-color: #282828;\n  color: whitesmoke;\n  margin-left: 15px;\n}\n\n.collapsible div .active:hover{\n  background-color: #282828;\n  color: whitesmoke;\n  margin-left: 15px;\n}\n\n.collapsible .active:hover {\n  background-color: #282828;\n  color: whitesmoke;\n}\n\n\n.userView li a{\n  background-color: #282828;\n  color: whitesmoke;\n  font-weight: bolder;\n}\n\nli .active {\n  color: white;\n  background-color:steelblue;\n}\n\n.active {\n  color: white;\n  opacity: .9;\n  background-color:steelblue;\n}\n\nul a{\n  color: whitesmoke;\n  opacity: .75;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = "<!--/.navbar -->\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-sidebar class=\"col-2\"></app-sidebar>\n    <main class=\"col-1\">\n      <ul class=\"thin-gutter\">\n        <li class=\"line-cnt\" *ngFor=\"let number of numbers\">\n          <a>{{number}}</a>\n        </li>\n      </ul>\n    </main>\n    <main class=\"col-9 col-sm-5\">\n      <!--offset-sm-4 col-md-5 offset-md-3 pt-3-->\n      <h1>Dashboard</h1>\n      <div class=\"blog-post\">\n        <h2 class=\"blog-post-title\">Sample blog post</h2>\n        <p class=\"blog-post-meta\">January 1, 2014 by <a href=\"#\">Mark</a></p>\n\n        <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography,\n          images, and code are all supported.</p>\n        <hr>\n        <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo\n          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras\n          mattis consectetur purus sit amet fermentum.</p>\n        <blockquote>\n          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam\n            id dolor id nibh ultricies vehicula ut id elit.</p>\n        </blockquote>\n        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean\n          lacinia bibendum nulla sed consectetur.</p>\n        <h2>Heading</h2>\n        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi\n          erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at\n          eros.\n        </p>\n        <h3>Sub-heading</h3>\n        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n        <pre><code>Example code block</code></pre>\n        <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus\n          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\n        <h3>Sub-heading</h3>\n        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla\n          sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor\n          mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n        <ul>\n          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\n          <li>Donec id elit non mi porta gravida at eget metus.</li>\n          <li>Nulla vitae elit libero, a pharetra augue.</li>\n        </ul>\n        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\n        <ol>\n          <li>Vestibulum id ligula porta felis euismod semper.</li>\n          <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n          <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>\n        </ol>\n        <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>\n      </div>\n      <!-- /.blog-post -->\n\n      <div class=\"blog-post\">\n        <h2 class=\"blog-post-title\">Another blog post</h2>\n        <p class=\"blog-post-meta\">December 23, 2013 by <a href=\"#\">Jacob</a></p>\n\n        <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo\n          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras\n          mattis consectetur purus sit amet fermentum.</p>\n        <blockquote>\n          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam\n            id dolor id nibh ultricies vehicula ut id elit.</p>\n        </blockquote>\n        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean\n          lacinia bibendum nulla sed consectetur.</p>\n        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi\n          erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at\n          eros.\n        </p>\n      </div>\n      <!-- /.blog-post -->\n    </main>\n  </div>\n</div>\n<!--/row-offcanvas -->"

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\n  <ul id=\"slide-out\" class=\"side-nav fixed\">\n      <li *ngFor=\"let repo of repos\">\n        <a href=\"#\"> {{repo.name}} </a>\n      </li>\n  </ul>\n</div>\n-->\n\n<div class=\"button-collapse top-nav full\">\n  <ul class=\"side-nav fixed\">\n    <li>\n      <div class=\"userView\">\n\n        <div class=\"background\">\n          <!--<img src=\"assets/img/neural-net.jpg\">-->\n        </div>\n        <div class=\"userInfo\">\n          <div class=\"userView\">\n            <a href=\"#!user\"><img class=\"circle\" src=\"https://github.com/atangeman.png?size=50\"></a>\n            <a href=\"#!name\"><span class=\"white-text name\">Andy Tangeman</span></a>\n            <a href=\"#!email\"><span class=\"white-text email\">andytangeman@gmail.com</span></a>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li><a href=\"#!\"><i class=\"material-icons\">cloud</i>First Link With Icon</a></li>\n    <li><a href=\"#!\">Second Link</a></li>\n    <li>\n      <div class=\"divider\"></div>\n    </li>\n    <ul class=\"collapsible\" data-collapsible=\"accordion\">\n      <li><a class=\"collapsible-header active\">Projects</a>\n        <div class=\"collapsible-body\">\n          <ul>\n            <li *ngFor=\"let repo of repos\">\n              <a href=\"#\">{{repo.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </li>\n      <li><a class=\"collapsible-header\">Writing</a>\n        <div class=\"collapsible-body\">\n          <ul>\n            <li><a href=\"badges.html\">Badges</a></li>\n            <li><a href=\"buttons.html\">Buttons</a></li>\n            <li><a href=\"breadcrumbs.html\">Breadcrumbs</a></li>\n            <li><a href=\"cards.html\">Cards</a></li>\n            <li><a href=\"chips.html\">Chips</a></li>\n            <li><a href=\"footer.html\">Footer</a></li>\n            <li><a href=\"forms.html\">Forms</a></li>\n            <li><a href=\"icons.html\">Icons</a></li>\n            <li><a href=\"navbar.html\">Navbar</a></li>\n            <li><a href=\"pagination.html\">Pagination</a></li>\n            <li><a href=\"preloader.html\">Preloader</a></li>\n          </ul>\n        </div>\n      </li>\n      <li><a class=\"collapsible-header\">Contact</a>\n        <div class=\"collapsible-body\">\n          <ul>\n            <li><a href=\"carousel.html\">Carousel</a></li>\n            <li><a href=\"collapsible.html\">Collapsible</a></li>\n            <li><a href=\"dialogs.html\">Dialogs</a></li>\n            <li><a href=\"dropdown.html\">Dropdown</a></li>\n            <li><a href=\"feature-discovery.html\">FeatureDiscovery</a></li>\n            <li><a href=\"media.html\">Media</a></li>\n            <li><a href=\"modals.html\">Modals</a></li>\n            <li><a href=\"parallax.html\">Parallax</a></li>\n            <li><a href=\"pushpin.html\">Pushpin</a></li>\n            <li><a href=\"scrollfire.html\">ScrollFire</a></li>\n            <li><a href=\"scrollspy.html\">Scrollspy</a></li>\n            <li><a href=\"side-nav.html\">SideNav</a></li>\n            <li><a href=\"tabs.html\">Tabs</a></li>\n            <li><a href=\"transitions.html\">Transitions</a></li>\n            <li><a href=\"waves.html\">Waves</a></li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n\n  </ul>\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(364);


/***/ })

},[700]);
//# sourceMappingURL=main.bundle.js.map
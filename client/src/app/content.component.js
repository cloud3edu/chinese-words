"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var content_service_1 = require("./content.service");
var mybook_service_1 = require("./mybook.service");
var ContentComponent = /** @class */ (function () {
    function ContentComponent(contentService, myBookService, route, location) {
        this.contentService = contentService;
        this.myBookService = myBookService;
        this.route = route;
        this.location = location;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.contentService.getContent(+params.get('number')); })
            .subscribe(function (contents) {
            console.log(contents);
            _this.contents = contents;
            _this.index = 0;
            _this.currentItem = _this.contents[_this.index];
        });
    };
    ContentComponent.prototype.toPrevious = function () {
        if (this.index > 0) {
            this.index -= 1;
            this.currentItem = this.contents[this.index];
        }
    };
    ContentComponent.prototype.toNext = function () {
        if (this.index < 49) {
            this.index += 1;
            this.currentItem = this.contents[this.index];
        }
    };
    ContentComponent.prototype.atBeginning = function () {
        return this.index === 0;
    };
    ContentComponent.prototype.atEnd = function () {
        return this.index === 49;
    };
    ContentComponent.prototype.addToMyBook = function () {
        var _this = this;
        this.myBookService.addToMyBook(this.currentItem._id)
            .then(function () {
            console.log("Current Item " + _this.currentItem.word + " added to my book");
        });
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'content-detail',
            templateUrl: './content.component.html',
            styleUrls: ['./content.component.css']
        }),
        __metadata("design:paramtypes", [content_service_1.ContentService,
            mybook_service_1.MyBookService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map
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
var mybook_service_1 = require("./mybook.service");
var MyBookComponent = /** @class */ (function () {
    function MyBookComponent(myBookService) {
        this.myBookService = myBookService;
    }
    MyBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.index = 0;
        this.myBookService.getMyWords()
            .then(function (words) {
            _this.words = words;
            _this.currentWord = _this.words[0];
        });
    };
    MyBookComponent.prototype.toPrevious = function () {
        if (this.index > 0) {
            this.index -= 1;
            this.currentWord = this.words[this.index];
        }
    };
    MyBookComponent.prototype.toNext = function () {
        if (this.index < this.words.length - 1) {
            this.index += 1;
            this.currentWord = this.words[this.index];
        }
    };
    MyBookComponent.prototype.atBeginning = function () {
        return this.index === 0;
    };
    MyBookComponent.prototype.atEnd = function () {
        return this.index === this.words.length - 1;
    };
    MyBookComponent.prototype.removeWord = function () {
        var _this = this;
        this.myBookService.removeMyWord(this.currentWord._id)
            .then(function (response) {
            // remove current word
            _this.words.splice(_this.index, 1);
            // if index is the last element, then shift it by 1
            if (_this.index === _this.words.length) {
                _this.index--;
            }
            // get new current word
            _this.currentWord = _this.words[_this.index];
        });
    };
    MyBookComponent = __decorate([
        core_1.Component({
            selector: 'my-book',
            templateUrl: './mybook.component.html',
            styleUrls: ['./mybook.component.css']
        }),
        __metadata("design:paramtypes", [mybook_service_1.MyBookService])
    ], MyBookComponent);
    return MyBookComponent;
}());
exports.MyBookComponent = MyBookComponent;
//# sourceMappingURL=mybook.component.js.map
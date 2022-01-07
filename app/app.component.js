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
var core_1 = require('@angular/core');
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
var ITEMS = [
    { id: 11, name: 'Eggs' },
    { id: 12, name: 'Hot Dogs' },
    { id: 13, name: 'Chicken' }
];
var CART = [];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Grocery List';
        this.subTitle = 'Simple grocery list application built with Angular 2 and Redux';
        this.items = ITEMS;
        this.cartItems = CART;
    }
    AppComponent.prototype.onSelect = function (item) {
        this.cartItems.push(item);
        this.selectedItem = item;
    };
    AppComponent.prototype.onRemove = function (item) {
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>{{subTitle}}</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let item of items\" [class.selected]=\"item === selectedItem\">\n        {{item.name}}\n        <span class=\"pencil\" (click)=\"onSelect(item)\"> .. </span>\n      </li>\n    </ul>\n    <ul class=\"shopping-cart\">\n      <li *ngFor=\"let item of cartItems\">\n        {{item.name}}\n        <span class=\"pencil\" (click)=\"onRemove(item)\"> .. </span>\n      </li>\n    </ul>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
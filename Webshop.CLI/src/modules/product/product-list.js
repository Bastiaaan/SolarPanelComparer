var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Config } from 'aurelia-api';
import { Router } from 'aurelia-router';
import { ProductEditViewModel } from '../../models/product-model';
import { autoinject, bindable } from 'aurelia-framework';
var productList = (function () {
    function productList(config, router) {
        this.config = config;
        this.api = config.getEndpoint('api');
        this.router = router;
    }
    productList.prototype.attached = function () {
        this.obtainProduct();
    };
    productList.prototype.obtainProduct = function () {
        var _this = this;
        var results = this.api.request('GET', 'product')
            .then(function (data) {
            _this.products = data;
            console.log('succeeded');
        }).catch(function (reason) {
            console.log(reason);
        });
        console.log(results);
    };
    productList.prototype.select = function (product) {
        this.productId = product.id;
        this.router.navigateToRoute('product', { id: this.productId });
    };
    __decorate([
        bindable,
        __metadata("design:type", ProductEditViewModel)
    ], productList.prototype, "product", void 0);
    productList = __decorate([
        autoinject,
        __metadata("design:paramtypes", [Config, Router])
    ], productList);
    return productList;
}());
export { productList };
//# sourceMappingURL=product-list.js.map
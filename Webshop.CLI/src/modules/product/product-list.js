var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Rest, Config } from 'aurelia-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ProductViewModel } from '../../models/product-model';
import { inject, bindable } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
var productList = (function () {
    function productList(config, _client) {
        this.config = config;
        this._client = _client;
        this.products = [];
        this.api = config.getEndpoint('api');
        this.client = _client;
    }
    productList.prototype.obtainProduct = function () {
        var _this = this;
        return this.api.find('product', this.products).then(function (data) {
            _this.products = data;
            console.log('succeeded');
        }).catch(function (reason) {
            console.log(reason);
        });
    };
    productList.prototype.select = function (product) {
        return this.productId = product.id;
    };
    __decorate([
        bindable,
        __metadata("design:type", ProductViewModel)
    ], productList.prototype, "product", void 0);
    productList = __decorate([
        inject(EventAggregator, Rest),
        __metadata("design:paramtypes", [Config, HttpClient])
    ], productList);
    return productList;
}());
export { productList };
//# sourceMappingURL=product-list.js.map
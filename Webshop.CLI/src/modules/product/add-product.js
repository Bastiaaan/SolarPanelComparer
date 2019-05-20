var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable } from 'aurelia-framework';
import { Config } from 'aurelia-api';
import { HttpClient } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ProductViewModel } from '../../models/product-model';
var Product = (function () {
    function Product(config, ea, _client) {
        this.config = config;
        this.ea = ea;
        this._client = _client;
        this.api = config.getEndpoint('api');
        this.client = _client;
    }
    Product.prototype.save = function (product) {
        return this.api.create('/product', this.product)
            .then(function (product) {
            return product;
        }).catch(function (error) {
            console.log("error has occured: " + error);
        });
    };
    __decorate([
        bindable,
        __metadata("design:type", ProductViewModel)
    ], Product.prototype, "product", void 0);
    Product = __decorate([
        inject(Config, EventAggregator),
        __metadata("design:paramtypes", [Config, EventAggregator, HttpClient])
    ], Product);
    return Product;
}());
export { Product };
//# sourceMappingURL=add-product.js.map
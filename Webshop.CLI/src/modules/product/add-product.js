var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject } from 'aurelia-framework';
import { Config } from 'aurelia-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';
var AddProduct = (function () {
    function AddProduct(config, ea, router) {
        this.config = config;
        this.ea = ea;
        this.router = router;
        this.api = config.getEndpoint('api');
    }
    AddProduct.prototype.attached = function () {
        console.log('I am here!');
    };
    AddProduct.prototype.detached = function () {
    };
    AddProduct.prototype.save = function () {
        var _this = this;
        return this.api.create('product', this.product)
            .then(function () {
            _this.router.navigateToRoute('products');
        }).catch(function (error) {
            console.log("error has occured: " + error);
        });
    };
    AddProduct = __decorate([
        autoinject,
        __metadata("design:paramtypes", [Config, EventAggregator, Router])
    ], AddProduct);
    return AddProduct;
}());
export { AddProduct };
//# sourceMappingURL=add-product.js.map
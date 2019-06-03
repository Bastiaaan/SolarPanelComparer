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
import { EventAggregator } from 'aurelia-event-aggregator';
import { bindable, autoinject } from 'aurelia-framework';
import { areEqual } from '../../utility';
var ProductDetails = (function () {
    function ProductDetails(config, router, ea) {
        this.config = config;
        this.router = router;
        this.ea = ea;
        this.api = config.getEndpoint('api');
    }
    ProductDetails.prototype.activate = function (params, routeConfig) {
        this.id = params.id;
        this.select(this.id);
    };
    ProductDetails.prototype.select = function (id) {
        var _this = this;
        var dat = this.api.findOne('product', id).then(function (data) {
            _this.product = data;
            _this.originalProduct = data;
        }).catch(function (reason) {
            console.log('Could not fetch data: ' + reason);
        });
        debugger;
    };
    ProductDetails.prototype.canSave = function () {
        return !areEqual(this.product, this.originalProduct);
    };
    ProductDetails.prototype.save = function () {
        var _this = this;
        if (this.canSave() === true) {
            this.api.update('product', this.product).then(function (model) {
                _this.router.navigateBack();
            }).catch(function (reason) {
                console.log(reason);
            });
        }
    };
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], ProductDetails.prototype, "id", void 0);
    ProductDetails = __decorate([
        autoinject,
        __metadata("design:paramtypes", [Config, Router, EventAggregator])
    ], ProductDetails);
    return ProductDetails;
}());
export { ProductDetails };
//# sourceMappingURL=product-details.js.map
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
    ProductDetails.prototype.activate = function (params) {
        var _this = this;
        this.id = params.id;
        return this.api.findOne('product', this.id).then(function (data) {
            _this.product = data;
            _this.originalProduct = JSON.parse(JSON.stringify(_this.product));
        }).then(function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var product = _this.product;
                    resolve(JSON.parse(JSON.stringify(product)));
                }, 200);
            });
        }).catch(function (reason) {
            console.log('Could not fetch data: ' + reason);
        });
    };
    ProductDetails.prototype.canSave = function () {
        return !areEqual(this.product, this.originalProduct);
    };
    ProductDetails.prototype.save = function () {
        var _this = this;
        debugger;
        if (!areEqual(this.product, this.originalProduct)) {
            this.api.update('product', this.product.id).then(function (model) {
                _this.router.navigateToRoute('/');
            }).catch(function (reason) {
                console.log(reason);
            });
        }
        else {
            debugger;
            console.log(JSON.parse('From form: ' + this.product) + ' original: ' + JSON.parse(JSON.stringify(this.originalProduct)));
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
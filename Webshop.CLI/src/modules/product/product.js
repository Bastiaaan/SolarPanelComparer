var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from 'aurelia-framework';
import { Config } from 'aurelia-api';
import { EventAggregator } from 'aurelia-event-aggregator';
var Product = (function () {
    function Product(config, ea) {
        this.config = config;
        this.ea = ea;
        if (config.endpointExists('api') === true)
            this.api = config.getEndpoint('api');
    }
    Product.prototype.save = function (product) {
    };
    Product = __decorate([
        inject(EventAggregator, Config),
        __metadata("design:paramtypes", [Config, EventAggregator])
    ], Product);
    return Product;
}());
export { Product };
//# sourceMappingURL=product.js.map
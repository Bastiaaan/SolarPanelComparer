var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable } from 'aurelia-framework';
var ProductDetails = (function () {
    function ProductDetails(rest) {
        this.rest = rest;
        this.api = rest;
    }
    ProductDetails.prototype.getViewModel = function () {
        var _this = this;
        return this.api.find('product', this.id).then(function (data) {
            _this.product = data;
        });
    };
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], ProductDetails.prototype, "id", void 0);
    return ProductDetails;
}());
export { ProductDetails };
//# sourceMappingURL=product-details.js.map
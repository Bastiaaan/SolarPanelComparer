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
import { bindable, autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
var VendorDetails = (function () {
    function VendorDetails(config, router) {
        this.config = config;
        this.api = config.getEndpoint('api');
        this.router = router;
    }
    VendorDetails.prototype.attached = function () {
        this.obtainVendor();
    };
    VendorDetails.prototype.obtainVendor = function () {
        var _this = this;
        this.api.findOne('vendor', this.id).then(function (data) {
            _this.vendor = data;
            _this.id = _this.vendor.id;
        }).catch(function (reason) {
            console.log("Unable to fetch data: " + reason);
        });
    };
    VendorDetails.prototype.idChanged = function () {
        this.obtainVendor();
    };
    VendorDetails.prototype.navigateBack = function () {
        this.router.navigateBack();
    };
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], VendorDetails.prototype, "id", void 0);
    VendorDetails = __decorate([
        autoinject,
        __metadata("design:paramtypes", [Config, Router])
    ], VendorDetails);
    return VendorDetails;
}());
export { VendorDetails };
//# sourceMappingURL=vendor-details.js.map
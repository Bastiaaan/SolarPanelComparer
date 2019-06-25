var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { VendorViewModel } from '../../models/Vendor-model';
import { autoinject, bindable } from 'aurelia-framework';
import { Config } from 'aurelia-api';
import { Router } from 'aurelia-router';
var VendorList = (function () {
    function VendorList(config, router) {
        this.config = config;
        this.vendors = [];
        this.errorMsg = null;
        this.api = config.getEndpoint('api');
        this.router = router;
    }
    VendorList.prototype.activate = function () {
        this.GetVendors();
    };
    VendorList.prototype.GetVendors = function () {
        var _this = this;
        this.api.request('GET', 'vendor').then(function (data) {
            _this.vendors = data;
            if (_this.vendors.length === 0) {
                _this.errorMsg = 'Geen verkopers gevonden';
            }
        }).catch(function (reason) {
            console.log('Could not obtain vendors: ' + reason);
            _this.errorMsg = 'Geen verkopers gevonden';
        });
    };
    VendorList.prototype.select = function (vendor) {
        this.vendorId = vendor.id;
    };
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], VendorList.prototype, "vendorId", void 0);
    __decorate([
        bindable,
        __metadata("design:type", VendorViewModel)
    ], VendorList.prototype, "vendor", void 0);
    VendorList = __decorate([
        autoinject,
        __metadata("design:paramtypes", [Config, Router])
    ], VendorList);
    return VendorList;
}());
export { VendorList };
//# sourceMappingURL=vendor-list.js.map
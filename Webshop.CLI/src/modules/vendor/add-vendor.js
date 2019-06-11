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
import { autoinject } from 'aurelia-framework';
var AddVendor = (function () {
    function AddVendor(config, router) {
        this.config = config;
        this.router = router;
        this.api = config.getEndpoint('api');
    }
    AddVendor.prototype.attached = function () {
    };
    AddVendor.prototype.save = function () {
        var _this = this;
        return this.api.create('vendor', this.toInsert)
            .then(function () {
            _this.router.navigateToRoute('vendors');
        }).catch(function (reason) {
            console.log(reason);
        });
    };
    AddVendor = __decorate([
        autoinject,
        __metadata("design:paramtypes", [Config, Router])
    ], AddVendor);
    return AddVendor;
}());
export { AddVendor };
//# sourceMappingURL=add-vendor.js.map
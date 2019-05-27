var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, PLATFORM } from 'aurelia-framework';
import { Rest } from 'aurelia-api';
var App = (function () {
    function App(api) {
        this.api = api;
    }
    App.prototype.configureRouter = function (config, router) {
        config.options.root = '/';
        config.options.pushState = true;
        config.title = 'Webshop APP';
        config.map([
            { route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select' },
            { route: 'contacts/:id', moduleId: PLATFORM.moduleName('modules/contacts/contact-detail'), name: 'contacts' },
            { route: 'product/create', moduleId: PLATFORM.moduleName('modules/product/add-product'), nav: true, name: 'new-product', title: 'new product' },
            { route: 'vendor/create', moduleId: PLATFORM.moduleName('modules/vendor/add-vendor'), nav: true, name: 'new-vendor', title: 'new vendor' },
            { route: 'product/:id', moduleId: PLATFORM.moduleName('modules/product/product-details'), name: 'product-details', title: 'check product' }
        ]);
        this.router = router;
        this.router.configure(config);
    };
    App = __decorate([
        inject(Rest),
        __metadata("design:paramtypes", [Rest])
    ], App);
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map
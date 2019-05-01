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
import { WebAPI } from './web-api';
var App = (function () {
    function App(api) {
        this.api = api;
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = 'Contacten lijst';
        config.map([
            { route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select' },
            { route: 'contacts/:id', moduleId: PLATFORM.moduleName('contact-detail'), name: 'contacts' }
        ]);
        this.router = router;
    };
    App = __decorate([
        inject(WebAPI),
        __metadata("design:paramtypes", [WebAPI])
    ], App);
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map
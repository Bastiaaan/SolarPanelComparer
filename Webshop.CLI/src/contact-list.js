var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from './web-api';
import { Config } from 'aurelia-api';
import { inject } from 'aurelia-framework';
var ContactList = (function () {
    function ContactList(config, ea, api) {
        this.config = config;
        this.products = [];
        this.demoApi = config.getEndpoint('api');
        this.api = api;
    }
    ContactList.prototype.obtainProduct = function () {
        var _this = this;
        return this.demoApi.find('product', this.products).then(function (data) {
            _this.products = data;
            console.log('succeeded');
        }).catch(function (reason) {
            console.log(reason);
        });
    };
    ContactList.prototype.created = function () {
        var _this = this;
        this.api.getContactList().then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactList.prototype.select = function (contact) {
        this.selectedId = contact.id;
        return true;
    };
    ContactList = __decorate([
        inject(WebAPI, EventAggregator),
        __metadata("design:paramtypes", [Config, EventAggregator, WebAPI])
    ], ContactList);
    return ContactList;
}());
export { ContactList };
//# sourceMappingURL=contact-list.js.map
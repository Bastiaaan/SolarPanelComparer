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
import { Rest, Config } from 'aurelia-api';
import { ContactViewed, ContactUpdated } from './message';
import { autoinject } from 'aurelia-framework';
var ContactList = (function () {
    function ContactList(api, config, csAPI, ea) {
        var _this = this;
        this.api = api;
        this.config = config;
        this.csAPI = csAPI;
        this.csAPI = config.getEndpoint('api');
        ea.subscribe(ContactViewed, function (msg) { return _this.select(msg.contact); });
        ea.subscribe(ContactUpdated, function (msg) {
            var id = msg.contact.id;
            var found = _this.contacts.find(function (x) { return x.id == id; });
            Object.assign(found, msg.contact);
        });
    }
    ContactList.prototype.created = function () {
        var _this = this;
        this.api.getContactList().then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactList.prototype.select = function (contact) {
        this.selectedId = contact.id;
        return true;
    };
    ContactList = __decorate([
        autoinject,
        __metadata("design:paramtypes", [WebAPI, Config, Rest, EventAggregator])
    ], ContactList);
    return ContactList;
}());
export { ContactList };
//# sourceMappingURL=contact-list.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from '../../web-api';
import { ContactUpdated, ContactViewed } from '../../message';
import { areEqual } from '../../utility';
var ContactDetail = (function () {
    function ContactDetail(api, ea) {
        this.api = api;
        this.ea = ea;
    }
    ContactDetail.prototype.activate = function (params, routeConfig) {
        var _this = this;
        return this.api.getContactDetails(params.id).then(function (contact) {
            _this.contact = contact;
            _this.routeConfig.navModel.setTitle(_this.contact.firstName);
            _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
            _this.ea.publish(new ContactViewed(_this.contact));
        });
    };
    Object.defineProperty(ContactDetail.prototype, "canSave", {
        get: function () {
            return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
        },
        enumerable: true,
        configurable: true
    });
    ContactDetail.prototype.save = function () {
        var _this = this;
        this.api.saveContact(this.contact).then(function (contact) {
            _this.contact = contact;
            _this.routeConfig.navModel.setTitle(_this.contact.firstName);
            _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
            _this.ea.publish(new ContactUpdated(_this.contact));
        });
    };
    ContactDetail.prototype.canDeactivate = function () {
        if (!areEqual(this.originalContact, this.contact)) {
            var result = confirm('you have unsaved changes. Are you wish to leave?');
            if (!result) {
                this.ea.publish(new ContactViewed(this.contact));
            }
            return result;
        }
        return true;
    };
    ContactDetail = __decorate([
        autoinject(WebAPI, EventAggregator),
        __metadata("design:paramtypes", [WebAPI, EventAggregator])
    ], ContactDetail);
    return ContactDetail;
}());
export { ContactDetail };
//# sourceMappingURL=contact-detail.js.map
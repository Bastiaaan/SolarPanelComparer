import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from '../../web-api';
import { ContactUpdated,ContactViewed } from '../../message';
import { areEqual } from '../../utility';

interface Contact {
  firstName: string;
  lastName: string;
  email: string; 
}

@autoinject(WebAPI, EventAggregator)
export class ContactDetail {
  routeConfig;
  contact: Contact;
  originalContact: Contact;

  constructor(private api: WebAPI, private ea: EventAggregator) {  }

  activate(params, routeConfig) {

    return this.api.getContactDetails(params.id).then(contact => {
      this.contact = <Contact>contact;
      this.routeConfig.navModel.setTitle(this.contact.firstName);
      this.originalContact = JSON.parse(JSON.stringify(this.contact));
      this.ea.publish(new ContactViewed(this.contact));
    });
  }

  get canSave() {
    return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
  }

  save() {
    this.api.saveContact(this.contact).then(contact => {
      this.contact = <Contact>contact;
      this.routeConfig.navModel.setTitle(this.contact.firstName);
      this.originalContact = JSON.parse(JSON.stringify(this.contact));
      this.ea.publish(new ContactUpdated(this.contact));
    });
  }

  canDeactivate() {
    if(!areEqual(this.originalContact, this.contact)) {
      let result = confirm('you have unsaved changes. Are you wish to leave?');
      
      if(!result) {
        this.ea.publish(new ContactViewed(this.contact));
      }

      return result;
    }
    
    return true;
  }
}

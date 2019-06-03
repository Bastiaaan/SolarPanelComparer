import {EventAggregator} from 'aurelia-event-aggregator';
import { WebAPI } from './web-api';
import { Rest, Config } from 'aurelia-api';
import {ContactViewed,ContactUpdated} from './message';
import { autoinject } from 'aurelia-framework';
import { ProductViewModel } from './models/product-model';

@autoinject
export class ContactList {
  contacts;
  selectedId;

  constructor(private api: WebAPI, private config: Config, private csAPI: Rest, ea: EventAggregator) {
    this.csAPI = config.getEndpoint('api');
    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id == id);
      Object.assign(found, msg.contact);
    });
  }

  created() {
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }
}

import {EventAggregator} from 'aurelia-event-aggregator';
import { WebAPI } from './web-api';
import { Rest, Config } from 'aurelia-api';
import {ContactViewed,ContactUpdated} from './message';
import { inject } from 'aurelia-framework';
import { ProductViewModel } from './models/product-model';

@inject(WebAPI, EventAggregator)
export class ContactList {
  contacts;
  demoApi: Rest;
  selectedId;
  api: WebAPI;
  products: Array<ProductViewModel> = [];


  constructor(private config: Config, ea: EventAggregator, api: WebAPI) {
    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id == id);
      Object.assign(found, msg.contact);
    });
  }

  obtainProduct() {
    return this.demoApi.find('product', this.products).then((data: Array<ProductViewModel>) => {
      this.products = data;
      console.log('succeeded');
    }).catch(reason => {
      console.log(reason);
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

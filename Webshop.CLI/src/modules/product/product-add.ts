import { inject, bindable } from 'aurelia-framework';
import { Config, Rest } from 'aurelia-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ProductViewModel } from './../../models/product-model';

@inject(EventAggregator, Config)
export class Product {
  @bindable product: ProductViewModel;
  api: Rest;

  constructor(private config: Config, private ea: EventAggregator) {
    if(config.endpointExists('api') === true)
      this.api = config.getEndpoint('api');
  } 

  add() {
    this.api.find('product/SaveProduct').then(product => {
      JSON.parse(JSON.stringify(product));
    });
  }

  update() {

  }

  delete() {

  }

  save() {

  }

}

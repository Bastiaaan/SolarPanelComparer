import { inject, bindable } from 'aurelia-framework';
import { Config, Rest } from 'aurelia-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ProductViewModel } from '../../models/product-model';

@inject(Config, EventAggregator)
export class Product {
  @bindable product: ProductViewModel;
  api: Rest;

  constructor(private config: Config, private ea: EventAggregator) {
    this.api = config.getEndpoint('api');
  } 
  
  save() {
    return this.api.create('/product', this.product)
      .then((product: ProductViewModel) => {
        return product;
      }).catch((error: any) => {
        console.log("error has occured: " + error);
      });
  }

}

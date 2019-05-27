import { Rest, Config } from 'aurelia-api';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ProductViewModel } from '../../models/product-model';
import { autoinject, bindable, inject } from 'aurelia-framework';

@inject(Config, Router)
export class productList {
  @bindable product: ProductViewModel;
  products;
  api: Rest;
  productId;

  constructor(private config: Config) {
    this.api = config.getEndpoint('api');
  }

  attached() {
    this.obtainProduct();
  }
  
  obtainProduct() {
    var results = this.api.request('GET', 'product')
      .then(data => {
      this.products = data;
      console.log('succeeded');
    }).catch(reason => {
      console.log(reason);
      });

    console.log(results);

  }

  select(product: ProductViewModel) {
    return this.api.findOne('product', product.id).then((result: ProductViewModel) => {
      this.product = result;
    }).catch(reason => {
      console.log("Something went wrong: " + reason);
      });
  }
}

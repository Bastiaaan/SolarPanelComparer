import { Rest, Config } from 'aurelia-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ProductViewModel } from '../../models/product-model';
import { inject, bindable } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(EventAggregator, Rest)
export class productList {
  @bindable product: ProductViewModel;
  api: Rest;
  products: Array<ProductViewModel> = [];
  client: HttpClient;
  productId;

  constructor(private config: Config, private _client: HttpClient) {
    this.api = config.getEndpoint('api');    
    this.client = _client;
  }
  
  obtainProduct() {
    return this.api.find('product', this.products).then((data: Array<ProductViewModel>) => {
      this.products = data;
      console.log('succeeded');
    }).catch(reason => {
      console.log(reason);
    });
  }

  select(product) {
    return this.productId = product.id;
  }
}

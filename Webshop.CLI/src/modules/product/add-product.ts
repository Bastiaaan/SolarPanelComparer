import { inject, bindable } from 'aurelia-framework';
import { Config, Rest } from 'aurelia-api';
import { HttpClient, json } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ProductViewModel } from '../../models/product-model';

@inject(Config, EventAggregator)
export class Product {
  @bindable product: ProductViewModel;
  api: Rest;
  client: HttpClient;

  constructor(private config: Config, private ea: EventAggregator, private _client: HttpClient) {
    this.api = config.getEndpoint('api');
    this.client = _client;
  } 
  
  save(product: ProductViewModel): Promise<any> {
    return this.api.create('product', this.product)
      .then((product: ProductViewModel) => {
        return product;
      }).catch((error: any) => {
        console.log("error has occured: " + error);
      });
  }

}

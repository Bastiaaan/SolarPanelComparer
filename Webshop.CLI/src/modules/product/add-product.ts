import { inject, bindable } from 'aurelia-framework';
import { Config, Rest } from 'aurelia-api';
import { HttpClient, json } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';
import { ProductViewModel } from '../../models/product-model';

@inject(Config, EventAggregator, Router)
export class Product {
  @bindable product: ProductViewModel;
  api: Rest;

  constructor(private config: Config, private ea: EventAggregator, private router: Router) {
    this.api = config.getEndpoint('api');
  } 
  
  save(product: ProductViewModel): Promise<any> {
    return this.api.create('product', this.product)
      .then((product: ProductViewModel) => {
        this.router.navigateBack();
      }).catch((error: any) => {
        console.log("error has occured: " + error);
      });
  }

}

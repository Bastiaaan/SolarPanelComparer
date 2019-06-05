import { autoinject, bindable } from 'aurelia-framework';
import { Config, Rest } from 'aurelia-api';
import { HttpClient, json } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';
import { ProductViewModel } from '../../models/product-model';

@autoinject
export class AddProduct {
  product: ProductViewModel;
  api: Rest;

  constructor(private config: Config, private ea: EventAggregator, private router: Router) {
    this.api = config.getEndpoint('api');
  } 

  attached() {
    console.log('I am here!');
  }

  detached() {

  }
  
  save(product: ProductViewModel): Promise<any> {
    return this.api.create('product', this.product)
      .then(product => {
        this.router.navigateToRoute('products');
      }).catch((error: any) => {
        console.log("error has occured: " + error);
      });
  }

}

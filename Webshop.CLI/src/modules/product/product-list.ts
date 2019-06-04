import { Rest, Config } from 'aurelia-api';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ProductViewModel, ProductEditViewModel } from '../../models/product-model';
import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class productList {
  @bindable product: ProductEditViewModel;
  products;
  api: Rest;
  productId: number;
  router: Router;

  constructor(private config: Config, router: Router) {
    this.api = config.getEndpoint('api');
    this.router = router;
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
    this.productId = product.id;
    this.router.navigateToRoute('product', { id: this.productId });
  }
}

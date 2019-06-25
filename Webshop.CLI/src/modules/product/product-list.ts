import { Rest, Config } from 'aurelia-api';
import { Router } from 'aurelia-router';
import { ProductEditViewModel, ProductViewModel } from '../../models/product-model';
import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class productList {
  @bindable productId: number;
  @bindable product: ProductViewModel;
  products;
  api: Rest;
  router: Router;

  constructor(private config: Config, router: Router) {
    this.api = config.getEndpoint('api');
    this.router = router;
  }

  activate() {
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

  select(product: ProductEditViewModel) {
    this.productId = product.id;
  }
}

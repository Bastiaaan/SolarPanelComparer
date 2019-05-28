import { ProductEditViewModel } from '../../models/product-model';
import { Rest, Config } from 'aurelia-api';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { bindable, inject } from 'aurelia-framework';
import { areEqual } from '../../utility';

@inject(Config, Router)
export class ProductDetails {
  @bindable id: number;
  product: ProductEditViewModel;
  originalProduct: ProductEditViewModel;
  api: Rest;
  routeConfig;

  constructor(private config: Config, private router: Router) {
    this.api = config.getEndpoint('api');
  }

  async activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    this.id = Number(params.id);
    return this.api.findOne('product', this.id).then(data => {
      this.product = data;
      this.originalProduct = data;
    }).catch(reason => {
      console.log('Could not fetch data: ' + reason);
    });
  }
  
  canSave() {
    return !areEqual(this.product, this.originalProduct);
  }

  save() {
    if (this.canSave() === true) {
      this.api.update('product', this.product).then(model => {
        this.router.navigateBack();
      }).catch(reason => {
        console.log(reason);
      });
    }
  }
}

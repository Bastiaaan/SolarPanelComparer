import { ProductEditViewModel } from '../../models/product-model';
import { Rest, Config } from 'aurelia-api';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { bindable, autoinject } from 'aurelia-framework';
import { areEqual } from '../../utility';

@autoinject
export class ProductDetails {
  @bindable id: number;
  product: ProductEditViewModel;
  originalProduct: ProductEditViewModel;
  api: Rest;

  constructor(private config: Config, private router: Router, private ea: EventAggregator) {
    this.api = config.getEndpoint('api');
  }

  activate(params) {
    this.id = params.id;
    return this.api.findOne('product', this.id).then(data => {
      this.product = data;
      this.originalProduct = data;
    }).then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          let product = this.product;
          resolve(JSON.parse(JSON.stringify(product)));
        }, 200);
      })
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

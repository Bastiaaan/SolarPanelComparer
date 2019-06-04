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
      this.originalProduct = JSON.parse(JSON.stringify(this.product));
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
    if (!areEqual(JSON.parse(JSON.stringify(this.product)), this.originalProduct)) {
      this.api.updateOne('product', this.product.id, null, this.product).then(model => {
        this.router.navigateToRoute('/');
      }).catch(reason => {
        console.log(reason);
      });
    } else {
      debugger;
      console.log(JSON.parse('From form: '+this.product)+' original: '+JSON.parse(JSON.stringify(this.originalProduct)));
    }
  }
}

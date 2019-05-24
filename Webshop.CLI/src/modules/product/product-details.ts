import { ProductViewModel } from '../../models/product-model';
import { Rest } from 'aurelia-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { bindable } from 'aurelia-framework';

export class ProductDetails {
  @bindable id: number;
  product: ProductViewModel;
  api: Rest;

  constructor(private rest: Rest) {
    this.api = rest;
  }

  getViewModel() {
    return this.api.find('product', this.id).then(data => {
      this.product = data;
    });
  }
}

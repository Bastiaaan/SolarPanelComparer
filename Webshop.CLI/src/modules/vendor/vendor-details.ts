import { Rest, Config} from 'aurelia-api';
import { bindable, autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { VendorViewModel, VendorEditViewModel } from '../../models/Vendor-model';
import { ProductViewModel } from '../../models/product-model';
import { Router } from 'aurelia-router';

@autoinject
export class VendorDetails {
  @bindable id: number;
  vendor: VendorEditViewModel;
  products: Array<ProductViewModel>;
  api: Rest;
  router: Router;

  constructor(private config: Config, router: Router) {
    this.api = config.getEndpoint('api');
    this.router = router;
  }

  attached() {
    this.obtainVendor();
    this.getProducts();
  }

  getProducts() {
    this.api.request('GET', 'product').then((data: ProductViewModel[]) => {
      this.products = data;
    }).catch(reason => {
      console.log(reason);
    });
  }

  obtainVendor() {
    this.api.findOne('vendor', this.id).then((data: VendorEditViewModel) => {
      this.vendor = data;
      this.id = this.vendor.id;
    }).catch(reason => {
      console.log("Unable to fetch data: " + reason);
    });
  }

  idChanged() {
    this.obtainVendor();
  }

  navigateBack() {
    this.router.navigateBack();
  }

  selectProduct(productId) {
    if (this.vendor.productIds === undefined) { 
      this.vendor.productIds = [];
    }

    this.vendor.productIds[this.vendor.productIds.length] = productId;
    console.log(this.vendor.productIds.length);
  }

  save(vendor: VendorViewModel) {
    this.api.updateOne('vendor', this.vendor.id, null, this.vendor).then(response => {
      this.router.navigateBack();
    }).catch(reason => {
      console.log(reason);
    });
  }

}

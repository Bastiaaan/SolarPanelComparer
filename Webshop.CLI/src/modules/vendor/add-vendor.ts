import { VendorViewModel } from '../../models/Vendor-model';
import { Rest, Config } from 'aurelia-api';
import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export class AddVendor {
  toInsert: VendorViewModel;
  api: Rest;

  constructor(private config: Config, private router: Router) {
    this.api = config.getEndpoint('api');
  }

  attached() {

  }

  save(): Promise<any> {
    return this.api.create('vendor', this.toInsert)
      .then(() => {
      this.router.navigateToRoute('vendors');
    }).catch((reason: any) => {
      console.log(reason);
    });
  }
}

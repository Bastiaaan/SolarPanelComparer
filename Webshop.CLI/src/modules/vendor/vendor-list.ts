import { VendorViewModel } from '../../models/Vendor-model';
import { autoinject, bindable } from 'aurelia-framework';
import { Rest, Config } from 'aurelia-api';
import { Router } from 'aurelia-router'; 

@autoinject
export class VendorList {
  @bindable vendorId: number;
  @bindable vendor: VendorViewModel;
  vendors: Array<VendorViewModel> = [];
  api: Rest;
  errorMsg: string = null;

  constructor(private config: Config) {
    this.api = config.getEndpoint('api');
  }

  activate() {
    this.GetVendors();
  }

  GetVendors() {
    this.api.request('GET', 'vendor').then((data: Array<VendorViewModel>) => {
      this.vendors = data;
      if (this.vendors.length === 0) {
        this.errorMsg = 'Geen verkopers gevonden';
      }
    }).catch(reason => {
      console.log('Could not obtain vendors: ' + reason);
      this.errorMsg = 'Geen verkopers gevonden';
      });
  }

  select(vendor: VendorViewModel) {
    this.vendorId = vendor.id;
    this.vendor = vendor;
  }
}

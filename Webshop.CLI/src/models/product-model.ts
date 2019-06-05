import { autoinject, bindable } from 'aurelia-framework';
import { Config } from 'aurelia-api';
import { ValidationRules } from 'aurelia-validation';
import { ProductVendorViewModel } from './product-vendor-model';

export class ProductViewModel
{
  id: number;
  name: string;
  description: string = null;
  productVendors: Array<ProductVendorViewModel>;
  amountOfVendors: number = this.productVendors.length;
}

export class ProductEditViewModel {
  id: number;
  name: string;
  description: string = null;
}


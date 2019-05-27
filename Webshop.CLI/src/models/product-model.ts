import { inject, bindable } from 'aurelia-framework';
import { Config } from 'aurelia-api';
import { ValidationRules } from 'aurelia-validation';
import { ProductVendorViewModel } from './product-vendor-model';

export class ProductViewModel
{
  id: number = 0;
  name: string = null;
  amountOfVendors: number = 0;
  productVendors: Array<ProductVendorViewModel> = null;
}


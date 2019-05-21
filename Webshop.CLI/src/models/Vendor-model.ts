﻿import { ProductViewModel } from './product-model';
import { ProductVendorViewModel } from './product-vendor-model';

export class VendorViewModel {
  id: number = 0;
  name: string = null;
  products: ProductVendorViewModel[] = [];
}

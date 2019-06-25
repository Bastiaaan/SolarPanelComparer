import { ProductViewModel } from './product-model';
import { ProductVendorViewModel } from './product-vendor-model';

export class VendorViewModel {
  id: number = 0;
  name: string = null;
  address: string;
  amountOfProducts: ProductVendorViewModel[] = [];
}

export class VendorEditViewModel {
  id: number;
  name: string;
  address: string;
  productIds: number[] = [];
}

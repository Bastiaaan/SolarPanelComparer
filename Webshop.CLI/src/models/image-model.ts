import { ProductViewModel } from './product-model';
import { VendorViewModel } from './vendor-model';

export class ImageViewModel {
  id: number = 0;
  name: string;
  mimeType: string;
  imageData: Int8Array;
  imageSize: number = 0;
}

export class ProductImageViewModel extends ImageViewModel {
  product: ProductViewModel;
}



export class VendorImageViewModel extends ImageViewModel {
  vendor: VendorViewModel;
}

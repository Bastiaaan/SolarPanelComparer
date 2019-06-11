import { VendorViewModel } from "./Vendor-model";
import { ProductViewModel } from "./product-model";
import { ImageViewModel } from "./image-model";

export class ProductVendorViewModel
{
  productId: number = 0;
  vendorId: number = 0;
  vendor: VendorViewModel = null;
  product: ProductViewModel = null;
  price: number = 0;
  imageUrl: string = "";
  productImages: Array<ImageViewModel> = [];
}

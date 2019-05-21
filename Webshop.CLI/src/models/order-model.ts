import { bindable } from "aurelia-framework";
import { ProductViewModel } from "./product-model";

export class order_model
{
  id: number = 0;
  name: string = null;
  product: ProductViewModel = null;
}

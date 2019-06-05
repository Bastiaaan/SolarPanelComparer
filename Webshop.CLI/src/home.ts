import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Home {
  constructor(private router: Router) { }

  activate() {

  }

  goToProducts() {
    this.router.navigateToRoute("products");
  }

  goToVendors() {
    this.router.navigateToRoute("vendors");
  }
}

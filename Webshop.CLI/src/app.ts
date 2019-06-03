import {Router, RouterConfiguration} from 'aurelia-router';
import {autoinject, PLATFORM} from 'aurelia-framework';
import { Rest } from 'aurelia-api';

@autoinject(Rest)
export class App {
  router: Router;

  constructor(public api: Rest) {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.root = '/';
    config.options.pushState = true;
    config.title = 'Webshop APP';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select' },
      { route: 'contacts/:id', moduleId: PLATFORM.moduleName('modules/contacts/contact-detail'), nav: false, name: 'contacts' },
      { route: 'product/create', moduleId: PLATFORM.moduleName('modules/product/add-product'), nav: true, name: 'new-product', title: 'new product' },
      { route: 'vendor/create', moduleId: PLATFORM.moduleName('modules/vendor/add-vendor'), nav: true, name: 'new-vendor', title: 'new vendor' },
      { route: 'product/:id', moduleId: PLATFORM.moduleName('modules/product/product-details'), nav: false, name: 'product', title: 'check product' }
    ]);

    this.router = router;
    this.router.configure(config);
  }
}

import {Router, RouterConfiguration} from 'aurelia-router';
import {inject, PLATFORM} from 'aurelia-framework';
import { Rest } from 'aurelia-api';

@inject(Rest)
export class App {
  router: Router;

  constructor(public api: Rest) {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.root = '/';
    config.options.pushState = true;
    config.title = 'Webshop APP';
    config.map([
      { route: '',              moduleId: PLATFORM.moduleName('no-selection'),   title: 'Select' },
      { route: 'contacts/:id', moduleId: PLATFORM.moduleName('modules/contacts/contact-detail'), name: 'contacts' },
      { route: 'product', moduleId: PLATFORM.moduleName('modules/product/add-product'), nav: true, name: 'product', title: 'new product' }
    ]);

    this.router = router;
    this.router.configure(config);
  }
}

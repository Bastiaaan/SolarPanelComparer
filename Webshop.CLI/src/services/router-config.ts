import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject, PLATFORM } from 'aurelia-framework';

@autoinject
export class AppRouterConfig {
  router: Router
  constructor(router: Router) {
    this.router = router;
  }

  public async configure() {
    var routerConfig = function(config: RouterConfiguration) {
      config.options.root = '/';
      config.options.pushState = true;
      config.title = 'Webshop APP';
      config.map([
        { route: ['', '/', '#', 'home', '/home'], moduleId: PLATFORM.moduleName('home'), name: 'home', nav: false, title: 'home' },
        { route: 'contacts/:id', moduleId: PLATFORM.moduleName('modules/contacts/contact-detail'), nav: false, name: 'contacts' },
        { route: 'vendors', moduleId: PLATFORM.moduleName('modules/vendor/vendor-list'), nav: true, name: 'vendors', title: 'overview' },
        { route: 'products', moduleId: PLATFORM.moduleName('modules/product/product-list'), nav: true, name: 'products', title: 'overview' },
        { route: 'vendor/:id', moduleId: PLATFORM.moduleName('modules/vendor/vendor-details'), nav: false, name: 'vendor', title: 'view vendor' },
        { route: 'product/:id', moduleId: PLATFORM.moduleName('modules/product/product-details'), nav: false, name: 'product', title: 'check product' }
      ]);

      return config;
    }

    this.router.configure(routerConfig);
  }
}

import { Router, RouterConfiguration } from 'aurelia-router';
import { AppRouterConfig } from './services/router-config';
import {autoinject, PLATFORM} from 'aurelia-framework';
import { Rest } from 'aurelia-api';

@autoinject
export class App {
  router: Router;

  constructor(public api: Rest, private routerConfig: AppRouterConfig) {}

  async activate() {
    await this.routerConfig.configure();
  }
}

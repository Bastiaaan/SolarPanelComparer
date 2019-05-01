import 'core-js/stable';
import 'bootstrap/dist/css/bootstrap.css';
import { Aurelia } from 'aurelia-framework';
import { Config } from 'aurelia-api';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin('aurelia-api', (config: Config) => {
      config
        .registerEndpoint('api', environment.apiEndpoint)
        .registerEndpoint('identity', environment.identityEndpoint)
        .setDefaultEndpoint('api')
    });

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if(environment.testing) {
    aurelia.use.developmentLogging(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot());
}

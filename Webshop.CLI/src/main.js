import 'core-js/stable';
import 'bootstrap/dist/css/bootstrap.css';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature(PLATFORM.moduleName('resources/index'))
        .plugin('aurelia-api', function (config) {
        config
            .registerEndpoint('api', environment.apiEndpoint)
            .registerEndpoint('identity', environment.identityEndpoint)
            .setDefaultEndpoint('api');
    });
    aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');
    if (environment.testing) {
        aurelia.use.developmentLogging(PLATFORM.moduleName('aurelia-testing'));
    }
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
//# sourceMappingURL=main.js.map
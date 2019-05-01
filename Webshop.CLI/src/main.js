import 'core-js/stable';
import 'bootstrap/dist/css/bootstrap.css';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature(PLATFORM.moduleName('resources/index'));
    aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');
    if (environment.testing) {
        aurelia.use.developmentLogging(PLATFORM.moduleName('aurelia-testing'));
    }
    aurelia.start().then(function () { return aurelia.setRoot(PLATFORM.moduleName('app')); });
}
//# sourceMappingURL=main.js.map
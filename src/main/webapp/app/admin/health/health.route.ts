import { Route } from '@angular/router';

import { IfrisHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'ifris-health',
    component: IfrisHealthCheckComponent,
    data: {
        pageTitle: 'Health Checks'
    }
};

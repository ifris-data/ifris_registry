import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JHipsterRegistrySharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    UserMgmtComponent,
    UserMgmtDetailComponent,
    UserMgmtUpdateComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    IfrisMetricsMonitoringComponent,
    IfrisHealthModalComponent,
    IfrisHealthCheckComponent,
    IfrisConfigurationComponent,
    IfrisDocsComponent,
    IfrisGatewayComponent
} from './';

@NgModule({
    imports: [
        JHipsterRegistrySharedModule,
        RouterModule.forChild(adminState)
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        UserMgmtComponent,
        UserMgmtDetailComponent,
        UserMgmtUpdateComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        IfrisConfigurationComponent,
        IfrisHealthCheckComponent,
        IfrisHealthModalComponent,
        IfrisDocsComponent,
        IfrisGatewayComponent,
        IfrisMetricsMonitoringComponent
    ],
    entryComponents: [UserMgmtDeleteDialogComponent, IfrisHealthModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterRegistryAdminModule {}

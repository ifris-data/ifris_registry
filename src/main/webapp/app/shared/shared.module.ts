import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    JHipsterRegistrySharedLibsModule,
    JHipsterRegistrySharedCommonModule,
    IfrisLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [JHipsterRegistrySharedLibsModule, JHipsterRegistrySharedCommonModule],
    declarations: [IfrisLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [IfrisLoginModalComponent],
    exports: [JHipsterRegistrySharedCommonModule, IfrisLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterRegistrySharedModule {
    static forRoot() {
        return {
            ngModule: JHipsterRegistrySharedModule
        };
    }
}

import { NgModule } from '@angular/core';

import { JHipsterRegistrySharedLibsModule, IfrisAlertComponent, IfrisAlertErrorComponent } from './';

@NgModule({
    imports: [JHipsterRegistrySharedLibsModule],
    declarations: [IfrisAlertComponent, IfrisAlertErrorComponent],
    exports: [JHipsterRegistrySharedLibsModule, IfrisAlertComponent, IfrisAlertErrorComponent]
})
export class JHipsterRegistrySharedCommonModule {}

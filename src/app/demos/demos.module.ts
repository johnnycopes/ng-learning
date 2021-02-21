import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";

import { DemoComponent } from './demo.component';
import { GlobalEventListenersComponent } from './global-event-listeners/global-event-listeners-demo.component';
import { HeadlessComponentsComponent } from './headless-components/headless-components.component';
import { HoldableDemoComponent } from './holdable-demo/holdable-demo.component';
import { NgTemplateOutletCustomizationComponent } from './ng-template-outlet-customization/ng-template-outlet-customization.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';



@NgModule({
  declarations: [
    DemoComponent,
    GlobalEventListenersComponent,
    HeadlessComponentsComponent,
    HoldableDemoComponent,
    NgTemplateOutletCustomizationComponent,
    StructuralDirectivesComponent,
  ],
  exports: [
    DemoComponent,
    GlobalEventListenersComponent,
    HeadlessComponentsComponent,
    HoldableDemoComponent,
    NgTemplateOutletCustomizationComponent,
    StructuralDirectivesComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class DemosModule { }

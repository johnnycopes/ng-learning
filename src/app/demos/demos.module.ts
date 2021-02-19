import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";

import { GlobalEventListenersDemoComponent } from './global-event-listeners-demo/global-event-listeners-demo.component';
import { HeadlessComponentsComponent } from './headless-components/headless-components.component';
import { HoldableDemoComponent } from './holdable-demo/holdable-demo.component';
import { NgTemplateOutletDemoComponent } from './ng-template-outlet-demo/ng-template-outlet-demo.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';



@NgModule({
  declarations: [
    GlobalEventListenersDemoComponent,
    HeadlessComponentsComponent,
    HoldableDemoComponent,
    NgTemplateOutletDemoComponent,
    StructuralDirectivesComponent,
  ],
  exports: [
    GlobalEventListenersDemoComponent,
    HeadlessComponentsComponent,
    HoldableDemoComponent,
    NgTemplateOutletDemoComponent,
    StructuralDirectivesComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class DemosModule { }

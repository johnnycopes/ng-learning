import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

import { DemoComponent } from './demo.component';
import { GlobalEventListenersComponent } from './global-event-listeners/global-event-listeners-demo.component';
import { HeadlessComponentsComponent } from './headless-components/headless-components.component';
import { HoldableDemoComponent } from './holdable-demo/holdable-demo.component';
import { NgTemplateOutletCustomizationComponent } from './ng-template-outlet-customization/ng-template-outlet-customization.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { TemplateDrivenHeroFormComponent } from './template-driven-hero-form/template-driven-hero-form.component';



@NgModule({
  declarations: [
    DemoComponent,
    GlobalEventListenersComponent,
    HeadlessComponentsComponent,
    HoldableDemoComponent,
    NgTemplateOutletCustomizationComponent,
    StructuralDirectivesComponent,
    TemplateDrivenHeroFormComponent,
  ],
  exports: [
    DemoComponent,
    GlobalEventListenersComponent,
    HeadlessComponentsComponent,
    HoldableDemoComponent,
    NgTemplateOutletCustomizationComponent,
    StructuralDirectivesComponent,
    TemplateDrivenHeroFormComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
  ]
})
export class DemosModule { }

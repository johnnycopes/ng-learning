import { IDemo } from "./demo.interface";
import { HoldableDemoComponent } from "./holdable-demo/holdable-demo.component";
import { NgTemplateOutletDemoComponent } from "./ng-template-outlet-demo/ng-template-outlet-demo.component";
import { StructuralDirectivesComponent } from "./structural-directives/structural-directives.component";
import { HeadlessComponentsComponent } from "./headless-components/headless-components.component";
import { GlobalEventListenersDemoComponent } from "./global-event-listeners-demo/global-event-listeners-demo.component";

export const DEMOS: IDemo[] = [
  {
    name: "Holdable Directive",
    path: "01-holdable",
    description: "blah",
    resource: "blah",
    component: HoldableDemoComponent,
  },
  {
    name: "NgTemplateOutlet Customization",
    path: "02-ng-template-outlet",
    description: "blah",
    resource: "blah",
    component: NgTemplateOutletDemoComponent,
  },
  {
    name: "Structural Directives",
    path: "03-structural-directives",
    description: "blah",
    resource: "blah",
    component: StructuralDirectivesComponent,
  },
  {
    name: "Headless Angular Components",
    path: "04-headless-components",
    description: "blah",
    resource: "blah",
    component: HeadlessComponentsComponent,
  },
  {
    name: "Global Event Listeners",
    path: "05-global-event-listeners",
    description: "blah",
    resource: "blah",
    component: GlobalEventListenersDemoComponent,
  }
];

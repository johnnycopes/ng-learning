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
    resource: "https://www.youtube.com/watch?v=kl-UMCHpEsw",
    component: HoldableDemoComponent,
  },
  {
    name: "NgTemplateOutlet Customization",
    path: "02-ng-template-outlet",
    resource: "https://indepth.dev/posts/1405/ngtemplateoutlet",
    component: NgTemplateOutletDemoComponent,
  },
  {
    name: "Structural Directives",
    path: "03-structural-directives",
    resource: "https://angular.io/guide/structural-directives#structural-directives",
    component: StructuralDirectivesComponent,
  },
  {
    name: "Headless Angular Components",
    path: "04-headless-components",
    resource: "https://indepth.dev/posts/1416/headless-angular-components",
    component: HeadlessComponentsComponent,
  },
  {
    name: "Global Event Listeners",
    path: "05-global-event-listeners",
    resource: "https://indepth.dev/posts/1410/simple-angular-context-help-component-or-how-global-event-listener-can-affect-your-performance",
    component: GlobalEventListenersDemoComponent,
  }
];

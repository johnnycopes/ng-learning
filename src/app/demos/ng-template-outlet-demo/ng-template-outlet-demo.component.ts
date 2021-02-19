import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-demo',
  templateUrl: './ng-template-outlet-demo.component.html',
  styleUrls: ['./ng-template-outlet-demo.component.scss']
})
export class NgTemplateOutletDemoComponent {
  public sharks = ["Great white", "Hammerhead", "Tiger", "Razor"];
  public selectedShark: string | undefined;
}

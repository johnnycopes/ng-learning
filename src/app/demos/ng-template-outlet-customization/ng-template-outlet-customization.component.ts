import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-customization',
  templateUrl: './ng-template-outlet-customization.component.html',
  styleUrls: ['./ng-template-outlet-customization.component.scss']
})
export class NgTemplateOutletCustomizationComponent {
  public sharks = ["Great white", "Hammerhead", "Tiger", "Razor"];
  public selectedShark: string | undefined;
}

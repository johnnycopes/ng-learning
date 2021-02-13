import { Component } from '@angular/core';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLaughWink } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public timeHeld: number = 0;

  public onHold(time: number): void {
    this.timeHeld = time;
  }

  public sharks = ["Great white", "Hammerhead", "Tiger", "Razor"];
  public selectedShark: string | undefined;
}

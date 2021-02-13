import { Component } from '@angular/core';

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

  public bool: boolean = true;
}

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
}

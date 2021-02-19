import { Component } from '@angular/core';

@Component({
  selector: 'app-holdable-demo',
  templateUrl: './holdable-demo.component.html',
  styleUrls: ['./holdable-demo.component.scss']
})
export class HoldableDemoComponent {
  public timeHeld: number = 0;

  public onHold(time: number): void {
    this.timeHeld = time;
  }
}

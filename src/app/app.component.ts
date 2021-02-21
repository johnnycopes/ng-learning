import { Component } from '@angular/core';
import { DEMOS } from "./demos/demos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public demos = DEMOS;
}

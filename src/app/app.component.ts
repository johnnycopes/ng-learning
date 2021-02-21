import { Component } from '@angular/core';
import { IDemo } from "./demos/demo.interface";
import { DemoService } from "./demos/demo.service";
import { DEMOS } from "./demos/demos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public demos = DEMOS;
}

import { Component, OnInit } from '@angular/core';
import { generateArray } from "../../utilities/generate-array";

@Component({
  selector: 'app-global-event-listeners-demo',
  templateUrl: './global-event-listeners-demo.component.html',
  styleUrls: ['./global-event-listeners-demo.component.scss']
})
export class GlobalEventListenersDemoComponent implements OnInit {

  public numbers = generateArray(10);

  constructor() { }

  ngOnInit(): void {
  }

}

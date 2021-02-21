import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DemoService } from "./demo.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  public demo$ = this._demoService.activeDemo$;

  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
  }

}

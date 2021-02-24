import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

  @HostBinding("class.app-button--disabled")
  @HostBinding("disabled")
  @Input() disabled: boolean = false;

  @HostBinding("class")
  public hostClass: string = "app-button";

  @HostBinding("attr.type")
  @Input() type: "button" | "submit" = "button";

  constructor() { }

  ngOnInit(): void {
  }

}

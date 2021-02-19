import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

export interface ISelectorOption {
  $implicit: string;
  index: number;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() selected: string | undefined;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter();

  @ContentChild(TemplateRef)
  public optionTemplate: TemplateRef<ISelectorOption> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public selectOption(option: string): void {
    this.selectedChange.emit(option);
  }

}

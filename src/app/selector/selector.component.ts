import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() selected: string | undefined;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public selectOption(option: string): void {
    this.selectedChange.emit(option);
  }

}

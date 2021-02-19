import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent, Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output("appClickOutside") public clickOutside: EventEmitter<void> = new EventEmitter();

  private _subscription: Subscription = new Subscription();

  constructor(
    private _elementRef: ElementRef,
  ) { }

  public ngOnInit(): void {
    // Wait before subscribing to void emitting event if the component uses *ngIf
    requestAnimationFrame(() => {
      const clickSub = fromEvent<MouseEvent>(document, "click")
        .pipe(
          filter((event) => !this._isClickInside(event))
        )
        .subscribe(() => this.clickOutside.emit());
      const escapeSub = fromEvent<KeyboardEvent>(document, "keydown")
        .pipe(
          filter((event) => event.key === "Escape")
        )
        .subscribe(() => this.clickOutside.emit());

      this._subscription.add(clickSub);
      this._subscription.add(escapeSub);
    });
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private _isClickInside(event: MouseEvent): boolean {
    const el = this._elementRef.nativeElement;
    return el === event.target || el.contains(event.target);
  }

}

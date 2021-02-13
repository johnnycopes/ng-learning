import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {
  @Input()
  set appUnless(condition: boolean) {
    if (!condition && !this._hasView) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this._hasView = true;
    } else if (condition && this._hasView) {
      this._viewContainer.clear();
      this._hasView = false;
    }
  }
  private _hasView = false;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) { }

  public ngOnInit(): void {
    console.log(this._templateRef);
    console.log(this._viewContainer);
  }

}

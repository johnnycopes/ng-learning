import { Directive, TemplateRef } from '@angular/core';

export interface IFileSelectContext {
  $implicit: () => void;
}

@Directive({
  selector: '[appFileSelectDef]'
})
export class FileSelectDefDirective {

  constructor(
    public template: TemplateRef<IFileSelectContext>
  ) { }

}

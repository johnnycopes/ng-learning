import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ButtonComponent } from "./button/button.component";
import { ClickOutsideDirective } from "./click-outside.directive";
import { FileSelectDefDirective } from "./file-select/file-select-def.directive";
import { FileSelectComponent } from "./file-select/file-select.component";
import { HelpContextComponent } from "./help-context/help-context.component";
import { HoldableDirective } from "./holdable.directive";
import { SelectorComponent } from "./selector/selector.component";
import { UnlessDirective } from "./unless.directive";

@NgModule({
  declarations: [
    ButtonComponent,
    ClickOutsideDirective,
    FileSelectComponent,
    FileSelectDefDirective,
    HelpContextComponent,
    HoldableDirective,
    SelectorComponent,
    UnlessDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    ButtonComponent,
    ClickOutsideDirective,
    FileSelectComponent,
    FileSelectDefDirective,
    HelpContextComponent,
    HoldableDirective,
    SelectorComponent,
    UnlessDirective,
  ],
})
export class SharedModule { }

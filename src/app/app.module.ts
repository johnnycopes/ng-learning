import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoldableDirective } from './holdable.directive';
import { ButtonComponent } from './button/button.component';
import { SelectorComponent } from './selector/selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UnlessDirective } from './unless.directive';
import { FileSelectComponent } from './file-select/file-select.component';
import { FileSelectDefDirective } from './file-select/file-select-def.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoldableDirective,
    ButtonComponent,
    SelectorComponent,
    UnlessDirective,
    FileSelectComponent,
    FileSelectDefDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

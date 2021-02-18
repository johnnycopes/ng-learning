import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FileSelectComponent } from './file-select/file-select.component';
import { FileSelectDefDirective } from './file-select/file-select-def.directive';
import { HelpContextComponent } from './help-context/help-context.component';
import { HoldableDirective } from './holdable.directive';
import { SelectorComponent } from './selector/selector.component';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FileSelectComponent,
    FileSelectDefDirective,
    HelpContextComponent,
    HoldableDirective,
    SelectorComponent,
    UnlessDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

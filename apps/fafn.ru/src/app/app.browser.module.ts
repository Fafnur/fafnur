import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerModule } from '@loaney/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, BrowserAnimationsModule, HammerModule],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}

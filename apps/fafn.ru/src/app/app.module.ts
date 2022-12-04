import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocalizationModule } from '@fafnur/russia/localization';

import { AppComponent } from './app.component';
import { AppCoreModule } from './app.core.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'fafnru' }), AppCoreModule, AppRoutingModule, LocalizationModule],
  declarations: [AppComponent],
})
export class AppModule {}

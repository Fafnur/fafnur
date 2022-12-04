import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

import { RussianNativeDateAdapter } from './native.data-adapter';

registerLocaleData(localeRu);

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru-RU',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'RUB',
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'ru-RU',
    },
    {
      provide: DateAdapter,
      useClass: RussianNativeDateAdapter,
    },
  ],
})
export class LocalizationModule {}

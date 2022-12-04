import { NgModule } from '@angular/core';
import { API_CONFIG, ENVIRONMENTS } from '@loaney/core';
import { ApiConfig } from '@loaney/core/lib/api/api.service';

import { environment } from '../environments/environment';

@NgModule({
  imports: [],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
    {
      provide: API_CONFIG,
      useValue: {
        host: '',
      } as Partial<ApiConfig>,
    },
  ],
})
export class AppCoreModule {}

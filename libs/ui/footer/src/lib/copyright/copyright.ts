import { Component } from '@angular/core';

@Component({
  selector: 'fafnur-copyright',
  templateUrl: './copyright.html',
  host: {
    class: 'flex justify-center mt-5',
  },
})
export class Copyright {
  readonly year = new Date().getFullYear();
}

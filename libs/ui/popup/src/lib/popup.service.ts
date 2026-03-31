import {
  ApplicationRef,
  createComponent,
  DOCUMENT,
  EnvironmentInjector,
  inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { Subject } from 'rxjs';

import { POPUP_DATA, POPUP_REF, PopupOptions } from './popup.type';
import { Popup, PopupRef } from './popup/popup';

let uniqueId = 0;

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private readonly injector = inject(Injector);
  private readonly document = inject(DOCUMENT);
  private readonly applicationRef = inject(ApplicationRef);
  private readonly environmentInjector = inject(EnvironmentInjector);

  private readonly map = new Map<string, PopupRef<unknown>>();

  has(): boolean {
    return this.map.size > 0;
  }

  hasPopup(widgetId: string): boolean {
    return this.map.has(widgetId);
  }

  open<T>(component: Type<unknown>, options?: PopupOptions): PopupRef<T> {
    const widgetId = String(++uniqueId);

    const componentRef = createComponent(Popup, {
      environmentInjector: this.environmentInjector,
    });

    const childInjector = Injector.create({
      providers: [
        {
          provide: POPUP_REF,
          useValue: componentRef.instance,
        },
        {
          provide: POPUP_DATA,
          useValue: options?.data,
        },
      ],
      parent: this.injector,
    });

    componentRef.setInput('child', component);
    componentRef.setInput('injector', childInjector);
    componentRef.setInput('options', options ?? {});

    this.applicationRef.attachView(componentRef.hostView);
    this.document.body.appendChild(componentRef.location.nativeElement);

    const subject = new Subject<T | undefined>();
    const ref = { ref: componentRef.instance, closed: subject.asObservable(), widgetId };
    this.map.set(widgetId, ref);

    componentRef.instance.closed.subscribe((value) => {
      this.applicationRef.detachView(componentRef.hostView);
      componentRef.location.nativeElement.remove();
      componentRef.destroy();
      subject.next(value as T | undefined);
      subject.complete();
      this.map.delete(widgetId);
    });

    return ref;
  }

  close(): void {
    this.map.forEach((componentRef) => componentRef.ref.onClose());
  }
}
